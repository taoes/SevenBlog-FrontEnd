<template>
    <div class="blogMenu">
        <div>
            <div style="background-color: #ffffff">
                <el-menu theme="light" :default-openeds="defaultActive" @select="onSelectItem">

                    <el-menu-item index="">
                        <i class="el-icon-s-grid"></i>
                        全部文章
                    </el-menu-item>

                    <el-submenu v-for="(value,key) of category" :index="key" :key="key">
                        <template slot="title">
                            <i class="el-icon-s-promotion"></i>
                            <span>{{key}}</span>
                        </template>

                        <el-menu-item v-for="item of value" :index="item.key" :key="item.key">
                            <i class="el-icon-s-grid"></i>
                            {{ item.name}}
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
                category: {}
            }
        },
        computed: {
            defaultActive: function () {
                return Object.keys(this.category)
            },
            collapse: function () {
                return this.$store.state.adminMenu.collapse;
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
        }, mounted() {
            // 获取文章目录分类
            let successFun = (resp) => this.category = resp.data;
            menuApi.getCategory(successFun);
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
