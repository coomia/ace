var loading = {};
var editor;
window.onload = function (){
    jQuery(function ($) {
        initPage();
        initEvents();
    });
}
function App() {
    console.log("=============================App Start==============================");
    loadCustom();
}
function loadCustom() {
    var urls = [];
    for (var i = 0; i < urls.length; i++) {
        loader(urls[i]);
    }
}
function initEditor() {
        editor = new Simditor({
        textarea: $('textarea[name=introduce]'),
        toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol',
            'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent'
        ],
        upload: {
            url: portalPath + '/files/uploadImage.do',
            params: null,
            fileKey: 'file',
            connectionCount: 3,
            leaveConfirm: '正在上传文件'
        }
    });
}
/*页面渲染*/
function render(obj, data, tplId) {
    var tpl = document.getElementById(tplId).innerHTML;
    var html = juicer(tpl, {
        data: data,
    });
    $(obj).html(html);
}

function initPage() {
    initEditor();
    initUpload();
}
function initEvents(){
    /*表单验证*/
    $("#fm-add").validate({
        onfocusout: function(element) { $(element).valid(); },
        rules: {
                                         tplPageId: {required: true,maxlength:50},                             articleCategory: {required: true,maxlength:50},                             title: {required: true,maxlength:200},                             mediType: {required: true,maxlength:20}                                 },
        messages: {
                                         tplPageId: {
                    required: "请输入所属页面",
                    maxlength:"所属页面字符长度不能超过50"
                },                             articleCategory: {
                    required: "请输入所属栏目",
                    maxlength:"所属栏目字符长度不能超过50"
                },                             title: {
                    required: "请输入标题",
                    maxlength:"标题字符长度不能超过200"
                },                             mediType: {
                    required: "请输入媒体类型",
                    maxlength:"媒体类型字符长度不能超过20"
                }                                 }
    });
     /*监听表单提交*/
    $('#fm-add').ajaxForm({
        beforeSubmit: function (formData, jqForm, options) {
            var params = {};
            $.each(formData, function (n, obj) {
                params[obj.name] = obj.value;
            });
            $.extend(params, {
                time: new Date()
            });
            console.log(params);
            save(params);
            return false;
        }
    });
}
/*保存表单**/
function save(params) {
    $.extend(params, {
    });
    startLoad();
    $.ajax({
        url: contextPath + "/article/insertArticle",
        type: "post",
        async: false,
        data: {
            jsons: JSON.stringify(params)
        },
        success: function (result) {
            stopLoad();
			alert(result.errorMessage);
            if (result.status == 0) {
                window.location.href ='../index.jsp';
            }
        },
        error: function () {
            alert("对不起出错了！");
        }
    });
}