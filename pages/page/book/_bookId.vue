<template>

  <div id="bookCategory">
    <h1 id="bookTitle">{{book.title}}</h1>
    <span>{{book.subTitle}}</span>


    <div id="content">

      <template v-for="category in this.categoryList">
        <a-divider :key="category.slug" orientation="left" style="width: 100%;margin-top: 30px"
                   v-if="category.depth === 1">
          <p @click="toContent(book.linkUrl,category.slug)" class="title1">
            {{category.title}}
          </p>
        </a-divider>

        <template v-else>
          <p :class="'title' + category.depth"
             :style="{marginLeft:10 * category.depth + 'px'}"
             @click="toContent(book.linkUrl,category.slug)">
            {{category.title}}
          </p>
        </template>

      </template>
    </div>


  </div>


</template>


<script>
    export default {
        async asyncData({$axios, app, params}) {
            const categoryList = await $axios.$get(`http://localhost:9999/apis/book/${params.bookId}/category`);
            const book = await $axios.$get(`http://localhost:9999/apis/book/${params.bookId}`);
            app.head.title = `${book.title}-燕归来兮`;
            return {categoryList, book}
        },
        head() {
            return {}
        },
        data: function () {
            return {
                categoryList: [],
                bookId: 0
            }
        },
        created: function () {
            this.bookId = this.$route.params.bookid;
        }, methods: {
            toContent(book, slug) {
                window.location.href = `/page/book/${book}/category/${slug}`
            }
        }
    }
</script>

<style scoped>
  #bookCategory {
    width: 100%;
    height: 100%;
    min-height: 1024px;
    background-color: #EFEFEF;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /*  图书标题*/
  #bookTitle {
    font-family: "PT Serif", 'Times New Roman', Times, serif;
    margin-top: 40px;
    font-weight: bold;
    font-size: 40px;
    letter-spacing: 4px;
  }

  @media screen and (min-width: 780px) {
    #content {
      padding: 50px;
      width: 75%;
      min-height: 1024px;
      margin-bottom: 30px;
      background: white;
      margin-top: 40px;
    }
  }


  @media screen and (max-width: 780px) {
    #content {
      padding: 20px;
      width: 100%;
      min-height: 524px;
      margin-bottom: 30px;
      background: white;
      margin-top: 20px;
    }
  }


  .title1 {
    font-size: 20px;
    padding-top: 20px;
    cursor: pointer;
    width: fit-content;
    line-height: 1;
    color: #010101;
  }

  .title2 {
    font-size: 16px;
    margin-left: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    padding: 4px;
    transition: all .1s;
    -moz-transition: all .1s;
    -webkit-transition: all .1s;
    -o-transition: all .1s;
  }

  .title3{
    transition: all .1s;
    -moz-transition: all .1s;
    -webkit-transition: all .1s;
    -o-transition: all .1s;
  }


  .title2:hover, .title3:hover {
    color: #4a4a4a;
    font-weight: 700;
    transform: scale(1.1)

  }
</style>
