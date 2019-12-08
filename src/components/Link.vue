<template>
    <div>
        <AppMenu></AppMenu>
        <div class="linkArea">
            <div class="title">

                <el-divider>
                    <h1 class="title"><i class="fa fa-music"></i> 我的站点 </h1>
                </el-divider>

            </div>
            <div class="cards">
                <el-card class="card" v-for="(link,index) in this.getLinkList" :key="link.id">
                    <img :src="randomUrl + index"
                         class="image" alt="图片加载失败"/>
                    <div style="text-align: center">
                        <span class="webTitle">{{link.name}}</span>
                        <p>{{link.desc}}</p>
                        <div style="padding-top: 10px">
                            <el-button size="mini" @click="toLink(link)" icon="el-icon-position"> 点击访问</el-button>
                        </div>
                    </div>
                </el-card>
            </div>


            <div class="title">

                <el-divider>
                    <h1 class="title"><i class="fa fa-music"></i> 友情链接 </h1>
                </el-divider>

            </div>
            <div class="cards">
                <el-card class="card" v-for="(link,index) in this.getLinkList" :key="link.id">
                    <img :src="randomUrl + index * 100"
                         class="image" alt="ddd"/>
                    <div style="text-align: center">
                        <span class="webTitle">{{link.name}}</span>
                        <p>{{link.desc}}</p>
                        <div style="padding-top: 10px">
                            <el-button size="mini" @click="toLink(link)"> 点击访问</el-button>
                        </div>
                    </div>
                </el-card>
            </div>


            <div class="title">
                <el-divider>
                    <h1 class="title"><i class="fa fa-music"></i> 推荐站点 </h1>
                </el-divider>
            </div>
            <div class="cards">

                <el-card class="card" v-for="(link,index) in this.getLinkList" :key="link.id">
                    <img :src="randomUrl + index * 10"
                         class="image" alt="ddd"/>
                    <div style="text-align: center">
                        <span class="webTitle">{{link.name}}</span>
                        <p>{{link.desc}}</p>
                        <div style="padding-top: 10px">
                            <el-button size="mini" @click="toLink(link)"> 点击访问</el-button>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>

        <el-dialog
                :title="openLink.name"
                :visible.sync="dialogVisible"
                width="260px">
            <span>即将打开站外网站，是够继续？</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="openWeb(openLink.url)">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    import AppMenu from "./AppMenu";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Link",
        components: {AppMenu},
        data: function () {
            return {
                randomUrl: 'https://picsum.photos/100/150?url=',
                openLink: {},
                dialogVisible: false,
            }
        }, computed: {
            ...mapGetters(['getLinkList']),
            ...mapActions(['updateLinkList'])
        },
        methods: {
            toLink: function (link) {
                this.openLink = link;
                this.dialogVisible = true;
            }, openWeb: function (url) {
                window.open(url);
                this.dialogVisible = false;
            }
        },
        mounted() {
            if (this.getLinkList) {
                this.updateLinkList;
            }
        }
    }
</script>

<style scoped>
    .card {
        height: 300px !important;
        color: #999;
        margin-bottom: 40px;
    }

    .el-card__body {
        padding: 0 !important;
    }

    .cards {
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 20px;
        padding-top: 20px;
    }

    .image {
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 10px;
        align-items: center;
    }

    .webTitle {
        color: darkslategray;
        font-size: 16px;
        font-weight: 500;
    }

    .el-card {
        padding-bottom: 10px !important;
        width: 200px !important;
        height: 300px !important;
    }


    .title {
        text-align: center;
    }

    .linkArea {
        margin-top: 30px;
        margin-left: 10%;
        margin-right: 10%;
        background-color: white;
        padding-top: 20px;
        padding-right: 10px;
        padding-left: 10px;
    }
</style>