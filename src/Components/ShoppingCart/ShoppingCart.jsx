import React from 'react';
import ProductItem from './ProductItem';
import styled from "styled-components";
import arrow from "../../img/chevron-right.png";

const ShoppingCart = ({ cartItems }) => {

  // 장바구니가 비어있을 때 처리
  if (cartItems.length === 0) {
    return (
      <>
      <Background>
      <EmptyCart>장바구니에 담긴 상품이 없습니다.</EmptyCart>
      <EmptyCart2>원하는 상품을 장바구니에 담아보세요!</EmptyCart2>
      <ContinueShopping>
        쇼핑 계속하기<Arrow src={arrow} alt="arrow" />
      </ContinueShopping>
      </Background>
      </>
    );
  }

  const calculateTotalPrice = (cartItems) => {
    let totalPrice = 0;
  
    // 장바구니에 있는 각 상품의 가격과 수량을 곱하여 더함
    cartItems.forEach((item) => {
      item.cartDetailViewDTOList.forEach((detail) => {
        totalPrice += detail.price * detail.amount;
      });
    });
  
    // 전체 주문 금액에 배송비 추가
    const deliveryFee = 3000; // 예시로 고정 배송비 3000원 사용
    totalPrice += deliveryFee;
  
    return totalPrice;
  };
  
  return (
    <div>
      {cartItems.map((cartItem, index) => (
        <div key={index}>
          <ProductItem
            sellerName={cartItem.sellerName}
            itemName={cartItem.itemName}
            itemImg={cartItem.itemImg}
            options={cartItem.cartDetailViewDTOList}
            totalPrice={calculateTotalPrice(cartItems)}
            deliveryFee={cartItem.deliveryFee}
          />
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;

const Background=styled.div`
  position: absolute;
  background-color: #F9F9F9;
  height:40vw;
  width:100%
`
const EmptyCart=styled.p`
  margin-left: 40vw;
  margin-top: 25vh;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6vw;
  color: #202123;
`;
const EmptyCart2=styled.p`
  margin-left: 41.5vw;
  margin-top: -1vh;
  font-family: 'Noto Sans';
  font-style: normal;
  font-size: 1.2vw;
  font-weight: 400;
  width: 20vw;
  display: flex;
  align-items:center;
  color: #52555B;
`;
const ContinueShopping = styled.button`
  
  margin-left:45vw;
  width:11vw;
  height: 3vw;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.1vw;
  line-height: 20px;
  display: flex;
  align-items:center;
  color: #202123;
  background-color: #f9f9f9;
  padding-left: 2vw;
  border: 1px solid rgba(156, 156, 156, 0.5); 
  border-radius: 3px;

`;

const Arrow = styled.img`
  width:1.5vw;
  height:1.5vw;
`;