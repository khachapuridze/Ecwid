export default interface Product {
    id: number;
    imageUrl: string;
    name: string;
    price: string;
    defaultDisplayedPriceFormatted: string;
    hdThumbnailUrl: string;
    quantity?: number;
  }