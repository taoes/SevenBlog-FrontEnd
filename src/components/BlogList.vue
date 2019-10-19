<template>
    <div class="blogListDiv">
        <BlogMenu></BlogMenu>

        <div class="blogList">
            <List item-layout="vertical" id="list">
                <ListItem v-for="item in data" :key="item.title">
                    <router-link :to="'/blog/article/'+item.id">
                        <ListItemMeta
                                avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                                :title="item.title"
                                :description="item.description"/>
                    </router-link>
                    <div class="articleTagList">
                        <Tag :color="tag.type" :key="tag.id" v-for="tag of item.tags">{{tag.name}}</Tag>
                    </div>
                    <template slot="extra">
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2321248164,1606717613&fm=26&gp=0.jpg"
                             style="width: 280px;max-height: 200px ">
                    </template>
                </ListItem>
            </List>
            <div class="page">
                <Page :total="total" :pageSize="pageSize" prev-text="上页" next-text="下页" placement="top"
                      style="width: 80%;margin-left: 10%"
                      @on-change="pageOnChange"/>
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
                this.pageOnChange(1);
            }
        },
        methods: {
            pageOnChange: function (pageNumber) {
                let respFunc = (resp) => {
                    this.data = resp.data.data;
                    this.total = resp.data.total;
                    scroll(0, 0)
                };
                blogApiListApi.getBlogList(pageNumber, this.pageSize, this.blogType, respFunc, errorFunc);
            }
        }, mounted: function () {
            this.pageOnChange(1);
        }
    }
</script>

<style scoped>


    .blogListDiv {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        min-height: 80%;
    }

    .blogList {
        margin-left: 20px;
        width: 90%;
        margin-right: 30px;
        padding: 20px;
        border-radius: 4px;
        box-shadow: 5px 5px 30px 1px #515a6e;
        background-color: #FFFFFF;
    }

    .page {
        text-align: center;
    }

    .articleTagList {
        margin-left: 50px;
    }


</style>
