<template>
  <div>
    <a-affix offset-top="0">
      <PCMenu></PCMenu>
    </a-affix>
    <Nuxt></Nuxt>
    <Footer/>
  </div>
</template>

<style>

</style>
<script>
    import PCMenu from "../components/PCMenu";
    import Footer from "../components/Footer";

    export default {
        components: {Footer, PCMenu}
    }
</script>
