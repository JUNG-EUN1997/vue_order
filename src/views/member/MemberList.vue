<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        회원목록
                    </v-card-title>
                    <v-card-text>
                        <v-data-table
                            :headers="tableHeaders"
                            :items="memberList"
                        >
                        </v-data-table>
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
            tableHeaders:[
                {
                    title:'ID', 
                    key: 'id', 
                    align:'start'
                },
                {
                    title:'이름', 
                    key: 'name', 
                    align:'start'
                },
                {
                    title:'이메일', 
                    key: 'email', 
                    align:'start'
                },
                {
                    title: '주문수량',
                    key: 'orderCount',
                    align:'center'
                }
            ],
            memberList:[]
        }
    },
    async created(){
        const token = localStorage.getItem('token');
        const headers = {"Authorization" : `Bearer ${token}`};
        // {"headers":{"Authorization":"Bearer 토큰값"}}
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/list`,{headers})
        console.log(response)
        this.memberList = response.data.result.content;
    },
    methods:{

    }
}
</script>