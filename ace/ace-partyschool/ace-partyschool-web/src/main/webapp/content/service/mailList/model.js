var _colNames =['主键','小组名称','上级编号','创建日期','操作'];
var _colModel = function () {
return [
{name : 'id',editable : true,width : 100,editoptions : {size : "20",maxlength : "50"},formoptions : {elmprefix : "",elmsuffix : "<span style='color:red;'>*</span>"},editrules : {required : true}},{name : 'name',editable : true,width : 100,editoptions : {size : "20",maxlength : "50"},formoptions : {elmprefix : "",elmsuffix : "<span style='color:red;'>*</span>"},editrules : {required : true}},{name : 'pid',editable : true,width : 100,editoptions : {size : "20",maxlength : "50"},formoptions : {elmprefix : "",elmsuffix : "<span style='color:red;'>*</span>"},editrules : {required : true}},{name : 'createDate',hidden : true,editable : false,width : 100},
{
name: 'opt',
width: 100,
hidden: false,
editable: false,
sortable: false,
renderer: function (value, cur) {
return renderBtn(cur);
}
}
];
}
function aceSwitch(cellvalue, options, cell) {
console.log('aceSwitch');
setTimeout(function () {
$(cell).find('input[type=checkbox]').addClass(
'ace ace-switch ace-switch-5').after(
'<span class="lbl"></span>');
}, 0);
}
// enable datepicker
function pickDate(cellvalue, options, cell) {
setTimeout(function () {
$(cell).find('input[type=text]').datepicker({
format: 'yyyy-mm-dd',
autoclose: true
});
}, 0);
}
function renderBtn(cur) {
var rowid = $.jgrid.getAccessor(cur, 'id');
var title = $.jgrid.getAccessor(cur, 'name');

var opt = [];
if (authorConfig.hasOwnProperty(cfg.grid_edit_data_url)) {
opt.push('<a href="javascript:edit(\'' + rowid + '\')">编辑</a> ');
}
if (authorConfig.hasOwnProperty(cfg.grid_delete_data_url)) {
opt.push('<a href="javascript:del(\'' + rowid + '\')">删除</a>  ');
}

opt.push('<a href="#" data-toggle="modal" data-id="' + rowid + '" data-title="' + title + '" ' +
'data-target="#modal-preview">查看</a>');

return opt.join(' ');
}