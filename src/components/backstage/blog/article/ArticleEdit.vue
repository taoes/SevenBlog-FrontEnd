<template>
  <div class="articleEdit">
    <el-input style="width:60%" />
    <div class="mavon">
      <mavon-editor codeStyle="vs2015" v-model="article.content" class="editor" />
    </div>
  </div>
</template>

<script>
import "./ArticleEdit.css";
import { mavonEditor } from "mavon-editor";

export default {
  name: "ArticleEdit",
  data: function() {
    return {
      article: { title: "34" }
    };
  },
  components: { mavonEditor },
  methods: {},
  watch: {}
};
</script>

<style scoped>
</style>
