import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/data/products";
import { Trash2 } from "lucide-react";

interface CartItem extends Product {
  quantity: number;
}

interface CartDisplayProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

const CartDisplay: React.FC<CartDisplayProps> = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Giỏ hàng</h2>
      <ScrollArea className="flex-grow pr-2 mb-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">Giỏ hàng trống.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
              <div className="flex-grow">
                <p className="font-medium text-gray-900 dark:text-gray-100">{item.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ${item.price.toFixed(2)} x
                  <Input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 inline-block ml-2 text-center"
                  />
                </p>
              </div>
              <div className="flex items-center">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mr-4">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <Button variant="ghost" size="icon" onClick={() => onRemoveItem(item.id)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          ))
        )}
      </ScrollArea>
      <Separator className="my-4" />
      <div className="flex justify-between items-center text-xl font-bold mb-4">
        <p className="text-gray-900 dark:text-gray-100">Tổng cộng:</p>
        <p className="text-primary">${total.toFixed(2)}</p>
      </div>
      <Button className="w-full py-3 text-lg" onClick={onCheckout} disabled={cartItems.length === 0}>
        Thanh toán
      </Button>
    </div>
  );
};

export default CartDisplay;