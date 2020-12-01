<template>
  <div id="adminContainer">
    <div id="adminBanner">
      <h1></h1>
    </div>

    <div id="content">
      <AdminMenu></AdminMenu>
      <div id="admin"></div>
    </div>

  </div>
</template>

<style>

</style>
<script>
  import AdminMenu from "../components/admin/AdminMenu";

  export default {
    components: {AdminMenu}
  }
</script>

<style>
  #adminContainer {
    display: flex;
    flex-direction: column;
  }


  #adminBanner {
    width: 100%;
    height: 30px;
    background: #2c3e50;
  }
</style>
