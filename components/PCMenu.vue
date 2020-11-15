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
                title: '系统架构',
                icon: 'cluster',
                children: [
                    {title: 'DevOps', icon: 'ci', url: '/page/book/7'},
                    {title: '分布式系统', icon: 'deployment-unit', url: '/page/book/12'},
                    {title: '后端架构设计', icon: 'codepen', url: '/page/book/2'},
                ]
            }, {
                title: 'Java 编程',
                icon: 'coffee',
                children: [
                    {title: 'Java 虚拟机', icon: 'coffee', url: '/page/book/1'},
                    {title: 'Java 进阶编程', icon: 'coffee', url: '/page/book/3'},
                    {title: 'Java 并发编程', icon: 'lock', url: '/page/book/11'},
                    {title: 'Java 框架解析', icon: 'coffee', url: '/page/book/10'},
                ]
            },
            {
                title: '计算机科学',
                icon: 'code',
                children: [
                    {title: '数据结构', icon: 'rocket', url: '/page/book/13'},
                    {title: '设计模式', icon: 'number', url: '/page/book/6'},
                    {title: '计算机网络', icon: 'radar-chart', url: 'pause1'},
                    {title: '其他编程语言', icon: 'sliders', url: 'pause2'}
                ]
            },
            {
                title: '中间件系统',
                icon: 'gateway',
                children:
                    [
                        {title: '数据库', icon: 'database', url: '/page/book/9'},
                        {title: '消息队列', icon: 'message', url: 'pause3'},
                        {title: '网络应用', icon: 'fullscreen-exit', url: '/page/book/8'},
                        {title: '高性能服务器', icon: 'box-plot', url: '/page/book/4'},
                    ]
            }, {
                title: '闲谈杂记',
                icon: 'exception',
                children: [
                    {title: '我的博客', icon: 'flag', url: '/page/book/14'},
                    {title: '影子不长', icon: 'smile', url: 'pause33'},
                ]

            }
            ,
            {
                title: '关于我',
                icon: 'user',
                url: '/about'
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
                    this.ConstantValue.info('暂未完成', '该栏目暂无资源，敬请期待!');
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
    /*font-family: "Noto Serif", "PT Serif", 'Times New Roman', Times, serif;*/
  }

</style>
