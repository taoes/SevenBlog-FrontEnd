<template>
    <div>
        <AppMenu></AppMenu>

        <div style="height: 80px"></div>
        <div style="display:flex;display:-webkit-flex;justify-content: center;margin-top: 30px">
            <div class="note bookCard" style="margin-top: 30px">
                <el-card :body-style="{ padding: '0px',display:'flex'}"
                         v-for="(book) in bookList "
                         :key="book.id"
                         style="height:fit-content;width:fit-content;display: flex;justify-content: center;margin-top: 20px">
                    <Book :book="book"></Book>
                </el-card>

                <div style="margin-top: 30px;margin-bottom: 10px">
                    <el-button icon="el-icon-star-off" @click="openDocSite()">更多内容，点击访问我的语雀文档
                    </el-button>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    import "./style.css"
    import AppMenu from "../AppMenu";
    import Book from "../book/Book";
    import {mapGetters} from "vuex";

    export default {
        name: "Note",
        components: {Book, AppMenu},
        computed: {
            ...mapGetters(['getDocAddress']),
        },

        data: function () {
            return {
                bookList: [{
                    id: Math.random() * 10000,
                    name: "深入理解Java 虚拟机",
                    imgUrl: 'http://www.zhoutao123.com/picture/book_convert/jvm.png',
                    url: 'https://www.yuque.com/tao_book/jvm'
                }, {
                    id: Math.random() * 10000,
                    name: "高性能MySQL",
                    imgUrl: 'http://www.zhoutao123.com/picture/book_convert/mysql.png',
                    url: 'https://www.yuque.com/tao_book/mysql'
                }, {
                    id: Math.random() * 10000,
                    name: "Netty 入门与实战",
                    imgUrl: 'http://www.zhoutao123.com/picture/book_convert/netty.png',
                    url: 'https://www.yuque.com/tao_book/netty'
                }, {
                    id: Math.random() * 10000,
                    name: "Java 并发编程",
                    imgUrl: 'http://www.zhoutao123.com/picture/book_convert/java.png',
                    url: 'https://www.yuque.com/tao_book/java_concurrent'
                }, {
                    id: Math.random() * 10000,
                    name: "JavaScript 学习笔记",
                    imgUrl: 'http://www.zhoutao123.com/picture/book_convert/js.png',
                    url: 'https://www.yuque.com/tao_book/JavaScript'
                }],
            }
        },
        methods: {
            toNewPage: function (book) {
                window.open(book.url, '_blank', 'toolbar=yes, width=900, height=700')
            },
            openDocSite: function () {
                window.open(this.getDocAddress)
            }
        }

    }
</script>

<style scoped>
</style>
