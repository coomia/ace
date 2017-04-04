var _colNames = ['主键', '主题名称', '活动地点', '分类', '活动日期', '活动详细<br>情况', '状态', '创建人编号', '创建人姓名', '阅读量', '入库日期', '最后更新人编号', '最后更新人姓名', '最后更新时间', '操作'];var _colModel = function() {    return [{        name: 'id',         hidden: true,        editable: false,        width: 100,        editoptions: {            size: "20",            maxlength: "50",            readOnly:true        },        formoptions: {            elmprefix: "",            elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"        },        editrules: {            required: true        }    },    {        name: 'name',        editable: true,        width: 250,        editoptions: {            size: "20",            maxlength: "50",            style:'width:250px;'        },        formoptions: {            elmprefix: "",            elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"        },        editrules: {            required: true        }    },    {        name: 'activityLocation',        hidden:true,        editable: true,        width: 100,        editoptions: {            size: "20",            maxlength: "50",            style:'width:250px;'        },        formoptions: {            elmprefix: "",            elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"        },        editrules: {            required: true        }    },    {        name: 'category',        hidden:true,        editable: true,        width: 100,        editoptions: {            size: "20",            maxlength: "50"        },        formoptions: {            elmprefix: "",            elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"        },        editrules: {            required: true        },       edittype : "select",       renderer : function(value) {            return rsd(value, "85");       },       editoptions : {            value : odparse("85")       }    },    {        name: 'activityDate',        editable: true,        width: 100,        editoptions: {            size: "20",            maxlength: "50"        },        formoptions: {            elmprefix: "",            elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"        },        editrules: {            required: true        },        edittype : "datetimebox",        editoptions : {            style : 'height:25px'        },        dataoptions : {            formatter : function(date) {                var y = date.getFullYear();                var m = date.getMonth() + 1;                var d = date.getDate();                return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);            },            parser : function(s) {                if (!s)                    return new Date();                var ss = (s.split('-'));                var y = parseInt(ss[0], 10);                var m = parseInt(ss[1], 10);                var d = parseInt(ss[2], 10);                if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                    return new Date(y, m - 1, d);                } else {                    return new Date();                }            }        },        renderer : function(value) {            return value == null ? "" : value.substring(0, 16);        }    },    {        name: 'docText',        editable: true,        hidden:true,        width: 100,        editoptions: {            size: "20",            maxlength: "50",            colspan:true,            style:"width:100%"        },        formoptions: {            elmprefix: "",            elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"        },        editrules: {            required: true        },        edittype : "textarea"    },    {        name: 'status',        hidden: true,        editable: false,        width: 100,        editoptions: {            size: "20",            maxlength: "50"        }    },    {        name: 'createUserId',        hidden: true,        editable: false,        width: 100,        editoptions: {            size: "20",            maxlength: "50"        }    },    {        name: 'createUserName',        hidden: false,        editable: false,        width: 100,        editoptions: {            size: "20",            maxlength: "50"        }    },    {        name: 'reading',         hidden: true,        editable: false,        width: 100,        editoptions: {            size: "20",            maxlength: "50"        }    },    {        name: 'createDate',        hidden: false,        editable: false,        width: 100,        editoptions: {            size: "20",            maxlength: "50"        }    },    {        name: 'lastModifyUserId',        hidden: true,        editable: false,        width: 100,        editoptions: {            size: "20",            maxlength: "50"        }    },    {        name: 'lastModifyUserName',        hidden: true,        editable: false,        width: 100,        editoptions: {            size: "20",            maxlength: "50"        }    },    {        name: 'lastModifyDate',        hidden: true,        editable: false,        width: 100,        editoptions: {            size: "20",            maxlength: "50"        },        formoptions: {            elmprefix: "",            elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"        },        editrules: {            required: true        }    },    {        name: 'opt',        width: 100,        hidden: false,        editable: false,        renderer: function(value, cur) {            return renderBtn(cur);        }    }];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function() {        $(cell).find('input[type=checkbox]').addClass('ace ace-switch ace-switch-5').after('<span class="lbl"></span>');    },    0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function() {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    },    0);}function renderBtn(cur) {    var id = $.jgrid.getAccessor(cur, 'id');    var title = $.jgrid.getAccessor(cur, 'name');    var html = [];    html.push('<a target="_blank" href="');    html.push('javascript:preview(\'' + id + '\',\'' + title + '\')');    html.push('"');    html.push('><span class="badge badge-info">查看</span></a>');    return html.join(' ');}