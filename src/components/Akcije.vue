<template>
    <div class="news">
      <h1 class="mt-4">Popusti</h1>
  
      <div class="row">
        <div class="col-4">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">Popust</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="akcija in akcije" :key="akcija.popust" >
              <th scope="row">
                  <input type="checkbox" @click="selected = akcija" > {{ akcija.popust }}
              </th>
              <!-- <td>{{ termin.vreme }}</td> -->
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-6">
          <akcija v-if="selected" :akcija="selected"></akcija>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import Akcija from './Akcija.vue';
  
    export default {
      components: {
        'akcija': Akcija
      },
      data() {
        return {
          akcije:[],
          selected: null
        }
      },
      mounted() {
        fetch('http://localhost:8000/admin/akcije', {
      method:'GET',
      headers:{
        "Content-Type":"application/json"
      }
    })
        .then(res => res.json())
        .then(data => {
          if(data.msg) {
            alert(data.msg);
          }else{
            this.akcije = data
          }
        })
      }
    }
  </script>