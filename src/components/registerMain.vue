<template>
  <div class="reg-area">
    <div>
      <span>手机号码：</span>
      <el-input
        class="input"
        placeholder="请输入手机号码">
      </el-input>
      <span class="tip">手机号必填</span>
    </div>

    <div>
      <span>验证码：</span>
      <el-input
        class="input"
        placeholder="请输入验证码">
      </el-input>
    </div>

    <div>
      <span>用户名：</span>
      <el-input
        class="input"
        placeholder="请输入用户名">
      </el-input>
    </div>

    <div>
      <span>密码：</span>
      <el-input
        class="input"
        type="password"
        placeholder="请输入密码">
      </el-input>
    </div>

    <div>
      <span>确认密码：</span>
      <el-input
        class="input"
        type="password"
        placeholder="请输入密码">
      </el-input>
    </div>
    <el-button class="reg-btn">注册</el-button>
  </div>
</template>


<script>
export default {
  
}
</script>



<style lang="less" scoped>
@theme-color:rgb(7,153,161);
.reg-area {
  position: relative;
  width: 400px;
  // height: 500px;
  margin: 50px auto 100px;
  padding-left: 80px;

  span {
    position: absolute;
    left: 0;
    display: inline-block;
    width: 80px;
    padding-top: 17px;
    text-align: right;
    color:#333;
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
    margin-top: 10px;
    color:#fff;
    background-color: @theme-color;
  }

}
.input {
  width: 280px;
  margin: 10px auto;
}


</style>



