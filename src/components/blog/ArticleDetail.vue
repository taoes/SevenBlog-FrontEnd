<template>
    <div class="articleDetail">
        <BlogMenu></BlogMenu>
        <div style="margin-left: 20px;width: 100%;background-color: #ffffff">
            <div class="articleCtr">
                <el-button @click="backLastPage" type="primary" size="small" icon="el-icon-back"> 返回</el-button>
                <el-button @click="editArticle" type="primary" size="small" icon="el-icon-edit"> 编辑</el-button>
                <el-button @click="changeDialogStatus" type="primary" size="small" icon="el-icon-edit"> 评论文章</el-button>
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
        border-radius: 100px;
    }

    .markdownPreview {
        min-width: 90%;
        margin-right: 0;
        background-color: white;
        box-shadow: 1px 1px 1px 1px lightgray;
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
