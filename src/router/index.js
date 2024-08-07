// import 시, 파일 내부에 export default가 없는 경우에 {} 필요
//    또한, import 하는 요소가 여러개인 경우도 필요

import { createRouter, createWebHistory } from "vue-router";

// @는 루트폴더 경로를 의미한다. 
// import 시, 파일 내부에 export default가 있는 경우는 {}가 필요 없다

// routing 할 내역들 작성
import { practiceRouter } from "./practiceRouter";
import { memberRouter } from "./memberRouter";
import HomeComponent from "@/components/HomeComponent.vue";
import { productRouter } from "./productRouter";
import { orderRouter } from "./orderRouter";
const routes = [
    {
        path: '/',
        name: 'HomeComponent',
        component: HomeComponent
    },
    ...practiceRouter, // router 구분용 
    ...memberRouter,
    ...productRouter,
    ...orderRouter
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