<template>
    <div id="reservations">
        <h1>Reservations</h1>




        <div>
            <b-form @submit="onSubmit" v-if="show">
            <b-form-group
                id="input-group-1"
                label="Guest JMBG:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="form.guestJMBG"
                type="text"
                placeholder="Enter Guest JMBG"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Apartman:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.apartmentName"
                placeholder="Enter Apartment Name"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Date Of Arrival:" label-for="input-3">
                <b-form-input
                id="input-3"
                v-model="form.dateOfArrival"
                placeholder="Enter Date Of Arrival"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Date Of Departure:" label-for="input-4">
                <b-form-input
                id="input-4"
                v-model="form.dateOfDeparture"
                placeholder="Enter Date Of Departure"
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

    import {mapState} from 'vuex';
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';

    export default {
        name: 'Reservations',

        data() {
            return{
                form: {
                    guestJMBG: '',
                    apartmentName: '',
                    dateOfArrival: '',
                    dateOfDeparture: ''
                },

                reservations : this.listReservations,

                fields: [
                    { key: 'guestJMBG', label: 'Guest JMBG' },
                    { key: 'apartmentName', label: 'Apartment Name' },
                    { key: 'dateOfArrival', value: 'Date Of Arrival' },
                    { key: 'dateOfDeparture', value: 'Date Of Departure' }
                ],

                show: true,

                items: [
                    { guestJMBG: '123456789', apartmentName: 'Apartman 1', dateOfArrival: '1.1.2022', dateOfDeparture: '2.1.2022' },
                    { guestJMBG: '789456123', apartmentName: 'Apartman 2', dateOfArrival: '2.1.2022', dateOfDeparture: '3.1.2022' },
                    { guestJMBG: '987456321', apartmentName: 'Apartman 3', dateOfArrival: '3.1.2022', dateOfDeparture: '4.1.2022' },
                    { guestJMBG: '456987123', apartmentName: 'Apartman 4', dateOfArrival: '4.1.2022', dateOfDeparture: '5.1.2022' }
                ]

            }
        },

        computed: {
            ...mapActions([
                'listReservations'
            ]),
        },

        computed: {
            ...mapState([
                'token'
            ])
        },

        methods: {

            ...mapActions([
                'addReservation'
            ]),

            onSubmit(e) {
                e.preventDefault();
                alert(JSON.stringify(this.form));
                this.$socket.emit({ body: this.form, token: this.token });
            }
        },


    }

</script>
