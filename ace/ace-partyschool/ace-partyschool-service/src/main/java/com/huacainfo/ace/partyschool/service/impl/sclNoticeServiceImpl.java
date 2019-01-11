package com.huacainfo.ace.partyschool.service.impl;


import com.huacainfo.ace.common.model.UserProp;
import com.huacainfo.ace.common.result.MessageResponse;
import com.huacainfo.ace.common.result.PageResult;
import com.huacainfo.ace.common.result.SingleResult;
import com.huacainfo.ace.common.tools.GUIDUtil;
import com.huacainfo.ace.partyschool.dao.NoticeDao;
import com.huacainfo.ace.partyschool.model.Notice;
import com.huacainfo.ace.partyschool.service.sclNoticeService;
import com.huacainfo.ace.partyschool.vo.NoticeQVo;
import com.huacainfo.ace.partyschool.vo.NoticeVo;
import com.huacainfo.ace.portal.service.DataBaseLogService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("sclNoticeService")
/**
 * @author: Arvin
 * @version: 2019-01-06
 * @Description: TODO(通知公告)
 */
public class sclNoticeServiceImpl implements sclNoticeService {
    Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private NoticeDao noticeDao;
    @Autowired
    private DataBaseLogService dataBaseLogService;

    /**
     * @throws
     * @Title:find!{bean.name}List
     * @Description: TODO(通知公告分页查询)
     * @param: @param condition
     * @param: @param start
     * @param: @param limit
     * @param: @param orderBy
     * @param: @throws Exception
     * @return: PageResult
     * <NoticeVo>
     * @author: Arvin
     * @version: 2019-01-06
     */
    @Override
    public PageResult
            <NoticeVo> findNoticeList(NoticeQVo condition, int start,
                                      int limit, String orderBy) throws Exception {
        PageResult
                <NoticeVo> rst = new PageResult<>();
        List
                <NoticeVo> list = this.noticeDao.findList(condition,
                start, limit, orderBy);
        rst.setRows(list);
        if (start <= 1) {
            int allRows = this.noticeDao.findCount(condition);
            rst.setTotal(allRows);
        }
        return rst;
    }

    /**
     * @throws
     * @Title:insertNotice
     * @Description: TODO(添加通知公告)
     * @param: @param o
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: Arvin
     * @version: 2019-01-06
     */
    @Override
    public MessageResponse insertNotice(Notice o, UserProp userProp) throws Exception {


        int temp = this.noticeDao.isExit(o);
        if (temp > 0) {
            return new MessageResponse(1, "通知公告名称重复！");
        }

        o.setId(GUIDUtil.getGUID());
        o.setStatus("1");
        this.noticeDao.insert(o);
        this.dataBaseLogService.log("添加通知公告", "通知公告", "",
                o.getId(), o.getId(), userProp);

        return new MessageResponse(0, "添加通知公告完成！");
    }

    /**
     * @throws
     * @Title:updateNotice
     * @Description: TODO(更新通知公告)
     * @param: @param o
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: Arvin
     * @version: 2019-01-06
     */
    @Override
    public MessageResponse updateNotice(Notice o, UserProp userProp) throws Exception {
        this.noticeDao.updateByPrimaryKey(o);
        this.dataBaseLogService.log("变更通知公告", "通知公告", "",
                o.getId(), o.getId(), userProp);

        return new MessageResponse(0, "变更通知公告完成！");
    }

    /**
     * @throws
     * @Title:selectNoticeByPrimaryKey
     * @Description: TODO(获取通知公告)
     * @param: @param id
     * @param: @throws Exception
     * @return: SingleResult<Notice>
     * @author: Arvin
     * @version: 2019-01-06
     */
    @Override
    public SingleResult<NoticeVo> selectNoticeByPrimaryKey(String id) throws Exception {
        SingleResult
                <NoticeVo> rst = new SingleResult<>();
        rst.setValue(this.noticeDao.selectVoByPrimaryKey(id));
        return rst;
    }

    /**
     * @throws
     * @Title:deleteNoticeByNoticeId
     * @Description: TODO(删除通知公告)
     * @param: @param id
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: Arvin
     * @version: 2019-01-06
     */
    @Override
    public MessageResponse deleteNoticeByNoticeId(String id, UserProp userProp) throws
            Exception {
        this.noticeDao.deleteByPrimaryKey(id);
        this.dataBaseLogService.log("删除通知公告", "通知公告", id, id,
                "通知公告", userProp);
        return new MessageResponse(0, "通知公告删除完成！");
    }
}
