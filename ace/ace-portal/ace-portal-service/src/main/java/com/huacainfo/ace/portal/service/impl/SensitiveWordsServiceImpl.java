package com.huacainfo.ace.portal.service.impl;


import com.huacainfo.ace.common.model.UserProp;
import com.huacainfo.ace.common.result.MessageResponse;
import com.huacainfo.ace.common.result.PageResult;
import com.huacainfo.ace.common.tools.CommonUtils;

import com.huacainfo.ace.portal.dao.SensitiveWordsDao;
import com.huacainfo.ace.portal.model.SensitiveWords;

import com.huacainfo.ace.portal.service.DataBaseLogService;

import com.huacainfo.ace.portal.vo.SensitiveWordsVo;
import com.huacainfo.ace.portal.service.SensitiveWordsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service("sensitiveWordsService")
public class SensitiveWordsServiceImpl implements SensitiveWordsService {
    Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private SensitiveWordsDao sensitiveWordsDao;

    @Autowired
    private DataBaseLogService dataBaseLogService;

    @Override
    public PageResult<SensitiveWordsVo> findSensitiveWordsList(SensitiveWords condition) throws Exception {
        PageResult<SensitiveWordsVo> rst = new PageResult<>();
        List<SensitiveWordsVo> list = this.sensitiveWordsDao.findSensitiveWordsList(condition);
        rst.setRows(list);
        return rst;
    }

    @Override
    public MessageResponse insertSensitiveWords(SensitiveWords condition, UserProp userProp) throws Exception {
        condition.setId(UUID.randomUUID().toString());
        condition.setDeptId("00010001");
        if (CommonUtils.isBlank(condition.getWord())) {
            return new MessageResponse(1, "归属部门不能为空!");
        }
        logger.debug("-------------------------------------");
        logger.debug(userProp.toString());
        condition.setCreateDate(new Date());
        condition.setCreateUserName(userProp.getName());
        condition.setCreateUserId(userProp.getUserId());
        this.dataBaseLogService.log("敏感词添加成功", condition.getWord(), "",
                "", "", userProp);
        return new MessageResponse(0, "添加敏感词完成！");

    }

    @Override
    public MessageResponse deleteSensitiveWords(String id, UserProp userProp) {
        if (CommonUtils.isBlank(id)) {
            return new MessageResponse(1, "编号不能为空！");
        }
        SensitiveWords s = this.sensitiveWordsDao.selectByPrimaryKey(id);
        this.sensitiveWordsDao.deleteByPrimaryKey(id);
        this.dataBaseLogService.log("删除关键词" + s.getWord(), "关键词单位编号" + s.getDeptId(), "", "删除编号是" + id, id, userProp);
        return new MessageResponse(0, "删除成功！");
    }
}
