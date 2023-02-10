<template>
   <div>
    <h2>
        {{ tretman.ime }}
    </h2>
   
    <h5>Vrsta </h5>
        <p>
          {{ tretman.vrsta }}
        </p>

        <h5>Cena</h5>

        <p>
          {{ tretman.cena }}
        </p>

        

      <form v-if="logged" @submit.prevent="onSubmit" >
        <h5> Podaci zakazivanja</h5>
        <p> </p>
        <input v-model="dan" type="text" name="dan" class="form-control" id="dan" placeholder="dan"> 
        <p> </p>
        <input v-model="vreme" type="text" name="password" class="form-control" id="passwordInput" placeholder="vreme"> 
        <p> </p>
        <button type="submit" class="login-button" id="login" name="login-button"> Zakazi</button>
      </form>

   </div> 

</template>

<script>
import { mapActions } from 'vuex'
export default{
    name:'tretman',
    props:['tretman'],
    computed: {
      logged(){
        return this.$store.state.token !== 'izlogovan'
      }
    },
    data(){
        return{
          vreme:'',
          dan:''
        }
    },
    methods:{
      ...mapActions([
        'zakazi'
      ]),
      onSubmit(){
        this.zakazi(
          {
            tretmanId: "" + this.tretman.id,
            userId: "1",
            termin: this.dan,
            terminvreme: this.vreme
      })
      }
    }
}
</script>
