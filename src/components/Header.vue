<template>
  <div id="headerBook">
    <div id="message">
      <span>
        {{ message }}
      </span>
    </div>
    <div id="headerFunction">
      <router-link to="/login">
      <el-button>系统登录</el-button>
      </router-link>
      <router-link to="/work">
      <el-button>工作中心</el-button>
      </router-link>
      <router-link to="/student">
      <el-button>读者信息</el-button>
      </router-link>
      <router-link to="/book">
      <el-button>图书信息</el-button>
      </router-link>
      <router-link to="/cnnode">
        <el-button>node论坛</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerBook",
  data() {
    return {
      message: "江西软件大学-新型图书管理系统",
    };
  },
};
</script>

<style scoped>
#message {
  display: inline-block;
  line-height:60px;
  height: 60px;
  font-weight: bolder;
  font-size: 20px;
  color: white;
  /* background-color: blue; */
  width: 400px;
}
#headerFunction {
  display: inline-block;
  float: right;
}
#headerFunction > .el-button {
  display: inline-block;
  margin-top: 10px;
  background-color: #0a9588;
  border-color: #0a9588;
}
</style>