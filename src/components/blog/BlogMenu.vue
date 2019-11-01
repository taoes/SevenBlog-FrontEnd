<template>
    <div class="blogMenu">
        <div>
            <div style="background-color: #ffffff">
                <el-menu
                        theme="light"
                        mode="horizontal"
                        :default-openeds="defaultActive"
                        @select="onSelectItem"
                        :collapse="collapse"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                >

                    <el-menu-item index="/">
                        <i class="el-icon-s-home" style="color: #FFFFFF"></i>
                        <template slot="title">
                            主页
                        </template>
                    </el-menu-item>

                    <el-menu-item index="">
                        <i class="el-icon-s-grid" style="color: #FFFFFF"></i>
                        <template slot="title">
                            全部文章
                        </template>
                    </el-menu-item>

                    <el-submenu v-for="(value,key) of category" :index="key" :key="key">
                        <template slot="title">
                            <i class="el-icon-data-board" style="color: #FFFFFF"></i>
                            <span style="color: white">{{key}}</span>
                        </template>

                        <el-menu-item v-for="item of value" :index="item.key" :key="item.key">
                            <i class="el-icon-collection" style="color: #FFFFFF"></i>
                            <span style="color: white">{{ item.name}}</span>
                        </el-menu-item>
                    </el-submenu>

                    <el-submenu index="navigation">
                        <template slot="title">
                            <i class="el-icon-location" style="color: #FFFFFF"></i>
                            <span>站点导航</span>
                        </template>

                        <el-menu-item index="/">
                            <i class="el-icon-s-flag" style="color: #FFFFFF"></i>
                            系统首页
                        </el-menu-item>
                        <el-menu-item index="/admin">
                            <i class="el-icon-s-check" style="color: #FFFFFF"></i>
                            管理界面
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
        </div>
    </div>
</template>

<script>
    import menuApi from "@/api/MenuApi";

    export default {
        name: "BlogMenu",
        data: function () {
            return {
                category: {},
                blogMenuStyle: {
                    backgroundColor: 'white'
                }
            }
        },
        computed: {
            defaultActive: function () {
                return this.$store.state.blogMenu.defaultActive;
            },
            collapse: function () {
                return this.$store.state.blogMenu.collapse;
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
                this.$router.push('/blog')
            }
        }, mounted() {
            // 获取文章目录分类
            let successFun = (resp) => this.category = resp.data;
            menuApi.getCategory(successFun);
        }
    }
</script>

<style>
</style>
