<template>
    <div class="articleDetail">
        <BlogMenu></BlogMenu>
        <div style="margin-left: 20px;width: 100%">
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
                    style="max-height: 800px"
            ></mavonEditor>
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
        display: flex;
        height: 80%;
        border-radius: 100px;
    }

    .markdownPreview {
        min-width: 90%;
        margin-right: 30px;
        background-color: white;
        box-shadow: 1px 1px 1px 1px lightgray;
    }


</style>
