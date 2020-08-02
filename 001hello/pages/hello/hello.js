var utils = require('../../utils/utils.js');
// util vs utils: typo error

Page({
  data: {},
  // 由于缓存的原因，真机调试的时候，显示可能会保持上次的结果。需要在手机上，点击重新进入
  onLoad: function() {
    var time = utils.formatTime(new Date());
    this.setData({
      time: time
    });
  }
})