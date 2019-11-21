<template>
    <div class="github">
        <el-backtop target=".github"></el-backtop>
        <div id="homeApp">
            <el-row class="homeRow">
                <el-card class="box-card" :bordered="false" style="overflow-y: auto">
                    <div slot="header">
                        <span class="cardTitle">🌲 Github项目</span>
                    </div>
                    <div class="repos">
                        <el-table
                                :data="reposList"
                                :show-header="false"
                                @row-click="clickGithub"
                                style="width: 100%;">
                            <el-table-column
                                    prop="title"
                                    min-width="50%">
                                <template slot-scope="scope">
                                    <i class="fab fa-github-alt"></i>
                                    <span style="margin-right: 30px;margin-left: 20px;color: #303133;height: 30px">{{scope.row.name}}</span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-card>


                <el-card class="box-card" :bordered="true" style="overflow-y: auto">
                    <div slot="header">
                        <span class="cardTitle">🌲 推荐文章</span>
                    </div>
                    <el-table
                            :data="recommendArticle"
                            :show-header="false"
                            @row-click="clickArticle"
                            style="width: 100%;">
                        <el-table-column
                                prop="title"
                                min-width="50%">
                            <template slot-scope="scope">
                                <i class="far fa-eye"></i>
                                <span style="padding-left: 5px;padding-right: 2px">{{scope.row.access}}</span>
                                <span style="margin-right: 30px;margin-left: 20px;color: #303133;height: 30px">{{scope.row.title}}</span>
                                <el-tag
                                        :type="tagType[Math.floor(Math.random()*5)]"
                                        v-for="tag of scope.row.tagList" style="margin-left: 5px"
                                        size="small">
                                    {{tag}}
                                </el-tag>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-row>


            <el-row class="homeRow">
                <el-card :bordered="false">
                    <ve-pie :data="contentRateData" :settings="setting"></ve-pie>
                </el-card>

                <el-card :bordered="true">
                    <ve-histogram :data="accessInfo" :settings="setting"></ve-histogram>
                </el-card>
            </el-row>


            <el-row class="homeRow">
                <el-card :bordered="true" class="onwRow">
                    <div slot="title">
                        <Icon type="logo-github" size="20"/>
                        <span class="cardTitle">博主动态</span>
                    </div>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                </el-card>
            </el-row>
        </div>
    </div>
</template>
<script>

    import "./style.css"
    import {mavonEditor} from "mavon-editor";
    import AppMenu from "../AppMenu";
    import AdminMenu from "../backstage/menu/AdminMenu";

    export default {
        components: {AdminMenu, AppMenu, mavonEditor},
        data() {
            return {
                githubCollapse: "0",
                showModal: false,
                tagType: ['success', '', 'info', 'danger', 'warning'],
                setting: {
                    radius: 100,
                    label: {
                        align: 'left',
                        verticalAlign: 'top'
                    },
                }
            }
        }, computed: {
            reposList: function () {
                return this.$store.getters.getRepoList;
            }, contentRateData: function () {
                return this.$store.getters.getBlogCategoryRate;
            }, accessInfo: function () {
                return this.$store.getters.getAccessInfo;
            }, recommendArticle: function () {
                if (!this.$store.getters.getRecommendArticle) {
                    return null;
                }
                return this.$store.getters.getRecommendArticle.data;
            }
        }, methods: {
            clickArticle: function (row) {
                this.$router.push('/blog/article/' + row.id);
            }, clickGithub: function (row) {
                window.open(row.url, '_blank');
            }
        },
        created() {
            if (!this.reposList) {
                this.$store.dispatch('updateGithubRepoList', {size: 6});
            }

            if (!this.contentRateData) {
                this.$store.dispatch('updateBlogCategoryList');
            }

            if (!this.accessInfo) {
                this.$store.dispatch('updateAccessInfo');
            }

            if (!this.recommendArticle) {
                this.$store.dispatch('updateRecommendArticle');
            }
        }
    }
</script>

<style scoped>

    #homeApp {
        display: flex;
        width: 100%;
        height: fit-content;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    @media only screen and (min-width: 987px) {
        .homeRow {
            padding: 10px;
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: center;
            height: fit-content;
        }

        .el-card {
            margin: 10px;
            min-height: 400px;
            width: 50%;
        }

        .onwRow {
            width: 100%;
        }
    }

    @media only screen and (max-width: 987px) {

        .homeRow {
            padding: 10px;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: fit-content;
            align-items: center;
        }

        .el-card {
            margin-top: 20px;
            min-height: 400px;
            margin-left: 20px;
            margin-right: 20px;
            width: 100%;
        }

        .onwRow {
            width: 100%;
        }

        .gitee > .v-note-wrapper {
            padding: 0px;
        }

        .el-card .el-card__body {
            padding-top: 10px;
        }
    }
</style>
