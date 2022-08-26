import Vue from 'vue'
import App from './App.vue'
import VueFloatLabel from "vue-float-label";

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles.less'

Vue.config.productionTip = false
Vue.use(VueFloatLabel);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
new Vue({
  render: h => h(App),
}).$mount('#app')