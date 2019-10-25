<template>
    <div class="articleEdit">
        <div class="Collect">

            <div class="articleGroup" style="display: flex;flex-direction: row">
                <div>
                    <span>文章标题</span>
                    <el-input style="width: 200px" v-model="article.title" :placeholder="article.placeholder"/>
                </div>


                <div style="margin-left: 40px;">
                    <span>文章目录</span>
                    <el-select v-model="article.category" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.id"
                                :label="item.label"
                                :value="item.label">
                        </el-option>
                    </el-select>
                </div>

                <div style="margin-left: 40px;">
                    <span>文章标签</span>
                    <el-select
                            v-model="article.tagList"
                            multiple
                            collapse-tags
                            placeholder="请选择">
                        <el-option
                                v-for="item in tags"
                                :key="item.id"
                                :label="item.label"
                                :value="item.label">
                        </el-option>
                    </el-select>
                </div>


                <div style="margin-left: 60px">
                    <el-button type="primary" size="small" @click="submit">提交<i
                            class="el-icon-upload el-icon--right"></i></el-button>
                    <el-button type="primary" size="small" @click="backLastPage">返回<i
                            class="el-icon-back el-icon--right"></i></el-button>
                </div>
            </div>

            <div class="articleGroup">
                <el-input
                        type="textarea"
                        :rows="4"
                        style=""
                        placeholder="请输入内容"
                        v-model="article.description">
                </el-input>
            </div>

        </div>


        <div class="mavon">
            <mavon-editor codeStyle="vs2015" v-model="article.content" class="editor" style="height: 990px"/>
        </div>


    </div>
</template>

<script>
    import "./ArticleEdit.css";
    import {mavonEditor} from "mavon-editor";
    import BlogListApi from "@/api/BlogListApi";

    let errorFunc = (error) => {
        console.log("网络请求出现异常");
        console.error(error);
    };

    export default {
        name: "ArticleEdit",
        data: function () {
            return {
                edit: true,
                article: {
                    title: "",
                    placeholder: "请输入标题~",
                    content: "暂无内容",
                    category: 'JVM虚拟机',
                    tagList: [],
                }, options: [{
                    id: 1,
                    label: "JVM虚拟机"
                }, {
                    id: 2,
                    label: "Java编程思想"
                }], tags: [{
                    id: 1,
                    label: "Spring"
                }, {
                    id: 2,
                    label: "JVM"
                }, {
                    id: 3,
                    label: "Pyhton"
                }, {
                    id: 4,
                    label: "MySql"
                }, {
                    id: 5,
                    label: "React"
                }, {
                    id: 6,
                    label: "Vue"
                }]
            };
        },
        components: {mavonEditor},
        computed: {
            collapseAdminMenu: function () {
                this.$store.commit('changeCollapse');
            }
        },
        methods: {
            backLastPage: function () {
                this.$router.back();
            },
            submit: function () {
                if (this.edit) {
                    this.$notify.success({
                        title: '编辑完成',
                        message: '您的文章已成功发送'
                    });
                } else {
                    this.$notify.success({
                        title: '创建完成',
                        message: '您的文章已成功发送'
                    });
                }
                this.$router.push('/blog')
            }
        },
        mounted: function () {
            let id = this.$route.params.id;
            this.edit = id;

            if (this.edit) {
                let respFunc = (resp) => {
                    this.article = resp.data
                };
                BlogListApi.getBlogDetail(id, respFunc, errorFunc);
            }
        }
    };
</script>

<style scoped>
    .el-select__tags {
        margin-left: 30px;
    }
</style>
