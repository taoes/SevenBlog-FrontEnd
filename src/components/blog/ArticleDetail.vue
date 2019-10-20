<template>
    <div class="articleDetail">
        <BlogMenu></BlogMenu>
        <div style="margin-left: 20px;width: 100%;height: 1024px;background-color: #ffffff">
            <mavonEditor

                    class="markdownPreview"
                    :value="blog.content || emptyTip"
                    :subfield="false"
                    :defaultOpen="'preview'"
                    :boxShadow="false"
                    :toolbarsFlag="false"
                    :editable="false"
                    :scrollStyle="true"
                    :ishljs="true"
                    :navigation="tocStatus"
                    style="max-height: 960px"
            ></mavonEditor>
            <div class="articleCtr">
                <el-button @click="backLastPage"><i class="el-icon-back"></i> 返回上一层</el-button>
            </div>
        </div>

    </div>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'

    import BlogListApi from "@/api/BlogListApi";
    import BlogMenu from "./BlogMenu";


    let errorFunc = (error) => {
        console.log("网络请求出现异常");
        console.error(error);
    };

    export default {
        name: "ArticleDetail",
        data: function () {
            return {
                blog: {},
                emptyTip: '> 文章内容为空，数据库可能出了点问题',
                tocStatus: false, // 显示文章的导航目录
                starCount: 1000,
                readCount: 132234,
                commentCount: 1234
            }
        }, components: {
            BlogMenu,
            mavonEditor
        },
        methods: {
            backLastPage: function () {
                this.$router.back(-1);
            }
        },
        mounted: function () {
            let id = this.$route.params.id;
            let respFunc = (resp) => {
                this.blog = resp.data;
            };
            BlogListApi.getBlogDetail(id, respFunc, errorFunc);
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
        margin-right: 30px;
        background-color: white;
        box-shadow: 1px 1px 1px 1px lightgray;
    }

    .articleCtr {
        padding: 10px;
        margin-left: 10px;
    }


</style>
