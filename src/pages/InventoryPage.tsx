import React from "react";

const InventoryPage: React.FC = () => {
  return (
    <div className="flex-1 p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Quản lý Kho hàng</h1>
      <p className="text-gray-700 dark:text-gray-300">
        Đây là trang quản lý kho hàng của bạn. Các chức năng quản lý sản phẩm sẽ được thêm vào đây.
      </p>
      {/* Thêm nội dung quản lý kho hàng tại đây */}
    </div>
  );
};

export default InventoryPage;