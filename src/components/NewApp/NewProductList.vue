<template>
<div>
    <v-app-bar color="purple" dark>
        <v-toolbar-title class="mx-auto" align="center" justify="center">Buy Again</v-toolbar-title>
    </v-app-bar>
    <div class="d-flex justify-space-around flex-wrap align-sm-start " :style="{marginBottom : '80px'}">
        <v-card class="mx-auto mt-4" max-width="45%">
            <v-img height="180" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
            <div class="d-flex justify-space-between">
                <v-card-text class="pt-1 pb-0">
                    <p class="text-subtitle-1 mb-0 pb-1" :style="{maxHeight: '1.2em', overflow : 'hidden' , wordBreak : 'break-all'}">Cafe Badilico</p>
                </v-card-text>
                <v-btn icon class="m-0 pb-0">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </div>
            <div class="pl-4">
                <v-card-title class="pl-0 pt-1 pb-0" :style="{maxHeight: '1.8em', overflow : 'hidden' , wordBreak : 'break-all'}">
                    Italian, Cafe
                </v-card-title>
                <div class="d-flex">
                    <p class="mb-0" :style="{color: '#80CBC4', fontSize: '0.9em' }"> Rs : 50/-</p>
                    <p class="mb-0" :style="{color: '#D32F2F', fontSize: '0.9em'}"> <span class="text-decoration-line-through">55</span></p>
                </div>
            </div>
            <div class="d-flex justify-space-between ">
                <v-btn color="deep-purple lighten-2" text>
                    Add To Cart
                </v-btn>
                <v-btn icon class="pr-4 ">
                    <v-icon>mdi-share-variant</v-icon>
                </v-btn>
            </div>
        </v-card>
        <v-card class="mx-auto mt-4" max-width="45%">
            <v-img height="180" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
            <div class="d-flex justify-space-between">
                <v-card-text class="pt-1 pb-0">
                    <p class="text-subtitle-1 mb-0 pb-1" :style="{maxHeight: '1.2em', overflow : 'hidden' , wordBreak : 'break-all'}">Cafe Badilico</p>
                </v-card-text>
                <v-btn icon class="m-0 pb-0">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </div>
            <div class="pl-4">
                <v-card-title class="pl-0 pt-1 pb-0" :style="{maxHeight: '1.8em', overflow : 'hidden' , wordBreak : 'break-all'}">
                    Italian, Cafe
                </v-card-title>
                <div class="d-flex">
                    <p class="mb-0" :style="{color: '#80CBC4', fontSize: '0.9em' }"> Rs : 50/-</p>
                    <p class="mb-0" :style="{color: '#D32F2F', fontSize: '0.9em'}"> <span class="text-decoration-line-through">55</span></p>
                </div>
            </div>
            <div class="d-flex justify-space-between ">
                <v-btn color="deep-purple lighten-2" text>
                    Add To Cart
                </v-btn>
                <v-btn icon class="pr-4 ">
                    <v-icon>mdi-share-variant</v-icon>
                </v-btn>
            </div>
        </v-card>
        <v-card class="mx-auto mt-4" max-width="45%">
            <v-img height="180" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
            <div class="d-flex justify-space-between">
                <v-card-text class="pt-1 pb-0">
                    <p class="text-subtitle-1 mb-0 pb-1" :style="{maxHeight: '1.2em', overflow : 'hidden' , wordBreak : 'break-all'}">Cafe Badilico</p>
                </v-card-text>
                <v-btn icon class="m-0 pb-0">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </div>
            <div class="pl-4">
                <v-card-title class="pl-0 pt-1 pb-0" :style="{maxHeight: '1.8em', overflow : 'hidden' , wordBreak : 'break-all'}">
                    Italian, Cafe
                </v-card-title>
                <div class="d-flex">
                    <p class="mb-0" :style="{color: '#80CBC4', fontSize: '0.9em' }"> Rs : 50/-</p>
                    <p class="mb-0" :style="{color: '#D32F2F', fontSize: '0.9em'}"> <span class="text-decoration-line-through">55</span></p>
                </div>
            </div>
            <div class="d-flex justify-space-between ">
                <v-btn color="deep-purple lighten-2" text>
                    Add To Cart
                </v-btn>
                <v-btn icon class="pr-4 ">
                    <v-icon>mdi-share-variant</v-icon>
                </v-btn>
            </div>
        </v-card>

    </div>
    <v-footer class="text-center white--text" app fixed padless>
        <v-row class="purple" dense>
            <v-col cols="3">
                <v-btn color="white" icon>
                    <v-icon> mdi-alphabetical </v-icon>
                </v-btn>
                <h6>Frendy</h6>
            </v-col>
            <v-col cols="3">
                <v-btn color="white" icon>
                    <v-icon> mdi-magnify </v-icon>
                </v-btn>
                <h6>Search</h6>
            </v-col>
            <v-col cols="3">
                <v-btn color="white" icon>
                    <v-icon> mdi-account-circle</v-icon>
                </v-btn>
                <h6>Account</h6>
            </v-col>
            <v-col cols="3">
                <v-btn color="white" icon>
                    <v-icon> mdi-cart </v-icon>
                </v-btn>
                <h6>Cart</h6>
            </v-col>
        </v-row>
    </v-footer>
</div>
</template>

<script>
export default {
    name: "NewProductList",

    data() {
        return {
            emptyCartData: {
                img: "../assets/EC2.png",
                tagline: "Your Cart feels so light :(",
                multipleLines: "Hit the wishlist button and let's buy your favourite products !",
                btnOne: "Go to Wishlist",
            },
        };
    },
};
</script>
