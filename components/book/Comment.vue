<template>
  <a-list
    :data-source="commentList"
    :header="`共 ${commentList.length} 回复`"
    class="comment-list"
    item-layout="horizontal"
  >
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-comment>
        <template slot="author">
          <p>{{item.name}}</p>
        </template>

        <template slot="avatar">
          <a-avatar :src="avatar" :size="50"></a-avatar>
        </template>


        <template slot="actions">
          <span v-for="action in actions">{{ action }}</span>
        </template>
        <p slot="content" style="line-height: 2">
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
                actions: ['回复', '点赞'],
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
        }
    }
</script>

<style scoped>

</style>
