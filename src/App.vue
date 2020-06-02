<template>
  <div>
    <div class="container">
      <div class="page-header">
        <h1>路由组件的练习</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <!-- Nav tabs -->
        <ul class="nav nav-stacked col-md-6" role="tablist">
          <li role="presentation" class="active">
            <!-- 路由连接 -->
            <router-link to="/home" aria-controls="home" role="tab" data-toggle="tab">Home</router-link>
            <!-- <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a> -->
          </li>
          <li role="presentation">
            <router-link to="/about" aria-controls="about" role="tab" data-toggle="tab">About</router-link>

            <!-- <a href="#About" aria-controls="About" role="tab" data-toggle="tab">About</a> -->
          </li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content col-md-6">
          <!-- 显示和路径对应的组件的地方 -->
          <!-- Home这个名字对应的是组件的标识名称 -->
          <keep-alive include="Home">
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    
};
</script>

<style scoped>
</style>
