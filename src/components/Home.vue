<template>

    <div class="github">
        <Row style="padding:20px">
            <Col span="12">
                <Card :bordered="false">
                    <div slot="title">
                        <Icon type="logo-github" size="20"/>
                        <span class="cardTitle">我的Github项目</span>
                    </div>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
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

        <!--         心灵寄语-->
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

    export default {
        data() {
            return {
                data: [],
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
                }, accessData: {
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
        }, methods: {}
    }
</script>

<style scoped>

    .cardTitle {
        margin-left: 1em;
        margin: 20px;
    }

    .github {
        width: 80%;
        margin-left: 10%;
    }

    .ivu-card {
        margin-left: 20px;
        margin-right: 20px;
        height: 300px;
        box-shadow: 1px 1px 1px 1px lightgray;
    }


</style>