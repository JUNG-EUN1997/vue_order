import OrderList from "@/components/OrderListComponent.vue";
import OrderCart from "@/views/order/OrderCart.vue";


export const orderRouter = [
    {
        path:"/order/list",
        name:"OrderList",
        component:OrderList
    },
    {
        path:"/order/cart",
        name:"OrderCart",
        component:OrderCart
    },
    {}
]