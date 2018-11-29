var _colNames = ['主键', '发起人ID', '标题', '内容', '来源ID', '来源类型', '子类型', '父节点ID', '发布时间', '回复内容', '所含关键字', '累计提问次数', '备注', '状态', '创建人编号', '创建人姓名', '入库日期', '最后更新人编号', '最后更新人姓名', '最后更新时间', '操作'];var _colModel = function () {    return [        {            name: 'id',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'relationId',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'title',            editable: true,            width: 350,            edittype: "textarea",            editoptions: {                // disabled: 'disabled',                colspan: true,                style: 'width:750px;line-height: 25px;height: 50px;',            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        },        {            name: 'content',            editable: true,            hidden: true,            width: 120,            edittype: "textarea",            editoptions: {                // disabled: 'disabled',                colspan: true,                style: 'width:750px;line-height: 25px;height: 150px;',            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {            required: true        }        }        , {            name: 'sourceId',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'sourceType',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'subType',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'parentId',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'releaseDate',            editable: true,            width: 100,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "20",                maxlength: "50",                colspan: true,            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'reply',            editable: true,            hidden: true,            width: 150,            edittype: "textarea",            editoptions: {                colspan: true,                style: 'width:750px;line-height: 25px;height: 200px;',            },        }        , {            name: 'keyWord',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'accCount',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'remark',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'status',            editable: false,            // hidden: true,            width: 50,            edittype: "checkbox",            editoptions: {                value: "1:0"            },            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.status == '1') {                    return "style='color:#FF9224;'";                }                else if (rawObject.status == '2') {                    return "style='color:green;color:'";                }                else if (rawObject.status == '3') {                    return "style='color:#EE2C2C;'";                }                else if (rawObject.status == '4') {                    return "style='color:#EE0000;'";                }                else {                    return "style='color:#FF9224;'";                }            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '1' :                        rst = "审核中";                        break;                    case '2' :                        rst = "审核通过";                        break;                    case '3' :                        rst = "驳回";                        break;                    case '4' :                        rst = "递交律师";                        break;                    default :                        rst = "审核中";                        break;                }                return rst;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'createUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyDate',            hidden: true,            editable: false,            width: 100        }        ,        {            name: 'opt',            width: 50,            hidden: false,            editable: false,            sortable: false,            renderer: function (value, cur) {                return renderBtn(cur);            }        }    ];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]').addClass(            'ace ace-switch ace-switch-5').after(            '<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}function renderBtn(cur) {    var rowid = $.jgrid.getAccessor(cur, cfg.dataId);    var title = $.jgrid.getAccessor(cur, 'title');    var opt = [];    if (authorConfig.hasOwnProperty(cfg.grid_edit_data_url)) {        opt.push('<a href="javascript:edit(\'' + rowid + '\')">编辑</a> ');    }    if (authorConfig.hasOwnProperty(cfg.grid_audit_data_url)) {        opt.push('<a class="operation" href="#" data-toggle="modal" data-target="#modal-audit" data-id="' + rowid + '">审核</a> ');    }    if (authorConfig.hasOwnProperty(cfg.grid_delete_data_url)) {        opt.push('<a href="javascript:del(\'' + rowid + '\')">删除</a>  ');    }    opt.push('<a href="javascript:preview(\'' + rowid + '\',\'' + title + '\')" >查看</a>');    return opt.join('');}