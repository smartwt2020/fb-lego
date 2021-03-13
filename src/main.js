import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import wbWidget from './weBuildWidgets/index'
import './jsonImport'
Vue.use(wbWidget)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
