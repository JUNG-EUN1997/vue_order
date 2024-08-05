<template>
    <!-- HTML요소의 동적 값 표시 하는 법 -->
    <!-- 
        html의 요소 안에 중괄호 2번을 사용함으로 script에 정의된 변수값을 화면에 표시
    -->

    <h1>hello world {{ language }}</h1>

    <!-- :value문법 사용 시, 단방향 데이터 바인딩 -->
    <input type="text" :value="value1">

    <!-- v-model문법 사용 시, 양방향 데이터 바인딩 -->
    <input type="text" v-model="value2">
    <button @click="showValue">변수변경사항확인</button>
    <br><br>
    <span>{{ count }}</span>
    <button @click="increment">숫자 올리기</button>
    <br>

    <span>{{ doubleCount }}</span>
    <br>

    <input type="number" v-model="count2">
    <button @click="countModify">카운트 숫자 수정하기</button>
</template>

<script>
    export default {
        data(){
            return{
                language : "java",
                value1: "python",
                value2: "c++",
                count:0,
                count2: this.count,
            }
        },
        // 종속된 반응형 데이터가 변경될 때에 함수를 다시 실행하여 값을 계산하는 함수
        computed: {
            doubleCount(){
                return this.count *2;
            }
        },
        created(){
            alert("created 함수 호출")
        },
        methods:{
            showValue(){
                alert(this.value1 + " "+ this.value2);
            },
            increment(){
                this.count = this.count +1;
            },
            countModify(){
                this.count = this.count2;
            }
        }
    };
</script>