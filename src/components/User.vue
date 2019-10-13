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
            }
        }, methods: {
            addUser: function () {
                if (this.$store.state.user.name === '') {
                    this.$Notice.error({
                        title: '数据新增失败',
                        desc: 'Here is the notification description. Here is the notification description. '
                    });
                    return
                }
                this.userList.push(this.$store.state.user.name)
                this.$Notice.info({
                    title: '数据新增完成',
                    desc: 'Here is the notification description. Here is the notification description. '
                });
            }
        }
    }
</script>

<style scoped>


</style>