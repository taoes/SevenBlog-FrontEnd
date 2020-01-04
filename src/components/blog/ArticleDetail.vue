<template>
    <div class="articleDetail">
        <el-backtop
                style="z-index: 1000000"
                :visibility-height="10"
                target="#sss"
        />
        <BlogMenu/>


        <el-image
                class="blogHeadDetail"
                :src="carouselImg[Math.floor(Math.random()*8)]"
                  style="width: auto;  height: auto;  min-width: 100%; max-height: 500px; " fit="cover"></el-image>
        <div class="blogHeadDetail" style="justify-content: center;z-index: 1000;margin-top: -350px">
            <h1 class="articleTitle" align="center"> {{blog.title}}</h1>
        </div>
        <div class="articleDetailContent">
            <div style="margin-left: 20px;margin-top: 20px;margin-bottom: 30px" type="text">
                <i class="far fa-eye" style="color: #0088EE"></i>
                <span style="margin-left:5px;margin-right: 5px;color: darkgray">{{blog.access}}</span>

                <i class="far fa-thumbs-up" style="color: #E6A23C;margin-left: 30px"/>
                <span style="margin-left:5px;margin-right: 5px;color: darkgray">{{Math.ceil(blog.access/3)}}</span>

                <i class="far fa-thumbs-down" style="color: #F56C6C;margin-left: 30px"/>
                <span style="margin-left:5px;margin-right: 5px;color: darkgray">{{0}}</span>
            </div>

            <div style="padding: 20px">
                <markdown-it-vue class="md-body" :content="blog.content" :options="options"/>
            </div>

            <div class="articleCtr">
                <el-button @click="backLastPage" :type="buttonType">
                    <i class="fas fa-backward"/>
                    返回上一层
                </el-button>
                <el-button @click="editArticle" :type="buttonType">
                    <i class="far fa-edit"/>
                    编辑文章
                </el-button>

            </div>
        </div>

        <div id="comment">
            <BlogComment :resource-id="articleId"/>
        </div>

        <div id="commentList">
            <span style="margin-left: 30px;margin-bottom:20px;color: black;font-size: 20px">评论区</span>
            <div style="padding: 0">
                <BlogCommentList :article-id="this.$route.params.id"/>
            </div>
        </div>

        <div>
            <MyFooter/>
        </div>
    </div>
</template>

<script>
    import * as sysTool from '../../assets/SysTool'
    import MarkdownItVue from 'markdown-it-vue'
    import 'markdown-it-vue/dist/markdown-it-vue.css'

    import BlogListApi from "@/api/BlogListApi";
    import BlogMenu from "./BlogMenu";
    import BlogComment from "./comment/BlogComment";
    import BlogCommentList from "./comment/BlogCommentList";
    import MyFooter from "../MyFooter";
    import ArticleComment from "../comment/ArticleComment";

    export default {
        name: "ArticleDetail",
        data: function () {
            return {
                articleId: 0,
                blog: {},
                buttonType: 'primary',
                emptyTip: '# 文章内容为空',
                tocStatus: false, // 显示文章的导航目录
                showCommentDialog: false,
                carouselImg: [
                    "https://www.zhoutao123.com/picture/index/1.jpeg",
                    "https://www.zhoutao123.com/picture/11.jpeg",
                    "https://www.zhoutao123.com/picture/1112.jpeg",
                    "https://www.zhoutao123.com/picture/index/2.jpg",
                    "https://www.zhoutao123.com/picture/index/4.jpg",
                    "https://www.zhoutao123.com/picture/index/13.jpg",
                    "https://www.zhoutao123.com/picture/index/14.jpg",
                    "https://www.zhoutao123.com/picture/index/15.jpg"
                ],
                accessInfo: {
                    ip: '1.1.1.1',
                    area: '北京市',
                    browser: 'chrome',
                    os: 'windows7'
                }
            }
        }, components: {
            ArticleComment,
            BlogComment,
            MarkdownItVue,
            BlogMenu,
            MyFooter,
            BlogCommentList
        },
        methods: {
            backLastPage: function () {
                this.$router.back();
            }, editArticle: function () {
                this.$router.push("/admin/article/edit/" + this.blog.id)
            }, markdownTheme: function () {
                return this.$store.state.markdown.theme;
            }, changeDialogStatus: function () {
                this.showCommentDialog = !this.showCommentDialog;
            }
        },
        mounted: function () {
            document.querySelector("#sss").scrollIntoView(true);
            let id = this.$route.params.id;
            this.articleId = parseInt(id);
            let respFunc = (resp) => {
                this.blog = resp.data;
                document.title = this.blog.title;
            };
            BlogListApi.getBlogDetail(id, respFunc);
        }, created() {
            this.accessInfo.ip = sessionStorage.getItem('ip');
            this.accessInfo.area = sessionStorage.getItem('area');
            this.accessInfo.browser = sysTool.GetCurrentBrowser();
            this.accessInfo.os = sysTool.GetOs();
            this.$store.dispatch('addAccessInfo', this.accessInfo);
        }
    }
</script>


<style scoped>

    .articleDetail {
        width: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 100px;
    }


    #articleDetail {
        min-width: 90%;
        margin-right: 0;
    }

    .articleCtr {
        margin: 50px 10px 30px 10px;
        display: flex;
    }

    .el-divider--horizontal {
        margin: 10px 0;
    }

    .articleTitle {
        font-weight: 900;
        font-size: 50px;
        font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
        color: seashell;
    }


    @media only screen and (min-width: 987px) {

        #commentList, #comment {
            padding: 20px;
            margin-top: 20px;
            background-color: #FEFEFE;
            box-shadow: 5px 5px 30px 1px #515a6e;
            margin-left: 10%;
            margin-right: 10%;
        }

        .articleDetailContent {

            border-radius: 20px;
            background-color: #FFFFFF;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: -0px;
            z-index: 100000;
            margin-right: 10%;
            margin-left: 10%;
            box-shadow: 5px 5px 30px 1px #515a6e;
            padding: 10px;
        }

        .blogHeadDetail {
            display: flex;
        }
    }


    @media only screen and (max-width: 987px) {

        #commentList, #comment {
            padding: 20px;
            margin-top: 20px;
            background-color: #FEFEFE;
            box-shadow: 5px 5px 30px 1px #515a6e;
            margin-left: 10px;
            margin-right: 10px;
        }

        .articleDetailContent {
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 30px;
            margin-right: 10px;
            margin-left: 10px;
            box-shadow: 5px 5px 30px 1px #515a6e;
            padding: 10px;
        }

        .blogHeadDetail {
            display: none;
        }
    }


</style>

