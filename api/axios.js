import axios from "axios"
import config from "../config"

// axios二次封装
// 目的：配置文件与axios进行结合，判断环境，改变接口请求的地址
/*
  1、process.env 是 Node.js 中的一个环境对象。其中保存着系统的环境的变量信息。
  2、NODE_ENV 就是其中的一个环境变量。这个变量主要用于标识当前的环境（生产环境，开发环境）。
   默认是没有这个环境变量的，需要自己手动配置。

*/
// 当前环境=生产环境|开发环境
const baseUrl = process.env.NODE_ENV == "development" ? config.baseUrl.dev : config.baseUrl.pro
// 封装
class HttpRequest {
    // 初始化环境
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }
    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {}
        }
        return config
    }
    interceptors(instance) {
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            console.log(response,'response')
            return response;
        }, function (error) {
            // 对响应错误做点什么
            console.log(error,'response error')
            return Promise.reject(error);
        });
    }
    request(options){
        const instance = axios.create()
        options={...this.getInsideConfig(),...options}
        this.interceptors(instance)
        return instance(options)
    }
}
export default new HttpRequest(baseUrl)