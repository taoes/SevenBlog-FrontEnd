<template>
    <div class="adminMenu">
        <el-menu
                theme="light"
                class="el-menu-demo"
                @select="onSelectItem"
        >
            <el-menu-item index="1" disabled>后台管理系统</el-menu-item>
            <el-submenu index="article">
                <template slot="title">博客资源</template>
                <el-menu-item index="article">文章管理</el-menu-item>
                <el-menu-item index="category">目录管理</el-menu-item>
                <el-menu-item index="tag">标签管理</el-menu-item>
            </el-submenu>

            <el-submenu index="resource">
                <template slot="title">资源管理</template>
                <el-menu-item index="picture">图片资源</el-menu-item>
                <el-menu-item index="comment">评论管理</el-menu-item>
                <el-menu-item index="menu">菜单管理</el-menu-item>
                <el-menu-item index="knowledge">知识库管理</el-menu-item>
            </el-submenu>

            <el-submenu index="system">
                <template slot="title">系统配置</template>
                <el-menu-item index="system-people">个人资料</el-menu-item>
                <el-menu-item index="system-resource">系统资源</el-menu-item>
            </el-submenu>
            <el-divider></el-divider>
            <el-menu-item index=""><a href="https://www.zhoutao123.com" target="_blank">访问主页</a></el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "AdminMenu",
        methods: {
            onSelectItem: function (index) {
                this.$router.push('/admin/' + index)
            }
        }
    }
</script>

<style scoped>

    .adminMenu {
        width: 260px;
        height: 1025px;
    }
</style>
