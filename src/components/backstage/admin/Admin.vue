<template>
    <div class="adminDiv">
        <div class="adminMenu">
            <AdminMenu></AdminMenu>
        </div>

        <div class="adminContent box-shadow">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    import './Admin.css'
    import AdminMenu from "../menu/AdminMenu";

    export default {
        name: "Admin",
        data: function () {
            return {}
        },
        components: {AdminMenu},
        mounted() {
            let token = localStorage.getItem('token');
            if (token) {
                this.$notify.success({
                    title: '授权完成',
                    message: '欢迎您登录到本系统'
                });
            } else {
                this.$notify.error({
                    title: '未授权',
                    message: '系统未发现授权信息,请重新登录'
                });
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>

</style>
