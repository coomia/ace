var server = "https://zx.huacainfo.com";
var serverfile = "http://zx.huacainfo.com";
var config = {
    server,
    serverfile,
    appid: 'wx70ba7c5dca85e4da',
    appsecret: '96214b4a01153935995cc027ddf26d75',
    frontColor: '#ffffff',
    backgroundColor: "#3C3C3C",
    loginUrl: `${server}/portal/www/authority.do`,
    statisticsUrl: `${server}/woc/www/data/statistics`,
    siteUrl: `${server}/woc/www/data/site`,
    illegalTrafficUrl: `${server}/woc/www/data/illegalTraffic`,
    intervalUrl: `${server}/woc/www/data/interval`
};
module.exports = config