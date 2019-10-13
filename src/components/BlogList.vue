<template>
    <div class="blogList">
        <List item-layout="vertical" id="list">
            <ListItem v-for="item in data" :key="item.title">
                <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description"/>
                {{ item.content }}
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
                    <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px">
                </template>
            </ListItem>
        </List>
        <div class="page">
            <Page :total="100" prev-text="上页" next-text="下页" placement="top" style="width: 80%;margin-left: 10%"
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
                data: []
            }
        }, methods: {
            pageOnChange: function (pageNumber) {
                let respFunc = (resp) => {
                    this.data = resp.data;
                    this.$Message.info("页面切换到" + pageNumber + "页完成")
                };


                blogApiListApi.getBlogList(pageNumber, respFunc, errorFunc);
            }
        }, created: function () {
            let respFunc = (resp) => {
                this.data = resp.data
            };


            blogApiListApi.getBlogList(1, respFunc, errorFunc);
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