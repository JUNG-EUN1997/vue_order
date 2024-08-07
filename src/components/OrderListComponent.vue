<template>
    <v-container>
        <v-row justify="center">
            <v-col>
                <v-card-title class="text-center text-h5">
                    주문목록
                </v-card-title>
                <v-card-text>
                    <v-data-table
                        :headers="tableHeaders"
                        :items="orderList"
                        class="elevation-1"
                        show-expand
                    >
                        <template v-slot:[`item.actions`]="{item}"> 
                            <!-- 위의 item은, v-data-table의 items다-->
                            <v-btn size="small" color="red" 
                                v-if="isAdmin && item.orderStatus === 'ORDERED'" @click.stop="cancelOrder(item.id)" >
                                CANCEL
                            </v-btn>
                        </template>
                        <template v-slot:expanded-row="{item}"> 
                            <v-row>
                                <v-col>
                                    <v-list-item v-for="orderItem in item.orderDetailDtos" :key="orderItem.id">
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                {{ orderItem.productName }} {{ orderItem.count }} 개
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-col>
                            </v-row>
                        </template>
                    </v-data-table>
                </v-card-text>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';


    export default {
        props:['isAdmin'],
        data(){
            return {
                orderList:[],
                tableHeaders:[
                    {
                        title:'ID', 
                        key: 'id', 
                        align:'start'
                    },
                    {
                        title:'이메일', 
                        key: 'memberEmail', 
                        align:'start'
                    },
                    {
                        title:'주문상태', 
                        key: 'orderStatus', 
                        align:'start'
                    },
                    {
                        title:'ACTION', 
                        key: 'actions', 
                        align:'start'
                    }
                ],
            }
        },
        async created() {
            let addtionalData = [];
            let response;
            if(this.isAdmin){
                response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/order/list`);
                addtionalData = response.data.result.content;
            }else{
                response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/order/list`);
                addtionalData = response.data.result.content;
            }

            
            console.log(response)

            if(this.currentPage >= response.data.result.totalPages){
                console.log("값 추가 X")
                this.currentPage = response.data.result.totalPages -1; // 페이지를 가장 마지막  페이지로 초기화
                return false;
            }else{
                console.log("값 추가 O")
                this.orderList = [...this.orderList, ...addtionalData]
                this.currentPage++
            }

                // this.isLoading = false;
        },
        methods:{
            async cancelOrder(id){
                try{
                    await axios.patch(`${process.env.VUE_APP_API_BASE_URL}/order/${id}/cancel`);
                    window.location.reload();
                }catch(e){
                    console.log(e);
                }
                
            }
        }
    };
</script>