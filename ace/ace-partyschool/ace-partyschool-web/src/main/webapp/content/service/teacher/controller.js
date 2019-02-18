jQuery(function ($) {
    //查询
    $('#btn-search').on('click', function () {
        $('#fm-search').ajaxForm({
            beforeSubmit: function (formData, jqForm, options) {
                // var params = {};
                $.each(formData, function (n, obj) {
                    params[obj.name] = obj.value;
                });
                $.extend(params, {
                    time: new Date()
                });
                jQuery(cfg.grid_selector).jqGrid('setGridParam', {
                    page: 1,
                    postData: params
                }).trigger("reloadGrid");
                return false;
            }
        });
    });
    //添加
    $('#btn-view-add').on('click', function () {
        jQuery(cfg.grid_selector).jqGrid('editGridRow', 'new', {
            closeAfterAdd: true,
            recreateForm: true,
            viewPagerButtons: false,
            beforeShowForm: function (e) {
                var form = $(e[0]);
                form.closest('.ui-jqdialog')
                    .find('.ui-jqdialog-titlebar')
                    .wrapInner('<div class = "widget-header" / > ');
                //
                appendUploadBtn("photoUrl");
            }
        })
    });

    //初始化事件
    initEvents();
    //
    initJuicerMethod();
});

/*页面渲染*/
function render(obj, data, tplId) {
    var tpl = document.getElementById(tplId).innerHTML;
    var html = juicer(tpl, {
        data: data,
    });

    $(obj).html(html);
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
}

function initPreview(id) {
    startLoad();
    $.ajax({
        url: cfg.view_load_data_url,
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


function edit(rowid) {
    console.log(rowid);
    jQuery(cfg.grid_selector).jqGrid('setSelection', rowid);

    jQuery(cfg.grid_selector).jqGrid('editGridRow', rowid, {
        closeAfterAdd: true,
        recreateForm: true,
        viewPagerButtons: true,
        beforeShowForm: function (e) {
            var form = $(e[0]);
            form.closest('.ui-jqdialog')
                .find('.ui-jqdialog-titlebar')
                .wrapInner('<div class="widget-header" />');

            appendUploadBtn("photoUrl");

            //readOnly: true,
            // $("#mobile").attr("readOnly", true);
        }
    });
}

var show = false;
function del(rowid) {
    // jQuery(cfg.grid_selector).jqGrid('delGridRow', rowid, {
    //     beforeShowForm: function (e) {
    //         var form = $(e[0]);
    //         if (!show) {
    //             form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />');
    //         }
    //         show = true;
    //     }
    // });

    if (confirm("确认注销么？")) {
        var jsons = {id: rowid};
        startLoad();
        $.ajax({
            url: cfg.grid_delete_data_url,
            type: "post",
            async: false,
            data: {
                jsons: JSON.stringify(jsons),
            },
            success: function (result) {
                stopLoad();
                alert(result.errorMessage);
                jQuery(cfg.grid_selector).jqGrid('setGridParam', {postData: params}).trigger("reloadGrid");
            },
            error: function () {
                stopLoad();
                alert("对不起出错了！");
            }
        });
    }
}
var params = {};
function setParams(key, value) {
    params[key] = value;
    jQuery(cfg.grid_selector).jqGrid('setGridParam', {postData: params}).trigger("reloadGrid");
}

function recover(rowid) {
    if (confirm("确认审核通过么？")) {
        startLoad();
        $.ajax({
            url: cfg.grid_recover_url,
            type: "post",
            async: false,
            data: {
                id: rowid
            },
            success: function (result) {
                stopLoad();
                alert(result.errorMessage);
                jQuery(cfg.grid_selector).jqGrid('setGridParam', {postData: params}).trigger("reloadGrid");
            },
            error: function () {
                stopLoad();
                alert("对不起出错了！");
            }
        });
    }
}

//juicer自定义函数
function initJuicerMethod() {
    juicer.register('parseStatus', parseStatus);
    juicer.register('rsd', rsd);
}

/**
 * 状态
 * 0-已注销
 * 1-有效
 */
function parseStatus(status) {
    switch (status) {
        case '0':
            return "注销";
        case '1':
            return "正常";
        default:
            return "正常";
    }
}