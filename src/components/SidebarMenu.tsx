import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Package, ShoppingCart, Users, Receipt, Shirt } from "lucide-react"; // Thêm các icon mới

interface SidebarMenuProps {
  onLinkClick?: () => void; // Dùng để đóng sidebar trên mobile khi click vào link
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ onLinkClick }) => {
  const location = useLocation();

  const navItems = [
    {
      name: "Bán hàng",
      href: "/cashier",
      icon: ShoppingCart,
    },
    {
      name: "Kho hàng",
      href: "/inventory",
      icon: Package,
    },
    {
      name: "Sản phẩm", // Mục mới
      href: "/store", // Trỏ đến trang StorePage hiện có
      icon: Shirt,
    },
    {
      name: "Khách hàng", // Mục mới
      href: "/customers",
      icon: Users,
    },
    {
      name: "Hóa đơn", // Mục mới
      href: "/invoices",
      icon: Receipt,
    },
  ];

  return (
    <nav className="flex flex-col space-y-1 p-4">
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant={location.pathname === item.href || (item.href === "/store" && location.pathname.startsWith("/products/")) ? "secondary" : "ghost"}
          className={cn(
            "justify-start",
            (location.pathname === item.href || (item.href === "/store" && location.pathname.startsWith("/products/"))) && "bg-accent text-accent-foreground"
          )}
          asChild
          onClick={onLinkClick}
        >
          <Link to={item.href}>
            <item.icon className="mr-2 h-4 w-4" />
            {item.name}
          </Link>
        </Button>
      ))}
    </nav>
  );
};

export default SidebarMenu;