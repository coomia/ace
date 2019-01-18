package com.huacainfo.ace.taa.service.impl;


import com.huacainfo.ace.common.constant.ResultCode;
import com.huacainfo.ace.common.model.UserProp;
import com.huacainfo.ace.common.model.WxUser;
import com.huacainfo.ace.common.result.*;
import com.huacainfo.ace.common.tools.CommonBeanUtils;
import com.huacainfo.ace.common.tools.CommonUtils;
import com.huacainfo.ace.common.tools.DateUtil;
import com.huacainfo.ace.common.tools.GUIDUtil;
import com.huacainfo.ace.portal.service.DataBaseLogService;
import com.huacainfo.ace.taa.dao.TraAccDao;
import com.huacainfo.ace.taa.model.TraAcc;
import com.huacainfo.ace.taa.service.TraAccService;
import com.huacainfo.ace.taa.vo.TraAccQVo;
import com.huacainfo.ace.taa.vo.TraAccVo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("traAccService")
/**
 * @author: 陈晓克
 * @version: 2019-01-10
 * @Description: TODO(事故)
 */
public class TraAccServiceImpl implements TraAccService {
    Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private TraAccDao traAccDao;
    @Autowired
    private DataBaseLogService dataBaseLogService;


    /**
     * @throws
     * @Title:find!{bean.name}List
     * @Description: TODO(事故分页查询)
     * @param: @param condition
     * @param: @param start
     * @param: @param limit
     * @param: @param orderBy
     * @param: @throws Exception
     * @return: PageResult
     * <TraAccVo>
     * @author: 陈晓克
     * @version: 2019-01-10
     */
    @Override
    public PageResult<TraAccVo> findTraAccList(TraAccQVo condition, int start, int limit, String orderBy) throws Exception {
        PageResult<TraAccVo> rst = new PageResult<>();
        List<TraAccVo> list = this.traAccDao.findList(condition, start, limit, orderBy);
        rst.setRows(list);
        if (start <= 1) {
            int allRows = this.traAccDao.findCount(condition);
            rst.setTotal(allRows);
        }
        return rst;
    }

    /**
     * @throws
     * @Title:insertTraAcc
     * @Description: TODO(添加事故)
     * @param: @param o
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: 陈晓克
     * @version: 2019-01-10
     */
    @Override
    public MessageResponse insertTraAcc(TraAcc o, UserProp userProp) throws Exception {
        if (CommonUtils.isBlank(o.getLatitude())) {
            return new MessageResponse(1, "纬度不能为空！");
        }
        if (CommonUtils.isBlank(o.getLongitude())) {
            return new MessageResponse(1, "经度不能为空！");
        }

        if (CommonUtils.isBlank(o.getWeather())) {
            return new MessageResponse(1, "天气不能为空！");
        }
        if (CommonUtils.isBlank(o.getVehicleType())) {
            return new MessageResponse(1, "车型不能为空！");
        }
        o.setId(GUIDUtil.getGUID());
        o.setCreateDate(new Date());
        o.setStatus("1");
        o.setCreateUserName(userProp.getName());
        o.setCreateUserId(userProp.getUserId());
        if (CommonUtils.isBlank(o.getAreaCode())) {
            o.setAreaCode(userProp.getAreaCode());
        }
        this.traAccDao.insert(o);
        this.dataBaseLogService.log("添加事故", "事故", "",
                o.getId(), o.getId(), userProp);

        return new MessageResponse(0, "保存成功！");
    }

