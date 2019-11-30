<template>

    <div>
        <div>
            <span style="margin-left:30px;color: black;font-size: 20px">Comment for your</span>
        </div>
        <div id="blogComment">


            <el-form ref="commentForm" :rules="rules" :model="commentForm" label-width="0px" size="mini">
                <el-form-item prop="name">
                    <el-input v-model="commentForm.name" placeholder="Please input your name or nickname"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="commentForm.site"
                              placeholder="Please input your web site if you will hope visit for me">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="commentForm.email"
                              placeholder="Please input your e-mail if you hope keep link with me"></el-input>
                </el-form-item>
                <el-form-item>

                    <el-rate v-model="commentForm.rate" style="margin-left: 5px" show-text
                             :texts="['Bad','Not Well','Normal','Well','Amazing']"></el-rate>
                </el-form-item>
                <el-form-item>
                    <el-input
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 4}"
                            placeholder="Please input your comment for this article"
                            v-model="commentForm.content">
                    </el-input>
                </el-form-item>
                <el-form-item size="large">
                    <el-button type="primary" size="small" @click="onSubmit('commentForm')">Submit</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

    import {mavonEditor} from "mavon-editor";
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
                rules: {
                    name: [
                        {required: true, message: 'Input your name on the Internet', trigger: 'blur'}
                    ],
                }

                , markdownOption: {
                    subfield: false,
                    preview: true,
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    quote: true, // 引用
                    link: true, // 链接
                    code: true, // code
                    table: true, // 表格
                }
            };
        },
        props: {
            resourceId: {type: Number, required: true}
        },
        components: {
            mavonEditor
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
