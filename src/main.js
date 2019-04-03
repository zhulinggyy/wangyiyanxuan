import 'lib-flexible/flexible'
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import Header from './components/Header/header'
import ProfileHeader from './components/ProfileHeader/profile_header'
import mockServer from  './mock/mockServer'
import { Button,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(Button.name, Button);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false
Vue.component('Header',Header)
Vue.component('ProfileHeader',ProfileHeader)
new Vue({
  el: '#app',
  components: {
    App,

  },
  template: '<App/>',
  router,
  store,
  Header,
  ProfileHeader,

})
