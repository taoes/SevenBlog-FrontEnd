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
          <p style="color: black;font-size: 13px">{{item.name}} <span style="color: lightslategrey;font-size: 11px">{{ dateFormat(item.createTime) }}</span></p>
        </template>

        <template slot="avatar">
          <a-avatar :src="avatar" :size="50"></a-avatar>

        </template>


        <template slot="actions">
          <span v-for="action in actions">{{ action }}</span>
        </template>

        <p slot="content" style="line-height: 1.5">
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
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        data: [
          {
            actions: ['回复', '点赞'],
            author: '燕归来兮',

            content: '博主厉害，加油',
            datetime: moment().subtract(1, 'days'),
          },
          {
            actions: ['回复'],
            author: '燕归来兮',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            datetime: moment().subtract(9, 'days'),
          },
        ],
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

</style>
