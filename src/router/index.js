// import 시, 파일 내부에 export default가 없는 경우에 {} 필요
//    또한, import 하는 요소가 여러개인 경우도 필요
import { createRouter, createWebHistory } from "vue-router";

// @는 루트폴더 경로를 의미한다. 
// import 시, 파일 내부에 export default가 있는 경우는 {}가 필요 없다
import HomeComponent from "@/components/practices/HomeComponent.vue";
import TestComponent from "@/components/practices/TestComponent.vue";

// routing 할 내역들 작성
const routes = [
    {
        // path와 name 둘 다 routing이 가능하다.
        // name으로 라우팅 하는 경우는, js코드 내에서 라우팅 하는 경우
        path: '/home',
        name: 'HOME',
        component: HomeComponent
    },
    {
        path: '/test',
        name: 'TEST',
        component: TestComponent
    }
];

const router = createRouter({
    /*
    vue router는 내부적으로 두가지 방식의 히스토리 관리 제공
        1) createWebHistory  : /home  > 대부분history 사용
        2) createHashHistory : /#/home
    */
    history: createWebHistory(),
    routes
});

export default router;