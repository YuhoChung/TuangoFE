<template>
  <div id="login">
    <t-header/>
    <t-main/>
    <t-footer/>
    <!-- <el-container> -->
      <!-- <el-header>
        <h1>header</h1>
      </el-header>-->
      <!-- <el-aside width='200px'>
        aside
      </el-aside>-->
      <!-- <el-main>main</el-main> -->
      <!-- <el-footer>
        <h1>
          footer
        </h1>
      </el-footer>-->
    <!-- </el-container> -->
  </div>
</template>

<script>
import header from "./components/loginHeader.vue";
import main from "./components/loginMain.vue";
import footer from './components/footer.vue';

export default {
  components: {
    "t-header": header,
    "t-main": main,
    't-footer': footer
  }
};

// console.log()
</script>

<style lang='less'>
@theme-color: #0799a1;
body {
  margin: 0;
}
a {
  color: #999;
  text-decoration: none;
}
a:hover {
  color: @theme-color;
}
/* a:visited {
  color: #999;
}
#register {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} */
</style>

