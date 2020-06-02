import Vue from 'vue'
import App from '@/App'
import router from '@/router/index'
new Vue({
    el:'#root',
    render: h => h(App),
    router  //当我们在这注册上路由器的时候，组件对象当中都可以获取到
            //两个对象： this.$router 和 this.$route   
            //this.$router  代表的是路由器对象
            //this.$route   代表的是当前的路由对象
})