<template>
    <div class="adminDiv">
        <div class="adminMenu">
            <AdminMenu></AdminMenu>
        </div>

        <div class="adminContent box-shadow">
            <el-table
                    :data="tableData"
                    height="250"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>
        </div>

    </div>
</template>

<script>
    import './Admin.css'
    import AdminMenu from "../menu/AdminMenu";

    export default {
        name: "Admin",
        data: function () {
            return {
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        },
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
