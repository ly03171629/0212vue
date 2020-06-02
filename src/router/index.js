
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/views/Home'
import About from '@/views/About'
import Message from '@/views/Message'
import News from '@/views/News'
import MessageDetail from '@/views/MessageDetail'
import NewsDetail from '@/views/NewsDetail'

//就是定义了一个路由器对象
export default new VueRouter({
    //就是用来定义我们的路由的
    mode:'history',//路由的模式，默认是hash模式，路径前面会有#
    routes:[
        //每个路由都是一个对象
        {
            path:'/home', //定义一个路径，当点击链接后，路径会变为它
            component:Home, //代表路径变为/home后，要显示的组件是哪个组件
            children:[
                {
                    path:'/home/message',
                    component:Message,
                    children:[
                        {
                            path:'/home/message/info/:msgId/:msgContent',
                            component:MessageDetail,
                            // props:true //代表可以把路由接收到的params参数作为子组件的属性去使用
                            // props:{username:'赵丽颖'},//很少用，只能给子组件传递默认静态值
                            props(route){ //route就是当前我这个路由对象
                                //把路由对象当中的参数，不管什么参数
                                //全部拿到作为子组件的属性去使用
                                return {
                                    msgId:route.params.msgId,
                                    msgContent:route.params.msgContent
                                }
                            },
                            name:'msgInfo' //给当前这个路由起一个标识名称，有这个名字，这个路由就叫命名路由
                        }
                    ]
                },
                {
                    path:'/home/news',
                    component:News,
                    children:[
                        {
                            path:'/home/news/info:newsId',
                            component:NewsDetail,
                            props(route){
                                return {newsId:route.params.newsId,newsContent:route.query.newsContent}  
                            },
                            name:'newsInfo'
                        }
                    ]
                },
                {
                    path:'/home',
                    redirect:'/home/message'
                }
            ]
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/',
            redirect:'/home'//重定向的意思，可以让它重定向到另外一个路径
            //如果你访问的路径是/ 那么我就转给/home
        }
    ]

})
