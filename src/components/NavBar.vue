<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Lepa svaki dan</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item">
              <router-link :to="{name: 'Tretmani'}" tag="a" class="nav-link" :class="{active: this.$router.currentRoute.name === 'Tretmani'}">Tretmani</router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{name: 'Akcije'}" tag="a" class="nav-link" :class="{active: this.$router.currentRoute.name === 'Akcije'}">Akcije</router-link>
            </li>


            <li v-if="canLogout" class="nav-item">
              <router-link :to="{name: 'Termini'}" tag="a" class="nav-link" :class="{active: this.$router.currentRoute.name === 'Termini'}">Termini</router-link>
            </li>


            <li class="nav-item">
              <router-link :to="{name: 'Recenzije'}" tag="a" class="nav-link" :class="{active: this.$router.currentRoute.name === 'Recenzije'}">Recenzije</router-link>
            </li>

            <li  v-if="canLogout" class="nav-item">
              <router-link :to="{name: 'User'}" tag="a" class="nav-link" :class="{active: this.$router.currentRoute.name === 'User'}">O korisniku</router-link>
            </li>
           
        

          </ul>

          <form v-if="canLogin" class="d-flex" @submit.prevent="login">
             <button class="btn btn-outline-secondary" type="submit">Login</button>
          </form>

          <form v-if="canLogout" class="d-flex" @submit.prevent="logout">
            <button class="btn btn-outline-secondary" type="submit">Logout</button>
          </form>

          <form v-if="canLoginIf" class="d-flex" @submit.prevent="register">
            <button class="btn btn-outline-secondary" type="submit">Register</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
 
<script>
export default {
  name: "Navbar",
  computed: {
    canLogout() {
      return  this.$store.state.token !== 'izlogovan';
    },
    canLoginIf(){
        return this.$store.state.token === 'izlogovan' && this.$router.currentRoute !== 'login';
    },
    canLogin() {
      return this.$store.state.token === 'izlogovan';
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$store.state.token = 'izlogovan'
      this.$router.push({name: 'LogIn'});
    },
    login(){
      this.$router.push({name:"LogIn"})
    },
    register(){
      this.$router.push({name:"Register"})
    }
  }
}
</script>

<style scoped>

</style>

