// Utilities
import { defineStore } from 'pinia'
import fetch from '../helpers/fetch';
import Product from '../types/product';
import Cateogry from '../types/category';

export const useAppStore = defineStore('app', {
  state: () => ({
    products: [] as Product[],
    categories: [] as Cateogry[],
    productData: {} as Product,
    categoryProducts: [] as Product[],
    cart: [] as Product[]
  }),
  actions: {
    async fetchProducts(): Promise<void> {
      const data = await fetch('products');
      console.log(data.items, 'data')
      this.products = data?.items;
    },
    async fetchCateogies(): Promise<void> {
      const data = await fetch('categories');
      this.categories = data?.items;
    },
    async fetchProductData(productId): Promise<void> {
      const data = await fetch(`products/${productId}`);
      this.productData = data;
    },
    async fetchProductsByCategory(categoryId): Promise<void> {
      const data = await fetch(`products?categories=${categoryId}`);
      console.log(data.items, 'data')
      this.categoryProducts = data?.items;
    },
  },
})
