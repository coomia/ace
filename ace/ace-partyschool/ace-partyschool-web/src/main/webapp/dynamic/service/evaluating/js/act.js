var loading = {};
var params = {limit: 10};
window.onload = function () {
    initPage();
    initEvents();
}


/*评测管理初始化分页*/
function initPage() {
    $.jqPaginator('#pagination1', {
        totalCounts: 1,
        pageSize: params.limit,
        visiblePages: 10,
        currentPage: 1,
        prev: ' <li class="prev"><a href="javascript:;">上一页</a></li>',
        next: ' <li class="next"><a href="javascript:;">下一页</a></li>',
        page: ' <li class="page"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (num, type) {
            params['start'] = (num - 1) * params.limit;
            params['initType'] = type;
            getPageList();
        }
    });
}

/*评测管理条件查询*/
function t_query() {
    getPageList();
    return false;
}

function setParams(key, value) {
    params[key] = value;
    getPageList();
}

/*评测管理加载表格数据*/
function getPageList() {
    var url = contextPath + "/evaluating/findEvaluatingList";
    params['name'] = $("input[name=keyword]").val();
    startLoad();
    $.getJSON(url, params, function (rst) {
        stopLoad();
        if (rst.status == 0) {
            if (params.initType == "init") {
                $('#pagination1').jqPaginator('option', {
                    totalCounts: rst.total
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

/*评测管理添加*/
function add(type) {
    window.location.href = 'add/index.jsp?id=' + urlParams.id;
}

/*评测管理编辑*/
function edit(did) {
    window.location.href = 'edit/index.jsp?id=' + urlParams.id + '&did=' + did;
}

/*查看详情*/
function detail(id) {
    var url = contextPath + "/evaluating/selectEvaluatingByPrimaryKey";
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
    $('#modal-preview').on('show.bs.modal', function (event) {
        var relatedTarget = $(event.relatedTarget);
        var id = relatedTarget.data('id');
        var title = relatedTarget.data('title');
        var modal = $(this);
        console.log(relatedTarget);
        initPreview(id);
    })
    $('#modal-audit').on('show.bs.modal', function (event) {
        var relatedTarget = $(event.relatedTarget);
        var id = relatedTarget.data('id');
        var title = relatedTarget.data('title');
        var modal = $(this);
        console.log(relatedTarget);
        initForm(id);
    })
    $('#modal-audit .audit').on('click', function () {
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
    $(".btn-group .btn").bind('click', function (event) {
        $(event.target).siblings().removeClass("active");
        console.log(event);
        $(event.target).addClass("active");
    });


}

/*评测管理审核*/
function audit(params) {
    startLoad();
    $.ajax({
        url: contextPath + "/evaluating/audit",
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

/*评测管理上架*/
function online(id) {
    if (confirm("确定要上架吗？")) {
        startLoad();
        $.ajax({
            url: contextPath + "/evaluating/updateStatus",
            type: "post",
            async: false,
            data: {
                id: id,
                status: '1'
            },
            success: function (rst) {
                stopLoad();
                if (rst.status == 0) {
                    getPageList();
                } else {
                    alert(rst.errorMessage);
                }
            },
            error: function () {
                stopLoad();
                alert("对不起，出错了！");
            }
        });
    }
}

/*评测管理下架*/
function outline(id) {
    if (confirm("确定要下架吗？")) {
        startLoad();
        $.ajax({
            url: contextPath + "/evaluating/updateStatus",
            type: "post",
            async: false,
            data: {
                id: id,
                status: '0'
            },
            success: function (rst) {
                stopLoad();
                if (rst.status == 0) {
                    getPageList();
                } else {
                    alert(rst.errorMessage);
                }
            },
            error: function () {
                stopLoad();
                alert("对不起，出错了！");
            }
        });
    }
}

function initPreview(id) {
    startLoad();
    $.ajax({
        url: contextPath + "/evaluating/selectEvaluatingByPrimaryKey",
        type: "post",
        async: false,
        data: {
            id: id
        },
        success: function (result) {
            stopLoad();
            if (result.status == 0) {
                var data = {};
                data = result.value;
                render('#fm-preview', data, 'tpl-preview');
            } else {
                alert(result.errorMessage);
            }
        },
        error: function () {
            stopLoad();
            alert("对不起出错了！");
        }
    });
}

function initForm(id) {
    startLoad();
    $.ajax({
        url: contextPath + "/evaluating/selectEvaluatingByPrimaryKey",
        type: "post",
        async: false,
        data: {
            id: id
        },
        success: function (result) {
            stopLoad();
            if (result.status == 0) {
                var data = {};
                data['o'] = result.value;
                render('#fm-audit', data, 'tpl-fm');
            } else {
                alert(result.errorMessage);
            }
        },
        error: function () {
            stopLoad();
            alert("对不起出错了！");
        }
    });
}

function  del(id) {
    var url = contextPath + "/evaluating/softdel";
    $.getJSON(url, {id: id}, function (result) {
        if (result.status == 0) {
            getPageList();
        }
    })
}