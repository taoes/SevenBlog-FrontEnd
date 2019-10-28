<template>
    <div class="articleDetail">
        <BlogMenu></BlogMenu>
        <div class="articleDetailContent">
            <div class="articleCtr">
                <el-button @click="backLastPage" size="small" icon="el-icon-back"> 返回</el-button>
                <el-button @click="editArticle" size="small" icon="el-icon-edit"> 编辑</el-button>
                <el-button @click="changeDialogStatus" size="small" icon="el-icon-edit"> 评论文章</el-button>
                <div style="float: right;margin-right: 30px">
                    文章评分:
                    <div style="float: right">
                        <el-rate value="4.5" disabled show-score></el-rate>
                    </div>
                </div>
            </div>
            <mavonEditor
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
                    style=""
            ></mavonEditor>
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
            mavonEditor
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
        margin-right: 40px;
        margin-left: 40px;
        background-color: white;
    }

    .markdownPreview {
        min-width: 90%;
        padding: 20px;
        margin-right: 0;
        background-color: white;
    }

    .articleCtr {
        padding: 10px;
        margin-left: 10px;
    }

    /*评论组件样式*/
    .comment {
        margin-top: 20px;
    }

</style>
