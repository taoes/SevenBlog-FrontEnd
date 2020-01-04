<template>
    <div id="app">
        <router-view>

        </router-view>
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
        font-weight: 500 !important;
        line-height: 1.2 !important;
        font-size: 14px !important;
        padding: 0 !important;
    }

    .v-show-content img {
        width: 80% !important;
        margin: auto 0;
    }

    .el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
        color: white;
    }
</style>

<style>
    .markdown-body .highlight pre, .markdown-body pre {
        padding: 0;
        font-size: 10px;
        font-weight: 200;
        line-height: 1.2;
    }

    .hljs {
        font-weight: 900;
    }
</style>
