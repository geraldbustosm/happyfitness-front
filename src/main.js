import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Header from './components/Header.vue'

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('Header', Header);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')