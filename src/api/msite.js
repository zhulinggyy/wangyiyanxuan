// /包含了N个接口请求参数的模块

import ajax from './ajax'
//const BASE='/api'
const BASE='/api'

//根据经纬度获取位置详情
export const reqAddress=(longitude,latitude) =>ajax(BASE+`/position/${latitude},${longitude}`)
//获取食品分类列表
export const reqCategorys=()=>ajax(BASE+'/index_category')
//根据经纬度获取商铺类列表
export const reqShops=({latitude,longitude})=>ajax(BASE+'/shops',{latitude,longitude})

//发送短信验证码
export const reqSendCode=(phone)=>ajax(BASE+'/sendcode',{phone})

//   [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqPwdLogin=(user)=>ajax(BASE+'/login_pwd',user,'POST')


// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqSmsLogin=(phone,code)=>ajax(BASE+'login_sms',{phone,code},'POST')

// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUser=()=>ajax(BASE+'/userinfo')

// [10、用户登出](#10用户登出)<br/>
export const reqLogout=()=>ajax(BASE+'/logout')

//

export const reqGoods=()=>ajax('/goods')
export const reqRatings=()=>ajax('/ratings')
export const reqInfo=()=>ajax('/info')
