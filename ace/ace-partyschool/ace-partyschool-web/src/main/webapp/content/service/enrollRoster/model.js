var _colNames = ['主键',    '报名期数',    '报名班次',    '学员姓名', '单位全称', '职务全称', '状态',    '备注', '创建日期', '更新时间', '操作'];var _colModel = function () {    return [        {            name: 'id',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'clsName',            editable: false,            hidden: true,            width: 110,            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'clsId',            editable: true,            hidden: false,            width: 100,            edittype: "combogrid",            dataoptions: {                panelWidth: 500,                idField: 'id',                textField: 'name',                url: contextPath + '/classes/findByQ',                mode: 'remote',                fitColumns: true,                method: 'get',                pageSize: 100,                columns: [[                    {field: 'name', title: "班级名称", width: 100},                    {field: 'headmasterName', title: "班主任名称", width: 100},                ]]            },            renderer: function (value, cur) {                var v = $.jgrid.getAccessor(cur, 'clsViewName');                if (v == '' || v == null || v == undefined) {                    v = '';                }                return v;            },            editoptions: {                style: "width:365px",                colspan: true,            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'name',            editable: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'workUnitName',            editable: true,            width: 130,            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'postName',            editable: true,            width: 110,            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'status',            editable: false,            width: 35,            edittype: "checkbox",            editoptions: {                value: "1:0"            },            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.status == '0') {                    return "style='color:red;'";                }                if (rawObject.status == '1') {                    return "style='color:#FF9224;'";                }            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '1' :                        rst = "已开启";                        break;                    case '0' :                        rst = "已关闭";                        break;                    default :                        rst = "已关闭";                }                return rst;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'remark',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'createDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'updateDate',            editable: false,            hidden: true,            width: 100,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'opt',            width: 80,            hidden: false,            editable: false,            sortable: false,            renderer: function (value, cur) {                return renderBtn(cur);            }        }    ];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]')            .addClass('ace ace-switch ace-switch-5')            .after('<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}function renderBtn(cur) {    var rowid = $.jgrid.getAccessor(cur, 'id');    var title = $.jgrid.getAccessor(cur, 'name');    var opt = [];    if (authorConfig.hasOwnProperty(cfg.grid_edit_data_url)) {        opt.push('<a href="javascript:edit(\'' + rowid + '\')">编辑</a> ');    }    if (authorConfig.hasOwnProperty(cfg.grid_delete_data_url)) {        opt.push('<a href="javascript:del(\'' + rowid + '\')">删除</a>  ');    }    opt.push('<a href="#" data-toggle="modal" data-id="' + rowid + '" data-title="' + title + '" ' +        'data-target="#modal-preview">查看</a>');    return opt.join(' ');}