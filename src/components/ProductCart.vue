<template>
  <v-card class="mx-auto mb-4" max-width="400">
    <router-link class="text-decoration-none" :to="`/product/${product.id}`">
      <v-img
        class="align-end text-white brightness-filter"
        height="200"
        :src="product.hdThumbnailUrl"
        cover
      >
        <v-card-title>{{ product.name }}</v-card-title>
      </v-img>
      <v-card-subtitle class="pt-4">
        (Quantity: {{ product.quantity }})
      </v-card-subtitle>

      <v-card-text>
        <div>{{ product.defaultDisplayedPriceFormatted }}</div>
      </v-card-text>
    </router-link>
    <v-card-actions>
      <v-btn
        color="red"
        @click="emit('removeFromCart')"
        text="remove from cart"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import Product from "../types/product";

defineProps<{
  product: Product;
}>();
const emit = defineEmits(["removeFromCart"]);
</script>

<style>
.brightness-filter .v-img__img {
  filter: brightness(50%);
}
</style>
