<template>
    <v-container>
        <h1>StoreTestComponent3</h1>
        <p>count : {{getCount}}</p>
        <v-btn @click="incrementCount" color="primary">count up</v-btn>
        <h4>변경된 메시지 : {{getMessage}}</h4>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return{
            count : 0
        }
    },
    computed:{
        ...mapGetters(['getCount','getMessage'])
    },
    methods:{
        incrementCount(){
            this.$store.dispatch('incrementCount')
        }
    }
}
</script>