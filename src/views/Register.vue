<template>
    <div>
  <h5> Unesite podatke</h5>
        <p> </p>
        <form @submit.prevent="onSubmit">
        <input v-model="username" type="text" name="dan" class="form-control" id="dan" placeholder="Username:"> 
        <p> </p>
        <input v-model="password" type="text" name="dan" class="form-control" id="dan" placeholder="Password:"> 
        <p> </p>
        <input v-model="ime" type="text" name="dan" class="form-control" id="dan" placeholder="Ime:"> 
        <p> </p>
        <input v-model="prezime" type="text" name="dan" class="form-control" id="dan" placeholder="Prezime:"> 
        <p></p>
        <button type="submit" class="login-button" id="login" name="login-button"> Registruj se</button>
    </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
        data(){
            return{
            username:'',
            password: '',
            ime:'',
            prezime:''
            }
        },
        methods:{
        ...mapActions([
            'registruj'
        ]),

        onSubmit(){
            this.registruj({username: this.username, password: this.password, ime: this.ime, prezime: this.prezime})
        }
            
        }
}
</script>

<style>

</style>