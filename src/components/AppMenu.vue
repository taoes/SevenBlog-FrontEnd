<template>
    <div>
        <div id="mobileMenu">
            <el-button @click="showMobileMenu = !showMobileMenu"
                       style="margin-left: 20px;margin-top: 20px;margin-bottom: 0">
                <i class="fas fa-bars"></i>
                菜单
            </el-button>
            <slide-out :visible="showMobileMenu"
                       @close="showMobileMenu = false"
                        size="50%">

                <div slot="header" style="display: flex;flex-direction: row;align-items: center">
                    <img src="@/assets/logo.png" style="width: 10%;" alt="LOGO">
                    <span style="margin-left: 5px;font-weight: 900">不忘初心、方得始终</span>
                </div>
                <div>
                    <el-menu
                            @select="onSelectItem"
                            class="el-menu-demo">
                        <el-menu-item v-for="menu of menuList" :index="menu.path" :key="menu.name">
                            <i :class="menu.icon" class="menuIcon"></i>
                            <span class="subMenuTitle">{{menu.name}}</span>
                        </el-menu-item>

                        <el-submenu v-if="showLoginInfo" index="personCent">
                            <template slot="title">
                                <i class="el-icon-user-solid menuIcon"></i>
                                <span class="subMenuTitle">个人中心</span>
                            </template>
                            <el-menu-item index="logout" @click="toNewPage('/admin/index')">
                                <i class="fab fa-keycdn menuIcon"></i>
                                <span class="subMenuTitle">管理系统</span>
                            </el-menu-item>
                            <el-menu-item index="logout" @click="signOut">
                                <i class="fas fa-sign-out-alt menuIcon"></i>
                                <span class="subMenuTitle">注销登录</span>
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item v-else index="loginButton" key="loginButton" @click="toNewPage('/login')">
                            <i class="el-icon-user-solid menuIcon"></i>
                            <span class="menuTitle" style="color: white">登录系统</span>
                        </el-menu-item>
                    </el-menu>
                </div>
            </slide-out>
        </div>

        <div id="pcMenu">
            <el-menu
                    class="el-menu-demo"
                    background-color="#409EFF"
                    mode="horizontal">
                <el-menu-item v-for="menu of menuList" :index="menu.name" :key="menu.name">
                    <router-link :key="menu.path" :to="menu.path">
                        <i :class="menu.icon" style="margin-right: 5px;color: #FFFFFF"></i>
                        <span class="menuTitle" style="color: #FFFFFF">{{menu.name}}</span>
                    </router-link>
                </el-menu-item>

                <el-submenu v-if="showLoginInfo" index="personCent">
                    <template slot="title">
                        <i class="el-icon-user-solid menuIcon"></i>
                        <span class="menuTitle" style="color: white">个人中心</span>
                    </template>
                    <el-menu-item index="logout" @click="toNewPage('/admin/index')">
                        <i class="fab fa-keycdn menuIcon"></i>
                        <span style="color:#ffffff;margin-left: 5px">管理系统</span>
                    </el-menu-item>
                    <el-menu-item index="logout" @click="signOut">
                        <i class="fas fa-sign-out-alt menuIcon"></i>
                        <span style="color:#ffffff;margin-left: 5px">注销登录</span>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item v-else index="loginButton" key="loginButton" @click="toNewPage('/login')">
                    <i class="el-icon-user-solid menuIcon"></i>
                    <span class="menuTitle" style="color: white">登录系统</span>
                </el-menu-item>
            </el-menu>
        </div>
    </div>

</template>

<script>
    export default {
        name: "AppMenu",
        data: function () {
            return {
                showMobileMenu: false,
                theme1: "light"
            };
        }, methods: {
            toNewPage: function (url) {
                this.$router.push(url);
            },
            signOut: function () {
                this.$store.commit({
                    type: "signOut"
                });
                this.toNewPage("/login");
            }, onSelectItem: function (index) {
                if (index.startsWith("/")) {
                    this.$router.push(index);
                    return;
                }
            }
        }

        ,
        computed: {
            showLoginInfo: function () {
                let token = localStorage.getItem("token");
                return token !== undefined && token !== null && token !== "";
            }
            ,
            menuList: function () {
                return this.$store.getters.getAppMenu;
            }
        }
        ,
        created: function () {
            if (!this.menuList) {
                this.$store.dispatch('updateAppMenu');
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

        #pcMenu {
            display: block;
        }

        #mobileMenu {
            display: none;
        }

        .subMenuTitle, span {
            color: white;
            margin-left: 8px
        }

        .menuIcon {
            color: white;
        }
    }

    @media only screen and (max-width: 800px) {
        .menuTitle {
            display: none;
            color: red;
        }

        #pcMenu {
            display: none;
        }

        #mobileMenu {
            display: block;

        }

        .subMenuTitle {
            color: black;
            margin-left: 8px
        }

        .menuIcon {
            color: black;
        }
    }


</style>
