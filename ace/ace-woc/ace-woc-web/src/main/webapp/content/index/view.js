$(function () {
    viewEchart1();
    viewEchart2();
    viewEchart3();
    viewEchart4();
    viewTopNumber();
});

function getHours() {
    var date = new Date();
    return date.getHours();
}

function viewEchart1() {
    var url = contextPath + '/www/data/interval';
    data = {}
    $.getJSON(url, data, function (result) {
        var dataLine = [];
        for (var i = 0; i < getHours() + 1; i++) {
            dataLine.push(result.countMap[result.interval[i]]);
        }
        ;
        option1.series[0].data = dataLine;
        ct1.setOption(option1);
    });
}

function viewEchart2() {
    var url = contextPath + '/www/data/dayInterval';
    data = {}
    $.getJSON(url, data, function (result) {
        var keylue = result.countMap;
        var xdata = [];
        var seriesdata = [];
        for (var key in keylue) {
            xdata.unshift(key);
            seriesdata.unshift(keylue[key]);
        }
        option2.xAxis[0].data = xdata;
        option2.series[0].data = seriesdata;
        ct2.setOption(option2);
    });
}

function viewEchart3() {
    var url = contextPath + '/www/data/site';
    data = {}
    $.getJSON(url, data, function (result) {
        if (result.siteList.length) {
            var siteBar = [];
            var dataBar1 = [];
            var dataBar2 = [];
            var data = result.siteList;
            for (var i = 0; i < data.length; i++) {
                siteBar.push(data[i].siteName);
                dataBar1.push(data[i].trafficCount);
                dataBar2.push(data[i].illegalCount);
            }
            option3.xAxis[0].data = siteBar;
            option3.series[0].data = dataBar1;
            option3.series[1].data = dataBar2;
            ct3.setOption(option3);
        }
    });
}

function viewTopNumber() {
    var url = contextPath + '/www/data/statistics';
    data = {}
    $.getJSON(url, data, function (result) {
        for (var key in result) {
            $('#' + key).text(result[key]);
        }
    });
}

function viewEchart4() {
    var url = contextPath + '/www/data/casesStatistics';
    data = {}
    $.getJSON(url, data, function (result) {
        var numbers
        if (result.perfectionCases == 0 || result.unauditedCases == 0) {
            numbers = 0;
        } else {
            numbers = toDecimal((result.perfectionCases / result.unauditedCases) * 100);
        }
        option4.series[0].data[0].value = numbers;
        ct4.setOption(option4);
    });
}


function toDecimal(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return;
    }
    f = Math.round(x * 100) / 100;
    return f;
}