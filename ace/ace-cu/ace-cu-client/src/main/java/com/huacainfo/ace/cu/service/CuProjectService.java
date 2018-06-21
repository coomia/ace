package com.huacainfo.ace.cu.service;

import com.huacainfo.ace.common.model.UserProp;
import com.huacainfo.ace.common.result.MessageResponse;
import com.huacainfo.ace.common.result.PageResult;
import com.huacainfo.ace.common.result.ResultResponse;
import com.huacainfo.ace.common.result.SingleResult;
import com.huacainfo.ace.cu.model.CuDonateOrder;
import com.huacainfo.ace.cu.model.CuProject;
import com.huacainfo.ace.cu.vo.CuProjectQVo;
import com.huacainfo.ace.cu.vo.CuProjectVo;

/**
 * @author: Arvin
 * @version: 2018-06-13
 * @Description: TODO(慈善项目)
 */
public interface CuProjectService {
    /**
     * @throws
     * @Title:find!{bean.name}List
     * @Description: TODO(慈善项目分页查询)
     * @param: @param condition
     * @param: @param start
     * @param: @param limit
     * @param: @param orderBy
     * @param: @throws Exception
     * @return: PageResult
     * <CuProjectVo>
     * @author: Arvin
     * @version: 2018-06-13
     */
    PageResult<CuProjectVo> findCuProjectList(CuProjectQVo condition,
                                              int start, int limit, String orderBy) throws Exception;

    /**
     * @throws
     * @Title:insertCuProject
     * @Description: TODO(添加慈善项目)
     * @param: @param obj
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: Arvin
     * @version: 2018-06-13
     */
    MessageResponse insertCuProject(CuProject obj, UserProp userProp) throws Exception;

    /**
     * @throws
     * @Title:updateCuProject
     * @Description: TODO(更新慈善项目)
     * @param: @param obj
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: Arvin
     * @version: 2018-06-13
     */
    MessageResponse updateCuProject(CuProject obj, UserProp userProp) throws Exception;

    /**
     * @throws
     * @Title:selectCuProjectByPrimaryKey
     * @Description: TODO(获取慈善项目)
     * @param: @param id
     * @param: @throws Exception
     * @return: SingleResult<CuProject>
     * @author: Arvin
     * @version: 2018-06-13
     */
    SingleResult<CuProjectVo> selectCuProjectByPrimaryKey(String id) throws Exception;

    /**
     * @throws
     * @Title:deleteCuProjectByCuProjectId
     * @Description: TODO(删除慈善项目)
     * @param: @param id
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: Arvin
     * @version: 2018-06-13
     */
    MessageResponse deleteCuProjectByCuProjectId(String id, UserProp userProp) throws Exception;

    /**
     * 查询项目列表
     *
     * @param type    项目类型 0-普通项目 1-专项项目 2-个人项目 3-支出项目
     * @param start   分页开始位置  --  必选
     * @param limit   页数  --  必选
     * @param orderBy 排序条件   --  可选，默认时间倒叙
     * @return
     * @throws Exception
     */
    ResultResponse findList(String type, int start, int limit, String orderBy) throws Exception;

    /**
     * 查询项目详情
     *
     * @param projectId 慈善项目ID
     * @return
     * @throws Exception
     */
    ResultResponse findDetail(String projectId);


    /**
     * 查询项目使用记录
     *
     * @param projectId 慈善项目ID
     * @param start     分页开始位置  --  必选
     * @param limit     页数  --  必选
     * @param orderBy   排序条件   --  可选，默认时间倒叙
     * @return
     * @throws Exception
     */
    ResultResponse findUsedRecordList(String projectId, int start, int limit, String orderBy) throws Exception;

    /**
     * 查询项目 - 捐赠列表
     *
     * @param projectId 慈善项目ID
     * @param start     分页开始位置  --  必选
     * @param limit     页数  --  必选
     * @param orderBy   排序条件   --  可选，默认时间倒叙
     * @return
     * @throws Exception
     */
    ResultResponse findDonateList(String projectId, int start, int limit, String orderBy) throws Exception;

    CuProjectVo selectVoByPrimaryKey(String projectId);

    ResultResponse pay(CuDonateOrder order);
}