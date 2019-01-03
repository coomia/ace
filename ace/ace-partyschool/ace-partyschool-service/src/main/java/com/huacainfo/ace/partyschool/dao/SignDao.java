package com.huacainfo.ace.partyschool.dao;

import com.huacainfo.ace.portal.model.Users;
import org.apache.ibatis.annotations.Param;

/**
 * @Auther: Arvin
 * @Date: 2019/1/3 10:11
 * @Description:
 */
public interface SignDao {

    int isExistByMobile(String mobile);

    int insertReg(@Param("user") Users o,
                  @Param("roleId") String roleId);
}
