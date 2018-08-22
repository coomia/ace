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
        <link rel="stylesheet" href="${pageContext.request.contextPath}/dynamic/service/course/list/css/style.css">
        <script src="${pageContext.request.contextPath}/dynamic/service/course/list/js/act.js?v=${cfg.version}"></script>
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
                                            <span>课程管理</span>
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
                                                            创建课程
                                                        </div>
                                                        <div class="actions">
                                                            <a href="javascript:void(0);" class="btn green" data-target="#myModal" data-toggle="modal">创建章节</a>
                                                            <a href="javascript:void(0);" class="btn green" data-target="#chapterBox" data-toggle="modal" onclick="initPartListOnModal();">章节修改</a>
                                                            <a href="javascript:void(0);" class="btn green" onclick="add();">创建课程</a>
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
                                                                            <font style="vertical-align: inherit;">
                                                                                <font style="vertical-align: inherit;"> ＃ </font>
                                                                            </font>
                                                                        </th>
                                                                        <th width="15%">
                                                                            <font style="vertical-align: inherit;">
                                                                                <font style="vertical-align: inherit;"> 课程文件 </font>
                                                                            </font>
                                                                        </th>
                                                                        <th width="20%">
                                                                            <font style="vertical-align: inherit;">
                                                                                <font style="vertical-align: inherit;"> 课程名称 </font>
                                                                            </font>
                                                                        </th>
                                                                        <th width="15%">
                                                                            <font style="vertical-align: inherit;">
                                                                                <font style="vertical-align: inherit;"> 创建时间 </font>
                                                                            </font>
                                                                        </th>
                                                                        <th width="15%">
                                                                            <font style="vertical-align: inherit;">
                                                                                <font style="vertical-align: inherit;"> 时长 </font>
                                                                            </font>
                                                                        </th>
                                                                        <th width="10%">
                                                                            <font style="vertical-align: inherit;">
                                                                                <font style="vertical-align: inherit;"> 是否可试听 </font>
                                                                            </font>
                                                                        </th>
                                                                        <th width="20%">
                                                                            <font style="vertical-align: inherit;">
                                                                                <font style="vertical-align: inherit;"> 操作 </font>
                                                                            </font>
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

    <div class="modal fade" tabindex="-1" role="dialog" id="myModal" aria-labelledby="gridSystemModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="gridSystemModalLabel">章节创建</h4>
                </div>
				<div class="modal-body form">
				
                <form class="form-horizontal form-panel" id="fm-group" role="form">
                      <div class="form-body">
                        <div class="form-group">
                            <label class="col-md-3 control-label">章节名称</label>
                            <div class="col-md-9">
                                <input name="partName" class="form-control" type="text" maxlength="50" placeholder="请输入课程章节名称" />
                            </div>
                        </div>
                    </div>
                </form>
				
            </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn green" onclick="addSeries();">确定</button>
                </div>
            </div>
        </div>
    </div>



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
            <td width="5%" class="tdcontent">
                <font style="vertical-align: inherit;">
                    <input type="radio" name="course" value="\${item.id}" />
                    <font style="vertical-align: inherit;">\${parseInt(index)+1} </font>
                </font>
            </td>
            <td width="15%">
                <video src="\${item.mediUrl}" style="width: 80px;height: 60px;background: #C4C8D6;"></video>
            </td>
            <td width="20%" class="tdcontent">
                <span>\${item.name}</span>
            </td>
            <td width="15%" class="tdcontent">
                <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;"> \${item.createDate}</font>
                </font>
            </td>
            <td width="15%" class="tdcontent">
                <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;"> \${item.duration} </font>
                </font>
            </td>
            <td width="10%" class="tdcontent">
                <font style="vertical-align: inherit;">
                    {@if item.free == '0'}
                    <font style="vertical-align: inherit;">是</font>
                </font>
                {@else if item.free == '1'}
                <font style="vertical-align: inherit;">否</font>
                </font>
                {@/if}
            </td>
            <td width="20%" class="tdcontent">
                <a class="operation" href="javascript:void(0);" data-toggle="modal" data-target="#editCourseSource" onclick="editCourseSource('\${item.id}');">编辑</a>
                <a class="operation" href="javascript:void(0);" onclick="deletePartCourse('\${item.id}');">删除</a>
            </td>
        </tr>
        {@/each}
    </script>

    <!--课程编辑-->
    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" id="editCourseSource" aria-labelledby="gridSystemModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content" id="sourceBasic">

            </div>
        </div>
    </div>

    <script id="courseSourceTemp" type="text/template">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="gridSystemModalLabel1">课程编辑</h4>
        </div>
        <div>
            <div class="row">
                <div class="col-xs-12 col-md-2">音频上传</div>
                <div class="col-xs-12 col-md-10">
                    <div class="pictureContainer" id="video" style="z-index: 1;">
                        <div class="viewPicture">
                            <video id="vedioSource" src="\${data.mediUrl}" controls="controls" style="width: 100%;height: 100%;"></video>
                        </div>
                        <div class="uploadText">
                            <p class="imgiocn">
                                <img src="img/video.png" style="display: none;" />
                            </p>
                            <p class="uploadPloadprogress">点击上传视频</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-2">课程文稿</div>
                <div class="col-xs-12 col-md-10">
                    <textarea name="coursedoc" id="coursedoc" class="coursedoc"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-2">是否允许试听</div>
                <div class="col-xs-12 col-md-10">
                    {@if data.free == '0'}
                    <input type="radio" name="tried" value="1" checked/>是
                    <input type="radio" name="tried" value="0" />否 {@else if data.free == '1'}
                    <input type="radio" name="tried" value="1" />是
                    <input type="radio" name="tried" value="0" checked/>否 {@/if}
                </div>
            </div>
            <div class="row form_row">
                <div class="col-xs-12 col-md-2">课程时长</div>
                <div class="col-xs-12 col-md-10">
                    <input name="duation" type="text" class="form_input" value="\${data.duration}" />
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary" onclick="updateCourseSource('\${data.id}','\${data.partId}');">确定</button>
        </div>
    </script>

    <!--章节修改列表-->
    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" id="chapterBox" aria-labelledby="gridSystemModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content" id="chapterList">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="gridSystemModalLabe2">章节管理</h4>
                </div>
                <div class="modal-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th width="10%">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;"> ＃ </font>
                                    </font>
                                </th>
                                <th width="30%">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;"> 章节名称 </font>
                                    </font>
                                </th>

                                <th width="20%">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;"> 操作 </font>
                                    </font>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="chapter">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <script id="editChapterTemp" type="text/template">
        {@each data as item, index}
        <tr>
            <td>
                <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">第\${parseInt(index)+1}章</font>
                </font>
            </td>
            <td  id="chapter-\${item.id}">
                <input name="chapterName" type="text" value="\${item.name}">
            </td>

            <td>
                <a href="javascript:void(0);" onclick="updateChapter('\${item.id}');">修改</a>|
                <a href="javascript:void(0);" onclick="deleteChapter('\${item.id}');">删除</a>
            </td>
        </tr>
        {@/each}
    </script>

    </html>
