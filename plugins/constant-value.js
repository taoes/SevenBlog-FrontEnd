import Vue from 'vue'

let ConstantValue = {
  install(Vue) {
    Vue.prototype.ConstantValue = {
      apiPrefix: function () {
        // return 'https://api.zhoutao123.com'
        return 'http://localhost:9999'
      }, indexIcon: function () {
        const webSiteList = [
          {
            title: "语雀文档",
            name: "yuque",
            icon: "yuque",
            theme: 'filled',
            url: "https://www.yuque.com/zhoutao123"
          }, {
            title: "GitHub",
            icon: "github",
            theme: 'filled',
            url: "https://github.com/taoes"
          }, {
            title: "Weibo",
            icon: "weibo-circle",
            theme: 'filled',
            url: "https://weibo.com/zhoutao1230"
          }, {
            title: "知乎",
            icon: "zhihu",
            theme: 'outlined',
            url: "https://www.zhihu.com/people/zhoutao825638"
          }, {
            title: "邮件",
            icon: "mail",
            theme: 'outlined',
            url: "mailto:zhoutao825638@vip.qq.cin"
          }
        ];
        return webSiteList;
      }
    };

  }
};
Vue.use(ConstantValue);
