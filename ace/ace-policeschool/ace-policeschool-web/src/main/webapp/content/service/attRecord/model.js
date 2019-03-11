var _colNames = ['主键',    '姓名', '注册类型',    '采集来源', '考勤时间',    '考勤图片', '经度', '纬度',    '备注', '创建日期', '操作'];var _colModel = function () {    return [        {            name: 'id',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'userId',            editable: false,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },            renderer: function (value, cur) {                return $.jgrid.getAccessor(cur, 'userName');            }        }        , {            name: 'userType',            editable: true,            width: 100,            edittype: "select",            renderer: function (value, cur) {                return $.jgrid.getAccessor(cur, 'userTypeName');            }        }        , {            name: 'status',            editable: false,            width: 100,            edittype: "checkbox",            editoptions: {                value: "1:0"            },            cellattr: function (rowId, val, rawObject, cm, rdata) {                // if (rawObject.status == '2') {                //     return "style='color:#FF9224;'";                // }            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '1' :                        rst = "手机定位";                        break;                    case '2' :                        rst = "中控数据";                        break;                    default :                        rst = "手机采集";                }                return rst;            },        }        , {            name: 'attTime',            editable: true,            width: 150,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'attPhoto',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50",            },        }        , {            name: 'longitude',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50",                readOnly: true,            },        }        , {            name: 'latitude',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50",                readOnly: true,            },        }        , {            name: 'remark',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'createDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'opt',            width: 75,            hidden: false,            editable: false,            sortable: false,            renderer: function (value, cur) {                return renderBtn(cur);            }        }    ];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]')            .addClass('ace ace-switch ace-switch-5')            .after('<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}function renderBtn(cur) {    var rowid = $.jgrid.getAccessor(cur, 'id');    var title = $.jgrid.getAccessor(cur, 'name');    var opt = [];    // if (authorConfig.hasOwnProperty(cfg.grid_edit_data_url)) {    //     opt.push('<a href="javascript:edit(\'' + rowid + '\')">编辑</a> ');    // }    // if (authorConfig.hasOwnProperty(cfg.grid_delete_data_url)) {    //     opt.push('<a href="javascript:del(\'' + rowid + '\')">删除</a>  ');    // }    opt.push('<a href="#" data-toggle="modal" data-id="' + rowid + '" data-title="' + title + '" ' +        'data-target="#modal-preview">查看</a>');    return opt.join(' ');}