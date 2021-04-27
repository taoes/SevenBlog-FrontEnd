<template>
  <div class="desktop">
    <div class="desktopBackground">
      <h1 id="title">燕归来兮</h1>
      <span id="subTitle">凡心所向，素履以往，生如逆旅，一苇以航</span>
      <div id="webSite">
        <a-icon :key="web.url" :theme="web.theme" :type="web.icon" @click="toWebSitePage(web.url)"
                class="websiteIcon"
                v-for="web in webSiteList">
        </a-icon>
      </div>
    </div>
    <div id="publishRecords" class="itemList">
      <a-divider orientation="center" style="margin-bottom: 20px">
        <template slot="">
          <h3>最新发布</h3>
        </template>
      </a-divider>
      <template v-for="(item,index) in records">
        <PublishRecord :title="item.title" :desc="item.desc"
                       :bookSlug="item.bookSlug"
                       :slug="item.slug"
                       :coverImgUrl="articleCoverImg[index]"></PublishRecord>
      </template>
    </div>
    <div style="height: 40px"></div>
  </div>
</template>

<script>


import {domain} from '@/plugins/config'

let articleCoverImg = []

for (let i = 1; i < 11; i++) {
  articleCoverImg.push("https://pic.zhoutao123.com/blog/img/" + i + ".jpeg")
}

export default {
  name: 'Home',
  head() {
    return {title: '燕归来兮的个人网站'}
  },
  async asyncData({$axios, app, params}) {
    let records = await $axios.$get(`${domain}/book_article/record`)
    return {records}
  },
  data() {
    return {
      articleCoverImg,
      records: [],
      webSiteList: []
    }
  }, beforeMount() {
    this.webSiteList = this.ConstantValue.indexIcon();
  }, methods: {
    toWebSitePage: function (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>

.desktop {
  margin-bottom: 40px;
}

.desktopBackground {
  display: flex;
  flex-direction: column;
  background: url('https://www.qikqiak.com/img/posts/photo-1531826912410-2811a685b572.jpeg') no-repeat 51% 54%;
  /*background-image: linear-gradient(160deg, #7474BF 20%, #348AC7 80%);*/
  /*background: url('https://pic.zhoutao123.com/picture/background/bg-contact.jpg');*/
  object-fit: cover;
  height: 300px;
  width: 100%;
  min-height: 30%;
  justify-content: center;
  align-items: center;
}

/*  条目样式*/

.itemList {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 90px;
}


#title {
  color: white;
  font-size: 50px;
  transition: all 0.8s linear;
  font-weight: bolder;
  text-shadow: 1px 1px 3px #000;
}

#subTitle {
  color: white;
  font-size: 20px;
  text-shadow: 1px 1px 3px #000;
}

#title:hover {
  letter-spacing: 4px;
  /*font-size: 60px;*/
  transition: all 0.5s linear;
  margin-top: -20px;
  text-shadow: 1px 1px 3px #000;
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

