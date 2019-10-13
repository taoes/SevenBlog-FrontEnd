<template>

    <div class="carame">
        <Collapse v-model="defaultShowPanel" accordion>
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
    const pic1 = "https://unionfab-dev.oss-cn-hangzhou.aliyuncs.com/1/201909/108300e0-250b-42d4-9c91-fc2082b236cf";
    const pic2 = "https://unionfab-dev.oss-cn-hangzhou.aliyuncs.com/1/201909/f5228a70-b0c5-4385-adf6-db69e9de9c3b";
    export default {
        data() {
            return {
                defaultShowPanel: "2019年合影留念",
                serialList: {
                    "2019年合影留念": [
                        {name: "荷叶", img: pic1},
                        {name: "荷叶", img: pic1},
                        {name: "荷叶", img: pic1},
                        {name: "荷叶", img: pic1},
                        {name: "荷叶", img: pic1},
                        {name: "荷叶", img: pic1},
                        {name: "荷叶", img: pic1},
                        {name: "荷叶", img: pic1},
                        {name: "荷叶", img: pic1},
                    ],
                    "2018年合影留念": [
                        {name: "荷叶222", img: pic2},
                        {name: "荷叶222", img: pic2},
                        {name: "荷叶222", img: pic2},
                        {name: "荷叶222", img: pic2},
                        {name: "荷叶222", img: pic2},
                        {name: "荷叶222", img: pic2},
                        {name: "荷叶222", img: pic2}
                    ]
                }
            }
        }, methods: {
            showPic: function (pic) {
                this.$Modal.confirm({
                    title: pic.name || "暂无描述",
                    content: '<img src="' + pic.img + '" style="width:1080px;height:607px">',
                    width: '1200px',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
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
    }

    .content {
        overflow-y: auto;
        overflow-x: auto;
        height: 500px;
    }

</style>