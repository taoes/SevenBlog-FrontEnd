<template>
    <div class="blogMenu">
        <div>
            <div style="background-color: #ffffff">
                <el-menu
                        theme="light"
                        mode="horizontal"
                        background-color="#409EFF"
                        :default-openeds="defaultActive"
                        @select="onSelectItem"
                        :collapse="collapse"
                >

                    <el-menu-item index="/">
                        <i class="fab fa-phoenix-framework menuIcon" style="margin-right:5px"></i>
                        <template slot="title">
                            <span class="menuTitle">系统主页</span>
                        </template>
                    </el-menu-item>

                    <el-menu-item index="">
                        <i class="fas fa-th menuIcon" style="margin-right: 5px"></i>
                        <template slot="title">
                            <span class="menuTitle">全部文章</span>
                        </template>
                    </el-menu-item>

                    <el-submenu v-for="category of blogCategory" :index="category.name" :key="category.id">
                        <template slot="title">
                            <i :class="category.icon" class="menuIcon"></i>
                            <span class="menuTitle" style="margin-left: 5px">{{category.name}}</span>
                        </template>

                        <el-menu-item v-for="item of category.sub" :index="item.key" :key="item.key">
                            <i :class="item.icon" class="menuIcon" style="margin-right: 5px"></i>
                            <span style="color:#FFF">{{ item.name}}</span>
                        </el-menu-item>
                    </el-submenu>

                    <el-submenu index="navigation">
                        <template slot="title">
                            <i class="fas fa-map-signs menuIcon" style="margin-right: 5px"></i>
                            <span class="menuTitle menuIcon">站点导航</span>
                        </template>

                        <el-menu-item index="/">
                            <i class="fab fa-old-republic menuIcon" style="margin-right: 5px"></i>
                            <span style="color: white">系统首页</span>
                        </el-menu-item>
                        <el-menu-item index="/admin">
                            <i class="fab fa-keycdn menuIcon" style="margin-right: 5px"></i>
                            <span style="color: white">管理界面</span>
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
            }, getMenuColor: function () {
                return this.$store.getters.getMenuColor;
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
            color: #FFFFFF;
        }
    }

    @media only screen and (max-width: 800px) {
        .menuTitle {
            display: none;
            color: #FFFFFF;
        }
    }

    .menuIcon {
        color: #FFFFFF;
    }
</style>
