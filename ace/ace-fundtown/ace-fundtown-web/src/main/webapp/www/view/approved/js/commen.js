var status;

$(function () {
    userInfo();
    initweb();
})


function userInfo() {
    var url = "/fundtown/www/process/getMyVipInfo";
    $.ajaxSettings.async = false;
    $.getJSON(url, function (result) {
        status = result.data.vipStatus;
    });
    $.ajaxSettings.async = true;
}

function initweb() {
    var nodeId = localStorage["nodeId"];
    var url = "/fundtown/www/process/getNodeResList";
    var data = {
        nodeId: nodeId,
    };
    $.getJSON(url, data, function (result) {
        console.log(result);
        viewFileList(result.data['0'], '.fileList');
        viewFileList(result.data['1'], '.fileListTwo');
    });
}


function viewFileList(data, className) {
    if (!data) {
        return;
    }
    $(className).empty();
    for (var i = 0; i < data.length; i++) {
        var p = fileTemplate;
        p = p.replace('[resName]', data[i].resName)
            .replace('[id]', status == 2 ? data[i].id : '');
        $(className).append($(p));
    }
}


var fileTemplate = '<p><a class="" href="/fundtown/www/download/file?id=[id]">[resName]</a></p>';
