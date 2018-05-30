
package com.huacainfo.ace.fop.vo;

import com.huacainfo.ace.fop.model.FopAssociation;

import java.util.List;


public class FopAssociationVo extends FopAssociation {
    private static final long serialVersionUID = 1L;

    private List<FopAssMemberVo> list;

    public List<FopAssMemberVo> getList() {
        return list;
    }

    public void setList(List<FopAssMemberVo> list) {
        this.list = list;
    }

}
