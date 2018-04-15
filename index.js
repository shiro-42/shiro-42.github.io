import App from './src/app.js'

Vue.use(Vuetify)

const app = new Vue({
  el: '#app',
  template: `<App/>`,
  components: { App }
})
