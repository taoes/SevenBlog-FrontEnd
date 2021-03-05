<template>
  <div class="desktopItem">
    <img :alt="image" :src="image" class="desktopItemPic">
    <div id="content">
      <h1 class="descTitle">{{title}}</h1>
      <p class="content" v-html="content"></p>
    </div>
  </div>
</template>


<script>

    export default {
        name: "DesktopItem",
        props: {title: String, content: String, image: String}
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
    font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif;
  }


  #content p {
    margin-left: 20px;
    line-height: 30px;
    text-indent: 2em;
  }


  .descTitle {
    color: #4a4a4a;
    font-weight: normal;
  }

  .content {
    font-size: 14px;
    color: #040404;
  }


</style>
