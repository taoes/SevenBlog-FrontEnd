<template>
    <div>
        <AppMenu></AppMenu>
        <div class="camera">
            <el-collapse v-model="defaultShowPanel" accordion>
                <el-collapse-item class="Panel">
                    <template slot="title">
                        <span class="titleStyle">🔥 大事件时间轴</span>
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


                <el-collapse-item :key="name" class="Panel" v-for="(serial,name) of serialList"
                                  style="padding-left: 0px">

                    <template slot="title">
                        <span class="titleStyle">&nbsp;{{name}}</span>
                    </template>


                    <div v-viewer="options">
                        <template v-for="{name, img} in serial">
                            <img :src="img +'?imageView2/1/w/400/h/400'" :data-source="img" class="image" :key="name"
                                 :alt="name">
                        </template>
                    </div>


                    <!--                    <viewer :images="serial">-->
                    <!--                        <img v-for="(src,index) in serial"-->
                    <!--                             :src="src.img + '?imageView2/1/w/500/h/500'"-->
                    <!--                             :data-source="src.img " :key="index"-->
                    <!--                             :alt="src.name">-->
                    <!--                    </viewer>-->
                </el-collapse-item>


                <!-- component -->


            </el-collapse>
        </div>
    </div>

</template>
<script>

    import AppMenu from "../AppMenu";

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
                        {name: "荷叶1", img: "http://pzb5gmte2.bkt.clouddn.com/2015"},
                        {name: "荷叶2", img: "http://pzb5gmte2.bkt.clouddn.com/2015.2"},
                    ],
                    "🏝 2016年合影留念": [
                        {name: "荷叶3", img: "http://pzb5gmte2.bkt.clouddn.com/2016"},
                    ],
                    "🌲 2018年合影留念": [
                        {name: "荷叶221", img: "http://pzb5gmte2.bkt.clouddn.com/2018"},
                        {name: "荷叶222", img: "http://pzb5gmte2.bkt.clouddn.com/2018.2"},
                        {name: "荷叶223", img: "http://pzb5gmte2.bkt.clouddn.com/2018.3"},
                    ], "🌳 2019年合影留念": [
                        {name: "回廊", img: "http://pzb5gmte2.bkt.clouddn.com/2019.1.jpg"},
                        {name: "荷叶4", img: "http://pzb5gmte2.bkt.clouddn.com/2019.4.jpg"},
                        {name: "荷叶5", img: "http://pzb5gmte2.bkt.clouddn.com/2019.5.back.jpg"},
                        {name: "池边6", img: "http://pzb5gmte2.bkt.clouddn.com/2019.2"},
                        {name: "池边7", img: "http://pzb5gmte2.bkt.clouddn.com/2019.3"},
                    ]
                }
            }
        },
        components: {AppMenu},
        methods: {
            changeShowStatus: function (pic) {
                this.dialogFormVisible = !this.dialogFormVisible;
                this.picture = pic;
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
        margin-left: 20px;
    }


</style>
