<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card>
                    <v-card-title class="text-center text-h5">
                        상품등록
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="productCreate">
                            <v-text-field
                                label="상품명"
                                v-model="name"
                                required
                            >
                            </v-text-field>

                            <v-text-field
                                label="카테고리"
                                v-model="category"
                                required
                            >
                            </v-text-field>

                            <v-text-field
                                label="가격"
                                v-model="price"
                                required
                            >
                            </v-text-field>

                            <v-text-field
                                label="재고수량"
                                v-model="stockQuantity"
                                required
                            >
                            </v-text-field>

                            <v-file-input
                                label="상품 image"
                                accept="image/*"
                                @change="fileUpdate"
                                required
                            >
                            </v-file-input>
                            <v-btn type="submit" color="primary" block>등록</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            name: "",
            category: "",
            price: "",
            stockQuantity: "",
            productImage:""
        }
    },
    methods:{
        async productCreate(){
            try {
                let registerData = new FormData();
                registerData.append("name",this.name);
                registerData.append("category",this.category);
                registerData.append("price",this.price);
                registerData.append("stockQuantity",this.stockQuantity);
                registerData.append("productImage",this.productImage);


                const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/product/create`,registerData);
                console.log(response)
                this.$router.push("/product/manage")
            } catch (error) {
                alert("상품 등록에 실패했습니다.")
            }
        },
        fileUpdate(event){
            console.log(event)
            this.productImage = event.target.files[0]
        }
    }
}
</script>