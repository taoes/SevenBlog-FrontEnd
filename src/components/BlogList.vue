<template>
    <div class="blogListDiv">
        <BlogMenu></BlogMenu>

        <div class="blogList">
            <div style="margin-bottom: 20px">
                <el-input
                        size="small"
                        style="width: 400px"
                        icon="el-icon-upload ">
                </el-input>
                <el-button
                        style="margin-left: 30px"
                        type="primary"
                        size="small"
                        icon="el-icon-search"
                        @click="search">全局搜索
                </el-button>
            </div>


            <el-card shadow="hover" v-for="item in data" :key="item.title">
                <div slot="header" class="clearfix">
                    <router-link :to="'/blog/article/'+item.id">
                    <span class="blogTitle"
                          style="font-size: 16px;color:#1A1A1A;font-weight: bold;font-family:'SimSun',serif">
                        <i class="el-icon-s-management"></i>&nbsp;{{item.title}}</span>
                    </router-link>
                </div>

                <div style="display: flex;flex-direction: column;">

                    <div class="descDiv" style="padding-right: 30px;width:100%;color:#000000;flex-grow: 1">
                        {{item.description}}
                    </div>

                    <div style="padding: 3px 0;flex-grow: 4;align-self: stretch" type="text">
                        <el-tag v-for="tag of tagList" :key="tag.id" :type="tag.type" size="small"
                                style="margin-left: 10px;">
                            {{tag.name}}
                        </el-tag>
                    </div>

                </div>
            </el-card>


            <div class="page">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :page-size="5"
                        :total="total"
                        @current-change="currentChange">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>

    import blogApiListApi from "@/api/BlogListApi";
    import BlogMenu from "./blog/BlogMenu";

    let errorFunc = () => {
        this.$Message.error("网络请求出现异常")
    };

    export default {
        components: {BlogMenu},
        data() {
            return {
                data: [],
                type: '',
                total: 0,
                pageSize: 5,
                tagList: [{id: 1, type: 'info', name: 'Jsva'}]
            }
        },
        computed: {
            blogType: function () {
                return this.$store.state.blogMenu.params;
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
                    scroll(0, 0)
                };
                blogApiListApi.getBlogList(pageNumber, this.pageSize, this.blogType, respFunc, errorFunc);
            }, search: function () {
                //todo 全局搜索
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

    .blogList {
        margin-top: 30px;
        margin-left: 20px;
        max-height: 1024px;
        overflow-y: auto;
        margin-right: 20px;
        padding: 20px;
        border-radius: 4px;
        box-shadow: 5px 5px 30px 1px #515a6e;
        background-color: #FFFFFF;
    }

    .el-card {
        margin-bottom: 30px;
        background-color: #FEFEFE;
    }

    .descDiv {
        margin-left: 10px;
        margin-right: 30px;
    }

    .page {
        text-align: center;
        margin-top: 20px;
    }

    .articleTagList {
        margin-left: 50px;
    }

    /*     文章标题鼠标样式*/
    blogTitle:hover {
        color: #2c3e50;
    }


</style>
