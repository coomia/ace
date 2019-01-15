<%@page language="java" contentType="text/html; charset=utf-8"
		pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
		<title>中共常德市委党校</title>
		<jsp:include page="../../common/common.jsp"/>
		<link rel="stylesheet" type="text/css" href="css/index.css"/>
	</head>
	<body>
		<div class="index">
			<div class="box br" id="userInfo">

			</div>
			<div class="box">
				<div class="today">今日课程</div>
				<div class="calendar" onclick="weekCourse();">
					<div class="icon-calendar"><img src="img/icon-calendar.png" /></div>
					<div class="calendar-title"><span>周课表</span></div>
				</div>
			</div>
			<div id="todayCourse">

			</div>
			<div class="notice">
				<div class="notice-icon"><img src="img/icon-message.png"/></div>
				<div class="notice-title">2019年党校第一批开课时间已确定，请大家安排好自己的时间</div>
				<div class="more" onclick="moreNotice();"><span>全部</span><img src="img/icon_select.png"/></div>
			</div>
		</div>
		<div class="menu">
			<div class="row">
				<div class="item mr">
					<div class="item-left">
						<img src="img/icon-test.png" class="menu-icon"/>
					</div>
					<div class="item-right">
						<div class="menu-title">教学评测</div>
						<div class="menu-content">共有4个待评</div>
					</div>
				</div>
				<div class="item" onclick="toMailList();">
					<div class="item-left">
						<img src="img/icon-mail.png" class="menu-icon"/>
					</div>
					<div class="item-right">
						<div class="menu-title">通讯录</div>
						<div class="menu-content">共30人</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="item mr" onclick="attendtion();">
					<div class="item-left">
						<img src="img/icon-appear.png" class="menu-icon"/>
					</div>
					<div class="item-right">
						<div class="menu-title">考勤信息</div>
						<div class="menu-content">共10个记录</div>
					</div>
				</div>
				<div class="item" onclick="toClassFiles();">
					<div class="item-left">
						<img src="img/icon-files.png" class="menu-icon"/>
					</div>
					<div class="item-right">
						<div class="menu-title">班级文件</div>
						<div class="menu-content">共6个文件</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="item mr" onclick="classNotice();">
					<div class="item-left">
						<img src="img/icon-notice.png" class="menu-icon"/>
					</div>
					<div class="item-right">
						<div class="menu-title">学员须知</div>
						<div class="menu-content">已绑定班级</div>
					</div>
				</div>
			</div>
		</div>

		<script id="course-tpl" type="text/template">
			{@each data as item, index}
			{@if item.courseIndex == am}
			<div class="course morning">
				<div class="course-left">上午</div>
				<div class="course-right">
					<span>\${item.course.name}</span>
					<span>(主讲:\${item.teacher.name}）</span>
				</div>
			</div>
			{@else}
			<div class="course afternoon">
				<div class="course-left">下午</div>
				<div class="course-right">
					<div class="inner-middle">
						<span>\${item.course.name}</span>
						<span>(主讲:\${item.teacher.name}）</span>
					</div>
				</div>
			</div>
			{@/if}
			{@/each}
		</script>

		<script id="userinfo-tpl" type="text/template">
			<div class="header" onclick="showPersonInfo();"><img src="img/default_header.png"/></div>
			<div class="username" onclick="showPersonInfo();">
				{@if data.regType == 'student'}
				<span>\${data.student.name}</span>
                {@else}
                <span>\${data.teacher.name}</span>
                {@/if}
			</div>
			<div class="show-card" onclick="toConsumption();">
				<span>查询一卡通</span>
				<img src="img/icon_select.png" />
			</div>
		</script>

		<script type="text/javascript" src="${pageContext.request.contextPath}/www/common/js/jquery-3.2.1.min.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/www/common/js/init-rem.js"></script>
		<script type="text/javascript" src="${portalPath}/content/common/juicer/juicer-min.js"></script>
		<script type="text/javascript" src="js/index.js"></script>
	</body>
</html>
