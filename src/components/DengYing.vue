<template>
    <div id="deng" style="height: 1000px;">
        <AppMenu></AppMenu>
    </div>
</template>


<script>
    import AppMenu from "./AppMenu";

    export default {
        components: {AppMenu},
        data() {
            return {
                text: ""
            }
        }
    }
</script>

<style scoped>

</style>
