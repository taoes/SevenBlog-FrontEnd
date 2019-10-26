<template>
    <div class="articleEdit">
        <div class="Collect">

            <div class="articleGroup" style="display: flex;flex-direction: row">
                <div>
                    <el-button
                            size="small"
                            icon="el-icon-back"
                            @click="backLastPage">返回
                    </el-button>
                    <el-button
                            size="small"
                            icon="el-icon-upload "
                            @click="submit">提交
                    </el-button>
                    <el-button
                            size="small"
                            icon="el-icon-camera-solid"
                            @click="preview">预览
                    </el-button>
                </div>

                <div style="margin-left: 40px">
                    <span>文章标题</span>
                    <el-input style="width: 200px" v-model="article.title" size="small"
                              :placeholder="article.placeholder"/>
                </div>


                <div style="margin-left: 40px;">
                    <span>文章分类</span>
                    <el-select v-model="article.type" placeholder="请选择" size="small">
                        <el-option
                                v-for="item in blogCategory"
                                :key="item.id"
                                :label="item.name"
                                :value="item.key">
                        </el-option>
                    </el-select>
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
    import menuApi from "@/api/MenuApi";

    let errorFunc = () => {

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
                }, category: []
            };
        },
        components: {mavonEditor},
        computed: {
            markdownTheme: function () {
                return this.$store.state.markdown.theme;
            },
            blogCategory: function () {
                let sumCatrgory = [];
                for (let i in this.category) {
                    sumCatrgory = sumCatrgory.concat(this.category[i])
                }
                return sumCatrgory;
            }
        },
        methods: {
            collapseAdminMenu: function () {
                this.$store.commit('changeCollapse');
            },
            backLastPage: function () {
                this.$router.back();
            },
            submit: function () {
                let respFunction = (resp) => {
                    this.article = resp.data;
                    this.$notify.success({title: "更新完成", message: "文章更新完成"});
                };
                blogList.updateOrCreate(this.article, respFunction, errorFunc);
            }, preview: function () {
                this.$notify.error({
                    title: "功能暂不支持",
                    message: "🌲 功能暂未开发完成，敬请期待"
                })
            }
        },
        mounted: function () {
            let id = this.$route.params.id;
            this.edit = id;
            this.id = id;
            // 获取文章
            if (this.edit) {
                let respFunc = (resp) => {
                    this.article = resp.data;
                };
                blogList.getBlogDetail(id, respFunc, errorFunc);
            }
            // 获取目录分类
            menuApi.getCategory((resp) => {
                this.category = resp.data
            });


        }
    };
</script>

<style scoped>
    .el-select__tags {
        margin-left: 30px;
    }
</style>
