import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <Card className="w-full max-w-sm flex flex-col">
      <Link to={`/products/${product.id}`} className="block"> {/* Wrap card content in Link */}
        <CardHeader className="p-0">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <CardTitle className="text-lg font-semibold mb-2">{product.name}</CardTitle>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
            {product.description}
          </p>
          <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={() => onAddToCart(product)}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;