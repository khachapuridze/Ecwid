<template>
  <div>
    <v-container>
      <v-row class="ga-10 flex-nowrap">
        <v-col sm="9">
          <h2>Products</h2>
          <v-row>
            <v-col
              v-for="product in products"
              :key="product.id"
              cols="12"
              sm="4"
            >
              <router-link
                class="text-decoration-none"
                :to="`/product/${product.id}`"
              >
                <ProductCard :product="product" />
              </router-link>
            </v-col>
          </v-row>
        </v-col>

        <v-col sm="3">
          <h2>Categories</h2>
          <v-col v-for="category in categories" :key="category.id">
            <div class="ma-2 pa-2">
              <router-link
                class="text-decoration-none"
                :to="`/category/${category.id}`"
              >
              <span>
                <v-img
                  height="200px"
                  :src="category.hdThumbnailUrl"
                  cover
                ></v-img>
              </span>
              <p class="text-black">{{ category.name }}</p>
              </router-link>
            </div>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "../stores/app";
import ProductCard from "../components/ProductCard";

const store = useAppStore();
onMounted(async () => {
  await Promise.allSettled([store.fetchProducts(), store.fetchCateogies()]);
});

const products = computed(() => store.products);
const categories = computed(() => store.categories);
</script>
