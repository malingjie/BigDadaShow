/**
 * axios请求配置
 */
import {Message} from 'element-ui'
import {Loading} from 'element-ui'
 import axios from 'axios'

 let loading;
 function startLoading(){
    loading = Loading.service({
         lock: true,
         text: '拼命加载中...',
         background: 'rbga(0,0,0,0.3)'
     })
 }

 function endLoading(){
    loading.close();
 }

 //请求拦截
 axios.interceptors.request.use(config =>{
    //  加载动画
    startLoading();
    if(sessionStorage.token){
        config.headers.Authorization = sessionStorage.token;
    }
    return config;
 },error =>{
     return Promise.reject(error);
 })

//  响应拦截
axios.interceptors.response.use(Response =>{
    // 结束加载动画
    endLoading();
    return Response;
},async error =>{
    // 错误提醒
    endLoading();
    // 获取错误状态码
    if(error.response){
    const {status} = error.response;
    if(status == 401){
        Message.error('token失效，情重新登录');
        // 清除token
        sessionStorage.clear();
        this.$router.push('/login');
    }}else{
        Message.error("您的请求可能有误或者网络不好");
    }

    return Promise.reject(error);
})

export default axios;