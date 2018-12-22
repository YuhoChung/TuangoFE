<template>
  <header class="header">
    <a class="logo" href="">
      <img alt="logo" src="../assets/logo.png">
    </a>
  </header>
</template>


<script>

export default {
  name: 'o98k'

}
</script>

<style scoped lang='less'>
@theme-color:#0799a1;
@header-bottom:rgba(7,153,161,0.25);
.header {
  margin: 0 10px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: @theme-color;
  border-bottom: 1px solid @header-bottom;

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
