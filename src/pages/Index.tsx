import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Truck, RefreshCw, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { Layout } from "@/components/layout/Layout";

const featuredProducts = products.filter((p) => p.featured);

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary shipping on orders over $150",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day return policy for your peace of mind",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Your transactions are safe and encrypted",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <span className="inline-block text-accent font-medium tracking-wider uppercase text-sm">
                New Collection 2024
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold leading-tight">
                Timeless
                <br />
                <span className="italic">Elegance</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Discover our curated collection of luxury essentials, where quality craftsmanship meets contemporary design.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button variant="hero" size="xl">
                    Shop Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="hero-outline" size="xl">
                    Our Story
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-medium">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
                  alt="Fashion model in elegant attire"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl shadow-soft">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.9 (2,847 reviews)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 rounded-full bg-secondary">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-medium text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-semibold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Explore our carefully curated categories
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/products?category=${category.name.toLowerCase()}`}
                  className="group block relative aspect-[3/4] rounded-lg overflow-hidden"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading text-xl text-primary-foreground font-medium">
                      {category.name}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {category.count} items
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl font-heading font-semibold mb-4">Featured Products</h2>
              <p className="text-muted-foreground max-w-md">
                Handpicked pieces from our latest collection
              </p>
            </div>
            <Link to="/products" className="mt-4 md:mt-0">
              <Button variant="ghost" className="group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-heading font-semibold mb-4">Join Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive updates on new arrivals, exclusive offers, and more.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="accent" size="lg">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
