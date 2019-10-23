<template>
    <div class="article">
        <el-table
                :data="articleList"
                border
                :fit="true"
                style="width: 100%;height: 90%;">
            <el-table-column
                    type="index"
                    label="序号"
                    min-width="5%">
            </el-table-column>

            <el-table-column
                    prop="title"
                    label="文章名称"
                    min-width="15%">
            </el-table-column>

            <el-table-column
                    prop="category"
                    label="目录"
                    min-width="15%">
            </el-table-column>


            <el-table-column
                    prop="createTime"
                    label="创建时间"
                    min-width="20%">
            </el-table-column>

            <el-table-column
                    prop="createTime"
                    label="更新时间"
                    min-width="20%">
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
            isSupportChange: function (value, articleId) {

            },
            currentPageChange: function (pageNumber) {
                let respFunc = (resp) => {
                    this.articleList = resp.data.data;
                    this.total = resp.data.total;
                    scroll(0, 0)
                };
                blogApiListApi.getBlogList(pageNumber, this.pageSize, this.blogType, respFunc, errorFunc);
            }, toArticleDetail: function (articleIndex) {
                this.$router.push('/admin/article/' + articleIndex)
            }, toArticleEdit: function (articleIndex) {
                this.$router.push('/admin/article/edit/' + articleIndex)
            }
        }, mounted() {
            this.currentPageChange(1);
        }
        ,
        watch: {}
    }
</script>

<style scoped>

</style>
