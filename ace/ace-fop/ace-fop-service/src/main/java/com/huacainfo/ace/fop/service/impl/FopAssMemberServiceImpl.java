package com.huacainfo.ace.fop.service.impl;


import com.huacainfo.ace.common.constant.ResultCode;
import com.huacainfo.ace.common.model.UserProp;
import com.huacainfo.ace.common.result.MessageResponse;
import com.huacainfo.ace.common.result.PageResult;
import com.huacainfo.ace.common.result.SingleResult;
import com.huacainfo.ace.common.tools.CommonUtils;
import com.huacainfo.ace.common.tools.GUIDUtil;
import com.huacainfo.ace.common.tools.ValidateUtils;
import com.huacainfo.ace.fop.dao.FopAssMemberDao;
import com.huacainfo.ace.fop.model.FopAssMember;
import com.huacainfo.ace.fop.model.FopAssociation;
import com.huacainfo.ace.fop.service.FopAssMemberService;
import com.huacainfo.ace.fop.vo.FopAssMemberQVo;
import com.huacainfo.ace.fop.vo.FopAssMemberVo;
import com.huacainfo.ace.portal.service.DataBaseLogService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service("fopAssMemberService")
/**
 * @author: Arvin
 * @version: 2018-05-02
 * @Description: TODO(企业管理)
 */
public class FopAssMemberServiceImpl implements FopAssMemberService {
    Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private FopAssMemberDao fopAssMemberDao;
    @Autowired
    private DataBaseLogService dataBaseLogService;

    /**
     * @throws
     * @Title:find!{bean.name}List
     * @Description: TODO(企业管理分页查询)
     * @param: @param condition
     * @param: @param start
     * @param: @param limit
     * @param: @param orderBy
     * @param: @throws Exception
     * @return: PageResult<FopAssMemberVo>
     * @author: Arvin
     * @version: 2018-05-02
     */
    @Override
    public PageResult<FopAssMemberVo> findFopAssMemberList(FopAssMemberQVo condition, int start,
                                                           int limit, String orderBy) throws Exception {
        PageResult<FopAssMemberVo> rst = new PageResult<FopAssMemberVo>();
        List<FopAssMemberVo> list = this.fopAssMemberDao.findList(condition,
                start, start + limit, orderBy);
        rst.setRows(list);
        if (start <= 1) {
            int allRows = this.fopAssMemberDao.findCount(condition);
            rst.setTotal(allRows);
        }
        return rst;
    }

    /**
     * @throws
     * @Title:insertFopAssMember
     * @Description: TODO(添加企业管理)
     * @param: @param o
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: Arvin
     * @version: 2018-05-02
     */
    @Override
    public MessageResponse insertFopAssMember(FopAssMember o, UserProp userProp)
            throws Exception {
        o.setId(GUIDUtil.getGUID());
        if (CommonUtils.isBlank(o.getId())) {
            return new MessageResponse(1, "主键不能为空！");
        }
        if (CommonUtils.isBlank(o.getAssId())) {
            return new MessageResponse(1, "协会ID不能为空！");
        }
        if (CommonUtils.isBlank(o.getCompanyName())) {
            return new MessageResponse(1, "企业名称不能为空！");
        }
        if (CommonUtils.isBlank(o.getPname())) {
            return new MessageResponse(1, "姓名不能为空！");
        }
        if (CommonUtils.isBlank(o.getPhoneNum())) {
            return new MessageResponse(1, "电话不能为空！");
        }
        if (CommonUtils.isBlank(o.getAssPost())) {
            return new MessageResponse(1, "商协会职务不能为空！");
        }
        MessageResponse mm = validate(o);
        if (ResultCode.FAIL == mm.getStatus()) {
            return mm;
        }
        int temp = this.fopAssMemberDao.isExit(o);
        if (temp > 0) {
            return new MessageResponse(1, "企业管理名称重复！");
        }
        o.setCreateDate(new Date());
        o.setStatus("1");
        o.setCreateUserName(userProp.getName());
        o.setCreateUserId(userProp.getUserId());
        this.fopAssMemberDao.insertSelective(o);
        this.dataBaseLogService.log("添加企业管理", "企业管理", "", o.getId(),
                o.getId(), userProp);
        return new MessageResponse(0, "添加企业管理完成！");
    }

