<template>
    <div class="blogMenu">
        <div id="mobileMenu">

            <el-button @click="showMobileMenu = !showMobileMenu"
                       style="margin-left: 20px;margin-top: 20px;margin-bottom: 0"
                       size="small"
                       type="primary"
            >
                <i class="fas fa-bars"></i>
                菜单
            </el-button>

            <slide-out :visible="showMobileMenu" @close="showMobileMenu = false" size="40%">

                <el-menu
                        theme="light"
                        :default-openeds="defaultActive"
                        @select="onSelectItem"
                        :collapse="collapse"
                >

                    <el-menu-item index="/">
                        <i class="fab fa-phoenix-framework menuIcon" style="margin-right:5px"></i>
                        <template slot="title">
                            <span class="menuTitle subMenuTitle">系统主页</span>
                        </template>
                    </el-menu-item>

                    <el-menu-item index="">
                        <i class="fas fa-th menuIcon" style="margin-right: 5px"></i>
                        <template slot="title">
                            <span class="menuTitle subMenuTitle">全部文章</span>
                        </template>
                    </el-menu-item>

                    <el-submenu v-for="category of blogCategory" :index="category.name" :key="category.id">
                        <template slot="title">
                            <i :class="category.icon" class="menuIcon"></i>
                            <span class="menuTitle subMenuTitle" style="margin-left: 5px">{{category.name}}</span>
                        </template>

                        <el-menu-item v-for="item of category.sub" :index="item.key" :key="item.key">
                            <i :class="item.icon" class="menuIcon" style="margin-right: 5px"></i>
                            <span class="subMenuTitle subMenuTitle">{{ item.name}}</span>
                        </el-menu-item>
                    </el-submenu>

                    <el-submenu index="navigation">
                        <template slot="title">
                            <i class="fas fa-map-signs menuIcon" style="margin-right: 5px"></i>
                            <span class="menuTitle menuIcon subMenuTitle">站点导航</span>
                        </template>

                        <el-menu-item index="/">
                            <i class="fab fa-old-republic menuIcon" style="margin-right: 5px"></i>
                            <span class="subMenuTitle subMenuTitle">系统首页</span>
                        </el-menu-item>
                        <el-menu-item index="/admin">
                            <i class="fab fa-keycdn menuIcon" style="margin-right: 5px"></i>
                            <span class="subMenuTitle subMenuTitle">管理界面</span>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </slide-out>
        </div>
        <div id="pcMenu">
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
                            <span class="menuTitle subMenuTitle">全部文章</span>
                        </template>
                    </el-menu-item>

                    <el-submenu v-for="category of blogCategory" :index="category.name" :key="category.id">
                        <template slot="title">
                            <i :class="category.icon" class="menuIcon"></i>
                            <span class="menuTitle subMenuTitle" style="margin-left: 5px">{{category.name}}</span>
                        </template>

                        <el-menu-item v-for="item of category.sub" :index="item.key" :key="item.key">
                            <i :class="item.icon" class="menuIcon subMenuTitle" style="margin-right: 5px"></i>
                            <span class="menuTitle subMenuTitle">{{ item.name}}</span>
                        </el-menu-item>
                    </el-submenu>

                    <el-submenu index="navigation">
                        <template slot="title">
                            <i class="fas fa-map-signs menuIcon" style="margin-right: 5px"></i>
                            <span class="menuTitle menuIcon subMenuTitle">站点导航</span>
                        </template>

                        <el-menu-item index="/">
                            <i class="fab fa-old-republic menuIcon" style="margin-right: 5px"></i>
                            <span class="subMenuTitle">系统首页</span>
                        </el-menu-item>
                        <el-menu-item index="/admin">
                            <i class="fab fa-keycdn menuIcon" style="margin-right: 5px"></i>
                            <span class="subMenuTitle">管理界面</span>
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
                showMobileMenu: false,
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
                this.showMobileMenu = false;
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

        .subMenuTitle span {
            color: red;
        }

        #pcMenu {
            display: block;
        }

        #mobileMenu {
            display: none;
        }

        .menuIcon {
            color: #FFFFFF;
        }
    }

    @media only screen and (max-width: 800px) {
        .menuTitle {
            color: black;
        }

        .subMenuTitle span {
            color: red;
        }

        #pcMenu {
            display: none;
        }

        #mobileMenu {
            display: block;
        }

        .menuIcon {
            color: black;
        }
    }


</style>
