<template>
  <v-app-bar app>
    <h1>This is VuetifyComponent</h1>
  </v-app-bar>

  <!-- v-container, v-row, v-col -->
  <v-container>
    <v-row>
      <v-col cols="4">안녕~</v-col>
      <v-col cols="8">안녕~</v-col>
    </v-row>
    <v-row>
      <!-- v-card -->
      <v-card>
        <!-- card-title(제목), card-text(내용) -->
        <v-card-title> 안내문구 </v-card-title>
        <v-card-text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          voluptates quisquam repudiandae recusandae temporibus deserunt
          repellendus minima accusantium tenetur optio, fuga dolores eum dolorum
          placeat totam, vitae consectetur. Iusto, enim!
        </v-card-text>
      </v-card>
    </v-row>
    <v-row>
      <v-simple-table>
        <thead>
          <tr>
            <th>이름</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>길동이</td>
            <td>mail.com</td>
          </tr>
          <tr>
            <td>길동이2</td>
            <td>mail2.com</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-card>
        <v-card-title>회원가입</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              label="email"
              type="email"
            >

            </v-text-field>
            <v-text-field
              label="name"
              type="text"
            >

            </v-text-field>
            <v-text-field
              label="password"
              type="password"
            >
            </v-text-field>
            <v-btn color="primary">제출하기</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
      </v-col>
    </v-row>
    <v-row color="">
      <v-btn @click.stop="cancel()">취소버튼</v-btn>
      <!-- 모달창을 위한 v-dialog -->
      <v-dialog v-model="dialog" max-width="400px">
        <v-card>
          <v-card-title>정말 취소하시겠습니가!?</v-card-title>
          <v-card-actions>
            <v-btn color="primary">확인</v-btn>
            <v-btn color="secondary" @click="dialog=false">취소</v-btn>
          </v-card-actions>
        </v-card>
        
      </v-dialog>
    </v-row>
    <v-row>
      <v-btn href="/practice/modeling">라우팅1 (리로드 방식)</v-btn>
      <v-btn :to="{path: '/practice/modeling'}">SPA라우팅 (router 기능 활용)</v-btn>
      <v-btn :to="{name: 'ModelingComponent'}">SPA라우팅 (name호출)</v-btn>
      <!-- SPA : Single Page Application -->
      <!-- 
        - 데이터 변경이 없을 때는 SPA 라우팅을 사용해도 괜찮다!
        - 리로드 방식 > 전체리로드 > created mount 가 호출된다.
        - SPA 방식 > created 함수가 대체로 호출되지 않을 수 있다.
      -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  // 변수 설정 : data() 함수를 통해 변수 세팅
  data(){
    return{
      dialog:false // modal true 시 접속 후 바로 노출, false 시 비노출. /  default false
    }
  },
  // 함수 정의 영역
  methods: {
    cancel(){
      this.dialog = true;
    }
  }

};
</script>