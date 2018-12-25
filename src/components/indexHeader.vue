<template>
  <header class="header">
    <span class="location">
      <i class="el-icon-location"></i>
      <a href="javascript:;">杭州</a>
    </span>
    <a href="./login.html">欢迎来到团go网，请登录</a>
    <a href="./register.html">注册</a>


    <span class="right-link">
      <a href="javascript:;">我的团go</a>
      <a href="javascript:;">商家中心</a>
    </span>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </header>

</template>


<script>
export default {
  name: "o98k"
};
</script>

<style scoped lang='less'>
@theme-color: #0799a1;
@light-theme-color: rgba(7, 153, 161, 0.03);
.header {
  height: 40px;
  // margin: 0 10px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: @theme-color;
  line-height: 40px;
  background-color: @light-theme-color;
  border-bottom: 1px solid @light-theme-color;

  .location {
    margin-left: 60px;
    a {
      padding-left: 5px;
    }
  }

  a {
    padding-left: 30px;
    font-size: 14px;
  }

  .right-link {
    margin-right: 60px;
    float: right;


  }


  .el-icon-location {
    font-size: 16px;
    color: #6c6c6c;
  }



  .logo {
    display: inline-block;
    padding: 5px 50px;
    // line-height: 40px;
    img {
      width: 100px;
      height: 70px;
      vertical-align: middle;
    }
  }
}
</style>
