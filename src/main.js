import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {VueMasonryPlugin} from 'vue-masonry'

Vue.config.productionTip = false
Vue.use(VueMasonryPlugin)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
