<template>
    <div class="articleDetail">
        <el-backtop
                style="z-index: 1000000"
                :visibility-height="10"
                target="#sss"
        ></el-backtop>
        <BlogMenu></BlogMenu>
        <div class="articleDetailContent">
            <h1 style="font-weight: 900;font-size: 27px">{{blog.title}}</h1>
            <div style="margin-left: 20px;margin-top: 5px;margin-bottom: 5px" type="text">
                <i class="far fa-eye" style="color: #0088EE"></i>
                <span style="margin-left:5px;margin-right: 5px;color: darkgray">{{blog.access}}</span>

                <i class="far fa-thumbs-up" style="color: #E6A23C;margin-left: 30px"></i>
                <span style="margin-left:5px;margin-right: 5px;color: darkgray">{{Math.ceil(blog.access/3)}}</span>

                <i class="far fa-thumbs-down" style="color: #F56C6C;margin-left: 30px"></i>
                <span style="margin-left:5px;margin-right: 5px;color: darkgray">{{0}}</span>
            </div>

            <el-divider></el-divider>
            <mavonEditor
                    id="articleDetail"
                    class="markdownPreview"
                    :value="blog.content || emptyTip"
                    :subfield="false"
                    :defaultOpen="'preview'"
                    :codeStyle="markdownTheme()"
                    :boxShadow="false"
                    :toolbarsFlag="false"
                    :editable="false"
                    :scrollStyle="false"
                    :ishljs="false"
                    :navigation="tocStatus"
            ></mavonEditor>
            <div class="articleCtr">
                <el-button @click="backLastPage" :type="buttonType" size="mini">
                    <i class="fas fa-backward"></i>
                    返回
                </el-button>
                <el-button @click="editArticle" :type="buttonType" size="mini">
                    <i class="far fa-edit"></i>
                    编辑
                </el-button>

            </div>
        </div>

        <div id="comment">
            <ArticleComment></ArticleComment>
        </div>

        <div id="commentList">
            <span style="margin-left: 30px;margin-bottom:20px;color: #4a4a4a;font-size: 20px">评论内容</span>
            <BlogCommentList :article-id="this.$route.params.id"></BlogCommentList>
        </div>

        <div>
            <Footer></Footer>
        </div>

        <el-dialog :visible.sync="showCommentDialog">
            <BlogComment :close-dialog="this.changeDialogStatus" :resource-id="blog.id"></BlogComment>
        </el-dialog>
    </div>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'
    import * as sysTool from '../../assets/SysTool'

    import BlogListApi from "@/api/BlogListApi";
    import BlogMenu from "./BlogMenu";
    import BlogComment from "./comment/BlogComment";
    import BlogCommentList from "./comment/BlogCommentList";
    import Footer from "../Footer";
    import ArticleComment from "../comment/ArticleComment";

    export default {
        name: "ArticleDetail",
        data: function () {
            return {
                blog: {},
                buttonType: 'primary',
                emptyTip: '# 文章内容为空',
                tocStatus: false, // 显示文章的导航目录
                showCommentDialog: false,
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
            BlogMenu,
            mavonEditor,
            Footer,
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
        margin: 10px;
        display: flex;
    }

    .el-divider--horizontal {
        margin: 10px 0;
    }

    @media only screen and (min-width: 987px) {

        #commentList, #comment {
            padding-top: 20px;
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
            margin-top: 30px;
            margin-right: 10%;
            margin-left: 10%;
            box-shadow: 5px 5px 30px 1px #515a6e;
            padding: 10px;
        }
    }


    @media only screen and (max-width: 987px) {

        #commentList, #comment {
            padding-top: 20px;
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
    }


</style>

