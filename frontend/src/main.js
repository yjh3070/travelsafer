import Vue from 'vue'
import App from '@/App.vue'
import {router} from './router/index'
import vueGoogleMapWrapper from '@/plugin/vue-google-map-wrapper'
// import vuetify from '@/plugin/vuetify'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.use(vueGoogleMapWrapper, { apiKey: 'AIzaSyB4KJllbvMOMDIJSgOc60Yq24FuS-OCnt0' })

new Vue({
  // vuetify,
  render: h => h(App),
  router
}).$mount('#app')
