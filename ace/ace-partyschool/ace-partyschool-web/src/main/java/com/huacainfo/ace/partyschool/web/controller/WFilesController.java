package com.huacainfo.ace.partyschool.web.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.huacainfo.ace.common.model.PageParamNoChangeSord;
import com.huacainfo.ace.common.result.MessageResponse;
import com.huacainfo.ace.common.result.PageResult;
import com.huacainfo.ace.common.result.SingleResult;
import com.huacainfo.ace.partyschool.model.Files;
import com.huacainfo.ace.partyschool.service.clsFilesService;
import com.huacainfo.ace.partyschool.vo.FilesQVo;
import com.huacainfo.ace.partyschool.vo.FilesVo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/www/files")
/**
 * @author: Arvin
 * @version: 2019-01-04
 * @Description: TODO(班级文件)
 */
public class WFilesController extends BisBaseController {


    private static final long serialVersionUID = 1L;
    Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private clsFilesService clsFilesService;

    /**
     * @throws
     * @Title:find!{bean.name}List
     * @Description: TODO(班级文件分页查询)
     * @param: @param condition
     * @param: @param page
     * @param: @return
     * @param: @throws Exception
     * @return: PageResult
     * <FilesVo>
     * @author: Arvin
     * @version: 2019-01-04
     */
    @RequestMapping(value = "/findFilesList")
    @ResponseBody
    public PageResult<FilesVo> findFilesList(FilesQVo condition, PageParamNoChangeSord page) throws Exception {
        PageResult<FilesVo> rst = this.clsFilesService.findFilesList(condition, page.getStart(), page.getLimit(), page.getOrderBy());
        if (rst.getTotal() == 0) {
            rst.setTotal(page.getTotalRecord());
        }
        return rst;
    }

}
