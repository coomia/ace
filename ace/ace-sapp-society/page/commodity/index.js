var util = require("../../util/util.js");
var cfg = require("../../config.js");
var WxParse = require("../../util/wxParse/wxParse.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
      siteId: null,
      siteObj: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      that.setData({ siteId: options.id });
      console.log(options.id);

      util.request(cfg.siteDetail, { "commodityId": that.data.siteId },
          function (ret) {
              that.setData({ siteObj: ret.data });
              var detail_content = that.data.siteObj.summary;
              WxParse.wxParse('detail_content', 'html', detail_content, that, 0);
          }
      );
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})