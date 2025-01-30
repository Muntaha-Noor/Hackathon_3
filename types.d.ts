interface ProductType {
  _id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  stock: number;
  rating: number;
  totalRatings: number;
  size: string[];
  colors: string[];
}

  declare module 'sweetalert2';
