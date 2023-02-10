import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items:[],
    token: 'izlogovan',
    recenzije:{}
  },
  getters: {
    getRecenzije: state=> state.recenzije
  },
  mutations: {
    setToken(state, token){
      state.token = token;
      localStorage.token = token; 
      document.cookie = `token=${token};SameSiite=Lax`
    },
    setRecenzije(state, recenzije){
      state.recenzije = recenzije
    }
  },
  actions: {

    login({commit}, obj){
      fetch('http://localhost:9000/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(obj)
      })
        .then(res => res.json())
        .then(data => {
            if(data.msg){
              alert(data.msg)
            }else{
              commit('setToken', data.token)
            }
        })
    },
    zakazi({commit}, obj){

      fetch('http://localhost:8000/admin/termin',{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(obj)
  })
    },
    otkazi({commit},obj){
      fetch('http://localhost:8000/admin/termin', {
        method:'DELETE',
        headers:{
            'Content-Type' : 'application/json',
            
        },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(data =>{ if(data.msg){
          alert(data.msg)
        }})

    },
    registruj({commit},obj){
      fetch('http://localhost:9000/register', {
        method:'POST',
        headers:{
            'Content-Type' : 'application/json',
            
        },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(data =>{ if(data.msg){
          alert(data.msg)
        }})
    },
    addRecenzija({commit}, obj){
      fetch('http://localhost:8000/admin/recenzije',{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(obj)
      })
      .then(res=> res.json())
      .then(data=>{
        commit('setRecenzije', data)
      })
    },

    fetchRecenzija({commit}){
      fetch('http://localhost:8000/admin/recenzije',{
        method:"GET",
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res=> res.json())
      .then(data=>{
        commit('setRecenzije', data)
      })
    }
  },
  modules: {
  }
})
