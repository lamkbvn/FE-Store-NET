import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SidebarMenu from "./SidebarMenu";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

const MainLayout: React.FC = () => {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const handleLinkClick = () => {
    if (isMobile) {
      setIsSheetOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        {isMobile ? (
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="absolute top-4 left-4 z-50 md:hidden">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0 pt-16">
              <SidebarMenu onLinkClick={handleLinkClick} />
            </SheetContent>
          </Sheet>
        ) : (
          <aside className="w-64 border-r bg-sidebar dark:bg-sidebar-background pt-4">
            <SidebarMenu />
          </aside>
        )}
        <main className="flex-1 overflow-auto">
          <Outlet /> {/* Đây là nơi các trang con sẽ được render */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;