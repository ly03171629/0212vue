<template>
  <div role="tabpanel" class="tab-pane active" id="home">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active">
        <router-link to="/home/message" aria-controls="Message" role="tab" data-toggle="tab">Message</router-link>
        <!-- <a href="#Message" aria-controls="Message" role="tab" data-toggle="tab">Message</a> -->
      </li>
      <li role="presentation">
        <router-link to="/home/news" aria-controls="News" role="tab" data-toggle="tab">News</router-link>
        <!-- <a href="#News" aria-controls="News" role="tab" data-toggle="tab">News</a> -->
      </li>
    </ul>
    <input type="text">
    <!-- Tab panes -->
    <div class="tab-content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name:'Home'//给当前组件起的标识名称
};
</script>

<style scoped>
</style>
