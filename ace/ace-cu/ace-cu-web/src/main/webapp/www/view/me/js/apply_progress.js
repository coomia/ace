var ngControllerName = "angularjsCtrl";
var ngAppName = "angularjsApp";
var app =angular.module(ngAppName, []);

app.controller(ngControllerName,function($scope){

    var locaUrl = window.location.href;
    var url = window.location.href.substring(locaUrl.indexOf("?")+1);
    var primaryId = null;
    var paramArr = url.split("&");
    for(var i=0;i < paramArr.length;i++){
        num=paramArr[i].indexOf("=");
        if(num>0){
            name=paramArr[i].substring(0,num);
            value=paramArr[i].substr(num+1);
            if(name == "projectId"){
                primaryId = value;
            }
        }
    }

    $.ajax({
        url: "/cu/www/project/getApplyProcess",
        type:"post",
        async:false,
        data:{applyId: primaryId},
        success:function(result){
            if(result.status == 0) {
                $scope.progressList = result.data;
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }else {
                alert(result.info);
            }
        },
        error:function(){
            alert("系统服务内部异常！");
        }
    });
});