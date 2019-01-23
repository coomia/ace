var util = require("../../util/util.js");
var cfg = require("../../config.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: 0,
    nList: [],
    yList: [],
    pageType: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      that.setData({
          pageType: options.type
      });
      that.initNList();
      that.initYList();
  },
  changeTab: function(e){
      var that = this;
      that.setData({
          tab: e.target.dataset.index
      });
  },
  /**
   * 获取已采集路段信息
   */
  initYList: function(){
      var that = this;
      util.request(cfg.server + '/taa/www/road/findSectionList', { category: "1"},
          function (res) {
              if (res.status == 0) {
                 that.setData({
                     yList: res.data.rows
                 });
              } else {
                  wx.showModal({
                      title: '提示',
                      content: res.info,
                      success: function (res) { }
                  });
              }

          }
      );
  },
  /**
   * 获取未采集路段信息
   */
  initNList: function(){
      var that = this;
      util.request(cfg.server + '/taa/www/road/findSectionList', { category: "0" },
          function (res) {
              if (res.status == 0) {
                  that.setData({
                      nList: res.data.rows
                  });
              } else {
                  wx.showModal({
                      title: '提示',
                      content: res.info,
                      success: function (res) { }
                  });
              }

          }
      );
  },
  selectRoadSection: function (e) {
        var that = this;

      var roadSectionId = e.currentTarget.dataset.id;
      var roadSectionName = e.currentTarget.dataset.name;
      var skipType = that.data.pageType;
      var startName = e.currentTarget.dataset.startname;
      var endName = e.currentTarget.dataset.endname;
      wx.setStorageSync('roadSectionId', roadSectionId);
      wx.setStorageSync('roadSectionName', roadSectionName);
        if (skipType == 'kb') {
            //快报选择路长
            wx.setStorageSync('tab', 0);
            wx.switchTab({
                url: '../index/index',
            });
        } else if (skipType == 'cj'){
            //路段采集
            wx.setStorageSync('tab', 1);
            wx.setStorageSync('startName', startName);
            wx.setStorageSync('endName', endName)
            wx.switchTab({
                url: '../index/index',
            });
        } 
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