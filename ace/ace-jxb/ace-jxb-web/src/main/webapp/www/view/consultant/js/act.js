function App() {
    console.log("=============================App Start==============================");

    $(document).not($(".selectbox")).click(function(){
        $(".citylist,.citylist2").slideUp();
    })
    $(".selectbox").click(function(event){
        event.stopPropagation();
        //courseList(level);
    });
    $(".selemenu").click(function(){
        $(this).next().slideToggle();
        $(this).parents().siblings().find(".citylist,.citylist2").slideUp();
        //courseList(level);
    })
    $(".menuList1 li").click(function(){
        if($(this).attr('class') != undefined && $(this).attr('class') != ''){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        }
        screen();
        $(".citylist1").slideUp();
    });
    $(".menuList2 li").click(function(){
        $(".menuList2 li").removeClass("active")
        $(this).addClass("active");
        screen();
        $(".citylist2").slideUp();
    });
    $(".menuList3 li").click(function(){
        $(".menuList3 li").removeClass("active")
        $(this).addClass("active");
        screen();
        $(".citylist3").slideUp();
    });

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
    consultantList();
};
function screen(){
	var tagobjs = $('.menuList1 .active');
	var tags = "";
	if(tagobjs.length>0){
        for(var i=0; i<tagobjs.length; i++){
            if(i != tagobjs.length-1){
                tags = tags + tagobjs[i].innerText +',';
            }else{
                tags += tagobjs[i].innerText;
            }
        }
    }
    var consultType = null;
    var consultTypeObj = $('.menuList2 .active');
	if(consultTypeObj[0].innerText == '电话咨询'){
        consultType = '1';
    }else if(consultTypeObj[0].innerText == '视频咨询'){
        consultType = '2';
    }else if(consultTypeObj[0].innerText == '面对面咨询'){
        consultType = '3';
    }

	var data = {
	    "tags": tags == ''?null: tags,
        "consultType":consultType
    }

    consultantListByparam(data);

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
        traditional:true,
        data:{
            tags: data.tags,
            consultType: data.consultType,
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
