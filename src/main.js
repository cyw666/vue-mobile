import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import { Button, Toast } from 'vant'
import { Locale } from 'vant'
import zhCN from 'vant/es/locale/lang/zh-CN'

Vue.config.productionTip = false
Locale.use('en-US', zhCN)
Vue.use(Button)
Vue.use(Toast)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
