import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import routes from './routes/index.js'

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.config.productionTip = false

const store = new Vuex.Store ({
  state: {
    todos: [
      { id: 1, name: 'đi học', created_at: '2021-11-26 21:47:00', updated_at: '2021-11-26 21:47:00', status: true},
      { id: 2, name: 'đi chơi', created_at: '2021-11-26 21:47:00', updated_at: '2021-11-26 21:47:00', status: true},
      { id: 3, name: 'đi làm', created_at: '2021-11-26 21:47:00', updated_at: '2021-11-26 21:47:00', status: true},
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
    }
  },
  actions: {
    changeStatus({commit, state},id){
      commit('getNow')
      state.todos.forEach(element => {
        if (element.id == id){
          element.status = !element.status
          element.updated_at = state.timestamp
        }
      })
    },
    create({commit, state}, name) {
      commit('getNow')
      state.lastId += 1
      state.todos.push({id: state.lastId, name: name, created_at: state.timestamp, updated_at: state.timestamp, status: false})
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
