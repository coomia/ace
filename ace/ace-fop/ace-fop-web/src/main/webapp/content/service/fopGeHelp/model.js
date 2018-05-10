var _colNames = ['主键', '发起人ID', '发起人类型', '父节点ID', '反应内容', '接待和协调科室', '经办领导', '服务进展', '处理结果', '发布时间', '所含关键字', '累计提问次数', '备注', '状态', '创建人编号', '创建人姓名', '入库日期', '最后更新人编号', '最后更新人姓名', '最后更新时间', '操作'];var _colModel = function () {    return [{        name: 'id',        editable: false,        hidden: true,        width: 100,        editoptions: {size: "35", maxlength: "50"}    }, {        name: 'requestId',        editable: false,        hidden: true,        width: 100,        editoptions: {size: "35", maxlength: "50"}    }, {        name: 'requestType',        editable: false,        hidden: true,        width: 100,        editoptions: {size: "35", maxlength: "50"}    }, {        name: 'parentId',        editable: false,        hidden: true,        width: 100,        editoptions: {size: "35", maxlength: "50"}    }, {        name: 'title',        editable: true,        width: 150,        editoptions: {style: 'width:750px;', readOnly: true, colspan: true,},    }, {        name: 'optDeptName',        editable: true,        width: 150,        editoptions: {size: "35", maxlength: "50",},    }, {        name: 'optLeaderName',        editable: true,        width: 150,        editoptions: {size: "35", maxlength: "50",},    }, {        name: 'processDetail',        editable: true,        hidden: true,        width: 200,        edittype: "textarea",        editoptions: {colspan: true, style: 'width:750px;line-height: 25px;height: 100px;',}    }, {        name: 'reply',        editable: true,        hidden: true,        width: 200,        edittype: "textarea",        editoptions: {colspan: true, style: 'width:750px;line-height: 25px;height: 100px;',},        formoptions: {elmprefix: "", elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"},        editrules: {required: true}    }, {        name: 'releaseDate',        editable: false,        width: 100,        edittype: "datebox",        dataoptions: {            formatter: function (date) {                var y = date.getFullYear();                var m = date.getMonth() + 1;                var d = date.getDate();                return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);            }, parser: function (s) {                if (!s) return new Date();                var ss = (s.split('-'));                var y = parseInt(ss[0], 10);                var m = parseInt(ss[1], 10);                var d = parseInt(ss[2], 10);                if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {                    return new Date(y, m - 1, d);                } else {                    return new Date();                }            }        },        editoptions: {size: "35", maxlength: "50"}    }, {        name: 'keyWord',        editable: false,        hidden: true,        width: 100,        editoptions: {size: "35", maxlength: "50"}    }, {        name: 'accCount',        editable: false,        hidden: true,        width: 70,        editoptions: {size: "35", maxlength: "50"}    }, {name: 'remark', editable: true, width: 100, editoptions: {size: "35", maxlength: "50"}}, {        name: 'status',        editable: false,        width: 55,        edittype: "select",        editoptions: {value: {"1": "未发布", "2": "已发布"}},        cellattr: function (rowId, val, rawObject, cm, rdata) {            if (rawObject.status == '1') {                return "style='background:#FF9224;color:#000000'";            }            if (rawObject.status == '2') {                return "style='background:green;color:#fff'";            }        },        unformat: aceSwitch,        renderer: function (value) {                //1-未发布，2-已发布            var rst = "";            switch (value) {                case '-1' :                    rst = "已删除";                    break;                case '1' :                    rst = "未发布";                    break;                case '2' :                    rst = "已发布";                    break;                default :                    rst = "N/A";            }            return rst;        },        formoptions: {elmprefix: "", elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"},        editrules: {required: true}    }, {name: 'createUserId', hidden: true, editable: false, width: 100}, {        name: 'createUserName',        hidden: true,        editable: false,        width: 100    }, {name: 'createDate', hidden: true, editable: false, width: 100}, {        name: 'lastModifyUserId',        hidden: true,        editable: false,        width: 100    }, {name: 'lastModifyUserName', hidden: true, editable: false, width: 100}, {        name: 'lastModifyDate',        hidden: true,        editable: false,        width: 100    }, {        name: 'opt', width: 100, hidden: false, editable: false, sortable: false, renderer: function (value, cur) {            return renderBtn(cur);        }    }];}function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]').addClass('ace ace-switch ace-switch-5').after('<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({format: 'yyyy-mm-dd', autoclose: true});    }, 0);}function renderBtn(cur) {    var id = $.jgrid.getAccessor(cur, 'id');    var title = $.jgrid.getAccessor(cur, 'name');    var html = [];    html.push('<a target="_blank" href="');    html.push('javascript:preview(\'' + id + '\',\'' + title + '\')');    html.push('"');    html.push('><span class="badge badge-info">查看</span></a>');    return html.join(' ');}