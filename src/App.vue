<template>
  <div id="app">

    <div>
      <b-navbar toggleable="sm" type="dark" variant="info">
        <b-navbar-brand href="#">HotelVue</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>


            <b-nav-item-dropdown text="Menu" right>
              <b-dropdown-item to="/guests">Guests</b-dropdown-item>
              <b-dropdown-item to="/reservations">Reservations</b-dropdown-item>
              <b-dropdown-item to="/apartments">Apartments</b-dropdown-item>
            </b-nav-item-dropdown>

          </b-navbar-nav>




          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">




            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item to="login">Log In</b-dropdown-item>
              <b-dropdown-item @click="logout()" to="/">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>


<script>
import { mapMutations } from 'vuex';
  export default {
    name: 'App',

    methods: {

      ...mapMutations([
        'setToken',
        'removeToken'
      ]),

      logout(){
        this.removeToken();
      }
    },

    sockets: {
      error(err) {
        alert(err);
      }
    } 

  }
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
