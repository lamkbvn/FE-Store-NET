import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";

interface CashierProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const CashierProductCard: React.FC<CashierProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <Card className="w-full flex flex-col cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onAddToCart(product)}>
      <CardHeader className="p-0">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-32 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex-grow p-3 text-center">
        <CardTitle className="text-md font-semibold mb-1 line-clamp-2">{product.name}</CardTitle>
        <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <Button className="w-full" onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>
          Thêm
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CashierProductCard;