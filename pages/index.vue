<template>
  <div class="desktop">
    <div id="desktopBackground">
      <h1 id="title">燕归来兮</h1>
      <h4 id="subTitle">凡心所向，素履以往，生如逆旅，一苇以航</h4>
      <div id="webSite">
        <a-icon :key="web.url" :theme="web.theme" :type="web.icon" @click="toWebSitePage(web.url)"
                class="websiteIcon"
                v-for="web in webSiteList">
        </a-icon>
      </div>
    </div>
    <div id="itemList">
      <template v-for="item of dataOfItem">
        <DesktopItem :content="item.content" :image="item.image" :title="item.title"/>
        <a-divider/>
      </template>
    </div>
    <a-modal
      title="添加微信"
      :visible="wechatVisible"
      width="400px"
      @ok="closeWechatModal()"
      @cancel="closeWechatModal"
      :footer="[]">
      <img src="https://pic.zhoutao123.com/picture/wechat.png" width="100%"/>
    </a-modal>
  </div>
</template>

<script>

  import DesktopItem from "../components/index/DektopItem.vue";

  const dataOfItem = [
    {
      image: 'https://pic.zhoutao123.com/blog/img/item1.jpg',
      title: '若是初心未改，多应此意须同',
      content: `在大学的时候，编程是我的兴趣，也是我当时给自己定位的职业方向。参加工作之后，随着编程经验的积累，我越来越发现自己的只是匮乏，从前端到后端端，从移动端到Web端，技术之广阔令人目不暇接。<br>作为一个开发人员，我们要学不仅仅是编码，而是要知道如何用代码创造价值，需要怎么做才能编写好的代码？`
    }, {
      image: 'https://pic.zhoutao123.com/blog/img/item2.jpeg',
      title: '玲珑骰子安红豆，入骨相思知不知',
      content: `曾经的我以为编程是我的一切，有的时候我甚至幼稚的将工作放在生活之前！但随着参加工作的时候越久，我才明白努力工作是为了更好地生活，我们的终极目标是更好地生活，也要坚信: <b>永远相信美好的事情即将发生</b>！！！`
    }, {
      image: 'https://pic.zhoutao123.com/blog/img/item3.jpeg',
      title: '长风破浪会有时,直挂云帆济沧海',
      content: `不是每个人都应该去建造一座水晶大教堂，但是每个人都应该拥有自己的梦想，设计自己的梦想，追求自己的梦想，实现自己的梦想。曾经的我们有着多么豪情的梦想，随着时间的流逝，我们也越来越明白梦想的遥不可及， 但梦想还是要有的 万一实现了呢？`
    }
  ];

  export default {
    name: 'Home',
    head() {
      return {title: '燕归来兮的个人网站'}
    },
    data() {
      return {
        wechatVisible: false,
        webSiteList: [],
        dataOfItem
      }
    },
    mounted() {
      this.webSiteList = this.ConstantValue.indexIcon();
    },
    components: {DesktopItem},
    methods: {
      toWebSitePage: function (url) {
        if (url === 'wechat') {
          this.wechatVisible = true
          return
        }
        window.open(url, '_blank')
      }, closeWechatModal: function () {
        this.wechatVisible = false;
      }
    }
  }
</script>

<style scoped>
  #desktopBackground {
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(160deg, #7474BF 20%, #348AC7 80%);
    /*background: url('https://pic.zhoutao123.com/picture/background/bg-contact.jpg');*/
    object-fit: cover;
    height: 300px;
    width: 100%;
    min-height: 30%;
    justify-content: center;
    align-items: center;
  }

  /*  条目样式*/

  #itemList {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }


  #title {
    color: white;
    font-size: 50px;
    transition: all 0.8s linear;
    font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif !important;
  }

  #subTitle {
    color: white;
    font-size: 20px;
    font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif !important;
  }

  #title:hover {
    letter-spacing: 4px;
    font-size: 60px;
    transition: all 0.5s linear;
    margin-top: -20px;
    color: snow;
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

