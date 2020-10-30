<template>
  <div id="contentData">
    <div id="contentTitle">
      <h1>{{content.title}}</h1>
    </div>
    <div id="html" v-html="bodyHtml"></div>
  </div>
</template>

<script>
    export default {
        async asyncData({$axios, app, params}) {
            const book = await $axios.$get(`http://localhost:9999/apis/book/${params.link}/category/${params.slug}`);
            app.head.title = `${book.data.title}-燕归来兮`
            const html = book.data.body_html;
            const bodyHtml = !html  ? "" : html.replace(new RegExp('https://cdn.nlark.com/', 'gm'), 'https://api.zhoutao123.com/picture?param=');
            return {content: book.data, bodyHtml, params}
        }, computed: {}
    }
</script>

<style>
  #contentData {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
    background-color: #EFEFEF;
  }

  #contentTitle h1 {
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 40px;
    letter-spacing: 4px;
    font-weight: bolder;
    font-family: "PT Serif", 'Times New Roman', Times, serif;
  }


  @media screen and (min-width: 780px) {
    #html {
      display: flex;
      padding: 50px;
      width: 75%;
      min-height: 1024px;
      margin-bottom: 30px;
      align-items: center;
      background-color: white;
    }
  }


  @media screen and (max-width: 780px) {
    #html {
      padding: 20px;
      width: 100%;
      min-height: 524px;
      margin-bottom: 30px;
      background: white;
      margin-top: 20px;
    }
  }


  /* 修改文章样式*/

  .lake-content-editor-core {
    width: 100% !important;
  }

  .lake-codeblock-content {
    max-width: 100% !important;
    width: 100% !important;
  }

  .lake-drag-image{
    max-width: 100% !important;
  }

</style>
