package com.huacainfo.ace.partyschool.dao;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.huacainfo.ace.partyschool.model.MailList;
import com.huacainfo.ace.partyschool.vo.MailListQVo;
import com.huacainfo.ace.partyschool.vo.MailListVo;

public interface MailListDao {

MailList selectByPrimaryKey(String id);

int deleteByPrimaryKey(String id);

int insert(MailList record);


int updateByPrimaryKey(MailList record);


MailListVo selectVoByPrimaryKey(String id);

List<MailListVo> findList(@Param("condition") MailListQVo condition,
    @Param("start") int start,
    @Param("limit") int limit,
    @Param("orderBy") String orderBy);

    int findCount(@Param("condition") MailListQVo condition);

    int isExit(MailList record);

    int updateStatus(@Param("id") String id,@Param("status") String status);


    List<Map<String,Object>> getList(@Param("p")Map<String,Object> p);


    List<Map<String, Object>> getListByCondition(@Param("params") Map<String, Object> params);


    int deleteByPrimaryKeys(@Param("ids") String[] ids);


    List<Map<String,Object>> getClassTreeList(@Param("classId")String classId);
    List<Map<String,Object>> getTeacherTreeList();
    List<Map<String,Object>> getTreeList();

 }