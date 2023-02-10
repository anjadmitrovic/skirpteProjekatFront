<template>
    <div class="container">
      
          <form @submit.prevent="onSubmit">
            <div class="mt-5">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input v-model="username" type="text" name="username" class="form-control" id="usernameInput" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
             <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input v-model="password" type="password" name="password" class="form-control" id="passwordInput">
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" id="login" class="btn btn-primary">Submit</button>
          </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'LogIn',
    data(){
      return{
        username: "",
        password: ""
      }
    },
    methods:{
      
      ...mapActions([
        'login'
      ]),

      onSubmit(e){
        e.preventDefault()
        
        this.login({username:this.username, password: this.password})
        this.$router.push({name:"Tretmani"})
      }

    }
} 



</script>
