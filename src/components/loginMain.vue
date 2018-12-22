<template>

  <div class="main">
    <img src="../assets/nice.jpg" alt="nice">
    <div class="login-area">
      <div>
        <el-input
          class="input"
          placeholder="请输入用户名/手机号/邮箱">
        </el-input>
      </div>
  
      <div>
        <el-input
          class="input"
          type="password"
          placeholder="请输入密码">
        </el-input>
      </div>

      <a href="">忘记密码？</a>
  
      <el-button class="reg-btn">登录</el-button>
      <a href="">还没有账号？立即注册</a>
    </div>
  </div>
</template>


<script>
export default {
  
}
</script>



<style lang="less" scoped>
@theme-color:rgb(7,153,161);
.main {
  margin: 50px 0 85px;
  overflow: hidden;

  img {
    float: left;
    margin-left: 120px;
  }
}
.login-area {
  position: relative;
  float: right;
  width: 280px;
  // height: 500px;

  padding: 30px 120px 0 0;

  a {
    display: block;
    margin: 0px 0;
    padding-right: 10px;
    text-align: right;
  }
  .tip {
    position: relative;
    display: none;
    text-align: center;
    font-size: 12px;

  }
  .reg-btn {
    width: 280px;
    height: 45px;
    margin: 10px 0;
    color:#fff;
    background-color: @theme-color;
  }

}
.input {
  width: 280px;
  margin: 10px auto;
}


</style>



