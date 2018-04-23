var cfg = require("../../config.js");
var util = require("../../util/util.js");
Page({

    /**
     * 页面的初始数据
     */

    data: {
        item1: ["京","津","冀","晋","蒙","辽","吉","黑","沪","苏","浙",
            "皖","闽","赣","鲁","豫","鄂","湘","粤","桂","琼","渝","川",
            "贵","云","藏","陕","甘","青","宁","新","台"],
        item2: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
            "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
            "A", "S", "D", "F", "G", "H", "J", "K", "L",
            "Z", "X", "C", "V", "B", "N", "M"],
        item3: [
            "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
            "A", "S", "D", "F", "G", "H", "J", "K", "L",
            "Z", "X", "C", "V", "B", "N", "M"],
        hidden1: true,
        hidden2: true,
        hidden3: true,
        carNo: '',
        sheng: '湘',
        carNo_1: 'N',
        carNo_2: '8',
        carNo_3: '8',
        carNo_4: '8',
        carNo_5: '8',
        carNo_6: '8',
        current_carNo: '',
        clazz_2: 'default',
        clazz_3: 'default',
        clazz_4: 'default',
        clazz_5: 'default',
        clazz_6: 'default',
        recordHidden: true
    },
    //车牌输入获取焦点
    d1: function () {
        var that = this;
        that.setData({
            hidden1: false,
            hidden2: true,
            hidden3: true
        });
    },
    charac: function () {
        var that = this;
        that.setData({
            hidden3: false,
            hidden1: true,
            hidden2: true
        });
    },
    d3: function (e) {
        var that = this;
        that.setData({
            hidden2: false,
            hidden1: true,
            hidden3: true,
            current_carNo: e.currentTarget.dataset.name
        });
    },
    //车牌输入失去焦点
    d2: function () {
        var that = this;
        that.setData({
            hidden1: true,
            hidden2: true,
            hidden3: true
        })
    },
    //获取车牌省份
    sheng: function (e) {
        var that = this;
        console.log(e.currentTarget.dataset.sh);
        that.setData({
            //carNo: e.currentTarget.dataset.sh,
            sheng: e.currentTarget.dataset.sh
        })
        if (that.data.sheng != '') {
            that.setData({
                hidden1: true
            })
        }
    },
    //获取车牌后面的字母
    sheng_charac: function (e) {
        var that = this;
        console.log(e.currentTarget.dataset.ch);
        that.setData({
          //  carNo: that.data.carNo + e.currentTarget.dataset.ch,
            carNo_1: e.currentTarget.dataset.ch
        })
        if (that.data.carNo_1 != '') {
            that.setData({
                hidden3: true
            })
        }
    },
    //获取车牌号码
    other: function (e) {
        var that = this;
        console.log(e.currentTarget.dataset.ot);
        if (that.data.current_carNo == 'carNo_2') {
            that.setData({
                carNo_2: e.currentTarget.dataset.ot,
                hidden2: true,
                clazz_2: 'tap_select'               
            })
        } else if (that.data.current_carNo == 'carNo_3') {
            that.setData({
                carNo_3: e.currentTarget.dataset.ot,
                hidden2: true,
                clazz_3: 'tap_select' 
            })
        } else if (that.data.current_carNo == 'carNo_4') {
            that.setData({
                carNo_4: e.currentTarget.dataset.ot,
                hidden2: true,
                clazz_4: 'tap_select' 
            })
        } else if (that.data.current_carNo == 'carNo_5') {
            that.setData({
                carNo_5: e.currentTarget.dataset.ot,
                hidden2: true,
                clazz_5: 'tap_select' 
            })
        } else if (that.data.current_carNo == 'carNo_6') {
            that.setData({
                carNo_6: e.currentTarget.dataset.ot,
                hidden2: true,
                clazz_6: 'tap_select' 
            })
        }

    },
    //回删车牌
    del: function () {
        var that = this;
        var ss = that.data.carNo;
        console.log(ss);
        var s = ss.split('');
        console.log(s);
        console.log(s.slice(0, -1));
        if (s.slice(0, -1).length == 0) {
            that.setData({
                hidden1: false,
                hidden2: true
            })
        }
        console.log(s.join('').slice(0, -1));
        var s = s.join('').slice(0, -1);
        that.setData({
            carNo: s
        })
        console.log(that.data.carNo.length);

    },
    //确认输入
    ok: function () {
        var that = this;
        that.setData({
            hidden1: true,
            hidden2: true
        })
    },

    search: function () {
        var that = this;
        var carNo = that.data.sheng + that.data.carNo_1 + that.data.carNo_2 + that.data.carNo_3 + that.data.carNo_4 + that.data.carNo_5 + that.data.carNo_6;
        if (that.data.sheng != '' && that.data.carNo_1 != '' && that.data.carNo_2 != '' && that.data.carNo_3 != '' && that.data.carNo_4 != '' && that.data.carNo_5 != '') {
            util.request(cfg.illegalTrafficUrl, { "plateNo": carNo, "start": 0, "limit": 9999 },
                function (data) {
                    console.log(data);
                    that.setData({ list: data.rows, carNo: carNo});
                }
            );
        } else {
            wx.showModal({
                title: '提示',
                content: "车牌号不能为空！"
            });
        }
        that.setData({ recordHidden : false });
    }
})