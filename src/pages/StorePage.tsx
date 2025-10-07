import React from "react";
import ProductCard from "@/components/ProductCard";
import { products, Product } from "@/data/products";
import { showSuccess } from "@/utils/toast"; // Corrected import

const StorePage: React.FC = () => {
  const handleAddToCart = (product: Product) => {
    // In a real application, this would add the product to a global cart state
    // For now, we'll just show a toast notification.
    showSuccess(`${product.name} added to cart!`); // Using the exported showSuccess function
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default StorePage;