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
    <meta charset="utf-8"/>
    <title>${cfg.sys_name}</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <meta content="${cfg.sys_name}" name="description"/>
    <jsp:include page="../../common/base.jsp"/>
    <link rel="stylesheet" href="${portalPath}/content/common/assets/pages/css/profile.css">
    <link rel="stylesheet" href="${portalPath}/content/common/assets/css/font-awesome.min.css">
    <link rel="stylesheet" href="${portalPath}/content/common/assets/global/plugins/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="${portalPath}/content/common/assets/global/css/components.min.css">
    <link rel="stylesheet" href="${portalPath}/content/common/assets/layouts/layout3/css/layout.min.css">
    <link rel="stylesheet" type="text/css" href="${portalPath}/content/common/simditor/styles/simditor.css"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/dynamic/service/course/css/upload.css"/>
    <link rel="stylesheet" href="${portalPath}/content/common/jcrop/jquery.Jcrop.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/dynamic/service/course/css/style.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/dynamic/service/course/css/create.css">
    <script src="${pageContext.request.contextPath}/dynamic/service/course/js/act.js?v=${cfg.version}"></script>
    <script src="${pageContext.request.contextPath}/content/common/js/loader.js?v=${cfg.version}"></script>
</head>

<body>

<!--隐藏存放ID-->
<input type="text" hidden value="" id="auditId"/>
<div class="page-wrapper">

    <div class="page-wrapper-row full-height">
        <div class="page-wrapper-middle">
            <div class="page-container">
                <div class="page-content-wrapper">
                    <div class="page-content">
                        <div class="container">
                            <ul class="page-breadcrumb breadcrumb">
                                <li>
                                    <a href="index4.jsp">首页</a>
                                    <i class="fa fa-circle"></i>
                                </li>
                                <li>
                                    <span>仪表盘</span>
                                </li>
                            </ul>
                            <div class="page-content-inner">

                                <!---==============================================-->

                                <div class="portlet box yellow">
                                    <div class="portlet-title">
                                        <div class="caption">
                                            <i class="fa fa-gift"></i>课程管理 </div>
                                        <div class="tools">
                                            <a href="javascript:;" class="collapse" data-original-title="" title=""> </a>
                                            <a href="#portlet-config" data-toggle="modal" class="config" data-original-title="" title=""> </a>
                                        </div>
                                    </div>
                                    <div class="portlet-body">
                                        <div class="tabbable-line">
                                            <ul class="nav nav-tabs ">
                                                <li class="active" onclick="changeCourseType('1');">
                                                    <a href="#tab_15_1" data-toggle="tab" aria-expanded="true"> 单节课程 </a>
                                                </li>
                                                <li class="" onclick="changeCourseType('2');">
                                                    <a href="#tab_15_1" data-toggle="tab" aria-expanded="false"> 系列课程 </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="tab_15_1">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <!-- BEGIN SAMPLE TABLE PORTLET-->
                                                            <div class="portlet light ">
                                                                <div class="portlet-title">
                                                                    <div class="caption">
                                                                        <i class="icon-social-dribbble font-green"></i>
                                                                        <span class="caption-subject font-green bold uppercase"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">课程管理</font></font></span>
                                                                    </div>
                                                                    <div class="make_course" id="makeCourse"></div>
                                                                    <div class="create_course" id="createCourse"></div>
                                                                </div>
                                                                <div class="portlet-body">
                                                                    <div class="table-scrollable">
                                                                        <table class="table table-hover">
                                                                            <thead>
                                                                            <tr>
                                                                                <th width="5%"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ＃ </font></font></th>
                                                                                <th width="30%"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 课程名称 </font></font></th>
                                                                                <th width="10%"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 状态 </font></font></th>
                                                                                <th width="15%"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 上架时间 </font></font></th>
                                                                                <th width="10%"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 购买数 </font></font></th>
                                                                                <th width="15%"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 审核状态 </font></font></th>
                                                                                <th width="15%"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 操作 </font></font></th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody id="courseList">

                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- END SAMPLE TABLE PORTLET-->
                                                        </div>
                                                        <ul class="pagination" id="pagination1" style="padding-left: 15px;"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

