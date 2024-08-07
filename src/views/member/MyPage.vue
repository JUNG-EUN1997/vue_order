<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card>
                    <v-card-title class="text-center text-h5">
                        회원정보
                    </v-card-title>
                    <v-card-text>
                        
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <OrderListComponent />
</template>

<script>
import OrderListComponent from '@/components/OrderListComponent.vue';

export default {
    components:{
        OrderListComponent
    },
    data(){
        return{
            
        }
    }
}
</script>