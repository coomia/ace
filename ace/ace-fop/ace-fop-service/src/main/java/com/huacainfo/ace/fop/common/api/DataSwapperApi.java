package com.huacainfo.ace.fop.common.api;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by HuaCai008 on 2018/6/12.
 */
public class DataSwapperApi {
//    public static final String

    private static Map<String, String> DATA_PROVIDER = new HashMap<>();

    private static Map<String, String> API_KEY = new HashMap<>();

    static {
        DATA_PROVIDER.put("sswj", "市商务局");//2
        DATA_PROVIDER.put("szjj", "市质监局");//1
        DATA_PROVIDER.put("ssfj", "市司法局");//1
        DATA_PROVIDER.put("sgsj", "市国税局");//3
        DATA_PROVIDER.put("sjxw", "市经信委");//1
        DATA_PROVIDER.put("srsj", "市人社局");//1
        DATA_PROVIDER.put("skjj", "市科技局");//3
        DATA_PROVIDER.put("sajj", "市安监局");//1
        DATA_PROVIDER.put("sdsj", "市地税局");//3
        DATA_PROVIDER.put("sgsj", "市工商局");//6

        //市商务局_商务领域诚信经营示范企业
        API_KEY.put("sswj_swlycxjysfqy", "32303138303630363134353431353130343930302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市商务局_招商引资投产项目基本情况信息
        API_KEY.put("sswj_zsyztcxmjbqkxx", "32303138303630363134343131343130343830302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市质监局_名牌产品信息
        API_KEY.put("szjj_mpcpxx", "32303138303630363134333632393130343730302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市司法局_考核合格的律师事务所信息
        API_KEY.put("ssfj_khhgdlsswsxx", "32303138303630363134323130363130343630302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市国税局_税收违法违章公告信息
        API_KEY.put("sgsj_sswfwzggxx", "32303138303630363132303433333130343530302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市国税局_税务登记信息
        API_KEY.put("sgsj_swdjxx", "32303138303630363038353334393130343330302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市国税局_纳税人信用等级信息
        API_KEY.put("sgsj_nsrxydjxx", "32303138303630353137343930343130343230302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市经信委_常德市园区攻坚主要经济指标完成情况
        API_KEY.put("sjxw_cdsyqgjzyjjzbwcqk", "32303138303630353137303130313130343130302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市人社局_企业养老保险单位参保信息
        API_KEY.put("srsj_qyylbxdwsbxx", "32303138303630353136353735343130343030302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市科技局_有效发明专利信息
        API_KEY.put("skjj_yxfmzlxx", "32303138303630353136343833353130333930302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市科技局_科技项目申报单位产品基本信息
        API_KEY.put("skjj_kjxmsbdwcpjbxx", "32303138303630353136343433343130333830302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市科技局_科技进步奖知识产权证明信息
        API_KEY.put("skjj_kjjbjzscqzmxx", "32303138303630353136313731303130333730302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市安监局_行政处罚信息（单位）
        API_KEY.put("sajj_xzcfxx_dw", "32303138303630353135353330363130333630302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市地税局_年度纳税人信用等级信息
        API_KEY.put("sdsj_ndnsrxydjxx", "32303138303630353135353132303130333530302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市地税局_税收违法违规公告信息
        API_KEY.put("sdsj_sswfwgggxx", "32303138303630363134353731353130353030302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市地税局_税务登记信息
        API_KEY.put("sdsj_swdjxx", "32303138303630353039333234363130333330302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市工商局_失信记录信息
        API_KEY.put("sgsj_sxjlxx", "32303138303630343138303134343130333230302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市工商局_动产抵押登记信息
        API_KEY.put("sgsj_dcdydjxx", "32303138303630343137353130393130333130302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市工商局_企业变更记录信息
        API_KEY.put("sgsj_qybgjlxx", "32303138303630343137343530303130333030302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市工商局_企业经营异常名录信息
        API_KEY.put("sgsj_qyjyycmlxx", "32303138303630343137323230323130323830302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市工商局_投资人股权质押信息
        API_KEY.put("", "32303138303630343137313230363130323730302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");
        //市工商局_行政处罚信息
        API_KEY.put("sgsj_xzcfxx", "32303138303630343137333834313130323930302331383931656366342d316265302d346139322d393834362d3161f2f20dabf4af06cb6fcd");

    }


}
