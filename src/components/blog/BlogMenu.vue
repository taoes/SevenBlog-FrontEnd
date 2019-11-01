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
                        <i class="fab fa-phoenix-framework" style="color: #FFFFFF;margin-right:5px"></i>
                        <template slot="title">
                            主页
                        </template>
                    </el-menu-item>

                    <el-menu-item index="">
                        <i class="fab fa-list-ul" style="color: #FFFFFF"></i>
                        <template slot="title">
                            全部文章
                        </template>
                    </el-menu-item>

                    <el-submenu v-for="category of categoryList" :index="category.id" :key="category.id">
                        <template slot="title">
                            <i :class="category.icon" style="color: #FFFFFF"></i>
                            <span style="color: white;margin-left: 5px">{{category.name}}</span>
                        </template>

                        <el-menu-item v-for="item of category.sub" :index="item.key" :key="item.key">
                            <i :class="item.icon" style="color: #FFFFFF;margin-right: 5px"></i>
                            <span style="color: white">{{ item.name}}</span>
                        </el-menu-item>
                    </el-submenu>

                    <el-submenu index="navigation">
                        <template slot="title">
                            <i class="fas fa-map-signs" style="color: #FFFFFF;margin-right: 5px"></i>
                            <span>站点导航</span>
                        </template>

                        <el-menu-item index="/">
                            <i class="fab fa-old-republic" style="color: #FFFFFF;margin-right: 5px"></i>
                            系统首页
                        </el-menu-item>
                        <el-menu-item index="/admin">
                            <i class="fab fa-keycdn" style="color: #FFFFFF;margin-right: 5px"></i>
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
                categoryList: {},
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

                console.log(index)
                this.$store.commit({
                    type: 'changeType',
                    params: index
                });
                this.$router.push('/blog')
            }
        }, mounted() {
            // 获取文章目录分类
            let successFun = (resp) => this.categoryList = resp.data;
            menuApi.getCategory(successFun);
        }
    }
</script>

<style>
</style>
