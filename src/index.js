import 'babel-polyfill'
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import './assets/favicons/favicons'

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
