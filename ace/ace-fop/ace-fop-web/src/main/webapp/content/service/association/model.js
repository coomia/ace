var _colNames = ['主键',    '协会全称', '所属工商联',    '协会简称', '拼音代码',//hide    '所在地区', '协会地址', '维度', '经度',    '办公电话', '成立时间', '会长姓名', '理事数量', '副会长数量',    '备注', '状态', '创建人编号', '创建人姓名', '入库日期', '最后更新人编号', '最后更新人姓名', '最后更新时间', '操作'];var _colModel = function () {    return [        {            name: 'id',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        }        , {            name: 'fullName',            editable: true,            width: 180,            editoptions: {                size: "35",                maxlength: "50"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'belongTo',            editable: true,            hidden: true,            width: 90,            edittype: "select",            editoptions: {                value: {                    "常德市工商联": "常德市工商联",                    "武陵区工商联": "武陵区工商联",                    "鼎城区工商联": "鼎城区工商联",                    "汉寿县工商联": "汉寿县工商联",                    "桃源县工商联": "桃源县工商联",                    "临澧县工商联": "临澧县工商联",                    "澧县工商联": "澧县工商联",                    "津市市工商联": "津市市工商联",                    "石门县工商联": "石门县工商联",                    "安乡县工商联": "安乡县工商联"                },                style: 'width:80%;height:25px;',                // colspan: true,            },        }        , {            name: 'shortName',            editable: false,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'abcCode',            hidden: true,            editable: false,            width: 100,            edittype: "select",            renderer: function (value) {                return rsd(value, "01");            },            editoptions: {                value: odparse("01")            },        }        , {            name: 'areaCode',            editable: true,            hidden: true,            width: 100,            edittype: "combotree",            editoptions: {                style: 'width:200px;height:25px;',            },            dataoptions: {                url: portalPath + '/system/selectProvinceTreeList.do?id=4307',                required: false            },        }        , {            name: 'address',            editable: true,            width: 300,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'latitude',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",                disabled: 'disabled',            },        }        , {            name: 'longitude',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50",                disabled: 'disabled',            },        }        , {            name: 'phoneNumber',            editable: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'establishDate',            editable: true,            hidden: true,            width: 65,            edittype: "datebox",            dataoptions: {                formatter: function (date) {                    var y = date.getFullYear();                    var m = date.getMonth() + 1;                    var d = date.getDate();                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'                        + (d < 10 ? ('0' + d) : d);                },                parser: function (s) {                    if (!s)                        return new Date();                    var ss = (s.split('-'));                    var y = parseInt(ss[0], 10);                    var m = parseInt(ss[1], 10);                    var d = parseInt(ss[2], 10);                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                        return new Date(y, m - 1, d);                    } else {                        return new Date();                    }                }            },            editoptions: {                size: "35",                maxlength: "50"            },            renderer: function (value) {                return value.substr(0, 10);            }        }        , {            name: 'pseronId',            editable: true,            width: 80,            editoptions: {                size: "35",                maxlength: "50"            },            // renderer: function (value, cur) {            //     return $.jgrid.getAccessor(cur, 'realName');            // },        }        , {            name: 'directorNum',            editable: true,            hidden: true,            width: 60,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'viceNum',            editable: true,            hidden: true,            width: 60,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'remark',            editable: true,            hidden: true,            width: 100,            editoptions: {                size: "35",                maxlength: "50"            },        }        , {            name: 'status',            editable: false,            hidden: true,            width: 100,            edittype: "checkbox",            editoptions: {                value: "1:0"            },            cellattr: function (rowId, val, rawObject, cm, rdata) {                if (rawObject.status == '0') {                    return "style='background:red;color:#fff'";                }                if (rawObject.status == '1') {                    return "style='background:#FF9224;color:#000000'";                }                if (rawObject.status == '2') {                    return "style='background:green;color:#fff'";                }                if (rawObject.status == '3') {                    return "style='background:#F9F900;color:#000000'";                }                if (rawObject.status == '4') {                    return "style='background:#FF9224;color:#000000'";                }            },            unformat: aceSwitch,            renderer: function (value) {                var rst = "";                switch (value) {                    case '1' :                        rst = "ON";                        break;                    case '0' :                        rst = "OFF";                        break;                    default :                        rst = "N/A";                }                return rst;            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            }, editrules: {                required: true            }        }        , {            name: 'createUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'createDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserId',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyUserName',            hidden: true,            editable: false,            width: 100        }        , {            name: 'lastModifyDate',            hidden: true,            editable: false,            width: 100        }        , {            name: 'opt',            width: 100,            hidden: false,            editable: false,            sortable: false,            renderer: function (value, cur) {                return renderBtn(cur);            }        }    ];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]').addClass(            'ace ace-switch ace-switch-5').after(            '<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}function renderBtn(cur) {    var id = $.jgrid.getAccessor(cur, 'id');    var title = $.jgrid.getAccessor(cur, 'fullName');    var html = [];    html.push('<a target="_blank" href="');    html.push('javascript:preview(\'' + id + '\',\'' + title + '\')');    html.push('"');    html.push('><span class="badge badge-info">查看</span></a>');    return html.join(' ');}