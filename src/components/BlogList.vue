<template>
    <div class="blogListDiv">
        <BlogMenu></BlogMenu>

        <div class="blogList">
            <el-card shadow="hover" v-for="item in data" :key="item.title">
                <div slot="header" class="clearfix">
                    <router-link :to="'/blog/article/'+item.id">
                    <span style="font-size: 14px;color:#303133 ">
                        <i class="el-icon-s-management"></i>&nbsp;{{item.title}}</span>
                        <div style="float: right; padding: 3px 0" type="text">
                            <el-tag v-for="tag of item.tags" :type="tag.type" size="small" style="margin-left: 10px">
                                {{tag.name}}
                            </el-tag>
                        </div>
                    </router-link>
                </div>

                <div style="display: flex;flex-direction: row">
                    <div class="descDiv" style="padding-right: 30px;color:#606266;">
                        {{item.description}}
                    </div>
                    <div>
                        <img style="width: 280px"
                             src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2321248164,1606717613&fm=26&gp=0.jpg">
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
                markDown: "# 1234 - [x] 2423"
            }
        },
        computed: {
            blogType: function () {
                return this.$store.state.blogMenu.params;
            }
        },
        watch: {
            blogType(newValue, oldValue) {
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
            }
        }, mounted: function () {
            this.currentChange(1);
        }
    }
</script>

<style scoped>


    .blogListDiv {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        height:1024px;
    }

    .blogList {
        margin-left: 20px;
        width: 90%;
        max-height: 1024px;
        overflow-y: auto;
        margin-right: 30px;
        padding: 20px;
        border-radius: 4px;
        box-shadow: 5px 5px 30px 1px #515a6e;
        background-color: #FFFFFF;
    }
    .el-card {
        margin-bottom: 20px;
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


</style>
