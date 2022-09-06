import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginInput: {
      username: '123',
      password: '456',
      token: ''
    },

    newApartment: {

      name: '',
      numOfRooms: '',
      numOfBeds: '',

    },

    apartments: [],

    guests: [],
    
    reservations: []
  },

  getters: {
    getLogin: (state) => {
      var loginData = state.loginInput;
      return loginData;
    },

    getApartments: (state) => {
      return state.apartments;
    },

    getGuests: (state) => {
      return state.guests;
    },

    getReservations: (state) => {
      return state.reservations;
    }

  },

  mutations: {
    setLogin: (state, payload) => {
      state.loginInput.username = payload.username;
      state.loginInput.password = payload.password;
    },

    setNewApartment: (state, payload) => {

      state.newApartment.name = payload.name;
      state.newApartment.numOfRooms = payload.numOfRooms;
      state.newApartment.numOfBeds = payload.numOfBeds;

    },

    setApartments: (state, payload) => {
      state.apartments = payload.apartments;
    },

    setGuests: (state, payload) => {
      state.guests = payload.guests;
    },

    setReservations: (state, payload) => {
      state.reservations = payload.reservations;
    },



    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    }


  },

  actions: {


    register({ commit }, obj) {
      fetch('http://127.0.0.1:8000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tokenSet => commit('setToken', tokenSet.token) );
    },


    setLogin({ commit }, obj) {
      fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        heeaders: {'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tokenCheck => {
          if (tokenCheck.msg) {
            alert(tokenCheck.msg);
          } else {
            commit('setToken', tokenCheck.token)
          }
        });
    },

    listApartments({ commit }) {

      fetch('https://127.0.0.1:8000/admin/apartments')
        .then( obj => obj.json() )
        .then( res => {
            commit('setApartments', res);
        });

    },


    addApartment({ commit, dispatch}, obj){
      fetch('http://127.0.0.1:8000/admin/apartments', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tokenCheck => {
          if (tokenCheck.msg) {
            alert(tokenCheck.msg);
          } else {
            dispatch('listApartments');
          }
        });
    },



    listGuests({ commit }) {

      fetch('https://127.0.0.1:8000/admin/guests')
        .then( obj => obj.json() )
        .then( res => {
            commit('setGuests', res);
        });

    },

    addGuest({ commit, dispatch}, obj){
      fetch('http://127.0.0.1:8000/admin/guests', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tokenCheck => {
          if (tokenCheck.msg) {
            alert(tokenCheck.msg);
          } else {
            dispatch('listGuests');
          }
        });
    },

    deleteGuest({ commit, dispatch }, obj) {
      fetch('http://127.0.0.1:8000/admin/guests', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
      .then( tokenCheck => {
        if (tokenCheck.msg) {
          alert(tokenCheck.msg);
        } else {
          dispatch('listGuests');
        }
      })
    },



    listReservations({ commit }) {

      fetch('https://127.0.0.1:8000/admin/reservations')
        .then( obj => obj.json() )
        .then( res => {
            commit('setReservations', res);
        });

    },

    addReservation({ commit, dispatch}, obj){
      fetch('http://127.0.0.1:8000/admin/reservations', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tokenCheck => {
          if (tokenCheck.msg) {
            alert(tokenCheck.msg);
          } else {
            dispatch('listReservations');
          }
        });
    },


    socket_addReservation({ commit }, rsv) {
      const reservation = JSON.parse(rsv);
      dispatch('listReservations')
    }

  },



  modules: {
  }
})
