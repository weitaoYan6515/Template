/** 
 * api接口统一管理
 */
import { get, post } from './http'; 
/**
 * 
 * @param {string} params 
 * 我们定义了一个topics方法
 * 这个方法有一个参数params
 * params是我们请求接口时携带的参数对象
 * 而后调用了我们封装的post方法
 * post方法的第一个参数是我们的接口地址
 * 第二个参数是topics的params参数
 * 即请求接口时携带的参数对象
 * 最后通过export导出topics。
 */
//admin ------api
export const getADMIN={
    //登录
    login : params => post('/Login', params),
    //修改
    set : params => post('/UpdatePassword', params),
};
