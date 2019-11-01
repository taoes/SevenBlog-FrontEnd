<template>
    <div class="github">
        <AppMenu></AppMenu>
        <el-backtop target=".github"></el-backtop>

        <div id="homeApp">

            <el-row class="homeRow">
                <el-card class="box-card" :bordered="false" style="overflow-y: auto">
                    <div slot="header">
                        <i class="fab fa-github"></i>
                        <span class="cardTitle"> Github项目</span>
                    </div>

                    <div class="repos">
                        <div style="margin-top: 10px" :title="repos.name" v-for="(repos) of reposList"
                             :key="repos.name">
                        </div>
                    </div>
                </el-card>


                <el-card class="box-card" :bordered="true">
                    <div slot="header">
                        <span class="cardTitle">🌲 推荐文章</span>
                    </div>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                </el-card>
            </el-row>


            <el-row class="homeRow">
                <el-card :bordered="false">
                    <div slot="title">
                        <Icon type="md-pie" size="20"/>
                        <span class="cardTitle">文章内容</span>
                    </div>
                    <ve-pie :data="contentRateData" :settings="setting"></ve-pie>
                </el-card>

                <el-card :bordered="true">
                    <div slot="title">
                        <Icon type="ios-map" size="20"/>
                        <span class="cardTitle">访客信息</span>
                    </div>
                    <ve-ring :data="accessData" :settings="setting"></ve-ring>
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
    import reposApi from '@/api/GithubRepos'
    import blogListApi from '@/api/BlogListApi'
    import AppMenu from "../AppMenu";

    export default {
        components: {AppMenu, mavonEditor},
        data() {
            return {
                githubCollapse: "0",
                showModal: false,
                reposList: [],
                setting: {
                    radius: 100,
                    label: {
                        align: 'left',
                        verticalAlign: 'top'
                    },
                },
                contentRateData: {
                    columns: ['name', 'value'],
                    rows: []
                },
                accessData: {
                    columns: ['日期', '访问用户'],
                    radius: 1,
                    label: {
                        align: 'left',
                        verticalAlign: 'top'
                    },
                    rows: [
                        {'日期': '🇨🇳 中国', '访问用户': 1390},
                        {'日期': '🇯🇵 日本', '访问用户': 353},
                        {'日期': '🇰🇷 韩国', '访问用户': 292},
                        {'日期': '🇺🇸 美国', '访问用户': 17},
                        {'日期': '🏳️‍🌈其他', '访问用户': 37},
                    ]
                }
            }
        },

        methods: {
            toNewTag: function (title, href) {
                window.open(href, '_blank', 'toolbar=yes, width=900, height=700')
            }
        }, mounted() {

            let respFunc = (resp) => {
                this.reposList = resp.data
            };

            let error = () => {

            };
            reposApi.getAllRepos(6, respFunc, error);


            blogListApi.getTypeCount((resp => {
                this.contentRateData.rows = resp.data
            }));
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

        .gitee>.v-note-wrapper {
            padding: 0px;
        }
    }
</style>
