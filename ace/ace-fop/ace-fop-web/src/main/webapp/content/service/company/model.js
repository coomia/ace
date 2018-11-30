var _colNames = ['主键', 'portal.department.id',    //========================================    '企业基本信息',    '统一社会信用代码', '所属工商联',    '企业名称', '企业性质', '成立时间', '职工人数', '所在地区', '工商联职务',    '企业类型', '企业简称', '企业编码', '企业门户地址', '企业LOGO',//hide    //========================================    '注册资本信息',    '注册资金（万元）', '固定资产（万元）', '自有流动资金（万元）',    '自有生产（经营）场地（㎡ ）', '租赁生产（经营）场地（㎡ ）',    //========================================    '法人代表信息',    '法人ID', '法人姓名', '手机号码', '性别', '出生年月', '籍贯',    '民族', '政治面貌', '参加工作时间', '文化程度',    '技术职称', '单位职务', '身份证号码', '主要社会职务', '个人简历', '特长及成就',    //========================================    '企业联系方式',    '企业通讯地址', '维度', '经度',    '第一联系人', '联系号码', '第二联系人', '联系号码',//hide    '邮政编码', '传真', '电子邮箱', '企业生产（经营）主要品种',    //========================================    '党组织建立情况',    '党组织类型', '党组织成立时间', '党员人数', '党组织负责人', '联系电话',    //========================================    '工会组织建立情况',    '工会组织成立时间', '工会组织负责人', '联系电话',    //========================================    '构建和谐劳动关系情况',    '劳动合同签订人数', '是否建立劳动关系三方协调机制', '社会保险参保地', '社会保险登记证号',    // 对社会公益事业做过何种贡献 ========================================    '对社会公益事业做过何种贡献',    '安排下岗职工再就业', '助学兴教', '帮困扶贫', '其  他',    //========================================    '纳税信息',    '累计纳税（万元）', '当年纳税（万元）',    //========================================    '其他',    '备注', '状态', '创建人编号', '创建人姓名',    '入库日期', '最后更新人编号', '最后更新人姓名', '最后更新时间', '操作'];var _colModel = function () {    return [        {            name: 'id',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;col-md-8'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'departmentId',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;col-md-8'>*</span>"            }, editrules: {                required: true            }        }        //企业基本信息----------------------------        , {            name: 'title1',            editable: true,            hidden: true,            editoptions: {                title: true            }        }        , {            name: 'creditCode',            editable: true,            hidden: true,            width: 90,            editoptions: {                size: "35",                maxlength: "50",                // colspan: true,            },        }        , {            name: 'belongTo',            editable: true,            hidden: true,            width: 90,            edittype: "select",            editoptions: {                value: {                    "常德市工商联": "常德市工商联",                    "武陵区工商联": "武陵区工商联",                    "鼎城区工商联": "鼎城区工商联",                    "汉寿县工商联": "汉寿县工商联",                    "桃源县工商联": "桃源县工商联",                    "临澧县工商联": "临澧县工商联",                    "澧县工商联": "澧县工商联",                    "津市市工商联": "津市市工商联",                    "石门县工商联": "石门县工商联",                    "安乡县工商联": "安乡县工商联"                },                style: 'width:80%;height:35px;',                // colspan: true,            },        }        , {            name: 'fullName',            editable: true,            width: 180,            editoptions: {                style: 'width:95%;height:25px;',                colspan: true,            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;col-md-8'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'companyProperty',            editable: true,            hidden: true,            width: 100,            edittype: "select",            renderer: function (value) {                return rsd(value, "134");            },            editoptions: {                value: odparse("134"),            },        }        , {            name: 'establishDate',            editable: true,            hidden: true,            width: 65,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "35",                maxlength: "50"            },            renderer: function (value) {                return value.substr(0, 10);            }        }        , {            name: 'crewSize',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",                colspan: false            },        }        , {            name: 'areaCode',            editable: true,            hidden: true,            width: 100,            edittype: "combotree",            editoptions: {                style: 'width:200px;height:25px;',            },            dataoptions: {                url: portalPath + '/system/selectProvinceTreeList.do?id=00',                required: false            },        }        , {            name: 'fopPost',            editable: true,            hidden: true,            width: 100,            edittype: "select",            renderer: function (value) {                return rsd(value, "150");            },            editoptions: {                value: odparse("150"),                colspan: true,            },        }        //隐藏编辑项 -start        , {            name: 'companyType',            editable: false,            hidden: true,            width: 100,            edittype: "select",            editoptions: {                value: {"0": "企业会员", "4": "个人会员"},//, "1": "团体企业", "2": "律师事务所", "3": "银行机构"                disabled: "disabled"            },        }        , {            name: 'shortName',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'companyCode',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",            },        }        , {            name: 'companyLinkUrl',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'companyLogo',            editable: false,            hidden: true,            width: 100,            editoptions: {                style: 'width:200px;',                maxlength: "200",            },        }        //隐藏编辑项 -end        // 企业资本信息---------------------        , {            name: 'title2',            editable: true,            hidden: true,            editoptions: {                title: true            }        }        , {            name: 'registeredCapital',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'fixedAssets',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'workingCapital',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'ownSpace',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'tenancySpace',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",                colspan: true,            },        }        // 法人信息---------------------        , {            name: 'title3',            editable: true,            hidden: true,            editoptions: {                title: true            }        }        , {            name: 'personId',            editable: false,            hidden: true,            width: 60,            editoptions: {                size: "35",                maxlength: "50",                // value: $.jgrid.getAccessor(cur, 'realName'),            }        }        , {            name: 'realName',            editable: true,            hidden: false,            width: 60,            editoptions: {                size: "35",                maxlength: "50",            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;col-md-8'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'lpMobile',            editable: true,            // hidden: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;col-md-8'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'lpSex',            editable: true,            hidden: true,            width: 80,            edittype: "select",            renderer: function (value) {                return rsd(value, "01");            },            editoptions: {                value: odparse("01")            },        }        , {            name: 'lpBirthDt',            editable: true,            hidden: true,            width: 80,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'lpNativePlace',            editable: true,            hidden: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'lpNationality',            editable: true,            hidden: true,            width: 80,            edittype: "select",            renderer: function (value) {                return rsd(value, "09");            },            editoptions: {                value: odparse("09")            },        }        , {            name: 'lpPolitical',            editable: true,            hidden: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'lpRecruitmentDate',            editable: true,            hidden: true,            width: 80,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'lpEducation',            editable: true,            hidden: true,            width: 80,            edittype: "select",            renderer: function (value) {                return rsd(value, "10");            },            editoptions: {                value: odparse("10")            },        }        , {            name: 'lpSkillJobTitle',            editable: true,            hidden: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'lpDeptPost',            editable: true,            hidden: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'lpIdentityCard',            editable: true,            hidden: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'lpSocietyPost',            editable: true,            hidden: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50",                colspan: true,            },        }        , {            name: 'lpResume',            editable: true,            hidden: true,            width: 80,            edittype: "textarea",            editoptions: {                colspan: true,                size: "20",                maxlength: "250",                style: 'width:95%;height: 120px;'            }        }        , {            name: 'lpAchievement',            editable: true,            hidden: true,            width: 80,            edittype: "textarea",            editoptions: {                colspan: true,                size: "20",                maxlength: "250",                style: 'width:95%;height: 120px;'            }        }        // 企业联系方式---------------------        , {            name: 'title4',            editable: true,            hidden: true,            editoptions: {                title: true            }        }        , {            name: 'address',            editable: true,            // hidden: true,            width: 300,            editoptions: {                style: 'width:90%',                colspan: true            }        }        , {            name: 'latitude',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",                disabled: 'disabled',            },        }        , {            name: 'longitude',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",                disabled: 'disabled',            },        }        //隐藏编辑项 -s        , {            name: 'firstPersonId',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'fpMobile',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'secPersonId',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'spMobile',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        //隐藏编辑项 -end        , {            name: 'postcode',            editable: true,            hidden: true,            width: 100,            // edittype: "select",            // renderer: function (value) {            //     return rsd(value, "01");            // },            editoptions: {                // value: odparse("01"),                size: "35",                maxlength: "50"            },        }        , {            name: 'fax',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'email',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'majorVariety',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",            },        }        // 党组织建立情况 ---------------------        // '党组织类型','党组织成立时间','党员人数','党组织负责人','联系电话',        , {            name: 'title8',            editable: true,            hidden: true,            editoptions: {                title: true            }        }        , {            name: 'partyCategory',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'partyCrtDt',            editable: true,            hidden: true,            width: 100,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'partyPeoples',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'partyDutyMan',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'partyPhone',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",                colspan: true            },        }        // 工会组织建立情况 ========================================        // '工会组织成立时间','工会组织负责人','联系电话',        , {            name: 'title9',            editable: true,            hidden: true,            editoptions: {                title: true            }        }        , {            name: 'unionCrtDt',            editable: true,            hidden: true,            width: 100,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'unionDutyMan',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'unionPhone',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",                colspan: true            },        }        // 构建和谐劳动关系情况---------------------        , {            name: 'title5',            editable: true,            hidden: true,            editoptions: {                title: true            }        }        , {            name: 'laborContractNum',            hidden: true,            editable: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'thirdLaborRelation',            editable: true,            hidden: true,            width: 100,            edittype: "select",            editoptions: {                value: {"": "请选择", "1": "是", "0": "否"},                style: 'width:80%;height:35px;',            },            renderer: function (value) {                if (value == null || value == undefined) {                    value == '';                }                var rst = "";                switch (value) {                    case '1' :                        rst = "是";                        break;                    case '0' :                        rst = "否";                        break;                    default :                        rst = "";                }                return rst;            },        }        , {            name: 'socialInsuranceAddr',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'socialInsuranceNum',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",                //             },        }        // 对社会公益事业做过何种贡献 ========================================        // '安排下岗职工再就业','助学兴教','帮困扶贫','其  他',        , {            name: 'title10',            editable: true,            hidden: true,            editoptions: {                title: true            }        }        , {            name: 'reemployContribution',            editable: true,            hidden: true,            width: 100,            edittype: "textarea",            editoptions: {                colspan: true,                size: "20",                maxlength: "250",                style: 'width:95%;height: 120px;'            }        }        , {            name: 'educationContribution',            editable: true,            hidden: true,            width: 100,            edittype: "textarea",            editoptions: {                colspan: true,                size: "20",                maxlength: "250",                style: 'width:95%;height: 120px;'            }        }        , {            name: 'helpPoorContribution',            editable: true,            hidden: true,            width: 100,            edittype: "textarea",            editoptions: {                colspan: true,                size: "20",                maxlength: "250",                style: 'width:95%;height: 120px;'            }        }        , {            name: 'otherContribution',            editable: true,            hidden: true,            width: 100,            edittype: "textarea",            editoptions: {                colspan: true,                size: "20",                maxlength: "250",                style: 'width:95%;height: 120px;'            }        }        // 纳税信息---------------------        , {            name: 'title6',            editable: true,            hidden: true,            editoptions: {                title: true            }        }        , {            name: 'accTaxAmount',            editable: true,            hidden: true,            width: 65,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'yearTaxAmount',            editable: true,            hidden: true,            width: 65,            editoptions: {                size: "35",                maxlength: "50"            },        }        // 其他---------------------        , {            name: 'title7',            editable: true,            hidden: true,            editoptions: {                title: true            }        }        , {            name: 'remark',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "30"            },        }        , {            name: 'status',            editable: false,            hidden: false,            width: 35,            edittype: "checkbox",            editoptions: {                value: "1:0"            },            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.status == '0') {                    return "style='color:red;'";                }                if (rawObject.status == '1') {                    return "style='color:#FF9224;'";                }                if (rawObject.status == '2') {                    return "style='color:green;'";                }            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '0' :                        rst = "已删除";                        break;                    case '1' :                        rst = "非会员";                        break;                    case '2' :                        rst = "会员";                        break;                    default :                        rst = "非会员";                }                return rst;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;col-md-8'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'createUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'opt',            sortable: false,            width: 120,            renderer: function (value, cur) {                var rowid = $.jgrid.getAccessor(cur, cfg.dataId);                var title = $.jgrid.getAccessor(cur, 'fullName');                var opt = [];                if (authorConfig.hasOwnProperty(cfg.grid_edit_data_url)) {                    opt.push('<a href="javascript:edit(\'' + rowid + '\')">编辑</a> ');                }                if (authorConfig.hasOwnProperty(cfg.grid_edit_data_url)) {                    opt.push('<a href="javascript:editPreview(\'' + rowid + '\')">档案录入</a> ');                }                if (authorConfig.hasOwnProperty(cfg.insertRoleResources)) {                    opt.push('<a href="javascript:role(\'' + rowid + '\')">分配权限</a>  ');                }                if (authorConfig.hasOwnProperty(cfg.grid_delete_data_url)) {                    opt.push('<a href="javascript:del(\'' + rowid + '\')">删除</a>  ');                }                opt.push('<a href="javascript:preview(\'' + rowid + '\',\'' + title + '\')" >查看</a>');                return opt.join('');            }        }    ];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]').addClass(            'ace ace-switch ace-switch-5').after(            '<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}