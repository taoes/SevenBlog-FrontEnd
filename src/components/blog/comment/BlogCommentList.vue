<template>
    <div id="blogCommentList" style="margin-top: 20px">
        <el-timeline>
            <el-timeline-item :key="comment.id"
                              :timestamp="comment.name + '提交于' +  comment.createDatetime"
                              placement="top"
                              type='primary'
                              icon='el-icon-more'
                              v-for="comment of commentList">
                <mavonEditor
                        :value=" comment.content|| ''"
                        :subfield="false"
                        :defaultOpen="'preview'"
                        :codeStyle="markdownTheme"
                        :boxShadow="false"
                        :toolbarsFlag="false"
                        :editable="false"
                        :scrollStyle="true"
                        :ishljs="true"
                        :navigation="false"
                        style="min-height: 0"
                ></mavonEditor>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>

    import {mavonEditor} from "mavon-editor";
    import CommentApi from '@/api/CommentApi'

    export default {
        name: "BlogComment",
        data: function () {
            return {
                commentList: [
                    {
                        id: 0,
                        name: '张三疯',
                        rate: 5,
                        site: "https://www.zhoutao123.com",
                        email: "zhoutaotao@aliyun.com",
                        content: "+ 你好",
                        createDatetime: '2019-03-09 23:43:05'
                    }
                ]
            };
        },
        props: {
            articleId: {type: String, required: true},
        },
        components: {
            mavonEditor
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
