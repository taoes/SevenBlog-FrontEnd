<template>
  <div class="PCMenu">
    <a-menu @click="itemClick" mode="horizontal" theme="dark" v-model="current">
      <template v-for="menu in menuList">
        <template v-if="menu.children == null">
          <a-menu-item :key="menu.url">
            <span class="menuTitle"><a-icon :type="menu.icon"/>{{menu.title}}</span>
          </a-menu-item>
        </template>
        <!--        多级菜单-->
        <template v-else>
          <a-sub-menu :key="menu.title">
            <span class="submenu-title-wrapper" slot="title">
              <span class="menuTitle"><a-icon :type="menu.icon"/>{{menu.title}}</span>
            </span>
            <template v-for="item in menu.children">
              <a-menu-item :key="item.url">
                <span class="menuTitle"> <a-icon :type="item.icon"/>{{item.title}}</span>
              </a-menu-item>
            </template>

          </a-sub-menu>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>


    const menuList = [
            {
                title: '主页',
                icon: 'desktop',
                url: '/'
            }, {
                title: '架构与实践',
                icon: 'cluster',
                children: [
                    {title: 'DevOps', icon: 'ci', url: '/page/book/7'},
                    {title: '分布式系统', icon: 'deployment-unit', url: '/page/book/12'},
                    {title: '后端架构设计', icon: 'codepen', url: '/page/book/2'},
                ]
            }, {
                title: 'JAVA',
                icon: 'coffee',
                children: [
                    {title: 'Java 虚拟机', icon: 'coffee', url: '/page/book/1'},
                    {title: 'Java 进阶编程', icon: 'coffee', url: '/page/book/3'},
                    {title: 'Java 并发编程', icon: 'lock', url: '/page/book/11'},
                    {title: 'Java 框架解析', icon: 'coffee', url: '/page/book/10'},
                ]
            },
            {
                title: '计算机',
                icon: 'code',
                children: [
                    {title: '数据结构', icon: 'rocket', url: '/page/book/13'},
                    {title: '设计模式', icon: 'number', url: '/page/book/6'},
                    {title: '计算机网络', icon: 'radar-chart', url: 'pause1'},
                    {title: '其他编程语言', icon: 'sliders', url: 'pause2'}
                ]
            },
            {
                title: '中间件',
                icon:
                    'gateway',
                children:
                    [
                        {title: '消息队列', icon: 'message', url: 'pause3'},
                        {title: '网络应用框架', icon: 'fullscreen-exit', url: '/page/book/8'},
                        {title: '关系型数据库', icon: 'database', url: '/page/book/9'},
                        {title: '非关系型数据库', icon: 'cloud-server', url: 'pause4'},
                        {title: '高性能Web服务器', icon: 'box-plot', url: '/page/book/4'},
                    ]
            }
            ,
            {
                title: '关于我',
                icon:
                    'user',
                url:
                    '/about'
            }
        ]
    ;

    export default {
        name: 'PCMenu',
        data: function () {
            return {
                menuList,
                current: ['desktop'],
            }
        },
        methods: {
            itemClick: function ({key, keyPath}) {
                if (key.startsWith("pause")) {
                    alert("暂未完成，敬请期待");
                    return
                }

                if (key.startsWith("web_")) {
                    return
                }
                this.current = keyPath[keyPath.length - 1];
                window.location.href = key;
            }
        }
    }
</script>

<style scoped>

  .menuTitle {
    color: white;
    font-size: 14px;
    font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif;
  }

</style>
