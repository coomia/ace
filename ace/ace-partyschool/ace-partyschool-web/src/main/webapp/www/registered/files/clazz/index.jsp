<%@page language="java" contentType="text/html; charset=utf-8"
		pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
		<title>班级文件</title>
		<jsp:include page="../../../common/common.jsp"/>
		<link rel="stylesheet" type="text/css" href="css/index.css"/>
	</head>
	<body>
		<div class="index">
			<div class="search">
				<input class="serach-input" type="text" id="search" name="keyWord" onfocus="focusInput();" onblur="blurInput();"/>
				<img id="search-icon" src="img/icon_search.png" class="icon-search" onclick="searchIconClick();"/>
				<span id="search-title" class="search-title" onclick="searchIconClick();">搜索</span>
			</div>
			<div class="list" id="fileList">

			</div>
		</div>
		
		<img src="img/icon-upload.png" class="upload"/>


        <!--搜索结果层-->
      <%--  <div class="modal" id="modalList" style="display: none;">
            <div class="modal-index">
                <div class="list" id="fileParamList">

                </div>
            </div>
        </div>--%>

		<script id="list-tpl" type="text/template">
			{@each data as item,index}
			<div class="item">
				<div class="file-type">
					{@if fileType(item.url)=='excel'}
					<img src="img/icon-excel.png" class="file-type-img" />
					{@else if fileType(item.url)=='word'}
					<img src="img/icon_word.png" class="file-type-img" />
					{@else if fileType(item.url)=='ppt'}
					<img src="img/icon_ppt.png" class="file-type-img" />
					{@else if fileType(item.url)=='img'}
					<img src="img/icon-jpg.png" class="file-type-img" />
					{@else if fileType(item.url)=='pdf'}
					<img src="img/icon-pdf.png" class="file-type-img" />
					{@else if fileType(item.url)=='text'}
					<img src="img/icon-text.png" class="file-type-img" />
					{@/if}
				</div>
				<div class="file-detail">
					<div class="file-title">\${item.title}</div>
					<div class="file-footer">
						<span>\${item.pushDate}</span>
						<span>来自</span>
						{@if item.student}
						<span>\${item.student.name}</span>
						{@else}
						<span>\${item.teacher.name}</span>
						{@/if}
					</div>
				</div>
			</div>
			{@/each}
		</script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/www/common/js/jquery-3.2.1.min.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/www/common/js/init-rem.js"></script>
		<script type="text/javascript" src="${portalPath}/content/common/juicer/juicer-min.js"></script>
		<script type="text/javascript" src="js/index.js"></script>
	</body>
</html>
