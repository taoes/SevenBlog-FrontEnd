<template>
  <div class="aboutContainer">
    <div class="desktopBackground">
      <h1 class="title">燕归来兮</h1>
      <h4 class="subTitle">凡心所向，素履以往，生如逆旅，一苇以航</h4>
      <div id="webSite">
        <a-icon :key="web.url" :theme="web.theme" :type="web.icon" @click="toWebSitePage(web.url)"
                class="websiteIcon"
                v-for="web in webSiteList">
        </a-icon>
      </div>
    </div>


    <a-divider key="站点推荐" orientation="center">
      <template slot="">
        <span class="linkGroupTitle">站点推荐</span>
      </template>
    </a-divider>
    <div class="linkList">
      <a-list :data-source="website" item-layout="horizontal" style="width: 100%">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a-list-item-meta :description="item.desc">
            <a :href="item.link" slot="title" target="_blank">{{ item.name }}</a>
            <img
              :src="item.icon === undefined?commonWebLogoUrl:item.icon"
              class="icon"
              slot="avatar"
              width="50px"
            />
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>


    <a-divider key="友情链接" orientation="center">
      <template slot="">
        <span class="linkGroupTitle">友情链接</span>
      </template>
    </a-divider>

    <div class="linkList">
      <a-list :data-source="linkList" item-layout="horizontal" style="width: 100%">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a-list-item-meta :description="item.desc">
            <a :href="item.link" slot="title">{{ item.name }}</a>
            <img
              :src="item.icon === undefined?commonWebLogoUrl:item.icon"
              alt=""
              slot="avatar"
              width="50px"/>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>


    <a-divider key="友情链接" orientation="center">
      <template slot="">
        <span class="linkGroupTitle">链接申请</span>
      </template>
    </a-divider>
    <div class="linkList linkAdd">
      <div style="margin: 15px;text-indent: 1rem" >
        <p>
          友链的作用就是让来的读者可以更容易的得到他们想要的东西或者去有需求的地方，所以现在友情链接基本上都是和技术相关的网站！如果你是一个喜欢写作的人并且有恒心去坚持的人，博主非常乐意和你做朋友并且交换友情链接的</p>
        <h3>要求</h3>
        <p>
          为了读者负责，所以需要把把关，有几个小小的要求，只要用心的站长或者博主都满足的 <br><br>
          1. 需要网站建立三个月以上的技术型或者资源分享型网站，主要防止三天打鱼两天晒网的网站 <br>
          2. 喜欢习作有恒心坚持的，抛弃整站内容大部分都是复制或者无脑CV的网站 <br>
          3. 网站需要有能稳定运行的条件，三天两头进不去的网站也是要抛弃的<br>
          4. 网站内容违反国家法律法规的或者擦边球的,例如博彩,涉及政治等概不接受<br>
          5. 可以是其他博客平台的网站链接，比如 CSDN /知乎等，但不接受 QQ 空间等娱乐平台链接 <br>
        </p>

        <br><br>
        <h3>惯例</h3>
        <p>
          一般既然接受了友链，就会一直坚持着，但是如果有以下情况的话，那我就会移除链接<br><br>
          1. 网站内容改版为不符合当初结为友链的<br>
          2. 网站关闭或者性能不足以稳定运行的，经常出现无法访问的<br>
          3. 网站处于无人打理或者无原创内容,大量采集内容的或者近1年未更新博客的<br>
        </p>

        <br><br>
        <h3>申请</h3>
        <p>
          如果您感觉您的网站符合这些要求，并且有意向结为友链的，可以这么联系到我，欢迎新朋友的加入<br><br>
          1. 联系方式: 在下面的留言区域留言等<br>
          2. 留言内容为:网站名称, 网址，图标链接，网站说明等等<br>
          3. 博主会在24小时之内加到友情链接中并显示<br>
        </p>
      </div>


      <a-comment style="width: 100%">
        <div slot="content">
          <a-form-item style="width: 100%">
            <a-textarea :value="linkContent" @change="linkContentChange" rows="4"/>
          </a-form-item>
          <a-form-item>
            <a-button @click="submitLinkRequest" style="margin-top: 10px" type="primary">
              <a-icon type="check"/>
              &nbsp;提交
            </a-button>

          </a-form-item>
        </div>
      </a-comment>
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

    let website = [
        {
            icon: 'https://pic.zhoutao123.com/blog/logo/meituan.png',
            name: '美团技术团队',
            link: 'https://tech.meituan.com/',
            desc: '美团技术团队以浓厚的学习和分享氛围享誉业界：每天不止一场内部技术讲座与分享，还有荟萃业界专家的TopTalk，藏书近万的P2P图书馆，帮助同学拓展视野，追求卓越；每年定期举行的Hackathon、Ideathon和MDD Cup算法大赛，激发无限创意；当然还有业内已经有口皆碑的美团技术团队博客与微信公众号（meituantech），每月一次公开的技术沙龙，与同行切磋交流，不亦乐乎……'
        },
        {
            name: 'IBM Developer',
            link: 'https://developer.ibm.com/zh/',
            desc: '专为开发者打造的技术资源平台。在这里，您可以掌握前沿趋势，获取开源代码，加入全球性社区。开发所需，我们皆有！'
        },
        {
            icon: 'https://pic.zhoutao123.com/blog/logo/runoob.png',
            name: 'Running Noob',
            link: 'https://www.runoob.com/',
            desc: '致力于推广各种编程语言技术，所有资源是完全免费的，并且会根据当前互联网的变化实时更新本站内容'
        },
        {
            name: 'HelloGithub',
            link: 'https://hellogithub.com/',
            desc: '分享 GitHub 上 有趣、入门级的开源项目'
        },
    ];


    let linkList = [
        {
            icon: 'https://pic.zhoutao123.com/blog/logo/love.png',
            name: '燕归来兮 & 影子不长',
            link: 'https://love.zhoutao123.com',
            desc: '我们一路走来的点点滴滴，记录生活也要感谢生活'
        },
        {
            icon: 'https://pic.zhoutao123.com/blog/logo/awe.png',
            name: 'Awe',
            link: 'https://www.aweew.com/',
            desc: '一名非典型程序猿，熟悉各种系统架构设计，对JVM有深入的理解'
        },
        {
            icon: 'https://pic.zhoutao123.com/blog/logo/juedai.png',
            name: '绝代锋华',
            link: 'https://www.jianshu.com/u/f208df48d874',
            desc: '不能因为眼前的黑暗，你就以为没有光明'
        },
    ];

    export default {
        components: {PCMenu},
        head() {
            return {title: '推荐'}
        }, data() {
            return {
                linkContent: '',
                wechatQrCodeUrl: 'https://pic.zhoutao123.com/picture/wechat.png',
                commonWebLogoUrl: 'https://pic.zhoutao123.com/blog/logo/common_web.png',
                wechatVisible: false,
                webSiteList: [],
                linkList, website
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
            }, linkContentChange: function (e) {
                this.linkContent = e.target.value;
            }, submitLinkRequest: function () {
                if (!this.linkContent || this.linkContent === '') {
                    this.ConstantValue.error("提交失败", "友情链接内容不能为空");
                    return
                }
                let host = this.ConstantValue.apiPrefix();
                let data = {
                    name: "友链申请",
                    content: this.linkContent,
                    url: '5',
                    bookName: 'link',
                    slug: 'link'
                };
                this.$axios.post(`${host}/book/comment`, data);
                this.ConstantValue.info("提交成功", "友情链接内容提交完成");
            }
        }
    }
</script>

<style scoped>
  .desktopBackground {
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
    background-color: #EFEFEF;
    flex-direction: column;
    align-items: center;
    min-height: 1024px;
  }


  /*  友情链接样式 */
  @media screen and (max-width: 780px) {
    .linkList {
      width: 100%;
      background-color: white;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .ant-list-item {
      padding-left: 10px;
      padding-right: 10px;
    }

    .linkAdd {
      width: 100% !important;
    }
  }

  @media screen and (min-width: 780px) {
    .linkList {
      width: 75%;
      display: flex;
      flex-wrap: wrap;
      padding: 20px;
      height: fit-content;
      margin-bottom: 50px;
      background-color: white;
      margin-top: 50px;
    }

    .linkAdd {
      width: 75% !important;
    }
  }

  .linkGroupTitle {
    font-size: 24px;
    color: black;

  }

  .linkGroupTitle:hover {
    font-size: 25px;
    color: #7f828b;
  }


</style>
