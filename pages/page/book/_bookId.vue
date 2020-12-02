<template>

  <div id="bookCategory">
    <div id="categoryBackDiv">
      <h1 id="bookTitle">{{book.title}}</h1>
      <span id="subBookTitle">{{book.subTitle}}</span>
    </div>
    <div id="content">
      <div id="contentList">
        <template v-for="category in this.categoryList">
          <a-divider :key="category.slug" orientation="left"
                     class="dividerLine"
                     v-if="category.depth === 1">
            <p @click="toContent(category.slug)" class="title1">
              {{category.title}}
            </p>
          </a-divider>

          <template v-else>
            <p :class="'title' + category.depth"
               :style="{marginLeft:20 * category.depth + 'px'}"
               @click="toContent(category.slug)">
              {{category.title}}
            </p>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    async asyncData({$axios, app, params}) {
      const categoryList = await $axios.$get(
        `http://localhost:9999/apis/book/${params.bookId}/category`);
      const book = await $axios.$get(`http://localhost:9999/apis/book/${params.bookId}`);
      app.head.title = `${book.title}-燕归来兮`;
      return {categoryList, book, params}
    },
    data: function () {
      return {
        categoryList: [],
        bookId: 0, actions: [
          {type: 'star-o', text: '156'},
          {type: 'like-o', text: '156'},
          {type: 'message', text: '2'},
        ]
      }
    },
    created: function () {
      this.bookId = this.$route.params.bookid;
    }, methods: {
      //跳转到内容页面
      toContent(slug) {
        let {bookId} = this.params;
        let {linkUrl} = this.book;
        window.location.href = `/page/book/${linkUrl}/category/${slug}?bookId=${bookId}`
      }
    }
  }
</script>

<style scoped>
  #bookCategory {
    width: 100%;
    height: 100%;
    min-height: 1024px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /*  图书标题*/
  #bookTitle {
    margin-top: 20px;
    font-weight: bold;
    font-size: 50px;
    letter-spacing: 4px;
    color: white;
    text-align: center;
    text-transform: uppercase;
  }


  #subBookTitle {
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif;
    color: white;
  }

  @media screen and (min-width: 780px) {
    #content {
      display: flex;
      justify-content: center;
      padding: 50px;
      width: 100%;
      background: #FAFAFA;
      min-height: 1024px;
      margin-bottom: 30px;
    }

    #contentList {
      width: 75%;
      background: white;
      padding: 20px;
    }
  }


  @media screen and (max-width: 780px) {
    #content {
      padding: 20px;
      width: 100%;
      min-height: 524px;
      margin-bottom: 30px;
      background: white;
    }

    #contentList {
      width: 100%;
      background: white;
    }
  }


  .title1 {
    font-size: 25px;
    padding-top: 10px;
    cursor: pointer;
    width: fit-content;
    line-height: 1;
    color: black;
    font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif;
  }

  .title2 {
    font-size: 18px;
    margin-left: 40px;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    color: #001529;
    padding: 4px;
    transition: all .1s;
    -moz-transition: all .1s;
    -webkit-transition: all .1s;
    -o-transition: all .1s;
    font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif;
  }

  .title3 {
    font-size: 15px;
    transition: all .1s;
    -moz-transition: all .1s;
    -webkit-transition: all .1s;
    -o-transition: all .1s;
    font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif;
  }


  .title2:hover, .title3:hover {
    color: black;
    font-weight: 900;
    transform: scale(1.1);
    font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif;
  }

  #categoryBackDiv {
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(160deg, #7474BF 20%, #348AC7 80%);
    /*background: url('https://pic.zhoutao123.com/picture/background/bg-mia.jpg');*/
    object-fit: cover;
    height: 300px;
    width: 100%;
    min-height: 30%;
    justify-content: center;
    align-items: center;
  }

  /*  分割线样式*/
  .dividerLine {
    width: 100%;
    margin-top: 20px;
    font-family: 'PT Serif', 'Times New Roman', Times, serif;
  }
</style>
