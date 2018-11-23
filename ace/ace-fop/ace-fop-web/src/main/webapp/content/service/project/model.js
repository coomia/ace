var _colNames = ['主键',    '项目名称', '合作方式', '所属区域', '项目类型', '项目内容', '发布日期',    '项目代码', '项目阶段', '项目负责人', '所属领域', '点击数', '点赞数',//注释内容    '备注', '状态',    '创建人编号', '创建人姓名', '入库日期', '最后更新人编号', '最后更新人姓名', '最后更新时间', '操作'];var _colModel = function () {    return [        {            name: 'id',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'projectName',            editable: true,            width: 300,            editoptions: {                style: 'width:82%;height:25px;',                colspan: true,            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'coopType',            editable: true,            width: 80,            edittype: "select",            renderer: function (value) {                return rsd(value, "137");            },            editoptions: {                value: odparse("137"),            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'areaCode',            editable: true,            hidden: true,            width: 100,            edittype: "combotree",            dataoptions: {                url: portalPath + '/system/selectProvinceTreeList.do',                required: false            },            renderer: function (value, cur) {                return $.jgrid.getAccessor(cur, 'areaCodeName');            },            editoptions: {                style: 'width:200px;height:25px;',            },        }        , {            name: 'projectType',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",                colspan: true,            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'coopDesc',            editable: true,            hidden: true,            width: 100,            edittype: "textarea",            editoptions: {                style: 'width:650px;height:125px;',                colspan: true,            },        }        , {            name: 'releaseDate',            editable: false,            width: 100,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'projectCode',            editable: false,            hidden: true,            width: 60,            // edittype: "select",            // renderer: function (value) {            //     return rsd(value, "01");            // },            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'process',            editable: false,            hidden: true,            width: 85,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'personId',            editable: false,            hidden: true,            width: 70,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'sector',            editable: false,            hidden: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'clicks',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'likes',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'remark',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'status',            editable: false,            width: 50,            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.status == '1') {                    return "style='background:#FF9224;color:#000000'";                }                if (rawObject.status == '2') {                    return "style='background:green;color:#fff'";                }                if (rawObject.status == '3') {                    return "style='background:#F9F900;color:#000000'";                }            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '1' :                        rst = "审核中";                        break;                    case '2' :                        rst = "审核通过";                        break;                    case '3' :                        rst = "驳回";                        break;                    default :                        rst = "N/A";                }                return rst;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'createUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyDate',            hidden: true,            editable: false,            width: 100        }        ,        {            name: 'opt',            width: 50,            hidden: false,            editable: false,            sortable: false,            renderer: function (value, cur) {                return renderBtn(cur);            }        }    ];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]').addClass(            'ace ace-switch ace-switch-5').after(            '<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}function renderBtn(cur) {    var rowid = $.jgrid.getAccessor(cur, cfg.dataId);    var title = $.jgrid.getAccessor(cur, 'projectName');    var opt = [];    if (authorConfig.hasOwnProperty(cfg.grid_edit_data_url)) {             opt.push('<a href="javascript:edit(\'' + rowid + '\')">编辑</a> ');        }        if (authorConfig.hasOwnProperty(cfg.grid_delete_data_url)) {             opt.push('<a href="javascript:del(\'' + rowid + '\')">删除</a> ');        }        if (authorConfig.hasOwnProperty(cfg.grid_audit_data_url)) {             opt.push('<a class="operation" href="#" data-toggle="modal" data-target="#modal-audit" data-id="' + rowid + '">审核</a> ');        }             opt.push('<a href="javascript:preview(\'' + rowid + '\',\'' + title + '\')" >查看</a>');       return opt.join(' ');}