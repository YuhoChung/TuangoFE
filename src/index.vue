<template>
  <div id="tuango">
    <index-header></index-header>
    <logo class="logo"></logo>
    <!-- <div class="test"></div> -->
    <searchBlock></searchBlock>
    <left-nav></left-nav>
    <carousel></carousel>
  </div>
</template>

<script>
import indexHeader from './components/indexHeader.vue'
import logo from './components/logo.vue'
import searchBlock from './components/searchBlock.vue'
import nav from './components/nav.vue'
import carousel from './components/carousel.vue'

export default {
  name: 'appo98k',
  components: {
    indexHeader,
    logo,
    searchBlock,
    'left-nav': nav,
    carousel
  },
  kill: 'ok'
}
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

.logo {
  margin: 20px 0 0 65px;
}

.nav {
  margin-left: 65px
}

// .test {
//   display: inline-block;
//   width: 400px;
//   height: 30px;
//   background-color: red;
// }
</style>
