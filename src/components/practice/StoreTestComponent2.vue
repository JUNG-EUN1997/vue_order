<template>
    <v-container>
        <h1>StoreTestComponent2</h1>
        <p>count : {{getCount}}</p>
        <v-btn @click="incrementCount" color="primary">count up</v-btn>
        <v-text-field
            label="메시지"
            v-model="message"
        >
        </v-text-field>
        <v-btn color="red" @click="updateMessage">
            메시지변경
        </v-btn>
    </v-container>
    
</template>

<script>
import { mapGetters } from 'vuex';

// import {mapGetters} from 'vuex';
export default {
    data() {
        return{
            count : 0,
            message :""
        }
    },
    computed:{
        ...mapGetters(['getCount','getMessage'])
    },
    methods:{
        incrementCount(){
            // this.count++

            // store폴더
            this.$store.dispatch('incrementCount')
        },
        updateMessage(){
            this.$store.dispatch('updateMessageActions',this.message)
        }
    }
}
</script>