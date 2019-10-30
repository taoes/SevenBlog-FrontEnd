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

<style>
    #nprogress .bar {
        background: snow !important;
    }

    .el-card {
        height: 300px;
        margin-left: 20px;
        margin-right: 10px;
    }


    blockquote p {
        font-size: 12px;
        font-weight: inherit;
        color: orangered;
    }
</style>
