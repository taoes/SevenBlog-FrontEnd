<template>
  <a-list
    :data-source="commentList"
    :header="`共 ${commentList.length} 回复`"
    :locale="{emptyText: '暂无评论数据,快来做第一个评论!'}"
    class="comment-list"
    item-layout="horizontal"
  >
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-comment>
        <template slot="author">
          <p style="color: black;font-size: 13px">

            {{item.name}}

            <span class="commentRate">评价:
            <a-rate :tooltips="rateDesc" disabled v-model="item.url"/>
            </span>
            <span class="commentDatetime"> 时间: {{ dateFormat(item.createTime) }}</span>
          </p>
        </template>

        <template slot="avatar">
          <a-avatar :size="50" :src="avatar"></a-avatar>
        </template>


        <template slot="actions">
          <span v-for="action in actions">{{ action }}</span>
        </template>

        <p class="commentContent" slot="content" style="line-height: 1.5">
          {{ item.content }}
        </p>
        <a-tooltip :title="item.createTime" slot="datetime">
          <span>{{ item.datetime}}</span>
        </a-tooltip>
      </a-comment>
    </a-list-item>
  </a-list>
</template>


<script>
    import moment from 'moment';

    export default {
        name: "Comment",
        props: {
            commentList: Array
        },
        data: function () {
            return {
                actions: [],
                rateDesc: ["错误百出", "不值一读", "差强人意", "收货满满", "印象深刻"],
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                data: [],
                moment,
            }
        }, methods: {
            appendZero: function (num) {
                return num < 10 ? '0' + num : num;
            },
            dateFormat: function (v) {
                let date = new Date(v);
                return date.getFullYear()
                    + "-"
                    + this.appendZero(date.getMonth() + 1)
                    + "-"
                    + this.appendZero(date.getDate())
                    + " "
                    + this.appendZero(date.getHours())
                    + ":"
                    + this.appendZero(date.getMinutes())
                    + ":"
                    + this.appendZero(date.getSeconds());
            },
        }
    }
</script>

<style scoped>

  @media screen and (max-width: 780px) {
    .commentDatetime {
      display: block;
      color: lightslategrey;
      font-size: 11px;
      margin-top: 10px;
    }

  }

  @media screen and (min-width: 780px) {
    .commentDatetime {
      color: lightslategrey;
      font-size: 11px;
      margin-left: 20px;
    }
  }

  .commentRate {
    color: lightslategrey;
    font-size: 11px;
    margin-left: 10px;
  }

  .commentContent {
    border-left: 2px solid lightgray;
    padding-left: 10px;
    white-space: normal !important;
  }


</style>
