<template>
    <v-app-bar app dark>
        <v-container>
            <v-row align="center">
                <v-col class="d-flex justify-start">
                    <div v-if="userRole == 'ADMIN'">
                        <v-btn :to="{path:'/member/list'}">회원관리</v-btn>
                        <v-btn :to="{path:'/product/manage'}">상품관리</v-btn>
                        <v-btn :to="{path:'/order/list'}">실시간주문</v-btn>
                    </div>
                </v-col>
                <v-col class="text-center">
                    <v-btn :to="{path:'/'}">JAVA SHOP</v-btn>
                </v-col>
                <v-col class="d-flex justify-end">
                    <v-btn v-if="isLogin" :to="{path:'/order/cart'}">장바구니 {{ getTotalQuantity }}</v-btn>
                    <v-btn :to="{path:'/product/list'}">상품목록</v-btn>
                    <v-btn v-if="isLogin" :to="{path:'/mypage'}">Mypage</v-btn>
                    <v-btn v-if="!isLogin" :to="{path:'/member/create'}">회원가입</v-btn>
                    <v-btn v-if="!isLogin" :to="{path:'/login'}">로그인</v-btn>
                    <v-btn v-if="isLogin" @click="doLogout">로그아웃</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        data(){
            return{
                userRole: null,
                isLogin: false,
            }
        },
        computed:{
            ...mapGetters(['getTotalQuantity'])
        },
        created(){
            const token = localStorage.getItem('token');
            if(token){
                this.isLogin = true;
            }
            const role = localStorage.getItem('role')
            if(role){
                this.userRole = role;
            }
        },
        methods:{
            doLogout(){
                localStorage.removeItem('token');
                localStorage.removeItem('refresh');
                localStorage.removeItem('role');
                window.location.href="/"
            }
        }
    };
</script>