<script id="list" type="text/template">
    {@each data as item, index}
    <tr>
        <td width="5%"><font style="vertical-align: inherit;">
            <input type="radio" name="course" value="\${item.id}"/>
            <font style="vertical-align: inherit;">\${parseInt(index)+1} </font></font>
        </td>
        <td width="30%">
            <img src="\${item.cover}" style="width: 80px;height: 60px;"/>
            <span>\${item.name}</span>
        </td>
        <td width="10%"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  </font></font></td>
        <td width="15%"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> \${item.createDate} </font></font></td>
        <td width="15%"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> \${item.duration} </font></font></td>
        <td width="10%">
            {@if item.status==1}
            <span class="label label-sm label-info"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 待审核 </font></font></span>
            {@else if item.status==2}
            <span class="label label-sm label-warning"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 审核通过 </font></font></span>
            {@else}
            <span class="label label-sm label-danger"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 审核不通过 </font></font></span>
            {@/if}
        </td>
        <td width="15%">
            <a class="operation" href="#" data-target="#editCourse" data-toggle="modal" onclick="clickEdit('\${item.id}');">编辑</a>
            <a class="operation" href="">下架</a>
            <a class="operation" href="javascript:void(0);" onclick="deleteCourse('\${item.id}');">删除</a>
            <a class="operation" href="">查看评论</a>
            <a class="operation" href="">购买明细</a>
        </td>
    </tr>
    {@/each}
</script>

<script id="makeTemp" type="text/template">
    {@if data.type == '1'}
    <a href="javascript:;" class="btn red" style="font-size: 14px !important;" onclick="makecourse();">制作课程<i class="fa fa-edit"></i></a>
    {@else if data.type == '2'}
    <a href="javascript:;" class="btn red" style="font-size: 14px !important;" onclick="makeSeriesCourse();">制作课程<i class="fa fa-edit"></i></a>
    {@/if}
</script>

<script id="createTemp" type="text/template">
    <a href="/jxb/dynamic/service/course/create.jsp" style="font-size: 14px !important;" class="btn green">创建课程<i class="fa fa-plus"></i></a>
</script>
</body>

<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" id="editCourse"
     aria-labelledby="gridSystemModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div id="courseBasic"></div>
        </div>
    </div>
</div>

