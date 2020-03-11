<template>
    <div>
        <AppMenu></AppMenu>
        <div style="height: 80px"></div>
        <div class="camera">
            <el-collapse v-model="defaultShowPanel" accordion>
                <el-collapse-item class="Panel" style="padding-left: 0">
                    <template slot="title">
                        <span class="titleStyle"> 🔥 大事件时间轴</span>
                    </template>
                    <el-timeline>
                        <el-timeline-item color="green" size="normal">
                            <p class="time">2011年12月</p>
                            <p>🔥 歃血为盟,结兄弟谊；死生相托,吉凶相救；福祸相依,患难相扶;</p>
                        </el-timeline-item>

                        <el-timeline-item color="red" size="normal">
                            <p class="time">2012年4月日</p>
                            <p>我们从涡阳四中,各奔前程</p>
                        </el-timeline-item>


                        <el-timeline-item color="#0088ee" size="normal">
                            <p class="time">2018年年10月1日</p>
                            <p>xxxxxx</p>
                        </el-timeline-item>


                        <el-timeline-item color="yellow" size="normal">
                            <p class="time">2012年6月7日</p>
                            <p>我们从涡阳四中,各奔前程</p>
                        </el-timeline-item>


                        <el-timeline-item color="blue" size="normal">
                            <p class="time">2012年6月7日</p>
                            <p>我们从涡阳四中,各奔前程</p>
                        </el-timeline-item>

                    </el-timeline>
                </el-collapse-item>


                <el-collapse-item :key="name" class="Panel" v-for="(serial,name) of this.getPictureGroup()"
                                  style="padding-left: 0">

                    <template slot="title">
                        <h2 class="titleStyle">&nbsp;📷 {{name}}</h2>
                    </template>

                    <div v-viewer="options"
                         style="display: flex;align-items: center;flex-wrap: wrap;justify-content: center">
                        <template v-for="{name, img,id} in serial">
                            <img v-lazy="img +'?imageView2/1/w/400/h/400'"
                                  :data-source="img"
                                 class="image"
                                 :key="id"
                                 :alt="name">
                        </template>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>

</template>
<script>

    import AppMenu from "../AppMenu";
    import {mapActions, mapGetters} from "vuex";

    export default {
        data() {
            return {
                options: {
                    toolbar: true,
                    url: 'data-source'
                },
                dialogFormVisible: false,
                picture: {},
                defaultShowPanel: "大事件时间轴",
                serialList: {
                    "☘️ 2015年合影留念": [
                        {name: "荷叶1", img: "http://pic.zhoutao123.com/2015"},
                        {name: "荷叶2", img: "http://pic.zhoutao123.com/2015.2"},
                    ],
                    "🏝 2016年合影留念": [
                        {name: "荷叶3", img: "http://pic.zhoutao123.com/2016"},
                    ],
                    "🌲 2018年合影留念": [
                        {name: "荷叶221", img: "http://pic.zhoutao123.com/2018"},
                        {name: "荷叶222", img: "http://pic.zhoutao123.com/2018.2"},
                        {name: "荷叶223", img: "http://pic.zhoutao123.com/2018.3"},
                    ], "🌳 2019年合影留念": [
                        {name: "回廊", img: "http://pic.zhoutao123.com/2019.1.jpg"},
                        {name: "荷叶4", img: "http://pic.zhoutao123.com/2019.4.jpg"},
                        {name: "荷叶5", img: "http://pic.zhoutao123.com/2019.5.back.jpg"},
                        {name: "池边6", img: "http://pic.zhoutao123.com/2019.2"},
                        {name: "池边7", img: "http://pic.zhoutao123.com/2019.3"},
                    ]
                }
            }
        },
        components: {AppMenu},
        methods: {
            ...mapGetters(['getPictureGroup']),
            ...mapActions(['updatePictureGroup'])
        },
        mounted() {
            if (this.getPictureGroup) {
                this.updatePictureGroup()
            }
        }
    }
</script>

<style scoped>

    .camera {
        width: 80%;
        margin-top: 30px;
        margin-left: 10%;
    }

    img {
        width: 250px;
        margin: 30px;
        display: flex;
        float: left;
        border-radius: 5px;
        box-shadow: 1px 1px 5px 1px #2c3e50;

    }

    .modelImg {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .titleStyle {
        font-size: 18px;
        font-weight: 500;
        margin-left: 20px;
        font-family: "STFangsong", "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    }


</style>
