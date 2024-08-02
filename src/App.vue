<template>
  <!-- router view를 통해 app.view에서 화면 routing 시작 -->
  <router-view/>
</template>
<!-- 1. <template>에는 html 코드가 들어가고, 
        <script>에는 js코드가 들어감 
        디자인은 <style> 태그 안에 들어감 

      2. vue 파일 안에는 head 태그가 없고, head의 공통 import 사항은, main.js에 구성
-->
<script>
// App.vue는 Vue 애플리케이션의 루트 컴포넌트다 (재활용이 가능한 화면)

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
