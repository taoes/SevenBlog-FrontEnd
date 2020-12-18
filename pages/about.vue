<template>
  <div class="aboutContainer">
    <div id="desktopBackground">
      <h1 class="title">燕归来兮</h1>
      <h4 class="subTitle">凡心所向，素履以往，生如逆旅，一苇以航</h4>
      <div id="webSite">
        <a-icon :key="web.url" :theme="web.theme" :type="web.icon" @click="toWebSitePage(web.url)"
                class="websiteIcon"
                v-for="web in webSiteList">
        </a-icon>
      </div>
    </div>


    <div class="linkList">


      <a-divider key="站点推荐" orientation="center">
        <template slot="">
          <span class="linkGroupTitle">站点推荐</span>
        </template>
      </a-divider>
      <div style="width: fit-content;margin-bottom: 50px" v-for="link in linkList">
        <a-card class="card" hoverable>
          <template class="ant-card-actions" slot="actions">
            <a-icon key="eye" type="eye"/>
            <a-icon key="copy" type="copy"/>
            <a-icon key="like" type="like"/>
          </template>
          <a-card-meta :description="link.desc" :title="link.name">
          </a-card-meta>
        </a-card>
      </div>

      <a-divider key="友情链接" orientation="center">
        <template slot="">
          <span class="linkGroupTitle">友情链接</span>
        </template>
      </a-divider>
      <div style="width: fit-content;margin-bottom: 50px" v-for="link in linkList">
        <a-card class="card" hoverable>
          <template class="ant-card-actions" slot="actions">
            <a-icon key="eye" type="eye"/>
            <a-icon key="copy" type="copy"/>
            <a-icon key="like" type="like"/>
          </template>
          <a-card-meta :description="link.desc" :title="link.name"/>
        </a-card>
      </div>
    </div>

    <a-modal
      :footer="[]"
      :visible="wechatVisible"
      @cancel="closeWechatModal"
      @ok="closeWechatModal()"
      title="添加微信"
      width="400px">
      <img :alt="wechatQrCodeUrl" :src="wechatQrCodeUrl" width="100%"/>
    </a-modal>
  </div>
</template>

<script>
    import PCMenu from "../components/PCMenu";


    let linkList = [
        {
            icon: '',
            name: '燕归来兮',
            link: 'https://www.zhoutao123.com',
            desc: '一个专注于后端开发的个人博客，致力于分享，交流的个人站点'
        },
        {
            icon: '',
            name: '燕归来兮',
            link: 'https://www.zhoutao123.com',
            desc: '一个专注于后端开发的个人博客，致力于分享，交流的个人站点'
        }, {
            icon: '',
            name: '燕归来兮',
            link: 'https://www.zhoutao123.com',
            desc: '一个专注于后端开发的个人博客，致力于分享，交流的个人站点'
        }, {
            icon: '',
            name: '燕归来兮',
            link: 'https://www.zhoutao123.com',
            desc: '一个专注于后端开发的个人博客，致力于分享，交流的个人站点'
        }
    ];

    export default {
        components: {PCMenu},
        head() {
            return {title: '关于我'}
        }, data() {
            return {
                wechatQrCodeUrl: 'https://pic.zhoutao123.com/picture/wechat.png',
                wechatVisible: false,
                webSiteList: [],
                linkList
            }
        },

        mounted() {
            this.webSiteList = this.ConstantValue.indexIcon();
        },
        methods: {
            toWebSitePage: function (url) {
                if (url === 'wechat') {
                    this.wechatVisible = true
                    return
                }
                window.open(url, '_blank')
            }, closeWechatModal: function () {
                this.wechatVisible = false
            }
        }
    }
</script>

<style scoped>
  #desktopBackground {
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(160deg, #7474BF 20%, #348AC7 80%);
    object-fit: cover;
    height: 300px;
    width: 100%;
    min-height: 30%;
    justify-content: center;
    align-items: center;
  }


  .title {
    color: white;
    font-size: 45px;
    font-weight: bold;
    font-family: "PT Serif", 'Times New Roman', Times, serif !important;
    transition: all 0.8s linear;
  }

  .subTitle {
    color: white;
    font-size: 20px;
    font-family: "PT Serif", 'Times New Roman', Times, serif !important;
  }

  #webSite {
    display: flex;
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

  .aboutContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  /*  友情链接样式 */
  @media screen and (max-width: 780px) {
    .linkList {
      width: 98%;
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (min-width: 780px) {
    .linkList {
      width: 78%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-top: 50px;
    }
  }

  .linkGroupTitle {
    font-size: 24px;
    color: #7f828b;
  }

  .linkGroupTitle:hover {
    font-size: 25px;
    color: black;
  }

  .card {
    width: 250px;
    height: 190px;
    max-height: 190px;
  }

</style>
