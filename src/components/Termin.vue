<template>
    <div>
     <!-- <h2>
         {{ termini.ime }}
     </h2> -->
    
     <h5>Vrsta </h5>
         <p>
           {{ termin.dan }}
         </p>
 
         <h5>Cena</h5>
 
         <p>
           {{ termin.vreme }}
         </p>
       <form @submit.prevent="onSubmit">
         <button type="submit" class="login-button" id="login" name="login-button"> Otkazi</button>
       </form>
 
    </div> 
 
 </template>
 
 <script>
import { mapActions } from 'vuex'


 export default{
     name:'termin',
     props:['termin'],
     methods:{
      ...mapActions([
        'otkazi'
     ]),
     onSubmit(){
      this.otkazi( {
            id: this.termin.id
        }
      )
     }
     }
     
 }
 </script>
 