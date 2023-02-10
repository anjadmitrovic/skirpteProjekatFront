<template>

    <div class="row">
      <div class="col-4">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Komentar</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="recenzija in recenzijeGet" :key="recenzija.komentar" >
            <th scope="row">
                <input type="checkbox" @click="selected = recenzija" > {{ recenzija.komentar }}
            </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-6">
        <recenzija v-if="selected" :recenzija="selected"></recenzija>
      </div>


    <form v-if="logged"  @submit.prevent="onSubmit">
      <input v-model="userId" class = "form-control" type="text" id="userId" placeholder="Unesite userId">
      <p></p>
      <input v-model="recenzije" class = "form-control" type="text" id="recenzije" placeholder="Napisi recenziju">
      <p></p>
      <button type="submit" id="add" class="btn btn-primary">Dodaj</button>
    </form>

    </div>
   
</template>

<script>
import Recenzija from './Recenzija.vue';
import { mapActions, mapGetters} from 'vuex';

import io from 'socket.io-client'
import store from '../store/index'

let socket = io('http://localhost:8000', {

})

socket.connect()

socket.on('recenzije', allRecenzijas => {
    store.commit('setRecenzije', allRecenzijas)
})

export default{
   
    components: {
        'recenzija': Recenzija
    },
    data(){
        return{
            ocene:[],
            selected: null,
            userId: '',
            recenzije:''
        }
    },
    computed:{
        ...mapGetters([
          'getRecenzije'
        ]),

        recenzijeGet(){
          return Object.values(this.getRecenzije)
        },

        logged(){
          return this.$store.state.token !== 'izlogovan'
        }
    },
    mounted(){
       this.fetchRecenzija()
    },
    methods:{
      ...mapActions([
        'addRecenzija'
      ]),
      ...mapActions([
        'fetchRecenzija'
      ]),
        dodaj(recenzija){
            this.selected = recenzija
        },
        onSubmit(){
            // this.addRecenzija({userId:this.userId, komentar: this.recenzije })
            socket.emit('addRecenzija', {userId:this.userId, komentar: this.recenzije})
        }
    }
}
</script>