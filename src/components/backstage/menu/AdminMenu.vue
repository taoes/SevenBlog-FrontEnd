<template>
    <div class="adminMenu">
        <el-menu
                theme="light"
                class="el-menu-demo">
            <el-menu-item index="1" disabled>后台管理系统</el-menu-item>
            <el-submenu index="article">
                <template slot="title">文章管理</template>
                <el-menu-item index="2-1">文章管理</el-menu-item>
                <el-menu-item index="2-2">目录管理</el-menu-item>
                <el-menu-item index="2-3">标签管理</el-menu-item>
            </el-submenu>

            <el-submenu index="article">
                <template slot="title">资源管理</template>
                <el-menu-item index="2-1">图片资源</el-menu-item>
                <el-menu-item index="2-1">评论管理</el-menu-item>
                <el-menu-item index="2-2">菜单管理</el-menu-item>
                <el-menu-item index="2-3">知识库管理</el-menu-item>
            </el-submenu>

            <el-submenu index="system">
                <template slot="title">系统配置</template>
                <el-menu-item index="system-people">个人资料</el-menu-item>
                <el-menu-item index="system-resource">系统资源</el-menu-item>
            </el-submenu>

            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.zhoutao123.com" target="_blank">访问主页</a></el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "AdminMenu"
    }
</script>

<style scoped>

    .adminMenu {
        width: 260px;
        height: 1025px;
    }
</style>
