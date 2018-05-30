var ngControllerName = "angularjsCtrl";
var ngAppName = "angularjsApp";

var app =angular.module(ngAppName, []);
app.controller(ngControllerName,function($scope){

    $("#establishDate").datetimepicker({
        format: "yyyy-mm-dd",
        language: 'zh-CN',
        autoclose: true,
        todayBtn: true,
    });
    $("#birthDate").datetimepicker({
        format: "yyyy-mm-dd",
        language: 'zh-CN',
        autoclose: true,
        todayBtn: true,
    });
    $("#recruitmentDate").datetimepicker({
        format: "yyyy-mm-dd",
        language: 'zh-CN',
        autoclose: true,
        todayBtn: true,
    });
    $("#dzz_establishDate").datetimepicker({
        format: "yyyy-mm-dd",
        language: 'zh-CN',
        autoclose: true,
        todayBtn: true,
    });
    $("#gh_establishDate").datetimepicker({
        format: "yyyy-mm-dd",
        language: 'zh-CN',
        autoclose: true,
        todayBtn: true,
    });

    $scope.insertInformation = function(){
        /*基本信息*/
        var fullName = $("input[name='fullName']").val();
        var realName = $("input[name='realName']").val();
        var companyType = $("#companyType option:checked").val();
        var establishDate = $("input[name='establishDate']").val();
        var crewSize = $("input[name='crewSize']").val();
        var registeredCapital = $("input[name='registeredCapital']").val();
        var fixedAssets = $("input[name='fixedAssets']").val();
        var workingCapital = $("input[name='workingCapital']").val();
        var address = $("input[name='address']").val();

        /*法人代表*/
        var sex = $("#sex option:checked").val();
        var birthDate = $("input[name='birthDate']").val();
        var nativePlace = $("input[name='nativePlace']").val();
        var nationality = $("input[name='nationality']").val();
        var political = $("input[name='political']").val();
        var recruitmentDate = $("input[name='recruitmentDate']").val();
        var education = $("input[name='education']").val();
        var skillJobTitle = $("input[name='skillJobTitle']").val();
        var deptPost = $("input[name='deptPost']").val();
        var societyPost = $("input[name='societyPost']").val();
        var postcode = $("input[name='postcode']").val();
        var fax = $("input[name='fax']").val();
        var email = $("input[name='email']").val();
        var resume = $("textarea[name='resume']").val();
        var achievement = $("textarea[name='achievement']").val();

        /*企业生产经营信息*/
        var ownSpace = $("input[name='ownSpace']").val();
        var tenancySpace = $("input[name='tenancySpace']").val();
        var majorVariety = $("textarea[name='majorVariety']").val();

        /*党组织信息*/
        var companyOrgType = $("input[name='companyOrgType']").val();
        var peopleNum = $("input[name='peopleNum']").val();
        var dzz_establishDate = $("input[name='dzz_establishDate']").val();
        var dutyPersonName = $("input[name='dutyPersonName']").val();    //党组织负责人
        var dutyPersonPhone = $("input[name='dutyPersonPhone']").val();  //负责人联系电话

        /*工会组织信息*/
        var gh_establishDate = $("input[name='gh_establishDate']").val();//工会组织建立时间
        var gh_dutyPersonName = $("input[name='gh_dutyPersonName']").val();//工会组织负责人
        var gh_dutyPersonPhone = $("input[name='gh_dutyPersonPhone']").val();//工会联系电话

        /*构建和谐劳动关系*/
        var laborContractNum = $("input[name='laborContractNum']").val();
        var thirdLaborRelation = $("#thirdLaborRelation option:checked").val();
        var socialInsuranceAddr = $("input[name='socialInsuranceAddr']").val();
        var socialInsuranceNum = $("input[name='socialInsuranceNum']").val();

        /*对社会公益事业做过何种贡献*/
        var xg_work = $("textarea[name='xg_work']").val();     //安排下岗职工再就业
        var education = $("textarea[name='education']").val(); //助学兴教
        var poverty = $("textarea[name='poverty']").val();     //帮困扶贫
        var others = $("textarea[name='others']").val();       //其他

        /*纳税情况*/
        var accTaxAmount = $("input[name='accTaxAmount']").val();
        var yearTaxAmount = $("input[name='yearTaxAmount']").val();

        var data = {
            "basicInfo":{
                "fullName": fullName,
                "realName": realName,
                "companyType": companyType,
                "establishDate": establishDate,
                "crewSize": crewSize,
                "registeredCapital": registeredCapital,
                "fixedAssets": fixedAssets,
                "workingCapital": workingCapital,
                "address": address,
                "ownSpace":ownSpace,
                "tenancySpace":tenancySpace,
                "majorVariety":majorVariety,
                "laborContractNum":laborContractNum,
                "thirdLaborRelation":thirdLaborRelation,
                "socialInsuranceAddr":socialInsuranceAddr,
                "socialInsuranceNum":socialInsuranceNum,
                "accTaxAmount":accTaxAmount,
                "yearTaxAmount":yearTaxAmount
            },
            "legalPerson":{
                "sex": sex,
                "birthDate": birthDate,
                "nativePlace": nativePlace,
                "nationality": nationality,
                "political": political,
                "recruitmentDate": recruitmentDate,
                "education": education,
                "skillJobTitle": skillJobTitle,
                "deptPost": deptPost,
                "societyPost":societyPost,
                "postcode": postcode,
                "fax":fax,
                "email":email,
                "resume":resume,
                "achievement":achievement
            },
            "dang":{
                "companyOrgType":companyOrgType,
                "peopleNum":peopleNum,
                "establishDate":dzz_establishDate,
                "dutyPersonName":dutyPersonName,
                "dutyPersonPhone":dutyPersonPhone
            },
            "gonghui":{
                "establishDate":gh_establishDate,
                "dutyPersonName":gh_dutyPersonName,
                "dutyPersonPhone":gh_dutyPersonPhone,
            },
            "contribute":[
                {
                    "itemCode": "1",
                    "itemName":"安排下岗职工再就业",
                    "itemValue":xg_work
                },
                {
                    "itemCode": "2",
                    "itemName":"助学兴教",
                    "itemValue":education
                },
                {
                    "itemCode": "3",
                    "itemName":"帮困扶贫",
                    "itemValue":poverty
                },
                {
                    "itemCode": "4",
                    "itemName":"其他",
                    "itemValue":others
                }
            ]
        }
        $.ajax({
            url: "/fop/www/insertAssociationInfo",
            type:"post",
            async:false,
            data:{fullName:fullName, phoneNumber:phoneNumber, address: address, directorNum: directorNum,
                viceNum :viceNum, pname: pname, assPost: assPost, phoneNum: phoneNum, companyName: companyName},
            success:function(result){
                if(result.status == 0) {
                    console.log(result);
                    layer.alert(result.errorMessage, {
                        icon: 1,
                        skin: 'myskin'
                    });
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                }else {
                    layer.alert(result.errorMessage, {
                        icon: 5,
                        skin: 'myskin'
                    });
                }
            },
            error:function(){
                layer.alert("系统服务内部异常！", {
                    icon: 5,
                    skin: 'myskin'
                });
            }
        });
    }
});
