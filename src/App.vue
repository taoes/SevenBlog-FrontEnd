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
        color: red;
    }

    .v-show-content {
        font-size: 13px;
        padding: 0 !important;
        line-height: 1.5 !important;
    }

    .v-show-content code {
        background-color: #ff511d;
    }

    .v-show-content pre {
        font-weight: 900 !important;
        line-height: 1.2 !important;
        font-size: 10px !important;
        padding: 0 !important;
    }

    .el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
        color: white;
    }
</style>

<style>
    .markdown-body .highlight pre, .markdown-body pre {
        padding: 0;
        font-size: 10px;
    }
</style>
