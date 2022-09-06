<template>
  <div id="login">
    <h1>Log In</h1>

    <b-form @submit="onSubmit">
      <b-form-group label="User Name:" label-for="input.username">
        <b-form-input id="name" v-model="input.username" placeholder="Enter name" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="input.password">
        <b-form-input id="password" v-model="input.password" type="password" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>


<script>

    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';

    export default {
        name: 'Login',

        data() {
            return {
                input: {
                    username: '',
                    password: ''
                }
            }
        },

        computed: {
            
            ...mapGetters([
                'getLogin'
            ])

        },




        methods: {

            
            ...mapActions([
                'setLogin'
            ]),

            onSubmit(e) {
                e.preventDefault();

                this.setLogin(this.input);
                this.$router.push({ name: 'Home'})
            }

            // login() {
            //     if(this.input.username != "" && this.input.password != "") {
            //         setlogin(this.input);
            //     } else {
            //         console.log("A username and password must be present");
            //     }
            // }
        }
    }
</script>





<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>