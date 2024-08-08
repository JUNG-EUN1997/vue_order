import ProductList from "@/components/ProductListComponent.vue";
import ProductCreate from "@/views/product/ProductCreate.vue";
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
    },
    {
        path: '/product/create',
        name: 'ProductCreate',
        component: ProductCreate
    }
]
