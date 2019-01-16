<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8" %>
<!DOCTYPE html>
<html lang="cn">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta charset="utf-8"/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <title>学员管理</title>
</head>
<jsp:include page="/dynamic/common/header.jsp"/>
<link rel="stylesheet" href="${portalPath}/content/common/jqGrid/jqGrid.css?v=${cfg.version}"/>
<link rel="stylesheet"
      href="${portalPath}/content/common/js/plupload-2.1.2/js/jquery.plupload.queue/css/jquery.plupload.queue.css"
      type="text/css" media="screen"/>
<link rel="stylesheet" href="${portalPath}/content/common/assets/global/plugins/select2/css/select2-bootstrap.min.css">
<link rel="stylesheet" href="${portalPath}/content/common/assets/global/plugins/select2/css/select2.css">
<body>

<jsp:include page="/dynamic/common/prefix${SESSION_USERPROP_KEY.cfg.portalType}.jsp"/>
<div class="portlet light ">
    <div class="portlet-body">
        <div class="row custom-toolbar">
            <form action="#" id="fm-search">
                <div class="col-md-4 toolbar">
                    <%--${pageContext.request.contextPath}/student/insertStudent--%>
                    <button type="button" class="btn  green" id="btn-view-add"
                            authority="false">添加
                    </button>
                    <button type="button" class="btn  green" id="btn-view-import"
                            authority="false">批量导入
                    </button>
                </div>
                <div class="col-md-8">
                    <div class="input-group" style="float: left;margin-top: 5px;margin-right: 5px;">
                        <label>班次 </label>
                    </div>
                    <div class="input-group" style="float: left;margin-right: 5px;width: 175px">
                        <select id="cls-condition" class="easyui-combogrid form-control" name="classId"
                                style="width:175px; height: 30px; line-height: 30px;">
                        </select>
                    </div>
                    <div class="input-group" style="float: left;margin-right: 5px;width: 195px">
                        <input type="text"
                               name="mobile"
                               class="form-control"
                               placeholder="请输入手机号码">
                    </div>
                    <div class="input-group" style="float: left;margin-right: 5px;width: 195px">
                        <input type="text"
                               name="idCard"
                               class="form-control"
                               placeholder="请输入身份证号码">
                    </div>
                    <div class="input-group">
                        <input type="text"
                               name="name"
                               class="form-control"
                               placeholder="请输入姓名">
                        <span class="input-group-btn">
                            <%--${pageContext.request.contextPath}/student/findStudentList--%>
							<button class="btn  btn-default search_btn" id="btn-search" authority="false">搜索</button>
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

<%--学员导入--%>
<div class="modal fade" role="dialog" id="modal-import">
    <div class="modal-dialog" role="document" style="width: 75%;">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" authority="false" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">批量导入</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="col-md-2 control-label">
                        导入到目标班次<span style='color:red;'>*</span>
                    </label>
                    <div class="col-md-6">
                        <select class="easyui-combogrid" style="width:460px; height: 25px; line-height: 25px;"
                                id="combogrid-cls-list"></select>
                    </div>
                </div>
                <div id="uploader">
                </div>
                <div style="margin:5px">
                    <a href="importTmpl.xls" style="color:red">下载模板</a>.<br>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal" authority="false">关闭</button>
            </div>
        </div>
    </div>
</div>

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
        <label class="col-md-2 view-label">姓名</label>
        <div class="col-md-10">
            \${data.o.name}
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-2 view-label">性别</label>
        <div class="col-md-10">
            \${rsd(data.o.sex,'01')}
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-2 view-label">单位全称</label>
        <div class="col-md-10">
            \${data.o.workUnitName}
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-2 view-label">职务全称</label>
        <div class="col-md-10">
            \${data.o.postName}
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-2 view-label">政治面貌</label>
        <div class="col-md-10">
            \${parsePolitical(data.o.political)}
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-2 view-label">手机号</label>
        <div class="col-md-10">
            \${data.o.mobile}
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-2 view-label">班次</label>
        <div class="col-md-10">
            \${data.o.clsName}
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-2 view-label">身份证号</label>
        <div class="col-md-10">
            \${data.o.idCard}
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-2 view-label">状态</label>
        <div class="col-md-10">
            \${parseStatus(data.o.status)}
        </div>
    </div>
</script>

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
<script type="text/javascript"
        src="${portalPath}/content/common/js/plupload-2.1.2/js/plupload.full.min.js?version=${cfg.version}"></script>
<script type="text/javascript"
        src="${portalPath}/content/common/js/plupload-2.1.2/js/i18n/zh_CN.js?version=${cfg.version}"></script>
<script type="text/javascript"
        src="${portalPath}/content/common/js/plupload-2.1.2/js/jquery.plupload.queue/jquery.plupload.queue.js?version=${cfg.version}"></script>


<script src="${pageContext.request.contextPath}/content/service/student/config.js?version=${cfg.version}"></script>
<script src="${pageContext.request.contextPath}/content/service/student/model.js?version=${cfg.version}"></script>
<script src="${pageContext.request.contextPath}/content/service/student/controller.js?version=${cfg.version}"></script>
<script src="${pageContext.request.contextPath}/content/service/student/view.js?version=${cfg.version}"></script>

<%--权限管理--%>
<script src="${portalPath}/content/common/js/authority.js?version=${cfg.version}"></script>
<%--导入控件--%>
<script src="${pageContext.request.contextPath}/content/service/student/upload.js?version=${cfg.version}"></script>

<script type="text/javascript" src="${portalPath}/content/common/assets/global/plugins/select2/js/select2.js"></script>

</body>
<style>
    /* css code area*/
</style>
</html>