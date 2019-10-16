<template>
    <div class="articleDetail">
        <mavonEditor
                class="markdownPreview"
                :value="value"
                :subfield="false"
                :defaultOpen="'preview'"
                :boxShadow="false"
                :toolbarsFlag="false"
                :editable="false"
                :scrollStyle="true"
                :ishljs="true"
                :navigation="true"
        ></mavonEditor>
    </div>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'
    
    import BlogListApi from "@/api/BlogListApi";


    let errorFunc = (error) => {
        console.log("网络请求出现异常");
        console.error(error);
    };

    export default {
        name: "ArticleDetail",
        data: function () {
            return {
                value: '',
                title: '测试标题',
                starCount: 1000,
                readCount: 132234,
                commentCount: 1234
            }
        }, components: {
            mavonEditor
        },
        mounted: function () {
            let respFunc = (resp) => {
                this.value = resp.data.content;
            };
            BlogListApi.getBlogDetail(1, respFunc, errorFunc);
        }
    }
</script>

<style scoped>


    .articleDetail {
        width: 80%;
        height: 100%;
        margin-left: 10%;
        border-radius: 100px;
    }

    .title {
        margin-left: 20px;
        font-family: Kai;
    }

    .markdownPreview {
        width: 100%;
        height: 80%;
        background-color: white;
        box-shadow: 1px 1px 1px 1px lightgray;
    }
</style>