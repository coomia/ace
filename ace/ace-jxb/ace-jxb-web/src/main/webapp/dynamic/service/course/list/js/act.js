var loading = {};
var primaryId = null;
var videoUrl = null;
var params={limit:5};
function loadlocal() {
    var urls = [];
    urls.push({path: portalPath, url: '/content/common/simditor/scripts/module.js', type: 'js'});
    urls.push({path: portalPath, url: '/content/common/simditor/scripts/hotkeys.js', type: 'js'});
    urls.push({path: portalPath, url: '/content/common/simditor/scripts/uploader.js', type: 'js'});
    urls.push({path: portalPath, url: '/content/common/simditor/scripts/simditor.js', type: 'js'});
    urls.push({path: portalPath, url: '/content/common/plupload/plupload.full.min.js', type: 'js'});
    urls.push({path: portalPath, url: '/content/common/jcrop/jquery.Jcrop.min.js', type: 'js'});
    urls.push({path: contextPath, url: '/content/common/js/jqPaginator.js', type: 'js'});
    for (var i = 0; i < urls.length; i++) {
        loader(urls[i]);
    }
}

function App() {
    console.log("=============================App Start==============================");
    loadlocal();
}

window.onload = function(){
    primaryId =urlParams.id;
    initPartList();
}

function initPage(partId) {
    $.jqPaginator('#pagination1', {
        totalCounts: 20,
        pageSize: 10,
        visiblePages: 20,
        currentPage: 1,
        prev: '<li class="prev"><a href="javascript:;">上一页</a></li>',
        next: '<li class="next"><a href="javascript:;">下一页</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (num, type) {
			params['start']=(num-1)*params.limit;
            params['initType']=type;
			params['partId']=partId;
            getPageList();
        }
    });
}
function initPartList(){
    var data = findPartList();
    try{
        renderPage('chapters', data.rows, 'chapterTemp');
        initPage(data.rows[0].id);
    }catch(e){}
}
function findPartList(){
    var resultData = null;
    $.ajax({
        url: contextPath + "/coursePart/findCoursePartList",
        type:"post",
        async:false,
        data:{
            page: 1,
            limit: 999,
            courseId: primaryId,
            orderBy: "createDate",
            sord: "asc"
        },
        success:function(result){
            if(result.status == 0) {
                console.log(result);
                resultData = result;
            }else {
                alert(result.errorMessage);
            }
        },
        error:function(){
            alert("系统服务内部异常！");
        }
    });
    return resultData;
}
function getPageList(){
    var url = contextPath + "/courseSource/findCourseSourceList";
	startLoad();
    $.getJSON(url, params, function (result) {
        stopLoad();
        if (result.status == 0) {
            if (params.initType == "init") {
                $('#pagination1').jqPaginator('option', {
                    totalCounts: result.total
                });
            }
            renderPage("courseList", result.rows, "courseTemp");
        }
    })
}

function renderPage(IDom, data, tempId) {
    var navitem = document.getElementById(tempId).innerHTML;
    var html = juicer(navitem, {
        data: data,
    });
    $("#" + IDom).html(html);
}

function changeChapter(id){
    initPage(id);
}

function add(){
    var partId = $("#chapters .active").attr("datattr");
    window.location.href = contextPath+ '/dynamic/service/course/list/add/index.jsp?courseId='+primaryId+'&partId='+partId;
}

//============================章节管理开始=====================================//

function addChapter(){
    var partName = $("input[name='partName']").val();
    if(partName == '' || partName == undefined){
        alert("章节名称不能为空！");
        return;
    }
    startLoad();
    $.ajax({
        url: contextPath + "/coursePart/insertCoursePart",
        type:"post",
        async:false,
        data:{jsons:JSON.stringify({
                courseId: primaryId,
                name:partName
            })
        },
        success:function(result){
            stopLoad();
            alert(result.errorMessage);
            if(result.status == 0) {
                $("#myModal").modal('hide');
                initPartList();
            }
        },
        error:function(){
            stopLoad();
            alert("系统服务内部异常！");
        }
    });
}
function updateChapter(partId){
    var name = $("#chapter-"+partId+" input[name='chapterName']").val();
    if(name == '' || name == undefined){
        alert("章节名称不能为空！");
        return;
    }
     startLoad();
    $.ajax({
        url: contextPath + "/coursePart/updateCoursePart",
        type:"post",
        async:false,
        data:{
            jsons:JSON.stringify({
                id: partId,
                courseId: primaryId,
                name: name
            })
        },
        success:function(result){
            alert(result.errorMessage);
            stopLoad();
            if(result.status == 0) {
                $("#chapterBox").modal('hide');
                initPartList();
            }
        },
        error:function(){
            stopLoad();
            alert("系统服务内部异常！");
        }
    });
}

function deleteChapter(partId){
    startLoad();
    $.ajax({
        url: contextPath + "/coursePart/deleteCoursePartByCoursePartId",
        type:"post",
        async:false,
        data:{
            jsons:JSON.stringify({
                id: partId
            })
        },
        success:function(result){
            alert(result.errorMessage);
            stopLoad();
            if(result.status == 0) {
                findPartList();
            }
        },
        error:function(){
            stopLoad();
            alert("系统服务内部异常！");
        }
    });
}

//============================章节管理结束=====================================//

//============================课程管理开始=====================================//
function deletePartCourse(id,name){
	if(confirm("确定要删除"+name+"吗？")){
		startLoad();
		$.ajax({
			url: contextPath + "/courseSource/deleteCourseSourceByCourseSourceId",
			type:"post",
			async:false,
			data:{jsons:JSON.stringify({
					id: id
				})
			},
			success:function(result){
				stopLoad();
				alert(result.errorMessage);
				if(result.status == 0) {
					getPageList();
				}
			},
			error:function(){
				stopLoad();
				alert("系统服务内部异常！");
			}
		});
	}
	
}
//============================课程管理结束=====================================//