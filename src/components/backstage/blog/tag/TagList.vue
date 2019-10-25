<template>
    <div class="tagList">
        <el-table
                :data="tagList"
                border
                size="mini"
                :fit="true"
                style="width: 100%;height: 90%;">
            <el-table-column
                    type="index"
                    label="序号"
                    min-width="5%">
            </el-table-column>

            <el-table-column
                    prop="name"
                    label="标签名称"
                    min-width="15%">
            </el-table-column>

            <el-table-column
                    prop="type"
                    label="标签类型"
                    min-width="15%">
                <template slot-scope="scope">
                    <el-select v-model="scope.row.type" :key="scope.row.id" value=""
                               @change="tagTypeChange($event,scope.row.id)">
                        <el-option
                                :label="type.label"
                                :name="type.name"
                                :key="type.id"
                                :value="type.name"
                                v-for="type of tagType"></el-option>
                    </el-select>
                </template>
            </el-table-column>

            <el-table-column
                    label="预览"
                    min-width="15%">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.type" size="mini">{{scope.row.name}}</el-tag>
                </template>
            </el-table-column>

            <el-table-column
                    prop="ctrl"
                    label="控制区"
                    min-width="15%">
                <template slot-scope="scope">
                    <el-button icon="el-icon-search" circle size="mini"
                               @click="toArticleDetail(scope.row.id)"></el-button>

                    <el-button type="primary" icon="el-icon-edit" circle size="mini"
                               @click="toArticleEdit(scope.row.id)"
                    ></el-button>
                </template>

            </el-table-column>
        </el-table>
    </div>
</template>

<script>

    import tagApi from '@/api/TagListApi';

    let errFunc = () => {
    };

    export default {
        name: "Tag",
        data: function () {
            return {
                tagList: [],
                tagType: [
                    {
                        id: 1, name: 'info', label: '正常'
                    },
                    {
                        id: 2, name: 'success', label: '完成'
                    },
                    {
                        id: 3, name: 'danger', label: '危险'
                    },
                    {
                        id: 4, name: 'warning', label: '警示'
                    }
                ]
            }
        }, methods: {
            tagTypeChange: function ($event, id) {
                let type = $event;
                let respFunc = () => {
                };
                tagApi.update({type, id}, respFunc, errFunc)
            }
        },

        mounted() {
            let respFun = (resp) => {
                this.tagList = resp.data
            };
            tagApi.tagList(respFun, errFunc);
        }
    }
</script>

<style scoped>

    .tagList {
        padding: 20px;
    }

</style>
