package com.huacainfo.ace.partyschool.service.impl;

import com.huacainfo.ace.common.constant.ResultCode;
import com.huacainfo.ace.common.exception.CustomException;
import com.huacainfo.ace.common.model.UserProp;
import com.huacainfo.ace.common.model.Userinfo;
import com.huacainfo.ace.common.result.MessageResponse;
import com.huacainfo.ace.common.result.ResultResponse;
import com.huacainfo.ace.common.tools.CommonBeanUtils;
import com.huacainfo.ace.common.tools.CommonUtils;
import com.huacainfo.ace.common.tools.GUIDUtil;
import com.huacainfo.ace.partyschool.constant.CommConstant;
import com.huacainfo.ace.partyschool.dao.SignDao;
import com.huacainfo.ace.partyschool.service.SignService;
import com.huacainfo.ace.partyschool.service.StudentService;
import com.huacainfo.ace.partyschool.service.TeacherService;
import com.huacainfo.ace.partyschool.vo.StudentVo;
import com.huacainfo.ace.partyschool.vo.TeacherVo;
import com.huacainfo.ace.portal.model.TaskCmcc;
import com.huacainfo.ace.portal.model.Users;
import com.huacainfo.ace.portal.service.TaskCmccService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @Auther: Arvin
 * @Date: 2019/1/3 09:59
 * @Description:
 */
@Service("signService")
public class SignServiceImpl implements SignService {

    @Autowired
    private SignDao signDao;

    @Autowired
    private TaskCmccService taskCmccService;
    @Autowired
    private StudentService studentService;
    @Autowired
    private TeacherService teacherService;

    /**
     * 校验手机号码是否已注册过
     *
     * @param mobile 手机号码
     * @return t/f
     */
    @Override
    public boolean isExistByMobile(String mobile) {

        int temp = signDao.isExistByMobile(mobile);

        return temp > 0;
    }

    /**
     * 学员报名&注册
     *
     * @param data     name 姓名
     *                 mobile 手机号
     *                 idCard 身份证
     *                 political 政治面貌  normal-普通学员 party -党员
     *                 workUnitName 单位
     *                 postName 职务
     *                 classId 班级
     * @param userinfo 微信鉴权信息
     * @return ResultResponse
     */
    @Override
    public ResultResponse addNewStudent(StudentVo data, Userinfo userinfo) throws Exception {
        boolean isBindWx = "1".equals(data.getIsBindWx());
        String uid = isBindWx ? userinfo.getUnionid() : GUIDUtil.getGUID();
        data.setId(uid);

        //注册portal.users
        String regType = CommConstant.STUDENT;
        String openId = isBindWx ? userinfo.getUnionid() : "";
        String name = data.getName();
        String account = data.getSignAcct();
        String pwd = data.getSingPwd();
        String mobile = data.getMobile();
        String sex = String.valueOf(getCarInfo(data.getIdCard()).get("sex"));
        String sysId = "partyschool";
        String deptId = "0004";
        String roleId = "ede24712-e13c-47d5-8cab-fd54589e3fe1";//select * from portal.role t where t.syid='partyschool'
        MessageResponse ms2 = insertUsers(regType, uid, openId, name, account, pwd, mobile, sex, sysId, deptId, roleId);
        if (ResultCode.FAIL == ms2.getStatus()) {
            return new ResultResponse(ms2);
        }

        //注册学员信息
        MessageResponse ms = studentService.insertStudent(data, sysUser());
        if (ResultCode.FAIL == ms.getStatus()) {
            throw new CustomException(ms.getErrorMessage());
        }

        return new ResultResponse(ResultCode.SUCCESS, "注册完成");
    }

    /**
     * 教职工注册
     *
     * @param data     name 姓名
     *                 mobile 手机号
     *                 idCard 身份证
     * @param userinfo 微信鉴权信息
     * @return ResultResponse
     */
    @Override
    public ResultResponse addNewTeacher(TeacherVo data, Userinfo userinfo) throws Exception {
        //保持2个表的ID一致
        boolean isBindWx = "1".equals(data.getIsBindWx());
        String uid = isBindWx ? userinfo.getUnionid() : GUIDUtil.getGUID();
        data.setId(uid);

        //注册portal.users
        String regType = CommConstant.TEACHER;
        String openId = isBindWx ? userinfo.getUnionid() : "";
        String name = data.getName();
        String account = data.getSignAcct();
        String pwd = data.getSingPwd();
        String mobile = data.getMobile();
        String sex = String.valueOf(getCarInfo(data.getIdCard()).get("sex"));
        String sysId = "partyschool";
        String deptId = "0004";
        String roleId = "9f8f9043-73e1-4438-bf8a-ef681431df74";//select * from portal.role t where t.syid='partyschool'
        MessageResponse ms2 = insertUsers(regType, uid, openId, name, account, pwd, mobile, sex, sysId, deptId, roleId);
        if (ResultCode.FAIL == ms2.getStatus()) {
            return new ResultResponse(ms2);
        }
        //注册学员信息
        MessageResponse ms = teacherService.insertTeacher(data, sysUser());
        if (ResultCode.FAIL == ms.getStatus()) {

            throw new CustomException(ms.getErrorMessage());
        }

        return new ResultResponse(ResultCode.SUCCESS, "注册完成");
    }

