import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { showSuccess } from "@/utils/toast";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Sản phẩm không tìm thấy</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Rất tiếc, sản phẩm bạn đang tìm kiếm không tồn tại.
        </p>
        <Button onClick={() => navigate("/store")}>Quay lại cửa hàng</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    showSuccess(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Button onClick={() => navigate(-1)} className="mb-6">
        &larr; Quay lại
      </Button>
      <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="md:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-primary mb-6">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {product.description}
            </p>
          </div>
          <Button className="w-full py-3 text-lg" onClick={handleAddToCart}>
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;