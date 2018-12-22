<template>
  <div id="tuango">
    <index-header/>
    <logo class="logo"/>
    <search-block/>
  </div>
</template>

<script>
import indexHeader from './components/indexHeader.vue'
import logo from './components/logo.vue'
import searchBlock from './components/searchBlock.vue'

export default {
  name: 'appo98k',
  components: {
    indexHeader,
    logo,
    searchBlock
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
  margin: 20px 0 0 60px;
}
</style>
