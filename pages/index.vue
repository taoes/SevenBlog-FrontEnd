<template>
  <div class="desktop">
    <div id="desktopBackground">
      <h1>求知若渴，虚怀若愚</h1>
      <h4>Stay Hungry Stay Foolish</h4>
    </div>
    <div id="itemList">
      <template v-for="item of dataOfItem">
        <DesktopItem :content="item.content" :image="item.image" :title="item.title"/>
        <a-divider/>
      </template>
    </div>
  </div>
</template>

<script>

    import DesktopItem from "../components/index/DektopItem.vue";

    const dataOfItem = [
        {
            image: 'https://angular.cn/generated/images/marketing/home/responsive-framework.svg',
            title: '编程 & 技术',
            content: `在大学的时候，编程是我的兴趣，也是我当时给自己定位的职业方向。参加工作之后，随着编程经验的积累，我越来越发现自己的只是匮乏，从前端到后端端，从移动端到Web端，技术之广阔令人目不暇接。<br>作为一个开发人员，我们要学不仅仅是编码，而是要知道如何用代码创造价值，需要怎么做才能编写好的代码？`
        }, {
            image: 'https://timgsa.baidu.com/timg?image&quality=100&size=b9999_10000&sec=1598618206951&di=cb8e8f13832e103c2dde7f7119238028&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1310%2F03%2Fc8%2F26763845_1380759569574.jpg',
            title: '工作 & 生活',
            content: `曾经的我以为编程是我的一切，有的时候我甚至幼稚的将工作放在生活之前！但随着参加工作的时候越久，我才明白努力工作是为了更好地生活，我们的终极目标是更好地生活，也要坚信: <b>永远相信美好的事情即将发生</b>！！！`
        }, {
            image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=281152632,2078344269&fm=26&gp=0.jpg',
            title: '不忘初心、砥砺前行',
            content: `不是每个人都应该去建造一座水晶大教堂，但是每个人都应该拥有自己的梦想，设计自己的梦想，追求自己的梦想，实现自己的梦想。曾经的我们有着多么豪情的梦想，随着时间的流逝，我们也越来越明白梦想的遥不可及， 但梦想还是要有的 万一实现了呢？`
        }
    ];

    export default {
        name: 'Home',
        data() {
            return {dataOfItem}
        },
        components: {DesktopItem}
    }
</script>

<style scoped>
  #desktopBackground {
    display: flex;
    flex-direction: column;
    background: url('https://pic.zhoutao123.com/picture/background/bg-contact.jpg');
    object-fit: cover;
    height: 300px;
    width: 100%;
    min-height: 30%;
    justify-content: center;
    align-items: center;
  }

  /*  条目样式*/

  #itemList {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }


  h1 {
    color: white;
    font-size: 45px;
    font-family: "PT Serif", 'Times New Roman', Times, serif !important;
    transition: all 0.8s linear;
  }

  h4 {
    color: white;
    font-size: 20px;
    font-family: "PT Serif", 'Times New Roman', Times, serif !important;
  }

  h1:hover {
    letter-spacing: 4px;
    font-size: 48px;
    transition: all 0.5s linear;
    margin-top: -20px;
    color: snow;
  }
</style>

