package com.huacainfo.ace.portal.service;
import com.huacainfo.ace.common.model.UserProp;
import com.huacainfo.ace.common.result.MessageResponse;
import com.huacainfo.ace.common.result.PageResult;
import com.huacainfo.ace.common.result.SingleResult;
import com.huacainfo.ace.portal.model.TplPage;
import com.huacainfo.ace.portal.vo.TplPageVo;
import com.huacainfo.ace.portal.vo.TplPageQVo;

import java.util.Map;

/**
 * @author: 陈晓克
 * @version: 2018-05-04
 * @Description:  TODO(页面)
 */
public interface TplPageService {
    /**
	 *
	    * @Title:find!{bean.name}List
	    * @Description:  TODO(页面分页查询)
	 		* @param:        @param condition
	 		* @param:        @param start
	 		* @param:        @param limit
	 		* @param:        @param orderBy
	 		* @param:        @throws Exception
	 		* @return:       PageResult<TplPageVo>
	 		* @throws
	    * @author: 陈晓克
	    * @version: 2018-05-04
	 */
	public abstract PageResult<TplPageVo> findTplPageList(TplPageQVo condition, int start, int limit, String orderBy) throws Exception;

    /**
	 *
	    * @Title:insertTplPage
	    * @Description:  TODO(添加页面)
	 		* @param:        @param obj
	 		* @param:        @param userProp
	 		* @param:        @throws Exception
	 		* @return:       MessageResponse
	 		* @throws
	    * @author: 陈晓克
	    * @version: 2018-05-04
	 */
	public abstract MessageResponse insertTplPage(TplPage obj,UserProp userProp) throws Exception;

    /**
	 *
	    * @Title:updateTplPage
	    * @Description:  TODO(更新页面)
	 		* @param:        @param obj
	 		* @param:        @param userProp
	 		* @param:        @throws Exception
	 		* @return:       MessageResponse
	 		* @throws
	    * @author: 陈晓克
	    * @version: 2018-05-04
	 */
	public abstract MessageResponse updateTplPage(TplPage obj,UserProp userProp) throws Exception;
    /**
	 *
	    * @Title:selectTplPageByPrimaryKey
	    * @Description:  TODO(获取页面)
	 		* @param:        @param id
	 		* @param:        @throws Exception
	 		* @return:       SingleResult<TplPage>
	 		* @throws
	    * @author: 陈晓克
	    * @version: 2018-05-04
	 */
	public abstract SingleResult<TplPageVo> selectTplPageByPrimaryKey(String id) throws Exception;
    /**
	 *
	    * @Title:deleteTplPageByTplPageId
	    * @Description:  TODO(删除页面)
	 		* @param:        @param id
	 		* @param:        @param  userProp
	 		* @param:        @throws Exception
	 		* @return:       MessageResponse
	 		* @throws
	    * @author: 陈晓克
	    * @version: 2018-05-04
	 */
	public abstract MessageResponse deleteTplPageByTplPageId(String id,UserProp userProp) throws Exception;


	/**
	 *
	 * @Title:getList
	 * @Description:  TODO(获取个人页面列表)
	 * @param:        @throws Exception
	 * @return:       Map<String,Object>
	 * @throws
	 * @author: 陈晓克
	 * @version: 2018-05-04
	 */
	public Map<String,Object> getList(Map<String,Object> params) throws Exception;

	
}