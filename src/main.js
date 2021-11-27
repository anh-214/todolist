import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import routes from './routes/index.js'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI, {locale});

Vue.config.productionTip = false

const store = new Vuex.Store ({
  state: {
    todos: [
      { id: 1, name: 'đi học', from: '2021-11-26 21:47:00', to: '2021-11-26 21:47:00', status: true},
      { id: 2, name: 'đi chơi', from: '2021-11-26 21:47:00', to: '2021-11-26 21:47:00', status: true},
      { id: 3, name: 'đi làm', from: '2021-11-26 21:47:00', to: '2021-11-26 21:47:00', status: true},
    ],
    timestamp: null,
    lastId: 3
  },
  mutations: {
    getNow(state) {
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date +' '+ time;
      state.timestamp = dateTime;
    },
    changeStatus(state, id){
      state.todos = [...state.todos].map(element => {
        return element.id == id ? {...element, status: !element.status} : element
      })
    }
  },
  actions: {
    create({state}, ruleForm) {
      if (
        typeof ruleForm === 'object' &&
        !Array.isArray(ruleForm) &&
        ruleForm !== null
        ) {
        state.lastId += 1
        state.todos.push({id: state.lastId, name: ruleForm.name, from: ruleForm.from, to: ruleForm.to, status: false})
      }
    },
  }
})

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
