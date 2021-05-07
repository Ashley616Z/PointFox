<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view></router-view>
        <!-- <Book/> -->
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

//2.注册
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>
 
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.el-header{
  background-color: rgb(65, 60, 60);
}
.el-footer{
  margin-top:50px ;
}
</style>
