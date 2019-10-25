<template>
    <div class="articleEdit">
        <div class="Collect">

            <div class="articleGroup" style="display: flex;flex-direction: row">
                <div>
                    <span>文章标题</span>
                    <el-input style="width: 200px" v-model="article.title" size="small"
                              :placeholder="article.placeholder"/>
                </div>


                <div style="margin-left: 40px;">
                    <span>文章分类</span>
                    <el-select v-model="article.type" placeholder="请选择" size="small">
                        <el-option
                                v-for="item in options"
                                :key="item.id"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>


                <div style="margin-left: 60px">
                    <el-button
                            size="small"
                            @click="submit">提交
                        <i class="el-icon-upload el-icon--right"></i></el-button>
                    <el-button
                            size="small"
                            @click="backLastPage">返回
                        <i class="el-icon-back el-icon--right"></i></el-button>
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
            <mavon-editor
                    :codeStyle="markdownTheme"
                    v-model="article.content"
                    class="editor"
                    style="height: 990px"/>
        </div>


    </div>
</template>

<script>
    import "./ArticleEdit.css";
    import {mavonEditor} from "mavon-editor";
    import blogList from "@/api/BlogListApi";

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
                    id: undefined,
                    title: "",
                    placeholder: "请输入标题~",
                    content: "暂无内容",
                    type: '',
                    tagList: [],
                }, options: [{
                    id: 1,
                    label: "计算机相关",
                    value: 'pc'
                }, {
                    id: 2,
                    label: "数据库知识点",
                    value: 'database'
                }, {
                    id: 3,
                    label: "Java语言",
                    value: 'java'
                }, {
                    id: 4,
                    label: "GoLang语言",
                    value: 'go'
                }, {
                    id: 5,
                    label: "Python语言",
                    value: 'pyhton'
                }]
            };
        },
        components: {mavonEditor},
        computed: {
            collapseAdminMenu: function () {
                this.$store.commit('changeCollapse');
            }, markdownTheme: function () {
                return this.$store.state.markdown.theme;
            }
        },
        methods: {
            backLastPage: function () {
                this.$router.back();
            },
            submit: function () {
                let respFunction = (resp) => {
                    this.article = resp.data;
                    this.$notify.success({title: "更新完成", message: "文章更新完成"});

                };
                blogList.updateOrCreate(this.article, respFunction, errorFunc);
                // this.$router.push('/blog')
            }
        },
        mounted: function () {
            let id = this.$route.params.id;
            this.edit = id;
            this.id = id;

            if (this.edit) {
                let respFunc = (resp) => {
                    this.article = resp.data;
                };
                blogList.getBlogDetail(id, respFunc, errorFunc);
            }
        }
    };
</script>

<style scoped>
    .el-select__tags {
        margin-left: 30px;
    }
</style>
