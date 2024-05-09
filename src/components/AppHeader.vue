<template>
  <header class="px-2 py-8 bg-grey-darken-3 mb-3">
    <v-container>
      <v-row>
        <router-link :to="'/'" class="text-decoration-none text-white">
          <h1>My Shopping App</h1>
        </router-link>
        <v-spacer></v-spacer>
        <v-btn color="transparent" dark icon @click="$router.push('/cart')">
          <v-badge color="red" :content="count" overlap>
            <v-icon>mdi-cart</v-icon>
          </v-badge>
        </v-btn>
      </v-row>
    </v-container>
  </header>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/app";
const store = useAppStore();
const count = computed(() => {
  let count = 0;
  store.cart.forEach((cart) => (count += cart.quantity || 1));
  return count;
});
</script>
