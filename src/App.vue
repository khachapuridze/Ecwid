<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { useAppStore } from "@/stores/app";
const store = useAppStore();

const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    store.cart = JSON.parse(savedCart);
  }
};
onMounted(() => {
  loadCartFromLocalStorage();
});
</script>