import React from "react";

const CustomersPage: React.FC = () => {
  return (
    <div className="flex-1 p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Quản lý Khách hàng</h1>
      <p className="text-gray-700 dark:text-gray-300">
        Đây là trang quản lý thông tin khách hàng. Các chức năng quản lý khách hàng sẽ được thêm vào đây.
      </p>
      {/* Thêm nội dung quản lý khách hàng tại đây */}
    </div>
  );
};

export default CustomersPage;