<template>
    <div class="adminDiv">
        <div class="adminMenu">
            <AdminMenu></AdminMenu>
        </div>

        <div class="adminContent box-shadow">
            内容区域
        </div>

    </div>
</template>

<script>
    import './Admin.css'
    import AdminMenu from "../menu/AdminMenu";

    export default {
        name: "Admin",
        components: {AdminMenu},
        mounted() {
            let token = this.$store.state.token.value;
            if (token == null || token === '') {
                this.$notify.error({
                    title: '未授权',
                    message: '系统未发现授权信息,请重新登录'
                });
                this.$router.push('/admin/login')
            } else {
                this.$notify.success({
                    title: '授权完成',
                    message: '欢迎您登录到本系统'
                });
            }
        }
    }
</script>

<style scoped>

</style>
