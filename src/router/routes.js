/*
包含所有路由的数组
 */
import MSite from '../pages/MSite/MSite'
import Classification from '../pages/Classification/Classification'
import Goods from '../pages/Goods/Goods'
import Profile from '../pages/Profile/Profile'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart'

export default [
  {
    path:'/msite',
    component:MSite
  },
  {
    path:'/classification',
    component:Classification
  },
  {
    path:'/goods',
    component:Goods
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/shoppingCart',
    component:ShoppingCart
  },

  {
    path:'/',
    redirect:'/msite'
  }
]
