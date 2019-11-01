<template>

    <el-menu
            class="el-menu-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            mode="horizontal">
        <el-menu-item v-for="menu of menuList" :index="menu.name" :key="menu.name">
            <router-link :key="menu.path" :to="menu.path">
                <i :class="menu.icon" style="color:#FFFFFF;margin-right: 5px"></i>
                <span class="menuTitle">{{menu.name}}</span>
            </router-link>
        </el-menu-item>

        <el-submenu v-if="showLoginInfo" index="personCent">
            <template slot="title">
                <i class="el-icon-user-solid" style="color:#FFFFFF"></i>
                <span class="menuTitle">个人中心</span>
            </template>
            <el-menu-item index="logout" @click="toNewPage('/admin')">
                <i class="fab fa-keycdn"></i>
                管理系统
            </el-menu-item>
            <el-menu-item index="logout" @click="signOut">
                <i class="fas fa-sign-out-alt"></i>
                注销登录
            </el-menu-item>
        </el-submenu>
        <el-menu-item v-else index="loginButton" key="loginButton" @click="toNewPage('/login')">
            <i class="el-icon-user-solid" style="color:#FFFFFF"></i>
            <span class="menuTitle">登录系统</span>
        </el-menu-item>

    </el-menu>
</template>

<script>
    import menuApi from "../api/MenuApi";

    export default {
        name: "AppMenu",
        data: function () {
            return {
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
            }
        },
        computed: {
            showLoginInfo: function () {
                let token = localStorage.getItem("token");
                return token !== undefined && token !== null && token !== "";
            }, menuList: function () {
                return this.$store.getters.getAppMenu;
            }
        },
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
        }
    }

    @media only screen and (max-width: 800px) {
        .menuTitle {
            display: none;
        }
    }
</style>
