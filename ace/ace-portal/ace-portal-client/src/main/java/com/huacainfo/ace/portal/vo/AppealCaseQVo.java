package com.huacainfo.ace.portal.vo;

import com.huacainfo.ace.portal.model.AppealCase;


public class AppealCaseQVo extends AppealCase {
	private static final long serialVersionUID = 1L;
	/*
	 * 所属企业标识
	 */
	private String corpId;

	public String getCorpId() {
		return corpId;
	}

	public void setCorpId(String corpId) {
		this.corpId = corpId;
	}
}