    /**
     * @throws
     * @Title:updateTraAcc
     * @Description: TODO(更新事故)
     * @param: @param o
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: 陈晓克
     * @version: 2019-01-10
     */
    @Override
    public MessageResponse updateTraAcc(TraAcc o, UserProp userProp) throws Exception {
        if (CommonUtils.isBlank(o.getId())) {
            return new MessageResponse(1, "主键不能为空！");
        }
        if (CommonUtils.isBlank(o.getLatitude())) {
            return new MessageResponse(1, "纬度不能为空！");
        }
        if (CommonUtils.isBlank(o.getLongitude())) {
            return new MessageResponse(1, "经度不能为空！");
        }
        if (CommonUtils.isBlank(o.getWeather())) {
            return new MessageResponse(1, "天气不能为空！");
        }
        if (CommonUtils.isBlank(o.getVehicleType())) {
            return new MessageResponse(1, "车型不能为空！");
        }
        o.setLastModifyDate(new Date());
        o.setLastModifyUserName(userProp.getName());
        o.setLastModifyUserId(userProp.getUserId());
        this.traAccDao.updateByPrimaryKey(o);
        this.dataBaseLogService.log("变更事故", "事故", "",
                o.getId(), o.getId(), userProp);

        return new MessageResponse(0, "保存成功！");
    }

    /**
     * @throws
     * @Title:selectTraAccByPrimaryKey
     * @Description: TODO(获取事故)
     * @param: @param id
     * @param: @throws Exception
     * @return: SingleResult<TraAcc>
     * @author: 陈晓克
     * @version: 2019-01-10
     */
    @Override
    public SingleResult<TraAccVo> selectTraAccByPrimaryKey(String id) throws Exception {
        SingleResult<TraAccVo> rst = new SingleResult<>();
        rst.setValue(this.traAccDao.selectVoByPrimaryKey(id));
        return rst;
    }

    /**
     * @throws
     * @Title:deleteTraAccByTraAccId
     * @Description: TODO(删除事故)
     * @param: @param id
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: 陈晓克
     * @version: 2019-01-10
     */
    @Override
    public MessageResponse deleteTraAccByTraAccId(String id, UserProp userProp) throws
            Exception {
        this.traAccDao.deleteByPrimaryKey(id);
        this.dataBaseLogService.log("删除事故", "事故", id, id,
                "事故", userProp);
        return new MessageResponse(0, "删除成功！");
    }


    /**
     * @throws
     * @Title:audit
     * @Description: TODO(审核事故)
     * @param: @param id bean.id
     * @param: @param rst 审核结果 3-通过 4-拒绝
     * @param: @param remark 审核备注
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: 陈晓克
     * @version: 2019-01-10
     */
    @Override
    public MessageResponse audit(String id, String rst, String remark,
                                 UserProp userProp) throws Exception {


        dataBaseLogService.log("审核事故", "事故", id, id,
                "事故", userProp);
        return new MessageResponse(0, "审核成功！");
    }


    /**
     * @throws
     * @Title:importXls
     * @Description: TODO(Excel导入资源数据)
     * @param: @param list
     * @param: @param userProp
     * @param: @return
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: 陈晓克
     * @version: 2019-01-10
     */

    @Override
    public MessageResponse importXls(List<Map<String, Object>> list, UserProp userProp) throws Exception {
        int i = 1;
        for (Map<String, Object> row : list) {
            TraAcc o = new TraAcc();
            CommonBeanUtils.copyMap2Bean(o, row);
            o.setCreateDate(new Date());
            o.setCreateUserId(userProp.getUserId());
            o.setCreateUserName(userProp.getName());
            o.setStatus("1");

            this.logger.info(o.toString());
            if (true) {
                return new MessageResponse(1, "行" + i + ",编号不能为空！");
            }
            if (CommonUtils.isBlank(o.getId())) {
                return new MessageResponse(1, "主键不能为空！");
            }
            if (CommonUtils.isBlank(o.getLatitude())) {
                return new MessageResponse(1, "纬度不能为空！");
            }
            if (CommonUtils.isBlank(o.getLongitude())) {
                return new MessageResponse(1, "经度不能为空！");
            }
            if (CommonUtils.isBlank(o.getAreaCode())) {
                return new MessageResponse(1, "行政区划不能为空！");
            }
            if (CommonUtils.isBlank(o.getWeather())) {
                return new MessageResponse(1, "天气不能为空！");
            }
            if (CommonUtils.isBlank(o.getVehicleType())) {
                return new MessageResponse(1, "车型不能为空！");
            }
            if (CommonUtils.isBlank(o.getStatus())) {
                return new MessageResponse(1, "状态 不能为空！");
            }
            int t = this.traAccDao.isExit(o);
            if (t > 0) {
                this.traAccDao.updateByPrimaryKey(o);

            } else {
                this.traAccDao.insert(o);
            }
            i++;
        }
        this.dataBaseLogService.log("事故导入", "事故", "", "rs.xls", "rs.xls", userProp);
        return new MessageResponse(0, "导入成功！");
    }


