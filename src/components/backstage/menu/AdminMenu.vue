<template>
    <div class="adminMenu">
        <el-menu
                mode="horizontal"
                class="el-menu-demo"
                @select="onSelectItem"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
        >

            <el-menu-item index="/">
                <i class="el-icon-s-home" style="color: #FFFFFF"></i>
                <template slot="title">
                    主页
                </template>
            </el-menu-item>

            <el-submenu index="article">
                <template slot="title">
                    <i class="el-icon-s-cooperation" style="color: #FEFEFE"></i>
                    博客资源
                </template>
                <el-menu-item index="article">文章管理</el-menu-item>
                <el-menu-item index="category">目录管理</el-menu-item>
                <el-menu-item index="tag">标签管理</el-menu-item>
            </el-submenu>

            <el-submenu index="resource">
                <template slot="title">
                    <i class="el-icon-upload" style="color: #FEFEFE"></i>
                    资源管理
                </template>
                <el-menu-item index="picture">图片资源</el-menu-item>
                <el-menu-item index="comment">评论管理</el-menu-item>
                <el-menu-item index="menu">菜单管理</el-menu-item>
                <el-menu-item index="knowledge">知识库管理</el-menu-item>
            </el-submenu>

            <el-submenu index="system">
                <template slot="title">
                    <i class="el-icon-s-tools" style="color: #FEFEFE"></i>
                    系统配置
                </template>
                <el-menu-item index="system-people">个人资料</el-menu-item>
                <el-menu-item index="system-resource">系统资源</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "AdminMenu",
        data: function () {
            return {
                openMenu: ['article']
            }
        },
        computed: {
            collapse: function () {
                return this.$store.state.adminMenu.collapse;
            },
            active: function () {
                return this.$store.state.adminMenu.active;
            }
        },
        methods: {
            onSelectItem: function (index) {

                if (index.startsWith("/")) {
                    this.$router.push(index);
                    return;
                }


                this.$store.commit('changeAdminMenuActive', index)
                this.$router.push('/admin/' + index)
            }
        }
    }
</script>

<style scoped>

</style>
