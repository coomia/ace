var pageSize=10;
var ngControllerName = "angularjsCtrl";
var ngAppName = "angularjsApp";
var currentPage = 1;
var isCompany = "1";
//angularjs Controller初始化
var app =angular.module(ngAppName, []);

app.controller(ngControllerName,function($scope){
    $.ajax({
        url: "/fop/www/findCompanyList",
        type:"post",
        async:false,
        data:{page:currentPage, limit: pageSize, isCompany: isCompany},
        success:function(result){
            if(result.status == 0) {
                $scope.items = result.data.list;
                $scope.totalCount = result.data.total;
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
                var totalSize = result.data.total;
                var totalPage;
                if(totalSize % pageSize == 0){
                    totalPage = totalSize / pageSize;
                }else{
                    totalPage = totalSize / pageSize +1;
                }
                laypage({
                    cont: $("#paganation"),   //容器名
                    pages: totalPage,           //总页数
                    curr: currentPage,         //当前页
                   // skip: true,
                    skin: '#f44336',
                    groups: 5,                  //连续显示分页数
                    layout: ['count', 'prev', 'page', 'next', 'limit', 'skip'],
                    jump: function(obj, first){ //触发分页后的回调
                        if(!first){
                            currentPage = obj.curr;
                            $scope.searchList(currentPage, pageSize);
                        }
                    }

                });
            }else {
                layer.alert(result.errorMessage, {
                    icon: 5,
                    skin: 'myskin'
                });
            }
        },
        error:function(){
            layer.alert("系统内部服务异常！", {
                icon: 5,
                skin: 'myskin'
            });
        }
    });

    $scope.searchList = function(currentPage, pageSize){
        var key_word = $("#key_word").val();
        $.ajax({
            url: "/fop/www/findCompanyList",
            type:"post",
            async:false,
            data:{page:currentPage, limit: pageSize, fullName: key_word , isCompany: isCompany},
            success:$scope.responseHandle,
            error:function(){
                layer.alert("系统内部服务异常！", {
                    icon: 5,
                    skin: 'myskin'
                });
            }
        });
    }

    $scope.responseHandle = function(result){
        if(result.status == 0) {
            $scope.items = result.data.list;
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        }else {
            layer.alert(result.errorMessage, {
                icon: 5,
                skin: 'myskin'
            });
        }
    }

    $scope.search = function(){
        var key_word = $("#key_word").val();
        $.ajax({
            url: "/fop/www/findCompanyList",
            type:"post",
            async:false,
            data:{page:currentPage, limit: pageSize, isCompany: isCompany, fullName: key_word},
            success:function(result){
                if(result.status == 0) {
                    $scope.items = result.data.list;
                    $scope.totalCount = result.data.total;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                    var totalSize = result.data.total;
                    var totalPage;
                    if(totalSize % pageSize == 0){
                        totalPage = totalSize / pageSize;
                    }else{
                        totalPage = totalSize / pageSize +1;
                    }
                    laypage({
                        cont: $("#paganation"),   //容器名
                        pages: totalPage,           //总页数
                        curr: currentPage,         //当前页
                        // skip: true,
                        skin: '#f44336',
                        groups: 5,                  //连续显示分页数
                        jump: function(obj, first){ //触发分页后的回调
                            if(!first){
                                currentPage = obj.curr;
                                $scope.searchList(currentPage, pageSize);
                            }
                        }

                    });
                }else {
                    layer.alert(result.errorMessage, {
                        icon: 5,
                        skin: 'myskin'
                    });
                }
            },
            error:function(){
                layer.alert("系统内部服务异常！", {
                    icon: 5,
                    skin: 'myskin'
                });
            }
        });
    }

    $scope.preview = function(id){
        if(isCompany == "2"){
            //组织
            window.location.href='group.html?id='+id;
        }else{
            //企业和个人
            window.location.href='company.html?id='+id;
        }
    }

    $scope.changeMember = function(memberType, iDom){
        var key_word = $("#key_word").val();
        $("#"+iDom).addClass("typeActive");
        $("#"+iDom).siblings().removeClass("typeActive");
        isCompany = memberType;
        $.ajax({
            url: "/fop/www/findCompanyList",
            type:"post",
            async:false,
            data:{page:currentPage, limit: pageSize, isCompany: memberType, fullName: key_word},
            success:function(result){
                if(result.status == 0) {
                    $scope.items = result.data.list;
                    $scope.totalCount = result.data.total;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                    var totalSize = result.data.total;
                    var totalPage;
                    if(totalSize % pageSize == 0){
                        totalPage = totalSize / pageSize;
                    }else{
                        totalPage = totalSize / pageSize +1;
                    }
                    laypage({
                        cont: $("#paganation"),   //容器名
                        pages: totalPage,           //总页数
                        curr: currentPage,         //当前页
                        // skip: true,
                        skin: '#f44336',
                        groups: 5,                  //连续显示分页数
                        jump: function(obj, first){ //触发分页后的回调
                            if(!first){
                                currentPage = obj.curr;
                                $scope.searchList(currentPage, pageSize);
                            }
                        }

                    });
                }else {
                    layer.alert(result.errorMessage, {
                        icon: 5,
                        skin: 'myskin'
                    });
                }
            },
            error:function(){
                layer.alert("系统内部服务异常！", {
                    icon: 5,
                    skin: 'myskin'
                });
            }
        });
    }
});