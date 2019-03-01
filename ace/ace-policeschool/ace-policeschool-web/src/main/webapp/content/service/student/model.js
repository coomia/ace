var _colNames = ['主键', '父ID',    '姓名', '性别', '籍贯',    '单位', '职务', '政治面貌', '手机号', '班次',    '身份证号', '毕业院校', '警号', '出生年月',    '备注', '状态 ', '创建人编号', '创建人姓名', '创建日期',    '更新人编号', '更新人名称', '更新日期', '操作'];var _colModel = function () {    return [        {            name: 'id',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'pid',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'name',            editable: true,            width: 75,            editoptions: {                size: "20",                maxlength: "15"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'sex',            editable: true,            hidden: true,            width: 35,            edittype: "select",            renderer: function (value) {                return rsd(value, "01");            },            editoptions: {                value: odparse("01")            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'nativePlace',            editable: true,            width: 75,            editoptions: {                size: "20",                maxlength: "15"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'workUnitName',            editable: true,            hidden: false,            width: 120,            editoptions: {                size: "20",                maxlength: "23"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'postName',            editable: true,            hidden: false,            width: 100,            editoptions: {                size: "20",                maxlength: "20"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'political',            editable: true,            hidden: true,            width: 60,            edittype: "select",            renderer: function (value) {                return rsd(value, "157");            },            editoptions: {                value: odparse("157")            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'mobile',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "11",                oninput: "onlyInputInt(this);"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'classId',            editable: true,            width: 100,            edittype: "combogrid",            dataoptions: {                panelWidth: 450,                idField: 'id',                textField: 'name',                url: contextPath + '/classes/findByQ?status=1',                mode: 'remote',                fitColumns: true,                method: 'get',                pageSize: 100,                columns: [[                    {field: 'name', title: "班级名称", width: 230},                    {field: 'headmasterName', title: "班主任名称", width: 200},                ]]            },            renderer: function (value, cur) {                var v = $.jgrid.getAccessor(cur, 'clsName');                if (v == '' || v == null || v == undefined) {                    v = '';                }                return v;            },            editoptions: {                style: "width:205px",            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'idCard',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "18",                oninput: "onlyInputInt(this);"            },        }        , {            name: 'college',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "18",            },        }        , {            name: 'badgeNum',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "18",            },        }        , {            name: 'birthDate',            editable: true,            hidden: true,            width: 100,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s) return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                style: "width: 175px; height: 30px;"                // size: "20",                // maxlength: "20",            },        }        , {            name: 'remark',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'status',            editable: false,            hidden: false,            width: 55,            edittype: "checkbox",            editoptions: {                value: "1:0"            },            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.status == '0') {                    return "style='color:red'";                }                if (rawObject.status == '1') {                    return "style='color:#000000'";                }                return "style='color:red'";            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '1' :                        rst = "正常";                        break;                    case '0' :                        rst = "注销";                        break;                    default :                        rst = "正常";                }                return rst;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'createUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyDate',            hidden: true,            editable: false,            width: 100        }        ,        {            name: 'opt',            width: 75,            hidden: false,            editable: false,            sortable: false,            renderer: function (value, cur) {                return renderBtn(cur);            }        }    ];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]')            .addClass('ace ace-switch ace-switch-5')            .after('<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}function renderBtn(cur) {    var rowid = $.jgrid.getAccessor(cur, 'id');    var title = $.jgrid.getAccessor(cur, 'name');    var status = $.jgrid.getAccessor(cur, 'status');    var opt = [];    // if (authorConfig.hasOwnProperty(cfg.grid_edit_data_url)) {    opt.push('<a href="javascript:edit(\'' + rowid + '\')">编辑</a> ');    // }    // if (authorConfig.hasOwnProperty(cfg.grid_delete_data_url)) {    if (status == '1') {        opt.push('<a href="javascript:del(\'' + rowid + '\')">注销</a>  ');    } else {        opt.push('<a href="javascript:recover(\'' + rowid + '\')">恢复</a>  ');    }    // }    opt.push('<a href="#" data-toggle="modal" data-id="' + rowid + '" data-title="' + title + '" ' +        'data-target="#modal-preview">查看</a>');    return opt.join(' ');}function onlyInputInt(obj) {    obj.value = obj.value.replace(/[^0-9-]+/, '');}