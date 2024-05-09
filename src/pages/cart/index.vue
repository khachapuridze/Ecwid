<template>
  <v-container>
    <h1 class="text-center my-4">Your Cart</h1>
    <v-divider class="my-4"></v-divider>
    <div v-if="cart.length > 0">
      <v-row>
        <v-col v-for="product in cart" :key="product.id" cols="12" sm="4">
          <ProductCart
            @removeFromCart="removeFromCart(index)"
            :product="product"
          />
        </v-col>
      </v-row>

      <v-divider class="my-4"></v-divider>
      <v-row justify="end">
        <v-col cols="auto">
          <v-btn color="primary" @click="placeOrder">Place Your Order</v-btn>
        </v-col>
      </v-row>
    </div>

    <v-alert v-else class="mt-6" outlined>
      Your cart is empty. Start shopping!
    </v-alert>
    <v-snackbar v-model="snackbar" :timeout="1500" color="success">
      Item removed from cart!
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="snackbarForPlaceOrder" :timeout="1500" color="success">
      You successfully make order!
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup>
import { useAppStore } from "@/stores/app";
import ProductCart from "@/components/ProductCart";
import { useRouter } from "vue-router";

const store = useAppStore();
const router = useRouter();

const cart = computed(() => store.cart);
const snackbar = ref(false);
const snackbarForPlaceOrder = ref(false);

const removeFromCart = (index) => {
  store.cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(store.cart));
  snackbar.value = true;
};
const placeOrder = () => {
  // fake loading
  setTimeout(() => {
    router.push("/");
  }, 800);
  store.cart = [];
  localStorage.removeItem("cart");
  snackbarForPlaceOrder.value = true;
};
</script>

<style>
/* .v-list-item-avatar img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
} */

.v-list-item-subtitle {
  color: grey;
}

.v-btn {
  text-transform: none;
}
</style>
