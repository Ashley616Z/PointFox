<template>
  <div id="Main">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>系统登录</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >忘记密码</el-button>
      </div>
      <div id="loginContent">
        <el-input id="username" v-model="user.username"></el-input>
        <el-input
          id="password"
          v-model="user.password"
          show-password
        ></el-input>
        <el-button id="submitSystem" @click.native="loginSystem">登录</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "Main",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
      methods: {
        loginSystem(){
          Axios.get('http://localhost:3000/Main',{
              params:this.user
          }).then((response)=>{
            alert(response.data.username);
            alert(response.data.password);
          })
        },
      },
};
</script>

<style>
#Main {
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;
}
#loginContent{
    text-align: center;
}
#submitSystem {
  background-color: #0a9588;
  color: white;
  width: 150px;
  display: block;
  margin: 0 auto;
}
#loginContent > * {
  margin-top: 5px;
}
</style>