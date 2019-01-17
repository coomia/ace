Page({

  /**
   * 页面的初始数据
   */
  data: {
      array: ['常德市公安交警支队', '武陵区公安交警支队', '鼎城区公安交警支队','经开区公安交警支队'],
      objectArray: [
          {
              id: 0,
              name: '常德市公安交警支队'
          },
          {
              id: 1,
              name: '武陵区公安交警支队'
          },
          {
              id: 2,
              name: '鼎城区公安交警支队'
          },
          {
              id: 3,
              name: '经开区公安交警支队'
          }
      ],
      index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
        index: e.detail.value
    });
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