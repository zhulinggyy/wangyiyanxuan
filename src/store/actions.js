import {
  GET_MSITE_DATA,
  GET_LIST,
  GET_SLI,
}from './mutation-types'

import {reqMockHome} from '../api/index';
import {reqCategory} from "../api";
import {reqCategoryList} from "../api";
export default {
  async getMockHome({commit}){
    const result= await reqMockHome()
    // console.log(result)
    if(result.code===0){
      const MockHome=result.data
      commit(GET_MSITE_DATA,MockHome)
      console.log(MockHome)
    }
  },
  async getCategoryList({commit}){
    const result= await reqCategoryList()
    if(result.code===0){
      const CategoryList=result.data
      commit(GET_LIST,{CategoryList})
    }
  },
  async getCategory({commit}){
    const result= await reqCategory()
    console.log(result)
    if(result.code===0){
      const Category=result.data
      commit(GET_SLI, Category)
    }
  }
}
