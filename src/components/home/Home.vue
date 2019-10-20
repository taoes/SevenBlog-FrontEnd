<template>

    <div class="github">
        <el-backtop target=".app"></el-backtop>
        <el-row style="padding:10px">
            <el-col :span="12">
                <el-card class="box-card" :bordered="false" style="overflow-y: auto">
                    <div slot="header">
                        <span class="cardTitle">🌋 Github项目</span>
                    </div>

                    <div class="repos">
                        <el-collapse v-model="githubCollapse" accordion>
                            <el-collapse-item :title="'🏝' + repos.name"  v-for="(repos) of reposList">
                                <p class="reposDesc">{{repos.desc}}</p>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="12">
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
            </el-col>
        </el-row>

        <el-row style="padding:20px">
            <el-col span="12">
                <el-card :bordered="false" style="height:400px">
                    <div slot="title">
                        <Icon type="md-pie" size="20"/>
                        <span class="cardTitle">文章内容</span>
                    </div>
                    <ve-pie :data="contentRateData" :settings="setting"></ve-pie>
                </el-card>
            </el-col>

            <el-col span="12">
                <el-card :bordered="true" style="height: 400px">
                    <div slot="title">
                        <Icon type="ios-map" size="20"/>
                        <span class="cardTitle">访客信息</span>
                    </div>
                    <ve-ring :data="accessData" :settings="setting"></ve-ring>
                </el-card>
            </el-col>
        </el-row>

        <el-row style="padding:20px">
            <el-col span="24">
                <el-card :bordered="true">
                    <div slot="title">
                        <Icon type="logo-github" size="20"/>
                        <span class="cardTitle">博主动态</span>
                    </div>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                </el-card>
            </el-col>
        </el-row>


    </div>


</template>
<script>

    import "./style.css"
    import reposApi from '@/api/GithubRepos'

    export default {
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
                    columns: ['日期', '访问用户'],
                    rows: [
                        {'日期': 'JVM虚拟机', '访问用户': 1393},
                        {'日期': 'React', '访问用户': 3530},
                        {'日期': 'VUE', '访问用户': 2923},
                        {'日期': 'NodeJS', '访问用户': 1723},
                        {'日期': 'GoLang', '访问用户': 3792},
                        {'日期': 'Python', '访问用户': 4593}
                    ]
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
        }, methods: {
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

        }
    }
</script>

<style scoped>

</style>
