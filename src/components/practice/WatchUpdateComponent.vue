<template>
    <h2>Watch 예제</h2>
    <div>count : {{count}}</div>
    <button @click="incrementCount" color="primary">increment count</button>
    <h2>업데이트 예제</h2>
    <div>message : {{ message }}</div>
    <button @click="updateMessage" color="primary">update message</button>
</template>

<script>
    export default{
        data(){
            return{
                count:0,
                message: "heee heee~"
            }
        },
        // 특정 변수값의 변경사항을 인지하는 hook함수
        watch:{
            // 인지하고자 하는 변수값과 일치하는 함수명
            count(){
                alert("카운트 변경");
            }
        },
        // dom 객체(화면)의 변경사항을 인지하는 hook 함수
        updated(){
            alert("dom 요소 변경")
        },
        methods: {
            incrementCount(){
                this.count++;
            },
            updateMessage(){
                this.message = "updated message!";
            }
        }
    }

</script>