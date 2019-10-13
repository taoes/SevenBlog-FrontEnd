<template>
    <div class="navigation">
        <i class="el-icon-s-fold" @click="toggleSideState"></i>
        <span>周涛的个人网站系统</span>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        methods:{
            toggleSideState: function () {
                this.$store.commit('toggleCollapse')
            }
        }
    }
</script>

<style scoped>

    .navigation {
        height: 100%;
        width: 100%;
        font-size: 30px;
    }

    i{
        padding: 20px 0;
    }

    span {

        font-size: 20px;
        margin-left: 20px;
    }


</style>