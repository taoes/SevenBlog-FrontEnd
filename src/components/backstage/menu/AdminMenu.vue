<template>
    <div class="adminMenu">
        <el-menu
                mode="horizontal"
                class="el-menu-demo"
                @select="onSelectItem"
                background-color="#409EFF"
                text-color="#FFFFFF"
                active-text-color="lightyellow"

        >

            <el-menu-item index="/">
                <i class="el-icon-s-home" style="color: #FFFFFF"></i>
                <template slot="title">
                    系统主页
                </template>
            </el-menu-item>

            <el-menu-item index="index">
                <i class="el-icon-s-home" style="color: #FFFFFF"></i>
                <template slot="title">
                    管理首页
                </template>
            </el-menu-item>

            <el-submenu index="article">
                <template slot="title">
                    <i class="el-icon-s-cooperation" style="color: #FEFEFE"></i>
                    博客资源
                </template>
                <el-menu-item index="article">
                    <i class="fas fa-rss"></i>
                    文章管理
                </el-menu-item>
                <el-menu-item index="category">
                    <i class="fas fa-folder"></i>
                    目录管理
                </el-menu-item>
                <el-menu-item index="tag">
                    <i class="fas fa-tag"></i>
                    标签管理
                </el-menu-item>
            </el-submenu>

            <el-submenu index="resource">
                <template slot="title">
                    <i class="el-icon-upload" style="color: #FEFEFE"></i>
                    资源管理
                </template>
                <el-menu-item index="picture">
                    <i class="fas fa-image"></i>
                    图片资源
                </el-menu-item>
                <el-menu-item index="comment">
                    <i class="fas fa-comments"></i>
                    评论管理
                </el-menu-item>
                <el-menu-item index="menu">
                    <i class="fas fa-compass"></i>
                    菜单管理
                </el-menu-item>
            </el-submenu>

            <el-submenu index="system">
                <template slot="title">
                    <i class="el-icon-s-tools" style="color: #FFFFFF"></i>
                    系统配置
                </template>
                <el-menu-item index="system">
                    <i class="fab fa-playstation icon"></i>
                    系统信息
                </el-menu-item>
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


                this.$store.commit('changeAdminMenuActive', index);
                this.$router.push('/admin/' + index)
            }
        }
    }
</script>

<style scoped>

</style>
