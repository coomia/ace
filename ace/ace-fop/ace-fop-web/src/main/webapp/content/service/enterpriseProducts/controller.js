jQuery(function ($) {
    initEvents();
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
                    beforeSubmit: function (postdata) {
                        postdata.content = editor.getValue();
                        return [true, "", ""];

                    },
                    beforeShowForm: function (e) {
                        initSimditor($("textarea[name=content]"), null);
                        appendUploadBtn("fileUrl");
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
                    beforeSubmit: function (postdata) {
                        postdata.content = editor.getValue();
                        console.log("postdata.content=============================="+ postdata.content);
                        return [true, "", ""];
                    },
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
                        appendUploadBtn("fileUrl");
                    }
                })
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


    //审核
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
                title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-cog'></i> " + rowData.title + "</h4></div>",
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
                                url: contextPath + "/informationService/audit",
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
    window.open(contextPath + "/www/html/product/product_info.html?id=" + id);
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

function initSimditor(textarea, text) {
    editor = new Simditor({
        textarea: textarea,//jQuery对象，HTML元素或选择器字符串可以传递给这个选项
        params: {},// 在textarea中插入隐藏的输入来存储参数（键值对）。
        toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent'],
        upload: {
            url: portalPath + '/files/uploadImage.do', //文件上传的接口地址
            params: null, //键值对,指定文件上传接口的额外参数,上传的时候随文件一起提交
            fileKey: 'file', //服务器端获取文件数据的参数名
            connectionCount: 3,
            leaveConfirm: '正在上传文件'
        }
    });
    if (text) {
        editor.setValue(text);
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

function edit(rowid) {
    console.log(rowid);
    jQuery(cfg.grid_selector).jqGrid(
        'editGridRow',
        rowid,
        {
            closeAfterAdd: true,
            recreateForm: true,
            viewPagerButtons: true,
            beforeSubmit: function (postdata) {
                postdata.content = editor.getValue();
                console.log("postdata.content=============================="+ postdata.content);
                return [true, "", ""];
            },
            beforeShowForm: function (e) {
                loadText(rowid);
                appendUploadBtn("fileUrl");
            }
        });
}
var show = false;
function del(rowid) {
    console.log(rowid);
    jQuery(cfg.grid_selector).jqGrid('delGridRow',
        rowid,
        {
            beforeShowForm: function (e) {
                var form = $(e[0]);
                if (!show) {
                    form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />');
                }

                show = true;

            }
        });
}

function setParams(key, value) {
    params[key] = value;
    jQuery(cfg.grid_selector).jqGrid('setGridParam', {postData: params}).trigger("reloadGrid");
}

function initEvents() {
    //审核模态框
    $('#modal-audit').on('shown.bs.modal', function (event) {
        var relatedTarget = $(event.relatedTarget);
        var id = relatedTarget.data('id');
        console.log(id);
        var modal = $(this);
        modal.find('.modal-body input[name=id]').val(id);
    });
    //审核框 确定按钮
    $('#modal-audit .btn-primary').on('click', function () {
        $('#modal-audit form').submit();
    });
    //审核框 提交事件
    $('#modal-audit form').ajaxForm({
        beforeSubmit: function (formData, jqForm, options) {
            var rstVal = $('input[name="rst"]:checked').val();
            if (rstVal == undefined) {
                alert("请选择审核结果!");
                return;
            }
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

function audit(params) {
    console.log(params);
    startLoad();
    $.ajax({
        type: "post",
        url: contextPath + "/informationService/audit",
        data: {
            id: params.id,
            auditResult: params.rst,
            auditOpinion: params.message
        },
        beforeSend: function (XMLHttpRequest) {
        },
        success: function (rst, textStatus) {
            stopLoad();
            $("#modal-audit").modal('hide');
            alert(rst.errorMessage);
            if (rst.status == 0) {
                jQuery(cfg.grid_selector).jqGrid('setGridParam', {postData: params}).trigger("reloadGrid");
            }
        },
        complete: function (XMLHttpRequest, textStatus) {
        },
        error: function () {
        }
    });
}