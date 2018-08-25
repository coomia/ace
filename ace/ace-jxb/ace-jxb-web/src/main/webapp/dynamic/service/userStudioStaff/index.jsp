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

        <jsp:include page="../../common/base.jsp" />
        <link rel="stylesheet" href="${portalPath}/content/common/assets/pages/css/profile.css">
        <link rel="stylesheet" href="${portalPath}/content/common/assets/css/font-awesome.min.css">
        <link rel="stylesheet" href="${portalPath}/content/common/assets/global/plugins/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="${portalPath}/content/common/assets/global/css/components.min.css">
        <link rel="stylesheet" href="${portalPath}/content/common/assets/layouts/layout3/css/layout.min.css">
        <link rel="stylesheet" href="${portalPath}/content/common/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css">
        <link rel="stylesheet" href="${portalPath}/content/common/jcrop/jquery.Jcrop.css">

        <script src="${pageContext.request.contextPath}/content/service/studioStaff/js/act.js?v=${cfg.version}"></script>
        <script src="${pageContext.request.contextPath}/content/common/js/loader.js?v=${cfg.version}"></script>
    </head>

    <body>
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
                                            <span>工作室成员</span>
                                        </li>
                                    </ul>

                                    <div class="page-content-inner">

                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="portlet light ">
                                                    <div class="portlet-title">
                                                        <div class="caption">
                                                            工作室成员
                                                        </div>
                                                    </div>

                                                    <div class="portlet-body">
                                                        <div class="portlet-body">

                                                            <div class="table-scrollable table-scrollable-borderless">
                                                                <table class="table table-hover table-light">
                                                                    <thead>
                                                                        <tr class="uppercase">
                                                                            <th>形象照</th>
                                                                            <th>姓名</th>
                                                                            <th> 职业名称</th>
                                                                            <th> 加入时间</th>
                                                                            
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody id="studioCounselorList">

                                                                    </tbody>
                                                                </table>
                                                            </div>

                                                            <div class="paginationbar">
                                                                <ul class="pagination" id="pagination1"></ul>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bottom"></div>

        </div>

        <div class="modal fade" id="orderInfoModal" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="gridSystemModalLabel">订单详情</h4>
                    </div>
                    <div class="modal-body">
                        <div class="table-scrollable" id="CounselorInfo1">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->


        </div>
    </body>

    <script id="temp_studioCounselorList" type="text/template">
        {@each data as item}
        <tr>
            <td class="fit">
                <img class="user-pic" src="\${item.imagePhotoUrl?item.imagePhotoUrl:'headImg.png'}">
            </td>
            <td>
                \${item.name}
            </td>
            <td>\${item.certification}</td>
            <td>\${item.createDate}</td>
            
        </tr>
        {@/each}
    </script>


    <script id="temp_CounselorInfo1" type="text/template">
        <div style="width: 100px;height: 100px;margin: 10px auto 20px">
            <img STYLE="background-color: #26A1AB; width: 100%;height: auto;object-fit: cover" src="\${data.imagePhotoUrl?data.imagePhotoUrl:'headImg.png'}">
        </div>
        <table class="table table-bordered table-hover">
            <tr>
                <td class="active"> 姓名</td>
                <td class="success"> \${data.name}</td>
            </tr>
            <tr>
                <td class="active"> 职业名称</td>
                <td class="success"> \${data.certification}</td>
            </tr>
            <tr>
                <td class="active"> 擅长领域</td>
                <td class="success"> \${data.tags}</td>
            </tr>
            <tr>
                <td class="active"> 手机号码</td>
                <td class="success"> \${data.mobile}</td>
            </tr>
            <tr>
                <td class="active"> 个人简介</td>
                <td class="success"> \${data.profile}</td>
            </tr>
        </table>
    </script>

    <script id="temp_studioIdList" type="text/template">
        {@each data as item}
        <option value="\${item.id}">\${item.name}</option>
        {@/each}
    </script>


    <style>

        .user-pic {
            background-color: #26A1AB;
        }

        .active {
            color: #333;
        }
    </style>


    </html>
