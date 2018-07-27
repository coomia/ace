<%@page language="java" contentType="text/html; charset=utf-8"
		pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
		<meta name="format-detection" content="telephone=no" />
		<title>我的账户</title>
		<jsp:include page="../../../dynamic/common/base.jsp" />
		<link rel="stylesheet" type="text/css" href="css/mycount.css"/>
		<script type="text/javascript" src="../../common/js/loader.js"></script>
	</head>
	<body>
		<div class="box">
			<div class="row banner">
				<p class="banner_title">总资产（元）</p>
				<p class="banner_content">0.00</p>
				<span class="putcash">提现</span>
			</div>
		</div>
		<div class="box">
			<div class="row menu">
				<div class="col-xs-7 col-sm-7"><p class="menu_title">本月收益</p></div>
				<div class="col-xs-5 col-sm-5" style="text-align: right;">
					<span class="income">0.00</span><img class="next" src="img/next.png"/>
				</div>
			</div>
			<div class="row menu">
				<div class="col-xs-7 col-sm-7"><p class="menu_title">咨询收益</p></div>
				<div class="col-xs-5 col-sm-5" style="text-align: right;">
					<span class="income">0.00</span><img class="next" src="img/next.png"/>
				</div>
			</div>
			<div class="row menu">
				<div class="col-xs-7 col-sm-7"><p class="menu_title">课程收益</p></div>
				<div class="col-xs-5 col-sm-5" style="text-align: right;">
					<span class="income">0.00</span><img class="next" src="img/next.png"/>
				</div>
			</div>
			<div class="row menu">
				<div class="col-xs-7 col-sm-7"><p class="menu_title">分销收益</p></div>
				<div class="col-xs-5 col-sm-5" style="text-align: right;">
					<span class="income">0.00</span><img class="next" src="img/next.png"/>
				</div>
			</div>
			<div class="row menu">
				<div class="col-xs-7 col-sm-7"><p class="menu_title">打赏收益</p></div>
				<div class="col-xs-5 col-sm-5" style="text-align: right;">
					<span class="income">0.00</span><img class="next" src="img/next.png"/>
				</div>
			</div>
		</div>
	</body>
</html>
