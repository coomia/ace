var _colNames = ['主键', '班级名称', '介绍', '开始日期', '结束日期', '班级须知', '照片', '使用教室', '班主任', '跟班老师', '跟班干部', '备注', '状态 ', '创建人编号', '创建人姓名', '创建日期', '更新人编号', '更新人名称', '更新日期', '操作'];var _colModel = function() {    return [{        name: 'id',        editable: false,        hidden: true,        width: 100,        editoptions: {            size: "20",            maxlength: "50"        },        formoptions: {            elmprefix: "",            elmsuffix: "<span style='color:red;'>*</span>"        },        editrules: {            required: true        }    },    {        name: 'name',        editable: true,        width: 150,        editoptions: {            style: 'width:95%',            colspan: true,            maxlength: "50"        },        formoptions: {            elmprefix: "",            elmsuffix: "<span style='color:red;'>*</span>"        },        editrules: {            required: true        }    },    {        name: 'introduce',        editable: true,        width: 100,        hidden: true,        edittype: "textarea",        editoptions: {            colspan: true,            style: 'width:95%;height: 80px;'        }    },    {        name: 'startDate',        editable: true,        width: 100,        hidden: true,        edittype: "datebox",        dataoptions: {            formatter: function(date) {                var y = date.getFullYear();                var m = date.getMonth() + 1;                var d = date.getDate();                return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);            },            parser: function(s) {                if (!s) return new Date();                var ss = (s.split('-'));                var y = parseInt(ss[0], 10);                var m = parseInt(ss[1], 10);                var d = parseInt(ss[2], 10);                if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                    return new Date(y, m - 1, d);                } else {                    return new Date();                }            }        },        editoptions: {            size: "20",            maxlength: "50",        },        formoptions: {            elmprefix: "",            elmsuffix: "<span style='color:red;'>*</span>"        },        editrules: {            required: true        }    },    {        name: 'endDate',        editable: true,        width: 100,        hidden: true,        edittype: "datebox",        dataoptions: {            formatter: function(date) {                var y = date.getFullYear();                var m = date.getMonth() + 1;                var d = date.getDate();                return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);            },            parser: function(s) {                if (!s) return new Date();                var ss = (s.split('-'));                var y = parseInt(ss[0], 10);                var m = parseInt(ss[1], 10);                var d = parseInt(ss[2], 10);                if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                    return new Date(y, m - 1, d);                } else {                    return new Date();                }            }        },        editoptions: {            size: "20",            maxlength: "50"        },        formoptions: {            elmprefix: "",            elmsuffix: "<span style='color:red;'>*</span>"        },        editrules: {            required: true        }    },    {        name: 'fileUrl',        editable: true,        hidden: true,        width: 150,        editoptions: {            readonly: true,            style: 'width:300px',            size: "20",            maxlength: "50"        }    },    {        name: 'photoUrl',        editable: true,        width: 100,        hidden: true,        editoptions: {            readonly: true,            style: 'width:300px',            size: "20",            maxlength: "50"        }    },    {        name: 'classroomId',        editable: true,        width: 150,        edittype: "combogrid",        editoptions: {            style: "width:300px",            size: "20",            maxlength: "50"        },        dataoptions: {            panelWidth: 300,            idField: 'id',            textField: 'name',            url: contextPath + '/classroom/findClassroomList',            mode: 'remote',            fitColumns: true,            method: 'get',            pageSize: 100,            columns: [[{                field: 'name',                title: "--请搜索教室--",                width: 50            }]]        },        renderer: function(value, cur) {            var v = $.jgrid.getAccessor(cur, 'crName');            if (v == '' || v == null || v == undefined) {                v = '';            }            return v;        },        formoptions: {            elmprefix: "",            elmsuffix: "<span style='color:red;'>*</span>"        },        editrules: {            required: true        }    },    {        name: 'headmaster',        editable: true,        width: 60,        edittype: "combogrid",        editoptions: {            style: "width:300px",        },        dataoptions: {            panelWidth: 300,            idField: 'id',            textField: 'name',            url: contextPath + '/teacher/findHeadmasterList',            mode: 'remote',            fitColumns: true,            method: 'get',            pageSize: 100,            columns: [[{                field: 'name',                title: '姓名',                width: 50            },            {                field: 'mobile',                title: '电话',                width: 100            }]]        },        renderer: function(value, cur) {            var v = $.jgrid.getAccessor(cur, 'tName');            if (v == '' || v == null || v == undefined) {                v = '';            }            return v;        },        formoptions: {            elmprefix: "",            elmsuffix: "<span style='color:red;'>*</span>"        },        editrules: {            required: true        }    },    {        name: 'tid1',        editable: true,        hidden: true,        edittype: "combogrid",        width: 100,        editoptions: {            style: "width:300px",            size: "20",            maxlength: "50"        },        dataoptions: {            panelWidth: 300,            idField: 'id',            textField: 'name',            url: contextPath + '/teacher/findTeacherList',            mode: 'remote',            fitColumns: true,            method: 'get',            pageSize: 100,            columns: [[{                field: 'name',                title: '姓名',                width: 50            },            {                field: 'mobile',                title: '电话',                width: 100            }]]        }    },    {        name: 'tid2',        editable: true,        hidden: true,        edittype: "combogrid",        width: 100,        editoptions: {            style: "width:300px",            size: "20",            maxlength: "50"        },        dataoptions: {            panelWidth: 300,            idField: 'id',            textField: 'name',            url: contextPath + '/student/findStudentList',            mode: 'remote',            fitColumns: true,            method: 'get',            pageSize: 100,            columns: [[{                field: 'name',                title: '姓名',                width: 50            },            {                field: 'mobile',                title: '电话',                width: 100            }]]        }    },    {        name: 'remark',        editable: false,        hidden: true,        width: 100,        editoptions: {            size: "20",            maxlength: "50"        }    },    {        name: 'status',        editable: true,        width: 50,        edittype: "checkbox",        editoptions: {            value: "1:2"        },        cellattr: function(rowId, val, rawObject, cm, rdata) {            if (rawObject.status == '1') {                return "style='color:green;'";            }            if (rawObject.status == '2') {                return "style='color:red;'";            }        },        unformat: aceSwitch,        renderer: function(value) {            var rst = "";            switch (value) {            case '1':                rst = "授课中";                break;            case '2':                rst = "毕业";                break;            default:                rst = "已注销";            }            return rst;        },        formoptions: {            elmprefix: "",            elmsuffix: "<span style='color:red;'>*</span>"        },        editrules: {            required: true        }    }    ,    {        name: 'createUserId',        hidden: true,        editable: false,        width: 100    },    {        name: 'createUserName',        hidden: true,        editable: false,        width: 100    },    {        name: 'createDate',        hidden: true,        editable: false,        width: 100    },    {        name: 'lastModifyUserId',        hidden: true,        editable: false,        width: 100    },    {        name: 'lastModifyUserName',        hidden: true,        editable: false,        width: 100    },    {        name: 'lastModifyDate',        hidden: true,        editable: false,        width: 100    },    {        name: 'opt',        width: 50,        hidden: false,        editable: false,        sortable: false,        renderer: function(value, cur) {            return renderBtn(cur);        }    }];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function() {        $(cell).find('input[type=checkbox]').addClass('ace ace-switch ace-switch-5').after('<span class="lbl"></span>');    },    0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function() {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    },    0);}function renderBtn(cur) {    var rowid = $.jgrid.getAccessor(cur, 'id');    var title = $.jgrid.getAccessor(cur, 'name');    var opt = [];    opt.push('<a href="javascript:edit(\'' + rowid + '\')">编辑</a> ');    opt.push('<a href="javascript:del(\'' + rowid + '\')">删除</a>  ');    opt.push('<a href="#" data-toggle="modal" data-id="' + rowid + '" data-title="' + title + '" ' + 'data-target="#modal-preview">查看</a>');    return opt.join(' ');}