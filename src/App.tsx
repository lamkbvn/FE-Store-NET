import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import StorePage from "./pages/StorePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CashierPage from "./pages/CashierPage";
import InventoryPage from "./pages/InventoryPage"; // Import InventoryPage
import MainLayout from "./components/MainLayout"; // Import MainLayout

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}> {/* Sử dụng MainLayout làm bố cục chính */}
            <Route index element={<CashierPage />} /> {/* CashierPage là trang mặc định trong MainLayout */}
            <Route path="cashier" element={<CashierPage />} />
            <Route path="inventory" element={<InventoryPage />} /> {/* Thêm tuyến đường cho Kho hàng */}
            <Route path="store" element={<StorePage />} />
            <Route path="products/:id" element={<ProductDetailPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;