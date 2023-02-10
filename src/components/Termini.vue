<template>
    <div class="news">
      <h1 class="mt-4">Termini</h1>
  
      <div class="row">
        <div class="col-4">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">Dan</th>
              <th scope="col">Vreme</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="termin in termini" :key="termin.dan" >
              <th scope="row">
                  <input type="checkbox" @click="selected = termin" > {{termin.dan}}
              </th>
              <td>{{ termin.vreme }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-6">
          <termin v-if="selected" :termin="selected"></termin>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  import Termin from './Termin.vue';
  
    export default {
  
      components:{
        'termin': Termin
      },
      data() {
        return {
          termini:[],
          selected:null
        }
      }, 
      mounted(){
          fetch('http://localhost:8000/admin/termin', {
              method:'GET',
              headers:{
              "Content-Type":"application/json"
              }
          })
              .then(res => res.json())
              .then(data => {
                  if(data.msg){
                      alert(data.msg);
                  } else{
                      this.termini = data
                  }
                  }
              )
      }}
    
  </script>
  
  
  
  
  
  