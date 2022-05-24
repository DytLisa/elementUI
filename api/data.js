import axios from "./axios"

// 模拟数据接口
export const getData=()=>{
    return axios.request({
        url:'/home/getData',
        method:'get'
    })
}
export const getUser=(params)=>{
    return axios.request({
        url:'/user/getUser',
        method:'get',
        params
    })
}
export const getMenu=(params)=>{
    return axios.request({
        url:'/permission/getMenu',
        method:'post',
        data:params
    })
}