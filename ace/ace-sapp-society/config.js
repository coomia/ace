var server = "https://zhsh.wuling.gov.cn";
var serverfile = "https://zhsh.wuling.gov.cn/";
var rtmpserver = "rtmp://218.75.136.123/live/";
var hlsserver = "http://218.75.136.123:9999/hls/";
var websocketurl = 'zhsh.wuling.gov.cn';

var config = {
    rtmpserver,
    websocketurl,
    server,
    serverfile,
    hlsserver,
  appid: 'wx7e6a369d8fa12b12',
  appsecret: 'eac1cdaebc47d72133d0872a5900f344',
    // appid: 'wx70ba7c5dca85e4da',
    // appsecret: '96214b4a01153935995cc027ddf26d75',
    companyId: '0002',
    loginUrl: `${server}/portal/www/authority.do`,
    checkImageUrl: `${server}/society/www/captcha/image.do`,
    uploadUrl: `${server}/portal/www/upload.do`,
    mallList: `${server}/society/www/commodity/getList`,
    siteDetail: `${server}/society/www/commodity/getDetail`,
    sendCode: `${server}/society/www/reg/sendCode`,
    regist: `${server}/society/www/reg/register`,
    orgList: `${server}/society/www/reg/findOrgList`,
    ideaList: `${server}/society/www/idea/findList`,
    releaseIdea: `${server}/society/www/idea/submit`,
    ideaDetail: `${server}/society/www/idea/getIdeaDetail`,
    findUserInfo: `${server}/society/www/reg/findByUserId`,
    createOrder: `${server}/society/www/order/create`,
    behaviorList: `${server}/society/www/behavior/findList`,
    findActivityReport: `${server}/society/www/activity/selectActivityReportByPrimaryKey`,
    findSocietyOrgInfos: `${server}/society/www/activity/findSocietyOrgInfoList`,
    findActivitys: `${server}/society/www/activity/findPublicActivityList`,
    findActivity: `${server}/society/www/activity/selectActivityByPrimaryKey`,
    publicActivityReports: `${server}/society/www/activity/findPublicActivityReportList`,
    applyStatus: `${server}/society/www/activity/getApplyStatus`,
    insertActivity: `${server}/society/www/activity/insertActivity`, 
    updateActivity: `${server}/society/www/activity/updateActivity`,

    insertActivityDetail: `${server}/society/www/activity/insertActivityDetail`,

    participants: `${server}/society/www/activity/findActivityParticipants`,
    selectActivityReport: `${server}/society/www/activity/selectActivityReportByActivityId`,
    updateActivityReport: `${server}/society/www/activity/updateActivityReport`,
    pointRank: `${server}/society/www/user/pointsRank`,
    findOrderList: `${server}/society/www/user/findOrderList`,
    findPointsRecord: `${server}/society/www/user/findPointsRecord`,
    findActivitying: `${server}/society/www/activity/findActivitying`,
    findPublicActivityReportList: `${server}/society/www/activity/findPublicActivityReportList`,

    adminActivityList: `${server}/society/www/activity/findAdminSelfActivityList`,
    userActivityList: `${server}/society/www/activity/findUserSelfActivityList`,
    activitySign: `${server}/society/www/activity/activitySign`,
    getLiveMsgList: `${server}/live/www/live/getLiveMsgList`,
    insertLiveRpt: `${server}/live/liveRpt/www/insertLiveRpt`,
    getLiveRptList: `${server}/live/www/live/getLiveRptList`,
    insertLive: `${server}/live/live/www/insertLive`,
    updateLive: `${server}/live/live/www/updateLive`,
    selectLiveByPrimaryKey: `${server}/live/live/www/selectLiveByPrimaryKey`,
    deleteLiveByLiveId: `${server}/live/live/www/deleteLiveByLiveId`,
    findLiveList: `${server}/live/live/www/findLiveListWwwFrjd`,
    updateAuditStatus: `${server}/live/live/www/updateAuditStatus`,
    insertLiveCmt: `${server}/live/liveCmt/www/insertLiveCmt`,
    addLike: `${server}/live/www/live/addLike`,
    getliveListByCorpId: `${server}/live/live/www/getliveListByCorpId`,
    loadLive: `${server}/live/live/www/loadLive`,
    submitComment: `${server}/society/www/comment/submitComment`,
    findComments: `${server}/society/www/comment/findList`,
    findAdmires: `${server}/society/www/comment/findAdmireTotal`,
    admire: `${server}/society/www/comment/admire`,
    cancelAdmire: `${server}/society/www/comment/cancelAdmire`, 
    delActivity: `${server}/society/www/activity/delActivity`,
    getCoin: `${server}/society/www/activity/getCoin`,
    feedBack: `${server}/society/www/user/feedBack`,
};
module.exports = config