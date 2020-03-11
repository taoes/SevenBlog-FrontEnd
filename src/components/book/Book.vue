<template>
    <div class="bookList">
        <el-image fit="cover" :src="book.imgUrl"
                  :lazy="true"
                  @click="toWebPage(book.url)"
                  style="width: 200px;height: fit-content;border: #2c3e50 1px solid"
                  :alt="book.name"/>
        <div class="bookName">
            <h1 style="font-size: 14px;margin-top: 10px"> {{book.name}}</h1>
        </div>
    </div>
</template>

<script>
    import './Book.css'

    export default {
        name: "Book",
        props: ['book'],
        methods:{
            toWebPage:function (url) {
                // 新的窗口打开URL
                window.open(url)
            }
        }
    }
</script>

<style scoped>

</style>
