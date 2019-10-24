<template>
  <div id="app">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item v-for="menu of menuList" :index="menu.name" :key="menu.name">
        <router-link :key="menu.path" :to="menu.path">
          <i :class="menu.icon"></i>
          {{menu.name}}
        </router-link>
      </el-menu-item>
      <div style="float: right;width: 120px">
        <el-submenu v-if="showLoginInfo" index="personCent">
          <template slot="title">
            <i class="el-icon-refresh-left"></i>
            个人中心
          </template>
          <el-menu-item index="logout" @click="toNewPage('/admin')">管理系统</el-menu-item>
          <el-menu-item index="logout" @click="signOut">注销登录</el-menu-item>
        </el-submenu>
        <el-menu-item v-else index="loginButton" key="loginButton" @click="toNewPage('/login')">
          <i class="el-icon-refresh-left"></i>
          登录
        </el-menu-item>
      </div>
    </el-menu>
    <div class="routerView">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "./App.css";
import menuApi from "@/api/MenuApi";

export default {
  name: "app",
  data: function() {
    return {
      theme1: "dark",
      menuList: []
    };
  },
  computed: {
    showLoginInfo: function() {
      let token = localStorage.getItem("token");
      return token !== undefined && token !== null && token !== "";
    }
  },
  methods: {
    toNewPage: function(url) {
      this.$router.push(url);
    },
    signOut: function() {
      this.$store.commit({
        type: "signOut"
      });
      this.toNewPage("/login");
    }
  },
  created: function() {
    let respFunc = resp => {
      this.menuList = resp.data;
    };
    menuApi.getMenuList(respFunc, () =>
      this.$Message.error("网络请求出现异常")
    );
  }
};
</script>

<style>
</style>
