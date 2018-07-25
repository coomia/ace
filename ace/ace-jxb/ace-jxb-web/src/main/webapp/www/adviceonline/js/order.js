var index = null;
function App() {
    console.log("=============================App Start==============================");
    loader({
        path: contextPath,
        url: '/www/common/js/layer.mobile-v2.0/layer_mobile/need/layer.css',
        type: 'css'
    });
    loader({
        path: contextPath,
        url: '/www/adviceonline/css/order.css',
        type: 'css'
    });
    loader({
        path: contextPath,
        url: '/www/common/js/layer.mobile-v2.0/layer_mobile/layer.js',
        type: 'js'
    });
}
window.onload = function(){
    index = layer.open({
        type: 1,
        content: $("#notes").html(),
        shadeClose: false,
    });

    $("#read").click(function(){
        var content = $("#read").attr("src");
        if(content.indexOf("yes") > 0){
            $("#read").attr('src','img/no.png');
        }else {
            $("#read").attr('src','img/yes.png');
        }
    });
}


function closeTips() {
	layer.close(index);
}

function add(){
	var num = parseInt($("#num").text());
	num ++;
	$("#num").text(num);
}
function reduce(){
	var num = parseInt($("#num").text());
	if(num > 1){
		num --
	}else{
		alert("次数至少是1");
	}
	$("#num").text(num);
}
function changeSex(obj){
	$(obj).removeClass("unchecked").addClass("checked");
	$(obj).siblings().removeClass("checked").addClass("unchecked");
}

function changeType(obj){
	$(obj).removeClass("unactive").addClass("active");
	$(obj).parent().siblings().children().removeClass("active").addClass("unactive");
}
