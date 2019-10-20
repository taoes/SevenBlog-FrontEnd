<template>
    <div id="app">
        <el-menu
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item v-for="(menu,index) of menuList" :index="menu.name">
                <router-link :key="menu.path" :to="menu.path">
                    <i :class="menu.icon"></i>
                    {{menu.name}}
                </router-link>
            </el-menu-item>
        </el-menu>
        <div class="routerView">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import menuApi from "@/api/MenuApi";

    export default {
        name: 'app',
        data: function () {
            return {theme1: 'dark', "menuList": []}
        },
        created: function () {
            let respFunc = (resp) => {
                this.menuList = resp.data
            };
            menuApi.getMenuList(respFunc, () => this.$Message.error("网络请求出现异常"));
        },
        components: {}, computed: {
            sideWidth: function () {
                return this.$store.state.side.sideWith;
            }
        }
    }
</script>

<style>
    #app {
        width: 100%;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    html body {
        cursor: url('./assets/cursor.png'), auto;
    }

    html {
        max-width: 100%;
        overflow-x: hidden;
    }body {
        margin: 0;
        padding: 0;
    }


    body {
        background-color: #f0f2f5;
    }

    body > .el-container {
        margin: 40px;


    }

    Side {
        margin-top: 40px;
    }

    .ivu-menu {
        display: inline-flex;
        flex-wrap: nowrap;
        width: 100%;
    }

    .ivu-menu-item > a {
        color: #2c3e50;
    }

    .routerView {
        padding-top: 20px;
        width: 100%;
        height: 1280px;
        max-height: 10800px;
        background-color: #f0f2f5;
    }

    a {
        text-decoration: none;
    }

    .router-link-active {
        text-decoration: none;
    }
</style>
