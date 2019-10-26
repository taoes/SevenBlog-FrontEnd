<template>
    <div class="article">

        <div style="margin-bottom: 20px">
            <el-button
                    size="small"
                    icon="el-icon-back"
                    @click="back">返回
            </el-button>
            <el-button
                    size="small"
                    icon="el-icon-upload "
                    @click="add">新增目录
            </el-button>
        </div>
        <el-table
                :data="categoryList"
                border
                size="mini"
                :fit="true"
                style="width: 100%;height: 90%;">
            <el-table-column
                    height="100px"
                    type="index"
                    label="序号"
                    min-width="5%">
            </el-table-column>

            <el-table-column
                    prop="id"
                    label="目录ID"
                    min-width="15%">
            </el-table-column>

            <el-table-column
                    prop="name"
                    label="目录名称"
                    min-width="15%">
            </el-table-column>

            <el-table-column
                    prop="key"
                    label="目录分类"
                    min-width="15%">
            </el-table-column>

        </el-table>
    </div>
</template>

<script>
    import menuApi from '@/api/MenuApi'

    export default {
        name: "Category",
        data: function () {
            return {
                categoryList: []
            }
        }, methods: {
            back: function () {
                this.$router.back();
            }
        },
        mounted() {
            menuApi.getCategoryList((reps) => this.categoryList = reps.data);
        }
    }
</script>

<style scoped>

</style>
