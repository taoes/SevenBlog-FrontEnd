<template>
  <div class="Footer">
        <span id="remark">
            © 2019－2021 zhoutao123.com, all rights reserved 燕归来兮
        </span>
    <a href="https://beian.miit.gov.cn/" id="recordLink">备案号： 皖ICP备17025334号-1</a>
  </div>
</template>

<script>

    export default {
        name: 'Footer'
    }
</script>

<style scope>
  .Footer {
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: #2c3e50;
    width: 100%;
    min-height: 20px;
    justify-content: center;
    padding: 2px;
  }


  /*底部信息栏说明*/

  #remark {
    color: white;
  }

  /*备案官网链接*/


  @media screen and (min-width: 780px) {
    #recordLink {
      margin-left: 20px;
      color: floralwhite;
    }
  }

  @media screen and (max-width: 780px) {
    #recordLink {
      display: none;
    }
  }
</style>
