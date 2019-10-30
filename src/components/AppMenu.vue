<template>

    <el-menu
            class="el-menu-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            mode="horizontal">
        <el-menu-item v-for="menu of menuList" :index="menu.name" :key="menu.name">
            <router-link :key="menu.path" :to="menu.path">
                <i :class="menu.icon"></i>
                {{menu.name}}
            </router-link>
        </el-menu-item>

        <el-submenu v-if="showLoginInfo" index="personCent">
            <template slot="title">
                <i class="el-icon-user-solid"></i>
                个人中心
            </template>
            <el-menu-item index="logout" @click="toNewPage('/admin')">管理系统</el-menu-item>
            <el-menu-item index="logout" @click="signOut">注销登录</el-menu-item>
        </el-submenu>
        <el-menu-item v-else index="loginButton" key="loginButton" @click="toNewPage('/login')">
            <i class="el-icon-user-solid"></i>
            登录
        </el-menu-item>

    </el-menu>
</template>

<script>
    import menuApi from "../api/MenuApi";

    export default {
        name: "AppMenu",
        data: function () {
            return {
                theme1: "light",
                menuList: []
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
            }
        },
        created: function () {
            let respFunc = resp => {
                this.menuList = resp.data;
            };
            menuApi.getMenuList(respFunc, () =>
                this.$Message.error("网络请求出现异常")
            );
        }
    }
</script>

<style scoped>

</style>
