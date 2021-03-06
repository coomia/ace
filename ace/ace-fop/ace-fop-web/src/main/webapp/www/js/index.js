var ngControllerName = "angularjsCtrl";
var ngAppName = "angularjsApp";
var index = 0;
var brandIndex =1 ;
var app =angular.module(ngAppName, []);

app.controller(ngControllerName,function($scope) {
    /**
     * 查询公告栏信息
     */
    $scope.shares = shareJson.slice(0,10);
    $.ajax({
        url: "/fop/www/homepageNoticeList",
        type: "post",
        async: false,
        data: {},
        success: function (result) {
            if (result.status == 0) {
                $scope.notice_slices = result.data.top1;
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            } else {
                layer.alert(result.errorMessage, {
                    icon: 5,
                    skin: 'myskin'
                });
            }
        },
        error: function () {
            layer.alert("系统服务内部异常！", {
                icon: 5,
                skin: 'myskin'
            });
        }
    });

    $.ajax({
        url: "/fop/www/homepageNoticeList",
        type: "post",
        async: false,
        data: {noticeType: "1"},
        success: function (result) {
            if (result.status == 0) {
                $scope.news_list = result.data.top0;
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            } else {
                layer.alert(result.errorMessage, {
                    icon: 5,
                    skin: 'myskin'
                });
            }
        },
        error: function () {
            layer.alert("系统服务内部异常！", {
                icon: 5,
                skin: 'myskin'
            });
        }
    });
    /**
     *  查询品牌推广信息
     */
    $.ajax({
        url: "/fop/www/findInformationServiceListDo",
        type: "post",
        async: false,
        data: {modules : "6", page: brandIndex, limit: 4},  //首页只展示4条信息
        success: function (result) {
            if (result.status == 0) {
                $scope.bands = result.data.list;
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            } else {
                layer.alert(result.errorMessage, {
                    icon: 5,
                    skin: 'myskin'
                });
            }
        },
        error: function () {
            layer.alert("系统服务内部异常！", {
                icon: 5,
                skin: 'myskin'
            });
        }
    });
   /* var i = 0, page = 4;
    setInterval(function(){
        var arr = $scope.brandHover();
        if(i <= page-4 && page <arr.length){
            i ++;
            page ++
            $scope.bands = arr.slice(i,page);
            if (!$scope.$$phase) {
                $scope.$apply();
            }

        }else{
            i--;
            page --;
            $scope.bands = arr.slice(i,page);
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        }

    },2000);
*/


    $scope.next = function(){
        index = index + 10;
        if(index <30){
            $scope.shares = shareJson.slice(index, index+10);
        }else{
            index = index - 10;
        }
    }
    $scope.pre = function(){
        index = index -10;
        if(index >= 0){
            $scope.shares = shareJson.slice(index, index+10);
        }else{
            index = index +10;
        }
    }

    $scope.showBrand = function(index){
        var primaryId = $scope.bands[index].id;
        console.log(primaryId);
        window.open('html/band/band_info.html?id='+primaryId);
    }

    $scope.showInfo = function(index){
        var primaryId = $scope.news_list[index].id;
        var noticeType = $scope.news_list[index].noticeType;
        console.log(primaryId);
        window.open('html/information/information_info.html?id='+primaryId);
    }
    $scope.showBannerInfo = function(index){
        var primaryId = $scope.notice_slices[index].id;
        console.log(primaryId);
        window.open('html/information/information_info.html?id='+primaryId);
    }

    var moreType = "1";
    $scope.changeNews = function(id){
        var type = null;
        if(id == 'news'){
            type = "1";
            $("#news_span").removeClass("news_unactive").addClass("news_active");
            $("#dynamics_span").removeClass("news_active").addClass("news_unactive");
            $("#commerce_span").removeClass("news_active").addClass("news_unactive");
            moreType = "1";
        }
        if(id == 'dynamics'){
            type = "2";
            $("#dynamics_span").removeClass("news_unactive").addClass("news_active");
            $("#news_span").removeClass("news_active").addClass("news_unactive");
            $("#commerce_span").removeClass("news_active").addClass("news_unactive");
            moreType = "2";
        }
        if(id == 'commerce'){
            type = "3";
            $("#commerce_span").removeClass("news_unactive").addClass("news_active");
            $("#dynamics_span").removeClass("news_active").addClass("news_unactive");
            $("#news_span").removeClass("news_active").addClass("news_unactive");
            moreType = "3";
        }
        $("#"+id).removeClass("undis").addClass("dis");
        $("#"+id).siblings().removeClass("dis").addClass("undis");
        $.ajax({
            url: "/fop/www/homepageNoticeList",
            type: "post",
            async: false,
            data: {noticeType: type},
            success: function (result) {
                if (result.status == 0) {
                    $scope.news_list = result.data.top0;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                } else {
                    layer.alert(result.errorMessage, {
                        icon: 5,
                        skin: 'myskin'
                    });
                }
            },
            error: function () {
                layer.alert("系统服务内部异常！", {
                    icon: 5,
                    skin: 'myskin'
                });
            }
        });
    }

    $scope.moreInformation = function(){
        //html/information/information_index.html
        if(moreType == "1"){
            window.open('html/information/information_index.html');
        }else if(moreType == "2"){
            window.open('html/information/information_dynamic.html');
        }else if(moreType == "3"){
            window.open('html/information/information_commerce.html');
        }else{
            layer.alert("系统服务内部异常！", {
                icon: 5,
                skin: 'myskin'
            });
        }
    }

    $scope.brandHover = function(){
        var data = [];
        $.ajax({
            url: "/fop/www/findInformationServiceListDo",
            type: "post",
            async: false,
            data: {modules : "6", page: brandIndex, limit: 20},  //轮播20条信息
            success: function (result) {
                if (result.status == 0) {
                    data = result.data.list;
                    $scope.bands = result.data.list;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                } else {
                    layer.alert(result.errorMessage, {
                        icon: 5,
                        skin: 'myskin'
                    });
                }
            },
            error: function () {
                layer.alert("系统服务内部异常！", {
                    icon: 5,
                    skin: 'myskin'
                });
            }
        });

        return data;
    }
});

app.filter('formatDate', function() { //可以注入依赖
    return function(text) {
        return text.substring(0,10);
    }
});

