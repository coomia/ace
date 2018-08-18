<%@page language="java" contentType="text/html; charset=utf-8"
		pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
		<meta name="format-detection" content="telephone=no" />
		<title>课程列表</title>
		<jsp:include page="../../../dynamic/common/base.jsp" />
		<link rel="stylesheet" type="text/css" href="css/style.css" />
		<link rel="stylesheet" type="text/css" href="../common/css/nav.css" />
		<script type="text/javascript" src="../../common/js/loader.js"></script>
		<script type="text/javascript" src="js/act.js"></script>
	</head>

	<body>
		<div class="mainContainer">
			<div class="row banner" id="banner">

			</div>
			<div class="row menu">
				<div class="navigation">
					<div class="news-title">
						<ul class="news-module course_nav_ul clear">
							<li class="active" onclick="hoverLi('courseDetail');">介绍</li>
							<li onclick="hoverLi('chapterContent');">目录</li>
							<li onclick="hoverLi('comments');">评价</li>
						</ul>
						<div class="news-slider"></div>
					</div>
				</div>
			</div>

			<!--课程详情-->
			<div class="indexContent">
				<div class="course_detail menuShow" id="courseDetail">

				</div>
			<!--章节信息-->
				<div class="chapter_content menuHide" id="chapterContent">

				</div>

			<!--课程评价-->
				<div class="comments menuHide" id="comments">

				</div>
			</div>
		</div>
		<div class="footer">
			<img src="img/icon-play.png" class="play" style="padding-left: 0.253333rem;padding-top: 0.493333rem;" />
			<span class="span_01">试听</span>
			<span class="span_02">共计</span>
			<span class="span_03" id="totalCost"></span>
			<button class="buy" onclick="buy();">立即购买</button>
		</div>

		<script id="bannerTemp" type="text/template">
			<img src="\${data.cover}" />
		</script>

		<script id="courseDetailTemp" type="text/template">
            <div class="row basic_info">
                <div class="row">
                <p class="basic_title">\${data.name}</p>
            </div>
            <div class="row">
                <div class="col-xs-9 col-md-9"><span class="tags">\${data.objects}·\${data.purport}</span></div>
            <div class="col-xs-3 col-md-3"><span class="popular">\${data.demandNum}人听课</span></div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-12 payfor">
					{@if data.costType == '0'}
                	<span class="money">免费</span>
					{@else if data.costType == '1'}
					<span class="money">¥ \${data.cost}</span>
					{@/if}
                <span class="history_money">\${data.primeCost}</span>
                </div>
                </div>
                </div>
                <div class="row teacher_introduce">
                <div class="row">
                <div class="col-xs-12 col-md-12 teacher_title">
                <p>讲师介绍</p>
                </div>
                </div>
                <div class="row">
                <div class="col-xs-3 col-md-3">
                <img src="img/headImg.png" class="head_img" />
                </div>
                <div class="col-xs-6 col-md-6">
                <p class="teacher_name">\${data.counselor.name}</p>
                <p class="teacher_card">\${data.counselor.certification}</p>
                </div>
                <div class="col-xs-3 col-md-3">
                <span class="follow">+关注</span>
                </div>
                </div>
                <div class="row">
                <div class="col-xs-12 col-md-12">
                <p class="teacher_content">
					\${data.counselor.profile}
            	</p>
            </div>
            </div>
            </div>
            <div class="row course_introduce">
                <div class="row">
                <div class="col-xs-12 col-md-12 teacher_title">
                <p>课程简介</p>
                </div>
                <div class="row">
                <div class="col-xs-12 col-md-12">
                <p class="teacher_content" id="courseContent">

            	</p>
            </div>
            </div>
            </div>
            </div>
            <div class="row object">
                <div class="row">
                <div class="col-xs-12 col-md-12 teacher_title">
                <p>适合谁听</p>
                </div>
                <div class="row">
                <div class="col-xs-12 col-md-12">
                <p class="teacher_content">\${data.applicationObject}</p>
            </div>
            </div>
            </div>
            </div>
		</script>

	<script id="chapterTemp"  type="text/template">
		{@each data as chapter,index}
        <div class="row chapter">
            <div class="row">
            	<h3 class="title">\${chapter.name}</h3>
        	</div>
			{@each chapter.sourceList as item, num}
			{@if item.name != '' && item.name != undefined}
        	<div class="row" onclick="playSource('\${item.id}')">
				<div class="row">
					<div class="col-xs-2 col-md-2"><img src="img/icon-play.png" class="play" /></div>
					<div class="col-xs-10 col-md-10">
						<span class="number">\${parseInt(num)+1}</span>
						<span class="chapter_title">\${item.name}</span>
        			</div>
        		</div>
				<div class="row">
					<div class="col-xs-2 col-md-2"></div>
					<div class="col-xs-10 col-md-10">
						{@if item.free == '0'}
						<span class="try">
							 试听
						</span>
						{@else}
						{@/if}
						<span class="duration">\${item.duration}分钟</span>
					</div>
				</div>
        	</div>
			{@/if}
			{@/each}
        </div>
		{@/each}
	</script>

		<script id="djchapterTemp"  type="text/template">
			<div class="row chapter" onclick="playSource('\${data.id}');">
				<div class="row">
					<h3 class="title">1.\${data.name}</h3>
				</div>
				<div class="row">
					<div class="col-xs-2 col-md-2"></div>
					<div class="col-xs-10 col-md-10">
						<span class="try">
							{@if data.free == '0'}
							 试听
							{@/if}
						</span>
						<span class="duration">\${data.duration}分钟</span>
					</div>
				</div>
			</div>
		</script>

	<script id="commentsListTemp" type="text/template">
		{@each data as item, index}
        <div class="row commen_item">
            <div class="row">
            <div class="col-xs-3 col-md-3">
            <img src="\${item.headimgurl}" class="user_head" />
            </div>
            <div class="col-xs-5 col-md-5">
            <p class="username">\${item.nickname}</p>
            <p class="comments_time">\${item.createDate}</p>
            </div>
            <div class="col-xs-4 col-md-4">
				{@if item.grade == '1'}
              		<img src="img/comment_level.png" class="comment_level" />
				{@else if item.grade == '2'}
					<img src="img/comment_level.png" class="comment_level" />
					<img src="img/comment_level.png" class="comment_level" />
				{@else if item.grade == '3'}
					<img src="img/comment_level.png" class="comment_level" />
					<img src="img/comment_level.png" class="comment_level" />
					<img src="img/comment_level.png" class="comment_level" />
				{@else if item.grade == '4'}
					<img src="img/comment_level.png" class="comment_level" />
					<img src="img/comment_level.png" class="comment_level" />
					<img src="img/comment_level.png" class="comment_level" />
					<img src="img/comment_level.png" class="comment_level" />
				{@else if item.grade == '5'}
					<img src="img/comment_level.png" class="comment_level" />
					<img src="img/comment_level.png" class="comment_level" />
					<img src="img/comment_level.png" class="comment_level" />
					<img src="img/comment_level.png" class="comment_level" />
            		<img src="img/comment_level.png" class="comment_level" />
				{@/if}
            </div>
            </div>
            <div class="row">
            <div class="col-xs-3 col-md-3"></div>
            <div class="col-xs-9 col-md-9">
            <p class="commonts_content">
				\${item.content}
			</p>
        </div>
        </div>
        <%--<div class="row">
            <div class="col-xs-3 col-md-3"></div>
            <div class="col-xs-9 col-md-9">
            <span class="course_name">01 如何更好地了解孩子？</span>
        </div>
        </div>--%>
        </div>
		{@/each}
	</script>
	</body>

</html>