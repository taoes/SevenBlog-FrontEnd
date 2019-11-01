<template>
    <div class="blogMenu">
        <div>
            <div style="background-color: #ffffff">
                <el-menu
                        theme="light"
                        mode="horizontal"
                        :default-openeds="defaultActive"
                        @select="onSelectItem"
                        :collapse="collapse"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                >

                    <el-menu-item index="/">
                        <i class="fab fa-phoenix-framework" style="color: #FFFFFF;margin-right:5px"></i>
                        <template slot="title">
                            <span class="menuTitle"> 主页</span>
                        </template>
                    </el-menu-item>

                    <el-menu-item index="">
                        <i class="fas fa-th" style="color: #FFFFFF;margin-right: 5px"></i>
                        <template slot="title">
                            <span class="menuTitle">全部文章</span>
                        </template>
                    </el-menu-item>

                    <el-submenu v-for="category of blogCategory" :index="category.name" :key="category.id">
                        <template slot="title">
                            <i :class="category.icon" style="color: #FFFFFF"></i>
                            <span class="menuTitle" style="color: white;margin-left: 5px">{{category.name}}</span>
                        </template>

                        <el-menu-item v-for="item of category.sub" :index="item.key" :key="item.key">
                            <i :class="item.icon" style="color: #FFFFFF;margin-right: 5px"></i>
                            <span style="color: white">{{ item.name}}</span>
                        </el-menu-item>
                    </el-submenu>

                    <el-submenu index="navigation">
                        <template slot="title">
                            <i class="fas fa-map-signs" style="color: #FFFFFF;margin-right: 5px"></i>
                            <span class="menuTitle">站点导航</span>
                        </template>

                        <el-menu-item index="/">
                            <i class="fab fa-old-republic" style="color: #FFFFFF;margin-right: 5px"></i>
                            系统首页
                        </el-menu-item>
                        <el-menu-item index="/admin">
                            <i class="fab fa-keycdn" style="color: #FFFFFF;margin-right: 5px"></i>
                            管理界面
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlogMenu",
        data: function () {
            return {
                blogMenuStyle: {
                    backgroundColor: 'white'
                }
            }
        },
        computed: {
            defaultActive: function () {
                return this.$store.state.menu.defaultActive;
            },
            collapse: function () {
                return this.$store.state.menu.collapse;
            }, blogCategory: function () {
                return this.$store.getters.getBlogMenu;
            }
        },
        methods: {
            onSelectItem: function (index) {
                if (index.startsWith("/")) {
                    this.$router.push(index);
                    return;
                }
                this.$store.commit({
                    type: 'changeType',
                    params: index
                });
                this.$router.push('/blog')
            }
        }, created() {
            if (!this.$store.state.menu.blogMenu) {
                this.$store.dispatch('updateBlogMenu');
            }
        }
    }
</script>

<style scoped>
    @media only screen and (min-width: 800px) {
        .menuTitle {
            display: inline-block;
        }
    }

    @media only screen and (max-width: 800px) {
        .menuTitle {
            display: none;
        }
    }
</style>
