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
    <link rel="stylesheet"
          href="${portalPath}/content/common/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css">
    <link rel="stylesheet" href="${portalPath}/content/common/jcrop/jquery.Jcrop.css">
    <%--<link rel="stylesheet" href="${pageContext.request.contextPath}/content/service/reservation/css/style.css">--%>
    <script src="${pageContext.request.contextPath}/content/service/userOrder/js/act.js?v=${cfg.version}"></script>
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
                                    <a href="index4.jsp">首页</a>
                                    <i class="fa fa-circle"></i>
                                </li>
                                <li>
                                    <span>仪表盘</span>
                                </li>
                            </ul>
                            <div class="page-content-inner">
                                <div class="row">
                                    <div class="col-md-12">
                                        <!-- BEGIN PROFILE SIDEBAR -->
                                        <div class="profile-sidebar">
                                            <!-- PORTLET MAIN -->
                                            <div class="portlet light profile-sidebar-portlet ">
                                                <!-- SIDEBAR USERPIC -->
                                                <div class="profile-userpic">
                                                    <img src="${pageContext.request.contextPath}/content/service/information/img/left_pic_two.jpg"
                                                         class="user-imagePhotoUrl img-responsive" alt="">
                                                </div>
                                                <!-- END SIDEBAR USERPIC -->
                                                <!-- SIDEBAR USER TITLE -->
                                                <div class="profile-usertitle">
                                                    <div class="profile-usertitle-name user-name"></div>
                                                    <div class="profile-usertitle-job user-certification"></div>
                                                </div>
                                                <!-- END SIDEBAR USER TITLE -->
                                                <!-- SIDEBAR BUTTONS -->
                                                <div class="profile-userbuttons">
                                                    <button type="button" class="btn btn-circle green btn-sm"
                                                            onclick="javascript:window.location.href='../userInformation/index.jsp'">
                                                        个人信息
                                                    </button>
                                                    <button type="button" class="btn btn-circle red btn-sm"
                                                            onclick="javascript:window.location.href='../userStudio/studio.jsp'">
                                                        工作室信息
                                                    </button>
                                                </div>
                                                <!-- END SIDEBAR BUTTONS -->
                                                <!-- SIDEBAR MENU -->
                                                <div class="profile-usermenu">
                                                    <ul class="nav">
                                                        <li>
                                                            <a href="../userStudioStaff/index.jsp">
                                                                <i class="icon-settings"></i>工作室管理</a>
                                                        </li>

                                                        <li>
                                                            <a href="../userReservation/index.jsp">
                                                                <i class="icon-settings"></i>预约设置</a>
                                                        </li>

                                                        <li class="active">
                                                            <a href="../userOrder/index.jsp">
                                                                <i class="icon-settings"></i>订单管理</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i class="icon-info"></i> Help </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- END MENU -->
                                            </div>
                                            <!-- END PORTLET MAIN -->
                                            <!-- PORTLET MAIN -->
                                            <div class="portlet light ">
                                                <!-- STAT -->
                                                <div class="row list-separated profile-stat">
                                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                                        <div class="uppercase profile-stat-title"> 37</div>
                                                        <div class="uppercase profile-stat-text"> Projects</div>
                                                    </div>
                                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                                        <div class="uppercase profile-stat-title"> 51</div>
                                                        <div class="uppercase profile-stat-text"> Tasks</div>
                                                    </div>
                                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                                        <div class="uppercase profile-stat-title"> 61</div>
                                                        <div class="uppercase profile-stat-text"> Uploads</div>
                                                    </div>
                                                </div>
                                                <!-- END STAT -->
                                                <div>
                                                    <h4 class="profile-desc-title">About Marcus Doe</h4>
                                                    <span class="profile-desc-text"> Lorem ipsum dolor sit amet diam nonummy nibh dolore. </span>
                                                    <div class="margin-top-20 profile-desc-link">
                                                        <i class="fa fa-globe"></i>
                                                        <a href="http://www.keenthemes.com">www.keenthemes.com</a>
                                                    </div>
                                                    <div class="margin-top-20 profile-desc-link">
                                                        <i class="fa fa-twitter"></i>
                                                        <a href="http://www.twitter.com/keenthemes/">@keenthemes</a>
                                                    </div>
                                                    <div class="margin-top-20 profile-desc-link">
                                                        <i class="fa fa-facebook"></i>
                                                        <a href="http://www.facebook.com/keenthemes/">keenthemes</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- END PORTLET MAIN -->
                                        </div>
                                        <!-- END BEGIN PROFILE SIDEBAR -->
                                        <!-- BEGIN PROFILE CONTENT -->
                                        <div class="profile-content">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="portlet light portlet-fit ">
                                                        <div class="portlet-title">
                                                            <div class="caption">
                                                                <i class=" icon-layers font-green"></i>
                                                                <span class="caption-subject font-green bold uppercase"><font
                                                                        style="vertical-align: inherit;"><font
                                                                        style="vertical-align: inherit;">订单管理</font></font></span>
                                                            </div>
                                                        </div>
                                                        <div class="portlet-body">
                                                            <div class="mt-element-card mt-element-overlay">
                                                                <div class="row">

                                                                    <%--content--%>

                                                                    <div class="portlet-body">
                                                                        <div class="mt-element-card mt-element-overlay">
                                                                            <div class="row">

                                                                                <%--content--%>
                                                                                <div class="table-scrollable table-scrollable-borderless"
                                                                                     id="orderList">
                                                                                    <ul class="pagination"
                                                                                        id="pagination1"></ul>
                                                                                </div>
                                                                                <%--content--%>

                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <%--content--%>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- END PROFILE CONTENT -->
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
</div>


