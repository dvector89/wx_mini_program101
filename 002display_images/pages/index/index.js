//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imageIndex: 1,
    imageNum: 3,
    startY: 0,
    endY: 0,
    scrollGap: 80
  },

  onLoad: function () {
  },

  scrollTouchstart: function (e) {
    let py = e.touches[0].pageY;
    console.log(py)
    this.setData({
      starty: py
    })
  },

  scrollTouchend: function (e) {
    let py = e.changedTouches[0].pageY;
    this.setData({endY: py});
    if (py - this.data.startY > this.data.scrollGap){
      let index = this.data.imageIndex + 1;
      if (index >= this.data.imageNum){
        index = 0
      }
      this.setData({
        imageIndex: index
      })
    } else if (this.data.startY - py > this.data.scrollGap) {
      index = this.data.imageIndex - 1;
      if (index == 0){
        index = this.data.imageNum - 1
      }
      this.setData({
        imageIndex: index
      })
    }
    this.setData({
      starty: 0,
      endy: 0,
      margintop: 0
    })
  },


})
