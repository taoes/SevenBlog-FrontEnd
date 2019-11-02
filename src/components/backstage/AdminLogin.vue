<template>
    <div>
        <AppMenu></AppMenu>
        <div class="backLogin">
            <div class="inputDiv">
                <span class="spanText">账 户:</span>
                <el-input placeholder="请输入账户" v-model="username"></el-input>
            </div>
            <div class="inputDiv">
                <span class="spanText">密 码:</span>
                <el-input style="float: inside" placeholder="请输入密码" v-model="password"
                                                            show-password></el-input>
            </div>
            <div style="margin-top: 20px;display: flex;justify-content: space-around">
                <el-button type="danger" v-model="username" @onclick="resetInput">重置</el-button>
                <el-button type="primary" v-model="password" @click="loginAdmin">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import './AdminLogin.css'
    import AppMenu from "../AppMenu";

    export default {
        name: "AdminLogin",
        data: function () {
            return {
                username: '',
                password: ''
            }
        },
        components: {AppMenu},
        methods: {
            resetInput: function () {
                this.username = '';
                this.password = '';

            },
            loginAdmin: function () {
                if (this.username === 'zhoutao' && this.password === '123456') {
                    localStorage.setItem('token', "周涛");
                    this.$router.push('/admin');
                } else {
                    this.$notify.error({
                        title: '授权失败',
                        message: '账户名和密码不匹配,请重新登录'
                    });
                    this.resetInput();
                }
            }
        }, created() {
            let token = localStorage.getItem('token');
            if (token) {
                this.$router.push('/admin')
            }
        }
    }
</script>

<style scoped>

</style>
