<template>
    <div class="articleDetail">
        <BlogMenu></BlogMenu>
        <div class="articleDetailContent">
            <div class="articleCtr">
                <el-button @click="backLastPage" size="small" icon="el-icon-back">返回</el-button>
                <el-button @click="editArticle" size="small" icon="el-icon-edit">编辑</el-button>
                <a class="el-button el-button--default el-button--small" href="#blogCommentList" size="small">
                    <i class="el-icon-bottom"></i>
                    查看评论</a>
                <el-button @click="changeDialogStatus" size="small" icon="el-icon-chat-dot-round">评论</el-button>
            </div>
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
                    :scrollStyle="true"
                    :ishljs="true"
                    :navigation="tocStatus"
            ></mavonEditor>
        </div>

        <div id="commentList">
            <span style="margin-left: 30px;margin-bottom:20px;color: #4a4a4a;font-size: 20px">评论内容</span>
            <BlogCommentList></BlogCommentList>
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

    import BlogListApi from "@/api/BlogListApi";
    import BlogMenu from "./BlogMenu";
    import BlogComment from "./comment/BlogComment";
    import BlogCommentList from "./comment/BlogCommentList";
    import Footer from "../Footer";

    export default {
        name: "ArticleDetail",
        data: function () {
            return {
                blog: {},
                emptyTip: '> 文章内容为空，数据库可能出了点问题',
                tocStatus: false, // 显示文章的导航目录
                showCommentDialog: false
            }
        }, components: {
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
            let id = this.$route.params.id;
            let respFunc = (resp) => {
                this.blog = resp.data;
            };
            BlogListApi.getBlogDetail(id, respFunc);
        }
    }
</script>


<style scoped>


    .articleDetail {
        width: 100%;
        height: 1000px;
        display: flex;
        flex-direction: column;
        border-radius: 100px;
    }

    .articleDetailContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 30px;
        margin-right: 20px;
        margin-left: 20px;
        padding: 0;
    }

    #articleDetail {
        min-width: 90%;
        margin-right: 0;
    }

    .articleCtr {
        padding: 10px;
        margin-left: 10px;
    }

    #commentList {
        border: #000000 2px solid;
        padding-top: 20px;
        margin-top: 20px;
        background-color: #FFFFFF;
        margin-left: 20px;
        margin-right: 20px;
        border-radius: 10px;
    }

</style>
