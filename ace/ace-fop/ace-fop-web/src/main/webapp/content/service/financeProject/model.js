var _colNames = ['主键', '融资名称', '融资代码', '所属区域', '所属公司', '发布日期', '融资金额（万）', '融资年限', '预期年收益（%）', '融资内容', '点击数', '点赞数', '备注', '状态', '创建人编号', '创建人姓名', '入库日期', '最后更新人编号', '最后更新人姓名', '最后更新时间', '操作'];var _colModel = function () {    return [        {            name: 'id',            editable: false,            hidden: true,            width: 100,        }        , {            name: 'financeTitle',            editable: true,            width: 300,            editoptions: {                style: 'width:200px;height:35px;',            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'financeCode',            editable: false,            hidden: true,            width: 100,            editoptions: {                style: 'width:200px;height:35px;',            },        }        , {            name: 'areaCode',            editable: true,            hidden: true,            width: 100,            edittype: "combotree",            dataoptions: {                url: portalPath + '/system/selectProvinceTreeList.do',                required: false            },            renderer: function (value, cur) {                return $.jgrid.getAccessor(cur, 'areaName');            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editoptions: {                style: 'width:200px;height:35px;',            },            editrules: {                required: true            }        }        , {            name: 'companyId',            editable: true,            hidden: false,            width: 150,            edittype: "combogrid",            dataoptions: {                panelWidth: 300,                idField: 'id',                textField: 'fullName',                url: contextPath + '/fopCompany/selectCompany',                mode: 'remote',                fitColumns: true,                method: 'get',                columns: [[{                    field: 'fullName',                    title: '公司名称',                    width: 200                }]]            },            editoptions: {                style: 'width:200px;height:35px;',            },            renderer: function (value, cur) {                // if (value == null || value == undefined || value.trim() == '' || value == '&#160;') {                //     return "";                // }                // return $.jgrid.getAccessor(cur, 'companyName');                var companyName = $.jgrid.getAccessor(cur, 'companyName');                if (isNull(companyName)) {                    return "常德市工商联";                }                return companyName;            }        }        , {            name: 'releaseDate',            editable: false,            hidden: false,            width: 100,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                style: 'width:200px;height:35px;',            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'financeAmount',            editable: true,            hidden: true,            width: 100,            editoptions: {                style: 'width:200px;height:35px;',            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {required: true, number: true, custom: true, custom_func: checkFloat},        }        , {            name: 'financeYear',            editable: true,            hidden: true,            width: 100,            edittype: "select",            renderer: function (value) {                return rsd(value, "128");            },            editoptions: {                style: 'width:200px;height:35px;',                value: odparse("128"),            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'yearYield',            editable: true,            hidden: true,            width: 100,            editoptions: {                style: 'width:200px;height:35px;',            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {required: true, number: true, custom: true, custom_func: checkFloat},        }        , {            name: 'financeContent',            editable: true,            hidden: true,            edittype: "textarea",            width: 100,            editoptions: {                style: 'width:692px;height:120px;',                colspan: true,            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'clicks',            editable: false,            hidden: true,            width: 100,            editoptions: {                style: 'width:200px;height:35px;',            },        }        , {            name: 'likes',            editable: false,            hidden: true,            width: 100,            editoptions: {                style: 'width:200px;height:35px;',            },        }        , {            name: 'remark',            editable: true,            hidden: true,            width: 100,            editoptions: {                style: 'width:200px;height:35px;',            },        }        , {            name: 'status',            editable: false,            hidden: false,            width: 50,            edittype: "checkbox",            editoptions: {                value: "1:0"            },            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.status == '1') {                    return "style='color:#FF9224;'";                }                if (rawObject.status == '2') {                    return "style='color:green;color:'";                }                if (rawObject.status == '3') {                    return "style='color:#EE2C2C;'";                }            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '1' :                        rst = "审核中";                        break;                    case '2' :                        rst = "审核通过";                        break;                    case '3' :                        rst = "审核不通过";                        break;                    default :                        rst = "N/A";                }                return rst;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'createUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyDate',            hidden: true,            editable: false,            width: 100        }        ,        {            name: 'opt',            width: 50,            hidden: false,            editable: false,            sortable: false,            renderer: function (value, cur) {                var rowid = $.jgrid.getAccessor(cur, cfg.dataId);                var title = $.jgrid.getAccessor(cur, 'fullName');                var opt = [];                if (authorConfig.hasOwnProperty(cfg.grid_edit_data_url)) {                    opt.push('<a href="javascript:edit(\'' + rowid + '\')">修改</a> ');                }                if (authorConfig.hasOwnProperty(cfg.grid_audit_data_url)) {                    opt.push('<a class="operation" href="#" data-toggle="modal" data-target="#modal-audit" data-id="' + rowid + '">审核</a> ');                }                if (authorConfig.hasOwnProperty(cfg.grid_delete_data_url)) {                    opt.push('<a href="javascript:del(\'' + rowid + '\')">删除</a>  ');                }                opt.push('<a href="javascript:preview(\'' + rowid + '\',\'' + title + '\')" >查看</a>');                return opt.join('');            }        }    ];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]').addClass(            'ace ace-switch ace-switch-5').after(            '<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}function renderBtn(cur) {    var id = $.jgrid.getAccessor(cur, 'id');    var title = $.jgrid.getAccessor(cur, 'financeTitle');    var html = [];    html.push('<a target="_blank" href="');    html.push('javascript:preview(\'' + id + '\',\'' + title + '\')');    html.push('"');    html.push('><span class="badge badge-info">查看</span></a>');    return html.join(' ');}function checkFloat(value, name, index) {    var regu = "\^[1-9]\\d{0,7}(\.\\d{1,2})?\$";    var re = new RegExp(regu);    if (re.test(value)) {        return [true, ""];    }    else {        return [false, name + '格式错误'];    }}