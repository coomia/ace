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
    <title>议题点子</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <meta content="${cfg.sys_name}" name="description"/>
    <%--common css--%>
    <jsp:include page="/dynamic/common/header.jsp"/>
    <link rel="stylesheet" href="css/style.css">
    <%--custom css--%>
</head>
<body>
<%--==============common jsp-prefix==============--%>
<jsp:include page="/dynamic/common/prefix${SESSION_USERPROP_KEY.cfg.portalType}.jsp"/>
<%--==============common jsp-prefix==============--%>
<div class="portlet light">
    <div class="portlet-title">
        <div class="caption">
            议题点子
        </div>
        <%-- <div class="actions">
              <a href="javascript:void(0);" onclick="add();"  class="btn green">创建</a>
         </div>--%>
    </div>
    <div class="portlet-body">

        <div class="row">
            <div class="col-sm-8">

            </div>
            <div class="col-sm-4">
                <form onsubmit="return t_query()">
                    <div class="input-group">
                        <input type="text"
                               name="keyword"
                               class="form-control input-circle-left"
                               placeholder="请输入解决方案">
                        <span class="input-group-btn">
                                                                        <button class="btn btn-circle-right btn-default search_btn"
                                                                                type="submit">搜索</button>
                                                                </span>
                    </div>
                </form>
            </div>

        </div>


        <div class="table-scrollable">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th width="5%"> 序号</th>
                    <th width="20%"> 议题</th>
                    <th width="10%"> 提交人</th>
                    <th width="20%"> 解决方案</th>
                    <th width="15%"> 创建日期</th>
                    <th width="15%"> 状态</th>
                    <th width="15%">操作</th>
                </tr>
                </thead>
                <tbody id="page-list">

                </tbody>
            </table>
        </div>
        <div class="paginationbar">
            <ul class="pagination" id="pagination1"></ul>
        </div>

    </div>

</div>
<%--列表juicer模板--%>
<script id="tpl-list" type="text/template">
    {@each data as item, index}
    <tr>
        <td> \${parseInt(index)+1}</td>
        <td> \${item.title}</td>
        <td> \${item.createUserName}</td>
        <td> \$\${item.solution}</td>
        <td> \${item.createDate}</td>
        <td>
            {@if item.status==0}
            <span class="label label-lg label-danger">已删除</span>
            {@else if item.status==1}
            <span class="label label-lg label-info">暂存</span>
            {@else if item.status==2}
            <span class="label label-lg label-warning">提交审核</span>
            {@else if item.status==3}
            <span class="label label-lg label-info">审核通过</span>
            <div style="padding-top:10px">\${item.auditRemark}</div>
            {@else if item.status==4}
            <span class="label label-lg label-info">被驳回</span>
            <div style="padding-top:10px">\${item.auditRemark}</div>
            {@/if}
        </td>
        <td>
            <a class="operation" href="javascript:detail('\${item.id}');">查看详情</a>
            {@if item.status==2}
            <a class="operation" href="#" data-toggle="modal" data-target="#modal-audit" data-id="\${item.id}">审核</a>
            {@/if}
        </td>
    </tr>
    {@/each}
</script>
<%--详情juicer模板--%>
<script id="tpl-detail" type="text/template">
    <table class="table table-bordered table-hover">
        <tr>
            <td class="active"> 解决方案</td>
            <td class="success"> \$\${data.solution}</td>
        </tr>
        <tr>
            <td class="active"> 备注</td>
            <td class="success"> \${data.remark}</td>
        </tr>
        <tr>
            <td class="active"> 状态</td>
            <td class="success">
                {@if data.status == '0'}
                删除
                {@else if data.status == '1'}
                暂存
                {@else if data.status == '2'}
                提交审核
                {@else if data.status == '3'}
                审核通过
                {@else if data.status == '4'}
                驳回
                {@/if}
            </td>
        </tr>
        <tr>
            <td class="active"> 创建人姓名</td>
            <td class="success"> \${data.createUserName}</td>
        </tr>
        <tr>
            <td class="active"> 创建日期</td>
            <td class="success"> \${data.createDate}</td>
        </tr>
    </table>

    <!--议题点子附件表格-->
    {@each data.listSubjectIdeaAnnexVo as item, index}
    <table class="table table-bordered table-hover" style="margin-top: 15px!important;">
        <tr>
            <td class="active"> 附件名称</td>
            <td class="success"> \${item.fileName}</td>
        </tr>
        <tr>
            <td class="active"> 附件大小</td>
            <td class="success"> \${item.fileSize}</td>
        </tr>
        <tr>
            <td class="active"> 附件</td>
            <td class="success">
                {@if item.fileType == '0'}
                <a href="\${item.fileUrl}" download="点子附件">\${item.fileUrl}</a>
                {@else if item.fileType == '1'}
                <img src="\${item.fileUrl}" style="width: 160px; height: 90px;"/>
                {@else if item.fileType == '2'}
                <video src="\${item.fileUrl}" controls width="160" height="90"></video>
                {@/if}
            </td>
        </tr>
    </table>
    {@/each}
</script>

<%--查看详情--%>
<div class="modal fade bs-example-modal-lg" role="dialog" id="modal-detail">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">议题点子详情</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" id="fm-detail" role="form">
                    <div class="form-body">
                        <div class="table-scrollable" id="detail-info">
                            <%--详情模板填充--%>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <%--
                <button type="button" class="btn btn-primary">确定</button>
                --%>
            </div>
        </div>
    </div>
</div>

<div class="modal fade bs-example-modal-lg" role="dialog" id="modal-audit">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">议题点子审核</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" id="fm-audit" role="form">
                    <div class="form-body">
                        <div class="form-group " id="operation">
                            <label class="col-md-2 control-label">审核结果</label>
                            <div class="col-md-10">
                                <div class="radio-group-container">
                                    <label>
                                        <input type="hidden" name="id"/>
                                        <input type="radio" name="rst" value="3"><span style="padding:10px">通过</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="rst" value="4"><span style="padding:10px">退回</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">审核说明</label>
                            <div class="col-md-10">
                                <textarea name="remark" style="width: 100%;height: 100px;"></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary">确定</button>
            </div>
        </div>
    </div>
</div>
<jsp:include page="/dynamic/common/footer.jsp"/>
<script src="${pageContext.request.contextPath}/content/common/js/jqPaginator.js?v=${cfg.version}"></script>
<script src="${pageContext.request.contextPath}/content/common/js/jquery-form.js"></script>
<script src="js/act.js?v=${cfg.version}"></script>
</body>
<style>
    .cover {
        width: 70px;
        height: 70px;
        object-fit: cover;
    }

    .describtion {
        padding-left: 15px;
        height: 50px;
    }

    .cost {
        padding-top: 5px;
        padding-left: 15px;
        color: #FE6500;
    }
</style>
</html>