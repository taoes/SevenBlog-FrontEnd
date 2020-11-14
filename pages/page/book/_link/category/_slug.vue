<template>
  <div id="contentData">
    <div id="contentTitle">
      <h1 style="color: white;font-size: 40px">{{content.title}}</h1>
    </div>


    <div id="html">
      <div id="buttonGroup">
        <a-button @click="openYuQuePage()" icon="yuque">语雀</a-button>
        <a-button @click="openCategory()" icon="ordered-list">目录</a-button>
        <a-button @click="toggleCommandVisible()" icon="sound">评论</a-button>
        <a-button @click="downloadPdf()" icon="download">下载</a-button>
      </div>
      <a-divider/>
      <div id="contentHtml" v-html="bodyHtml"></div>
    </div>

    <div id="comment">
      <a name="commentList"></a>
      <Comment :commentList="commentList"/>
    </div>

    <a-modal @cancel="toggleCommandVisible()" @ok="subComment()" cancel-text="取消" ok-text="提交" title="评论"
             v-model="visible">
      <a-form-model :model="form" layout="horizontal" v-bind="layout">
        <a-form-model-item label="昵称">
          <a-input placeholder="请输入您的昵称" v-model="form.name"/>
        </a-form-model-item>
        <a-form-model-item label="邮箱">
          <a-input placeholder="请输入您的邮箱" type="email" v-model="form.email"/>
        </a-form-model-item>
        <a-form-model-item label="内容">
          <a-textarea placeholder="请输入评论内容" row="5" v-model="form.content"/>
        </a-form-model-item>
      </a-form-model>
    </a-modal>

  </div>
</template>

<script>
    import Comment from "../../../../../components/book/Comment";

    export default {
        components: {Comment},
        data() {
            return {
                visible: false, form: {
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
                $axios.$get(`http://localhost:9999/apis/book/${params.link}/category/${params.slug}/comment`)
            ]);
            const html = book.data.body_html;
            const bodyHtml = !html ? "" : html.replace(new RegExp('https://cdn.nlark.com/', 'gm'), 'https://api.zhoutao123.com/picture?param=');
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
            subComment: function () {
                //提交评论
                let host = this.ConstantValue.apiPrefix();
                let {link, slug} = this.params;
                let data = {
                    ...this.form,
                    url: 'https://www.zhoutao123.com',
                    bookName: link,
                    slug
                };
                this.$axios.post(`${host}/book/comment`, data);
                location.reload();
            }, downloadPdf: function () {
                //以PDF 形式保存内容
                if (!this.isPc()) {
                    alert("请使用PC浏览器打印，暂不支持手机浏览器");
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
  }


  @media screen and (min-width: 780px) {
    #html {
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
      display: flex;
      flex-direction: column;
      padding: 20px;
      width: 100%;
      min-height: 524px;
      margin-bottom: 30px;
      background: white;
      margin-top: 20px;
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
    line-height: 40px !important;
    font-size: 17px !important;
    font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif !important;
  }

  #contentHtml span {
    line-height: 25px !important;
    font-size: 13px !important;
  }

  #contentTitle {
    display: flex;
    flex-direction: column;
    background: url('https://pic.zhoutao123.com/picture/background/bg-mia.jpg');
    object-fit: cover;
    height: 300px;
    width: 100%;
    min-height: 30%;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
  }

</style>
