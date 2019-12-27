<template>
    <div class="articleEdit">
        <div class="Collect">

            <div class="articleGroup" style="display: flex;flex-direction: row">
                <div>
                    <el-button
                            size="mini"
                            type="primary"
                            icon="el-icon-back"
                            @click="backLastPage">返回
                    </el-button>
                    <el-button
                            size="mini"
                            type="primary"
                            icon="el-icon-upload "
                            @click="submit">提交
                    </el-button>
                    <el-button
                            size="small"
                            type="primary"
                            icon="el-icon-camera-solid"
                            @click="preview">预览
                    </el-button>
                </div>

                <div style="margin-left: 40px">
                    <span>文章标题</span>
                    <el-input style="width: 400px" v-model="article.title" size="small"
                              :placeholder="article.placeholder"/>
                </div>


                <div style="margin-left: 40px;">
                    <span>文章分类</span>
                    <el-select v-model="article.type" placeholder="文章类别" size="small">
                        <el-option-group
                                v-for="group in blogCategory"
                                :key="group.id"
                                :label="group.name">
                            <el-option
                                    v-for="item in group.sub"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.key">
                            </el-option>
                        </el-option-group>
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

        <div class="markdownEdit">
            <Markdown :article="this.article" :options="options"/>
        </div>

    </div>
</template>

<script>
    import "./ArticleEdit.css";
    import blogList from "@/api/BlogListApi";
    import menuApi from "@/api/MenuApi";
    import addFileApi from "@/api/FileApi";
    import Markdown from "../../../markdown/Markdown";

    let errorFunc = () => {

    };

    export default {
        name: "ArticleEdit",
        data: function () {
            return {
                edit: true,
                content: '',
                article: {
                    id: undefined,
                    title: "",
                    placeholder: "请输入标题~",
                    content: '',
                    type: '',
                    tagList: [],
                },
                category: [],
                options: {
                    markdownIt: {
                        html: true,
                        langPrefix: true
                    }
                }
            };
        },
        components: {Markdown},
        computed: {
            markdownTheme: function () {
                return this.$store.state.markdown.theme;
            },
            blogCategory: function () {
                let sumCategory = [];
                for (let index in this.category) {
                    sumCategory = sumCategory.concat(this.category[index])
                }
                return sumCategory;
            }
        },
        methods: {
            uploadImg: function (pos, $file) {
                let formData = new FormData();
                formData.append('file', $file);

                let respFunc = (resp) => {
                    this.$refs.md.$img2Url(pos, resp.data.url);
                };
                let errorFunc = () => {
                    this.$message("上传文件失败, 请稍后重试");
                };
                addFileApi.upload(formData, respFunc, errorFunc);

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
                this.$router.push("/blog");
            }, preview: function () {
                this.$notify.error({
                    title: "功能暂不支持",
                    message: "🌲 功能暂未开发完成，敬请期待"
                })
            }, markdownChange: function (value) {
                if (this.article.id) {
                    localStorage.setItem(this.article.id, value);
                } else {
                    localStorage.setItem('new', value);
                }
            }
        },
        mounted: function () {
            let id = this.$route.params.id;
            this.edit = id;
            this.id = id;

            // 获取文章
            if (this.edit && this.id !== 0) {
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

    .markdownEdit {
        width: 100%;
        margin-left: 20px;
        margin-right: 20px;
    }
</style>
