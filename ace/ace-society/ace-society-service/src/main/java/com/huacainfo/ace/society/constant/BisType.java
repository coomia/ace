package com.huacainfo.ace.society.constant;

/**
 * @Auther: Arvin
 * @Date: 2018/9/11 17:34
 * @Description:
 */
public interface BisType {

    /**
     * 个人信息审核
     */
    String PERSON_INFO = "personInfo";
    /**
     * 社会组织审核
     */
    String SOCIETY_ORG_INFO = "societyOrgInfo";

    /**
     * 线下活动审核
     */
    String ACTIVITY = "activity";

    /**
     * 线下活动-报道审核
     */
    String ACTIVITY_REPORT = "activityReport";

    /**
     * 文明随手拍审核
     */
    String BEHAVIOR = "behavior";

    /**
     * 方案提议点子审核
     */
    String SUBJECT_IDEA = "subjectIdea";

    /**
     * 直播审核
     */
    String LIVE_SHOW = "liveShow";

    /**
     * 课程审核
     */
    String COURSE = "course";


    /**
     * ================
     * 爱心币流水变动业务类型
     */
    /**
     * 订单消费
     */
    String POINTS_ORDER_CONSUME = "ORDER_CONSUME";


    /**
     * ================
     * 评论模块业务类型（点赞共用此业务类型）
     */
    /**
     * 点子评论-业务类型
     */
    String COMMENT_IDEA = "idea";
    /**
     * 活动评论-业务类型
     */
    String COMMENT_ACTIVITY = "activity";
}

