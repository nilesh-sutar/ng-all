export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  isAddedToCart:boolean;
  isAddedToWishlist:boolean;
}

export interface User {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}

export interface Quote {
  id: number
  quote: string
  author: string
}

export interface Post {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  reactions: number
}

export interface Comment {
  id: number
  body: string
  postId: number
  user: {
    id: number
    username: string
  }
}