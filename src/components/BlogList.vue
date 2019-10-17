<template>
    <div class="blogList">
        <List item-layout="vertical" id="list">
            <ListItem v-for="item in data" :key="item.title">
                <router-link :to="'/blog/article/'+item.id">
                    <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                                  :title="item.title" :description="item.description"/>
                    {{ item.content }}

                </router-link>
                    <template slot="action">
                        <li>
                            <Icon type="ios-star-outline"/>
                            123
                        </li>
                        <li>
                            <Icon type="ios-thumbs-up-outline"/>
                            234
                        </li>
                        <li>
                            <Icon type="ios-chatbubbles-outline"/>
                            345
                        </li>
                    </template>
                    <template slot="extra">
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2321248164,1606717613&fm=26&gp=0.jpg" style="width: 280px;max-height: 200px ">
                    </template>


            </ListItem>
        </List>
        <div class="page">
            <Page :total="total" :pageSize="pageSize" prev-text="上页" next-text="下页" placement="top"
                  style="width: 80%;margin-left: 10%"
                  @on-change="pageOnChange"/>
        </div>
    </div>
</template>
<script>

    import blogApiListApi from "@/api/BlogListApi";

    let errorFunc = () => {
        this.$Message.error("网络请求出现异常")
    };

    export default {
        data() {
            return {
                data: [],
                total: 0,
                pageSize: 5,
                markDown: "# 1234 - [x] 2423"
            }
        }, methods: {
            pageOnChange: function (pageNumber) {
                let respFunc = (resp) => {
                    this.data = resp.data.data;
                    this.total = resp.data.total;
                    scroll(0, 0)
                };


                blogApiListApi.getBlogList(pageNumber, this.pageSize, respFunc, errorFunc);
            }
        }, mounted: function () {
            let respFunc = (resp) => {
                this.data = resp.data.data;
                this.total = resp.data.total;
                javascript:scroll(0, 0)
            };
            blogApiListApi.getBlogList(1, this.pageSize, respFunc, errorFunc);
        }
    }
</script>

<style scoped>


    .blogList {
        margin-left: 10%;
        width: 80%;
        padding: 20px;
        border-radius: 10px 10px 10px 10px;
        box-shadow: 5px 5px 30px 1px #515a6e;
        background-color: #FFFFFF;
    }

    .page {
        text-align: center;
    }


</style>
