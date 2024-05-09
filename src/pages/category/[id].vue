<template>
  <div>
    <v-container>
      <v-row class="ga-5 flex-nowrap">
        <v-col v-for="product in products" :key="product.id" cols="12" sm="4">
          <router-link
            class="text-decoration-none"
            :to="`/product/${product.id}`"
          >
            <ProductCard :product="product" />
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import ProductCard from "@/components/ProductCard";
import { useRoute } from "vue-router";

const store = useAppStore();
const route = useRoute();
const products = computed(() => store.categoryProducts);
onMounted(() => {
  store.fetchProductsByCategory(route.params.id);
});
</script>

<style scoped></style>
