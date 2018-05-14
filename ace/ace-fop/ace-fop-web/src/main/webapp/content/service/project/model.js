var _colNames = ['主键',    '项目名称', '项目类型', '项目代码', '项目阶段', '项目负责人', '所属区域', '所属领域',    '合作方式', '发布日期', '合作内容',    '点击数', '点赞数', '备注', '状态',    '创建人编号', '创建人姓名', '入库日期', '最后更新人编号', '最后更新人姓名', '最后更新时间', '操作'];var _colModel = function () {    return [        {            name: 'id',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'projectName',            editable: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }, {            name: 'projectType',            editable: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'projectCode',            editable: true,            width: 60,            // edittype: "select",            // renderer: function (value) {            //     return rsd(value, "01");            // },            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'process',            editable: true,            width: 85,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'personId',            editable: true,            width: 70,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'areaCode',            editable: true,            hidden: true,            width: 100,            edittype: "combotree",            dataoptions: {                url: portalPath + '/system/selectProvinceTreeList.do',                required: false            },            renderer: function (value, cur) {                return $.jgrid.getAccessor(cur, 'areaName');            },            editoptions: {                style: 'width:200px;height:25px;',            },        }        , {            name: 'sector',            editable: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'coopType',            editable: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50",                colspan: true,            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'releaseDate',            editable: false,            width: 100,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'coopDesc',            editable: true,            hidden: true,            width: 100,            edittype: "textarea",            editoptions: {                style: 'width:650px;height:75px;',                colspan: true,            },        }        , {            name: 'clicks',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'likes',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'remark',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'status',            editable: false,            width: 100,            edittype: "checkbox",            editoptions: {                value: "1:0"            },            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.status == '1') {                    return "style='background:#FF9224;color:#000000'";                }                if (rawObject.status == '2') {                    return "style='background:green;color:#fff'";                }            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '1' :                        rst = "未发布";                        break;                    case '2' :                        rst = "已发布";                        break;                    default :                        rst = "N/A";                }                return rst;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'createUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyDate',            hidden: true,            editable: false,            width: 100        }        ,        {            name: 'opt',            width: 100,            hidden: false,            editable: false,            sortable: false,            renderer: function (value, cur) {                return renderBtn(cur);            }        }    ];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]').addClass(            'ace ace-switch ace-switch-5').after(            '<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}function renderBtn(cur) {    var id = $.jgrid.getAccessor(cur, 'id');    var title = $.jgrid.getAccessor(cur, 'name');    var html = [];    html.push('<a target="_blank" href="');    html.push('javascript:preview(\'' + id + '\',\'' + title + '\')');    html.push('"');    html.push('><span class="badge badge-info">查看</span></a>');    return html.join(' ');}