<template>
    <div id="blogComment">
        <el-form ref="commentForm" :rules="rules" :model="commentForm" label-width="80px" size="mini">
            <el-form-item label="昵称" palaceholder="请输入您的昵称" prop="name">
                <el-input v-model="commentForm.name"></el-input>
            </el-form-item>
            <el-form-item label="网址">
                <el-input v-model="commentForm.site" placeholder="请输入您的网站">
                </el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="commentForm.email" placeholder="请输入您的邮箱"></el-input>
            </el-form-item>
            <el-form-item label="评分">
                <el-rate v-model="commentForm.rate" style="margin-left: 15px" show-text
                         :texts="['极差','不好','一般','不错','很赞']"></el-rate>
            </el-form-item>
            <el-form-item label="评论">
                <mavon-editor
                        placeholder="期待您的评论"
                        fontSize="12px"
                        defaultOpen="edit"
                        :subfield="false"
                        :toolbars="markdownOption"
                        codeStyle="xcode"
                        v-model="commentForm.content"
                        class="editor"
                        style="height: 150px;margin-left: 15px"/>
            </el-form-item>
            <el-form-item size="large">
                <el-button type="primary" size="small" @click="onSubmit('commentForm')">提交</el-button>
            </el-form-item>
        </el-form>
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
                    site: 'https://',
                    email: '',
                    rate: 5,
                    content: '',
                },
                rules: {
                    name: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ]
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
            closeDialog: {type: Function, required: true},
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
                    this.closeDialog();
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
