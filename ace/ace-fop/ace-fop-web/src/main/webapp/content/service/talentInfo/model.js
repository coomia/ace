var _colNames = ['主键', '标题', '发布单位', '关联类型',    '内容', '封面地址', '发布时间', '点击次数', '备注', '状态', '创建人编号', '创建人姓名', '入库日期', '最后更新人编号', '最后更新人姓名', '最后更新时间', '操作'];var _colModel = function () {    return [        {            name: 'id',            editable: false,            hidden: true,            width: 100,        }        , {            name: 'title',            editable: true,            width: 300,            editoptions: {                style: 'width:750px;',                colspan: true,            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'relationId',            editable: false,            width: 150,            editoptions: {                size: "20",                maxlength: "50"            },            renderer: function (value, cur) {                var companyName = $.jgrid.getAccessor(cur, 'companyName');                if (isNull(companyName)) {                    return "常德市工商联";                }                return companyName;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'relationType',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'content',            editable: true,            hidden: true,            width: 100,            edittype: "textarea",            editoptions: {                colspan: true,                style: 'width:750px;line-height: 25px;height: 100px;'            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'fileUrl',            editable: true,            hidden: true,            width: 100,            editoptions: {                style: 'width:750px;',                colspan: true,            },        }        , {            name: 'releaseDate',            editable: false,            width: 100,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'click',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'remark',            editable: true,            hidden: true,            width: 100,            editoptions: {                style: 'width:750px;',                colspan: true,            },        }        , {            name: 'status',            editable: false,            hidden: false,            width: 50,            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.status == '1') {                    return "style='color:#FF9224;'";                }                if (rawObject.status == '2') {                    return "style='color:green;color:'";                }                if (rawObject.status == '3') {                    return "style='color:#EE2C2C;'";                }            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '1' :                        rst = "审核中";                        break;                    case '2' :                        rst = "审核通过";                        break;                    case '3' :                        rst = "驳回";                        break;                    default :                        rst = "N/A";                }                return rst;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'createUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyDate',            hidden: true,            editable: false,            width: 100        }        ,        {            name: 'opt',            width: 50,            hidden: false,            editable: false,            sortable: false,            renderer: function (value, cur) {                return renderBtn(cur);            }        }    ];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]').addClass(            'ace ace-switch ace-switch-5').after(            '<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}function renderBtn(cur) {    var rowid = $.jgrid.getAccessor(cur, 'id');    var title = $.jgrid.getAccessor(cur, 'title');    var opt = [];     if (authorConfig.hasOwnProperty(cfg.grid_edit_data_url)) {          opt.push('<a href="javascript:edit(\'' + rowid + '\')">编辑</a> ');     }     if (authorConfig.hasOwnProperty(cfg.grid_delete_data_url)) {          opt.push('<a href="javascript:del(\'' + rowid + '\')">删除</a> ');     }    if (authorConfig.hasOwnProperty(cfg.grid_audit_data_url)) {          opt.push('<a class="operation" href="#" data-toggle="modal" data-target="#modal-audit" data-id="' + rowid + '">审核</a> ');     }          opt.push('<a href="javascript:preview(\'' + rowid + '\',\'' + title + '\')" >查看</a>');    return opt.join(' ');}