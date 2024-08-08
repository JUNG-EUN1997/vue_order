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

// 서버 실시간 알림서비스 (sse) 위해 의존성 추가필요
import { EventSourcePolyfill} from 'event-source-polyfill';

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

            if(this.userRole === 'ADMIN'){ // 어드민계정만 sse 연결
                const headers = {
                    headers: {
                        Authorization : `Bearer ${token}`
                    }
                }
                let sse = new EventSourcePolyfill(`${process.env.VUE_APP_API_BASE_URL}/subscribe`, headers);
                console.log(process.env.VUE_APP_API_BASE_URL
                    
                )
                // 서버에서 정해 준, connect 키 추가
                sse.addEventListener('connect',(event) => {
                    console.log(event); // 서버에서 connect 키의 값에 선언한 값이 출력된다.
                })

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