<template>
    <div>
        <AppMenu></AppMenu>

        <!--        图片轮播-->
        <div id="carousel">
            <el-image
                    class="pic"
                    fit="cover"
                    :src="carouselImg"></el-image>
        </div>

        <div class="Index">
            <div id="index">
                <div class="title">
                    <el-button type="primary" icon="fa fa-book"> &nbsp;&nbsp;&nbsp;我的进阶之路</el-button>
                </div>

                <div id="myBooks">
                    <div v-for="(book,index) of this.myBooks" style="margin: 30px" :key="book.url">
                        <div style="display: flex;flex-direction: column;max-width: 200px;"
                             @click="toMyBook(index)">
                            <el-image fit="cover" :src='book.imgUrl'
                                      :lazy="true"
                                      style="width: 200px;height: fit-content;border: #515a6e 1px solid"/>
                            <span style="padding-top: 10px;"> <b>【进阶之路】{{book.name}}</b></span>
                        </div>
                    </div>
                </div>
                <el-button icon="el-icon-star-off" @click="openMyBooks()">更多内容，点击访问我的 <b>知识库</b>
                </el-button>

                <div class="title">
                    <el-button type="primary" icon="fa fa-music"> &nbsp;&nbsp;&nbsp;我的开源作品</el-button>
                </div>

                <div id="myWork">
                    <div v-for="(github,index) of this.myGithubAddress" style="margin: 30px" :key="github.id">
                        <div style="display: flex;flex-direction: column;max-width: 200px"
                             @click="toGithubRepos(index)">
                            <el-image fit="cover" :src='github.imgUrl'
                                      :lazy="true"
                                      style="width: 200px;height: fit-content;border: #515a6e 1px solid;"/>
                            <span style="padding-top: 10px;"> <b>【Github】{{github.name}}</b></span>
                        </div>
                    </div>
                </div>
                <el-button icon="el-icon-star-off" @click="openGithub()">更多内容，点击访问我的 GitHub 仓库
                </el-button>

                <div class="title">
                    <el-button type="primary" icon="fa fa-file"> &nbsp;&nbsp;&nbsp;热门文章</el-button>
                </div>

                <div id="recommendArticle">
                    <div v-for="(article,index) of this.getHotArticle" :key="article.id" style="margin: 30px">
                        <div style="display: flex;flex-direction: column;max-width: 200px" @click="toHotArticle(index)">
                            <el-image fit="cover" :src="randomUrl + article.id"
                                      style="width: 200px;height: fit-content"/>
                            <span style="padding-top: 10px;color:rebeccapurple"> <b style="color: #2c3e50">[{{article.access}}]</b> {{article.title}}</span>
                        </div>
                    </div>
                </div>
                <el-button icon="el-icon-star-off" @click="openBlog()" style="margin-bottom: 30px">
                    更多文章，点击访问我的博客
                </el-button>
            </div>
        </div>

        <!--   尾注  -->
        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import AppMenu from "../AppMenu";
    import MyFooter from "../MyFooter";
    import './Index.css'
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'Index',
        data: function () {
            return {
                randomUrl: 'https://picsum.photos/200/200?url=',
                carouselImg: "http://www.zhoutao123.com/picture/index/1x.jpeg",
                myBooks: [{
                    name: "深入理解Java 虚拟机",
                    imgUrl: 'http://www.zhoutao123.com/picture/book_convert/jvm.png',
                    url: 'https://www.yuque.com/tao_book/jvm'
                }, {
                    name: "高性能MySQL",
                    imgUrl: 'http://www.zhoutao123.com/picture/book_convert/mysql.png',
                    url: 'https://www.yuque.com/tao_book/mysql'
                }, {
                    name: "Netty 入门与实战",
                    imgUrl: 'http://www.zhoutao123.com/picture/book_convert/netty.png',
                    url: 'https://www.yuque.com/tao_book/netty'
                }, {
                    name: "Java 并发编程",
                    imgUrl: 'http://www.zhoutao123.com/picture/book_convert/java.png',
                    url: 'https://www.yuque.com/tao_book/java_concurrent'
                }, {
                    name: "JavaScript 学习笔记",
                    imgUrl: 'http://www.zhoutao123.com/picture/book_convert/js.png',
                    url: 'https://www.yuque.com/tao_book/JavaScript'
                }],
                myGithubAddress:
                    [{
                        "id": 6,
                        "name": "JAVA 开发奇淫巧技",
                        "url": "https://github.com/taoes/java-snippets",
                        "imgUrl": 'http://www.zhoutao123.com/picture/book_convert/java_tips.png',
                        "desc": "【持续更新中】Java开发奇淫巧技以及最佳实践"
                    }, {
                        "id": 5,
                        "name": "GoLang的代码片段",
                        "url": "https://github.com/taoes/go-snippets",
                        "imgUrl": 'http://www.zhoutao123.com/picture/book_convert/golang.png',
                        "desc": "【持续更新中】⚠️一些Go语法的代码实现以及有趣的框架使用"
                    }, {
                        "id": 2,
                        "name": " 基于SpringBoot的Sake事件分发库",
                        "url": "https://github.com/taoes/saka",
                        "imgUrl": 'http://www.zhoutao123.com/picture/book_convert/saka.png',
                        "desc": "一个基于SpringBoot的事件消息库"
                    }, {
                        "id": 1,
                        "name": "基于Netty4.x 构建的Web服务器",
                        "url": "https://github.com/taoes/NettyWebService",
                        "imgUrl": 'http://www.zhoutao123.com/picture/book_convert/netty_web.png',
                        "desc": "一个轻量级的类似SpringBoot的Web框架，实现IOC，以及拦截器等机制"
                    }]
            }
        },
        computed: {
            ...mapGetters(['getHotArticle', 'getGithubAddress', 'getDocAddress']),
            ...mapActions(['updateHotArticle', 'updateGithubRepos'])
        },
        methods: {
            toHotArticle: function (index) {
                // 跳转到热门文章
                this.$router.push(`/blog/article/${this.getHotArticle[index].id}`)
            }, toGithubRepos: function (index) {
                window.open(this.myGithubAddress[index].url);
            }, toMyBook: function (index) {
                window.open(this.myBooks[index].url);
            }, openGithub: function () {
                // 打开Github地址页面
                window.open(this.getGithubAddress);
            }, openMyBooks: function () {
                // 打开语雀文档
                this.$router.push('/book')
            }
            ,
            openBlog: function () {
                this.$router.push("/blog")
            }
        },
        components: {
            MyFooter, AppMenu
        }
        ,
        mounted() {
            if (this.getHotArticle) {
                this.updateHotArticle
            }

            if (this.getGithubRepos) {
                this.updateGithubRepos
            }
        }
    }
</script>

<style scoped>

    @media only screen and (min-width: 800px) {
        #carousel {
            margin-top: -1px;
            display: block;
        }

        .pic {
            width: 100%;
            height: 600px;
        }
    }


    @media only screen and (max-width: 800px) {
        #carousel {
            display: none;
        }
    }
</style>

