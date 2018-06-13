package com.huacainfo.ace.portal.web.controller;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.huacainfo.ace.common.model.PageParamNoChangeSord;
import com.huacainfo.ace.common.result.MessageResponse;
import com.huacainfo.ace.common.result.PageResult;
import com.huacainfo.ace.common.result.SingleResult;
import com.huacainfo.ace.portal.model.EvaluatTpl;
import com.huacainfo.ace.portal.service.EvaluatTplService;
import com.huacainfo.ace.portal.vo.EvaluatTplVo;
import com.huacainfo.ace.portal.vo.EvaluatTplQVo;

@Controller
@RequestMapping("/evaluatTpl")
/**
 * @author: 陈晓克
 * @version: 2018-06-09
 * @Description:  TODO(评测)
 */
public class EvaluatTplController extends PortalBaseController {


	private static final long serialVersionUID = 1L;
	Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private EvaluatTplService evaluatTplService;
     /**
	 *
	    * @Title:find!{bean.name}List
	    * @Description:  TODO(评测分页查询)
	 		* @param:        @param condition
	 		* @param:        @param page
	 		* @param:        @return
	 		* @param:        @throws Exception
	 		* @return:       PageResult<EvaluatTplVo>
	 		* @throws
	    * @author: 陈晓克
	    * @version: 2018-06-09
	 */
	@RequestMapping(value = "/findEvaluatTplList.do")
	@ResponseBody
	public PageResult<EvaluatTplVo> findEvaluatTplList(EvaluatTplQVo condition,
			PageParamNoChangeSord page) throws Exception {
		PageResult<EvaluatTplVo> rst = this.evaluatTplService
				.findEvaluatTplList(condition, page.getStart(), page.getLimit(),
						page.getOrderBy());
		if (rst.getTotal() == 0) {
			rst.setTotal(page.getTotalRecord());
		}
	
		return rst;
	}
    /**
	 *
	    * @Title:insertEvaluatTpl
	    * @Description:  TODO(添加评测)
	 		* @param:        @param jsons
	 		* @param:        @throws Exception
	 		* @return:       MessageResponse
	 		* @throws
	    * @author: 陈晓克
	    * @version: 2018-06-09
	 */
	@RequestMapping(value = "/insertEvaluatTpl.do")
	@ResponseBody
	public MessageResponse insertEvaluatTpl(String jsons) throws Exception {
		EvaluatTpl obj = JSON.parseObject(jsons, EvaluatTpl.class);
		return this.evaluatTplService
				.insertEvaluatTpl(obj, this.getCurUserProp());
	}
    /**
	 *
	    * @Title:updateEvaluatTpl
	    * @Description:  TODO(更新评测)
	 		* @param:        @param jsons
	 		* @param:        @throws Exception
	 		* @return:       MessageResponse
	 		* @throws
	    * @author: 陈晓克
	    * @version: 2018-06-09
	 */
	@RequestMapping(value = "/updateEvaluatTpl.do")
	@ResponseBody
	public MessageResponse updateEvaluatTpl(String jsons) throws Exception {
		EvaluatTpl obj = JSON.parseObject(jsons, EvaluatTpl.class);
		return this.evaluatTplService
				.updateEvaluatTpl(obj, this.getCurUserProp());
	}
    /**
	 *
	    * @Title:selectEvaluatTplByPrimaryKey
	    * @Description:  TODO(获取评测)
	 		* @param:        @param id
	 		* @param:        @throws Exception
	 		* @return:       SingleResult<EvaluatTpl>
	 		* @throws
	    * @author: 陈晓克
	    * @version: 2018-06-09
	 */
	@RequestMapping(value = "/selectEvaluatTplByPrimaryKey.do")
	@ResponseBody
	public SingleResult<EvaluatTplVo> selectEvaluatTplByPrimaryKey(String id)
			throws Exception {
		return this.evaluatTplService.selectEvaluatTplByPrimaryKey(id);
	}
    /**
	 *
	    * @Title:deleteEvaluatTplByEvaluatTplId
	    * @Description:  TODO(删除评测)
	 		* @param:        @param jsons
	 		* @param:        @throws Exception
	 		* @return:       MessageResponse
	 		* @throws
	    * @author: 陈晓克
	    * @version: 2018-06-09
	 */
	@RequestMapping(value = "/deleteEvaluatTplByEvaluatTplId.do")
	@ResponseBody
	public MessageResponse deleteEvaluatTplByEvaluatTplId(String jsons)
			throws Exception {
		JSONObject json = JSON.parseObject(jsons);
		String id = json.getString("id");
		return this.evaluatTplService.deleteEvaluatTplByEvaluatTplId(id,
				this.getCurUserProp());
	}

	/**
     *
     * @Title:getList
     * @Description:  TODO(获取评测列表)
     * @param:        @throws Exception
     * @return:       Map<String,Object>
     * @throws
     * @author: 陈晓克
     * @version: 2018-06-09
     */
    @RequestMapping(value = "/getList.do")
    @ResponseBody
    public Map<String,Object> getList() throws Exception{
        Map<String,Object> params=this.getParams();
        params.put("userId",this.getCurUserProp().getUserId());
        return this.evaluatTplService.getList(params);
    }

    /**
     *
     * @Title:getById
     * @Description:  TODO(获取评测列表)
     * @param:        @throws Exception
     * @return:       Map<String,Object>
     * @throws
     * @author: 陈晓克
     * @version: 2018-06-09
     */
    @RequestMapping(value = "/getById.do")
    @ResponseBody
    public Map<String,Object> getById(String id) throws Exception{
        return this.evaluatTplService.getById(id);
    }
}