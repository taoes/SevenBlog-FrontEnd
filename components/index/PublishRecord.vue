<template>
  <div class="desktopItem" @click="openArticle(bookSlug,slug)">
    <img :alt="coverImgUrl" :src="coverImgUrl" class="desktopItemPic">
    <div id="content">
      <h1 class="recordTitle">{{ title }}</h1>
      <p class="recordContent" v-html="desc"></p>
    </div>
  </div>

</template>


<script>
export default {
  name: 'PublishRecord',
  props: {title: String, desc: String, coverImgUrl: String, bookSlug: String, slug: String},
  data() {
    return {}
  }, methods: {
    openArticle: function (bookSlug, slug) {
      window.open(`/page/book/${bookSlug}/category/${slug}`)
    }
  }
}

</script>
<style scoped>

@media screen and (max-width: 780px) {
  .desktopItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 87%;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .desktopItemPic {
    width: 300px;
    object-fit: contain;
    border-radius: 10px;
  }


}


@media screen and (min-width: 780px) {
  .desktopItem {
    display: flex;
    flex-direction: row;
    width: 67%;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .desktopItemPic {
    width: 300px;
    object-fit: contain;
    border-radius: 10px;
  }
}

#content h1 {
  margin-left: 25px;
  font-size: 25px;
  margin-top: 15px;
  font-weight: bolder;
}


#content p {
  margin-left: 20px;
  line-height: 30px;
  text-indent: 2em;
}


.recordTitle {
  color: #4a4a4a;
  cursor: grab;
  font-weight: normal;
}

.recordContent {
  font-size: 16px;
  color: #040404;
}


</style>

