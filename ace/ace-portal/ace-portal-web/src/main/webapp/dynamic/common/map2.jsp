<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8" %>
<!DOCTYPE html>
<html lang="cn">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta charset="utf-8"/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <title>地图</title>
</head>
<link rel="stylesheet" href="https://lbs.qq.com/tool/getpoint/common.css">
<script src="https://lbs.qq.com/tool/getpoint/jquery-1.9.1.min.js"></script>
<link rel="stylesheet" href="https://lbs.qq.com/tool/getpoint/jquery-ui.min.css">
<script src="https://lbs.qq.com/tool/getpoint/jquery-ui-1.10.4.min.js"></script>
<script charset="utf-8" src="https://map.qq.com/api/js?v=2.exp"></script>
<style type="text/css">
    * {
        margin: 0px;
        padding: 0px;
    }

    #main {
        height: 553px;
        border: 1px solid #000000;
        border-top: 0px;
    }

    #tooles {
        height: 23px;
        background: #000000;
        position: relative;
        z-index: 100;
        color: white;
    }

    #cur_city, #no_value {
        height: 20px;
        position: absolute;
        top: 3px;
        left: 10px;
    }

    #cur_city .change_city {
        margin-left: 5px;
        cursor: pointer;
    }

    #level {
        margin-left: 20px;
    }

    .logo_img {
        width: 172px;
        height: 23px;
    }

    .search {
        width: 280px;
        height: 53px;
        padding-left: 10px;
        float: left;
        margin-left: 15px;
        margin-right: 30px;
    }

    .search_t {
        width: 200px;
        height: 18px;

        padding: 3px;
        margin-top: 13px;
        line-height: 20px;
    }

    .search_c {
        width: 220px;
        height: 40px;
        float: left;
    }

    .btn, .btn_active {
        width: 49px;
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        float: left;
        background: url(https://lbs.qq.com/tool/getpoint/img/btn.png);
        margin-top: 14px;
        text-align: center;
        cursor: pointer;
    }

    .btn_active {
        background: url(https://lbs.qq.com/tool/getpoint/img/btn.png) -49px 0px;
    }

    .poi {
        width: 570px;
        height: 41px;
        padding-top: 12px;
        float: left;
        position: relative;
    }

    .poi_note {
        width: 63px;
        line-height: 26px;
        float: left;
    }

    #poi_cur {
        width: 160px;
        height: 22px;
        margin-right: 10px;
        margin-top: 3px;
        line-height: 26px;

        float: left;
        text-align: center;
    }

    #addr_cur {
        width: 260px;
        height: 22px;
        margin-right: 5px;
        margin-top: 3px;
        line-height: 26px;

        float: left;
        text-align: center;
    }

    .btn_copy {
        width: 49px;
        height: 24px;
        background: url(https://lbs.qq.com/tool/getpoint//img/btn_cpoy.png) 0px 0px;
        float: left;
    }

    .already {
        width: 52px;
        line-height: 26px;
        padding-left: 5px;
        float: left;
        color: red;
        display: none;
    }

    .info_list {
        margin-bottom: 5px;
        cleat: both;
        cursor: pointer;
    }

    #txt_pannel {
        height: 500px;
    }

    #city {
        width: 356px;
        height: 433px;
        padding: 10px;
        border: 2px solid #D6D6D6;
        position: absolute;
        left: 44px;
        top: 20px;
        z-index: 999;
        background: #fff;
        overflow: auto;
        color: black;
    }

    #city .city_class {
        font-size: 12px;
        background: #fff;
    }

    #city .city_container {
        margin-top: 10px;
        margin-bottom: 10px;
        background: #fff;
    }

    #city .city_container_left {
        width: 48px;
        float: left;
    }

    #city .city_container_right {
        width: 289px;
        float: left;
    }

    #city .close {
        width: 20px;
        height: 20px;
        display: inline-block;
        float: right;
        font-size: 20px;
        font-weight: normal;
        cursor: pointer;
    }

    #city .city_name {
        line-height: 20px;
        margin-left: 5px;
        color: #2F82C4;
        cursor: pointer;
        display: inline-block;
        font-size: 12px;
    }

    #curCity {
        margin-right: 5px;
    }

    .hide {
        display: none;
    }

    #bside_left {
        width: 300px;
        height: 500px;
        padding: 10px 0px 10px 10px;
        float: left;
        overflow: auto;
    }

    #bside_rgiht {
        width: 900px;
        height: 530px;
        margin-left: 10px;
        border-left: 1px solid #000000;
        float: right;
        font-size: 12px;
    }

    #container {
        height: 520px;
        border: 5px solid #fff;
    }

    #no_value {
        color: red;
        position: relative;
        width: 200px;
    }
