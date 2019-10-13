<template>
    <div id="app">
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <router-link v-for="(menu,index) in menuList" :key="index" :to="menu.path">
                <MenuItem  :name="menu.name">
                    <Icon :type="menu.icon"/>
                    {{menu.name}}
                </MenuItem>
            </router-link>
        </Menu>

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
            return {theme1: 'primary', "menuList": []}
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

    body {
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

    .ivu-menu-item > a {
        color: #2c3e50;
    }

    .routerView {
        padding-top: 20px;
        width: 100%;
        height: 1080px;
        background-color: #f0f2f5;
    }
</style>
