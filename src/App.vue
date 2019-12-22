<template>
    <div id="app">
        <div style="position: absolute;z-index: 1000;" >
            <vue-particles
                    color="#ff0000"
                    :particleOpacity="0.7"
                    :particlesNumber="80"
                    shapeType="circle"
                    :particleSize="4"
                    linesColor="#dedede"
                    :linesWidth="1"
                    :lineLinked="true"
                    :lineOpacity="0.4"
                    :linesDistance="150"
                    :moveSpeed="3"
                    :hoverEffect="true"
                    hoverMode="grab"
                    :clickEffect="true"
                    clickMode="push"
                    style="width: 100%;height: 100%"
            >
            </vue-particles>
        </div>
        <div class="routerView" style="position: absolute">
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
    }
</style>
