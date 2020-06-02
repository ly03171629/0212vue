import {REQUESTING,REQUEST_SUCCESS,REQUEST_FAILD} from './mutationsType'
export const mutations = {
    //专门用来修改数据的，直接修改
    [REQUESTING](state){
        state.isFirst = false
        state.isLoading = true
    },
    [REQUEST_SUCCESS](state,users){
        state.isLoading = false
        state.users = users
    },
    [REQUEST_FAILD](state,msg){
        state.errMsg = msg//axios错误信息是message
        state.isLoading = false
    }
}