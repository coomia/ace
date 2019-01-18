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
    <title>同期对比</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <meta content="${cfg.sys_name}" name="description"/>
    <jsp:include page="/dynamic/common/header.jsp"/>
    <link href="${portalPath}/content/common/assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css"
          rel="stylesheet" type="text/css"/>

</head>
<body>
<jsp:include page="/dynamic/common/prefix${SESSION_USERPROP_KEY.cfg.portalType}.jsp"/>

<div class="portlet light">

    <div class="portlet-body">

        <div class="row custom-toolbar">
            <div class="col-md-4">
                <%--行政区划--%>
                <div class="input-group" style="float:left;padding-right:10px">
                    行政区划 <input class="easyui-combotree" name="areaCode"
                                data-options="url:﻿'${portalPath}/system/selectProvinceTreeList.do',method:'get',label:'',labelPosition:'top'"
                                style="width:220px;﻿line-height: 30px;height: 30px;">
                </div>
            </div>

            <div class="col-md-8">
                <div class="input-group hide">
                    <span class="input-group-btn" style="padding-right: 5px">
                        <button id="btn-render" class="btn  btn-default search_btn" type="submit"> 搜索</button>
                    </span>
                </div>
            </div>

        </div>


        <div class="table-scrollable" style="width: 100%;height:100%">
            <div id="div-chart" style="width: 1200px;height: 600px">

            </div>
        </div>
        <div class="paginationbar">

        </div>

    </div>

</div>

<%--=============common jsp-suffix===============--%>
<jsp:include page="/dynamic/common/suffix${SESSION_USERPROP_KEY.cfg.portalType}.jsp"/>
<%--==============common jsp-suffix==============--%>
</body>

<jsp:include page="/dynamic/common/footer.jsp"/>

<link rel="stylesheet" type="text/css"
      href="${portalPath}/content/common/js/jquery-easyui-1.3.6/themes/metro/easyui.css?version=${cfg.version}">
<link rel="stylesheet" type="text/css"
      href="${portalPath}/content/common/js/jquery-easyui-1.3.6/themes/icon.css?version=${cfg.version}">
<script type="text/javascript"
        src="${portalPath}/content/common/js/jquery-easyui-1.3.6/gz/jquery.easyui.min.js?version=${cfg.version}"></script>
<script type="text/javascript"
        src="${portalPath}/content/common/js/jquery-easyui-1.3.6/locale/easyui-lang-zh_CN.js?version=${cfg.version}"></script>
<script src="${portalPath}/content/common/js/jquery.form.js?v=${cfg.version}"></script>


<script src="${portalPath}/system/getUserProp.do?version=${cfg.version}"></script>
<script src="js/act.js?v=${cfg.version}"></script>
<script src="js/echarts.js?v=${cfg.version}"></script>

</html>