<script id="editCourseTemp" type="text/template">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title" id="gridSystemModalLabel1">课程编辑</h4>
    </div>
    <div id="courseInfo">
        <div class="row form_row">
            <div class="col-xs-12 col-md-2">课程名称</div>
            <div class="col-xs-12 col-md-10"><input name="courseName" class="form_input" type="text" placeholder="请输入课程名称" value="\${data.name}"/></div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-md-2">课程封面</div>
            <div class="col-xs-12 col-md-10">
                <div class="tips">建议图片尺寸750*420px或16:9，JPG、PNG、GIF格式，大小不超过2M</div>
                {@if data.cover != '' && data.cover != undefined}
                <div class="imgbox" >
                    <img class="select_img form_imagePhotoUrl"
                         id="courseCover"
                         data-toggle="modal"
                         data-xsize="375" data-ysize="210"
                         data-cover="courseCover"
                         data-target="#img-uploader"
                         src="\${data.cover}">
                </div>
                {@else}
                <div class="imgbox" >
                    <img class="select_img form_imagePhotoUrl"
                         id="courseCover"
                         data-toggle="modal"
                         data-xsize="375" data-ysize="210"
                         data-cover="courseCover"
                         data-target="#img-uploader"
                         src="${pageContext.request.contextPath}/dynamic/service/course/img/course_default.jpg?v=${cfg.version}">
                </div>
                {@/if}
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-md-2">课程简介</div>
            <div class="col-xs-12 col-md-10">
                <textarea name="introduction" id="courseIntro" class="introduction">\${data.introduce}</textarea>
            </div>
        </div>
        <div class="row form_row">
            <div class="col-xs-12 col-md-2">价格</div>
            <div class="col-xs-12 col-md-10">
                {@if data.costType == '0'}
                <div class="col-xs-1 col-md-1 payType"><span id="noPay" class="feeLabel cactive" onclick="payTypeCheck('noPay');">免费</span></div>
                <div class="col-xs-1 col-md-1 payType"><span id="pay" class="feeLabel uncactive" onclick="payTypeCheck('pay');">付费</span></div>
                {@else if data.costType == '1'}
                <div class="col-xs-1 col-md-1 payType"><span id="noPay" class="feeLabel uncactive" onclick="payTypeCheck('noPay');">免费</span></div>
                <div class="col-xs-1 col-md-1 payType"><span id="pay" class="feeLabel cactive" onclick="payTypeCheck('pay');">付费</span></div>
                {@/if}
                <div class="col-xs-10 col-md-10">
                    <input name="price" type="text" class="form_input" value="\${data.cost}" />
                </div>
            </div>
        </div>
        <div class="row form_row">
            <div class="col-xs-12 col-md-2">课程对象</div>
            <div class="col-xs-12 col-md-10">
                <span class="pointer cactive">幼儿</span>
                <span class="pointer uncactive">小学</span>
                <span class="pointer uncactive">中学</span>
                <span class="pointer uncactive">高中</span>
            </div>
        </div>
        <div class="row form_row">
            <div class="col-xs-12 col-md-2">适合谁听</div>
            <div class="col-xs-12 col-md-10"><input class="form_input" type="text" placeholder="请输入适合人群" /></div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-md-2">针对能力</div>
            <div class="col-xs-12 col-md-10">
                <div style="height:30px;margin-bottom: 30px;">
                    <span class="ability cactive">心理能力</span>
                    <span class="ability uncactive">学习方法</span>
                    <span class="ability uncactive">团队合作</span>
                    <span class="ability uncactive">沟通表达</span>
                    <span class="ability uncactive">独立思考</span>
                    <span class="ability uncactive">自我认知</span>
                    <span class="ability uncactive">其他</span>
                </div>
                <div style="width:100%;">
                    <textarea class="ability_intro"></textarea>
                </div>
            </div>
        </div>
        <div class="row form_row">
            <div class="col-xs-12 col-md-2">起始人气(选填)</div>
            <div class="col-xs-12 col-md-10">
                <input type="text" class="form_input" />
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-md-2">状态设置</div>
            <div class="col-xs-12 col-md-10">
                <input type="radio" value="" name="status"/>上架
                <input type="radio" value="" name="status"/>下架
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-md-2">音频上传</div>
            <div class="col-xs-12 col-md-10">
                <div class="pictureContainer" id="video" style="z-index: 1;">
                    <div class="viewPicture">
                        <video id="vedioSource" src="\${data.mediUrl}" controls="controls" style="width: 100%;height: 100%;"></video>
                    </div>
                    <div class="uploadText">
                        <p class="imgiocn"><img src="img/video.png" style="display: none;"/></p>
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
                <input type="radio" name="tried" value="0"/>否
                {@else if data.free == '1'}
                <input type="radio" name="tried" value="1"/>是
                <input type="radio" name="tried" value="0" checked/>否
                {@/if}
            </div>
        </div>
        <div class="row form_row">
            <div class="col-xs-12 col-md-2">课程时长</div>
            <div class="col-xs-12 col-md-10">
                <input name="duation" type="text" class="form_input" value="\${data.duration}"/>
            </div>
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
        <button type="button" class="btn btn-primary" onclick="confirmEdit('\${data.id}', '\${data.type}');">确定</button>
    </div>
</script>

<style>
    .modal .headbox {
        width: 150px !important;
        height: 150px !important;
        border-radius: 50% !important;
        overflow: hidden;
        margin: 0 auto;
    }
    .modal-dialog{
        width: 900px !important;
    }
    .modal-body {
        font-size: 16px;
        line-height: 24px;
        text-align: justify
    }

    .modal img {
        width: 100%;
        height: 100%;
    }
</style>
</html>