package com.huacainfo.ace.jxb.model;

import java.math.BigDecimal;
import java.util.Date;

public class Counselor {
    private String id;
    /**
     * 所属工作室
     */
    private String studioId;
    /**
     * 姓名
     */
    private String name;
    /**
     * 职业名称
     */
    private String certification;
    /**
     * 擅长领域
     */
    private String tags;
    /**
     * 从业资质
     */
    private String years;
    /**
     * 手机号
     */
    private String mobile;
    /**
     * 形象照
     */
    private String imagePhotoUrl;
    /**
     * 电子名片
     */
    private String visitCardUrl;
    /**
     * 身份证号
     */
    private String idCard;
    /**
     * 身份证件电子档
     */
    private String idCardImgUrl;
    /**
     * 资格从业证书号
     */
    private String certificateNo;
    /**
     * 资格从业证书电子档
     */
    private String certificateImgUrl;
    /**
     * 身份证持胸前自拍照
     */
    private String evidenceImgUrl;
    /**
     * 爱心币
     */
    private Integer lm;
    /**
     * 累计收益
     */
    private BigDecimal income;
    /**
     * 账户余额
     */
    private BigDecimal account;
    /**
     * 级别
     */
    private String level;
    /**
     * 入库日期
     */
    private Date createDate;
    /**
     * 个人简介
     */
    private String profile;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getStudioId() {
        return studioId;
    }

    public void setStudioId(String studioId) {
        this.studioId = studioId == null ? null : studioId.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getCertification() {
        return certification;
    }

    public void setCertification(String certification) {
        this.certification = certification == null ? null : certification.trim();
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags == null ? null : tags.trim();
    }

    public String getYears() {
        return years;
    }

    public void setYears(String years) {
        this.years = years == null ? null : years.trim();
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile == null ? null : mobile.trim();
    }

    public String getImagePhotoUrl() {
        return imagePhotoUrl;
    }

    public void setImagePhotoUrl(String imagePhotoUrl) {
        this.imagePhotoUrl = imagePhotoUrl == null ? null : imagePhotoUrl.trim();
    }

    public String getVisitCardUrl() {
        return visitCardUrl;
    }

    public void setVisitCardUrl(String visitCardUrl) {
        this.visitCardUrl = visitCardUrl == null ? null : visitCardUrl.trim();
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard == null ? null : idCard.trim();
    }

    public String getIdCardImgUrl() {
        return idCardImgUrl;
    }

    public void setIdCardImgUrl(String idCardImgUrl) {
        this.idCardImgUrl = idCardImgUrl == null ? null : idCardImgUrl.trim();
    }

    public String getCertificateNo() {
        return certificateNo;
    }

    public void setCertificateNo(String certificateNo) {
        this.certificateNo = certificateNo == null ? null : certificateNo.trim();
    }

    public String getCertificateImgUrl() {
        return certificateImgUrl;
    }

    public void setCertificateImgUrl(String certificateImgUrl) {
        this.certificateImgUrl = certificateImgUrl == null ? null : certificateImgUrl.trim();
    }

    public String getEvidenceImgUrl() {
        return evidenceImgUrl;
    }

    public void setEvidenceImgUrl(String evidenceImgUrl) {
        this.evidenceImgUrl = evidenceImgUrl == null ? null : evidenceImgUrl.trim();
    }

    public Integer getLm() {
        return lm;
    }

    public void setLm(Integer lm) {
        this.lm = lm;
    }

    public BigDecimal getIncome() {
        return income;
    }

    public void setIncome(BigDecimal income) {
        this.income = income;
    }

    public BigDecimal getAccount() {
        return account;
    }

    public void setAccount(BigDecimal account) {
        this.account = account;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level == null ? null : level.trim();
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile == null ? null : profile.trim();
    }
}