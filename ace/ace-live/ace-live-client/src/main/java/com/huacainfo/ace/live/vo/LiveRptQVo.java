package com.huacainfo.ace.live.vo;

import com.huacainfo.ace.live.model.LiveRpt;


public class LiveRptQVo extends LiveRpt {
    private static final long serialVersionUID = 1L;
    private  String deptId;

    public String getDeptId() {
        return deptId;
    }

    public void setDeptId(String deptId) {
        this.deptId = deptId;
    }
}
