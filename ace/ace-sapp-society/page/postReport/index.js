var util = require("../../util/util.js");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        content: [],
        toolBar: {
            top: '0px',
            show: false,
            type: '1'
        },
        clickObject: '',
        timer: '',
        showBtn: false,
        coverUrl: '',
        title: '',
        activityId: ''
    },

    onLoad: function(options) {
        let that = this;
        let activityId = options.id;
        if (!activityId) {
            // wx.navigateBack({})
            // return;
            activityId = 2;
        }
        that.data.activityId = activityId;
        that.initdata();
    },

    // 获取列表
    initdata: function() {
        let that = this;
        util.request('http://192.168.2.189/society/www/activity/selectActivityReportByActivityId', {
                activityId: that.data.activityId,
            },
            function(rst) {
                let data = rst.data;
                let contents = null;
                if (data.content) {
                    contents = JSON.parse(data.content);
                }

                wx.hideNavigationBarLoading() //完成停止加载
                wx.stopPullDownRefresh() //停止下拉刷新
                that.setData({
                    content: contents,
                    title: data.title,
                    coverUrl: data.coverUrl
                });
            }
        );
    },

    // 显示工具菜单
    showTool: function(e) {
        var that = this;
        var id = e.currentTarget.id;
        var type = e.currentTarget.dataset.type;
        var height = e.currentTarget.offsetTop + 5;
        if (that.timer) {
            clearTimeout(that.timer);
        }
        that.timer = setTimeout(function() {
            that.cencelClickStyle(true);
        }, 3000);
        that.setData({
                clickObject: id
            },
            (e) => {
                var query = wx.createSelectorQuery();
                query.select('#' + id).boundingClientRect();
                query.exec(function(res) {
                    that.setData({
                        toolBar: {
                            top: height + res[0].height + 'px',
                            show: true,
                            type: type
                        }
                    });
                })
            }
        );
    },
    // 开始修改
    startEdit: function(e) {
        var id = this.data.clickObject;
        var todo = this.getTodo(id);
        this.cencelClickStyle(false);
        todo.editing = true;
        this.updateData(true);
        this.updateStorage();
    },
    // 修改结束
    endEdit: function(e) {
        var todo = this.findEditing();
        var content = e.detail.value
        if (content.trim()) {
            todo.editing = false;
            todo.content = content;
        } else {
            this.data.content.splice(this.getElementIndex(todo.id), 1);
        }
        this.updateData(true);
        this.updateStorage();
    },
    // 获取单个数据信息
    getTodo: function(id) {
        return this.data.content.filter(function(t) {
            return id == t.id;
        })[0];
    },
    // 查找正在修改的元素
    findEditing: function() {
        return this.data.content.filter(function(t) {
            return t.editing == true;
        })[0];
    },

    // 更新渲染
    updateData: function(resetTodos) {
        var data = {};
        if (resetTodos) {
            data.content = this.data.content;
        }
        this.setData(data);
    },
    // 保存在内存
    updateStorage: function() {
        var storage = [];
        this.data.content.forEach(function(t) {
            storage.push({
                id: t.id,
                text: t.text,
                complete: t.complete
            })
        });
        wx.setStorageSync('content', storage);
    },
    // 添加元素
    addElement: function(content, type, editing) {
        var that = this;
        var id = 'e' + new Date().getTime();
        that.data.content.splice(that.getElementIndex(that.data.clickObject), 0, {
            id: id,
            content: content,
            type: type,
            editing: editing,
        });
        that.setData({
            clickObject: id,
        })
        that.updateData(true);
    },
    // 添加文本元素
    addTextElement: function() {
        var that = this;
        that.cencelClickStyle(false);
        that.addElement('', 1, true);
    },
    //获取点击元素所在序列
    getElementIndex: function(id) {
        var len = this.data.content.length;
        var data = this.data.content;
        for (var i = 0; i < len; i++) {
            if (data[i].id == id) {
                return i;
            }
        }
    },
    // 删除元素
    delElement: function() {
        this.data.content.splice(this.getElementIndex(this.data.clickObject), 1);
        this.cencelClickStyle(true);
        this.updateData(true);
    },
    //添加图爿
    addImage(e) {
        var that = this;
        let cover = e.currentTarget.dataset.cover;
        let num = 3;
        if (cover == 'cover') {
            num = 1;
            this.data.isCover = true;
        } else {
            this.data.isCover = false;
        }
        that.cencelClickStyle(false);
        wx.showActionSheet({
            itemList: ['打开照相', '选取现有的'],
            itemColor: '#007aff',
            success(res) {
                if (res.tapIndex === 0) {
                    wx.chooseImage({
                        sourceType: ['camera'],
                        success(res) {
                            that.uploadFileFun(res.tempFilePaths[0]);
                        }
                    })
                } else if (res.tapIndex === 1) {
                    wx.chooseImage({
                        count: num, // 设置最多三张
                        sizeType: ['original', 'compressed'],
                        sourceType: ['album', 'camera'],
                        success(res) {
                            var tempFilePaths = res.tempFilePaths;
                            for (var i = 0; i < tempFilePaths.length; i++) {
                                that.uploadFileFun(tempFilePaths[i]);
                            }
                        }
                    })
                }
            }
        })
    },
    // 清除点击样式
    cencelClickStyle: function(isAll) {
        clearTimeout(this.timer);
        if (isAll) {
            this.setData({
                clickObject: '',
                toolBar: {
                    show: false,
                }
            });
        } else {
            this.setData({
                toolBar: {
                    show: false,
                }
            });
        }

    },
    // 上传文件方法
    uploadFileFun: function(tempFilePaths) {
        var that = this;
        wx.uploadFile({
            url: 'http://zx.huacainfo.com/portal/www/uploadFile.do',
            filePath: tempFilePaths,
            name: 'file',

            formData: {
                collectionName: 'ceshi',
                id: '111'
            },
            success: function(res) {
                var data = JSON.parse(res.data);
                var url = 'http://zx.huacainfo.com/' + data.value[0].fileUrl;
                if (that.data.isCover) {
                    that.setData({
                        form: {
                            coverUrl: url
                        }
                    })
                    return;
                }
                that.addElement(url, 2, false)
            },
            fail: function(res) {
                return null
            },
        })
    },
    onPageScroll: function(e) {

        if (e.scrollTop <= 0) {
            // 滚动到最顶部
            e.scrollTop = 0;
        } else if (e.scrollTop > this.data.scrollHeight) {
            // 滚动到最底部
            e.scrollTop = this.data.scrollHeight;
        }
        if (e.scrollTop > this.data.scrollTop || e.scrollTop >= this.data.scrollHeight) {
            this.setData({
                showBtn: true,
            });
        } else {
            this.setData({
                showBtn: false,
            });
        }
        //给scrollTop重新赋值 
        this.setData({
            scrollTop: e.scrollTop
        })
    },
    postReport: function() {
        util.request('http://192.168.2.189/society/www/activity/findActivityList', {
            category: that.data.category,
            start: that.data.start,
            limit: that.data.limit
        }, function(data) {
            console.log(data.data);
            wx.hideNavigationBarLoading() //完成停止加载
            wx.stopPullDownRefresh() //停止下拉刷新
            that.setData({
                list: that.data.list.concat(data.data),
                Loadingstatus: false,
            });
            if (data.data.length < that.data.limit) {
                that.setData({
                    LoadOver: true,
                });
            }
        });
    },
    saveReport: function() {
        let that = this;
        that.data.status = "1";
        that.updateFun();
    },
    postReport: function() {
        let that = this;
        if (that.data.content.length > 0 && that.data.title && that.data.coverUrl) {
            wx.showModal({
                title: '提示',
                content: '内容不能为空',
            })
        }
    },
    updateFun: function() {
        let that = this;
        util.request('http://192.168.2.189/society/www/activity/updateActivityReport', {
                jsons: JSON.stringify(that.data),
            },
            function(rst) {
                wx.hideNavigationBarLoading() //完成停止加载
                wx.stopPullDownRefresh() //停止下拉刷新
                
            }
        );
    }
})