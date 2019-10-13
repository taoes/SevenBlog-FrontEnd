<template>
    <div class="hello">
        <div class="website">User</div>
    </div>
</template>

<script>
    export default {
        name: 'List',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .website {
        height: 100px;
        margin-left: 20%;
        margin-right: 20%;
        background-color: snow;
    }
</style>
