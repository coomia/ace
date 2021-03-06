package com.huacainfo.ace.taa.vo;

import com.huacainfo.ace.taa.model.RoadSection;


public class RoadSectionQVo extends RoadSection {
    private static final long serialVersionUID = 1L;
    /**
     * 查询类别  1-已采集 ; 0 - 未采集
     */
    private String category;

    private String keyWord;
    /**
     * 部门ID
     */
    private String deptId;

    public String getDeptId() {
        return deptId;
    }

    public void setDeptId(String deptId) {
        this.deptId = deptId;
    }

    public String getKeyWord() {
        return keyWord;
    }

    public void setKeyWord(String keyWord) {
        this.keyWord = keyWord;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