</style>

<body>
<div style="height:727px;position:relative;">


    <div style="height:53px;">
        <div class="search">
            <div class="search_c"><input type="text" class="search_t"
                                         onKeyPress="if(event.keyCode==13) {btnSearch.click();return false;}"/></div>
            <div id="btn_search" class="btn">搜索</div>
        </div>
        <div class="poi">
            <div class="poi_note">当前坐标：</div>
            <input type="text" id="poi_cur"/>
            <div class="poi_note">当前地址：</div>
            <input type="text" id="addr_cur"/>
        </div>
    </div>
    <div id="main">

        <div id="tooles">
            <div id="cur_city">
                <strong>北京市</strong><span class="change_city">[<span
                    style="text-decoration:underline;">更换城市</span>]<span id="level">当前缩放等级：10</span></span>
                <div id="city" class="hide">
                    <h3 class="city_class">热门城市<span class="close">X</span></h3>
                    <div class="city_container">
                        <span class="city_name">北京</span>
                        <span class="city_name">深圳</span>
                        <span class="city_name">上海</span>
                        <span class="city_name">香港</span>
                        <span class="city_name">澳门</span>
                        <span class="city_name">广州</span>
                        <span class="city_name">天津</span>
                        <span class="city_name">重庆</span>
                        <span class="city_name">杭州</span>
                        <span class="city_name">成都</span>
                        <span class="city_name">武汉</span>
                        <span class="city_name">青岛</span>
                    </div>
                    <h3 class="city_class">全国城市</h3>
                    <div class="city_container">
                        <div class="city_container_left">直辖市</div>
                        <div class="city_container_right">
                            <span class="city_name">北京</span>
                            <span class="city_name">上海</span>
                            <span class="city_name">天津</span>
                            <span class="city_name">重庆</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">内蒙古</span></div>
                        <div class="city_container_right">
                            <span class="city_name">呼和浩特</span>
                            <span class="city_name">包头</span>
                            <span class="city_name">乌海</span>
                            <span class="city_name">赤峰</span>
                            <span class="city_name">通辽</span>
                            <span class="city_name">鄂尔多斯</span>
                            <span class="city_name">呼伦贝尔</span>
                            <span class="city_name">巴彦淖尔</span>
                            <span class="city_name">乌兰察布</span>
                            <span class="city_name">兴安盟</span>
                            <span class="city_name">锡林郭勒盟</span>
                            <span class="city_name">阿拉善盟</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">山西</span></div>
                        <div class="city_container_right">
                            <span class="city_name">太原</span>
                            <span class="city_name">大同</span>
                            <span class="city_name">阳泉</span>
                            <span class="city_name">长治</span>
                            <span class="city_name">晋城</span>
                            <span class="city_name">朔州</span>
                            <span class="city_name">晋中</span>
                            <span class="city_name">运城</span>
                            <span class="city_name">忻州</span>
                            <span class="city_name">临汾</span>
                            <span class="city_name">吕梁</span>

                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">陕西</span></div>
                        <div class="city_container_right">
                            <span class="city_name">西安</span>
                            <span class="city_name">铜川</span>
                            <span class="city_name">宝鸡</span>
                            <span class="city_name">咸阳</span>
                            <span class="city_name">渭南</span>
                            <span class="city_name">延安</span>
                            <span class="city_name">汉中</span>
                            <span class="city_name">榆林</span>
                            <span class="city_name">安康</span>
                            <span class="city_name">商洛</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">河北</span></div>
                        <div class="city_container_right">
                            <span class="city_name">石家庄</span>
                            <span class="city_name">唐山</span>
                            <span class="city_name">秦皇岛</span>
                            <span class="city_name">邯郸</span>
                            <span class="city_name">邢台</span>
                            <span class="city_name">保定</span>
                            <span class="city_name">张家口</span>
                            <span class="city_name">承德</span>
                            <span class="city_name">沧州</span>
                            <span class="city_name">廊坊</span>
                            <span class="city_name">衡水</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">辽宁</span></div>
                        <div class="city_container_right">
                            <span class="city_name">沈阳</span>
                            <span class="city_name">大连</span>
                            <span class="city_name">鞍山</span>
                            <span class="city_name">抚顺</span>
                            <span class="city_name">本溪</span>
                            <span class="city_name">丹东</span>
                            <span class="city_name">锦州</span>
                            <span class="city_name">营口</span>
                            <span class="city_name">阜新</span>
                            <span class="city_name">辽阳</span>
                            <span class="city_name">盘锦</span>
                            <span class="city_name">铁岭</span>
                            <span class="city_name">朝阳</span>
                            <span class="city_name">葫芦岛</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">吉林</span></div>
                        <div class="city_container_right">
                            <span class="city_name">长春</span>
                            <span class="city_name">吉林</span>
                            <span class="city_name">四平</span>
                            <span class="city_name">辽源</span>
                            <span class="city_name">通化</span>
                            <span class="city_name">白山</span>
                            <span class="city_name">松原</span>
                            <span class="city_name">白城</span>
                            <span class="city_name">延边</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">黑龙江</span></div>
                        <div class="city_container_right">
                            <span class="city_name">哈尔滨</span>
                            <span class="city_name">齐齐哈尔</span>
                            <span class="city_name">鸡西</span>
                            <span class="city_name">鹤岗</span>
                            <span class="city_name">双鸭山</span>
                            <span class="city_name">大庆</span>
                            <span class="city_name">伊春</span>
                            <span class="city_name">牡丹江</span>
                            <span class="city_name">佳木斯</span>
                            <span class="city_name">七台河</span>
                            <span class="city_name">黑河</span>
                            <span class="city_name">绥化</span>
                            <span class="city_name">大兴安岭</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">江苏</span></div>
                        <div class="city_container_right">
                            <span class="city_name">南京</span>
                            <span class="city_name">无锡</span>
                            <span class="city_name">徐州</span>
                            <span class="city_name">常州</span>
                            <span class="city_name">苏州</span>
                            <span class="city_name">南通</span>
                            <span class="city_name">连云港</span>
                            <span class="city_name">淮安</span>
                            <span class="city_name">盐城</span>
                            <span class="city_name">扬州</span>
                            <span class="city_name">镇江</span>
                            <span class="city_name">泰州</span>
                            <span class="city_name">宿迁</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">安徽</span></div>
                        <div class="city_container_right">
                            <span class="city_name">合肥</span>
                            <span class="city_name">蚌埠</span>
                            <span class="city_name">芜湖</span>
                            <span class="city_name">淮南</span>
                            <span class="city_name">马鞍山</span>
                            <span class="city_name">淮北</span>
                            <span class="city_name">铜陵</span>
                            <span class="city_name">安庆</span>
                            <span class="city_name">黄山</span>
                            <span class="city_name">阜阳</span>
                            <span class="city_name">宿州</span>
                            <span class="city_name">滁州</span>
                            <span class="city_name">六安</span>
                            <span class="city_name">宣城</span>
                            <span class="city_name">池州</span>
                            <span class="city_name">亳州</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">山东</span></div>
                        <div class="city_container_right">
                            <span class="city_name">济南</span>
                            <span class="city_name">青岛</span>
                            <span class="city_name">淄博</span>
                            <span class="city_name">枣庄</span>
                            <span class="city_name">东营</span>
                            <span class="city_name">潍坊</span>
                            <span class="city_name">烟台</span>
                            <span class="city_name">威海</span>
                            <span class="city_name">济宁</span>
                            <span class="city_name">泰安</span>
                            <span class="city_name">日照</span>
                            <span class="city_name">莱芜</span>
                            <span class="city_name">临沂</span>
                            <span class="city_name">德州</span>
                            <span class="city_name">聊城</span>
                            <span class="city_name">滨州</span>
                            <span class="city_name">菏泽</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">浙江</span></div>
                        <div class="city_container_right">
                            <span class="city_name">杭州</span>
                            <span class="city_name">宁波</span>
                            <span class="city_name">温州</span>
                            <span class="city_name">嘉兴</span>
                            <span class="city_name">绍兴</span>
                            <span class="city_name">金华</span>
                            <span class="city_name">衢州</span>
                            <span class="city_name">舟山</span>
                            <span class="city_name">台州</span>
                            <span class="city_name">丽水</span>
                            <span class="city_name">湖州</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">江西</span></div>
                        <div class="city_container_right">
                            <span class="city_name">南昌</span>
                            <span class="city_name">景德镇</span>
                            <span class="city_name">萍乡</span>
                            <span class="city_name">九江</span>
                            <span class="city_name">新余</span>
                            <span class="city_name">鹰潭</span>
                            <span class="city_name">赣州</span>
                            <span class="city_name">吉安</span>
                            <span class="city_name">宜春</span>
                            <span class="city_name">抚州</span>
                            <span class="city_name">上饶</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">福建</span></div>
                        <div class="city_container_right">
                            <span class="city_name">福州</span>
                            <span class="city_name">厦门</span>
                            <span class="city_name">莆田</span>
                            <span class="city_name">三明</span>
                            <span class="city_name">泉州</span>
                            <span class="city_name">漳州</span>
                            <span class="city_name">南平</span>
                            <span class="city_name">龙岩</span>
                            <span class="city_name">宁德</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">湖南</span></div>
                        <div class="city_container_right">
                            <span class="city_name">长沙</span>
                            <span class="city_name">株洲</span>
                            <span class="city_name">湘潭</span>
                            <span class="city_name">衡阳</span>
                            <span class="city_name">邵阳</span>
                            <span class="city_name">岳阳</span>
                            <span class="city_name">常德</span>
                            <span class="city_name">张家界</span>
                            <span class="city_name">益阳</span>
                            <span class="city_name">郴州</span>
                            <span class="city_name">永州</span>
                            <span class="city_name">怀化</span>
                            <span class="city_name">娄底</span>
                            <span class="city_name">湘西</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">湖北</span></div>
                        <div class="city_container_right">
                            <span class="city_name">武汉</span>
                            <span class="city_name">黄石</span>
                            <span class="city_name">襄樊</span>
                            <span class="city_name">十堰</span>
                            <span class="city_name">宜昌</span>
                            <span class="city_name">荆门</span>
                            <span class="city_name">鄂州</span>
                            <span class="city_name">孝感</span>
                            <span class="city_name">荆州</span>
                            <span class="city_name">黄冈</span>
                            <span class="city_name">咸宁</span>
                            <span class="city_name">随州</span>
                            <span class="city_name">恩施</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">河南</span></div>
                        <div class="city_container_right">
                            <span class="city_name">郑州</span>
                            <span class="city_name">开封</span>
                            <span class="city_name">洛阳</span>
                            <span class="city_name">平顶山</span>
                            <span class="city_name">焦作</span>
                            <span class="city_name">鹤壁</span>
                            <span class="city_name">新乡</span>
                            <span class="city_name">安阳</span>
                            <span class="city_name">濮阳</span>
                            <span class="city_name">许昌</span>
                            <span class="city_name">漯河</span>
                            <span class="city_name">三门峡</span>
                            <span class="city_name">南阳</span>
                            <span class="city_name">商丘</span>
                            <span class="city_name">信阳</span>
                            <span class="city_name">周口</span>
                            <span class="city_name">驻马店</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">海南</span></div>
                        <div class="city_container_right">
                            <span class="city_name">海口</span>
                            <span class="city_name">三亚</span>
                            <span class="city_name">三沙</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">广东</span></div>
                        <div class="city_container_right">
                            <span class="city_name">广州</span>
                            <span class="city_name">深圳</span>
                            <span class="city_name">珠海</span>
                            <span class="city_name">汕头</span>
                            <span class="city_name">韶关</span>
                            <span class="city_name">佛山</span>
                            <span class="city_name">江门</span>
                            <span class="city_name">湛江</span>
                            <span class="city_name">茂名</span>
                            <span class="city_name">东沙群岛</span>
                            <span class="city_name">肇庆</span>
                            <span class="city_name">惠州</span>
                            <span class="city_name">梅州</span>
                            <span class="city_name">汕尾</span>
                            <span class="city_name">河源</span>
                            <span class="city_name">阳江</span>
                            <span class="city_name">清远</span>
                            <span class="city_name">东莞</span>
                            <span class="city_name">中山</span>
                            <span class="city_name">潮州</span>
                            <span class="city_name">揭阳</span>
                            <span class="city_name">云浮</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">广西</span></div>
                        <div class="city_container_right">
                            <span class="city_name">南宁</span>
                            <span class="city_name">柳州</span>
                            <span class="city_name">桂林</span>
                            <span class="city_name">梧州</span>
                            <span class="city_name">北海</span>
                            <span class="city_name">防城港</span>
                            <span class="city_name">钦州</span>
                            <span class="city_name">贵港</span>
                            <span class="city_name">玉林</span>
                            <span class="city_name">百色</span>
                            <span class="city_name">贺州</span>
                            <span class="city_name">河池</span>
                            <span class="city_name">来宾</span>
                            <span class="city_name">崇左</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">贵州</span></div>
                        <div class="city_container_right">
                            <span class="city_name">贵阳</span>
                            <span class="city_name">遵义</span>
                            <span class="city_name">安顺</span>
                            <span class="city_name">铜仁</span>
                            <span class="city_name">毕节</span>
                            <span class="city_name">六盘水</span>
                            <span class="city_name">黔西南</span>
                            <span class="city_name">黔东南</span>
                            <span class="city_name">黔南</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">四川</span></div>
                        <div class="city_container_right">
                            <span class="city_name">成都</span>
                            <span class="city_name">自贡</span>
                            <span class="city_name">攀枝花</span>
                            <span class="city_name">泸州</span>
                            <span class="city_name">德阳</span>
                            <span class="city_name">绵阳</span>
                            <span class="city_name">广元</span>
                            <span class="city_name">遂宁</span>
                            <span class="city_name">内江</span>
                            <span class="city_name">乐山</span>
                            <span class="city_name">南充</span>
                            <span class="city_name">宜宾</span>
                            <span class="city_name">广安</span>
                            <span class="city_name">达州</span>
                            <span class="city_name">眉山</span>
                            <span class="city_name">雅安</span>
                            <span class="city_name">巴中</span>
                            <span class="city_name">资阳</span>
                            <span class="city_name">阿坝</span>
                            <span class="city_name">甘孜</span>
                            <span class="city_name">凉山</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">云南</span></div>
                        <div class="city_container_right">
                            <span class="city_name">昆明</span>
                            <span class="city_name">保山</span>
                            <span class="city_name">昭通</span>
                            <span class="city_name">丽江</span>
                            <span class="city_name">普洱</span>
                            <span class="city_name">临沧</span>
                            <span class="city_name">曲靖</span>
                            <span class="city_name">玉溪</span>
                            <span class="city_name">文山</span>
                            <span class="city_name">西双版纳</span>
                            <span class="city_name">楚雄</span>
                            <span class="city_name">红河</span>
                            <span class="city_name">德宏</span>
                            <span class="city_name">大理</span>
                            <span class="city_name">怒江</span>
                            <span class="city_name">迪庆</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">甘肃</span></div>
                        <div class="city_container_right">
                            <span class="city_name">兰州</span>
                            <span class="city_name">嘉峪关</span>
                            <span class="city_name">金昌</span>
                            <span class="city_name">白银</span>
                            <span class="city_name">天水</span>
                            <span class="city_name">酒泉</span>
                            <span class="city_name">张掖</span>
                            <span class="city_name">武威</span>
                            <span class="city_name">定西</span>
                            <span class="city_name">陇南</span>
                            <span class="city_name">平凉</span>
                            <span class="city_name">庆阳</span>
                            <span class="city_name">临夏</span>
                            <span class="city_name">甘南</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">宁夏</span></div>
                        <div class="city_container_right">
                            <span class="city_name">银川</span>
                            <span class="city_name">石嘴山</span>
                            <span class="city_name">吴忠</span>
                            <span class="city_name">固原</span>
                            <span class="city_name">中卫</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">青海</span></div>
                        <div class="city_container_right">
                            <span class="city_name">西宁</span>
                            <span class="city_name">玉树</span>
                            <span class="city_name">果洛</span>
                            <span class="city_name">海东</span>
                            <span class="city_name">海西</span>
                            <span class="city_name">黄南</span>
                            <span class="city_name">海北</span>
                            <span class="city_name">海南</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">西藏</span></div>
                        <div class="city_container_right">
                            <span class="city_name">拉萨</span>
                            <span class="city_name">那曲</span>
                            <span class="city_name">昌都</span>
                            <span class="city_name">山南</span>
                            <span class="city_name">日喀则</span>
                            <span class="city_name">阿里</span>
                            <span class="city_name">林芝</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="city_container">
                        <div class="city_container_left"><span class="style_color">新疆</span></div>
                        <div class="city_container_right">
                            <span class="city_name">乌鲁木齐</span>
                            <span class="city_name">克拉玛依</span>
                            <span class="city_name">吐鲁番</span>
                            <span class="city_name">哈密</span>
                            <span class="city_name">博尔塔拉</span>
                            <span class="city_name">巴音郭楞</span>
                            <span class="city_name">克孜勒苏</span>
                            <span class="city_name">和田</span>
                            <span class="city_name">阿克苏</span>
                            <span class="city_name">喀什</span>
                            <span class="city_name">塔城</span>
                            <span class="city_name">伊犁</span>
                            <span class="city_name">昌吉</span>
                            <span class="city_name">阿勒泰</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                </div>
            </div>

        </div>
        <div style="width:100%">

            <div id="bside_left">

            </div>
            <div id="bside_rgiht">
                <div id="container"></div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">

    var container = document.getElementById("container");
    var map = new qq.maps.Map(container, {
            zoom: 10

        }),
        label = new qq.maps.Label({
            map: map,
            offset: new qq.maps.Size(15, -12),
            draggable: false,
            clickable: false
        }),
        markerArray = [],
        curCity = document.getElementById("cur_city"),
        btnSearch = document.getElementById("btn_search"),
        bside = document.getElementById("bside_left"),
        url, query_city,
        cityservice = new qq.maps.CityService({
            complete: function (result) {
                curCity.children[0].innerHTML = result.detail.name;
                map.setCenter(result.detail.latLng);
            }
        });
    cityservice.searchLocalCity();
    map.setOptions({
        draggableCursor: "crosshair"
    });

    $(container).mouseenter(function () {
        label.setMap(map);
    });
    $(container).mouseleave(function () {
        label.setMap(null);
    });

    qq.maps.event.addListener(map, "mousemove", function (e) {
        var latlng = e.latLng;
        label.setPosition(latlng);
        label.setContent(latlng.getLat().toFixed(6) + "," + latlng.getLng().toFixed(6));
    });

    var url3;
    qq.maps.event.addListener(map, "click", function (e) {
        document.getElementById("poi_cur").value = e.latLng.getLat().toFixed(6) + "," + e.latLng.getLng().toFixed(6);
        window.opener.latitude(e.latLng.getLat().toFixed(6));
        window.opener.longitude(e.latLng.getLng().toFixed(6));
        url3 = encodeURI("https://apis.map.qq.com/ws/geocoder/v1/?location=" + e.latLng.getLat() + "," + e.latLng.getLng() + "&key=ULWBZ-54PKS-HBMOL-6YWJF-KMKY6-2XBBB&output=jsonp&&callback=?");
        $.getJSON(url3, function (result) {
            console.log(result);
            if (result.result != undefined) {
                document.getElementById("addr_cur").value = result.result.address;
                window.opener.addr(result.result.address);
            } else {
                document.getElementById("addr_cur").value = "";
            }

        })
    });

    qq.maps.event.addListener(map, "zoom_changed", function () {
        document.getElementById("level").innerHTML = "当前缩放等级：" + map.getZoom();
    });
    var listener_arr = [];
    var isNoValue = false;
    qq.maps.event.addDomListener(btnSearch, 'click', function () {
        var value = this.parentNode.getElementsByTagName("input")[0].value;
        var latlngBounds = new qq.maps.LatLngBounds();
        for (var i = 0, l = listener_arr.length; i < l; i++) {
            qq.maps.event.removeListener(listener_arr[i]);
        }
        listener_arr.length = 0;
        query_city = curCity.children[0].innerHTML;
        url = encodeURI("https://apis.map.qq.com/ws/place/v1/search?keyword=" + value + "&boundary=region(" + query_city + ",0)&page_size=9&page_index=1&key=ULWBZ-54PKS-HBMOL-6YWJF-KMKY6-2XBBB&output=jsonp&&callback=?");
        $.getJSON(url, function (result) {
            console.log(url);
            console.log(result);

            if (result.count) {
                isNoValue = false;
                bside.innerHTML = "";
                each(markerArray, function (n, ele) {
                    ele.setMap(null);
                });
                markerArray.length = 0;
                each(result.data, function (n, ele) {
                    var latlng = new qq.maps.LatLng(ele.location.lat, ele.location.lng);
                    latlngBounds.extend(latlng);
                    var left = n * 27;
                    var marker = new qq.maps.Marker({
                        map: map,
                        position: latlng,
                        zIndex: 10
                    });
                    marker.index = n;
                    marker.isClicked = false;
                    setAnchor(marker, true);
                    markerArray.push(marker);
                    var listener1 = qq.maps.event.addDomListener(marker, "mouseover", function () {
                        var n = this.index;
                        setCurrent(markerArray, n, false);
                        setCurrent(markerArray, n, true);
                        label.setContent(this.position.getLat().toFixed(6) + "," + this.position.getLng().toFixed(6));
                        label.setPosition(this.position);
                        label.setOptions({
                            offset: new qq.maps.Size(15, -20)
                        })

                    });
                    listener_arr.push(listener1);
                    var listener2 = qq.maps.event.addDomListener(marker, "mouseout", function () {
                        var n = this.index;
                        setCurrent(markerArray, n, false);
                        setCurrent(markerArray, n, true);
                        label.setOptions({
                            offset: new qq.maps.Size(15, -12)
                        })
                    });
                    listener_arr.push(listener2);
                    var listener3 = qq.maps.event.addDomListener(marker, "click", function () {
                        var n = this.index;
                        setFlagClicked(markerArray, n);
                        setCurrent(markerArray, n, false);
                        setCurrent(markerArray, n, true);
                        document.getElementById("addr_cur").value = bside.childNodes[n].childNodes[1].childNodes[1].innerHTML.substring(3);
                    });
                    listener_arr.push(listener3);
                    map.fitBounds(latlngBounds);
                    var div = document.createElement("div");
                    div.className = "info_list";
                    var order = document.createElement("div");
                    var leftn = -54 - 17 * n;
                    order.style.cssText = "width:17px;height:17px;margin:3px 3px 0px 0px;float:left;background:url(./img/marker_n.png) " + leftn + "px 0px";
                    div.appendChild(order);
                    var pannel = document.createElement("div");
                    pannel.style.cssText = "width:200px;float:left;";
                    div.appendChild(pannel);
                    var name = document.createElement("p");
                    name.style.cssText = "margin:0px;color:#0000CC";
                    name.innerHTML = ele.title;
                    pannel.appendChild(name);
                    var address = document.createElement("p");
                    address.style.cssText = "margin:0px;";
                    address.innerHTML = "地址：" + ele.address;
                    pannel.appendChild(address);
                    if (ele.tel != undefined) {
                        var phone = document.createElement("p");
                        phone.style.cssText = "margin:0px;";
                        phone.innerHTML = "电话：" + ele.tel;
                        pannel.appendChild(phone);
                    }
                    var position = document.createElement("p");
                    position.style.cssText = "margin:0px;";
                    position.innerHTML = "坐标：" + ele.location.lat.toFixed(6) + "，" + ele.location.lng.toFixed(6);
                    pannel.appendChild(position);
                    bside.appendChild(div);
                    div.style.height = pannel.offsetHeight + "px";
                    div.isClicked = false;
                    div.index = n;
                    marker.div = div;
                    div.marker = marker;
                });
                $("#bside_left").delegate(".info_list", "mouseover", function (e) {

                    var n = this.index;

                    setCurrent(markerArray, n, false);
                    setCurrent(markerArray, n, true);
                });
                $("#bside_left").delegate(".info_list", "mouseout", function () {
                    each(markerArray, function (n, ele) {
                        if (!ele.isClicked) {
                            setAnchor(ele, true);
                            ele.div.style.background = "#fff";
                        }
                    })
                });
                $("#bside_left").delegate(".info_list", "click", function (e) {
                    var n = this.index;
                    setFlagClicked(markerArray, n);
                    setCurrent(markerArray, n, false);
                    setCurrent(markerArray, n, true);
                    map.setCenter(markerArray[n].position);
                    document.getElementById("addr_cur").value = this.childNodes[1].childNodes[1].innerHTML.substring(3);
                });
            } else {

                bside.innerHTML = "";
                each(markerArray, function (n, ele) {
                    ele.setMap(null);
                });
                markerArray.length = 0;
                var novalue = document.createElement('div');
                novalue.id = "no_value";
                novalue.innerHTML = "对不起，没有搜索到您要找的结果!";
                bside.appendChild(novalue);
                isNoValue = true;
            }
        });
    });

    btnSearch.onmousedown = function () {
        this.className = "btn_active";
    };
    btnSearch.onmouseup = function () {
        this.className = "btn";
    };

    function setAnchor(marker, flag) {
        var left = marker.index * 27;
        if (flag == true) {
            var anchor = new qq.maps.Point(10, 30),
                origin = new qq.maps.Point(left, 0),
                size = new qq.maps.Size(27, 33),
                icon = new qq.maps.MarkerImage("https://lbs.qq.com/tool/getpoint//img/marker10.png", size, origin, anchor);
            marker.setIcon(icon);
        } else {
            var anchor = new qq.maps.Point(10, 30),
                origin = new qq.maps.Point(left, 35),
                size = new qq.maps.Size(27, 33),
                icon = new qq.maps.MarkerImage("https://lbs.qq.com/tool/getpoint//img/marker10.png", size, origin, anchor);
            marker.setIcon(icon);
        }
    }

    function setCurrent(arr, index, isMarker) {
        if (isMarker) {
            each(markerArray, function (n, ele) {
                if (n == index) {
                    setAnchor(ele, false);
                    ele.setZIndex(10);
                } else {
                    if (!ele.isClicked) {
                        setAnchor(ele, true);
                        ele.setZIndex(9);
                    }
                }
            });
        } else {
            each(markerArray, function (n, ele) {
                if (n == index) {
                    ele.div.style.background = "#DBE4F2";
                } else {
                    if (!ele.div.isClicked) {
                        ele.div.style.background = "#fff";
                    }
                }
            });
        }
    }

    function setFlagClicked(arr, index) {
        each(markerArray, function (n, ele) {
            if (n == index) {
                ele.isClicked = true;
                ele.div.isClicked = true;
                var str = '<div style="width:250px;">' + ele.div.children[1].innerHTML.toString() + '</div>';
                var latLng = ele.getPosition();
                document.getElementById("poi_cur").value = latLng.getLat().toFixed(6) + "," + latLng.getLng().toFixed(6);
            } else {
                ele.isClicked = false;
                ele.div.isClicked = false;
            }
        });
    }

    var city = document.getElementById("city");

    curCity.onclick = function (e) {
        var e = e || window.event,
            target = e.target || e.srcElement;
        if (target.innerHTML == "更换城市") {
            city.style.display = "block";
            if (isNoValue) {
                bside.innerHTML = "";
                each(markerArray, function (n, ele) {
                    ele.setMap(null);
                });
                markerArray.length = 0;
            }

        }
    };

    var url2;
    city.onclick = function (e) {
        var e = e || window.event,
            target = e.target || e.srcElement;
        if (target.className == "close") {
            city.style.display = "none";
        }
        if (target.className == "city_name") {

            curCity.children[0].innerHTML = target.innerHTML;

            url2 = encodeURI("https://apis.map.qq.com/ws/geocoder/v1/?region=" + curCity.children[0].innerHTML + "&address=" + curCity.children[0].innerHTML + "&key=K76BZ-W3O2Q-RFL5S-GXOPR-3ARIT-6KFE5&output=jsonp&&callback=?");
            $.getJSON(url2, function (result) {
                map.setCenter(new qq.maps.LatLng(result.result.location.lat, result.result.location.lng));
                map.setZoom(10);
            });
            city.style.display = "none";
        }
    };

    var url4;
    $(".search_t").autocomplete({
        source: function (request, response) {
            url4 = encodeURI("https://apis.map.qq.com/ws/place/v1/suggestion/?keyword=" + request.term + "&region=" + curCity.children[0].innerHTML + "&key=K76BZ-W3O2Q-RFL5S-GXOPR-3ARIT-6KFE5&output=jsonp&&callback=?");
            $.getJSON(url4, function (result) {

                response($.map(result.data, function (item) {
                    return ({
                        label: item.title

                    })
                }));
            });
        }
    });

    function each(obj, fn) {
        for (var n = 0, l = obj.length; n < l; n++) {
            fn.call(obj[n], n, obj[n]);
        }
    }
</script>
</body>
</html>