<template>
    <div class="side">
        <el-menu
                default-active="0"
                class="el-menu-vertical-demo"
                collapse-transition="false"
                :collapse="collapse">

            <el-menu-item index="0">
                <i class="el-icon-s-home"></i>
                <span slot="title">系统主页</span>
            </el-menu-item>

            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>辅助工具</span>
                </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>


            <el-menu-item index="2">
                <i class="el-icon-s-order"></i>
                <span slot="title">博客文章</span>
            </el-menu-item>

            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">推荐资源</span>
            </el-menu-item>


        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Side",
        computed: {
            collapse: function () {
                return this.$store.state.side.collapse;
            }
        }
    }
</script>

<style scoped>

    .side {
        width: 100%;
        height: 1080px;
        padding-top: 50px;
        background-color: #FFFFFF;
    }

</style>