import{
    GET_MSITE_DATA,
    GET_LIST,
    GET_SLI,
  }from './mutation-types'
export default {
  [GET_MSITE_DATA](state, MockHome){
    state.MSiteData = MockHome
  },
  [GET_LIST](state, {categoryList}){
    state.categoryList = categoryList
  },
  [GET_SLI](state, Category){
    state.Category = Category
  },
}
