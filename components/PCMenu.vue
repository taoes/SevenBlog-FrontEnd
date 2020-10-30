<template>
  <div class="PCMenu">
    <a-menu @click="itemClick" mode="horizontal" theme="dark" v-model="current">

      <template v-for="menu in menuList">
        <template v-if="menu.children == null">
          <a-menu-item :key="menu.url">
            <a-icon :type="menu.icon"/>
            {{menu.title}}
          </a-menu-item>
        </template>
        <!--        多级菜单-->
        <template v-else>
          <a-sub-menu :key="menu.title">
            <span class="submenu-title-wrapper" slot="title"><a-icon :type="menu.icon"/>{{menu.title}}</span>
            <template v-for="item in menu.children">
              <a-menu-item :key="item.url">
                <a-icon :type="item.icon"/>
                {{item.title}}
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
            title: '系统与架构',
            icon: 'cluster',
            children: [
                {title: '后端架构设计', icon: 'codepen', url: '/page/book/2'},
                {title: 'DevOps 实践', icon: 'ci', url: '/page/book/7'},
                {title: '分布式系统', icon: 'deployment-unit', url: '/page/book/12'},
            ]
        }, {
            title: '编程语言',
            icon: 'code',
            children: [
                {title: 'Java 编程进阶', icon: 'code', url: '/page/book/3'},
                {title: 'Java 并发编程', icon: 'lock', url: '/page/book/11'},
                {title: 'Java 虚拟机', icon: 'coffee', url: '/page/book/1'},
                {title: '设计模式', icon: 'number', url: '/page/book/6'},
                {title: '数据结构与算法', icon: 'rocket', url: '/page/book/13'},
            ]
        }, {
            title: '中间件系统',
            icon: 'gateway',
            children: [
                {title: 'MySQL 进阶', icon: 'database', url: '/page/book/9'},
                {title: 'Netty 学习笔记', icon: 'shrink', url: '/page/book/8'},
            ]
        }, {
            title: '关于我',
            icon: 'user',
            url:'/about'
        }
    ];

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

</style>
