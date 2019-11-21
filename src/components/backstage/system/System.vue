<template>
    <div class="systemDiv">
        <el-divider>系统配置</el-divider>

        <div class="systemInfo">
            <el-card class="box-card">
                <el-form ref="form" :model="systemInfo" label-width="80px" size="mini">
                    <el-form-item label="系统名称">
                        <el-input placeholder="燕归来兮"></el-input>
                    </el-form-item>

                    <el-form-item label="备案号" type="mini">
                        <el-input placeholder=""></el-input>
                    </el-form-item>


                    <el-form-item label="系统名称">
                        <el-input></el-input>
                    </el-form-item>
                </el-form>
            </el-card>


        </div>
        <div class="systemKey"></div>
    </div>
</template>

<script>
    export default {
        name: 'System',
        data: function () {
            return {
                systemInfo: {}
            }
        }
    }


</script>


<style scoped>
    .systemInfo {
        margin-top: 30px;
    }

    .systemDiv {
        margin-left: 4%;
        margin-right: 4%;
    }

    .box-card {
        justify-content: center;
    }

</style>
