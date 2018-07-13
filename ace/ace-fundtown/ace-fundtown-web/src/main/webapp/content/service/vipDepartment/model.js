var _colNames = [    'id', '编号',    '企业名称', '企业类型', '所属机构名称',    //'简称', '类型', '所属地区', '名称简拼',    // '联系人姓名', '联系人电话',    '联系手机号',    // '联系人QQ',    '联系电子邮箱',    // '联系人传真',    '法人代表',    //'法人证件类型', '法定人证件号', '法人联系人电话', '法人联系人手机号', '法人住址',    '注册时间', '注册资本(万元)',    //'注册区号',    '注册地址',    //'经济性质[国有、集体、私营、联营、三资、其他]',    //'营业执照号', '经营地址', '经营区号', '传真', '公司邮箱',    //'交通部门批文号', '道路运输经营许可证号', '许可证有效日期',    //'道路运输经营许可证经营范围[普通货运货物专用运输(集装箱)货物专用运输(冷藏保鲜)货物专用运输(罐式)',    //'从业人员数', '驾驶员数', '无证人数', '持证人数', '本年度安全事故情况',    //'有无投诉处罚情况', '小图片', '大图片',    '入驻状态',    'createUserId', '创建的用户名', 'createTime', '最后修改时间', '最后修改用户ID', '最后修改用户名',    //'latitude', 'longitude', 'serviceTimeStart', 'serviceTimeEnd', 'qrcode', 'serviceWay',    //'系统标示', 'LOGO', '水印1', '水印2',    '操作'];var _colModel = function () {    return [        {            name: 'id',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'departmentId',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'departmentName',            editable: true,            width: 180,            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'type',            editable: true,            width: 75,            edittype: "select",            renderer: function (value) {                value = (null == value || '' == value || undefined == value) ? '0' : value;                return rsd(value, "147");            },            editoptions: {                value: odparse("147")            },        }        , {            name: 'parentDepartmentId',            editable: true,            width: 100,            renderer: function (value, cur) {                var v = $.jgrid.getAccessor(cur, 'parentDepartmentName');                if (v == '' || v == null || v == undefined) {                    v = '';                }                return v;            },            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        // , {        //     name: 'shortName',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'category',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'areaCode',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'pcode',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'contactName',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'contactTel',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        , {            name: 'contactMobile',            editable: true,            // hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        // , {        //     name: 'contactQq',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        , {            name: 'contactEmail',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        // , {        //     name: 'contactFax',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        , {            name: 'legalPersonName',            editable: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        // , {        //     name: 'legalPersonIdType',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'legalPersonIdNo',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'legalPersonTel',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'legalPersonMobile',        //     editable: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'legalPersonAddr',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        , {            name: 'regDate',            editable: true,            width: 100,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "20",                maxlength: "50"            },            renderer: function (value) {                return value.substr(0, 10);            }        }        , {            name: 'regCapital',            editable: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        // , {        //     name: 'regAreaCode',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        , {            name: 'regAddr',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        // , {        //     name: 'nature',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'bussLicenseNo',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'bussAddr',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'bussAreaCode',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'fax',        //     editable: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'email',        //     editable: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'transDepartApprovalNo',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'transBussLicenseNo',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'transBussLicenseValidDate',        //     editable: false,        //     hidden: true,        //     width: 100,        //     edittype: "datebox",        //     dataoptions: {        //         formatter: function (date) {        //             var y = date.getFullYear();        //             var m = date.getMonth() + 1;        //             var d = date.getDate();        //             return y + '-' + (m < 10 ? ('0' + m) : m) + '-'        //                 + (d < 10 ? ('0' + d) : d);        //         },        //         parser: function (s) {        //             if (!s)        //                 return new Date();        //             var ss = (s.split('-'));        //             var y = parseInt(ss[0], 10);        //             var m = parseInt(ss[1], 10);        //             var d = parseInt(ss[2], 10);        //             if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {        //                 return new Date(y, m - 1, d);        //             } else {        //                 return new Date();        //             }        //         }        //     },        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'transBussScope',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'employeesNum',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'driverNum',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'unlicensedDriverNum',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'licensedDriverNum',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'accidentOfYear',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'complaintsRemark',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'simage',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'bimage',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        , {            name: 'status',            editable: false,            width: 50,            edittype: "checkbox",            editoptions: {                value: "1:0"            },            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.status == '0') {                    return "style='background:red;color:#fff'";                }                if (rawObject.status == '1') {                    return "style='background:#FF9224;color:#000000'";                }                if (rawObject.status == '2') {                    return "style='background:green;color:#fff'";                }            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '0' :                        rst = "已删除";                        break;                    case '1' :                        rst = "入驻中";                        break;                    case '2' :                        rst = "已完成";                        break;                    // case '3' :                    //     rst = "已公示";                    //     break;                    default :                        rst = "入驻中";                }                return rst;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'createUserId',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'createUserName',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'createTime',            editable: false,            hidden: true,            width: 100,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'lastModifyTime',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'lastModifyUserId',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        , {            name: 'lastModifyUserName',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "20",                maxlength: "50"            },        }        // , {        //     name: 'latitude',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'longitude',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'serviceTimeStart',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'serviceTimeEnd',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'qrcode',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'serviceWay',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'syid',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'logo',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'watermark1',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        // , {        //     name: 'watermark2',        //     editable: false,        //     hidden: true,        //     width: 100,        //     editoptions: {        //         size: "20",        //         maxlength: "50"        //     },        // }        ,        {            name: 'opt',            width: 100,            hidden: false,            editable: false,            sortable: false,            renderer: function (value, cur) {                return renderBtn(cur);            }        }    ];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]').addClass(            'ace ace-switch ace-switch-5').after(            '<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}function renderBtn(cur) {    var id = $.jgrid.getAccessor(cur, 'departmentId');    var title = $.jgrid.getAccessor(cur, 'departmentName');    var html = [];    html.push('<a target="_blank" href="');    html.push('javascript:preview(\'' + id + '\',\'' + title + '\')');    html.push('"');    html.push('><span class="badge badge-info">查看</span></a>');    return html.join(' ');}