<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <title>登录</title>
    <jsp:include page="../common/common.jsp"/>
    <script type="text/javascript" src="${pageContext.request.contextPath}/www/common/js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/login.js"></script>
</head>
<body>
<label>用户名:</label><input type="text" name="username" placeholder="请输入用户名"/><br/>
<label>密 码</label><input type="password" name="password" placeholder="请输入密码"/><br/>
<button onclick="login();">登录</button>
</body>
</html>
