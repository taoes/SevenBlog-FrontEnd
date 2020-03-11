<template>
    <div class="footer">
        <el-link :href="this.getGithubAddress" style="margin-left: 10px;margin-right: 10px;color: white">
            访问Github
        </el-link>
        <span>@ 2019 燕归来兮</span>
        <el-link href='www.beian.miit.gov.cn/publish/query/indexFirst.action' style="color: white"> 皖ICP 备17025334号-1</el-link>

    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "MyFooter",
        computed: {
            ...mapGetters['getGithubAddress']
        }
    }
</script>

<style scoped>

    /*备案信息查询*/
    .footer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: #515a6e;
        color: white;
        align-items: center;
        width: 100%;
        margin-top: 40px;
        min-height: 30px;
    }
</style>
