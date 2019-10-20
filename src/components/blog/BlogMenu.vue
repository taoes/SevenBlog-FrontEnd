<template>
    <div class="blogMenu">
        <div>
            <div style="background-color: #ffffff">
                <el-menu theme="light" :default-openeds="defaultActive" @select="onSelectItem">

                    <el-menu-item index="">
                        <i class="el-icon-s-grid"></i>
                        全部文章
                    </el-menu-item>

                    <el-menu-item index="pc">
                        <i class="el-icon-monitor"></i>
                        计算机相关
                    </el-menu-item>


                    <el-menu-item index="database">
                        <i class="el-icon-coin"></i>
                        数据库知识点
                    </el-menu-item>


                    <el-submenu index="back">
                        <template slot="title">
                            <i class="el-icon-position"></i>
                            <span>后端技术</span>
                        </template>


                        <el-menu-item index="java">
                            <i class="el-icon-folder"></i>
                            Java 语言
                        </el-menu-item>


                        <el-menu-item index="go">
                            <i class="el-icon-folder"></i>
                            GoLang 语言
                        </el-menu-item>


                        <el-menu-item index="python">
                            <i class="el-icon-folder"></i>
                            Python 语言
                        </el-menu-item>


                        <el-menu-item index="framework">
                            <i class="el-icon-folder"></i>
                            框架 & 组件
                        </el-menu-item>

                    </el-submenu>

                    <el-submenu index="front">
                        <template slot="title">
                            <i class="el-icon-mouse"></i>
                            <span>前端技术</span>
                        </template>

                        <el-menu-item index="vue_react">
                            <i class="el-icon-folder"></i>
                            Vue & React
                        </el-menu-item>
                        <el-menu-item index="js">
                            <i class="el-icon-folder"></i>
                            JavaScript
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
        computed: {
            defaultActive: function () {
                return ['back', 'front']
            }
        },
        methods: {
            onSelectItem: function (index) {
                this.$store.commit({
                    type: 'changeType',
                    params: index
                });
                this.$router.push('/blog')
            }
        }
    }
</script>

<style>

    .blogMenu {
        width: 260px;
        height: 1024px;
        background-color: white;
    }

</style>
