<template>
  <v-container>
    <v-row v-if="!loading">
      <v-col cols="12" md="6">
        <v-img
          :src="product.hdThumbnailUrl"
          :alt="product.name"
          aspect-ratio="1.5"
          contain
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="headline">{{ product.name }}</v-card-title>
          <v-card-text>
            <div v-html="product.description"></div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="addToCart(product)"
              >Add to Cart</v-btn
            >
            <v-spacer></v-spacer>
            <span class="subtitle-1">{{
              product.defaultDisplayedPriceFormatted
            }}</span>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" :timeout="1500" color="success">
      Item added to cart!
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { useRoute } from "vue-router";

const store = useAppStore();
const route = useRoute();

const loading = ref(true);
const snackbar = ref(false);

const product = computed(() => store.productData);

const addToCart = (product) => {
  const existingItem = store.cart.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    store.cart.push({ ...product, quantity: 1 });
  }
  saveCartToLocalStorage();
  snackbar.value = true; // Show snackbar after adding to cart
};

const saveCartToLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(store.cart));
};

onMounted(async () => {
  await store.fetchProductData(route.params.id);
  loading.value = false;
});
</script>

<style scoped>
/* Add custom styles here */
</style>
