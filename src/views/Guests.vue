<template>
    <div id="guests">
        <h1>Guests</h1>




        <div>
            <b-form @submit="onSubmit" v-if="show">
            <b-form-group
                id="input-group-1"
                label="Guest Name:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="form.name"
                type="text"
                placeholder="Enter Guest Name"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.lastName"
                placeholder="Enter Last Name"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="JMBG:" label-for="input-3">
                <b-form-input
                id="input-3"
                v-model="form.jmbg"
                placeholder="Enter JMBG"
                required
                ></b-form-input>
            </b-form-group>

           

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="button" variant="danger" @click="deleteG">Delete</b-button>
            </b-form>

        </div>


        <hr>
        <hr>


        <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
</template>

<script>

    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';

    export default {
        name: 'Guests',

        data() {
            return{
                form: {
                    name: '',
                    lastName: '',
                    jmbg: ''
                },

                apartments : this.listApartments,

                fields: [
                    { key: 'name', label: 'Name' }, { key: 'lastName', label: 'Last Name' }, { key: 'jmbg', value: 'JMBG' }
                ],

                show: true,

                items: [
                    { name: 'Marko', lastName: 'Markovic', jmbg: '123456789' },
                    { name: 'Petar', lastName: 'Petrovic', jmbg: '789456123' },
                    { name: 'Pavle', lastName: 'Pavlovic', jmbg: '987456321' },
                    { name: 'Nemanja', lastName: 'Nemanjic', jmbg: '456987123' }
                ]

            }
        },

        computed: {
            ...mapActions([
                'listGuests'
            ]),
        },

        methods: {

            ...mapActions([
                'addGuest',
                'deleteGuest'
            ]),

            onSubmit(e) {
                e.preventDefault();
                this.addGuest({ body: this.form, token: this.token });
                alert(JSON.stringify(this.form));
            },

            deleteG() {
                this.deleteGuest({ body: this.form.jmbg, token: this.token });
                alert(JSON.stringify(this.form.jmbg));
            }
        },


    }

</script>
