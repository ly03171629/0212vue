import axios from 'axios'//导入axios去发送ajax请求
import {REQUESTING,REQUEST_SUCCESS,REQUEST_FAILD} from './mutationsType'
export const actions = {
    // actions内部的方法是不能修改数据的
    //如果要修改必须交给mutations来修改
    async search(context,searchName){
        //发送请求的时候我们把页面切换成正在发送请求的页面
        // this.isFirst = false
        // this.isLoading = true
        context.commit(REQUESTING)
        try {
            let response = await axios({
                //现在我们相当于是问本地服务器要资源
                url:'https://api.github.com/search/users',
                method:'GET',
                params:{
                    q:searchName
                }     
            })
            //items 第一条信息就是一个用户信息 是一个对象
            let users = []
            response.data.items.forEach(item => {
                //从每个获取到的数据当中过滤我要的数据
                let user_name = item.login
                let user_img = item.avatar_url
                let user_url = item.url
                //把我要的数据组装成一个对象
                let obj = {
                    user_name,
                    user_img,
                    user_url
                }
                //把数据对象给放到我的数据当中
                users.push(obj)
            })
            context.commit(REQUEST_SUCCESS,users)
        } catch (error) {
            context.commit(REQUEST_FAILD,error.message)
        }
    }
}