    /**
     * 判断是否已经注册
     *
     * @param idCard 身份证号码
     * @param type   身份类型（student 学员 teacher 教职工）
     * @return ResultResponse
     */
    @Override
    public ResultResponse isExistByIdCard(String idCard, String type) {

        boolean isExist;
        switch (type) {
            case CommConstant.STUDENT:
                isExist = studentService.isExistByIdCard(idCard);
                if (isExist) {
                    return new ResultResponse(ResultCode.FAIL, "该身份证号码已被注册");
                }
                return new ResultResponse(ResultCode.SUCCESS, "该身份证号可以注册");

            case CommConstant.TEACHER:
                isExist = teacherService.isExistByIdCard(idCard);
                if (isExist) {
                    return new ResultResponse(ResultCode.FAIL, "该身份证号码已被注册");
                }
                return new ResultResponse(ResultCode.SUCCESS, "该身份证号可以注册");

            default:
                return new ResultResponse(ResultCode.FAIL, "未知身份类型");
        }
    }


    /**
     * 注册portal用户
     *
     * @param regType 注册类别
     * @param uid     uid
     * @param openId  openid
     * @param name    昵称
     * @param account 账号
     * @param mobile  手机号码
     * @param sex     性别
     * @param sysId   系统id
     * @param deptId  部门ID
     * @param roleId  角色ID
     * @return MessageResponse
     * @throws Exception
     */
    private MessageResponse insertUsers(String regType,
                                        String uid,
                                        String openId,
                                        String name,
                                        String account,
                                        String pwd,
                                        String mobile,
                                        String sex,
                                        String sysId,
                                        String deptId,
                                        String roleId) throws Exception {
        if (CommonUtils.isBlank(name)) {
            return new MessageResponse(ResultCode.FAIL, "名称不能为空！");
        }
        if (CommonUtils.isBlank(mobile)) {
            return new MessageResponse(ResultCode.FAIL, "手机号不能为空！");
        }
        if (isExistByMobile(mobile)) {
            return new MessageResponse(ResultCode.FAIL, "手机号已注册过，请重新填写另一新的手机号!");
        }
//        String pwd = "123123";// CommonUtils.getIdentifyCode(6, 0);
        Users o = new Users();
        o.setUserId(uid);
        o.setAccount(account);
        o.setPassword(CommonUtils.getMd5(pwd));
        o.setMobile(mobile);
        o.setName(name);
        o.setSex(sex);
        o.setUserLevel(regType);//身份标识 1-学生 2-教职工 3-管理员
        o.setOpenId(openId);
        o.setAppOpenId(openId);
        o.setDepartmentId(deptId);//"0004"
        o.setCurSyid(sysId);//"partyschool"
        o.setStauts("1");
        o.setCreateTime(new java.util.Date());
        signDao.insertReg(o, roleId);

        //密码短信通知
        //sendRegSmsNotice(o, name, mobile, pwd);
        //******************
        return new MessageResponse(0, "注册成功");
    }

    private void sendRegSmsNotice(Users o, String nickname, String mobile, String pwd) throws Exception {
        TaskCmcc obj = new TaskCmcc();
        Map<String, Object> msg = new HashMap<>();
        msg.put("taskName", "账号" + mobile);
        msg.put("msg", nickname + "你好，注册成功，账号" + mobile + "，密码" + pwd + "。" + CommConstant.SMS_SIGN_STR);
        msg.put("tel", mobile + "," + mobile + ";");
        CommonBeanUtils.copyMap2Bean(o, msg);

        this.taskCmccService.insertTaskCmcc(obj);
    }

    public Map<String, Object> getCarInfo(String CardCode)
            throws Exception {
        Map<String, Object> map = new HashMap<String, Object>();
        String year = CardCode.substring(6).substring(0, 4);// 得到年份
        String yue = CardCode.substring(10).substring(0, 2);// 得到月份
        // String day=CardCode.substring(12).substring(0,2);//得到日
        String sex;
        if (Integer.parseInt(CardCode.substring(16).substring(0, 1)) % 2 == 0) {// 判断性别
            sex = "2";
        } else {
            sex = "1";
        }
        Date date = new Date();// 得到当前的系统时间
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        String fyear = format.format(date).substring(0, 4);// 当前年份
        String fyue = format.format(date).substring(5, 7);// 月份
        // String fday=format.format(date).substring(8,10);
        int age = 0;
        if (Integer.parseInt(yue) <= Integer.parseInt(fyue)) { // 当前月份大于用户出身的月份表示已过生
            age = Integer.parseInt(fyear) - Integer.parseInt(year) + 1;
        } else {// 当前用户还没过生
            age = Integer.parseInt(fyear) - Integer.parseInt(year);
        }
        map.put("sex", sex);
        map.put("age", age);
        return map;
    }


    private UserProp sysUser() {
        UserProp u = new UserProp();
        u.setUserId("system");
        u.setName("system");
        u.setActiveSyId("partyschool");

        return u;
    }
}
