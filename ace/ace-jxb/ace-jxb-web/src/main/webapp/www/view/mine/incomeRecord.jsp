<%@page language="java" contentType="text/html; charset=utf-8"
        pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
    <meta name="format-detection" content="telephone=no"/>
    <title>提现记录</title>
    <link rel="stylesheet" type="text/css" href="css/incomeRecord.css"/>
    <link rel="stylesheet" type="text/css" href="css/earnings.css"/>
    <link rel="stylesheet" type="text/css" href="css/Mdate.css"/>
    <jsp:include page="../../../dynamic/common/base.jsp"/>
    <script type="text/javascript" src="../../common/js/loader.js"></script>
    <script type="text/javascript" src="js/iScroll.js"></script>
    <script type="text/javascript" src="js/Mdate.js"></script>
    <script type="text/javascript" src="js/incomeRecord.js"></script>
</head>
<body>
<div class="month">
    <input type="text" id="dateSelectorOne" placeholder="选择年月" value="2015-12-21" data-year="2015" data-month="12">
</div>
<div class="list">
    <div class="top">
        <span class="name">收益提现</span>
        <span class="money_style">+<span>200.00 </span></span>
    </div>
    <div class="info">
        <span class="time">2018-04-07  17:30:15 </span>
        <span class="stutas">提现成功</span>
    </div>
</div>

<div class="list">
    <div class="top">
        <span class="name">收益提现</span>
        <span class="money_style">+<span>200.00 </span></span>
    </div>
    <div class="info">
        <span class="time">2018-04-07  17:30:15 </span>
        <span class="stutas stutas1">待审核</span>
    </div>
</div>

<div class="list">
    <div class="top">
        <span class="name">收益提现</span>
        <span class="money_style">+<span>200.00 </span></span>
    </div>
    <div class="info">
        <span class="time">2018-04-07  17:30:15 </span>
        <span class="stutas stutas2">提现失败</span>
    </div>
</div>

</body>
</html>