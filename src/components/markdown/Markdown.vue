<template>
    <div id="markdown">
        <div id="edit_preview">
            <div id="markdown_area">
                <label>
                     <textarea
                             id="editTextArea"
                             v-model="article.content"
                             style="width: 100%;height: 100%;font-size: 16px;outline: none"/>
                </label>
            </div>

            <div id="preview">
                <markdown-it-vue class="md-body" :content="article.content" :options="options"/>
            </div>
        </div>
    </div>
</template>

<script>
    import MarkdownItVue from 'markdown-it-vue'
    import 'markdown-it-vue/dist/markdown-it-vue.css'

    export default {
        components: {
            MarkdownItVue
        },
        props: {
            article: {},
            options: Object
        },
        data: () => {
            return {}
        }, watch: {
            content: function () {

            }
        }
    }
</script>

<style scoped>

    #tool {
        width: 100%;
        height: 50px;
        border: 1px salmon dashed;
    }

    #edit_preview {
        width: 98%;
        height: fit-content;
        display: flex;
        display: -webkit-flex;
    }

    #markdown_area {
        outline: none;
        width: 50%;
        flex-grow: 0;
        border: 1px solid #DCDFE6;
        min-height: 1024px;
    }

    #editTextArea {
        color: #606266;
        font-size: 16px !important;
    }

    #preview {
        padding: 20px;
        margin-left: 30px;
        outline: none;
        min-height: 1024px;
        border: 1px solid #DCDFE6;
        width: 50%;
        flex-grow: 0;
    }
</style>
