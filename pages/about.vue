<template>
  <div class="container">
    <div id="desktopBackground">
      <h1>燕归来兮</h1>
      <h4>Welcome To My WebSite</h4>
      <div id="webSite">
        <a-icon :theme="web.theme" :type="web.icon" @click="toWebSitePage(web.url)" class="websiteIcon"
                v-for="web in webSiteList">
        </a-icon>
      </div>
    </div>
  </div>
</template>

<script>
    import PCMenu from "../components/PCMenu";

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
    export default {
        components: {PCMenu},
        head() {
            return {title: '关于我'}
        }, data() {
            return {
                visible: true,
                webSiteList
            }
        }, methods: {
            toWebSitePage: (url) => {
                if (url === 'wechat') {
                    return
                }
                window.open(url, '_blank')
            }
        }
    }
</script>

<style scoped>
  #desktopBackground {
    display: flex;
    flex-direction: column;
    background: url('https://pic.zhoutao123.com/picture/background/bg-contact.jpg');
    object-fit: cover;
    height: 300px;
    width: 100%;
    min-height: 30%;
    justify-content: center;
    align-items: center;
  }


  h1 {
    color: white;
    font-size: 45px;
    font-weight: bold;
    font-family: "PT Serif", 'Times New Roman', Times, serif !important;
    transition: all 0.8s linear;
  }

  h4 {
    color: white;
    font-size: 20px;
    font-family: "PT Serif", 'Times New Roman', Times, serif !important;
  }

  #webSite {
    display: flex;
    margin-top: 20px;
  }


  .websiteIcon {
    margin: 20px;
    font-size: 20px;
    color: white;
    font-weight: 900;
    transition: all .4s;
    -moz-transition: all .4s;
    -webkit-transition: all .4s;
    -o-transition: all .4s;
  }

  .websiteIcon:hover {
    transform: scale(1.4)
  }

</style>
