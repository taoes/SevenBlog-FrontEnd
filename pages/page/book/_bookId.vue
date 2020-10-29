<template>
  <h1>{{bookId}}</h1>
</template>


<script>
    export default {
        data: function () {
            return {
                bookId: 0
            }
        },
        created:function () {
            let {bookid} = this.$route.params
            console.log(bookid)
            this.bookId = bookid
        }
    }
</script>
