var loading = {};
var params = {limit: 10};
var orgType = null;
window.onload = function (){
    initPage();
    initEvents();
    initDetailEvents();
}
function App() {
    console.log("=============================App Start==============================");

}
/*市民行为详情初始化分页*/
function initPage() {
    $.jqPaginator('#pagination1', {
        totalCounts: 1,
        pageSize: params.limit,
        visiblePages: 10,
        currentPage: 1,
        prev: '<li class="prev"><a href="javascript:;">上一页</a></li>',
        next: '<li class="next"><a href="javascript:;">下一页</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (num, type) {
            params['start']=(num-1)*params.limit;
            params['initType']=type;
            getPageList();
        }
    });
}
/*市民行为详情条件查询*/
function t_query(){
    getPageList();
    return false;
}
/*市民行为详情加载表格数据*/
function getPageList() {
    var url = contextPath+ "/behavior/findBehaviorList";
    params['title']=$("input[name=keyword]").val();
    startLoad();
    $.getJSON(url, params, function (rst) {
        stopLoad();
        if (rst.status == 0) {
            if (params.initType == "init") {
                $('#pagination1').jqPaginator('option', {
                    totalCounts: rst.total
                });
            }
            render($("#page-list"), rst.rows, "tpl-list");
        }else{
            alert("出错了！");
            stopLoad();
        }
    })
}
/*页面渲染*/
function render(obj, data, tplId) {
    var tpl = document.getElementById(tplId).innerHTML;
    var html = juicer(tpl, {
        data: data,
    });
    $(obj).html(html);
}

function initEvents() {
    $('#modal-audit').on('show.bs.modal', function (event) {
        var relatedTarget = $(event.relatedTarget);
        var id = relatedTarget.data('id');
        orgType = relatedTarget.data('type');
        initForm(id);
    })
    $('#modal-audit .btn-primary').on('click', function () {
        $('#modal-audit form').submit();
    });
    $('#fm-audit').ajaxForm({
            beforeSubmit: function (formData, jqForm, options) {
                var params = {};
                $.each(formData, function (n, obj) {
                    params[obj.name] = obj.value;
                });
                $.extend(params, {
                    time: new Date()
                });
                console.log(params);
                audit(params);
                return false;
            }
        });


}
/*市民行为详情审核*/
function audit(params){
    startLoad();
    params.orgType = orgType;
    $.ajax({
        url: contextPath + "/behavior/audit",
        type:"post",
        async:false,
        data:params,
        success:function(rst){
            stopLoad();
            $("#modal-audit").modal('hide');
            alert(rst.errorMessage);
            if(rst.status == 0) {
                getPageList();
            }
        },
        error:function(){
            stopLoad();
            alert("对不起出错了！");
        }
    });
}

/**
 * 详情打开事件
 */
function initDetailEvents() {
    $('#modal-show').on('show.bs.modal', function (event) {
        var relatedTarget = $(event.relatedTarget);
        var id = relatedTarget.data('id');
        var modal = $(this);
        console.log("relatedTarget"+relatedTarget);
        modal.find('.table-body input[name=id]').val(id);
        findDetail(id);
    });
}

function findDetail(id){
    startLoad();
    $.ajax({
        url: contextPath + "/behavior/selectBehaviorByPrimaryKey",
        type:"post",
        async:false,
        data:{id: id},
        success:function(rst){
            if(rst.status == 0){
                stopLoad();
                render($('#content'), rst.value, 'tpl-detail');
            }else{
                alert(rst.errorMessage);
            }
        },
        error:function(){
            stopLoad();
            alert("对不起出错了！");
        }
    });
}

function initForm(id){
    startLoad();
    $.ajax({
        url: contextPath + "/behavior/selectBehaviorByPrimaryKey",
        type:"post",
        async:false,
        data:{id: id},
        success:function(rst){
            if(rst.status == 0){
                stopLoad();
                render($('#auditContent'), rst.value, 'tpl-fm');
            }else{
                alert(rst.errorMessage);
            }
        },
        error:function(){
            stopLoad();
            alert("对不起出错了！");
        }
    });
}

function setParams(key, value) {
    params[key] = value;
    getPageList();
}
