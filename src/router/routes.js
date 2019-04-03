/*
包含所有路由的数组
 */
import MSite from '../pages/MSite/MSite'
import Classification from '../pages/Classification/Classification'
import Goods from '../pages/Goods/Goods'
import Profile from '../pages/Profile/Profile'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart'
import Phonelogin from '../../src/components/phonelogin/Phonelogin'
import Emaillogin from '../../src/components/emaillogin/Emaillogin'


export default [
 // personage
  {
    path:'/msite',
    component:MSite,
    meta:{
      isShow:true
    }
  },
  {
    path:'/classification',
    component:Classification,
    meta:{
      isShow:true
    }
  },
  {
    path:'/goods',
    component:Goods,
    meta:{
      isShow:true
    }
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/shoppingCart',
    component:ShoppingCart,
    meta:{
      isShow:true
    }
  },
  {
    path:'/emaillogin',
    component:Emaillogin
  },
  {
    path:'/phonelogin',
    component:Phonelogin
  },

  {
    path:'/',
    redirect:'/classification'
  }
]
