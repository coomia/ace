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
			<div class="row menu">
				<div class="col-xs-12 col-md-12" style="padding-left: 0!important;padding-right: 0!important;">
					<div class="navigation">
						<div class="news-title">
							<ul class="news-module course_nav_ul clear">
								<li class="active" onclick="courseList();">全部</li>
								<li onclick="courseList('幼儿');">幼儿</li>
								<li onclick="courseList('小学');">小学</li>
								<li onclick="courseList('初中');">初中</li>
								<li onclick="courseList('高中');">高中</li>
							</ul>
							<div class="news-slider"></div>
						</div>
					</div>
				</div>
			</div>
			<div id="courseList">

			</div>
		</div>
	</body>

<script id="courseTemp" type="text/template">
	{@each data as item, index}
	<div class="row bj" onclick="courseDetail('\${item.id}');">
		<div class="col-xs-4 col-md-4">
			<img src="\${item.cover}" class="coverImg" />
		</div>
		<div class="col-xs-8 col-md-8">
			<div class="row">
				<p class="title">\${item.name}</p>
			</div>
			<div class="row">
				<p class="content">\${item.objects} · \${item.purport}</p>
			</div>
			<div class="row">
				<div class="col-xs-7 col-md-7" style="padding: 0 !important;">
					{@if item.costType == '0'}
					<span class="free">免费</span>
					{@else if item.costType == '1'}
					<span class="charge">¥ \${item.cost}</span>
					{@/if}
				</div>
				<div class="col-xs-5 col-md-5" style="padding: 0 !important;"></div>
			</div>
		</div>
	</div>
	{@/each}
</script>
</html>