    /**
     * @throws
     * @Title:updateFopAssMember
     * @Description: TODO(更新企业管理)
     * @param: @param o
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: Arvin
     * @version: 2018-05-02
     */
    @Override
    public MessageResponse updateFopAssMember(FopAssMember o, UserProp userProp)
            throws Exception {
        if (CommonUtils.isBlank(o.getId())) {
            return new MessageResponse(1, "主键不能为空！");
        }
        if (CommonUtils.isBlank(o.getAssId())) {
            return new MessageResponse(1, "协会ID不能为空！");
        }
        if (CommonUtils.isBlank(o.getCompanyName())) {
            return new MessageResponse(1, "企业名称不能为空！");
        }
        if (CommonUtils.isBlank(o.getPname())) {
            return new MessageResponse(1, "姓名不能为空！");
        }
        if (CommonUtils.isBlank(o.getPhoneNum())) {
            return new MessageResponse(1, "电话不能为空！");
        }
        if (CommonUtils.isBlank(o.getAssPost())) {
            return new MessageResponse(1, "商协会职务不能为空！");
        }
        MessageResponse mm = validate(o);
        if (ResultCode.FAIL == mm.getStatus()) {
            return mm;
        }
        o.setLastModifyDate(new Date());
        o.setLastModifyUserName(userProp.getName());
        o.setLastModifyUserId(userProp.getUserId());
        this.fopAssMemberDao.updateByPrimaryKeySelective(o);
        this.dataBaseLogService.log("变更企业管理", "企业管理", "", o.getId(),
                o.getId(), userProp);
        return new MessageResponse(0, "变更企业管理完成！");
    }

    /**
     * @throws
     * @Title:selectFopAssMemberByPrimaryKey
     * @Description: TODO(获取企业管理)
     * @param: @param id
     * @param: @throws Exception
     * @return: SingleResult<FopAssMember>
     * @author: Arvin
     * @version: 2018-05-02
     */
    @Override
    public SingleResult<FopAssMemberVo> selectFopAssMemberByPrimaryKey(String id) throws Exception {
        SingleResult<FopAssMemberVo> rst = new SingleResult<FopAssMemberVo>();
        rst.setValue(this.fopAssMemberDao.selectVoByPrimaryKey(id));
        return rst;
    }

    /**
     * @throws
     * @Title:deleteFopAssMemberByFopAssMemberId
     * @Description: TODO(删除企业管理)
     * @param: @param id
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: Arvin
     * @version: 2018-05-02
     */
    @Override
    public MessageResponse deleteFopAssMemberByFopAssMemberId(String id, UserProp userProp) throws Exception {
        this.fopAssMemberDao.deleteByPrimaryKey(id);
        this.dataBaseLogService.log("删除企业管理", "企业管理", String.valueOf(id),
                String.valueOf(id), "企业管理", userProp);
        return new MessageResponse(0, "企业管理删除完成！");
    }

    @Override
    public MessageResponse deleteFopAssMemberByFopAssId(String assId, UserProp userProp) throws Exception {
        this.fopAssMemberDao.deleteByPrimaryKey(assId);
        this.dataBaseLogService.log("添加更新删除企业管理", "关联团体ID", String.valueOf(assId),
                String.valueOf(assId), "企业管理", userProp);
        return new MessageResponse(0, "企业管理删除完成！");
    }


    private MessageResponse validate(FopAssMember o) throws Exception {
        if (!CommonUtils.isBlank(o.getPhoneNum())) {
            if (!ValidateUtils.Mobile(String.valueOf(o.getPhoneNum()))) {
                return new MessageResponse(ResultCode.FAIL, "电话号码格式不正确");
            }
        }
        return new MessageResponse(ResultCode.SUCCESS, "数据格式正确");
    }

}
