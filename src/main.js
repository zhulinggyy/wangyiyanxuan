import 'lib-flexible/flexible'
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(Button.name, Button);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router,
})
