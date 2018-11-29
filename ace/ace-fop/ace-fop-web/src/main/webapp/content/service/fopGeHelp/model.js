var _colNames = ['主键', '发起人ID', '发起人类型', '父节点ID', '反映标题',    '反映内容', '接待和协调科室', '经办领导', '服务进展', '添加进度', '处理结果',    '发布时间', '所含关键字', '累计提问次数', '备注', '状态', '创建人编号', '创建人姓名', '入库日期', '最后更新人编号', '最后更新人姓名', '最后更新时间', '操作'];var _colModel = function () {    return [{        name: 'id',        editable: false,        hidden: true,        width: 100,        editoptions: {size: "35", maxlength: "50"}    }, {        name: 'requestId',        editable: false,        hidden: true,        width: 100,        editoptions: {size: "35", maxlength: "50"}    }, {        name: 'requestType',        editable: false,        hidden: true,        width: 100,        editoptions: {size: "35", maxlength: "50"}    }, {        name: 'parentId',        editable: false,        hidden: true,        width: 100,        editoptions: {size: "35", maxlength: "50"}    }, {        name: 'title',        editable: true,        width: 300,        editoptions: {            style: 'width:750px;',            // readOnly: true,            colspan: true,        }    }        , {            name: 'content',            editable: true,            hidden: true,            width: 150,            edittype: "textarea",            editoptions: {                // disabled: 'disabled',                colspan: true,                style: 'width:750px;line-height: 25px;height: 100px;',            }        }, {            name: 'optDeptName',            editable: true,            width: 80,            editoptions: {size: "35", maxlength: "50",},        }, {            name: 'optLeaderName',            editable: true,            width: 80,            editoptions: {size: "35", maxlength: "50",},        }, {            name: 'processDetail',            editable: true,            hidden: true,            width: 200,            edittype: "textarea",            editoptions: {disabled: 'disabled', colspan: true, style: 'width:750px;line-height: 25px;height: 200px;',}        }, {            name: 'addProcess',            editable: true,            hidden: true,            width: 200,            edittype: "textarea",            editoptions: {colspan: true, style: 'width:750px;line-height: 25px;height: 100px;',}        }, {            name: 'reply',            editable: true,            hidden: true,            width: 200,            edittype: "textarea",            editoptions: {colspan: true, style: 'width:750px;line-height: 25px;height: 100px;',},            formoptions: {                elmprefix: "",                // elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: false            }        }, {            name: 'releaseDate',            editable: false,            width: 120,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);                }, parser: function (s) {                    if (!s) return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {size: "35", maxlength: "50"}        }, {            name: 'keyWord',            editable: false,            hidden: true,            width: 100,            editoptions: {size: "35", maxlength: "50"}        }, {            name: 'accCount',            editable: false,            hidden: true,            width: 70,            editoptions: {size: "35", maxlength: "50"}        }, {            name: 'remark',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            }        },        {            name: 'status',            editable: false,            width: 50,            // edittype: "select",            // editoptions: {value: {"1": "未发布", "2": "已发布"}},            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.status == '1') {                    return "style='color:#FF9224;'";                }                if (rawObject.status == '2') {                    return "style='color:green;color:'";                }                if (rawObject.status == '3') {                    return "style='color:#EE2C2C;'";                }            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '1' :                        rst = "审核中";                        break;                    case '2' :                        rst = "审核通过";                        break;                    case '3' :                        rst = "驳回";                        break;                    default :                        rst = "N/A";                }                return rst;            },            formoptions: {elmprefix: "", elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"},            editrules: {required: true}        }, {name: 'createUserId', hidden: true, editable: false, width: 100}, {            name: 'createUserName',            hidden: true,            editable: false,            width: 100        }, {name: 'createDate', hidden: true, editable: false, width: 100}, {            name: 'lastModifyUserId',            hidden: true,            editable: false,            width: 100        }, {name: 'lastModifyUserName', hidden: true, editable: false, width: 100}, {            name: 'lastModifyDate',            hidden: true,            editable: false,            width: 100        }, {            name: 'opt',            sortable: false,            width: 120,            renderer: function (value, cur) {                var rowid = $.jgrid.getAccessor(cur, cfg.dataId);                var title = $.jgrid.getAccessor(cur, 'fullName');                var opt = [];                if (authorConfig.hasOwnProperty(cfg.grid_edit_data_url)) {                    opt.push('<a href="javascript:edit(\'' + rowid + '\')">回复</a> ');                }                if (authorConfig.hasOwnProperty(cfg.grid_audit_data_url)) {                    opt.push('<a class="operation" href="#" data-toggle="modal" data-target="#modal-audit" data-id="' + rowid + '">审核</a> ');                }                if (authorConfig.hasOwnProperty(cfg.grid_delete_data_url)) {                    opt.push('<a href="javascript:del(\'' + rowid + '\')">删除</a>  ');                }                opt.push('<a href="javascript:preview(\'' + rowid + '\',\'' + title + '\')" >查看</a>');                return opt.join('');            }        }];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]').addClass('ace ace-switch ace-switch-5').after('<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({format: 'yyyy-mm-dd', autoclose: true});    }, 0);}