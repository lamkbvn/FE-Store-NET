import React from "react";

const InvoicesPage: React.FC = () => {
  return (
    <div className="flex-1 p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Quản lý Hóa đơn</h1>
      <p className="text-gray-700 dark:text-gray-300">
        Đây là trang quản lý các hóa đơn. Các chức năng quản lý hóa đơn sẽ được thêm vào đây.
      </p>
      {/* Thêm nội dung quản lý hóa đơn tại đây */}
    </div>
  );
};

export default InvoicesPage;