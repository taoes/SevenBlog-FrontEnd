<template>
  <div class="PCMenu">
    <a-menu @click="itemClick" mode="horizontal" theme="dark" v-model="current">
      <a-menu-item key="/">
        <a-icon type="desktop"/>
        主页
      </a-menu-item>

      <a-sub-menu key="system">
                <span class="submenu-title-wrapper" slot="title">
                    <a-icon type="cluster"/>系统与架构</span>

        <a-menu-item key="/page/book/2">
          <a-icon type="codepen"/>
          架构设计
        </a-menu-item>
        <a-menu-item key="/page/book/7">
          <a-icon type="ci"/>
          DevOps
        </a-menu-item>
        <a-menu-item key="/page/book/12">
          <a-icon type="deployment-unit" />
          分布式计算
        </a-menu-item>

        <a-menu-item key="system_more">
          <a-icon type="snippets"/>
          更多笔记
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="code">
                <span class="submenu-title-wrapper" slot="title">
                    <a-icon type="code"/> 编程语言
                </span>

        <a-menu-item key="/page/book/3">
          <a-icon type="coffee"/>
          Java 进阶
        </a-menu-item>
        <a-menu-item key="/page/book/9">
          <a-icon type="database"/>
          MySQL 进阶
        </a-menu-item>

        <a-menu-item key="/page/book/11">
          <a-icon type="lock"/>
          Java 并发编程
        </a-menu-item>

        <a-menu-item key="/page/book/13">
          <a-icon type="rocket"/>
          数据结构与算法
        </a-menu-item>

        <a-menu-item key="code_other-language">
          <a-icon type="build"/>
          其他语言入门
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="blog">
                <span class="submenu-title-wrapper" slot="title">
                    <a-icon type="read"/> 我的博客
                </span>
        <template v-for="blog of blogList">
          <a-menu-item :key="'web_'+blog.name">
            <a :href="blog.url" rel="noopener noreferrer" target="_blank">
              <a-icon :type="blog.icon"/>{{blog.title}}</a>
          </a-menu-item>
        </template>

      </a-sub-menu>

      <a-menu-item key="about">
        <a-icon type="user"/>
        关于我
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>

    const blogList = [
        {
            title: "语雀文档",
            name: "yuque",
            icon: "yuque",
            url: "https://www.yuque.com/zhoutao123"
        }, {
            title: "CSDN",
            name: "csdn",
            icon: "chrome",
            url: "https://blog.csdn.net/qq_20221151"
        }, {
            title: "知乎",
            icon: "zhihu",
            name: "zhihu",
            url: "https://www.zhihu.com/people/zhoutao825638"
        }
    ];

    export default {
        name: 'PCMenu',
        data: function () {
            return {
                blogList,
                current: ['desktop'],
            }
        },
        methods: {
            itemClick: function ({key, keyPath}) {
                if (key.startsWith("web_")) {
                    return
                }
                this.current = keyPath[keyPath.length - 1];
                this.$router.push(key)
            }
        }
    }
</script>

<style  scoped>

</style>
