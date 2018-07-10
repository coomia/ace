<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8" %>
<!DOCTYPE html>
<html lang="cn">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta charset="utf-8"/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <title>慈善项目</title>
</head>
<jsp:include page="../../common/common.jsp"/>
<link rel="stylesheet" href="${portalPath}/content/common/assets/css/colorbox.css"/>
<link rel="stylesheet" type="text/css" media="screen"
      href="${portalPath}/content/common/js/plupload-2.1.2/js/jquery.plupload.queue/css/jquery.plupload.queue.css"/>
<script type="text/javascript">

</script>
<body>
<div class="page-content">
    <div class="widget-box" id="widget-box">
        <div class="widget-header">
            <h5 class="widget-title smaller">设置查询条件</h5>
            <div class="widget-toolbar"></div>
        </div>
        <div class="widget-body">
            <div class="widget-main padding-6">
                <form action="#" id="fm-search">
                    类别：<input name="type" class="easyui-combobox" style="width: 200px"
                              data-options="
                    url:'${portalPath}/dict/findListByCategoryId.do?categoryId=142&selected=false',
                    method:'get',
                    valueField:'code',
                    textField:'name',
                    panelHeight:'auto'">

                    名称： <input name="projectName" type="text" style="width: 200px;"/>
                    <button class="btn btn-info" id="btn-search"
                            authority="${pageContext.request.contextPath}/cuProject/findCuProjectList">
                        <i class="ace-icon fa fa-search  align-middle bigger-125 icon-on-right"></i>
                    </button>
                </form>
                <div class="space10"></div>
                <div id="toolbar" class="toolbar">

                    <button class="btn btn-info" id="btn-view-add"
                            authority="${pageContext.request.contextPath}/cuProject/insertCuProject">
                        <i class="ace-icon fa fa-plus-square  align-middle bigger-125 icon-on-right"></i>
                    </button>
                    <button class="btn btn-info" id="btn-view-edit"
                            authority="${pageContext.request.contextPath}/cuProject/updateCuProject">
                        <i class="ace-icon fa fa-edit  align-middle bigger-125 icon-on-right"></i>
                    </button>
                    <button class="btn btn-warning" id="btn-view-del"
                            authority="${pageContext.request.contextPath}/cuProject/deleteCuProjectByCuProjectId">
                        <i class="ace-icon glyphicon  glyphicon-remove  align-middle bigger-125 icon-on-right"></i>
                    </button>
                    <%--添加使用记录--%>
                    <button class="btn btn-info" id="btn-view-add-use-record"
                            authority="${pageContext.request.contextPath}/cuProject/addUseRecord">
                        <i class="ace-icon fa fa-plus-square  align-middle bigger-125 icon-on-right"></i>
                    </button>

                    <%--审核--%>
                    <button class="btn btn-purple" id="btn-view-audit"
                            authority="${pageContext.request.contextPath}/cuProject/audit">
                        <i class="ace-icon glyphicon  glyphicon-remove  align-middle bigger-125 icon-on-right"></i>
                    </button>
                    <%--确认上线--%>
                    <button class="btn btn-purple" id="btn-view-setup"
                            authority="${pageContext.request.contextPath}/cuProject/setup">
                        <i class="ace-icon glyphicon  glyphicon-remove  align-middle bigger-125 icon-on-right"></i>
                    </button>
                    <%--强制下线--%>
                    <button class="btn btn-purple" id="btn-view-shutDown"
                            authority="${pageContext.request.contextPath}/cuProject/shutDown">
                        <i class="ace-icon glyphicon  glyphicon-remove  align-middle bigger-125 icon-on-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <table id="grid-table"></table>

    <div id="grid-pager"></div>

    <div id="dialog-message-audit" class="hide">
        <form action="/cuProject/audit" id="fm-audit">
            <fieldset>
                审核结果：
                <input id="audit_pass" name="audit_result" type="radio" value="0"/> 通过
                <input id="audit_unpass" name="audit_result" type="radio" value="1"/> 不通过
            </fieldset>
            <div class="space-6"></div>
            <fieldset>
                审核备注： <textarea id="audit_opinion" cols="30" rows="10"></textarea>
            </fieldset>
        </form>
    </div>
    <div id="dialog-message-showDown" class="hide">
        <form action="/cuProject/showDown" id="fm-showDown">
            <fieldset>
                下线缘由： <textarea id="shutdown_reason" cols="30" rows="10"></textarea><span
                    style="color:red;font-size:16px;font-weight:800">*</span>
            </fieldset>
        </form>
    </div>
</div>
<div id="dialog-message" class="hide">
    <div id="uploader">
        <p>Your browser doesn't have Flash, Silverlight or HTML5 support.</p>
    </div>
</div>
<div id="dialog-message-file" class="hide">
    <div id="load" class="loading"></div>
</div>

