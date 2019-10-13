<template>
    <div id="app">
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <router-link to="/home">
                <MenuItem name="1">
                    <Icon type="ios-paper"/>
                    内容管理
                </MenuItem>
            </router-link>

            <router-link to="/user">
                <MenuItem name="2">

                    <Icon type="ios-people"/>
                    用户管理

                </MenuItem>
            </router-link>

            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats"/>
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="4">
                <Icon type="ios-construct"/>
                综合设置
            </MenuItem>
        </Menu>

        <br>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from "@/components/Navigation";
    import Side from "@/components/Side";
    import ContentArea from "@/components/Content";

    export default {
        name: 'app',
        data: function () {
            return {theme1: 'light'}
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
        font-family: 'Monaco', Helvetica, Arial, sans-serif;
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
</style>
