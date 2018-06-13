package com.huacainfo.ace.portal.model;

import java.math.BigDecimal;
import java.util.Date;

public class EvaluatData implements java.io.Serializable {
    private static final long serialVersionUID = 1L;
    private String id;

    private String evaluatTplId;

    private BigDecimal score;

    private String status;

    private String createUserId;

    private Date createDate;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getEvaluatTplId() {
        return evaluatTplId;
    }

    public void setEvaluatTplId(String evaluatTplId) {
        this.evaluatTplId = evaluatTplId == null ? null : evaluatTplId.trim();
    }

    public BigDecimal getScore() {
        return score;
    }

    public void setScore(BigDecimal score) {
        this.score = score;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status == null ? null : status.trim();
    }

    public String getCreateUserId() {
        return createUserId;
    }

    public void setCreateUserId(String createUserId) {
        this.createUserId = createUserId == null ? null : createUserId.trim();
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }
}