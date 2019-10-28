<template>

    <div class="note bookCard">
        <el-row>
            <el-col :span="8" v-for="(book) in bookList" :key="book.title" style="text-align: center">
                <el-card :body-style="{ padding: '40px'}"
                         style="height: 380px;margin-top: 30px;margin-bottom: 40px">
                    <img :src="book.cover"
                         class="image">
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import "./style.css"

    export default {
        name: "Note",
        data: function () {
            return {
                bookList: [
                    {
                        cover: "https://pic1.zhimg.com/50/v2-c83768c1fe2e4f473833d78c79c143ab_qhd.webp",
                        url: "https://www.yuque.com/mybook/jvm",
                        title: "☕️ 深入理解Java虚拟机 ",
                        subTitle: "JVM高级特性与最佳实践",
                        desc: ""
                    },
                    {
                        cover: "https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png",
                        url: "https://www.yuque.com/mybook/jvm",
                        title: "🌲 深入NodeJS 技术栈(敬请期待)",
                        subTitle: "NodeJS相关知识点整理",
                        desc: ""
                    }, {
                        cover: "https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png",
                        url: "https://www.yuque.com/mybook/jvm",
                        title: "🔐 数据库相关总结(敬请期待)",
                        subTitle: "Mysql以及NoSQL等技术记录",
                        desc: ""
                    }, {
                        cover: "https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png",
                        url: "https://www.yuque.com/mybook/jvm",
                        title: "Java的IO流(敬请期待)",
                        subTitle: "",
                        desc: ""
                    }
                    , {
                        cover: "https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png",
                        url: "https://www.yuque.com/mybook/jvm",
                        title: "🔮 杂谈",
                        subTitle: "",
                        desc: ""
                    }
                ]
            }
        },
        methods: {
            toNewPage: function (book) {
                window.open(book.url, '_blank', 'toolbar=yes, width=900, height=700')
            }
        }

    }
</script>

<style scoped>
</style>
