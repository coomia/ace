package com.huacainfo.ace.common.result;

import com.huacainfo.ace.common.tools.JsonUtil;

import java.io.Serializable;

/**
 * Created by HuaCai008 on 2018/4/19.
 */
public class ResultResponse implements Serializable {

    private static final long serialVersionUID = 1L;
    /**
     * 请求结果代码
     */
    private int status;
    /**
     * 返回信息文字提示
     */
    private String info;
    /**
     * 携带数据对象
     */
    private Object data;

    public ResultResponse() {
    }

    public ResultResponse(MessageResponse response){
        this.status = response.getStatus();
        this.info = response.getErrorMessage();
    }

    public ResultResponse(int status, String info) {
        this.status = status;
        this.info = info;
    }

    public ResultResponse(int status, String info, Object data) {
        this.status = status;
        this.info = info;
        this.data = data;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return JsonUtil.toJson(this);
    }
}
