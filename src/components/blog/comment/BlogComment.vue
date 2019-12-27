<template>

    <div>
        <div>
            <span style="margin-left:30px;color: black;font-size: 20px">期待您的评论</span>
        </div>
        <div id="blogComment">
            <el-form ref="commentForm" :rules="rules" :model="commentForm" label-width="0px" size="mini">
                <el-form-item prop="name">
                    <el-input v-model="commentForm.name" placeholder="请输入您的名称或者昵称"/>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="commentForm.site"
                              placeholder="请输入您的站点，如果您希望我回访的话">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="commentForm.email"
                              placeholder="请输入您的邮箱地址，我将通过邮箱回复您"/>
                </el-form-item>
                <el-form-item>
                    <el-rate v-model="commentForm.rate" style="margin-left: 5px" show-text
                             :texts="startStep"/>
                </el-form-item>
                <el-form-item>
                    <el-input
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 4}"
                            placeholder="请输入您对此篇文章的评论(支持MarkDown语法)"
                            v-model="commentForm.content">
                    </el-input>
                </el-form-item>
                <el-form-item size="large">
                    <el-button type="primary" @click="onSubmit('commentForm')">提交评论</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

    import MarkdownItVue from 'markdown-it-vue'
    import 'markdown-it-vue/dist/markdown-it-vue.css'
    import commentApi from '@/api/CommentApi';

    export default {
        name: "BlogComment",
        data: function () {
            return {
                commentForm: {
                    name: '',
                    site: '',
                    email: '',
                    rate: 5,
                    content: '',
                },
                startStep: ['垃圾文章', '一般般', '凑乎看', '非常不错', '令人称奇'],
                rules: {
                    name: [
                        {required: true, message: 'Input your name on the Internet', trigger: 'blur'}
                    ],
                }
            };
        },
        props: {
            resourceId: {type: Number, required: true}
        },
        components: {
            MarkdownItVue
        },
        methods: {
            onSubmit(commentForm) {
                if (!this.commentForm.content) {
                    this.$message.error('评论内容不能为空');
                    return
                }


                this.$refs[commentForm].validate((valid) => {
                    if (valid) {
                        this.requestUrl()
                    } else {
                        return false;
                    }
                });
            }, requestUrl: function () {
                this.commentForm.articleId = this.resourceId;
                commentApi.addNewComment(this.commentForm, () => {
                    this.$notify.success({title: "您的评论已提交", message: "非常感谢您的评论！"});
                }, () => {
                    this.$notify.error({
                        title: "您的评论提交失败",
                        message: "抱歉，您的评论提交失败, 请稍后重试，如果依然失败，请尝试发送邮件到zhoutaotao@aliyun.com 练习本人，谢谢"
                    });
                });
            }
        }
    }
</script>

<style scoped>

    #blogComment {
        padding: 0;
        margin: 0;
        padding: 20px;
    }

    .el-input {
        margin-left: 0;
    }

</style>
