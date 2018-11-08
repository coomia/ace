<%--
  Created by IntelliJ IDEA.
  User: HuaCai008
  Date: 2018/11/7
  Time: 15:00
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<script type="text/javascript">
    var contextPath = '${pageContext.request.contextPath}';
    var portalPath = '${portalPath}';
    var version = '${cfg.version}';
    var fastdfs_server = '${cfg.fastdfs_server}';
    var activeSyId = '${SESSION_USERPROP_KEY.activeSyId}';
    var portalType = '${SESSION_USERPROP_KEY.cfg.portalType}';
    var default_page_list = [${cfg.default_page_list}];
</script>
<!DOCTYPE html>
<html lang="cn">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <title>汉王高拍仪</title>
    <%--获取页面参数脚本--%>
    <script>
        /**
         * 获取指定的URL参数值
         * 参数：paramName URL参数
         * 调用方法:getParam("name")
         * 返回值:tyler
         */
        function getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }
    </script>
</head>
<style>
    .hide {
        display: none;
    }
</style>

<body onload="initCtrl()">
<object classid="clsid:6F47932B-3873-49B4-829B-04AF831A92B1"
        id=hwcam CODEBASE="*.cab#version=0,0,0,0" width=640 height=480></object>
<object classid="clsid:AF7D4101-FADA-48BE-B240-F05F877FC95A"
        id=hwthumb CODEBASE="*.cab#version=0,0,0,0" width=200 height=480></object>
<script LANGUAGE=JavaScript event="AutoCaptureEvent()" for=hwcam>capture();</script>
<script LANGUAGE=JavaScript event="TimerCaptureEvent()" for=hwcam>capture();</script>

<BR><br>
设备列表：<select id="CamList" style="width: 90px" name="curCam" onchange="changedev()"></select>
分辨率：<select id="resList" style="width: 90px" name="curRes" onchange="changeres()"></select>
颜色：<select id="clrList" style="width: 90px" name="curClr" onchange="changeclr()"></select>
裁切方式：<select id="cutMode" style="width: 90px" name="curCut" onchange="changecutmode()"></select>
颜色空间：<select id="clrSpace" style="width: 90px" name="curClrSpace" onchange="changeclrspace()"></select>
拍照尺寸：<select id="scanSize" style="width: 90px" name="curScanSize" onchange="changescansize()"></select>
<div class="hide">
    <input type=button value="删除" onclick="deletescansize()"/>
    麦克风：<select class="hide" id="audioList" style="width: 90px" name="curAudio" onchange="changeaudio()"></select>
    <input id="wmbtn1" type="checkbox" value="" onclick="showwatermark(this)"/>水印
    <input class="hide" id="wmbtn2" type="checkbox" value="" onclick="setexposure(this)"/>自动曝光
    <input class="hide" id="wmbtn3" type="checkbox" value="" onclick="setcapture(this)"/>合成拍照
    <input class="hide" id="wmbtn4" type="checkbox" value="" onclick="setupscansize(this)"/>启用扫描尺寸
</div>

<br><br>
<input type=button value="开始预览" onclick="startpreview()"/>
<input type=button value="停止预览" onclick="stoppreview()"/>
<input type=button value="拍照预览" onclick="capture()"/>
<input type=button value="拍照上传" onclick="capturebase64()"/>
<input type=button value="左转" onclick="rotleft()"/>
<input type=button value="右转" onclick="rotright()"/>
<input type=button value="放大" onclick="zoomin()"/>
<input type=button value="缩小" onclick="zoomout()"/>
<%--<input type=button value="汉王标识" onclick="hwmark()"/>--%>
<%--<input type=button value="视频属性" onclick="videoprop()"/>--%>
<%--<input type=button value="图片上传" onclick="httpupload()"/>--%>
<%--<input type=button value="条码识别" onclick="recogbarcode()"/>--%>
<%--<input type=button value="创建PDF" onclick="createpdf()"/>--%>
<%--<input type=button value="Base64转换" onclick="convert2base64()"/>--%>
<%--<input type=button id=rec value="开始录像" onclick="startrecord()"/>--%>
<%--<input type=button value="获取主副头索引" onclick="getcamindex()"/>--%>
<%--<input type=button id=tmcap value="开始定时拍照" onclick="timerstart()"/>--%>
<%--<input type=button id=autocap value="开始自动拍照" onclick="autocapstart()"/>--%>
<%--<input type=button id=pip value="开启画中画" onclick="startpip()"/>--%>
<%--<input type=button value="设置压缩比" onclick="setjpgquality()"/>--%>
<%--<input type=button value="设置DPI" onclick="setdpi()"/>--%>
<%--<input type=button value="ftp上传" onclick="ftpupload()"/>--%>
</body>

<div class="hide">
    <br><br>
    <textarea id="txt" cols="100" rows="50"></textarea>
</div>

<script src="${portalPath}/content/common/assets/global/plugins/jquery.min.js?v=${cfg.version}"
        type="text/javascript"></script>
<script src="js/capture.js"></script>
</html>
