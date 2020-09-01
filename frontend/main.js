import Vue from 'vue'
import App from '@/App.vue'
import vueGoogleMapWrapper from '@/plugin/vue-google-map-wrapper'

Vue.config.productionTip = false

Vue.use(vueGoogleMapWrapper, { apiKey: 'AIzaSyB4KJllbvMOMDIJSgOc60Yq24FuS-OCnt0' })

new Vue({
  render: h => h(App)
}).$mount('#app')