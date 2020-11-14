<template>

  <div id="bookCategory">
    <div id="categoryBackDiv">
      <h1 id="bookTitle">{{book.title}}</h1>
      <span id="subBookTitle">{{book.subTitle}}</span>
    </div>
    <div id="content">

      <template v-for="category in this.categoryList">
        <a-divider :key="category.slug" orientation="left"
                   style="width: 100%;margin-top: 20px;font-family: 'PT Serif', 'Times New Roman', Times, serif;"
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
</template>


<script>
    export default {
        async asyncData({$axios, app, params}) {
            const categoryList = await $axios.$get(`http://localhost:9999/apis/book/${params.bookId}/category`);
            const book = await $axios.$get(`http://localhost:9999/apis/book/${params.bookId}`);
            app.head.title = `${book.title}-燕归来兮`;
            return {categoryList, book, params}
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
    font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif;
    margin-top: 20px;
    font-weight: bold;
    font-size: 50px;
    letter-spacing: 4px;
    color: white;
  }


  #subBookTitle {
    font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif;
    color: white;
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
    font-size: 25px;
    padding-top: 20px;
    cursor: pointer;
    width: fit-content;
    line-height: 1;
    color: #000;
    font-weight: bold;
    font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif;
  }

  .title2 {
    font-size: 18px;
    margin-left: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    color: #010101;
    padding: 4px;
    transition: all .1s;
    -moz-transition: all .1s;
    -webkit-transition: all .1s;
    -o-transition: all .1s;
    font-weight: bold;
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
    color: #4a4a4a;
    font-weight: 700;
    transform: scale(1.1);
    font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif;
  }

  #categoryBackDiv {
    display: flex;
    flex-direction: column;
    background: url('https://pic.zhoutao123.com/picture/background/bg-mia.jpg');
    object-fit: cover;
    height: 300px;
    width: 100%;
    min-height: 30%;
    justify-content: center;
    align-items: center;
  }
</style>
