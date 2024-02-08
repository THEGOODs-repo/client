import React from 'react';
import SellerProfile from './SellerProfile'; // SellerProfile 컴포넌트를 import 합니다.

const Seller = () => {
  return (
    <div className="seller-page">
      
      {/* SellerProfile 컴포넌트를 렌더링합니다. */}
      <SellerProfile />
    </div>
  );
};

export default Seller;
