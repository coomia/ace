function App() {
    console.log("=============================App Start==============================");

    $('.retrie dt a').click(function(){
        var $t=$(this);
        if($t.hasClass('up')){
            $(".retrie dt a").removeClass('up');
            $('.downlist').hide();
            $(".lode").hide();
        }else{
            $(".retrie dt a").removeClass('up');
            $('.downlist').hide();
            $t.addClass('up');
            $('.downlist').eq($(".retrie dt a").index($(this)[0])).show();
            $(".lode").show();
        }
    });
    $(".area ul li a:contains('"+$('#area').text()+"')").addClass('selected');
    $(".wage ul li a:contains('"+$('#wage').text()+"')").addClass('selected');

    consultantList();
};

function screen01(obj){
	$(obj).addClass("checked");
	$(obj).siblings().removeClass("checked");
	$("#area").text($(obj).children().text());
	$('.downlist').hide();
	$(".lode").hide();
	var tag = $(obj).text();
	if(tag.trim() == "不限"){
	    tag = null;
    }
	var data = {
	    "tags": tag
    }
    consultantListByparam(data)

}

function screen02(obj){
	$(obj).addClass("checked");
	$(obj).siblings().removeClass("checked");
	$("#wage").text($(obj).children().text());
	$('.downlist').hide();
	$(".lode").hide();
}
function screen03(obj){
	$(obj).addClass("checked");
	$(obj).siblings().removeClass("checked");
	$("#sort").text($(obj).children().text());
	$('.downlist').hide();
	$(".lode").hide();
}

function consultantList(){
    $.ajax({
        url: contextPath+ "/www/consult/getCounselorList",
        type:"post",
        async:false,
        data:{
           start: 0, limit: 999
        },
        success:function(result){
            if(result.status == 0) {
                var sonsultant = document.getElementById('consultant').innerHTML;
                var html = juicer(sonsultant, {
                    data: result.data.rows
                });
                $("#list").append(html);
            }else {
                alert(result.info);
                return;
            }
        },
        error:function(){
            alert("系统服务内部异常！");
        }
    });
}

function consultantListByparam(data){
    $.ajax({
        url: contextPath+ "/www/consult/getCounselorList",
        type:"post",
        async:false,
        data:{
            tags: data.tags,
            start: 0,
            limit: 999
        },
        success:function(result){
            if(result.status == 0) {
                var sonsultant = document.getElementById('consultant').innerHTML;
                var html = juicer(sonsultant, {
                    data: result.data.rows
                });
                $("#list").empty();
                $("#list").append(html);
            }else {
                alert(result.info);
                return;
            }
        },
        error:function(){
            alert("系统服务内部异常！");
        }
    });
}

function showInfo(id){
    window.location.href = contextPath + '/www/view/counselor/index.jsp?id='+id;
}

function createOrder(id){
    window.location.href = contextPath + '/www/view/order/index.jsp?id='+id;
}