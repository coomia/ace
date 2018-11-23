var _colNames = ['主键', '标题', '企业名称', '关联类型',    '类别', '内容', '发布时间', '备注', '备用字段1', '备用字段2', '状态', '创建人编号', '创建人姓名', '入库日期', '最后更新人编号', '最后更新人姓名', '最后更新时间', '操作'];var _colModel = function () {    return [        {            name: 'id',            editable: false,            width: 100,            hidden: true,        }        , {            name: 'title',            editable: true,            width: 300,            editoptions: {                style: 'width:200px;height:25px;',            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'companyName',            editable: true,            width: 180,            editoptions: {                style: 'width:200px;height:25px;',            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'relationType',            editable: false,            hidden: true,            width: 100,            editoptions: {                style: 'width:200px;height:25px;',            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'category',            editable: true,            width: 40,            edittype: "select",            renderer: function (value) {                return rsd(value, "141");            },            editoptions: {                style: 'width:200px;height:25px;',                value: odparse("141")            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'content',            editable: true,            hidden: true,            edittype: "textarea",            width: 100,            editoptions: {                style: 'width:692px;height:120px;',                colspan: true,            },        }        , {            name: 'releaseDate',            editable: false,            width: 100,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'remark',            editable: true,            hidden: true,            width: 100,            editoptions: {                style: 'width:200px;height:25px;',                colspan: true,            },        }        , {            name: 'alternateFields1',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'alternateFields2',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'status',            editable: false,            hidden: true,            width: 100,            edittype: "checkbox",            editoptions: {                value: "1:0"            },            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.status == '0') {                    return "style='color:red;color:'";                }                if (rawObject.status == '1') {                    return "style='color:#FF9224;'";                }                if (rawObject.status == '2') {                    return "style='color:green;color:'";                }                if (rawObject.status == '3') {                    return "style='color:#F9F900;'";                }                if (rawObject.status == '4') {                    return "style='color:#FF9224;'";                }            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '1' :                        rst = "ON";                        break;                    case '0' :                        rst = "OFF";                        break;                    default :                        rst = "N/A";                }                return rst;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'createUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyDate',            hidden: true,            editable: false,            width: 100        }        ,        {            name: 'opt',            width: 50,            hidden: false,            editable: false,            sortable: false,            renderer: function (value, cur) {                return renderBtn(cur);            }        }    ];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]').addClass(            'ace ace-switch ace-switch-5').after(            '<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}function renderBtn(cur) {    var rowid = $.jgrid.getAccessor(cur, 'id');    var title = $.jgrid.getAccessor(cur, 'title');    title = title.substring(0, 30) + "...";    var opt = [];    if (authorConfig.hasOwnProperty(cfg.grid_edit_data_url)) {        opt.push('<a href="javascript:edit(\'' + rowid + '\')">编辑</a> ');    }    if (authorConfig.hasOwnProperty(cfg.grid_delete_data_url)) {        opt.push('<a href="javascript:del(\'' + rowid + '\')">删除</a>  ');    }    opt.push('<a href="javascript:preview(\'' + rowid + '\',\'' + title + '\')" >查看</a>');    return opt.join('');}