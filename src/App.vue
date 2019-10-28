<template>
    <div id="app">
        <div class="routerView">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import "./App.css";


    export default {
        name: "app",
        data: function () {
            return {};
        }
    };
</script>

<style scoped>
    #nprogress .bar {
        background: snow !important;
    }

    .el-card {
        height: 300px;
        margin-left: 20px;
        margin-right: 10px;
    }
</style>
