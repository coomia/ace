jQuery(function ($) {
    $.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
        _title: function (title) {
            var $title =
                this.options.title || '&nbsp;'
            if (("title_html" in this.options)
                && this.options.title_html == true)
                title.html($title);
            else
                title.text($title);
        }
    }));
    $('#btn-search').on('click', function () {
        $('#fm-search').ajaxForm({
            beforeSubmit: function (formData, jqForm, options) {
                var params = {};
                $.each(formData, function (n, obj) {
                    params[obj.name] = obj.value;
                });
                $.extend(params, {
                    time: new Date()
                });
                // console.log(params);
                jQuery(cfg.grid_selector).jqGrid('setGridParam', {
                    page: 1,
                    postData: params
                }).trigger("reloadGrid");
                return false;
            }
        });
    });

    $('#btn-view-add').on(
        'click',
        function () {
            jQuery(cfg.grid_selector).jqGrid(
                'editGridRow',
                'new',
                {
                    closeAfterAdd: true,
                    recreateForm: true,
                    viewPagerButtons: false,
                    beforeShowForm: function (e) {
                        var form = $(e[0]);
                        form.closest('.ui-jqdialog').find(
                            '.ui-jqdialog-titlebar').wrapInner(
                            '<div class="widget-header" />')
                        style_edit_form(form);
                        initSimditor($("textarea[name=content]"), null);
                        $('.simditor .simditor-body').prop('contenteditable', false);
                    }
                })
        });
    $('#btn-view-edit').on(
        'click',
        function () {
            var gr = jQuery(cfg.grid_selector).jqGrid('getGridParam',
                'selrow');
            if (!gr) {
                $.jgrid.info_dialog($.jgrid.nav.alertcap,
                    $.jgrid.nav.alerttext)
            }
            jQuery(cfg.grid_selector).jqGrid(
                'editGridRow',
                gr,
                {
                    closeAfterAdd: true,
                    recreateForm: true,
                    viewPagerButtons: true,
                    beforeShowForm: function (e) {
                        var form = $(e[0]);
                        form.closest('.ui-jqdialog').find(
                            '.ui-jqdialog-titlebar').wrapInner(
                            '<div class="widget-header" />')
                        style_edit_form(form);
                        $("#TblGrid_grid-table").after("<div id='custom-dia'></div>");
                        var gr = jQuery(cfg.grid_selector).jqGrid('getGridParam', 'selrow');
                        var gd = jQuery(cfg.grid_selector).jqGrid('getRowData', gr);
                        loadText(gd.id);
                    }
                });
        });
    $('#btn-view-del').on(
        'click',
        function () {

            var gr = jQuery(cfg.grid_selector).jqGrid('getGridParam',
                'selrow');
            if (!gr) {
                $.jgrid.info_dialog($.jgrid.nav.alertcap,
                    $.jgrid.nav.alerttext);
                return;
            }
            jQuery(cfg.grid_selector).jqGrid(
                'delGridRow',
                gr,
                {
                    beforeShowForm: function (e) {
                        var form = $(e[0]);
                        form.closest('.ui-jqdialog').find(
                            '.ui-jqdialog-titlebar').wrapInner(
                            '<div class="widget-header" />')
                        style_edit_form(form);
                    }
                })
        });


    //发布审核
    $('#btn-view-audit').on(
        'click',
        function (e) {
            e.preventDefault();
            var gr = jQuery(cfg.grid_selector).jqGrid('getGridParam', 'selrow');
            if (!gr) {
                $.jgrid.info_dialog($.jgrid.nav.alertcap,
                    $.jgrid.nav.alerttext);
                return;
            }
            var rowData = jQuery(cfg.grid_selector).jqGrid('getRowData', gr);
            if (rowData.status != "1") {
                alert("不能重复审核！")
                return;
            }
            var dialog = $("#dialog-message-audit").removeClass('hide').dialog({
                modal: true,
                width: 380,
                title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-cog'></i> " + rowData.title + " 审核</h4></div>",
                title_html: true,
                buttons: [
                    {
                        html: "<i class='ace-icon fa fa-check bigger-110'></i>&nbsp; 确定",
                        "class": "btn btn-info btn-xs",
                        id: 'ajax_button_audit',
                        click: function () {
                            //for testing
                            var audit_result = $('input[name="audit_result"]:checked').val();
                            var audit_opinion = $('#audit_opinion').val();
                            console.log("audit_result:" + audit_result);
                            console.log("audit_opinion:" + audit_opinion);
                            if (audit_result == undefined) {
                                alert("请选择审核结果!");
                                return;
                            }
                            $(this).dialog("close");
                            $.ajax({
                                type: "post",
                                url: contextPath + "/fopGeHelp/audit",
                                data: {id: rowData.id, auditResult: audit_result, auditOpinion: audit_opinion},
                                beforeSend: function (XMLHttpRequest) {
                                    style_ajax_button('ajax_button_audit', true);
                                },
                                success: function (rst, textStatus) {
                                    style_ajax_button('ajax_button_audit', false);
                                    if (rst) {
                                        bootbox.dialog({
                                            title: '系统提示',
                                            message: rst.errorMessage,
                                            buttons: {
                                                "success": {
                                                    "label": "<i class='ace-icon fa fa-check'></i>确定",
                                                    "className": "btn-sm btn-success",
                                                    "callback": function () {
                                                        dialog.dialog("close");
                                                        //重载数据
                                                        jQuery(cfg.grid_selector).jqGrid('setGridParam', {
                                                            page: 1
                                                        }).trigger("reloadGrid");

                                                    }
                                                }
                                            }
                                        });
                                    }
                                    ;
                                },
                                complete: function (XMLHttpRequest, textStatus) {
                                    style_ajax_button('ajax_button_audit', false);
                                },
                                error: function () {
                                    style_ajax_button('ajax_button_audit', true);
                                }
                            });
                        }
                    },
                    {
                        html: "<i class='ace-icon fa fa-times bigger-110'></i>&nbsp; 取消",
                        "class": "btn btn-xs",
                        click: function () {
                            $(this).dialog("close");
                        }
                    }
                ]
            });
        });

});

