package com.huacainfo.ace.taa.web.controller;

import com.huacainfo.ace.common.tools.CommonUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.huacainfo.ace.common.model.PageParamNoChangeSord;
import com.huacainfo.ace.common.result.MessageResponse;
import com.huacainfo.ace.common.result.PageResult;
import com.huacainfo.ace.common.result.SingleResult;
import com.huacainfo.ace.common.tools.ExcelUtils;
import com.huacainfo.ace.taa.model.RoadMan;
import com.huacainfo.ace.taa.service.RoadManService;
import com.huacainfo.ace.taa.vo.RoadManVo;
import com.huacainfo.ace.taa.vo.RoadManQVo;
import org.springframework.web.multipart.MultipartFile;
import com.huacainfo.ace.portal.vo.MongoFile;

import java.util.ArrayList;
import java.util.Map;
import java.util.List;

@Controller
@RequestMapping("/roadMan")
/**
 * @author: 陈晓克
 * @version: 2019-01-04
 * @Description: TODO(路长)
 */
public class RoadManController extends TaaBaseController {


    private static final long serialVersionUID = 1L;
    Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private RoadManService roadManService;

    /**
     * @throws
     * @Title:find!{bean.name}List
     * @Description: TODO(路长分页查询)
     * @param: @param condition
     * @param: @param page
     * @param: @return
     * @param: @throws Exception
     * @return: PageResult<RoadManVo>
     * @author: 陈晓克
     * @version: 2019-01-04
     */
    @RequestMapping(value = "/findRoadManList")
    @ResponseBody
    public PageResult<RoadManVo> findRoadManList(RoadManQVo condition, PageParamNoChangeSord page) throws Exception {
        if(CommonUtils.isBlank(condition.getAreaCode())){
            condition.setAreaCode(this.getCurUserProp().getAreaCode());
        }
        PageResult<RoadManVo> rst = this.roadManService.findRoadManList(condition, page.getStart(), page.getLimit(), page.getOrderBy());
        if (rst.getTotal() == 0) {
            rst.setTotal(page.getTotalRecord());
        }

        return rst;
    }

    /**
     * @throws
     * @Title:insertRoadMan
     * @Description: TODO(添加路长)
     * @param: @param jsons
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: 陈晓克
     * @version: 2019-01-04
     */
    @RequestMapping(value = "/insertRoadMan")
    @ResponseBody
    public MessageResponse insertRoadMan(String jsons) throws Exception {
        RoadMan obj = JSON.parseObject(jsons, RoadMan.class);
        return this.roadManService.insertRoadMan(obj, this.getCurUserProp());
    }

    /**
     * @throws
     * @Title:updateRoadMan
     * @Description: TODO(更新路长)
     * @param: @param jsons
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: 陈晓克
     * @version: 2019-01-04
     */
    @RequestMapping(value = "/updateRoadMan")
    @ResponseBody
    public MessageResponse updateRoadMan(String jsons) throws Exception {
        RoadMan obj = JSON.parseObject(jsons, RoadMan.class);
        return this.roadManService.updateRoadMan(obj, this.getCurUserProp());
    }

    /**
     * @throws
     * @Title:selectRoadManByPrimaryKey
     * @Description: TODO(获取路长)
     * @param: @param id
     * @param: @throws Exception
     * @return: SingleResult<RoadMan>
     * @author: 陈晓克
     * @version: 2019-01-04
     */
    @RequestMapping(value = "/selectRoadManByPrimaryKey")
    @ResponseBody
    public SingleResult<RoadManVo> selectRoadManByPrimaryKey(String id) throws Exception {
        return this.roadManService.selectRoadManByPrimaryKey(id);
    }

    /**
     * @throws
     * @Title:deleteRoadManByRoadManId
     * @Description: TODO(删除路长)
     * @param: @param jsons
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: 陈晓克
     * @version: 2019-01-04
     */
    @RequestMapping(value = "/deleteRoadManByRoadManId")
    @ResponseBody
    public MessageResponse deleteRoadManByRoadManId(String jsons) throws Exception {
        JSONObject json = JSON.parseObject(jsons);
        String id = json.getString("id");
        return this.roadManService.deleteRoadManByRoadManId(id, this.getCurUserProp());
    }

    /**
     * @throws
     * @Title:audit
     * @Description: TODO(审核路长)
     * @param: @param id bean.id
     * @param: @param rst 审核结果 3-通过 4-拒绝
     * @param: @param message 审核说明
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: 陈晓克
     * @version: 2019-01-04
     */
    @RequestMapping(value = "/audit")
    @ResponseBody
    public MessageResponse audit(String id, String rst, String message) throws Exception {

        return this.roadManService.audit(id, rst, message, this.getCurUserProp());
    }


    /**
     * @throws
     * @Title:importXls
     * @Description: TODO(导入!{bean.tableChineseName})
     * @param: @param file
     * @param: @param jsons
     * @param: @return
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: 陈晓克
     * @version:2019-01-04
     */
    @RequestMapping(value = "/importXls")
    @ResponseBody
    public MessageResponse importXls(@RequestParam MultipartFile[] file,
                                     String jsons) throws Exception {
        ExcelUtils utils = new ExcelUtils();
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        MongoFile[] files = new MongoFile[file.length];
        int i = 0;
        for (MultipartFile o : file) {
            MongoFile obj = new MongoFile();
            obj.setInputStream(o.getInputStream());
            obj.setFilename(o.getOriginalFilename());
            obj.setLength(o.getSize());
            files[i] = obj;
            i++;
            String ext = obj
                    .getFilename()
                    .toLowerCase()
                    .substring(
                            obj.getFilename().toLowerCase()
                                    .lastIndexOf("."));
            this.logger.info(ext);
            if (ext.equals(".xls")) {
                list = utils.readExcelByJXL(obj.getInputStream(), 2);
            }
            if (ext.equals(".xlsx")) {
                list = utils.readExcelByPOI(obj.getInputStream(), 2);
            }
        }
        return this.roadManService.importXls(list, this.getCurUserProp());
    }

    /**
     * @throws
     * @Title:getListByCondition
     * @Description: TODO(路长查询，用于控件数据获取)
     * @param: @param params
     * @param: @return
     * @return: Map<String,Object>
     * @author: chenxiaoke
     * @version: 2019年1月04日 下午1:24:14
     */
    @RequestMapping(value = "/getListByCondition")
    @ResponseBody
    public Map<String, Object> getListByCondition(){
        return this.roadManService.getListByCondition(this.getParams());
    }
}
