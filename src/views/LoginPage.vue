<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="8" md="10">
                <v-card>
                    <v-card-title class="text-h5 text-center">로그인</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="doLogin">
                            <v-text-field
                                label="email"
                                v-model="email"
                                prepend-icon="mdi-email"
                                required
                            >
                            </v-text-field>
                            <v-text-field
                                label="password"
                                v-model="password"
                                prepend-icon="mdi-lock"
                                type="password"
                            >
                            </v-text-field>
                            <v-row>
                                <v-col>
                                    <v-btn type="submit" color="primary" block>등록</v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-btn type="submit" block>아이디 찾기</v-btn>
                                </v-col>
                                <v-col>
                                    <v-btn type="submit" block>비밀번호 변경</v-btn>
                                </v-col>                                
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

export default {
    data() {
        return{
            email:"",
            password:"",
            token:""
        }
    },
    methods:{
        async doLogin(){
            try{
                const registerData = {
                    email: this.email,
                    password: this.password
                }
                const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/doLogin`,registerData);
                console.log(response);
                console.log()
                const token = response.data.result.token;
                const refresh = response.data.result.refresh;
                console.log(jwtDecode(token))
                const role = jwtDecode(token).role;
                localStorage.setItem("token",token);
                localStorage.setItem("refresh",refresh);
                localStorage.setItem("role",role);
                // this.$router.push("/");
                window.location.href="/"
            }catch(e){
                console.log(e.response.data.error_message);
                alert(e.response.data.error_message)
                
            }
        }
    }
}
</script>