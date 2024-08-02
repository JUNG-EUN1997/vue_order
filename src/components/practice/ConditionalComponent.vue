<template>
    <h1>This is ConditionalComponent</h1>
    <button @click="isLogined=true">login</button>
    <div v-if="isLogined">환영합니다 고객님</div>
    <div v-else>로그인 해주세요.</div>

    <h1>상품목록조회</h1>
    <ul>
        <!--반복될 대상에 v-for 기입-->
        <li v-for="product in products" :key="product.id">{{ product.name }}</li>
    </ul>
</template>

<script>
    export default {
        data(){
            return{
                isLogined:false,
                products:[ //추후에는 axios 를 통해 받아올 값!
                    {id:1,name:"apple"},
                    {id:2,name:"banana"},
                    {id:3,name:"kiwi"},
                ]
            }
        },
        methods: {

        }
    };
</script>