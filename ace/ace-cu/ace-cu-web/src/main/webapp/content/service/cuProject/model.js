var _colNames = ['主键', '父级项目ID',    '项目名称', '项目标题', '项目类型', '项目封面', '项目详情', '开始时间', '结束时间',    '目标金额', '已募集金额', '已支出金额', '结余金额',    '备注', '状态', '创建人编号', '创建人姓名', '入库日期',    '最后更新人编号', '最后更新人姓名', '最后更新时间', '操作'];var _colModel = function () {    return [        {            name: 'id',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "30",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'parentId',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "30",                maxlength: "50"            },            renderer: function (value, cur) {                var pName = $.jgrid.getAccessor(cur, 'parentProjectName');                if (null == pName || undefined == pName) {                    return '';                }                return pName;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'projectName',            editable: true,            width: 100,            editoptions: {                size: "30",                maxlength: "50",                colspan: true,            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'title',            editable: true,            width: 100,            editoptions: {                style: 'width:750px;',                colspan: true,            },        }        , {            name: 'type',            editable: true,            width: 100,            edittype: "select",            renderer: function (value) {                return rsd(value, "142");            },            editoptions: {                value: odparse("142"),            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'coverUrl',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "30",            },        }        , {            name: 'description',            editable: true,            hidden: true,            width: 100,            edittype: "textarea",            editoptions: {                colspan: true,                style: 'width:750px;line-height: 25px;height: 100px;'            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'startDate',            editable: true,            hidden: true,            width: 100,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "30",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'endDate',            editable: true,            width: 100,            edittype: "datebox",            hidden: true,            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "30",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'targetAmount',            editable: true,            width: 100,            editoptions: {                size: "30",                maxlength: "50",                colspan: true,            },        }        , {            name: 'collectAmount',            editable: false,            width: 100,            editoptions: {                size: "30",                maxlength: "50"            },        }        , {            name: 'payoutAmount',            editable: false,            width: 100,            editoptions: {                size: "30",                maxlength: "50"            },        }        , {            name: 'balanceAmount',            editable: false,            width: 100,            editoptions: {                size: "30",                maxlength: "50",            },        }        , {            name: 'remark',            editable: true,            width: 100,            editoptions: {                size: "50",                maxlength: "75"            },        }        , {            name: 'status',            editable: false,            width: 50,            edittype: "checkbox",            editoptions: {                value: "1:0"            },            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.status == '0') {                    return "style='background:red;color:#fff'";                }                if (rawObject.status == '1') {                    return "style='background:#FF9224;color:#000000'";                }                if (rawObject.status == '2') {                    return "style='background:green;color:#fff'";                }                if (rawObject.status == '3') {                    return "style='background:#F9F900;color:#000000'";                }            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '0' :                        rst = "已删除";                        break;                    case '1' :                        rst = "待审核";                        break;                    case '2' :                        rst = "通过";                        break;                    case '3' :                        rst = "驳回";                        break;                    default :                        rst = "N/A";                }                return rst;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'createUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyDate',            hidden: true,            editable: false,            width: 100        }        ,        {            name: 'opt',            width: 100,            hidden: false,            editable: false,            sortable: false,            renderer: function (value, cur) {                return renderBtn(cur);            }        }    ];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]').addClass(            'ace ace-switch ace-switch-5').after(            '<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}function renderBtn(cur) {    var id = $.jgrid.getAccessor(cur, 'id');    var title = $.jgrid.getAccessor(cur, 'projectName');    var html = [];    html.push('<a target="_blank" href="');    html.push('javascript:preview(\'' + id + '\',\'' + title + '\')');    html.push('"');    html.push('><span class="badge badge-info">查看</span></a>');    return html.join(' ');}