import Vue from 'vue'
// import App from './components/App.vue'
// import Calculator from './components/Calculator.vue'
import Calendar from './components/Calendar.vue'
import './style.css'

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(Calendar)
  // render: h => h(Calculator)
})
