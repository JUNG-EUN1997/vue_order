<template>
    <v-container>
        <v-row justify="center">
            <v-col class="text-center text-h5">
                장바구니
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="auto">
                <v-btn color="secondary" @click="clearCart">장바구니 비우기</v-btn>
            </v-col>
            <v-col cols="auto">
                <v-btn color="primary" @click="orderCreate">주문하기</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-data-table
                :headers="tableHeaders"
                :items="orderList"
                class="elevation-1"
                show-expand
            >
                <thead>
                    <tr>
                        <th>제품ID</th>
                        <th>제품명</th>
                        <th>주문수량</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in getProductsInCart" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.name }} </td>
                        <td>{{ product.quantity }}</td>
                    </tr>
                </tbody>
            </v-data-table>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';


    export default {
        data(){
            return{
                productList: []
            }
        },
        computed:{
            ...mapGetters(['getProductsInCart'])
        },
        methods:{
            clearCart(){
                this.$store.dispatch("clearCart")
            },
            async orderCreate(){
                console.log(this.getProductsInCart)
                const orderProducts = this.getProductsInCart.map( a => {
                    return {productId : a.id, productCount : a.quantity}
                });
                console.log(orderProducts)
                if(orderProducts.length<1){
                    alert("주문대상 물건이 없습니다.")
                    return
                }
                const yesOrNo = confirm(`${orderProducts.length} 개의 상품을 주문 하시겠습니까?`);
                if(!yesOrNo){
                    console.log("주문취소")
                    return;
                }

                try{
                    await axios.post(`${process.env.VUE_APP_API_BASE_URL}/order/create`, orderProducts);
                    alert("주문 완료")
                    this.$store.dispatch("clearCart");
                }catch(e){
                    console.log(e);
                    alert("주문 실패")

                }
            }
        }
    }
</script>