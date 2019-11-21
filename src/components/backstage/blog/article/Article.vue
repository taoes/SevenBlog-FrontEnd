<template>
    <div class="article">
        <div class="articleCtl">
            <el-input placeholder="搜索关键字" style="width: 600px" size="small"></el-input>
            <div id="buttones" style="margin-left: 20px">
                <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
                <el-button type="primary" icon="el-icon-circle-plus-outline" size="small" @click="addNewArticle">创建文章
                </el-button>
            </div>
        </div>
        <div class="articleList">
            <el-table
                    :data="articleList"
                    border
                    size="mini"
                    :fit="true"
                    style="width: 100%;height: 90%;">
                <el-table-column
                        height="100px"
                        type="index"
                        label="序号"
                        min-width="5%">
                    <template slot="header">
                        <i class="fas fa-list-ol icon"></i>
                        <span>序2号</span>
                    </template>
                </el-table-column>

                <el-table-column
                        prop="title"
                        label="文章名称"
                        min-width="25%">
                    <template slot="header">
                        <i class="fas fa-rss icon"></i>
                        <span>文章名称</span>
                    </template>
                </el-table-column>

                <el-table-column
                        prop="type"
                        label="目录"
                        min-width="15%">
                    <template slot="header">
                        <i class="fas fa-folder icon"></i>
                        <span>所属目录</span>
                    </template>
                </el-table-column>


                <el-table-column
                        prop="createDatetime"
                        label="创建时间"
                        min-width="15%">
                    <template slot="header">
                        <i class="far fa-clock icon"></i>
                        <span>创建时间</span>
                    </template>
                </el-table-column>

                <el-table-column
                        prop="updateDatetime"
                        label="更新时间"
                        min-width="15%">
                    <template slot="header">
                        <i class="fas fa-history icon"></i>
                        <span>更新时间</span>
                    </template>
                </el-table-column>

                <el-table-column
                        prop="support"
                        min-width="15%"
                        label="是否置顶"
                >
                    <template slot="header">
                        <i class="far fa-arrow-alt-circle-up icon"></i>
                        <span>是否置顶</span>
                    </template>
                    <template slot-scope="scope">
                        <el-switch
                                v-model="scope.row.top"
                                @change="isSupportChange($event,scope.row.id)"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                        </el-switch>
                    </template>
                </el-table-column>

                <el-table-column
                        prop="ctrl"
                        label=""
                        min-width="15%">
                    <template slot-scope="scope">
                        <el-button icon="far fa-eye" size="mini"
                                   @click="toArticleDetail(scope.row.id)">
                        </el-button>

                        <el-button type="primary" icon="far fa-edit" size="mini"
                                   @click="toArticleEdit(scope.row.id)">
                        </el-button>
                    </template>

                </el-table-column>
            </el-table>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import './Article.css'
    import Footer from "../../../Footer";
    import blogApiListApi from "@/api/BlogListApi";


    let errorFunc = () => {
        this.$Message.error("网络请求出现异常")
    };

    export default {
        name: "Article",
        data: function () {
            return {
                articleList: []
            }
        },
        methods: {
            isSupportChange: function () {

            },
            currentPageChange: function () {
                let respFunc = (resp) => {
                    this.articleList = resp.data;
                    scroll(0, 0)
                };
                blogApiListApi.getBlogSimpleList(respFunc, errorFunc);
            }, toArticleDetail: function (articleIndex) {
                // 跳转到详情页面
                this.$router.push('/blog/article/' + articleIndex)
            }, toArticleEdit: function (articleIndex) {
                // 跳转到编辑文章界面
                this.$router.push('/admin/article/edit/' + articleIndex)
            }, addNewArticle: function () {
                // 创建新的文章
                this.$router.push('/admin/article/edit/' + 0);
            }
        }, mounted() {
            this.currentPageChange();
        }
        ,
        watch: {}
    }
</script>

<style scoped>

    .articleCtl {
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        margin: 20px 4%;
    }

    .articleList {
        max-height: 800px;
        overflow-x: auto;
        margin-right: 4%;
        margin-left: 4%;
    }

    .icon {
        margin-left: 4%;
        margin-right: 4%;
    }


    i {
        margin-right: 2px;
        color: #0088EE;
    }

    i span {
        color: black;
    }


</style>
