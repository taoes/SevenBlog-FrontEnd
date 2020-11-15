import Vue from 'vue'
import Notification from 'ant-design-vue/lib/notification'
import Message from 'ant-design-vue/lib/message'


let ConstantValue = {
  install(Vue) {
    Vue.prototype.ConstantValue = {
      info: function (message, description) {
        Notification.open({message, description});
      },
      error: function (content) {
        Message.error(content);
      },
      apiPrefix: function () {
        if (process.env.NODE_ENV !== 'production') {
          return "http://localhost:9999"
        } else {
          return 'https://api.zhoutao123.com'
        }
      },
      indexIcon: function () {
        return [
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
      }
    };

  }
};
Vue.use(ConstantValue);
