<template>
    <div id="articleComment">
        <el-form ref="form" :model="form" label-width="80px" style="margin-right: 30px">
            <el-form-item label="姓名">
                <el-input placeholder="Please input your nickname"></el-input>
            </el-form-item>
        </el-form>

        邮箱:
        <el-input></el-input>
        网址:
        <el-input></el-input>
        内容:
        <el-input></el-input>
    </div>
</template>

<script>
    export default {
        name: "ArticleComment",
        data: function () {
            return {
                form: {}
            }
        }
    }
</script>

<style scoped>

</style>