    /**
     * @throws
     * @Title:getList
     * @Description: TODO(条件查询数据)
     * @param: @param p
     * @param: @return
     * @param: @throws Exception
     * @return: ListResult<Map<String,Object>>
     * @author: 陈晓克
     * @version: 2019-01-10
     */
    @Override
    public ListResult<Map<String, Object>> getList(Map<String, Object> p) throws Exception {
        ListResult<Map<String, Object>> rst = new ListResult<>();
        rst.setValue(this.traAccDao.getList(p));

        return rst;

    }


    /**
     * @throws
     * @Title:getListByCondition
     * @Description: TODO(用于控件数据获取)
     * @param: @param params
     * @param: @return
     * @return: Map<String,Object>
     * @author: 陈晓克
     * @version: 2019-01-10
     */
    @Override
    public Map<String, Object> getListByCondition(Map<String, Object> params) {
        Map<String, Object> rst = new HashMap<String, Object>();
        List<Map<String, Object>> list = this.traAccDao.getListByCondition(params);
        rst.put("total", list.size());
        rst.put("rows", list);
        return rst;
    }

    /**
     * @throws
     * @Title:deleteRoadSectionByRoadSectionIds
     * @Description: TODO(批量删除事故
     * @param: @param ids
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: 陈晓克
     * @version: 2019-01-10
     */
    @Override
    public MessageResponse deleteTraAccByTraAccIds(String[] id, UserProp userProp) throws Exception {
        this.traAccDao.deleteByPrimaryKeys(id);
        this.dataBaseLogService.log("批量删除事故", "事故", id[0], id[0], "事故", userProp);
        return new MessageResponse(0, "删除成功！");

    }

    /**
     * @throws
     * @Title:updateStatus
     * @Description: TODO(更新状态)
     * @param: @param obj
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: 陈晓克
     * @version: 2019-01-10
     */
    @Override
    public MessageResponse updateStatus(String id, String status, UserProp userProp) throws Exception {
        this.traAccDao.updateStatus(id, status);
        this.dataBaseLogService.log("跟新状态", "事故", id, id, "事故", userProp);
        return new MessageResponse(0, "成功！");
    }

    /**
     * 功能描述: 事故快报
     *
     * @param user   上报用户
     * @param params 上报参数
     * @return: ResultResponse
     * @auther: Arvin Zou
     * @date: 2019/1/12 10:57
     */
    @Override
    public ResultResponse flashReport(WxUser user, TraAccVo params) throws Exception {
        //todo 根据经纬度自动获取所属：路段ID、路长ID

        params.setAccidentTime(DateUtil.getNowDate());//事故发生时间 -- 默认为系统当前时间

        MessageResponse ms = insertTraAcc(params, parseUser(user));
        if (ms.getStatus() == ResultCode.FAIL) {
            return new ResultResponse(ms);
        }

        return new ResultResponse(ResultCode.SUCCESS, "上报成功");
    }

