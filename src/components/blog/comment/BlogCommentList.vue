<template>
    <div id="blogCommentList">
        <el-timeline>
            <el-timeline-item :key="comment.id"
                              :timestamp="comment.name + '提交于' +  comment.createDatetime"
                              placement="top"
                              type='primary'
                              icon='el-icon-more'
                              v-for="comment of commentList">
                <mavonEditor
                        :value=" comment.comment|| ''"
                        :subfield="false"
                        :defaultOpen="'preview'"
                        :codeStyle="markdownTheme"
                        :boxShadow="false"
                        :toolbarsFlag="false"
                        :editable="false"
                        :scrollStyle="true"
                        :ishljs="true"
                        :navigation="false"
                        style="min-height: 0"
                ></mavonEditor>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>

    import {mavonEditor} from "mavon-editor";

    export default {
        name: "BlogComment",
        data: function () {
            return {
                commentList: [
                    {
                        id: 0,
                        name: '张三疯',
                        comment: "+ 你好",
                        createDatetime: '2019-03-09 23:43:05'
                    }, {
                        id: 1,
                        name: '张三疯',
                        comment: `> 尊前拟把归期说。未语春容先惨咽。人生自是有情痴，此恨不关风与月。离歌且莫翻新阕。一曲能教肠寸结。直须看尽洛城花，始共春风容易别。`,
                        createDatetime: '2019-03-09 23:43:05'
                    }, {
                        id: 3,
                        name: '张三疯',
                        comment: `> 天不生仲尼,万古如长夜`,
                        createDatetime: '2019-03-09 23:43:05'
                    }, {
                        id: 4,
                        name: '张三疯',
                        comment: `
\`\`\`js
import it from "element-ui/src/locale/lang/it";
export const TOKEN_NAME = 'token';
export default {
    state: {
        value: null
    },
    getters: {},
    actions: {},
    mutations: {
        signOut: function (state) {
            state.value = null;
            localStorage.removeItem(TOKEN_NAME);
            console.log("清除token后的数据：", localStorage.getItem(TOKEN_NAME))
        }
    }
};
\`\`\`
                        `,
                        createDatetime: '2019-03-09 23:43:05'
                    }
                ]
            };
        },
        props: {},
        components: {
            mavonEditor
        },
        computed: {
            markdownTheme: function () {
                return this.$store.state.markdown.theme;
            }
        },
        methods: {}
    }
</script>

<style scoped>


</style>
