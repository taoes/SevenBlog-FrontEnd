<template>
    <div class="article">
        <div style="margin-bottom: 20px;display: flex;flex-direction: row">
            <el-input placeholder="搜索关键字" style="width: 600px" size="small"></el-input>
            <div id="buttones" style="margin-left: 20px">
                <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
                <el-button type="primary" icon="el-icon-circle-plus-outline" size="small" @click="addNewArticle">创建文章
                </el-button>
            </div>
        </div>
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
            </el-table-column>

            <el-table-column
                    prop="title"
                    label="文章名称"
                    min-width="25%">
            </el-table-column>

            <el-table-column
                    prop="type"
                    label="目录"
                    min-width="15%">
            </el-table-column>


            <el-table-column
                    prop="createDatetime"
                    label="创建时间"
                    min-width="15%">
            </el-table-column>

            <el-table-column
                    prop="updateDatetime"
                    label="更新时间"
                    min-width="15%">
            </el-table-column>

            <el-table-column
                    prop="support"
                    min-width="15%"
                    label="是否置顶"
            >
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
                    label="控制区"
                    min-width="15%"
            >
                <template slot-scope="scope">
                    <el-button icon="el-icon-search" circle size="mini"
                               @click="toArticleDetail(scope.row.id)"></el-button>

                    <el-button type="primary" icon="el-icon-edit" circle size="mini"
                               @click="toArticleEdit(scope.row.id)"
                    ></el-button>
                </template>

            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import './Article.css'
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

</style>
