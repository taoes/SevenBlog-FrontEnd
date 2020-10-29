<template>
  <div class="desktopItem">
    <img :alt="image" :src="image" class="desktopItemPic">
    <div id="content">
      <h1>{{title}}</h1>
      <p v-html="content"></p>
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
    }
  }

  #content h1 {
    margin-left: 25px;
    font-size: 25px;
    color: lightgray;
    margin-top: 15px;
    font-family: "PT Serif", 'Times New Roman', Times, serif;
    text-transform: uppercase;
  }


  #content p {
    margin-left: 20px;
    line-height: 30px;
    text-indent: 2em;
  }


</style>
