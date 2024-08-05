<template>
    <v-container>
        <v-row justify="center">
            <!-- sm : 화면 크키가 small 이상(스마트폰, 태블릿) 일 때 -->
            <!-- md : 화면 크키가 medium 이상(데스크탑) 일 때 -->
            <v-col cols="12" sm="8" md="10">
                <v-card>
                    <v-card-title class="text-h5 text-center">회원가입</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="memberCreate">
                            <v-text-field
                                label="name"
                                v-model="name"
                                prepend-icon="mdi-account"
                                required
                            >

                            </v-text-field>
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
                            >

                            </v-text-field>
                            <v-text-field
                                label="city"
                                v-model="city"
                                prepend-icon="mdi-city"
                            >

                            </v-text-field>
                            <v-text-field
                                label="street"
                                v-model="street"
                                prepend-icon="mdi-home"
                            >

                            </v-text-field>
                            <v-text-field
                                label="zipcode"
                                v-model="zipcode"
                                prepend-icon="mdi-mailbox"
                            >

                            </v-text-field>
                            <v-row>
                                <v-col>
                                    <!-- block은 부모먼테이너의 너비만큼 꽉 채우는 것 -->
                                    <v-btn type="submit" color="primary" block>등록</v-btn>
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

export default {
    data() {
        return{
            name:"",
            email:"",
            password:"",
            city:"",
            street:"",
            zipcode:""

        }
    },
    methods:{
        async memberCreate(){
            try{
                const registerData = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    address:{
                        city: this.city,
                        street: this.street,
                        zipcode: this.zipcode
                    }
                }
                const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/member/create`,registerData);
                console.log(response)
                console.log(process.env.VUE_APP_API_BASE_URL)
                // this.$router.push("/");
            }catch(e){
                console.log(e.response.data.error_message);
                alert(e.response.data.error_message)
                
            }
        }
    }
}
</script>