import com.huacainfo.ace.common.tools.DateUtil;
import org.junit.Test;

import java.util.Date;

/**
 * Created by HuaCai008 on 2018/5/4.
 */
public class TestDemo {


    @Test
    public void test() {

        long day = getDiffDays(DateUtil.getNowDate(), DateUtil.getDate("2018-07-01", DateUtil.DEFAULT_DATE_REGEX));

        System.out.println(day);
    }

    private long getDiffDays(Date begin, Date end) {
        long between = (end.getTime() - begin.getTime()) / 1000;// 除以1000是为了转换成秒
        return between / (24 * 3600);
    }
}
