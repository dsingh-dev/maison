export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  tags: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Silk Cashmere Blend Sweater",
    description: "Luxuriously soft sweater crafted from the finest silk and cashmere blend. Perfect for layering or wearing alone.",
    price: 285,
    originalPrice: 350,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
    category: "Clothing",
    tags: ["sweater", "cashmere", "silk", "luxury"],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Italian Leather Tote",
    description: "Handcrafted in Tuscany, this leather tote features premium full-grain leather and antique brass hardware.",
    price: 495,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    category: "Bags",
    tags: ["leather", "tote", "italian", "handcrafted"],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Artisan Ceramic Vase",
    description: "Each piece is uniquely handcrafted by skilled artisans, featuring organic shapes and a matte glaze finish.",
    price: 165,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&q=80",
    category: "Home",
    tags: ["ceramic", "vase", "artisan", "decor"],
    rating: 4.7,
    reviews: 56,
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "Merino Wool Coat",
    description: "A timeless silhouette in pure merino wool. Features a relaxed fit and horn buttons.",
    price: 645,
    originalPrice: 750,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80",
    category: "Clothing",
    tags: ["coat", "wool", "merino", "outerwear"],
    rating: 4.9,
    reviews: 203,
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "Minimalist Gold Watch",
    description: "Swiss-made movement with a brushed gold case and Italian leather strap.",
    price: 395,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
    category: "Accessories",
    tags: ["watch", "gold", "swiss", "minimalist"],
    rating: 4.8,
    reviews: 167,
    inStock: true,
  },
  {
    id: "6",
    name: "Linen Blend Trousers",
    description: "Relaxed-fit trousers in a premium linen-cotton blend. Perfect for warm weather.",
    price: 185,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    category: "Clothing",
    tags: ["trousers", "linen", "summer", "casual"],
    rating: 4.6,
    reviews: 92,
    inStock: true,
  },
  {
    id: "7",
    name: "Hand-Poured Candle Set",
    description: "Set of three hand-poured soy candles in exclusive fragrances. 45-hour burn time each.",
    price: 85,
    image: "https://images.unsplash.com/photo-1602874801006-6c8abb2e2832?w=600&q=80",
    category: "Home",
    tags: ["candles", "soy", "fragrance", "gift"],
    rating: 4.7,
    reviews: 234,
    inStock: true,
  },
  {
    id: "8",
    name: "Suede Ankle Boots",
    description: "Italian suede ankle boots with a stacked heel and side zip closure.",
    price: 425,
    originalPrice: 495,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
    category: "Shoes",
    tags: ["boots", "suede", "ankle", "italian"],
    rating: 4.8,
    reviews: 145,
    inStock: true,
  },
];

export const categories = [
  { name: "Clothing", count: 24, image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80" },
  { name: "Bags", count: 12, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80" },
  { name: "Shoes", count: 18, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80" },
  { name: "Accessories", count: 32, image: "https://images.unsplash.com/photo-1611923134239-b9be5816e23c?w=600&q=80" },
  { name: "Home", count: 15, image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80" },
];