<div class="modal fade" id="orderInfoModal" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="gridSystemModalLabel">订单详情</h4>
            </div>
            <div class="modal-body">
                <div class="table-scrollable" id="orderInfo">

                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


</body>


<script id="temp_orderList" type="text/template">

    {@each data as item}
    <table class="table table-hover table-light">
        <thead>
        <tr class="uppercase">
            <th> 订单号：</th>
            <th>\${item.id}</th>
            <th> 订单时间：</th>
            <th>\${item.createDate}</th>
            <th colspan="4"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class="fit" colspan="2">
                <img class="user-pic" src="\${item.counselor.imagePhotoUrl}"></td>
            <td colspan="2">
                \${item.counselor.name}(\${formaCategory(item.category)})
            </td>
            <td>￥\${item.payMoney}</td>
            <td> \${formaPayStatus(item.payStatus)}</td>
            <td colspan="2">
                <a onclick="javascript:detail(\${item.id})" class="primary-link">查看详情</a>
            </td>
        </tr>

        </tbody>
    </table>
    {@/each}

</script>

<script id="temp_orderInfo" type="text/template">

    <table class="table table-bordered table-hover">
        <tr>
            <td class="active"> 买家</td>
            <td class="success"> \${data.consumerName}</td>
        </tr>
        <tr>
            <td class="active"> 卖家</td>
            <td class="success"> \${data.counselor.name}</td>
        </tr>
        <tr>
            <td class="active"> 商品名称</td>
            <td class="success"> \${data.commodityName}</td>
        </tr>
        <tr>
            <td class="active"> 订单类型</td>
            <td class="success"> \${formaCategory(data.category)}</td>
        </tr>
        <tr>
            <td class="active"> 数量</td>
            <td class="success"> \${data.amount}</td>
        </tr>

        <tr>
            <td class="active"> 支付金额</td>
            <td class="success"> \${data.payMoney}</td>
        </tr>
        <tr>
            <td class="active"> 订单状态</td>
            <td class="success"> \${formaPayStatus(data.payStatus)}</td>
        </tr>
        <tr>
            <td class="active"> 下单时间</td>
            <td class="success"> \${data.createDate}</td>
        </tr>
    </table>

</script>

<style>


    .table.table-light {
        /*border-bottom: 1px solid red !important;*/
        margin-bottom: 29px !important;
    }

    .table .user-pic {
        height: 80px !important;
    }

    .portlet-body {
        background-color: #fff !important;
        padding: 41px 98px 45px 20px;
    }

    .active {
        color: #333;
    }
</style>
</html>
