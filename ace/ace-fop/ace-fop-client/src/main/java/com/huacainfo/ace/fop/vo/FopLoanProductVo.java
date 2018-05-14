
package com.huacainfo.ace.fop.vo;

import com.huacainfo.ace.fop.model.FopLoanProduct;

import java.util.List;


public class FopLoanProductVo extends FopLoanProduct {
    private static final long serialVersionUID = 1L;

    private String companyName;

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    private List<FopQuestionVo> comments;

    public List<FopQuestionVo> getComments() {
        return comments;
    }

    public void setComments(List<FopQuestionVo> comments) {
        this.comments = comments;
    }
}
