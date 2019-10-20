<template>
    <div class="backLogin">

        <div class="inputDiv">
            账户名: &nbsp;<el-input placeholder="请输入账户" v-model="username"></el-input>
        </div>


        <div class="inputDiv">
            密&nbsp;&nbsp;&nbsp;&nbsp;码: &nbsp;<el-input style="float: inside" placeholder="请输入密码" v-model="password"
                                                        show-password></el-input>
        </div>

        <div style="margin-top: 20px;display: flex;justify-content: space-around">
            <el-button type="danger" v-model="username" @onclick="resetInput">重置</el-button>
            <el-button type="primary" v-model="password" @click="loginAdmin">登录</el-button>
        </div>
    </div>
</template>

<script>
    import './AdminLogin.css'

    export default {
        name: "AdminLogin",
        data: function () {
            return {
                username: '',
                password: ''
            }
        }, methods: {
            resetInput: function () {
                this.username = '';
                this.password = '';

            },
            loginAdmin: function () {
                this.$store.commit('setToken', "周涛");
                this.$router.push('/admin');
            }
        }, created() {
            let token = this.$store.state.token.value;
            if (token != null && token !== '') {
                this.$router.push('/admin')
            } else {

            }
        }
    }
</script>

<style scoped>

</style>
