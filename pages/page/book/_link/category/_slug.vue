<template>
  <div id="contentData">
    <div id="contentTitle">
      <h1 class="title">{{ content.title }}</h1>
    </div>

    <div id="html">
      <a-alert message="由于本人精力有限，部分文章未完成或者完成粗糙，但笔者正在持续更新中，如有您有不同的意见或者建议欢迎留言指导！" show-icon
               type="info"/>
      <div id="buttonGroup">
        <a-space>
          <a-button @click="openYuQuePage()" icon="yuque"><span class="tipText">语雀</span></a-button>
          <a-button @click="openCategory()" icon="ordered-list"><span class="tipText">目录</span></a-button>
          <a-button @click="downloadPdf()" icon="download"><span class="tipText">下载</span></a-button>
          <a-button @click="hurryUp()" icon="bell"><span class="tipText">催一下</span></a-button>
        </a-space>
      </div>
      <a-divider/>
      <div id="contentHtml" v-html="bodyHtml"></div>
    </div>
    <div id="addComment" style="margin-bottom: 0 !important;">
      <a-comment>
        <div slot="content">
          <a-form-item>
            文章评价 &nbsp;<a-rate :tooltips="rateDesc" v-model="rateValue"/>
          </a-form-item>
          <div style="height: 10px"></div>
          <a-form-item>
            <a-input :value="nickName" @change="nickNameChange" placeholder="请输入昵称，将用于列表展示"/>
          </a-form-item>

          <a-form-item>
            <a-input :value="nickName" @change="emailChange" placeholder="请输入邮箱，作者回复后将通过邮箱通知您"/>
          </a-form-item>

          <a-form-item>
            <a-textarea :value="commentValue" @change="commentChange" rows="4"/>
          </a-form-item>
          <a-form-item>
            <a-button @click="commitComment" style="margin-top: 10px" type="primary">
              <a-icon type="check"/>
              &nbsp;提交
            </a-button>

            <a-button @click="resetComment" style="margin-top: 10px;margin-left: 20px"
                      type="danger">
              <a-icon type="redo"/>
              &nbsp; 重置
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
import {domain, apiDomain} from '@/plugins/config'

export default {
  components: {Comment},
  data() {
    return {
      commentList: [],
      visible: false,
      commentValue: '',
      nickName: '',
      email: '',
      labelCol: {
        xs: {span: 1},
        sm: {span: 1},
      },
      wrapperCol: {
        xs: {span: 23},
        sm: {span: 23},
      },
      rateValue: 5,
      rateDesc: ["错误百出", "不值一读", "差强人意", "收货满满", "印象深刻"],
      form: {
        name: '', email: '', content: ''
      }, layout: {
        labelCol: {span: 4},
        wrapperCol: {span: 20},
      }
    }
  },
  async asyncData(context) {
    let {$axios, app, params, query,} = context;
    let {link, slug} = params;
    let [bookId, book, commentList] = await Promise.all([
      $axios.$get(`${domain}/book/${link}`),
      $axios.$get(`${domain}/apis/book/${link}/category/${slug}`),
      $axios.$get(`${domain}/apis/book/${link}/category/${slug}/comment`)
    ]);
    const html = book.data.body_html;
    const bodyHtml = !html ? "" : html.replace(new RegExp('https://cdn.nlark.com/', 'gm'),
      'https://api.zhoutao123.com/picture?param=');
    app.head.title = `${book.data.title}-燕归来兮`;
    app.head.meta[0].description = book.data.description;
    query.bookId = bookId;
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
    },
    openCategory: function () {
      let {bookId} = this.query;
      if (!!bookId) {
        window.location.href = `/page/book/${bookId}`
      }
    }, commentChange: function (e) {
      this.commentValue = e.target.value;
    }, nickNameChange: function (e) {
      this.nickname = e.target.value;
    }, emailChange: function (e) {
      this.email = e.target.value;
    }, commitComment: function () {
      if (!this.commentValue || this.commentValue === '') {
        this.ConstantValue.error("提交失败", "评论内容不能为空");
        return
      }
      let {link, slug} = this.params;
      let data = {
        name: this.nickname,
        content: this.commentValue,
        url: this.rateValue + "",
        email: this.email,
        bookName: link,
        slug
      };
      this.$axios.post(`${apiDomain}/book/comment`, data);
      this.ConstantValue.info("提交成功", "感谢您的评论");
    }
    ,
    resetComment: function () {
      this.commentValue = ''
    }
    ,
    hurryUp: function () {
      let {link, slug} = this.params;
      let data = {
        name: "匿名读者00" + Math.floor(Math.random() * 10),
        content: `博主 快快更新 ${this.content.title} 特别期待!!!`,
        url: 5,
        email: this.email,
        bookName: link,
        slug
      };
      this.$axios.post(`${apiDomain}/book/comment`, data);
      this.ConstantValue.info("催促成功", "您的催促博主已经收到，我会尽快完成此文章，感谢您的关注!!!");

    }
    ,
    downloadPdf: function () {
      if (!this.isPc()) {
        this.ConstantValue.error("暂不支持手机端使用此功能", "请使用PC浏览器打印，暂不支持手机浏览器");
        return
      }
      window.document.body.innerHTML = document.getElementById("contentHtml").innerHTML;
      window.print();
      window.location.reload()
    }
    ,
    isPc: function () {
      let userAgentInfo = navigator.userAgent;
      let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
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
  background: #EFEFEF;
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
  }

  #addComment {
    width: 75%;
    padding-left: 10px;
    padding-right: 10px;
    background-color: white;
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
  }

  #addComment {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    background-color: white;
  }

  #comment {
    background-color: white;
    width: 100%;
    padding: 30px;
  }

  .tipText {
    display: none !important;
  }
}


/* 修改文章样式*/

.lake-content-editor-core {
  width: 100% !important;
}

.lake-codeblock-content {
  max-width: 100% !important;
  width: 100% !important;
  margin-top: 30px !important;
}

.lake-codeblock-content pre {
  font-size: small;
  line-height: 18px !important;
}

.lake-codeblock-content {
  background: url(https://pic.zhoutao123.com/blog/img/point.png) !important;
  width: 100% !important;
  background-size: 40px !important;
  background-repeat: no-repeat !important;
  background-color: #f8f8f8 !important;
  margin-bottom: 7px !important;
  border-radius: 5px !important;
  padding-top: 25px !important;
  background-position: 10px 10px !important;
}


.lake-drag-image {
  max-width: 100% !important;
  height: auto !important;
}

#contentHtml p, #contentHtml p span, #contentHtml a, #contentHtml ol, #contentHtml li {
  line-height: 30px !important;
  font-size: 17px !important;
  font-weight: 500;
}

#contentHtml span {
  line-height: 10px;
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
  margin-top: 20px;
}

</style>
