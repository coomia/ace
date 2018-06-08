var user = null;
var userStatus = null;   //状态为0表示已删除，1代表非会员，2代表会员
$(function(){
    try{
        user = userProp;
    }catch(e){}

    if(user != null){
        $.ajax({
            url: "/fop/www/getUserInfo",
            type: "post",
            async: false,
            data: {},
            success: function (result) {
                if (result.status == 0) {
                    userStatus = result.data.data.status;
                } else {
                    layer.alert(result.errorMessage, {
                        icon: 5,
                        skin: 'myskin'
                    });
                }
            },
            error: function () {
                layer.alert("系统内部服务异常！", {
                    icon: 5,
                    skin: 'myskin'
                });
            }
        });
    }
});