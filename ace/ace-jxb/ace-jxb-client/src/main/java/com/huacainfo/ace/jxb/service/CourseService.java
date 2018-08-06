package com.huacainfo.ace.jxb.service;

import com.huacainfo.ace.common.model.UserProp;
import com.huacainfo.ace.common.result.MessageResponse;
import com.huacainfo.ace.common.result.PageResult;
import com.huacainfo.ace.common.result.SingleResult;
import com.huacainfo.ace.jxb.model.Course;
import com.huacainfo.ace.jxb.vo.CourseQVo;
import com.huacainfo.ace.jxb.vo.CourseVo;

/**
 * @author: Arvin
 * @version: 2018-08-06
 * @Description: TODO(课程)
 */
public interface CourseService {
    /**
     * @throws
     * @Title:find!{bean.name}List
     * @Description: TODO(课程分页查询)
     * @param: @param condition
     * @param: @param start
     * @param: @param limit
     * @param: @param orderBy
     * @param: @throws Exception
     * @return: PageResult
     * <CourseVo>
     * @author: Arvin
     * @version: 2018-08-06
     */
    PageResult<CourseVo> findCourseList(CourseQVo condition,
                                        int start, int limit, String orderBy) throws Exception;

    /**
     * @throws
     * @Title:insertCourse
     * @Description: TODO(添加课程)
     * @param: @param obj
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: Arvin
     * @version: 2018-08-06
     */
    MessageResponse insertCourse(Course obj, UserProp userProp) throws Exception;

    /**
     * @throws
     * @Title:updateCourse
     * @Description: TODO(更新课程)
     * @param: @param obj
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: Arvin
     * @version: 2018-08-06
     */
    MessageResponse updateCourse(Course obj, UserProp userProp) throws Exception;

    /**
     * @throws
     * @Title:selectCourseByPrimaryKey
     * @Description: TODO(获取课程)
     * @param: @param id
     * @param: @throws Exception
     * @return: SingleResult<Course>
     * @author: Arvin
     * @version: 2018-08-06
     */
    SingleResult<CourseVo> selectCourseByPrimaryKey(String id) throws Exception;

    /**
     * @throws
     * @Title:deleteCourseByCourseId
     * @Description: TODO(删除课程)
     * @param: @param id
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: Arvin
     * @version: 2018-08-06
     */
    MessageResponse deleteCourseByCourseId(String id, UserProp userProp) throws Exception;

}
