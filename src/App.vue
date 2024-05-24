<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <el-container>
      <el-header height="60px">
        <div>
          <router-link to="/" class="nav-title"> peanutGDB </router-link>
        </div>
        <el-menu
          class="el-menu-demo"
          :default-active="'/' + this.$route.path.split('/')[1]"
          router
          mode="horizontal"
          background-color="#107e64"
          active-text-color="#FFFFFF"
          text-color="#FFFFFF"
          width="100%"
          style="display: flex; justify-content: space-between"
        >
          <div style="display: flex; justify-content: flex-start">
            <!-- <el-menu-item index="/" class="daohan_navi nav-title">peanutGDB</el-menu-item> -->
            <el-menu-item index="/" class="daohan_navi">Home</el-menu-item>
            <el-menu-item index="/Genomes" class="daohan_navi"
              >Genomes</el-menu-item
            >
            <el-menu-item index="/Browser" class="daohan_navi"
              >Browser</el-menu-item
            >
            <el-menu-item index="/Variations" class="daohan_navi"
              >Variations</el-menu-item
            >
            <el-menu-item index="/Subtype" class="daohan_navi"
              >Expressions</el-menu-item
            >
            <el-menu-item index="/Modelconstruction" class="daohan_navi"
              >Tools</el-menu-item
            >
            <el-menu-item index="/Dataset" class="daohan_navi"
              >Download</el-menu-item
            >
          </div>
          <!-- <el-menu-item index="/antiPD" class="daohan_navi">Anti-PD-1/PD-L1</el-menu-item>
          <el-menu-item index="/Custom" class="daohan_navi">Custom</el-menu-item> -->
          <div style="display: flex; justify-content: flex-end">
            <el-menu-item index="/Statistics" class="daohan_navi"
              >Statistics</el-menu-item
            >
            <el-menu-item index="/Tutorial" class="daohan_navi"
              >Tutorial</el-menu-item
            >
            <el-menu-item index="/Contact" class="daohan_navi"
              >Contact</el-menu-item
            >
          </div>
        </el-menu>
      </el-header>
      <transition name="fade" mode="out-in">
        -->
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
      <el-footer class="footer">
        Copyright© 2024 Peanut Genomics and Breeding Group<br />
        Crop Research Institute, Guangdong Academy of Agriculture Sciences,
        Guangzhou, Guangdong, China
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.el-header {
  background-color: #107e64;
  position: fixed;
  width: 100%;
  padding: 0px;
  z-index: 2009;
}
.nav-title {
  position: fixed;
  height: 60px;
  margin: 15px;
  margin-right: 20px;
  font-size: 150%;
  font-family: "San Francisco", Arial, sans-serif;
  font-weight: bold;
  /* font-style: italic; */
  color: #f0f8ff;
  cursor: pointer;
  z-index: 1;
}
.el-menu-demo {
  margin: 0px;
  padding: 0px;
  margin-left: 20px;
  width: 100%;
}
.el-menu-item {
  padding: 0%;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0%;
  /* font-weight: lighter; */
}
.daohan_navi {
  font-size: 170%;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
}
.el-menu.el-menu--horizontal {
  border: none;
}
.footer {
  /* position: absolute; */
  bottom: 0;
  width: 100%;
  margin-top: 60px;
  text-align: center;
  font-size: 100%;
  background-color: #107e64;
  line-height: 30px;
  color: #ffffff;
} /* position: absolute;box-shadow: 1px 3px 20px #003F5F, 2px 2px 5px #003F5F; */
a {
  text-decoration: none; /* 消除router-link的下划线问题*/
}
</style>
