var _colNames = ['主键', '申请人ID', '申请人微信openid', '申请人微信昵称',    '筹款标题', '筹款说明', '目标金额(元)',    '受助人真实姓名', '受助人联系号码', '受助人身份证号码',    '备注', '状态', '创建人编号', '创建人姓名', '入库日期', '最后更新人编号', '最后更新人姓名', '最后更新时间', //'操作',    '身份证', '其他资料'];var _colModel = function () {    return [        {            name: 'id',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "30",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'applyUserId',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "30",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'applyOpenId',            editable: false,            hidden: true,            width: 60,            renderer: function (value, cur) {                return $.jgrid.getAccessor(cur, 'nickname');            },            editoptions: {                size: "30",                maxlength: "50",                colspan: true,            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'nickname',            editable: true,            width: 60,            editoptions: {                size: "30",                maxlength: "50",                disabled: "disabled",                colspan: true,            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'title',            editable: true,            width: 100,            editoptions: {                style: 'width:650px;',                disabled: "disabled",                colspan: true,            },        }        , {            name: 'description',            editable: true,            hidden: true,            width: 100,            edittype: "textarea",            editoptions: {                colspan: true,                disabled: "disabled",                style: 'width:650px;line-height: 25px;height: 100px;'            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'targetAmount',            editable: true,            width: 55,            editoptions: {                disabled: "disabled",                size: "30",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'realName',            editable: true,            width: 75,            editoptions: {                size: "30",                maxlength: "50",                disabled: "disabled"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'mobileNumber',            editable: true,            width: 85,            // edittype: "select",            // renderer: function (value) {            //     return rsd(value, "01");            // },            // editoptions: {            //     value: odparse("01")            // },            editoptions: {                size: "30",                maxlength: "50",                disabled: "disabled"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'idCard',            editable: true,            width: 100,            // edittype: "select",            // renderer: function (value) {            //     return rsd(value, "01");            // },            // editoptions: {            //     value: odparse("01")            // },            editoptions: {                size: "30",                maxlength: "50",                disabled: "disabled"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'remark',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "30",                maxlength: "50"            },        }        , {            name: 'status',            editable: false,            width: 55,            edittype: "checkbox",            editoptions: {                value: "1:0"            },            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.status == '0') {                    return "style='background:red;color:#fff'";                }                if (rawObject.status == '1') {                    return "style='background:#FF9224;color:#000000'";                }                if (rawObject.status == '2') {                    return "style='background:green;color:#fff'";                }                if (rawObject.status == '3') {                    return "style='background:#F9F900;color:#000000'";                }                if (rawObject.status == '4') {                    return "style='background:#FF9224;color:#000000'";                }            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '0' :                        rst = "已删除";                        break;                    case '1' :                        rst = "待审核";                        break;                    case '2' :                        rst = "通过";                        break;                    case '3' :                        rst = "驳回";                        break;                    default :                        rst = "N/A";                }                return rst;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'createUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyDate',            hidden: true,            editable: false,            width: 100        }        // , {        //     name: 'opt',        //     width: 100,        //     hidden: false,        //     editable: false,        //     sortable: false,        //     renderer: function (value, cur) {        //         return renderBtn(cur);        //     }        // }        , {            name: 'title1',            editable: true,            hidden: true,            editoptions: {                title: true            }        },        {            name: 'title2',            editable: true,            hidden: true,            editoptions: {                title: true            }        }    ];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]').addClass(            'ace ace-switch ace-switch-5').after(            '<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}function renderBtn(cur) {    var id = $.jgrid.getAccessor(cur, 'id');    var title = $.jgrid.getAccessor(cur, 'title');    var html = [];    html.push('<a target="_blank" href="');    html.push('javascript:preview(\'' + id + '\',\'' + title + '\')');    html.push('"');    html.push('><span class="badge badge-info">查看</span></a>');    return html.join(' ');}