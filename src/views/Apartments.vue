<template>
    <div id="apartments">
        <h1>Apartments</h1>




        <div>
            <b-form @submit="onSubmit" v-if="show">
            <b-form-group
                id="input-group-1"
                label="Apartment name:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="form.name"
                type="text"
                placeholder="Enter name"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Number Of Rooms:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.numOfRooms"
                placeholder="Enter Number Of Rooms"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Number Of Beds:" label-for="input-3">
                <b-form-input
                id="input-3"
                v-model="form.numOfBeds"
                placeholder="Enter Number Of Beds"
                required
                ></b-form-input>
            </b-form-group>

           

            <b-button type="submit" variant="primary">Submit</b-button>
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
        name: 'Apartments',

        data() {
            return{
                form: {
                    name: '',
                    numOfRooms: '',
                    numOfBeds: ''
                },

                apartments : this.listApartments,

                fields: [
                    { key: 'name', label: 'Name' }, { key: 'numberOfRooms', label: 'Number Of Rooms' }, { key: 'numberOfBeds', value: 'Number Of Beds' }
                ],

                show: true,

                items: [
                    { name: 'Apartman 1', numberOfRooms: '1', numberOfBeds: '2' },
                    { name: 'Apartman 2', numberOfRooms: '2', numberOfBeds: '4' },
                    { name: 'Apartman 3', numberOfRooms: '2', numberOfBeds: '4' },
                    { name: 'Apartman 4', numberOfRooms: '3', numberOfBeds: '5' }
                ]

            }
        },

        computed: {
            ...mapActions([
                'listApartments'
            ]),
        },

        methods: {

            ...mapActions([
                'addApartment'
            ]),

            onSubmit(e) {
                e.preventDefault();
                this.addApartment({ body: this.form, token: this.token });
                alert(JSON.stringify(this.form));
            }
        },


    }

</script>
