jQuery(function ($) {
    $.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
        _title: function (title) {
            var $title = this.options.title || '&nbsp;'
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
                //公司类型筛选
                params['companyType'] = "3";

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
                        //添加额外按钮显示
                        appendButtons();
                        //设置企业类型默认值
                        $("#companyType").find("option[value = '3']").attr("selected", "selected");
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
                        //添加额外按钮显示
                        appendButtons();
                        //法人号码一经注册，则不能修改
                        $("#lpMobile").attr("readOnly", "true");
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

    //会员恢复
    $('#btn-view-recover').on('click', function () {
        var gr = jQuery(cfg.grid_selector).jqGrid('getGridParam', 'selrow');
        if (!gr) {
            $.jgrid.info_dialog($.jgrid.nav.alertcap, $.jgrid.nav.alerttext);
            return;
        }
        var rowData = jQuery(cfg.grid_selector).jqGrid('getRowData', gr);
        if (rowData.status != "0") {
            alert("会员状态正常，无需恢复！")
            return;
        }
        //ajax调用
        $.ajax({
            type: "post",
            url: contextPath + "/fopCompany/recoverData",
            data: {
                id: rowData.id,
                type: '0'
            },
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
                                    // dialog.dialog("close");
                                    //重载数据
                                    jQuery(cfg.grid_selector).jqGrid('setGridParam', {
                                        page: 1
                                    }).trigger("reloadGrid");
                                }
                            }
                        }
                    });
                } else {
                    bootbox.dialog({
                        title: '系统提示',
                        message: rst.errorMessage,
                        buttons: {
                            "success": {
                                "label": "<i class='ace-icon fa fa-check'></i>确定",
                                "className": "btn-sm btn-success",
                                "callback": function () {
                                    // dialog.dialog("close");
                                    //重载数据
                                    jQuery(cfg.grid_selector).jqGrid('setGridParam', {
                                        page: 1
                                    }).trigger("reloadGrid");
                                }
                            }
                        }
                    });
                }
            },
            complete: function (XMLHttpRequest, textStatus) {
                style_ajax_button('ajax_button_audit', false);
            },
            error: function () {
                style_ajax_button('ajax_button_audit', true);
            }
        });
    });
});

function preview(id, title) {
    window.open(contextPath + '/dynamic/service/company/view.jsp?companyId=' + id);


    // var dialog = $("#dialog-message-view").removeClass('hide').dialog({
    //     modal: false,
    //     width: 800,
    //     title: "<div class='widget-header widget-header-small'><div class='widget-header-pd'>" + title + "</div></div>",
    //     title_html: true,
    //     buttons: [
    //
    //         {
    //             html: "<i class='ace-icon fa fa-check bigger-110'></i>&nbsp; 确定",
    //             "class": "btn btn-info btn-xs",
    //             click: function () {
    //                 $(this).dialog("close");
    //             }
    //         },
    //         {
    //             html: "<i class='ace-icon fa fa-times bigger-110'></i>&nbsp; 取消",
    //             "class": "btn btn-xs",
    //             click: function () {
    //                 $(this).dialog("close");
    //             }
    //         }
    //     ]
    // });
    // $(dialog).parent().css("top", "1px");
    // $(dialog).css("max-height", window.innerHeight - layoutTopHeight + 50);
    // loadView(id);
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
            //动态渲染
            var tpl = document.getElementById('tpl-company').innerHTML;//'tpl-company'
            var renderHtml = juicer(tpl, rst.value);
            $('#dialog-message-view').html(renderHtml);
            //
            $.each(rst.value, function (key, value) {
                if (key == "thirdLaborRelation") {
                    var rst = "";
                    switch (value) {
                        case '0' :
                            rst = "否";
                            break;
                        case '1' :
                            rst = "是";
                            break;
                        default :
                            rst = "";
                    }
                    value = rst;
                }
                //企业类型 "0": "企业会员", "4": "个人会员"},//, "1": "团体企业", "2": "律师事务所", "3": "银行机构"
                if (key == "companyType") {
                    var rst = "";
                    switch (value) {
                        case '0' :
                            rst = "企业会员";
                            break;
                        case '1' :
                            rst = "团体企业";
                            break;
                        case '2' :
                            rst = "律师事务所";
                            break;
                        case '3' :
                            rst = "银行机构";
                            break;
                        case '4' :
                            rst = "个人会员";
                            break;
                        default :
                            rst = "N/A";
                    }
                    value = rst;
                }
                //企业性质
                if (key == "companyProperty") {
                    value = rsd(value, "134");
                }
                //status
                if (key == "status") {
                    if ("1" == value) {
                        value = "非会员";
                    }
                    if ("2" == value) {
                        value = "会员";
                    }
                }
                //文化程度
                if (key == "lpEducation") {
                    value = rsd(value, "10");
                }
                //民族
                if (key == "lpNationality") {
                    value = rsd(value, "09");
                }
                //性别
                if (key == "lpSex") {
                    value = rsd(value, "01");
                }
                //企业性质
                if (key == "companyProperty") {
                    value = rsd(value, "134");
                }
                //日期格式化
                if (key.indexOf('Dt') != -1 ||
                    key.indexOf('Date') != -1 ||
                    key.indexOf('time') != -1 ||
                    key.indexOf('Time') != -1 ||
                    key.indexOf('birthday') != -1) {
                    value = Common.DateFormatter(value);
                }
                $("#dialog-message-view").find('span[name=' + key + ']').html(value);
                $("#dialog-message-view").find('div[name=' + key + ']').html(value);
            });
        },
        error: function () {
            alert("加载错误！");
        }
    });
}


function appendButtons() {
    //企业通讯地址
    appendMapBtn("address");
    //图片logo上传
    appendUploadBtn("companyLogo");
}

/**
 * 1、添加地图位置的指针*/
function appendMapBtn(id) {
    var html = new Array();
    html.push("<a id='btn-map-add-"
        + id
        + "' class='ace-icon fa fa-location-arrow bigger-110' href='javascript:false'>选取</a>");
    $("#" + id).after(html.join(''));
    $('#btn-map-add-' + id).on('click', function () {
        window.open(portalPath + "/dynamic/common/map.jsp");
    });
}

/**
 * 2、自动填写地址
 * @param latitude
 */
function latitude(latitude) {
    $("#latitude").val(latitude);
}
function longitude(longitude) {
    $("#longitude").val(longitude);
}
function addr(addr) {
    $("#address").val(addr);
}