var server = "https://zx.huacainfo.com";
var serverfile = "https://zx.huacainfo.com/";
var rtmpserver ="rtmp://zx.huacainfo.com/live/";
var hlsserver ="http://139.224.0.227:9999/hls/";
var websocketurl= 'zx.huacainfo.com';
var config = {
    rtmpserver,
    websocketurl,
    server,
    serverfile,
    hlsserver,
    appid: 'wx70ba7c5dca85e4da',
    appsecret: '96214b4a01153935995cc027ddf26d75',
    companyId: '0010007',
    ak: 'cPY4B8MAYgPQYOuDKPTNvUin31DBPDCB',
    frontColor: '#000000',
    backgroundColor: "#fff",
    loginUrl: `${server}/portal/www/authority.do`,
    checkImageUrl: `${server}/uf/www/captcha/image.do`,
    mallList: `${server}/society/www/commodity/getList`,
    siteDetail: `${server}/society/www/commodity/getDetail`,
    sendCode: `${server}/society/www/reg/sendCode`,
    regist: `${server}/society/www/reg/register`,
};
module.exports = config
