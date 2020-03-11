<template>
    <div class="blogMenu">


        <!--         手机界面菜单-->
        <div id="mobileMenu">
            <div style="display: flex;flex-direction: row;justify-content: space-between;align-items: center">
                <el-button @click="showMobileMenu = !showMobileMenu"
                           style="margin-left: 20px;margin-top: 10px;margin-bottom: 10px"
                           size="small"
                           icon="fas fa-bars">
                </el-button>

                <div style="display: flex;flex-direction: row;align-items: center" @click="onSelectItem('/')">
                    <img src="@/assets/favicon.png" width="20px">
                    <span class="mobileTitle">燕归来兮</span>
                </div>

                <div>
                    <i class="el-icon-user-solid" style="color: white;margin-right: 10px"></i>
                </div>
            </div>


            <slide-out :visible="showMobileMenu" @close="showMobileMenu = false" size="40%">
                <template slot="footer">
                    🌲 不忘初心、方得始终
                </template>
                <el-menu
                        :unique-opened="true"
                        :default-openeds="defaultActive"
                        @select="onSelectItem"
                        :collapse="collapse"
                >

                    <el-menu-item index="/">
                        <i class="fab fa-phoenix-framework menuIcon" style="margin-right:5px"></i>
                        <template slot="title">
                            <span class="menuTitle subMenuTitle" style="color: white">主页</span>
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
                            <span class="subMenuTitle">系统首页</span>
                        </el-menu-item>
                        <el-menu-item index="/admin">
                            <i class="fab fa-keycdn menuIcon" style="margin-right: 5px"></i>
                            <span class="subMenuTitle">管理界面</span>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </slide-out>
        </div>

        <!--        PC版本界面菜单-->
        <div id="pcMenu">
            <div style="background-color: #ffffff">
                <el-menu
                        theme="light"
                        mode="horizontal"
                        background-color="#3b455e"
                        :default-openeds="defaultActive"
                        @select="onSelectItem"
                        :collapse="collapse"
                >

                    <el-menu-item index="/">
                        <i class="fab fa-phoenix-framework menuIcon" style="margin-right:5px"></i>
                        <template slot="title">
                            <span class="menuTitle subMenuTitle">主页</span>
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

    import './BlogMenu.css'

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
            // 按钮点击后的跳转，如果index = '/' 标识返回主页
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


</style>
