var _colNames = ['主键', 'portal.department.id',    //========================================    '企业基本信息',    '统一社会信用代码', '企业类型', '企业全称', '企业简称', '企业编码',    '企业门户地址', '所在地区', '企业性质', '成立时间', '职工人数', '企业LOGO',    //========================================    '企业资本信息',    '注册资金（万元）', '固定资产（万元）', '自有流动资金（万元）',    '自有生产（经营）场地（㎡ ）', '租赁生产（经营）场地（㎡ ）',    //========================================    '法人信息',    '法人ID', '法人姓名', '手机号码', '性别', '出生年月', '籍贯',    '民族', '政治面貌', '参加工作时间', '文化程度',    '技术职称', '单位职务', '身份证号码', '主要社会职务',    //========================================    '企业联系方式',    '企业通讯地址', '维度', '经度',    '第一联系人', '联系号码', '第二联系人', '联系号码',    '邮政编码', '传真', '电子邮箱', '企业生产（经营）主要品种',    //========================================    '劳动关系信息',    '劳动合同签订人数', '是否建立劳动关系三方协调机制', '社会保险参保地', '社会保险登记证号',    //========================================    '纳税信息',    '累计纳税（万元）', '当年纳税（万元）',    //========================================    '其他',    '备注', '状态', '创建人编号', '创建人姓名',    '入库日期', '最后更新人编号', '最后更新人姓名', '最后更新时间', '操作'];var _colModel = function () {    return [        {            name: 'id',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'departmentId',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        //企业基本信息----------------------------        , {            name: 'title1',            editable: true,            hidden: true,            editoptions: {                title: true            }        }        , {            name: 'creditCode',            editable: true,            width: 90,            editoptions: {                size: "35",                maxlength: "50",            },        }        , {            name: 'companyType',            editable: true,            hidden: true,            width: 100,            edittype: "select",            editoptions: {                value: {"0": "企业会员", "4": "个人会员"},//, "1": "团体企业", "2": "律师事务所", "3": "银行机构"                // disabled: "disabled"            },        }        , {            name: 'fullName',            editable: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'shortName',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'companyCode',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",            },        }        , {            name: 'companyLinkUrl',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'areaCode',            editable: true,            hidden: true,            width: 100,            edittype: "combotree",            editoptions: {                style: 'width:200px;height:25px;',            },            dataoptions: {                url: portalPath + '/system/selectProvinceTreeList.do?id=4307',                required: false            },        }        , {            name: 'companyProperty',            editable: true,            hidden: true,            width: 100,            edittype: "select",            renderer: function (value) {                return rsd(value, "134");            },            editoptions: {                value: odparse("134"),            },        }        , {            name: 'establishDate',            editable: true,            width: 65,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "35",                maxlength: "50"            },            renderer: function (value) {                return value.substr(0, 10);            }        }        , {            name: 'crewSize',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",                colspan: false            },        }        , {            name: 'companyLogo',            editable: true,            hidden: true,            width: 100,            editoptions: {                style: 'width:200px;',                maxlength: "200",                colspan: true            },        }        // 企业资本信息---------------------        , {            name: 'title2',            editable: true,            hidden: true,            editoptions: {                title: true            }        }        , {            name: 'registeredCapital',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'fixedAssets',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'workingCapital',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'ownSpace',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'tenancySpace',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",                colspan: true,            },        }        // 法人信息---------------------        , {            name: 'title3',            editable: true,            hidden: true,            editoptions: {                title: true            }        }        , {            name: 'personId',            editable: false,            hidden: true,            width: 60,            editoptions: {                size: "35",                maxlength: "50",                // value: $.jgrid.getAccessor(cur, 'realName'),            }        }        , {            name: 'realName',            editable: true,            hidden: false,            width: 60,            editoptions: {                size: "35",                maxlength: "50",                // value: $.jgrid.getAccessor(cur, 'realName'),            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'lpMobile',            editable: true,            hidden: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'lpSex',            editable: true,            hidden: true,            width: 80,            edittype: "select",            renderer: function (value) {                return rsd(value, "01");            },            editoptions: {                value: odparse("01")            },        }        , {            name: 'lpBirthDt',            editable: true,            hidden: true,            width: 80,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'lpNativePlace',            editable: true,            hidden: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'lpNationality',            editable: true,            hidden: true,            width: 80,            edittype: "select",            renderer: function (value) {                return rsd(value, "09");            },            editoptions: {                value: odparse("09")            },        }        , {            name: 'lpPolitical',            editable: true,            hidden: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'lpRecruitmentDate',            editable: true,            hidden: true,            width: 80,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'lpEducation',            editable: true,            hidden: true,            width: 80,            edittype: "select",            renderer: function (value) {                return rsd(value, "10");            },            editoptions: {                value: odparse("10")            },        }        , {            name: 'lpSkillJobTitle',            editable: true,            hidden: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'lpDeptPost',            editable: true,            hidden: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'lpIdentityCard',            editable: true,            hidden: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'lpSocietyPost',            editable: true,            hidden: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50",                colspan: true,            },        }        // 企业联系方式---------------------        , {            name: 'title4',            editable: true,            hidden: true,            editoptions: {                title: true            }        }        , {            name: 'address',            editable: true,            // hidden: true,            width: 150,            editoptions: {                style: 'width:400px;',                colspan: true            }        }        , {            name: 'latitude',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",                disabled: 'disabled',            },        }        , {            name: 'longitude',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",                disabled: 'disabled',            },        }        , {            name: 'firstPersonId',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'fpMobile',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'secPersonId',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'spMobile',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'postcode',            editable: true,            hidden: true,            width: 100,            // edittype: "select",            // renderer: function (value) {            //     return rsd(value, "01");            // },            editoptions: {                // value: odparse("01"),                size: "35",                maxlength: "50"            },        }        , {            name: 'fax',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'email',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'majorVariety',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",            },        }        // 劳动关系信息---------------------        , {            name: 'title5',            editable: true,            hidden: true,            editoptions: {                title: true            }        }        , {            name: 'laborContractNum',            hidden: true,            editable: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'thirdLaborRelation',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'socialInsuranceAddr',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'socialInsuranceNum',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",                //             },        }        // 纳税信息---------------------        , {            name: 'title6',            editable: true,            hidden: true,            editoptions: {                title: true            }        }        , {            name: 'accTaxAmount',            editable: true,            width: 65,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'yearTaxAmount',            editable: true,            width: 65,            editoptions: {                size: "35",                maxlength: "50"            },        }        // 其他---------------------        , {            name: 'title7',            editable: true,            hidden: true,            editoptions: {                title: true            }        }        , {            name: 'remark',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "30"            },        }        , {            name: 'status',            editable: false,            hidden: true,            width: 100,            edittype: "checkbox",            editoptions: {                value: "1:0"            },            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.status == '0') {                    return "style='background:red;color:#fff'";                }                if (rawObject.status == '1') {                    return "style='background:#FF9224;color:#000000'";                }                if (rawObject.status == '2') {                    return "style='background:green;color:#fff'";                }                if (rawObject.status == '3') {                    return "style='background:#F9F900;color:#000000'";                }                if (rawObject.status == '4') {                    return "style='background:#FF9224;color:#000000'";                }            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '1' :                        rst = "ON";                        break;                    case '0' :                        rst = "OFF";                        break;                    default :                        rst = "N/A";                }                return rst;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'createUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'opt',            width: 100,            hidden: false,            editable: false,            sortable: false,            renderer: function (value, cur) {                return renderBtn(cur);            }        }    ];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]').addClass(            'ace ace-switch ace-switch-5').after(            '<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}function renderBtn(cur) {    var id = $.jgrid.getAccessor(cur, 'id');    var title = $.jgrid.getAccessor(cur, 'fullName');    var html = [];    html.push('<a target="_blank" href="');    html.push('javascript:preview(\'' + id + '\',\'' + title + '\')');    html.push('"');    html.push('><span class="badge badge-info">查看</span></a>');    return html.join(' ');}