function preview(id, title) {
    var dialog = $("#dialog-message-view").removeClass('hide').dialog({
        modal: false,
        width: 800,
        title: "<div class='widget-header widget-header-small'><div class='widget-header-pd'>" + title + "</div></div>",
        title_html: true,
        buttons: [

            {
                html: "<i class='ace-icon fa fa-check bigger-110'></i>&nbsp; 确定",
                "class": "btn btn-info btn-xs",
                click: function () {
                    $(this).dialog("close");
                }
            },
            {
                html: "<i class='ace-icon fa fa-times bigger-110'></i>&nbsp; 取消",
                "class": "btn btn-xs",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });
    $(dialog).parent().css("top", "1px");
    $(dialog).css("max-height", window.innerHeight - layoutTopHeight + 50);
    loadView(id);
}
function loadView(id) {
    $.ajax({
        type: "post",
        url: cfg.view_load_data_url,
        data: {
            id: id
        },
        beforeSend: function (XMLHttpRequest) {
        },
        success: function (rst, textStatus) {
            $.each(rst.value, function (key, value) {
                if (key == 'category') {
                    value = rsd(value, '83');
                }
                if (key == 'status') {
                    value == "1" ? "正常" : "关闭";
                }
                if (key.indexOf('Date') != -1 || key.indexOf('time') != -1 || key.indexOf('Time') != -1 || key.indexOf('birthday') != -1) {
                    value = Common.DateFormatter(value);
                }
                $("#dialog-message-view").find('#' + key).html(value);
            });
        },
        error: function () {
            alert("加载错误！");
        }
    });
}


function style_ajax_button(btnId, status) {
    console.log(status);
    var btn = $('#' + btnId);
    if (status) {
        btn.find('i').removeClass('fa-check');
        btn.find('i').addClass('fa-spinner fa-spin');
        btn.attr('disabled', "true");

    } else {
        btn.find('i').removeClass('fa-spinner');
        btn.find('i').removeClass('fa-spin');
        btn.find('i').addClass('fa-check');
        btn.removeAttr("disabled");
    }
}

function sb(btnId, status, iconCss) {
    console.log(status);
    var btn = $('#' + btnId);
    if (status) {
        btn.find('i').removeClass(iconCss);
        btn.find('i').addClass('fa-spinner fa-spin');
        btn.attr('disabled', "true");

    } else {
        btn.find('i').removeClass('fa-spinner');
        btn.find('i').removeClass('fa-spin');
        btn.find('i').addClass(iconCss);
        btn.removeAttr("disabled");
    }
}

function initSimditor(textarea, text) {
    editor = new Simditor({
        toolbar: false,
        toolbarHidden: true,
        textarea: textarea,//jQuery对象，HTML元素或选择器字符串可以传递给这个选项
        params: {},// 在textarea中插入隐藏的输入来存储参数（键值对）。
    });
    if (text) {
        editor.setValue(text);
        $('.simditor .simditor-body').prop('contenteditable', false);
    }
}

function loadText(id) {
    $.ajax({
        type: "post",
        url: cfg.view_load_data_url,
        data: {
            id: id
        },
        beforeSend: function (XMLHttpRequest) {
        },
        success: function (rst, textStatus) {
            initSimditor($("textarea[name=content]"), rst.value.content);
        },
        error: function () {
            alert("加载错误！");
        }
    });
}