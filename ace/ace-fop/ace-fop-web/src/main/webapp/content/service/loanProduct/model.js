var _colNames = ['主键', '产品名称', '机构名称', '所属区域',    '产品描述', '贷款额度（万）', '利率计算方式', '贷款年利率（%）', '贷款用途', '贷款年限', '还款方式', '担保方式', '发布时间', '备注', '状态', '创建人编号', '创建人姓名', '入库日期', '最后更新人编号', '最后更新人姓名', '最后更新时间', '操作'];var _colModel = function () {    return [        {            name: 'id',            editable: false,            width: 100,            hidden: true,        }        , {            name: 'productName',            editable: true,            width: 300,            editoptions: {                style: 'width:200px;height:25px;',            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'companyId',            editable: true,            hidden: false,            width: 150,            edittype: "combogrid",            dataoptions: {                panelWidth: 300,                idField: 'id',                textField: 'fullName',                url: contextPath + '/fopCompany/selectCompany',                mode: 'remote',                fitColumns: true,                method: 'get',                columns: [[{                    field: 'fullName',                    title: '公司名称',                    width: 200                }]]            },            editoptions: {                style: 'width:200px;height:25px;',            },            renderer: function (value, cur) {                var companyName = $.jgrid.getAccessor(cur, 'companyName');                if (isNull(companyName)) {                    return "常德市工商联";                }                return companyName;            }        }        , {            name: 'areaCode',            editable: false,            hidden: true,            width: 100,            edittype: "combotree",            dataoptions: {                url: portalPath + '/system/selectProvinceTreeList.do',                required: false            },            renderer: function (value, cur) {                return $.jgrid.getAccessor(cur, 'areaName');            },            editoptions: {                style: 'width:200px;height:25px;',            },        }        , {            name: 'description',            editable: true,            hidden: true,            edittype: "textarea",            width: 100,            editoptions: {                style: 'width:692px;height:120px;',                colspan: true,            },        }        ,        {            name: 'loanAmount',            editable: false,            hidden: true,            width: 100,            editoptions: {                style: 'width:200px;height:25px;',            },            formoptions: {                elmprefix: "",                elmsuffix: "万<span style='color:red;'>*</span>"            }, editrules: {            required: true        }        }        , {            name: 'rateType',            editable: false,            hidden: true,            width: 100,            editoptions: {                style: 'width:200px;height:25px;',            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'loanRate',            editable: false,            hidden: true,            width: 100,            editoptions: {                style: 'width:200px;height:25px;',            },            formoptions: {                elmprefix: "",                elmsuffix: "<span>%</span><span style='color:red;'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'loanType',            editable: false,            hidden: true,            width: 100,            edittype: "select",            renderer: function (value) {                return rsd(value, "132");            },            editoptions: {                style: 'width:200px;height:25px;',                value: odparse("132")            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'loanYear',            editable: false,            hidden: true,            width: 100,            edittype: "select",            renderer: function (value) {                return rsd(value, "128");            },            editoptions: {                style: 'width:200px;height:25px;',                value: odparse("128")            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'repaymentType',            editable: false,            hidden: true,            width: 100,            editoptions: {                style: 'width:200px;height:25px;',            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'suretyType',            editable: false,            hidden: true,            width: 100,            edittype: "select",            renderer: function (value) {                return rsd(value, "130");            },            editoptions: {                style: 'width:200px;height:25px;',                value: odparse("130")            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'releaseDate',            editable: false,            width: 100,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                style: 'width:200px;height:25px;',            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'remark',            editable: true,            hidden: true,            width: 100,            editoptions: {                style: 'width:200px;height:25px;',            },        }        , {            name: 'status',            editable: false,            hidden: false,            width: 50,            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.status == '1') {                    return "style='color:#FF9224;'";                }                if (rawObject.status == '2') {                    return "style='color:green;'";                }                if (rawObject.status == '3') {                    return "style='color:#EE2C2C;'";                }            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '1' :                        rst = "审核中";                        break;                    case '2' :                        rst = "审核通过";                        break;                    case '3' :                        rst = "驳回";                        break;                    default :                        rst = "N/A";                }                return rst;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'createUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyDate',            hidden: true,            editable: false,            width: 100        }        ,        {            name: 'opt',            width: 100,            hidden: false,            editable: false,            sortable: false,            renderer: function (value, cur) {                return renderBtn(cur);            }        }    ];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]').addClass(            'ace ace-switch ace-switch-5').after(            '<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}function renderBtn(cur) {    var rowid = $.jgrid.getAccessor(cur, cfg.dataId);    var title = $.jgrid.getAccessor(cur, 'title');    var opt = [];    if (authorConfig.hasOwnProperty(cfg.grid_edit_data_url)) {       opt.push('<a href="javascript:edit(\'' + rowid + '\')">编辑</a>  ');    }    if (authorConfig.hasOwnProperty(cfg.grid_delete_data_url)) {        opt.push('<a href="javascript:del(\'' + rowid + '\')">删除</a>  ');    }    if (authorConfig.hasOwnProperty(cfg.grid_audit_data_url)) {        opt.push('<a class="operation" href="#" data-toggle="modal" data-target="#modal-audit" data-id="' + rowid + '">审核</a> ');    }    opt.push('<a href="javascript:preview(\'' + rowid + '\',\'' + title + '\')" >查看</a>');    return opt.join('');}