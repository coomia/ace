<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
    <!DOCTYPE html>
    <!--[if IE 8]>
<html lang="en" class="ie8 no-js"> <![endif]-->
    <!--[if IE 9]>
<html lang="en" class="ie9 no-js"> <![endif]-->
    <!--[if !IE]><!-->
    <html lang="en">
    <!--<![endif]-->

    <head>
        <meta charset="utf-8" />
        <title>${cfg.sys_name}</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="${cfg.sys_name}" name="description" />
        <jsp:include page="../../../common/base.jsp" />
        <link rel="stylesheet" href="${portalPath}/content/common/assets/css/font-awesome.min.css">
        <link rel="stylesheet" href="${portalPath}/content/common/assets/global/plugins/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="${portalPath}/content/common/assets/global/css/components.min.css">
        <link rel="stylesheet" href="${portalPath}/content/common/assets/layouts/layout3/css/layout.min.css">
				<link rel="stylesheet" type="text/css" href="${portalPath}/content/common/assets/layouts/layout3/css/themes/default.min.css"/>
				<link rel="stylesheet" type="text/css" href="${portalPath}/content/common/assets/global/plugins/simple-line-icons/simple-line-icons.min.css"/>
				<link rel="stylesheet" type="text/css" href="${portalPath}/content/common/assets/layouts/layout3/css/custom.min.css" />
        <link rel="stylesheet" href="${pageContext.request.contextPath}/dynamic/service/courseAudit/list/css/style.css">
        <script src="${pageContext.request.contextPath}/dynamic/service/courseAudit/list/js/act.js?v=${cfg.version}"></script>
        <script src="${pageContext.request.contextPath}/content/common/js/loader.js?v=${cfg.version}"></script>
    </head>

    <body>

        <!--隐藏存放ID-->
        <input type="text" hidden value="" id="auditId" />
        <div class="page-wrapper">

            <div class="page-wrapper-row full-height">
                <div class="page-wrapper-middle">
                    <div class="page-container">
                        <div class="page-content-wrapper">
                            <div class="page-content">
                                <div class="container">
                                    <ul class="page-breadcrumb breadcrumb">
                                        <li>
                                            <a href="${pageContext.request.contextPath}/index.jsp">首页</a>
                                            <i class="fa fa-circle"></i>
                                        </li>
                                        <li>
                                            <span>课程审核</span>
                                        </li>
                                    </ul>
                                    <div class="page-content-inner">

                                        <!---==============================================-->

                                        <div class="row">
                                            <div class="col-md-12">
                                                <!-- BEGIN SAMPLE TABLE PORTLET-->
                                                <div class="portlet light">
                                                    <div class="portlet-title">
                                                        <div class="caption">
                                                            课程列表
                                                        </div>
                                                        <div class="actions">

                                                        </div>
                                                    </div>
                                                    <div class="portlet-body">
                                                        <!--具体界面元素开始-->
                                                        <div class="tabbable-line">
                                                            <ul class="nav nav-tabs" id="chapters">

                                                            </ul>
                                                            <div class="tab-content">
                                                                <div class="tab-pane active" id="tab_15_1">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="table-scrollable">
                                                            <table class="table table-hover">
                                                                <thead>
                                                                    <tr>
																																			
                                                                        <th width="5%">
                                                                            ＃
                                                                        </th>
																																				<th width="20%">
																																					课程名称
																																				</th>
                                                                        <th width="15%">
                                                                           课程
                                                                        </th>
                                                                        
                                                                        <th width="15%">
                                                                           创建时间
                                                                        </th>
                                                                        <th width="15%">
                                                                            时长
                                                                        </th>
                                                                        <th width="10%">
                                                                            是否可试听
                                                                        </th>
                                                                        <th width="20%">
                                                                            操作
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="courseList">

                                                                </tbody>
                                                            </table>
                                                            <div class="paginationbar">
                                                                <ul class="pagination" id="pagination1" style="padding-left: 15px;"></ul>
                                                            </div>
                                                        </div>

                                                        <!--具体界面元素结束-->
                                                    </div>
                                                </div>
                                                <!-- END SAMPLE TABLE PORTLET-->
                                            </div>
                                        </div>
                                        <!--=======================================-->

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bottom"></div>
        </div>
    </body>



    <script id="chapterTemp" type="text/template">
        {@each data as item,index} {@if index == 0}
        <li class="active" datattr="\${item.id}" onclick="changeChapter('\${item.id}');">
            <a href="#tab_15_1" data-toggle="tab" aria-expanded="true">第\${parseInt(index)+1}章 \${item.name} </a>
        </li>
        {@else}
        <li datattr="\${item.id}" onclick="changeChapter('\${item.id}');">
            <a href="#tab_15_1" data-toggle="tab" aria-expanded="false">第\${parseInt(index)+1}章 \${item.name} </a>
        </li>
        {@/if} {@/each}
    </script>

    <script id="courseTemp" type="text/template">
        {@each data as item, index}
        <tr>
            <td width="5%" >
               \${parseInt(index)+1}
            </td>
           
            <td width="20%" >
                <span>\${item.name}</span>

            </td>
						<td width="15%">
								<audio src="\${item.mediUrl}" controls ></audio>
						</td>
            <td width="15%" >
                \${item.createDate}
            </td>
            <td width="15%" >
                \${item.duration}秒
            </td>
            <td width="10%" >
                {@if item.free == '0'}
								<span class="label label-lg label-info">是</span>
                {@else if item.free == '1'}
                 <span class="label label-lg label-danger">否</span>
                {@/if}
            </td>
            <td width="20%" >
                <a class="operation" href="javascript:void(0);" data-toggle="modal" data-target="#editCourseSource" onclick="preview('\${item.id}');">查看</a>

            </td>
        </tr>
        {@/each}
    </script>


    </html>
