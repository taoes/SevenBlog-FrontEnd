<template>
    <div>
        <AppMenu></AppMenu>
        <div id="carousel">
            <el-carousel indicator-position="outside" height="500px" :interval="2000" arrow="always">
                <el-carousel-item v-for="item in carouselImg" :key="item">
                    <el-image
                            class="pic"
                            fit="cover"
                            :src="item"></el-image>
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="Index">
            <div id="index">
                <h1><i class="far fa-lightbulb"></i> 我的理想 </h1>
                <p class="spanStyle">
                    {{dream}}
                </p>

                <h1 class="title"><i class="fa fa-music"></i> 总得追求点什么</h1>
                <p class="spanStyle">喜欢追寻梦想，走向远方，却总徘徊于现实，感受人世沧桑；想要随风飘扬，随波逐浪，却总经不起风浪，步步踉跄；希望插上翅膀，展翅颉颃，却颤栗于悬崖，被时光流放。</p>
                <p class="spanStyle">
                    喜爱一个人，喜他的善良，爱他的坚强，经年以后，怨他的倔强，恨他的猖狂；赞赏一个人，赏他的高尚，赞他的顽强，多年之后，厌他的冥顽不顾，恶他的装模作样；羡慕一个人，幕他的名扬天下，羡他的荣华富贵，期年之后，妒他富有四海，嫉他繁荣昌盛。</p>
                <p class="spanStyle">
                    总以为生活与我作对，要白色拖地长裙，却只得到一条黑色暴腿短裤；总认为生活与我相逆，想要出人头地，却总埋没于人群；总想得到自己想要的东西，却总失去自己不想失去的东西。</p>
                <p class="spanStyle">
                    总感觉经历过风雨过后就必定有彩虹，最后才发觉风雨过后还有暴风雪，没有我所谓的彩虹；总感觉别人说的话就像是黄婆卖瓜，最后才发现自己说话时也是自卖自夸，没有所谓的中正；总感觉恩爱情仇是那么的简单，最后才发现有朝一日落到自己身上时，没有所谓的坚强。`</p>


                <h1 class="title"><i class="fa fa-music"></i> 听听音乐 </h1>
                <div id="musicPlayer">

                </div>


                <h1 class="title"><i class="fa fa-music"></i> 推荐文章</h1>

                <div id="recommendArticle">
                    <div v-for="backImg of backgroundImage" style="margin: 30px">
                        <el-image fit="cover" :src="backImg" style="width: 200px;height: 200px"></el-image>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import AppMenu from "../AppMenu";
    import './Index.css'

    export default {
        name: 'Index',
        data: function () {
            return {
                dream: "不是每个人都应该像我这样去建造一座水晶大教堂，但是每个人都应该拥有自己的梦想，设计自己的梦想，追求自己的梦想，实现自己的梦想。梦想是生命的灵魂，是心灵的灯塔，是引导人走向成功的信仰。有了崇高的梦想，只要矢志不渝地追求，梦想就会成为现实，奋斗就会变成壮举，生命就会创造奇迹。——罗伯·舒乐",
                selfIntroduction: `
　　 总以为生活与我作对，要白色拖地长裙，却只得到一条黑色暴腿短裤；总认为生活与我相逆，想要出人头地，却总埋没于人群；总想得到自己想要的东西，却总失去自己不想失去的东西。

　　 总感觉经历过风雨过后就必定有彩虹，最后才发觉风雨过后还有暴风雪，没有我所谓的彩虹；总感觉别人说的话就像是黄婆卖瓜，最后才发现自己说话时也是自卖自夸，没有所谓的中正；总感觉恩爱情仇是那么的简单，最后才发现有朝一日落到自己身上时，没有所谓的坚强。`,
                backgroundImage:
                    [
                        "http://static.blinkfox.com/2019-02-14.jpg",
                        "http://static.blinkfox.com/2019-01-25.jpg",
                        "http://static.blinkfox.com/blog/2019/08/20jpa-20190820.png",
                        "http://static.blinkfox.com/2019-02-14.jpg",
                    ],
                carouselImg: [
                    "https://www.zhoutao123.com/picture/index/1.jpeg",
                    "https://www.zhoutao123.com/picture/index/2.jpg",
                    "https://www.zhoutao123.com/picture/index/3.jpg",
                    "https://www.zhoutao123.com/picture/index/4.jpg",
                ]
            }
        },
        computed: {},
        components: {AppMenu},
        created() {
            // 从本地读取配置,配置不存在从远程获取
        }, beforeMount() {
        }
    };
</script>

<style scoped>

    @media only screen and (min-width: 800px) {
        #carousel {
            display: block;
        }

        .pic {
            width: 100%;
            height: 500px;
            margin-top: -3px;
        }
    }


    @media only screen and (max-width: 800px) {
        #carousel {
            display: none;
        }
    }
</style>

