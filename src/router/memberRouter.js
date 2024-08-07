import LoginPage from "@/views/LoginPage.vue";
import MemberCreate from "@/views/member/MemberCreate.vue";
import MemberList from "@/views/member/MemberList.vue";
import Mypage from "@/views/member/MyPage.vue";




export const memberRouter = [
    {
        path:"/member/create",
        name:"MemberCreate",
        component:MemberCreate
    },{
        path:"/member/list",
        name:"MemberList",
        component:MemberList
    },{
        path:"/login",
        name:"LoginPage",
        component:LoginPage
    },{
        path:"/mypage",
        name:"MyPage",
        component: Mypage
    }
]