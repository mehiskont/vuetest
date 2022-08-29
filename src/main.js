import Vue from 'vue'
import App from './App.vue'
import VueFloatLabel from "vue-float-label"
import VueInputAutowidth from 'vue-input-autowidth'
import ToggleButton from 'vue-js-toggle-button'

//style imports
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles.less'

Vue.config.productionTip = false

Vue.filter('formatNumber', function (value, decimals = 0, thousandsSeparator = ' ') {
  let result = parseFloat(value).toFixed(decimals).toString();
  if(thousandsSeparator) result = result.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator)
  return result
});

Vue.use(ToggleButton)
Vue.use(VueInputAutowidth)
Vue.use(VueFloatLabel)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
new Vue({
  render: h => h(App),
}).$mount('#app')