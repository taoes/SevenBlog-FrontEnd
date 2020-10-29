<template>
  <div class="container">
    <div id="desktopBackground">
      <h1>燕归来兮</h1>
      <h4>Welcome To My WebSite</h4>
    </div>
  </div>
</template>

<script>
    import PCMenu from "../components/PCMenu";
    export default {
        components: {PCMenu}
    }
</script>

<style scoped>
  #desktopBackground {
    display: flex;
    flex-direction: column;
    background: url('https://pic.zhoutao123.com/picture/background/bg-contact.jpg');
    object-fit: cover;
    height: 300px;
    width: 100%;
    min-height: 30%;
    justify-content: center;
    align-items: center;
  }



  h1 {
    color: white;
    font-size: 45px;
    font-weight: bold;
    font-family: "PT Serif", 'Times New Roman', Times, serif !important;
    transition: all 0.8s linear;
  }

  h4 {
    color: white;
    font-size: 20px;
    font-family: "PT Serif", 'Times New Roman', Times, serif !important;
  }

</style>
