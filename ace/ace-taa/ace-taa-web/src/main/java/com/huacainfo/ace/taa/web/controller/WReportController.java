package com.huacainfo.ace.taa.web.controller;

import com.huacainfo.ace.common.model.PageParamNoChangeSord;
import com.huacainfo.ace.common.result.PageResult;
import com.huacainfo.ace.common.result.SingleResult;
import com.huacainfo.ace.taa.service.TraAccService;
import com.huacainfo.ace.taa.vo.TraAccQVo;
import com.huacainfo.ace.taa.vo.TraAccVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 报表数据
 *
 * @Auther: Arvin
 * @Date: 2019/1/12 12:50
 * @Description:
 */
@RestController
@RequestMapping("/www/report")
public class WReportController {

    @Autowired
    private TraAccService traAccService;

    /**
     * 获取事故报表
     *
     * @param condition 条件查询
     * @param page      分页条件
     * @return PageResult<TraAccVo>
     * @throws Exception
     */
    @RequestMapping("/findTraAccList")
    public PageResult<TraAccVo> findTraAccList(TraAccQVo condition, PageParamNoChangeSord page) throws Exception {


        PageResult<TraAccVo> rst = traAccService.findTraAccList(condition,
                page.getStart(), page.getLimit(), page.getOrderBy());
        if (rst.getTotal() == 0) {
            rst.setTotal(page.getTotalRecord());
        }

        return rst;
    }

    /**
     * 查询获取事故详情
     *
     * @param traAccId 事故ID
     * @return SingleResult<TraAccVo>
     * @throws Exception
     */
    @RequestMapping(value = "/selectTraAccInfo")
    public SingleResult<TraAccVo> selectTraAccInfo(String traAccId) throws Exception {
        return traAccService.selectTraAccByPrimaryKey(traAccId);
    }

}

