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
                <Card :bordered="false">
                    <div slot="title">
                        <Icon type="logo-github" size="20"/>
                        <span class="cardTitle">文章内容</span>
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
                        <span class="cardTitle">访客信息</span>
                    </div>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
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
                data: []
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