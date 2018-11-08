var loading = {};
var params = {limit: 5};
var orgType = null;
window.onload = function () {
    jQuery(function ($) {
        $(".breadcrumb").append("<li><span>解决方案</span></li>");
        initPage();
        initEvents();
        initJuicerMethod();
    });
}

function App() {
    console.log("=============================App Start==============================");
}

/*议题点子初始化分页*/
function initPage() {
    $.jqPaginator('#pagination1', {
        totalCounts: 1,
        pageSize: params.limit,
        visiblePages: 10,
        currentPage: 1,
        prev: '<li class="prev"><a href="javascript:;">上一页</a></li>',
        next: '<li class="next"><a href="javascript:;">下一页</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (num, type) {
            params['start'] = (num - 1) * params.limit;
            params['initType'] = type;
            getPageList();
        }
    });
}

/*议题点子条件查询*/
function t_query() {
    getPageList();
    return false;
}

/*议题点子加载表格数据*/
function getPageList() {
    var url = contextPath + "/subjectIdea/findSubjectIdeaList";
    params['solution'] = $("input[name=keyword]").val();
    params['subjectId'] = urlParams.did;
    startLoad();
    $.getJSON(url, params, function (rst) {
        stopLoad();
        if (rst.status == 0) {
            if (params.initType == "init") {
                $('#pagination1').jqPaginator('option', {
                    totalCounts: rst.total==0?1:rst.total,
                    currentPage: 1
                });
            }
            render($("#page-list"), rst.rows, "tpl-list");
        }
    })
}

/*页面渲染*/
function render(obj, data, tplId) {
    var tpl = document.getElementById(tplId).innerHTML;
    var html = juicer(tpl, {
        data: data,
    });
    $(obj).html(html);
}

/*议题点子添加*/
function add(type) {
    window.location.href = 'add/index.jsp';
}

/*议题点子编辑*/
function edit(id) {
    window.location.href = 'edit/index.jsp?id=' + id;
}

/*查看详情*/
function detail(id) {
    var url = contextPath + "/subjectIdea/selectSubjectIdeaByPrimaryKey";
    $.getJSON(url, {id: id}, function (result) {
        if (result.status == 0) {
            var navitem = document.getElementById('tpl-detail').innerHTML;
            var html = juicer(navitem, {data: result.value});
            $("#detail-info").html(html);
            $("#modal-detail").modal("show");
        }
    })
}

function initEvents() {
    $('#modal-audit').on('show.bs.modal', function (event) {
        var relatedTarget = $(event.relatedTarget);
        var id = relatedTarget.data('id');
        orgType = relatedTarget.data('type');
        initForm(id);
    })
    $('#modal-audit .btn-primary').on('click', function () {
        $('#modal-audit form').submit();
    });
    $('#modal-audit form').ajaxForm({
        beforeSubmit: function (formData, jqForm, options) {
            var params = {};
            $.each(formData, function (n, obj) {
                params[obj.name] = obj.value;
            });
            $.extend(params, {
                time: new Date()
            });
            console.log(params);
            audit(params);
            return false;
        }
    });


}

/*议题点子审核*/
function audit(params) {
    startLoad();
    params.orgType = orgType;
    $.ajax({
        url: contextPath + "/subjectIdea/audit",
        type: "post",
        async: false,
        data: params,
        success: function (rst) {
            stopLoad();
            $("#modal-audit").modal('hide');
            alert(rst.errorMessage);
            if (rst.status == 0) {
                getPageList();
            }
        },
        error: function () {
            stopLoad();
            alert("对不起出错了！");
        }
    });
}

//juicer自定义函数
function initJuicerMethod() {
    juicer.register('parseStatus', parseStatus);
}

/**
 * 状态
 * 0-删除
 * 1-暂存
 * 2-提交审核
 * 3-审核通过
 * 4-审核驳回
 */
function parseStatus(status) {
    switch (status) {
        case '0':
            return "已删除";
        case '1':
            return "暂存";
        case '2':
            return "提交审核";
        case '3':
            return "审核通过";
        case '4':
            return "审核驳回";
        default:
            return "";
    }
}

/*查看详情*/
function initForm(id) {
    var url = contextPath + "/subjectIdea/selectSubjectIdeaByPrimaryKey";
    $.getJSON(url, {id: id}, function (result) {
        if (result.status == 0) {
            var navitem = document.getElementById('tpl-fm').innerHTML;
            var html = juicer(navitem, {data: result.value});
            $("#auditContent").html(html);
        }
    })
}