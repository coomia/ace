package com.huacainfo.ace.jxb.web.controller;


import com.huacainfo.ace.common.plugins.wechat.base.MsgControllerAdapter;
import com.huacainfo.ace.common.plugins.wechat.entity.msg.in.InTextMsg;
import com.huacainfo.ace.common.plugins.wechat.entity.msg.in.event.InFollowEvent;
import com.huacainfo.ace.common.plugins.wechat.entity.msg.in.event.InMenuEvent;
import com.huacainfo.ace.common.plugins.wechat.entity.msg.in.event.InQrCodeEvent;
import com.huacainfo.ace.common.plugins.wechat.entity.msg.out.OutTextMsg;
import com.huacainfo.ace.common.plugins.wechat.util.StringUtil;
import com.huacainfo.ace.common.plugins.wechat.util.WeChatUtil;
import com.huacainfo.ace.jxb.service.WeChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Descript:微信转发控制器 <br/>
 * date: 2016/3/28 <br/>
 * User: arvin
 * version 1.0
 */
@Controller
@RequestMapping("/www/wechat")
public class WeChatController extends MsgControllerAdapter {

    @Autowired
    private WeChatService weChatService;

    /**
     * 服务器配置 验证
     *
     * @param req
     * @param resp
     */
    @RequestMapping(method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
    public void getInfo(HttpServletRequest req, HttpServletResponse resp) {
        String signature = req.getParameter("signature");
        String timestamp = req.getParameter("timestamp");
        String nonce = req.getParameter("nonce");
        String echostr = req.getParameter("echostr");
        logger.debug("[jxb]WeChatController.getInfo=>\n" +
                "signature={},timestamp={},nonce={},echostr={}", signature, timestamp, nonce, echostr);

        PrintWriter out = null;
        try {
            out = resp.getWriter();
            if (StringUtil.areNotEmpty(signature, timestamp, nonce)) {
                //读取配置，统一验证
                String token = "79703960f5074e2cae1";
                String encodingAESKey = "f71P6oOXYlabbUJHzFbLJoSfHZxZi7skd09Ks1e6EA6";
                String temp = WeChatUtil.getSign(timestamp, nonce, token);
                if (temp.equals(signature)) {
                    out.print(echostr);
                }
            }
            out.flush();
            out.close();
        } catch (IOException e) {
            logger.error("getInfo.run error", e);
        } finally {
            try {
                if (null != out)
                    out.close();
            } catch (Exception e) {
                logger.error("getInfo.run error：{}", e);
            }
        }
    }

    @RequestMapping(method = RequestMethod.POST, produces = "application/xml;charset=UTF-8")
    public void message(HttpServletRequest req, HttpServletResponse resp) {
        PrintWriter out = null;
        String message = null;
        try {
            req.setCharacterEncoding("UTF-8");
            resp.setCharacterEncoding("UTF-8");
            out = resp.getWriter();
            message = index(req, resp);            //处理微信推送消息
        } catch (Exception e) {
            logger.error("[jxb]message.run error：{}", e);
        }
        try {
            out.print(message);
            out.close();
        } catch (Exception e) {
            logger.error("[jxb]message.run error：{}", e);
        } finally {
            if (null != out) {
                out.close();
            }
        }
    }

    /**
     * 实现父类抽方法，处理关注/取消关注消息
     */
    @Override
    protected String processInFollowEvent(InFollowEvent inFollowEvent) {

        logger.debug("WeChatController.processInFollowEvent[" + inFollowEvent.toString() + "]");

        String responseMsg = "success";//答复微信消息
        String oriId = inFollowEvent.getToUserName();//开发者微信号
        String openId = inFollowEvent.getFromUserName();//发送方帐号（一个OpenID）

        //如果为关注事件
        if (InFollowEvent.EVENT_INFOLLOW_SUBSCRIBE.equals(inFollowEvent.getEvent())) {
            //业务逻辑处理
//            weChatService.generateNewUser(openId);
        }
        // 如果为取消关注事件，将无法接收到传回的信息
        else if (InFollowEvent.EVENT_INFOLLOW_UNSUBSCRIBE.equals(inFollowEvent.getEvent())) {
            //业务逻辑处理
//            wechatToWebService.updateBasCustomer(wechat, openId);
        }

        return responseMsg;
    }

    /**
     * 处理客服文本消息
     *
     * @param inTextMsg
     * @return
     */
    @Override
    protected String processInTextMsg(InTextMsg inTextMsg) {
        logger.debug("processInTextMsg[" + inTextMsg.toString() + "]");

        //讲消息转送客服处理
        OutTextMsg customMsg = null;

        if (null == customMsg) {
            return "success";
        }
        return render(customMsg);

    }

    /**
     * 处理接收到的自定义菜单事件
     *
     * @param inMenuEvent
     * @return
     */
    @Override
    protected String processInMenuEvent(InMenuEvent inMenuEvent) {
        logger.debug("processInMenuEvent.MenuEvent:{}", inMenuEvent.toString());
        String eventKey = inMenuEvent.getEventKey();
        String fromOpenId = inMenuEvent.getFromUserName();
        String toOpenId = inMenuEvent.getToUserName();


        OutTextMsg outMsg = new OutTextMsg(inMenuEvent);
        outMsg.setContent("hello world!,eventKey:" + inMenuEvent.getEventKey());

        //查询自动回复表
//        return render(outMsg);
        return "success";
    }

    /**
     * 处理扫码事件
     *
     * @param inQrCodeEvent
     * @return
     */
    @Override
    protected String processInQrCodeEvent(InQrCodeEvent inQrCodeEvent) {
        //scene场景值，被推荐人fromusername，原始id：tousername(进一步得到sysAccount)
        String scene = inQrCodeEvent.getEventKey();
        if (scene.startsWith("qrscene")) {
            scene = scene.substring(scene.indexOf('_') + 1);
        }
        String openid = inQrCodeEvent.getFromUserName();
        logger.debug(" ===================processInQrCodeEvent[jxb]===================\n" +
                " scene:{},openid={}", scene, openid);
        // 1. 用户未关注时，进行关注后的事件推送： subscribe
        if (InQrCodeEvent.EVENT_INQRCODE_SUBSCRIBE.equals(inQrCodeEvent.getEvent())) {
            weChatService.qrCodeSubscribe(scene, openid);
        }
        // 2. 用户已关注时的事件推送： SCAN
        else if (InQrCodeEvent.EVENT_INQRCODE_SCAN.equals(inQrCodeEvent.getEvent())) {
            weChatService.qrCodeScan(scene, openid);
        }

        OutTextMsg outMsg = new OutTextMsg(inQrCodeEvent);
        outMsg.setContent("hello world!,eventKey:" + inQrCodeEvent.getEventKey());
        return render(outMsg);
    }
}
