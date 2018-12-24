<template>
  <div class="nav">
    <span>全部分类</span>
    <ul>
      <a href=""><li>美食</li></a>
      <a href=""><li>外卖</li></a>
      <a href=""><li>酒店</li></a>
      <a href=""><li>民宿</li></a>
      <a href=""><li>电影</li></a>
      <a href=""><li>机票/火车票/汽车票</li></a>
      <a href=""><li>休闲娱乐/KTV</li></a>
      <a href=""><li>生活服务</li></a>
      <a href=""><li>美容美发</li></a>
      <a href=""><li>婚纱摄影</li></a>
      <a href=""><li>亲子</li></a>
      <a href=""><li>运动健身</li></a>
      <a href=""><li>家装/建材</li></a>
      <a href=""><li>学习培训</li></a>
      <a href=""><li>医疗健康</li></a>
      <a href=""><li>酒吧</li></a>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>


<style lang="less" scoped>
@theme-color: #0799a1;
@nav-bg: rgba(7, 153, 161, 0.8);
@light-theme-color: rgba(7, 153, 161, 0.3);
.nav {
  float: left;
  width: 220px;
  padding: 5px 0;
  background-color: @nav-bg;

  span {
    display: block;
    margin: 5px 0 5px 15px;
    font-size: 18px;
    color: #fff;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding-left: 5px;


    

    li {
      padding: 2px 12px;
      font-size: 14px;
      color: #fff;

    }

    li:hover {
      background-color: @light-theme-color;
    }
  }
}

  
</style>
