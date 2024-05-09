<template>
  <v-card class="mx-auto" max-width="344">
    <v-img height="200px" :src="product.hdThumbnailUrl" cover></v-img>

    <v-card-title> {{ product.name }} </v-card-title>

    <v-card-subtitle>
      {{ product.defaultDisplayedPriceFormatted }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" text="Explore"></v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import Product from "../types/product";

defineProps<{
  product: Product;
}>();
</script>

<style scoped></style>
