<template>
    <div id="pictureManagement">
        <div id="picture_tools">
            <el-input v-model="file.desc" placeholder="请输入文件描述" class="uploadFileInfo"></el-input>
            <el-input v-model="file.topic" placeholder="请输入照片主题" class="uploadFileInfo"></el-input>
            <el-upload
                    class="upload-demo"
                    :data="file"
                    multiple
                    action="https://api.zhoutao123.com/file/upload"
                    :on-success="onSuccess"
                    :limit="3">
                <el-button>
                    <i class="fas fa-upload"></i>
                    上传
                </el-button>
            </el-upload>


        </div>
        <div class="pictureList" style="border: red 1px solid">
            <el-table
                    :data="pictureListData"
                    border
                    highlight-current-row
                    size="mini"
                    :fit="true"
                    style="width: 100%">
                <el-table-column
                        prop="id"
                        label="id"
                        min-width="1%">

                </el-table-column>

                <el-table-column
                        prop="name"
                        label="名称"
                        min-width="4%">

                </el-table-column>


                <el-table-column
                        prop="description"
                        label="描述"
                        min-width="5%">

                </el-table-column>


                <el-table-column
                        prop="img"
                        label="URL"
                        min-width="10%">

                </el-table-column>

                <el-table-column
                        prop="topic"
                        label="主题"
                        min-width="5%">

                </el-table-column>

                <el-table-column
                        prop="createTime"
                        label="上传时间"
                        min-width="5%">

                </el-table-column>


                <el-table-column label="操作" min-width="5%">
                    <template slot-scope="scope">
                        <el-popover
                                style="margin-right: 20px"
                                placement="left-start"
                                title="预览图片"
                                width="200"
                                trigger="hover">
                            <img v-lazy="scope.row.img + '?imageView2/1/w/200/h/200'"
                                 style="width: 200px;height: 200px">
                            <el-button slot="reference">
                                <i class="fas fa-search"></i>
                            </el-button>
                        </el-popover>

                        <el-button @click="showDialogFrame(scope.$index)">
                            <i class="fas fa-pencil-alt"></i>
                        </el-button>

                        <el-button>
                            <i class="fas fa-trash-alt" style="color: red"></i>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :page-size="10"
                        @current-change="currentChange"
                        :total="totalPage">
                </el-pagination>
            </div>
        </div>

        <!--        预览框弹出层-->


        <el-dialog
                title="照片信息修改"
                :visible.sync="updateDialog"
                width="500px">

            <el-input v-model="updateFile.name" placeholder="请输入文件名称" class="dialogInput"></el-input>
            <el-input v-model="updateFile.desc" placeholder="请输入文件描述" class="dialogInput"></el-input>
            <el-input v-model="updateFile.topic" placeholder="请输入照片主题" class="dialogInput"></el-input>

            <span slot="footer" class="dialog-footer">
              <el-button @click="updateDialog = false">取 消</el-button>
              <el-button type="primary" @click="saveFileInfo">确 定</el-button>
             </span>
        </el-dialog>

    </div>
</template>

<script>
    import AdminMenu from "../menu/AdminMenu";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Picture",
        data: function () {
            return {
                updateDialog: false,
                pageNumber: 1,
                file: {
                    fileId: null,
                    desc: '',
                    topic: '',
                    name: ''
                },
                updateFile: {
                    fileId: null,
                    desc: '',
                    topic: '',
                    name: ''
                }
            }
        },
        components: {AdminMenu},
        methods: {
            ...mapGetters(['getPictureList']),
            ...mapActions(['updateDatePictureList', 'updateFileInfo']),
            currentChange: function (pageNumber) {
                this.pageNumber = pageNumber;
                this.updateDatePictureList({pageNumber, pageSize: 20})
            },
            onSuccess: function () {
                this.$notify({
                    title: '成功',
                    message: '上传文件已完成',
                    type: 'success'
                });
                this.updateDatePictureList({pageNumber: this.pageNumber, pageSize: 20})
            },
            showDialogFrame: function (rowIndex) {
                this.updateDialog = true;
                let fileInfo = this.pictureListData[rowIndex];
                this.updateFile.fileId = fileInfo.id;
                this.updateFile.topic = fileInfo.topic;
                this.updateFile.desc = fileInfo.description;
                this.updateFile.name = fileInfo.name;
            }, saveFileInfo: function () {
                this.updateFileInfo(this.updateFile);
                this.updateDialog = false;
                this.updateDatePictureList({pageNumber: this.pageNumber, pageSize: 20})
            }
        },
        computed: {
            pictureListData: function () {
                let pictureList = this.getPictureList();
                if (pictureList) {
                    return pictureList.data;
                }
                return []
            }, totalPage: function () {
                let pictureList = this.getPictureList();
                let total = 0;
                if (pictureList) {
                    total = pictureList.total;
                }
                return total;
            }
        },
        mounted() {
            this.currentChange(1)
        }
    }
</script>

<style scoped>

    #picture_tools {
        display: flex;
        display: -webkit-flex;

        margin-bottom: 20px;
    }

    .uploadFileInfo {
        width: 400px;
        margin-right: 30px;
    }

    .dialogInput {
        width: 400px;
        margin: 5px;
    }

    #pictureManagement {
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        margin-right: 4%;
        margin-left: 4%;
        margin-top: 30px;
        height: fit-content;
    }

    .pictureList {
        min-height: 800px;
        overflow-x: auto;
    }

    .pagination {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        margin-bottom: 20px;
    }
</style>