    /**
     * 功能描述: 事故续报
     *
     * @param user   用户信息
     * @param params 续报参数
     * @return: ResultResponse
     * @auther: Arvin Zou
     * @date: 2019/1/12 11:15
     */
    @Override
    public ResultResponse report(WxUser user, TraAccVo params) {
        TraAccVo traAccVo = traAccDao.selectVoByPrimaryKey(params.getId());
        if (traAccVo == null) {
            return new ResultResponse(ResultCode.FAIL, "事故数据丢失");
        }

        //事故发生时间、归属路段、死亡人数、受伤人数、事故原因。
        traAccVo.setAccidentTime(params.getAccidentTime());
        traAccVo.setRoadSectionId(params.getRoadSectionId());
        traAccVo.setDeadthToll(params.getDeadthToll());
        traAccVo.setInjuries(params.getInjuries());
        traAccVo.setCause(params.getCause());
        traAccVo.setLastModifyUserId(user.getUnionId());
        traAccVo.setLastModifyUserName(user.getNickName());
        traAccVo.setLastModifyDate(DateUtil.getNowDate());
        int i = traAccDao.updateByPrimaryKey(traAccVo);
        if (i == 1) {
            return new ResultResponse(ResultCode.SUCCESS, "续报提交成功");
        }

        return new ResultResponse(ResultCode.FAIL, "续报提交失败");
    }

    /**
     * 交通事故倒序表
     * <p>路段交通事故次数倒叙表</p>
     * <p>路段交通死亡人数倒叙表</p>
     *
     * @param params  参数
     * @param start   分页1
     * @param limit   分页2
     * @param orderBy 排序规则
     *                ORDER BY v.occurTimes DESC
     *                ORDER BY v.deathNum DESC
     * @return List<Map<String, Object>>
     */
    @Override
    public List<Map<String, Object>> reverseReport(Map<String, Object> params, int start, int limit, String orderBy) {
        return traAccDao.reverseReport(params, start, limit, orderBy);
    }

    /**
     * 事故死亡人数同期对比 报表
     *
     * @param params
     * @return Map<String,Object>
     */
    @Override
    public Map<String, Object> contrastiveReport(Map<String, String> params) {
        String nowDataTime = DateUtil.getNow();
        String nowYear = nowDataTime.substring(0, 4);
        Map<String, String> nowParams = getParams(Integer.parseInt(nowYear));
        nowParams.putAll(params);
        Map<String, String> pastParams = getParams(Integer.parseInt(nowYear) - 1);
        pastParams.putAll(params);

        Map<String, Object> now = traAccDao.contrastiveReport(nowParams);
        Map<String, Object> past = traAccDao.contrastiveReport(pastParams);

        Map<String, Object> rst = new HashMap<>();
        rst.put("now", now);
        rst.put("past", past);
        return rst;
    }

    private Map<String, String> getParams(int year) {
        Map<String, String> params = new HashMap<>();
        params.put("Jan_S", year + "-01-01 00:00:00");
        params.put("Jan_E", year + "-01-31 23:59:59");
        params.put("Feb_S", year + "-02-01 00:00:00");
        params.put("Feb_E", year + "-02-29 23:59:59");
        params.put("Mar_S", year + "-03-01 00:00:00");
        params.put("Mar_E", year + "-03-31 23:59:59");
        params.put("Apr_S", year + "-04-01 00:00:00");
        params.put("Apr_E", year + "-04-30 23:59:59");
        params.put("May_S", year + "-05-01 00:00:00");
        params.put("May_E", year + "-05-31 23:59:59");
        params.put("Jun_S", year + "-06-01 00:00:00");
        params.put("Jun_E", year + "-06-30 23:59:59");
        params.put("Jul_S", year + "-07-01 00:00:00");
        params.put("Jul_E", year + "-07-31 23:59:59");
        params.put("Aug_S", year + "-08-01 00:00:00");
        params.put("Aug_E", year + "-08-31 23:59:59");
        params.put("Sep_S", year + "-09-01 00:00:00");
        params.put("Sep_E", year + "-09-30 23:59:59");
        params.put("Oct_S", year + "-10-01 00:00:00");
        params.put("Oct_E", year + "-10-31 23:59:59");
        params.put("Nov_S", year + "-11-01 00:00:00");
        params.put("Nov_E", year + "-11-30 23:59:59");
        params.put("Dec_S", year + "-12-01 00:00:00");
        params.put("Dec_E", year + "-12-31 23:59:59");

        return params;
    }

    private UserProp parseUser(WxUser user) {
        UserProp u = new UserProp();
        u.setUserId(user.getUnionId());
        u.setName(user.getNickName());

        return u;
    }
}
