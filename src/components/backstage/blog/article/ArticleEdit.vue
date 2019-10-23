<template>
    <div class="articleEdit">
        <el-input class="inputTitle" style="width: 60%"></el-input>
        <mavon-editor
                codeStyle="vs2015"
                v-model="article.content"
                style="max-height: 960px;width: 100%;margin-right: 40px"></mavon-editor>
    </div>
</template>

<script>
    import './ArticleEdit.css'
    import {mavonEditor} from 'mavon-editor'

    export default {
        name: "ArticleEdit",
        data: function () {
            return {
                article: {title: '34'}
            }
        },
        components: {mavonEditor},
        methods: {},
        watch: {}
    }
</script>

<style scoped>

</style>
