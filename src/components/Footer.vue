<template>
    <div class="footer">
        <el-link href="https://github.com/tao-seven" style="margin-left: 10px;margin-right: 10px;color: white">
            访问Github
        </el-link>
        <span>@ 2019 燕归来兮</span>
        <span> 皖ICP 备17025334号-1</span>

    </div>
</template>

<script>
    export default {
        name: "Footer"
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
        margin-top: 20px;
        min-height: 30px;
    }
</style>
