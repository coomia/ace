package com.huacainfo.ace.fop.web.controller;
import com.alibaba.fastjson.JSON;
import com.huacainfo.ace.common.result.MessageResponse;
import com.huacainfo.ace.common.result.SingleResult;
import com.huacainfo.ace.common.tools.CommonBeanUtils;
import com.huacainfo.ace.common.tools.CommonKeys;
import com.huacainfo.ace.common.model.Userinfo;
import com.huacainfo.ace.common.tools.CommonUtils;
import com.huacainfo.ace.common.tools.PropertyUtil;
import com.huacainfo.ace.portal.model.TaskCmcc;
import com.huacainfo.ace.portal.service.OAuth2Service;
import com.huacainfo.ace.portal.service.TaskCmccService;
import org.apache.commons.collections.map.HashedMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.web.bind.annotation.ResponseBody;
@Controller
@RequestMapping("/www/oauth2")
/**
 * @author: 陈晓克
 * @version: 2017-12-27
 * @Description: TODO(直播)
 */
public class OAuth2Controller extends FopBaseController {

    private static final long serialVersionUID = 1L;
    Logger logger = LoggerFactory.getLogger(this.getClass());


    @Value("#{config[appid]}")
    private String appid;
    @Value("#{config[secret]}")
    private String secret;
    @Value("#{config[redirect_uri]}")
    private String redirect_uri;
    @Value("#{config[scope]}")
    private String scope;
    @Value("#{config[state]}")
    private String state;

    @Autowired
    private OAuth2Service oAuth2Service;

    @Autowired
    private TaskCmccService taskCmccService;

    @RequestMapping(value = "/redirect.do")
    public ModelAndView redirect(String code, String state) throws Exception {
        String viewName = "index";
        this.logger.info("code->{} state -> {}", code, state);
        logger.info("=========================  start get Userinfo from weixin pltfrom======================");
        SingleResult<Userinfo> rst = this.oAuth2Service.saveOrUpdateUserinfo(appid, secret, code, state);
        this.logger.info("{}", rst.getErrorMessage());
        if (rst.getState()) {
            this.logger.info("==================={}  in session ======================", rst.getValue().getNickname());
            this.getRequest().getSession().setAttribute(CommonKeys.SESSION_USERINFO_KEY, rst.getValue());
        } else {
            viewName = "error";
        }
        logger.info("=========================  complete get Userinfo from weixin pltfrom rst {} ======================", rst.getState());
        ModelAndView mav = new ModelAndView(viewName);
        return mav;
    }

    @RequestMapping(value = "/cfg.do")
    public ModelAndView userinfo() throws Exception {
        Object o = this.getSession(CommonKeys.SESSION_USERINFO_KEY);
        Map<String, Object> cfg = new HashMap<>();
        cfg.put("fastdfs_server", PropertyUtil.getProperty("fastdfs_server"));
        cfg.put("websocketurl", PropertyUtil.getProperty("websocketurl"));
        StringBuffer sb = new StringBuffer("");
        if (null == o) {
            logger.info("=========================  wxuser in session is empty======================");
            Map obj = new HashedMap();
            obj.put("openid", "oFvIjw8x1--0lQkUhO1Ta3L59o3c");
            obj.put("nickname", "游客");
            obj.put("headimgurl", "http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJLnWlZ5QwperRWRswicfELLia3cqTuLJapz3jX27VY19mwRianduy9cibSefAlnGRxNH341Qnic5w9aEg/0");
            sb.append("var wxuser=");
            sb.append(JSON.toJSONString(obj));
            sb.append(";");

        } else {
            sb.append("var wxuser=");
            sb.append(JSON.toJSONString(o));
            sb.append(";");
        }
        sb.append("var cfg=");
        sb.append(JSON.toJSONString(cfg));
        sb.append(";");
        ModelAndView mav = new ModelAndView("js");
        mav.addObject("js", sb.toString());
        return mav;
    }
}
