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
                :scrollStyle="false"
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
            let id = this.$route.params.id
            let respFunc = (resp) => {
                this.value = resp.data.content;
            };
            BlogListApi.getBlogDetail(id, respFunc, errorFunc);
        }
    }
</script>

<style scoped>


    .articleDetail {
        width: 80%;
        height: 100%;
        margin-left: 10%;
        border-radius: 100px;
        padding: 20px;
    }

    .markdownPreview {
        width: 100%;
        height: 80%;
        background-color: white;
        box-shadow: 1px 1px 1px 1px lightgray;
    }

    .ctrl {
        width: 50%;
        margin-left: 25%;
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
    }

    .cardTitle {
        margin-left: 1em;
        margin: 20px;
    }

    .github {
        width: 80%;
        margin-left: 10%;
    }

    .ivu-card {
        margin-left: 20px;
        margin-right: 20px;
        height: 300px;
        box-shadow: 1px 1px 1px 1px lightgray;
    }

</style>