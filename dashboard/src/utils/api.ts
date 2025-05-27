const API_BASE = 'https://dummyjson.com';

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
  reviews: Review[];
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    country: string;
  };
  company: {
    name: string;
    department: string;
    title: string;
  };
  image: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export const fetchProduct = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_BASE}/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.status}`);
  }
  return response.json();
};
export const fetchUsers = async (): Promise<{ users: User[] }> => {
  const response = await fetch(`${API_BASE}/users`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${response.status}`);
  }
  return response.json();
};

export const fetchUser = async (id: number): Promise<User> => {
  const response = await fetch(`${API_BASE}/users/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${response.status}`);
  }
  return response.json();
};

export const fetchPosts = async (): Promise<{ posts: Post[] }> => {
  const response = await fetch(`${API_BASE}/posts`);
  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.status}`);
  }
  return response.json();
};

export const fetchPost = async (id: number): Promise<Post> => {
  const response = await fetch(`${API_BASE}/posts/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.status}`);
  }
  return response.json();
};

export const fetchProducts = async (
  category?: string
): Promise<{ products: Product[] }> => {
  const url = category
    ? `${API_BASE}/products/category/${category}`
    : `${API_BASE}/products`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }
  return response.json();
};
