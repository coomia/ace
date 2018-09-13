package com.huacainfo.ace.society.service.impl;


import java.util.Date;
import java.util.List;
import com.huacainfo.ace.common.tools.GUIDUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.huacainfo.ace.common.model.UserProp;
import com.huacainfo.ace.common.result.MessageResponse;
import com.huacainfo.ace.common.result.PageResult;
import com.huacainfo.ace.common.result.SingleResult;
import com.huacainfo.ace.common.tools.CommonUtils;
import com.huacainfo.ace.society.dao.ActivityReportDao;
import com.huacainfo.ace.society.model.ActivityReport;
import com.huacainfo.ace.portal.service.DataBaseLogService;
import com.huacainfo.ace.society.service.ActivityReportService;
import com.huacainfo.ace.society.vo.ActivityReportVo;
import com.huacainfo.ace.society.vo.ActivityReportQVo;
@Service("activityReportService")
/**
* @author: huacai003
* @version: 2018-09-13
* @Description:  TODO(活动报道)
*/
public class ActivityReportServiceImpl implements ActivityReportService {
Logger logger = LoggerFactory.getLogger(this.getClass());
@Autowired
private ActivityReportDao activityReportDao;
@Autowired
private DataBaseLogService dataBaseLogService;

/**
*
* @Title:find!{bean.name}List
* @Description:  TODO(活动报道分页查询)
* @param:        @param condition
* @param:        @param start
* @param:        @param limit
* @param:        @param orderBy
* @param:        @throws Exception
* @return:       PageResult
<ActivityReportVo>
    * @throws
    * @author: huacai003
    * @version: 2018-09-13
    */
    @Override
    public PageResult
    <ActivityReportVo> findActivityReportList(ActivityReportQVo condition, int start,
        int limit, String orderBy) throws Exception {
        PageResult
        <ActivityReportVo> rst = new PageResult<>();
            List
            <ActivityReportVo> list = this.activityReportDao.findList(condition,
                start, limit, orderBy);
                rst.setRows(list);
                if (start <= 1) {
                int allRows = this.activityReportDao.findCount(condition);
                rst.setTotal(allRows);
                }
                return rst;
                }

                /**
                *
                * @Title:insertActivityReport
                * @Description: TODO(添加活动报道)
                * @param: @param o
                * @param: @param userProp
                * @param: @throws Exception
                * @return: MessageResponse
                * @throws
                * @author: huacai003
                * @version: 2018-09-13
                */
                @Override
                public MessageResponse insertActivityReport(ActivityReport o, UserProp userProp) throws Exception {

                if (CommonUtils.isBlank(o.getId())) {return new MessageResponse(1, "主键-GUID不能为空！");}if (CommonUtils.isBlank(o.getActivityId())) {return new MessageResponse(1, "活动编码不能为空！");}if (CommonUtils.isBlank(o.getTitle())) {return new MessageResponse(1, "报道标题不能为空！");}

                int temp = this.activityReportDao.isExit(o);
                if (temp > 0) {
                return new MessageResponse(1, "活动报道名称重复！");
                }

                o.setId(GUIDUtil.getGUID());
                o.setCreateDate(new Date());
                o.setStatus("1");
                o.setCreateUserName(userProp.getName());
                o.setCreateUserId(userProp.getUserId());
                this.activityReportDao.insertSelective(o);
                this.dataBaseLogService.log("添加活动报道", "活动报道", "",
                o.getId(),o.getId(), userProp);

                return new MessageResponse(0, "添加活动报道完成！");
                }

                /**
                *
                * @Title:updateActivityReport
                * @Description: TODO(更新活动报道)
                * @param: @param o
                * @param: @param userProp
                * @param: @throws Exception
                * @return: MessageResponse
                * @throws
                * @author: huacai003
                * @version: 2018-09-13
                */
                @Override
                public MessageResponse updateActivityReport(ActivityReport o, UserProp userProp) throws Exception {
                if (CommonUtils.isBlank(o.getId())) {return new MessageResponse(1, "主键-GUID不能为空！");}if (CommonUtils.isBlank(o.getActivityId())) {return new MessageResponse(1, "活动编码不能为空！");}if (CommonUtils.isBlank(o.getTitle())) {return new MessageResponse(1, "报道标题不能为空！");}

                o.setLastModifyDate(new Date());
                o.setLastModifyUserName(userProp.getName());
                o.setLastModifyUserId(userProp.getUserId());
                this.activityReportDao.updateByPrimaryKeySelective(o);
                this.dataBaseLogService.log("变更活动报道", "活动报道", "",
                o.getId(), o.getId(), userProp);

                return new MessageResponse(0, "变更活动报道完成！");
                }

                /**
                *
                * @Title:selectActivityReportByPrimaryKey
                * @Description: TODO(获取活动报道)
                * @param: @param id
                * @param: @throws Exception
                * @return: SingleResult<ActivityReport>
                * @throws
                * @author: huacai003
                * @version: 2018-09-13
                */
                @Override
                public SingleResult
                <ActivityReportVo> selectActivityReportByPrimaryKey(String id) throws Exception {
                    SingleResult
                    <ActivityReportVo> rst = new SingleResult<>();
                        rst.setValue(this.activityReportDao.selectVoByPrimaryKey(id));
                        return rst;
                        }

                        /**
                        *
                        * @Title:deleteActivityReportByActivityReportId
                        * @Description: TODO(删除活动报道)
                        * @param: @param id
                        * @param: @param userProp
                        * @param: @throws Exception
                        * @return: MessageResponse
                        * @throws
                        * @author: huacai003
                        * @version: 2018-09-13
                        */
                        @Override
                        public MessageResponse deleteActivityReportByActivityReportId(String id, UserProp userProp) throws
                        Exception {
                        this.activityReportDao.deleteByPrimaryKey(id);
                        this.dataBaseLogService.log("删除活动报道", "活动报道",
                        String.valueOf(id),
                        String.valueOf(id), "活动报道", userProp);
                        return new MessageResponse(0, "活动报道删除完成！");
                        }


                        /**
                        *
                        * @Title:audit
                        * @Description: TODO(审核活动报道)
                        * @param: @param id bean.id
                        * @param: @param rst 审核结果 3-通过 4-拒绝
                        * @param: @param remark 审核备注
                        * @param: @throws Exception
                        * @return: MessageResponse
                        * @throws
                        * @author: huacai003
                        * @version: 2018-09-13
                        */
                        @Override
                        public MessageResponse audit(String id,String rst, String remark,
                        UserProp userProp) throws Exception {

                        activityReportDao.updateByPrimaryKeySelective(id);


                        dataBaseLogService.log("审核活动报道", "活动报道",
                        String.valueOf(id), String.valueOf(id), "活动报道", userProp);
                        return new MessageResponse(0, "活动报道审核完成！");
                        }

                        }
