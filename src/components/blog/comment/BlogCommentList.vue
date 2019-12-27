<template>
    <div id="blogCommentList" style="margin-top: 20px;">
        <el-timeline>
            <el-timeline-item :key="comment.id"

                              :timestamp="comment.name + ' 评论于 ' +  comment.createDatetime"
                              placement="top"
                              type='primary'
                              icon='el-icon-more'
                              v-for="comment of commentList">

                <div style="display: flex;flex-direction: row">
                    <el-avatar shape="square" :size="30" :src="squareUrl"/>
                    <div>
                        <markdown-it-vue style="color: black;font-weight: 700"
                                         :content="':::info\n' + comment.content|| '' + '\n:::'"/>
                    </div>
                </div>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
    import MarkdownItVue from 'markdown-it-vue'
    import 'markdown-it-vue/dist/markdown-it-vue.css'
    import CommentApi from '@/api/CommentApi'

    export default {
        name: "BlogComment",
        data: function () {
            return {
                squareUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                commentList: []
            }
        },
        props: {
            articleId: {type: String, required: true},
        },
        components: {
            MarkdownItVue
        },
        computed: {
            markdownTheme: function () {
                return this.$store.state.markdown.theme;
            }
        },
        mounted() {
            let articleId = this.articleId;
            // 获取评论详情
            CommentApi.getComment(articleId, (resp) => {
                this.commentList = resp.data;
            });
        }
    }
</script>

<style scoped>


</style>
