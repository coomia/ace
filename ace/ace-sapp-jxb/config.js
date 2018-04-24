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
    appid: 'wxcf3d50130f9844f5',
    appsecret: '10a109f311c9803c2a8fd17b14bf09dd',
    companyId: '0010007',
    ak: 'cPY4B8MAYgPQYOuDKPTNvUin31DBPDCB',
    frontColor: '#ffffff',
    backgroundColor: "#3C3C3C",
    loginUrl: `${server}/portal/www/authority.do`,
    checkImageUrl: `${server}/uf/www/captcha/image.do`,
    uploadUrl: `${server}/jxb/www/jxb/upload.do`,
    getLiveMsgList: `${server}/jxb/www/jxb/getLiveMsgList.do`,
    insertLiveRptSapp: `${server}/jxb/www/jxb/insertLiveRptSapp.do`,
    getLiveRptList: `${server}/jxb/www/jxb/getLiveRptList.do`,
    insertLiveSapp: `${server}/jxb/www/jxb/insertLiveSapp.do`,
    insertCourseSapp: `${server}/jxb/www/jxb/insertCourseSapp.do`,
    updateLiveSapp: `${server}/jxb/www/jxb/updateLiveSapp.do`,
    updateCourseSapp: `${server}/jxb/www/jxb/updateCourseSapp.do`,
    getCoursById: `${server}/jxb/www/jxb/getCoursById.do`,
    getLiveById: `${server}/jxb/www/jxb/getLiveById.do`,
    deleteCoursById: `${server}/jxb/www/jxb/deleteCoursById.do`,
    deleteLiveById: `${server}/jxb/www/jxb/deleteLiveById.do`,
    proxyService: `${server}/jxb/www/jxb/proxyService.do`,
    getLiveListByUserId: `${server}/jxb/www/jxb/getLiveListByUserId.do`,
    getCourseListByUserId: `${server}/jxb/www/jxb/getCourseListByUserId.do`
};
module.exports = config