<div id="dialog-message-view" class="hide">
    <h5 class="header-title">基本信息</h5>
    <div class="row" style="padding:10px">
        <div class="labelItem hide">
            <span class="labelItemHeader">主键</span>
            <br>
            <span id="id"></span>
        </div>
        <div class="labelItem hide">
            <span class="labelItemHeader">隶属于</span>
            <br>
            <span id="parentId"></span>
        </div>
        <div class="labelItem">
            <span class="labelItemHeader">项目名称</span>
            <br>
            <span id="projectName"></span>
        </div>
        <div class="labelItem">
            <span class="labelItemHeader">项目标题</span>
            <br>
            <span id="title"></span>
        </div>
        <div class="labelItem">
            <span class="labelItemHeader">项目类型</span>
            <br>
            <span id="type"></span>
        </div>
        <div class="labelItem">
            <span class="labelItemHeader">项目封面</span>
            <br>
            <span id="coverUrl"></span>
        </div>
        <div class="labelItem">
            <span class="labelItemHeader">项目详情</span>
            <br>
            <span id="description"></span>
        </div>
        <div class="labelItem">
            <span class="labelItemHeader">项目开始时间</span>
            <br>
            <span id="startDate"></span>
        </div>
        <div class="labelItem">
            <span class="labelItemHeader">项目结束时间</span>
            <br>
            <span id="endDate"></span>
        </div>
        <div class="labelItem hide">
            <span class="labelItemHeader">目标金额</span>
            <br>
            <span id="targetAmount"></span>
        </div>
        <div class="labelItem">
            <span class="labelItemHeader">已募集金额</span>
            <br>
            <span id="collectAmount"></span>
        </div>
        <div class="labelItem">
            <span class="labelItemHeader">已支出金额</span>
            <br>
            <span id="payoutAmount"></span>
        </div>
        <div class="labelItem">
            <span class="labelItemHeader">结余金额</span>
            <br>
            <span id="balanceAmount"></span>
        </div>
        <div class="labelItem">
            <span class="labelItemHeader">备注</span>
            <br>
            <span id="remark"></span>
        </div>
        <div class="labelItem hide">
            <span class="labelItemHeader">状态</span>
            <br>
            <span id="status"></span>
        </div>
    </div>
    <h5 class="header-title">操作信息</h5>
    <div class="row" style="padding:10px">
        <div class="labelItem hide">
            <span class="labelItemHeader">创建人编号</span>
            <br>
            <span id="createUserId"></span>
        </div>
        <div class="labelItem">
            <span class="labelItemHeader">创建人姓名</span>
            <br>
            <span id="createUserName"></span>
        </div>
        <div class="labelItem">
            <span class="labelItemHeader">入库日期</span>
            <br>
            <span id="createDate"></span>
        </div>
        <div class="labelItem hide">
            <span class="labelItemHeader">最后更新人编号</span>
            <br>
            <span id="lastModifyUserId"></span>
        </div>
        <div class="labelItem">
            <span class="labelItemHeader">最后更新人姓名</span>
            <br>
            <span id="lastModifyUserName"></span>
        </div>
        <div class="labelItem">
            <span class="labelItemHeader">最后更新时间</span>
            <br>
            <span id="lastModifyDate"></span>
        </div>
    </div>

</div>
<jsp:include page="../../common/footer-1.jsp"/>
<script src="${pageContext.request.contextPath}/content/service/cuProject/config.js?version=${cfg.version}"></script>
<script src="${pageContext.request.contextPath}/content/service/cuProject/model.js?version=${cfg.version}"></script>
<script src="${pageContext.request.contextPath}/content/service/cuProject/controller.js?version=${cfg.version}"></script>
<script src="${pageContext.request.contextPath}/content/service/cuProject/view.js?version=${cfg.version}"></script>
<script src="${pageContext.request.contextPath}/content/service/cuProject/upload.js?version=${cfg.version}"></script>

<script type="text/javascript" src="${portalPath}/content/common/js/plupload-2.1.2/js/plupload.full.min.js"></script>
<script type="text/javascript" src="${portalPath}/content/common/js/plupload-2.1.2/js/i18n/zh_CN.js"></script>
<script type="text/javascript"
        src="${portalPath}/content/common/js/plupload-2.1.2/js/jquery.plupload.queue/jquery.plupload.queue.js"></script>

<script type="text/javascript" src="${portalPath}/content/common/simditor/scripts/module.js"></script>
<script type="text/javascript" src="${portalPath}/content/common/simditor/scripts/hotkeys.js"></script>
<script type="text/javascript" src="${portalPath}/content/common/simditor/scripts/uploader.js"></script>
<script type="text/javascript" src="${portalPath}/content/common/simditor/scripts/simditor.js"></script>
<link rel="stylesheet" type="text/css" href="${portalPath}/content/common/simditor/styles/simditor.css"/>

<jsp:include page="../../common/footer-2.jsp"/>
<script type="text/javascript">
    window.onresize = function () {
        console.log('autoWidthJqgrid');
        $(cfg.grid_selector).jqGrid('setGridWidth', $(".page-content").width());
        $(cfg.grid_selector).jqGrid('setGridHeight', window.innerHeight - layoutTopHeight);
        parent.autoWidth();
    }
</script>
</body>
</html>