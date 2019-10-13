<template>
    <div class="contentArea">
        用户管理界面

        <div>
            <Button @click="addUser">新增用户</Button>
            <Input v-model="newUserName" placeholder="Enter something..." style="width: 300px"/>
        </div>

        <ol>
            <li v-for="user of userList" :key="user">{{user}}</li>
        </ol>


        <List header="头部数据" footer="版权声明" border>
            <ListItem v-for="user of userList" :key="user">{{user}}</ListItem>
        </List>
    </div>
</template>

<script>

    export default {
        name: "User",
        data: function () {
            return {
                userList: ["张三", "李四"],
            }
        },
        computed: {
            newUserName: function () {
                return this.$store.state.user.name
            },setValue:function () {

            }
        }, methods: {
            addUser: function () {
                if (this.$store.state.user.name === '') {
                    this.$Message.error('数据为空，无法新增');
                    return
                }
                this.userList.push(this.$store.state.user.name)
                this.$Message.info('新增完成');
            }
        }
    }
</script>

<style scoped>


</style>