import React, { useState } from "react";
import { products, Product } from "@/data/products";
import CashierProductCard from "@/components/CashierProductCard";
import CartDisplay from "@/components/CartDisplay";
import { Input } from "@/components/ui/input";
import { showSuccess } from "@/utils/toast";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CartItem extends Product {
  quantity: number;
}

const CashierPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    showSuccess(`${product.name} đã được thêm vào giỏ hàng.`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) => {
      if (quantity <= 0) {
        return prevItems.filter((item) => item.id !== productId);
      }
      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      );
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    showSuccess("Sản phẩm đã được xóa khỏi giỏ hàng.");
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      return;
    }
    // In a real application, this would process the payment and clear the cart
    showSuccess("Thanh toán thành công! Cảm ơn quý khách.");
    setCartItems([]);
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] p-4 gap-4 bg-gray-100 dark:bg-gray-900">
      <div className="md:w-2/3 flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Bán hàng tại quầy</h1>
        <Input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
        <ScrollArea className="flex-grow pr-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <CashierProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="md:w-1/3">
        <CartDisplay
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
        />
      </div>
    </div>
  );
};

export default CashierPage;