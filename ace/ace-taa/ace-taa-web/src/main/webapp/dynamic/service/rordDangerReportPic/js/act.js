var loading = {};
var params = {limit: 10};
window.onload = function () {
    initPage();
    initEvents();
    initJuicerMethod();
}


/*路况上报初始化分页*/
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

    $('#fm-search').ajaxForm({
        beforeSubmit: function (formData, jqForm, options) {
            $.each(formData, function (n, obj) {
                params[obj.name] = obj.value;
            });
            params['initType'] = 'init';
            params['start'] = 0;
            getPageList();
            return false;
        }
    }

    function setParams(key, value) {
        params[key] = value;
        getPageList();
    }

    /*路况上报加载表格数据*/
    function getPageList() {
        var url = contextPath + "/rordDangerReportPic/findRordDangerReportPicList";
        params['name'] = $("input[name=keyword]").val();
        startLoad();
        $.getJSON(url, params, function (rst) {
            stopLoad();
            if (rst.status == 0) {
                if (params.initType == "init") {
                    $('#pagination1').jqPaginator('option', {
                        totalCounts: rst.total == 0 ? 1 : rst.total,
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

    /*路况上报添加*/
    function add(type) {
        window.location.href = 'add/index.jsp?id=' + urlParams.id;
    }

    /*路况上报编辑*/
    function edit(did) {
        window.location.href = 'edit/index.jsp?id=' + urlParams.id + '&did=' + did;
    }

    /*查看详情*/
    function detail(id) {
        var url = contextPath + "/rordDangerReportPic/selectRordDangerReportPicByPrimaryKey";
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
    ﻿   $('#modal-preview').on('show.bs.modal', function (event) {
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

    /*路况上报审核*/
    function audit(params) {
        startLoad();
        $.ajax({
            url: contextPath + "/rordDangerReportPic/audit",
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

    /*路况上报上架*/
    function online(id) {
        if (confirm("确定要上架吗？")) {
            startLoad();
            $.ajax({
                url: contextPath + "/rordDangerReportPic/updateStatus",
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

    /*路况上报下架*/
    function outline(id) {
        if (confirm("确定要下架吗？")) {
            startLoad();
            $.ajax({
                url: contextPath + "/rordDangerReportPic/updateStatus",
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
                return "删除";
            case '1':
                return "暂存";
            case '2':
                return "待审";
            case '3':
                return "通过";
            case '4':
                return "驳回";
            default:
                return "";
        }
    }


﻿function initPreview(id) {
        startLoad();
        $.ajax({
            url: contextPath + "/rordDangerReportPic/selectRordDangerReportPicByPrimaryKey",
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
            url: contextPath + "/rordDangerReportPic/selectRordDangerReportPicByPrimaryKey",
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