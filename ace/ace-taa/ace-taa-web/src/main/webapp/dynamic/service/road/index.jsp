<%@ page language="java" contentType="text/html; charset=utf-8"
pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="cn">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta charset="utf-8"/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <title>道路</title>
</head>
<jsp:include page="/dynamic/common/header.jsp"/>
<link rel="stylesheet" href="${portalPath}/content/common/jqGrid/jqGrid.css?v=${cfg.version}"/>

<link rel="stylesheet" href="${portalPath}/content/common/js/plupload-2.1.2/js/jquery.plupload.queue/css/jquery.plupload.queue.css" type="text/css" media="screen" />
<style type="text/css">
		.excel{ background-color:#999; font-size:13px;}
		.excel td{ background-color:#fff; white-space:nowrap;}
		.excel th{ background-color:#E7E7E7; font-weight:normal;}
</style>

<body>

<jsp:include page="/dynamic/common/prefix${SESSION_USERPROP_KEY.cfg.portalType}.jsp"/>
<div class="portlet light ">
    <div class="portlet-body">
        <div class="row custom-toolbar">
            <form action="#" id="fm-search">
                <div class="col-md-6 toolbar">

                    <button type="button" class="btn  green" id="btn-view-add"
                            authority="${pageContext.request.contextPath}/road/insertRoad">添加
                    </button>

                </div>
                <div class="col-md-6">

                    <div class="btn-group"   id="check-group-category" role="group"  style="float:left;padding-right:5px">

                    </div>


                    <div class="input-group">
                        <input type="text"
                               name="name"
                               class="form-control"
                               placeholder="请输入名称">
                        <span class="input-group-btn">
							<button class="btn  btn-default search_btn" id="btn-search"
                                    authority="${pageContext.request.contextPath}/road/findRoadList">
									搜索
							</button>
						</span>
                    </div>

                </div>

            </form>
        </div>

        <table id="grid-table"></table>

        <div class="paginationbar">
            <ul id="grid-pager" class="pagination"></ul>
        </div>
    </div>
</div>

<jsp:include page="/dynamic/common/suffix${SESSION_USERPROP_KEY.cfg.portalType}.jsp"/>
<jsp:include page="/dynamic/common/footer.jsp"/>

<%--查看详情--%>
<div class="modal fade" role="dialog" id="modal-preview">
    <div class="modal-dialog" role="document" style="width: 75%;">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" authority="false">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">详细</h4>
            </div>
            <div class="modal-body">
                <div class="form-horizontal" role="form">
                    <div class="form-body" id="fm-preview">

                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal" authority="false">关闭</button>
            </div>
        </div>
    </div>
</div>
<%--详情juicer模板--%>
<script id="tpl-preview" type="text/template">
    <div class="form-group">
        <label class="col-md-2 view-label">名称</label>
        <div class="col-md-10">
            \${data.o.name}
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-md-2 view-label">介绍</label>
        <div class="col-md-10">
            \${data.o.intro}
        </div>
    </div>
</script>


<script id="tpl-check-group" type="text/template">

    {@each data.list as item, index}
        {@if item.CODE}
            <button type="button" authority="false" class="btn btn-default"  onclick="setParams('\${data.key}','\${item.CODE}');">\${item.NAME}</button>
        {@else}
            <button type="button" authority="false" class="btn btn-default"  onclick="setParams('\${data.key}','');">全部</button>
        {@/if}

    {@/each}

</script>

<div class="modal fade"  role="dialog" id="modal-upload">
    <div class="modal-dialog" role="document" style="width: 90%;">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close"  authority="false" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">Excel导入</h4>
            </div>
            <div class="modal-body">
                <div id="uploader">
                </div>
                <div style="margin:5px">
                    <a href="roadSection.xls" style="color:red">下载模板</a>.<br>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal" authority="false">关闭</button>
            </div>
        </div>
    </div>
</div>

<%--easyui--%>
<link rel="stylesheet" type="text/css"
      href="${portalPath}/content/common/js/jquery-easyui-1.3.6/themes/metro/easyui.css?version=${cfg.version}">
<link rel="stylesheet" type="text/css"
      href="${portalPath}/content/common/js/jquery-easyui-1.3.6/themes/icon.css?version=${cfg.version}">
<script type="text/javascript"
        src="${portalPath}/content/common/js/jquery-easyui-1.3.6/gz/jquery.easyui.min.js?version=${cfg.version}"></script>
<script type="text/javascript"
        src="${portalPath}/content/common/js/jquery-easyui-1.3.6/locale/easyui-lang-zh_CN.js?version=${cfg.version}"></script>
<script src="${portalPath}/content/common/jqGrid/jquery.jqGrid.new.js?version=${cfg.version}"></script>
<script src="${portalPath}/content/common/assets/js/jqGrid/i18n/grid.locale-cn.js?version=${cfg.version}"></script>
<%--导出--%>
<script src="${portalPath}/content/common/tableExport/js-xlsx/xlsx.core.min.js?version=${cfg.version}"></script>
<script src="${portalPath}/content/common/tableExport/FileSaver/FileSaver.min.js?version=${cfg.version}"></script>
<script src="${portalPath}/content/common/tableExport/html2canvas/html2canvas.min.js?version=${cfg.version}"></script>
<script src="${portalPath}/content/common/tableExport/tableExport.min.js?version=${cfg.version}"></script>
<script src="${portalPath}/content/common/tableExport/export.js?version=${cfg.version}"></script>
<script type="text/javascript" src="${portalPath}/content/common/js/plupload-2.1.2/js/plupload.full.min.js?version=${cfg.version}"></script>
<script type="text/javascript" src="${portalPath}/content/common/js/plupload-2.1.2/js/i18n/zh_CN.js?version=${cfg.version}"></script>
<script type="text/javascript" src="${portalPath}/content/common/js/plupload-2.1.2/js/jquery.plupload.queue/jquery.plupload.queue.js?version=${cfg.version}"></script>

<script src="${pageContext.request.contextPath}/content/service/road/config.js?version=${cfg.version}"></script>
<script src="${pageContext.request.contextPath}/content/service/road/model.js?version=${cfg.version}"></script>
<script src="${pageContext.request.contextPath}/content/service/road/controller.js?version=${cfg.version}"></script>
<script src="${pageContext.request.contextPath}/content/service/road/view.js?version=${cfg.version}"></script>

<%--权限管理--%>
<script src="${portalPath}/content/common/js/authority.js?version=${cfg.version}"></script>


<script src="${pageContext.request.contextPath}/content/service/road/upload.js?version=${cfg.version}"></script>
</body>
<style>
    /* css code area*/
</style>
</html>