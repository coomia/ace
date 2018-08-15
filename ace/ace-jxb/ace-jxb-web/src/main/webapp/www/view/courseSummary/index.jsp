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
					<div class="row commen_item">
						<div class="row">
							<div class="col-xs-3 col-md-3">
								<img src="img/headImg.png" class="user_head" />
							</div>
							<div class="col-xs-5 col-md-5">
								<p class="username">半分</p>
								<p class="comments_time">2018-04-03</p>
							</div>
							<div class="col-xs-4 col-md-4">
								<img src="img/comment_level.png" class="comment_level" />
								<img src="img/comment_level.png" class="comment_level" />
								<img src="img/comment_level.png" class="comment_level" />
								<img src="img/comment_level.png" class="comment_level" />
								<img src="img/comment_level.png" class="comment_level" />
							</div>
						</div>
						<div class="row">
							<div class="col-xs-3 col-md-3"></div>
							<div class="col-xs-9 col-md-9">
								<p class="commonts_content">刚刚看完的这个视频，多少了解了自闭症的信息，比如自闭症和疫苗没有关系，自闭症和遗传基因有关系，而且还有别的原因，但是现在没有太好的方法等等。</p>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-3 col-md-3"></div>
							<div class="col-xs-9 col-md-9">
								<span class="course_name">01 如何更好地了解孩子？</span>
							</div>
						</div>
					</div>
					<div class="row commen_item">
						<div class="row">
							<div class="col-xs-3 col-md-3">
								<img src="img/headImg.png" class="user_head" />
							</div>
							<div class="col-xs-5 col-md-5">
								<p class="username">半分</p>
								<p class="comments_time">2018-04-03</p>
							</div>
							<div class="col-xs-4 col-md-4">
								<img src="img/comment_level.png" class="comment_level" />
								<img src="img/comment_level.png" class="comment_level" />
								<img src="img/comment_level.png" class="comment_level" />
								<img src="img/comment_level.png" class="comment_level" />
								<img src="img/comment_level.png" class="comment_level" />
							</div>
						</div>
						<div class="row">
							<div class="col-xs-3 col-md-3"></div>
							<div class="col-xs-9 col-md-9">
								<p class="commonts_content">刚刚看完的这个视频，多少了解了自闭症的信息，比如自闭症和疫苗没有关系，自闭症和遗传基因有关系，而且还有别的原因，但是现在没有太好的方法等等。</p>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-3 col-md-3"></div>
							<div class="col-xs-9 col-md-9">
								<span class="course_name">01 如何更好地了解孩子？</span>
							</div>
						</div>
					</div>
					<div class="row commen_item">
						<div class="row">
							<div class="col-xs-3 col-md-3">
								<img src="img/headImg.png" class="user_head" />
							</div>
							<div class="col-xs-5 col-md-5">
								<p class="username">半分</p>
								<p class="comments_time">2018-04-03</p>
							</div>
							<div class="col-xs-4 col-md-4">
								<img src="img/comment_level.png" class="comment_level" />
								<img src="img/comment_level.png" class="comment_level" />
								<img src="img/comment_level.png" class="comment_level" />
								<img src="img/comment_level.png" class="comment_level" />
								<img src="img/comment_level.png" class="comment_level" />
							</div>
						</div>
						<div class="row">
							<div class="col-xs-3 col-md-3"></div>
							<div class="col-xs-9 col-md-9">
								<p class="commonts_content">刚刚看完的这个视频，多少了解了自闭症的信息，比如自闭症和疫苗没有关系，自闭症和遗传基因有关系，而且还有别的原因，但是现在没有太好的方法等等。</p>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-3 col-md-3"></div>
							<div class="col-xs-9 col-md-9">
								<span class="course_name">01 如何更好地了解孩子？</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
			<img src="img/icon-play.png" class="play" style="padding-left: 0.253333rem;padding-top: 0.493333rem;" />
			<span class="span_01">试听</span>
			<span class="span_02">共计</span>
			<span class="span_03" id="totalCost"></span>
			<button class="buy">立即购买</button>
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
                <div class="col-xs-9 col-md-9"><span class="tags">小学·社会交往</span></div>
            <div class="col-xs-3 col-md-3"><span class="popular">\${data.demandNum}人听课</span></div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-12 payfor">
                <span class="money">¥ \${data.cost}</span>
                <span class="history_money">¥299</span>
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
                <p class="teacher_content">父母、心理学爱好者</p>
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
						<span class="try">
							{@if item.free == '0'}
							 试听
							{@/if}
						</span>
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
	</body>

</html>