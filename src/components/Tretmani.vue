<template>
  <div class="news">
    <h1 class="mt-4">Tretmani</h1>

    <div class="row">
      <div class="col-4">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Sifra</th>
            <th scope="col">Vrsta</th>
            <th scope="col">Cena</th>
          
          </tr>
          </thead>
          <tbody>
            <tr v-for="tretman in tretmani" :key="tretman.vrsta" >
              <td> {{ tretman.id }}</td>
            <th scope="row">
                <input type="checkbox" @click="selected = tretman" > {{tretman.vrsta}}
            </th>
            <td>{{ tretman.cena }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-6">
        <tretman v-if="selected" :tretman="selected"></tretman>
      </div>
    </div>
  </div>
</template>

<script>

import Tretman from './Tretman.vue';

  export default {

    components:{
      'tretman': Tretman
    },
    data() {
      return {
        tretmani:[],
        selected:null
      }
    }, 
    mounted(){
        fetch('http://localhost:8000/admin/tretmani', {
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
                    this.tretmani = data
                }
                }
            )
    }}
  
</script>





