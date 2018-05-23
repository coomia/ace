var ngControllerName = "angularjsCtrl";
var ngAppName = "angularjsApp";


var app =angular.module(ngAppName, []);
app.controller(ngControllerName,function($scope) {

    /**
     * 查询公告栏信息
     */
    $.ajax({
        url: "/fop/www/homepageNoticeList",
        type: "post",
        async: false,
        data: {},
        success: function (result) {
            if (result.status == 0) {
                $scope.items = result.data.list;
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
        data: {modules : "6", page: 1, limit: 4},  //首页只展示4条信息
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
});