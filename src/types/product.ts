export interface Product {
  id: number;
  name: string;
  name_hi?: string;
  description: string;
  description_hi?: string;
  price: number;
  image: string;
  video?: string;
  location: string;
  artisan: string;
  artisan_hi?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
