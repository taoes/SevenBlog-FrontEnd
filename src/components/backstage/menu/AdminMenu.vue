<template>
    <div class="adminMenu">
        <el-menu
                mode="horizontal"
                class="el-menu-demo"
                background-color="#3b455e"
                @select="onSelectItem"
        >

            <el-menu-item index="/">
                <i class="el-icon-s-home" style="color: #FFFFFF"></i>
                <span class="menuTitle">
                    系统主页
                </span>
            </el-menu-item>

            <el-menu-item index="index">
                <i class="el-icon-s-home" style="color: #FFFFFF"></i>
                <span class="menuTitle">
                    管理首页
                </span>
            </el-menu-item>

            <el-submenu index="article">

                <span class="menuTitle" slot="title">
<i class="el-icon-s-cooperation" style="color: #FEFEFE"></i>
                    博客资源
                </span>
                <el-menu-item index="article">
                    <i class="fas fa-rss"></i>
                    <span class="menuTitle">

                    文章管理
                    </span>
                </el-menu-item>
                <el-menu-item index="category">
                    <span class="menuTitle">
                    <i class="fas fa-folder"></i>
                    目录管理</span>
                </el-menu-item>
                <el-menu-item index="tag">
                    <span class="menuTitle">
                        <i class="fas fa-tag"></i>
                        标签管理
                    </span>
                </el-menu-item>
            </el-submenu>

            <el-submenu index="resource">
                <span class="menuTitle">
                    <i class="el-icon-upload" style="color: #FEFEFE"></i>
                    资源管理
                </span>
                <el-menu-item index="picture">
                    <span class="menuTitle">
                    <i class="fas fa-image"></i>
                    图片资源
                        </span>
                </el-menu-item>
                <el-menu-item index="comment">
                    <i class="fas fa-comments"></i>
                    评论管理
                </el-menu-item>
                <el-menu-item index="menu">
                    <span class="menuTitle">
                    <i class="fas fa-compass"></i>
                    菜单管理
                        </span>
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

    .menuTitle {
        color: #f0f2f5;
    }

</style>
