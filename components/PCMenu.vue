<template>
  <div>
    <div class="PCMenu">
      <a-menu @click="itemClick" mode="horizontal" theme="dark" v-model="current">
        <template v-for="menu in menuList">
          <template v-if="menu.children == null">
            <a-menu-item :key="menu.url">
            <span class="menuTitle"><i
              :class="'icon iconfont '+ menu.icon"></i>{{menu.title}}</span>
            </a-menu-item>
          </template>
          <!--        多级菜单-->
          <template v-else>
            <a-sub-menu :key="menu.title">
            <span class="submenu-title-wrapper" slot="title">
              <span class="menuTitle"><i
                :class="'icon iconfont '+ menu.icon"></i>{{menu.title}}</span>
            </span>
              <template v-for="item in menu.children">
                <a-menu-item :key="item.url">
                <span class="menuTitle"><i
                  :class="'icon iconfont '+ item.icon"></i>{{item.title}}</span>
                </a-menu-item>
              </template>
            </a-sub-menu>
          </template>
        </template>
      </a-menu>
    </div>
    <div class="MobileMenu">
      <div class="MobileMenuTop">

        <a-menu :selectable="false" @click="openMenu" c theme="dark" v-model="current">
          <a-menu-item key="item123">
            <a-icon type="menu"/>
            菜单
          </a-menu-item>
        </a-menu>


      </div>
      <a-drawer
        :body-style="{padding:0}"
        :closable="false"
        :drawerStyle="{background:'#001529'}"
        :visible="visible"
        @close="onClose"
        placement="left"
        title="">
        <a-menu @click="itemClick" style="margin-top: 30px" theme="dark" v-model="current">
          <template v-for="menu in menuList">
            <template v-if="menu.children == null">
              <a-menu-item :key="menu.url">
            <span class="menuTitle"><i
              :class="'icon iconfont '+ menu.icon"></i>{{menu.title}}</span>
              </a-menu-item>
            </template>
            <!--        多级菜单-->
            <template v-else>
              <a-sub-menu :key="menu.title">
            <span class="submenu-title-wrapper" slot="title">
              <span class="menuTitle"><i
                :class="'icon iconfont '+ menu.icon"></i>{{menu.title}}</span>
            </span>
                <template v-for="item in menu.children">
                  <a-menu-item :key="item.url">
                <span class="menuTitle"><i
                  :class="'icon iconfont '+ item.icon"></i>{{item.title}}</span>
                  </a-menu-item>
                </template>
              </a-sub-menu>
            </template>
          </template>
        </a-menu>
      </a-drawer>
    </div>
  </div>
</template>
<script>


    const menuList = [
        {
            title: '主页',
            icon: 'icon-jiaoyizonglan',
            url: '/'
        }, {
            title: '系统与架构',
            icon: 'icon-moxing1',
            children: [
                {title: 'DevOps', icon: 'icon-caozuo', url: '/page/book/7'},
                {title: '分布式系统', icon: 'icon-tuopu', url: '/page/book/12'},
                {title: '后端架构设计', icon: 'icon-yunbushu', url: '/page/book/2'},
            ]
        }, {
            title: 'Java 编程',
            icon: 'icon-java',
            children: [
                {title: 'Java 虚拟机', icon: 'icon-ts-tubiao_VM', url: '/page/book/1'},
                {title: 'Java 进阶编程', icon: 'icon-lujing', url: '/page/book/3'},
                {title: 'Java 并发编程', icon: 'icon-zhuji', url: '/page/book/11'},
                {title: 'Java 框架解析', icon: 'icon-cangku', url: '/page/book/10'},
            ]
        },
        {
            title: '编程',
            icon: 'icon-zuoye',
            children: [
                {title: '数据结构', icon: 'icon-liuchengmoxing', url: '/page/book/13'},
                {title: '设计模式', icon: 'icon-shuxing', url: '/page/book/6'},
                {title: '计算机网络', icon: 'icon-lianlu', url: 'pause1'},
                {title: '其他编程语言', icon: 'icon-coding', url: 'pause2'}
            ]
        },
        {
            title: '中间件',
            icon: 'icon-caiji',
            children:
                [
                    {title: '数据库存储', icon: 'icon-sql', url: '/page/book/9'},
                    {title: '消息队列实战', icon: 'icon-jiaohuanji', url: 'pause3'},
                    {title: '网络编程框架', icon: 'icon-yingyongfenxi', url: '/page/book/8'},
                    {title: '高性能服务器', icon: 'icon-jianceqi1', url: '/page/book/4'},
                ]
        }, {
            title: '落笔闲谈',
            icon: 'icon-dongtaiwenben',
            children: [
                {title: '影子不长', icon: 'icon-cunchu', url: 'https://love.zhoutao123.com'},
                {title: '阅读计划', icon: 'icon-shuzhi', url: 'https://www.yuque.com/zhoutao123/read'},
                {title: '我的博客', icon: 'icon-ziyuan', url: '/page/book/14'},
            ]

        }
        ,
        {
            title: '资源推荐',
            icon: 'icon-apache',
            url: '/about'
        }
    ];

    export default {
        name: 'PCMenu',
        data: function () {
            return {
                menuList,
                visible: false,
                current: ['desktop'],
            }
        },
        methods: {
            itemClick: function ({key, keyPath}) {
                if (key.startsWith("pause")) {
                    this.ConstantValue.error('该栏目暂未开放', '很抱歉，该栏目暂无资源，作者正在努力完善，敬请期待!');
                    return
                }

                if (key.startsWith("http")) {
                    window.open(key, '_blank')
                    return
                }
                this.current = keyPath[keyPath.length - 1];
                window.location.href = key;
            },
            openMenu: function () {
                this.visible = true;
            }, onClose: function () {
                this.visible = false;
            }
        }
    }
</script>

<style scoped>

  .menuTitle {
    color: white;
    font-size: 14px;
  }

  .icon {
    margin-right: 5px;
    width: 16px;
    color: white;
  }

  @media screen and (max-width: 780px) {
    .PCMenu {
      display: none;
    }

    .MobileMenu {

    }

    .MobileMenuTop {
      background-color: #2c3e50;
    }

    .MobileMenuTop li {
      float: right;
    }

  }


  @media screen and (min-width: 780px) {
    .PCMenu {

    }

    .MobileMenu {
      display: none;
    }

  }


  .ant-drawer-body {
    padding: 0 !important;
  }

  .ant-drawer-wrapper-body {
    background-color: #2c3e50 !important;
  }

</style>
