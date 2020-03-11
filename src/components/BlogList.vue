<template>
    <div class="blogListDiv" ref="blogListDiv">
        <el-backtop></el-backtop>

        <BlogMenu></BlogMenu>

        <div class="blogList">
            <div style="margin-bottom: 20px;margin-top: 20px;display: flex;flex-direction: row;padding-left: 20px">
                <el-input
                        style="width: 100%"
                        id="searchArticleInput"
                        v-model="searchText"
                        icon="el-icon-upload ">
                </el-input>
                <el-button
                        style="margin-left: 30px;margin-right: 30px"
                        icon="el-icon-search"
                        @click="search">全局搜索
                </el-button>
            </div>


            <el-card shadow="hover" v-for="item in data" :key="item.title" style="height: fit-content">
                <div style="margin-bottom: 10px">
                    <router-link :to="'/blog/article/'+item.id">
                        <span class="blogTitle">{{item.title}}</span>
                    </router-link>
                    <el-tag v-for="(tag) of item.tagList" :key="tag" :type="tagType[Math.floor(Math.random()*5)]"
                            effect="dark"
                            size="small"
                            style="margin-left: 10px;">
                        {{tag}}
                    </el-tag>
                </div>

                <el-divider/>
                <div style="display: flex;flex-direction: column;">
                    <div class="descDiv" style="padding-right: 30px;width:100%;color:#000000;flex-grow: 1">
                        <markdown-it-vue class="descSpan" :content="item.description"/>
                    </div>
                </div>

                <div style="margin-left: 20px;margin-top: 5px;margin-bottom: 5px" type="text">
                    <i class="far fa-eye" style="color: #0088EE"/>
                    <span style="margin-left:5px;margin-right: 5px;color: darkgray">{{item.access}}</span>

                    <i class="far fa-thumbs-up" style="color: #E6A23C;margin-left: 30px"/>
                    <span style="margin-left:5px;margin-right: 5px;color: darkgray">{{Math.ceil(item.access/3)}}</span>

                    <i class="far fa-thumbs-down" style="color: #F56C6C;margin-left: 30px"/>
                    <span style="margin-left:5px;margin-right: 5px;color: darkgray">{{0}}</span>
                </div>
            </el-card>


            <div class="page">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :page-size="10"
                        :total="total"
                        @current-change="currentChange">
                </el-pagination>
            </div>
        </div>

        <div>
            <MyFooter/>
        </div>
    </div>
</template>
<script>

    import blogApiListApi from "@/api/BlogListApi";
    import BlogMenu from "./blog/BlogMenu";
    import MyFooter from "./MyFooter";
    import MarkdownItVue from 'markdown-it-vue'
    import 'markdown-it-vue/dist/markdown-it-vue.css'

    let errorFunc = () => {
    };

    export default {
        components: {MyFooter, MarkdownItVue, BlogMenu},
        data() {
            return {
                data: [],
                type: '',
                total: 0,
                pageSize: 7,
                searchText: '',
                tagType: ['success', '', 'info', 'danger', 'warning']
            }
        },
        computed: {
            blogType: function () {
                return this.$store.state.menu.params;
            }, showMenu: function () {
                return this.$store.state.menu.blogCategoryMenu;
            }
        },
        watch: {
            blogType() {
                this.currentChange(1);
            }
        },
        methods: {
            currentChange: function (pageNumber) {
                let respFunc = (resp) => {
                    this.data = resp.data.data;
                    this.total = resp.data.total;

                    document.body.scrollTop = 0
                    // firefox
                    document.documentElement.scrollTop = 0
                    // safari
                    window.pageYOffset = 0
                };
                document.querySelector("#sss").scrollIntoView(true);
                blogApiListApi.getBlogList(pageNumber, this.pageSize, this.blogType, respFunc, errorFunc);
            }, search: function () {
                this.$message({
                    showClose: true,
                    message: '抱歉，搜索功能正在紧急开发中',
                    type: 'error'
                });
            }
        }, mounted: function () {
            this.currentChange(1);
        }
    }
</script>

<style scoped>


    .blogListDiv {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        height: 1024px;
    }


    @media only screen and (min-width: 987px) {

        .blogList {
            margin-top: 30px;
            margin-left: 15%;
            margin-right: 15%;
            border-radius: 4px;
            box-shadow: 5px 5px 20px 1px #515a6e;
            background-color: rgba(255, 255, 255, 0);
        }


    }

    @media only screen and (max-width: 987px) {
        .blogList {
            margin-top: 20px;
            margin-left: 0;
            margin-right: 0;
            border-radius: 4px;
            box-shadow: 5px 5px 3px 1px #515a6e;
            background-color: rgba(255, 255, 255, 0);
        }
    }

    .el-card {
        margin-bottom: 30px;
        background-color: #FEFEFE;
    }

    .descDiv {
        line-height: 24px;
        margin-left: 10px;
        margin-right: 30px;
    }

    .descSpan {
        color: darkslategrey;
        font-weight: bold;
        font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    }

    .page {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .articleTagList {
        margin-left: 50px;
    }

    /*     文章标题鼠标样式*/
    .blogTitle {
        font-size: 2em;
        color: black;
        font-weight: 900;
        font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    }

    .blogTitle:hover {
        color: #2c3e50;
    }


</style>
