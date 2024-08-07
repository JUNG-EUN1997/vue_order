import ProductList from "@/components/ProductListComponent.vue";
import ProductListManage from "@/views/product/ProductListManage.vue";


export const productRouter = [
    {
        path: '/',
        name: 'Home',
        component: ProductList
    },
    {
        path: '/product/manage',
        name: 'ProductManage',
        component: ProductListManage
    },
    {
        path: '/product/list',
        name: 'ProductList',
        component: ProductList
    }
]
