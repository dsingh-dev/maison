import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] bg-secondary rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
          
          {/* Sale Badge */}
          {product.originalPrice && (
            <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
              Sale
            </span>
          )}
          
          {/* Actions */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <Button variant="secondary" className="flex-1 bg-background/90 backdrop-blur-sm hover:bg-background">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Bag
            </Button>
            <Button variant="secondary" size="icon" className="bg-background/90 backdrop-blur-sm hover:bg-background">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Link>
      
      <div className="mt-4 space-y-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <div className="flex items-center gap-2">
          <span className="font-medium">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
