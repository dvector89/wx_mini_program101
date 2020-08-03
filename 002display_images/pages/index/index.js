//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imageIndex: 0,
    imageNum: 3,
    startY: 150,
    endY: 0,
    scrollGap: 25
  },

  onLoad: function () {
  },
  
  scrollTouchstart: function (e) {
    console.log('start data0', this.data)
    let py = e.touches[0].pageY;
    console.log('start', py)
    this.setData({
      startY: py
    })
    console.log('start data1', this.data)
  },

  scrollTouchend: function (e) {
    let py = e.changedTouches[0].pageY;
    console.log('end', py);
    this.setData({endY: py});
    console.log('gap', py - this.data.startY)
    let index = 0;
    if (py - this.data.startY > this.data.scrollGap){
      index = this.data.imageIndex + 1;
      if (index == this.data.imageNum){
        index = 0
      }
      this.setData({
        imageIndex: index
      })
      console.log('index', index)
    } else if (this.data.startY - py > this.data.scrollGap) {
      index = this.data.imageIndex - 1;
      console.log('index down', index)
      if (index == -1){
        index = this.data.imageNum - 1;
        console.log('index too low', index)
      }
      this.setData({
        imageIndex: index
      })
      console.log('index', index)
    }
    // this.setData({
    //   startY: 0,
    //   endy: 0,
    //   margintop: 0
    // })
  },


})
