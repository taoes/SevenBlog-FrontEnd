<template>
    <div style="background-color: #ffffff">
        <Menu theme="light" accordion :open-names="['back','frond']" @on-select="onSelectItem">

            <MenuItem name="">
                <Icon type="ios-folder-open"/>
                全部文章
            </MenuItem>

            <MenuItem name="pc">
                <Icon type="ios-desktop"/>
                计算机相关
            </MenuItem>


            <MenuItem name="database">
                <Icon type="ios-print"/>
                数据库知识点
            </MenuItem>


            <Submenu name="back">
                <template slot="title">
                    <Icon type="logo-tux"/>
                    后端开发
                </template>


                <MenuItem name="java">
                    <Icon type="logo-codepen"/>
                    Java 语言
                </MenuItem>


                <MenuItem name="go">
                    <Icon type="logo-google"/>
                    GoLang 语言
                </MenuItem>


                <MenuItem name="python">
                    <Icon type="logo-python"/>
                    Python 语言
                </MenuItem>


                <MenuItem name="framework">
                    <Icon type="ios-construct"/>
                    框架 & 组件
                </MenuItem>

            </Submenu>

            <Submenu name="frond">
                <template slot="title">
                    <Icon type="logo-chrome"/>
                    前端开发
                </template>
                <MenuItem name="vue_react">
                    <Icon type="ios-flower"/>
                    Vue & React
                </MenuItem>
                <MenuItem name="js">
                    <Icon type="logo-javascript"/>
                    JavaScript
                </MenuItem>
            </Submenu>
        </Menu>
    </div>
</template>

<script>
    import './BlogMenu.css'

    export default {
        name: "BlogMenu",
        methods: {
            onSelectItem: function (resp) {
                this.$store.commit({
                    type: 'changeType',
                    params: resp
                });

                this.$router.push('/blog')

            }
        }
    }
</script>

<style scoped>

</style>
