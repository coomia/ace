
package com.huacainfo.ace.live.vo;

import com.huacainfo.ace.live.model.Img;
import com.huacainfo.ace.live.model.LiveRpt;
import com.huacainfo.ace.live.model.Reporter;

import java.util.List;


public class LiveRptVo extends LiveRpt {
    private static final long serialVersionUID = 1L;

    /**
     * 报道员昵称
     */
    private String nickName;

    private String liveName;

    private List<Img> imageList;

    Reporter rpt;

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getLiveName() {
        return liveName;
    }

    public void setLiveName(String liveName) {
        this.liveName = liveName;
    }

    public List<Img> getImageList() {
        return imageList;
    }

    public void setImageList(List<Img> imageList) {
        this.imageList = imageList;
    }

    public Reporter getRpt() {
        return rpt;
    }

    public void setRpt(Reporter rpt) {
        this.rpt = rpt;
    }
}
