<template>

    <div class="carame">
        <Collapse v-model="defaultShowPanel" accordion>
            <Panel class="Panel" name="大事件时间轴">
                大事件时间轴
                <div slot="content" style="overflow-y: auto;height: 300px">
                    <Timeline>
                        <TimelineItem color="green">
                            <p class="time">2011年12月</p>
                            <p>🔥 歃血为盟,结兄弟谊；死生相托,吉凶相救；福祸相依,患难相扶;</p>
                        </TimelineItem>

                        <TimelineItem color="red">
                            <p class="time">2012年4月日</p>
                            <p>我们从涡阳四中,各奔前程</p>
                        </TimelineItem>


                        <TimelineItem color="red">
                            <p class="time">2018年年10月1日</p>
                            <p>xxxxxx</p>
                        </TimelineItem>


                        <TimelineItem color="red">
                            <p class="time">2012年6月7日</p>
                            <p>我们从涡阳四中,各奔前程</p>
                        </TimelineItem>


                        <TimelineItem color="red">
                            <p class="time">2012年6月7日</p>
                            <p>我们从涡阳四中,各奔前程</p>
                        </TimelineItem>

                    </Timeline>
                </div>
            </Panel>


            <Panel class="Panel" :name="name" v-for="(serial,name) of serialList">
                {{name}}
                <p slot="content" class="content">
                    <img v-for="pic in serial" :src="pic.img" :key="pic.name" @click="showPic(pic)">
                </p>
            </Panel>
        </Collapse>
        <BackTop></BackTop>

    </div>


</template>
<script>

    export default {
        data() {
            return {
                defaultShowPanel: "大事件时间轴",
                serialList: {
                    "2015年合影留念": [
                        {name: "荷叶", img: "http://pzb5gmte2.bkt.clouddn.com/2015"},
                        {name: "荷叶", img: "http://pzb5gmte2.bkt.clouddn.com/2015.2"},
                    ],
                    "2016年合影留念": [
                        {name: "荷叶", img: "http://pzb5gmte2.bkt.clouddn.com/2016"},
                    ],
                    "2018年合影留念": [
                        {name: "荷叶222", img: "http://pzb5gmte2.bkt.clouddn.com/2018"},
                        {name: "荷叶222", img: "http://pzb5gmte2.bkt.clouddn.com/2018.2"},
                        {name: "荷叶222", img: "http://pzb5gmte2.bkt.clouddn.com/2018.3"},
                    ], "2019年合影留念": [
                        {name: "回廊", img: "http://pzb5gmte2.bkt.clouddn.com/2019.1.jpg"},
                        {name: "荷叶", img: "http://pzb5gmte2.bkt.clouddn.com/2019.4.jpg"},
                        {name: "荷叶2", img: "http://pzb5gmte2.bkt.clouddn.com/2019.5.back.jpg"},
                        {name: "池边", img: "http://pzb5gmte2.bkt.clouddn.com/2019.2"},
                        {name: "池边2", img: "http://pzb5gmte2.bkt.clouddn.com/2019.3"},
                    ]
                }
            }
        }, methods: {
            showPic: function (pic) {
                this.$Modal.confirm({
                    title: pic.name + "详情信息",
                    okText: "全屏浏览",
                    cancelText: "关闭",
                    content: '<img class="modelImg" src="' + pic.img + '" style="width:100%;height:100%">',
                    onOk: () => {
                        window.open(pic.img, '_blank');
                    },
                    onCancel: () => {

                    }
                });
            }
        }
    }
</script>

<style scoped>

    .carame {
        width: 80%;
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

    .content {
        overflow-y: auto;
        overflow-x: auto;
        height: 500px;
    }

    .demo {
        display: inline-block;
        width: 600px;
        height: 338px;
        text-align: center;
        line-height: 100px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
        margin-right: 4px;
    }


</style>