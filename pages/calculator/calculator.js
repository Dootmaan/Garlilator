// pages/calculator/calculator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [{}, {},{}],
  },

  bindKeyInput: function(e){
    var len=this.data.lists.length;
    var str = e.detail.value;
    // console.log(str);
    console.log(len);
    var index= parseInt(str)%len;
    if(isNaN(index)){
      index=0;
      var i;
      for(i=0;i<str.length;i++){
        index += str.charCodeAt(i);
      }
      index=index%len;
    }
    console.log(index);
    this.data.lists[index]=str;
    // console.log(this.data.lists);
  },

  addList: function () {
    var lists = this.data.lists;
    if(lists.length>=5) {
      this.setData({
        motto:"参数太多了点……"
      }) 
      return;
    } else {
      this.setData({
        motto:""
      })
    }
    var newData = {};
    lists.push(newData);//实质是添加lists数组内容，使for循环多一次  
    this.setData({
      lists: lists,
    })
  },

  delList: function () {
    var lists = this.data.lists;
    if(lists.length<=2) {
      this.setData({
        motto: "别删了，参数太少了"
      })
      return;
    } else {
      this.setData({
        motto: ""
      })
    }
    lists.pop();      //实质是删除lists数组内容，使for循环少一次  
    this.setData({
      lists: lists,
    })
  },

  hashCode: function (str) {
    var hash = 0;
    var i;
    if (str.length == 0) return hash;
    for (i = 0; i < str.length; i++) {
      var char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  },

  calculate: function () {
    var lists = this.data.lists;
    var result = 0;
    var i=0;
    var hash=0;
    for (i=0;i<lists.length;i++) {
      var str = lists[i];
      result+=this.hashCode(str);
    }
    result=result*1.5473;
    result-=parseInt(result);
    this.setData({
      motto: "结果是:\n"+Math.abs(result.toFixed(2)),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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