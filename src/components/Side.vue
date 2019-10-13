<template>
    <div class="side">

    </div>
</template>

<script>
    export default {
        name: "Side",
        computed: {
            collapse: function () {
                return this.$store.state.side.collapse;
            }
        }
    }
</script>

<style scoped>

    .side {
        width: 100%;
        height: 1080px;
        padding-top: 50px;
        background-color: #FFFFFF;
    }

</style>