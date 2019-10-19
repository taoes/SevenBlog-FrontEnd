<template>

    <div class="github">
        <BackTop></BackTop>
        <Row style="padding:20px">
            <Col span="12">
                <Card :bordered="false" style="overflow-y: auto">
                    <a href="https://github.com/zhou-seven" class="github-corner" aria-label="View source on GitHub">
                        <svg width="80" height="80" viewBox="0 0 250 250"
                             style="fill:#64CEAA; color:#fff; position: absolute; top: 0; border: 0; right: 0;"
                             aria-hidden="true">
                            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                            <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                                  fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
                            <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                                  fill="currentColor" class="octo-body"></path>
                        </svg>
                    </a>


                    <div slot="title">
                        <Icon type="logo-github" size="20"/>
                        <span class="cardTitle">我的Github项目</span>
                    </div>

                    <div class="repos">
                        <Collapse v-model="githubCollapse" accordion>
                            <Panel :name="repos.name" :key="repos.id" v-for="(repos,index) of reposList">
                                {{repos.name}}
                                <p slot="content" class="reposDesc">{{repos.desc}}</p>
                            </Panel>
                        </Collapse>
                    </div>
                </Card>
            </Col>

            <Col span="12">
                <Card :bordered="true">
                    <div slot="title">
                        <Icon type="logo-wordpress" size="20"/>
                        <span class="cardTitle">推荐文章</span>
                    </div>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                </Card>
            </Col>
        </Row>

        <Row style="padding:20px">
            <Col span="12">
                <Card :bordered="false" style="height:400px">
                    <div slot="title">
                        <Icon type="md-pie" size="20"/>
                        <span class="cardTitle">文章内容</span>
                    </div>
                    <ve-pie :data="contentRateData" :settings="setting"></ve-pie>
                </Card>
            </Col>

            <Col span="12">
                <Card :bordered="true" style="height: 400px">
                    <div slot="title">
                        <Icon type="ios-map" size="20"/>
                        <span class="cardTitle">访客信息</span>
                    </div>
                    <ve-ring :data="accessData" :settings="setting"></ve-ring>
                </Card>
            </Col>
        </Row>

        <Row style="padding:20px">
            <Col span="24">
                <Card :bordered="true">
                    <div slot="title">
                        <Icon type="logo-github" size="20"/>
                        <span class="cardTitle">博主动态</span>
                    </div>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                </Card>
            </Col>
        </Row>


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
