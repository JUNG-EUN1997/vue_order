<template>
    <h1>생명주기 함수</h1>
    <p>{{ data1 }}</p>
    <p>{{ data2 }}</p>
    <p>{{ data3 }}</p>
</template>

<script>
    export default{
        data(){
            return{
                data1: "변경될 데이터 1",
                data2: "변경될 데이터 2",
                data3: "변경될 데이터 3",
                data4: "변경될 데이터 4",
                data5: "변경될 데이터 5",
            }
        },
        // 화면이 열리기 전 (vue인스턴스가 생성되기 이전)에 실행되는 함수
        created(){
            this.data2 = "데이터 2 바뀜!!"
        },
        beforeMount(){
            window.addEventListener('resize',this.resize);
        },
        // vue 컴포넌트들이 DOM에 마운트 된 이후에 실행되는 함수 : 화면이 그려진 이후에 실행
        mounted(){
            console.log("mounted : 화면이 그려진 이후에 출력")
            this.data3 = "데이터 3 바뀜!!"
        },
        // 컴포넌트가 화면에서 제거될 때 아래 함수 실행, beforeDestroy로 사용하기도 함
        // 웹소켓, sse연결 등 서버와의 연결을 끊어주고 나가야하는 시점
        beforeUnmount(){
            window.removeEventListener('resize',this.resize);
        },
        methods: {
            resize(){
                alert("화면의 배율이 변경되고 있습니다.")
            }
        }
    }

</script>