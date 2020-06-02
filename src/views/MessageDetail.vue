<template>
  <ul class="list-group">
    <!-- <li class="list-group-item">msgId:{{this.$route.params.msgId}}</li> -->
    <li class="list-group-item">msgId:{{msgId}}</li>
    <!-- <li class="list-group-item">msgContent:{{this.$route.query.msgContent}}</li> -->
    <li class="list-group-item">msgContent:{{msgContent}}</li>
    <li class="list-group-item">msgTitle:{{title}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
let msgTitles = [
  { id: 1, title: "msg001" },
  { id: 2, title: "msg002" },
  { id: 3, title: "msg003" }
];

export default {
  props: ["msgId", "msgContent"],
  data() {
    return {
      title: ""
    };
  },
//   这里是在帮我们计算第一次点击链接  路由组件创建的时候，title的值
  mounted() {
    // console.log(111);
    this.show()
  },
// 这里是在帮我们计算非第一次点击链接  路由组件早都创建好了， 
//title的值，如果不写，那么title的值永远是第一次的title值
  watch: {
    $route(newVal, oldVal) {
        this.show()
    }
  },
  methods:{
      show(){
        setTimeout(() => {
            this.title = msgTitles.find(item => item.id === this.msgId * 1).title;
        }, 1000);
      }
  }
};
</script>

<style scoped>
</style>
