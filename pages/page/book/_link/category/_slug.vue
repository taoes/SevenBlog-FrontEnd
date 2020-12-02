<template>
  <div id="contentData">
    <div id="contentTitle">
      <h1 class="title">{{content.title}}</h1>
    </div>

    <div id="html">
      <div id="buttonGroup">
        <a-button @click="openYuQuePage()" icon="yuque">语雀</a-button>
        <a-button @click="openCategory()" icon="ordered-list">目录</a-button>
        <a-button @click="likeContent()" icon="heart">点赞</a-button>
        <a-button @click="downloadPdf()" icon="download">下载</a-button>
      </div>
      <a-divider/>

      <div id="contentHtml" v-html="bodyHtml"></div>
    </div>
    <div id="addComment" style="width: 75%">
      <a-comment>
        <div slot="content">
          <a-form-item>
            文章评价 &nbsp;<a-rate v-model="rateValue" :tooltips="rateDesc"/>
          </a-form-item>
          <div style="height: 30px"></div>
          <a-form-item>
            <a-textarea rows="4" :value="commentValue" @change="commentChange"/>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" style="margin-top: 20px"
                      @click="subComment">
              提交
            </a-button>

            <a-button type="danger" style="margin-top: 20px"
                      @click="resetComment">
              重置
            </a-button>
          </a-form-item>
        </div>
      </a-comment>
    </div>

    <div id="comment">
      <a id="commentList"></a>
      <Comment :commentList="commentList"/>
    </div>
  </div>
</template>

<script>
  import Comment from "@/components/book/Comment";

  export default {
    components: {Comment},
    data() {
      return {
        commentList: [],
        visible: false,
        commentValue: '',
        labelCol: {
          xs: {span: 1},
          sm: {span: 1},
        },
        wrapperCol: {
          xs: {span: 23},
          sm: {span: 23},
        },
        rateValue: 4,
        rateDesc: ["错误百出", "不值一读", "差强人意", "收货满满", "印象深刻"],
        form: {
          name: '', email: '', content: ''
        }, layout: {
          labelCol: {span: 4},
          wrapperCol: {span: 20},
        }
      }
    },
    async asyncData({$axios, app, params, query}) {

      let [book, commentList] = await Promise.all([
        $axios.$get(`http://localhost:9999/apis/book/${params.link}/category/${params.slug}`),
        $axios.$get(
          `http://localhost:9999/apis/book/${params.link}/category/${params.slug}/comment`)
      ]);
      const html = book.data.body_html;
      const bodyHtml = !html ? "" : html.replace(new RegExp('https://cdn.nlark.com/', 'gm'),
        'https://api.zhoutao123.com/picture?param=');
      app.head.title = `${book.data.title}-燕归来兮`;
      return {content: book.data, bodyHtml, params, commentList, query}
    },

    beforeMount: function () {
      let pList = document.getElementsByTagName("p");
      let pTagList = Array.prototype.slice.call(pList)
      for (let pIndex in pTagList) {
        let p = pTagList[pIndex];
        p.style.fontSize = "100px !important"
      }

    },
    methods: {
      openYuQuePage: function () {
        let {link, slug} = this.params;
        let yuQuePageUrl = `https://www.yuque.com/zhoutao123/${link}/${slug}`;
        window.open(yuQuePageUrl, '_blank');
      }, toggleCommandVisible: function () {
        this.visible = !this.visible
      },
      openCategory: function () {
        let {bookId} = this.query;
        window.location.href = `/page/book/${bookId}`
      },
      commentChange: function (e) {
        this.commentValue = e.target.value;
      },
      subComment: function () {
        if (!this.commentValue) {
          return
        }
        let host = this.ConstantValue.apiPrefix();
        let {link, slug} = this.params;
        let data = {
          content: this.commentValue,
          url: this.rateValue + "",
          email: '无',
          bookName: link,
          slug
        };
        this.$axios.post(`${host}/book/comment`, data);
        this.ConstantValue.error("提交成功", "感谢您的评论");
      }, resetComment: function () {
        this.commentValue = ''
      },
      downloadPdf: function () {
        //以PDF 形式保存内容
        if (!this.isPc()) {
          this.ConstantValue.error("暂不支持手机端使用此功能", "请使用PC浏览器打印，暂不支持手机浏览器");
          return
        }
        window.document.body.innerHTML = document.getElementById("contentHtml").innerHTML;
        window.print();
        window.location.reload()
      }, isPc: function () {
        //判断是否是PC浏览器
        let userAgentInfo = navigator.userAgent;
        let Agents = ["Android", "iPhone",
          "SymbianOS", "Windows Phone",
          "iPad", "iPod"];
        let flag = true;
        for (let v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
          }
        }
        return flag;
      }

    }
  }
</script>

<style>


  @page {
    size: A4 portrait;
  }

  #contentData {
    display: flex;
    background: #FAFAFA;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
  }


  @media screen and (min-width: 780px) {
    #html {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      padding: 50px;
      width: 75%;
      min-height: 1024px;
      margin-bottom: 30px;
      background-color: white;
    }

    #contentTitle h1 {
      margin-top: 40px;
      margin-bottom: 40px;
      font-size: 40px;
      letter-spacing: 3px;
      font-weight: 900;
      font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif !important;
    }

    #comment {
      background-color: white;
      width: 75%;
      padding: 30px;
    }
  }


  @media screen and (max-width: 780px) {
    #html {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      padding: 20px;
      width: 100%;
      min-height: 524px;
      margin-bottom: 30px;
      background: white;
    }

    #contentTitle h1 {
      margin-top: 20px;
      font-weight: 900;
      font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif !important;
    }

    #comment {
      background-color: white;
      width: 100%;
      padding: 30px;
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

  .lake-drag-image {
    max-width: 100% !important;
    height: auto !important;
  }

  #contentHtml p, #contentHtml a, #contentHtml ol {
    line-height: 30px !important;
    font-size: 17px !important;
    font-weight: 500;
    font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif !important;
  }

  #contentHtml span {
    line-height: 25px !important;
  }

  #contentTitle {
    display: flex;
    flex-direction: column;
    /*background: url('https://pic.zhoutao123.com/picture/background/bg-mia.jpg');*/
    background-image: linear-gradient(160deg, #7474BF 20%, #348AC7 80%);
    object-fit: cover;
    height: 300px;
    width: 100%;
    min-height: 30%;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
  }

  .title {
    color: white;
    font-size: 40px;
    text-align: center;
  }

  #buttonGroup {
    margin-top: 40px;
  }

</style>
