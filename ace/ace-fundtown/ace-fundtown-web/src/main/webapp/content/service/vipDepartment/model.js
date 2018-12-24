var _colNames = [    'id', '编号',    '企业类型', '企业名称', '所属机构名称',    '联系手机号', '联系电子邮箱', '法人代表',    '注册时间', '注册资本(万元)', '投资方向', '注册地址',    '公示状态', '入驻状态',    'createUserId', '创建的用户名', 'createTime',    '最后修改时间', '最后修改用户ID', '最后修改用户名', '操作'];var _colModel = function () {    return [        {            name: 'id',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'departmentId',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'type',            editable: true,            width: 75,            edittype: "select",            renderer: function (value) {                value = (null == value || '' == value || undefined == value || '&#160;' == value) ? '0' : value;                return rsd(value, "147");            },            editoptions: {                style: "width:300px",                value: odparse("147"),                colspan: true,                },        }        , {            name: 'departmentName',            editable: true,            width: 180,            editoptions: {                style: "width:300px",                colspan: true,            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'parentDepartmentId',            editable: true,            hidden: true,            width: 110,            edittype: "combogrid",            dataoptions: {                panelWidth: 300,                idField: 'departmentId',                textField: 'departmentName',                url: contextPath + '/vipDepartment/findVipDepartment',                mode: 'remote',                fitColumns: true,                method: 'get',                pageSize:100,                columns: [[{                    field: 'departmentName',                    title: "--请搜索企业--",                    width: 50                }]]            },            renderer: function (value, cur) {                var v = $.jgrid.getAccessor(cur, 'parentDepartmentName');                if (v == '' || v == null || v == undefined) {                    v = '';                }                return v;            },            editoptions: {                style: "width:300px",                colspan: true,            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'contactMobile',            editable: true,            // hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'contactEmail',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'legalPersonName',            editable: true,            width: 75,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'regDate',            editable: true,            width: 75,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "35",                maxlength: "50"            },            renderer: function (value) {                return value.substr(0, 10);            }        }        , {            name: 'regCapital',            editable: true,            width: 75,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'regAreaCode',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",            },        }        , {            name: 'regAddr',            editable: true,            hidden: true,            width: 100,            editoptions: {                style: 'width:587px',                colspan: true,            },        }        , {            name: 'publicStatus',            editable: false,            width: 50,            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.publicStatus == '0') {                    return "style='color:red;'";                }                if (rawObject.publicStatus == '1') {                    return "style='color:green;'";                }            },            renderer: function (value) {                var rst = "";                switch (value) {                    case '0' :                        rst = "未公示";                        break;                    case '1' :                        rst = "已公示";                        break;                    default :                        rst = "未公示";                }                return rst;            },        }        , {            name: 'status',            editable: false,            width: 50,            edittype: "checkbox",            editoptions: {                value: "1:0"            },            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.status == '0') {                    return "style='color:red;'";                }                if (rawObject.status == '1') {                    return "style='color:#FF9224;'";                }                if (rawObject.status == '2') {                    return "style='color:green;'";                }            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '0' :                        rst = "已删除";                        break;                    case '1' :                        rst = "入驻中";                        break;                    case '2' :                        rst = "注册成功";                        break;                    case '3' :                        rst = "已公示";                        break;                    default :                        rst = "入驻中";                }                return rst;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'createUserId',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'createUserName',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'createTime',            editable: false,            hidden: true,            width: 100,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'lastModifyTime',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'lastModifyUserId',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'lastModifyUserName',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'opt',            width: 180,            hidden: false,            editable: false,            sortable: false,            renderer: function (value, cur) {                return renderBtn(cur);            }        }    ];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]').addClass(            'ace ace-switch ace-switch-5').after(            '<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}function renderBtn(cur) {    var rowid = $.jgrid.getAccessor(cur, 'departmentId');    var deptId = $.jgrid.getAccessor(cur, 'departmentId');    var title = $.jgrid.getAccessor(cur, 'departmentName');    var opt = [];    if (authorConfig.hasOwnProperty(cfg.grid_edit_data_url)) {        opt.push('<a href="javascript:edit(\'' + rowid + '\')">编辑</a> ');    }    if (authorConfig.hasOwnProperty(cfg.grid_delete_data_url)) {        opt.push('<a href="javascript:del(\'' + rowid + '\')">删除</a> ');    }    if (authorConfig.hasOwnProperty(cfg.grid_audit_data_url)) {        opt.push('<a class="operation" href="#" data-toggle="modal" data-target="#modal-audit" data-id="' + deptId + '">入驻审核</a> ');    }        opt.push('<a href="javascript:preview(\'' + rowid + '\',\'' + title + '\')" >查看</a>');        opt.push('<a href="javascript:publicity(\'' + deptId + '\')" >信息公示</a>');        opt.push('<a href="javascript:repealPublicity(\'' + rowid + '\')" >撤销公示</a>');        return opt.join(' ');}