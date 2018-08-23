var editor, cityCode;


window.onload = function () {
    initWeb();
    initDoc();
    getUserinfo();
    $("#city").click(function (e) {
        SelCity(this, e);
    });
    $("#city_edit").click(function (e) {
        SelCity(this, e);
    });
    $("s").click(function (e) {
        SelCity(document.getElementById("city"), e);
    });
    $('.submit_btn').click(submitForm);


    var singleSelect1 = $('#single-select-1').citySelect({
        dataJson: cityData,
        multiSelect: false,
        whole: false,
        shorthand: true,
        search: true,
        addInputClass: 'form-control',
        onInit: function () {
            console.log(this)
        },
        onTabsAfter: function (target) {
            console.log(target)
        },
        onCallerAfter: function (target, values) {
            console.log(JSON.stringify(values));
            cityCode = values.name;
        }
    });

    // 单选设置城市
    singleSelect1.setCityVal(cityCode);

};

function initWeb() {
    var url = portalPath + '/dict/findListByCategoryId.do?categoryId=152';
    $.getJSON(url, function (result) {
        var navitem = document.getElementById('temp_tags').innerHTML;
        var html = juicer(navitem, {
            data: result,
        });
        $("#tags").html(html);
    })
}


function initDoc() {
    editor = new Simditor({
        textarea: $('#notNull_profile'),
        toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent'],
        upload: {
            url: portalPath + '/files/uploadImage.do', //文件上传的接口地址
            params: null, //键值对,指定文件上传接口的额外参数,上传的时候随文件一起提交
            fileKey: 'file', //服务器端获取文件数据的参数名
            connectionCount: 3,
            leaveConfirm: '正在上传文件'
        }
    });
}

function getUserinfo() {
        var url = "/jxb/counselor/getMyinfo"
        $.getJSON(url, function (result) {
            if (result.status == 0) {
                viewUserinfo(result.value);
                fillForm(result.value)
            }
        })
}


function fillForm(data) {
    for (key in data) {
        if (key.indexOf("Url") != -1) {
            $('.form_' + key).prop("src", data[key]);
            continue
        }
        $('[name=form_' + key + ']').val(data[key]);
    }
    cityCode = data.cityCode;
    editor.setValue(data['profile']);
    var tag = $('#tags .md-checkbox');
    var tags = data["tags"];
    filloption(tag, tags)
    tag = $('#certification .md-radio');
    tags = data["certification"];
    filloption(tag, tags)

}

function filloption(tag, tags) {
    for (var i = 0; i < tag.length; i++) {
        var text = tag.eq(i).find('label').text().trim();
        if (tags.indexOf(text) != -1) {
            tag.eq(i).find('input').attr('checked', true)
        }
    }
    ;
}


function viewUserinfo(data) {
    for (key in data) {
        $('.user-' + key).text(data[key]);
    }
    ;
    $('.user-imagePhotoUrl').prop('src', data['imagePhotoUrl']);
}

function submitForm() {
    var formObject = {
        name: "chineseName",
        mobile: "mobilePhone",
        profile: "notNull_profile",
        certificateNo: "notNull1",
        idCard: "IDcard",
        duration: 'naturalNumber',
        peopleNum: 'naturalNumber'
    }
    for (key in formObject) {
        var idName = formObject[key];
        var result = validateform(idName);
        if (result.status == 0) {
            formObject[key] = result.message;
        } else {
            $('#' + idName).next().text(result.message);
            return
        }
    }
    ;
    var sex = $('input:radio[name="form_sex"]:checked').val();
    formObject.sex = sex;
    var imagePhotoUrl = $('#headimg1').prop('src');
    if (imagePhotoUrl.indexOf("zx.huacainfo.com") == -1) {
        alert("需要上传形象照");
        return
    }
    formObject.imagePhotoUrl = imagePhotoUrl;
    var idCardImgUrl = $('#IDcardz').prop('src');

    if (idCardImgUrl.indexOf("zx.huacainfo.com") == -1) {
        alert("需要上传身份证正面照");
        return
    }
    formObject.idCardImgUrl = idCardImgUrl;


    var idCardImgUrl1 = $('#IDcardf').prop('src');

    if (idCardImgUrl1.indexOf("zx.huacainfo.com") == -1) {
        alert("需要上传身份证反面照");
        return
    }
    formObject.idCardImgUrl1 = idCardImgUrl1;


    var evidenceImgUrl = $('#IDcardsc').prop('src');

    if (evidenceImgUrl.indexOf("zx.huacainfo.com") == -1) {
        alert("需要上传手持身份证照片");
        return
    }
    formObject.evidenceImgUrl = evidenceImgUrl;


    var certification = $('input:radio[name="form_certification"]:checked').next().text();
    formObject.certification = certification.trim();


    var certificateImgUrl = $('#certificateimg').prop('src');

    if (certificateImgUrl.indexOf("zx.huacainfo.com") == -1) {
        alert("需要上传资格证书照片");
        return
    }
    formObject.certificateImgUrl = certificateImgUrl;

    var arr = new Array();
    $('#tags :checkbox:checked').each(function (i) {
        arr[i] = $(this).next().text().trim();
    });
    var tags = arr.join(",");
    if (tags.length = 0) {
        alert("还没有选择您的个人擅长");
        return
    }
    formObject.tags = tags;
    formObject.cityCode = cityCode;
    var url = '/jxb/counselor/updateUserinfo';
    $.post(url, formObject, function (result) {
        if (result.status == 0) {
            alert("信息更新成功");
            return;
        }
        alert("信息更新失败,请稍后再试！");

    })
}
