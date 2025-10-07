import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import ProductCard from "@/components/ProductCard";
import { products, Product } from "@/data/products";
import { showSuccess } from "@/utils/toast";

const Index = () => {
  const handleAddToCart = (product: Product) => {
    // Trong một ứng dụng thực tế, điều này sẽ thêm sản phẩm vào trạng thái giỏ hàng toàn cục
    // Hiện tại, chúng ta chỉ hiển thị thông báo toast.
    showSuccess(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-primary dark:text-primary-foreground">
          Chào mừng đến với Cửa hàng Web của chúng tôi!
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Khám phá những sản phẩm tuyệt vời và bắt đầu mua sắm ngay bây giờ.
        </p>
      </div>

      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Sản phẩm của chúng tôi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;