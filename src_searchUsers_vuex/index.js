import Vue from 'vue'
import App from '@/App'
import "@babel/polyfill";
import store from '@/vuex/store'
new Vue({
    //先把全局事件总线安排好
    beforeCreate(){
        Vue.prototype.$bus = this
    },
    el:'#root',
    render: h => h(App),
    store
})