import React, { useState } from 'react';
import ProductItem from './ProductItem';
import styled from "styled-components";
import arrow from "../../img/chevron-right.png";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../Register/CustomButton';
import { setSelectedItems } from './selectedItemsSlice'; // 선택된 항목을 Redux store에 dispatch하기 위해 추가
import axios from 'axios';

const ShoppingCart = ({ cartItems }) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch(); // useDispatch 훅을 사용하여 dispatch 함수를 가져옴
  const selectedItems = useSelector(state => state.selectedItems);
  const [checkedItems, setCheckedItems] = useState([]);
  const token = useSelector((state)=>state.login.token);
  const [productItemData, setProductItemData] = useState([]); // ProductItem의 데이터 상태

  const handleOrderButtonClick = () => {
    console.log(selectedItems); // 선택된 상품들의 정보를 콘솔에 출력하거나 결제 페이지로 전달하는 로직 추가
    // navigate('/payment');
  };

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
  
  const handleItemToggle = (item, isChecked) => {
    // 선택된 상품 배열의 상태를 변경
    if (isChecked) {
      // 선택하는 경우, selectedItems에 추가
      dispatch(setSelectedItems([...selectedItems, item]));
      // 상품의 ID를 checkedItems에 추가
      setCheckedItems([...checkedItems, item.itemId]);
    } else {
      // 선택 해제하는 경우, selectedItems에서 해당 상품 제거
      dispatch(setSelectedItems(selectedItems.filter(selectedItem => selectedItem.itemId !== item.itemId)));
      // 해당 상품의 ID를 checkedItems에서 제거
      setCheckedItems(checkedItems.filter(id => id !== item.itemId));
    }
  };
  
  

  const handleDeleteSelectedItems = () => {
  
    // 선택된 상품들의 ID 배열을 서버로 전송하여 삭제합니다.
    axios.delete('https://dev.the-goods.store/api/cart/delete', {
      data: { cartIdList: checkedItems }, // checkedItems를 사용하여 선택된 상품들의 ID 전달
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` // 토큰 추가
      }
    })
      .then(response => {
        console.log('선택된 상품이 삭제되었습니다.');
      })
      .catch(error => {
        console.error('상품 삭제 중 오류가 발생했습니다.', error);
      });
  };
  
  const handleConfirmChanges = (updatedOptions) => {
    // 모달에서 변경된 내용을 받아와서 ProductItem 상태를 업데이트
    // 이때 productItemData의 상태를 업데이트하여 ProductItem이 재렌더링됨
    setProductItemData(updatedOptions);
  };

  const calculateTotalPrice = () => {
    if (!cartItems || !Array.isArray(cartItems)) {
      console.error('cartItems 배열이 유효하지 않습니다.');
      return 0; // 유효하지 않은 경우 0을 반환하거나 다른 적절한 값으로 처리
    }
  
    let totalPrice = 0;
  
    cartItems.forEach((item) => {
      if (item.isChecked) {
        totalPrice += item.totalPrice || 0; // totalPrice가 숫자인지 확인하고 0으로 설정
      }
    });
  
    return totalPrice.toLocaleString();
  };
  
  // 선택된 상품의 개수를 반환
  const selectedItemCount = selectedItems.length;
  
  return (
    <div>
      {cartItems.length > 0 && (
        <>
        <div style={{display:'flex'}}>
          <CheckBoxPosition>
            <CheckBoxPosition1>
            <CustomButton  
              state={isChecked} 
              onChange={() => handleItemToggle(cartItems, !checkedItems.includes(cartItems.itemId))} 
              index="isChecked" 
              label=""
            />  
            </CheckBoxPosition1>
            <CheckBoxlabel>전체 선택</CheckBoxlabel>
          </CheckBoxPosition> 
            <Deletebutton onClick={handleDeleteSelectedItems}>X 삭제</Deletebutton>
        </div>
          <Divider />
        </>
      )}

      {cartItems.map((cartItem, index) => (
        <div key={index}>
          <ProductItem
            key={index}
            itemId={cartItem.itemId}
            sellerName={cartItem.sellerName}
            itemName={cartItem.itemName}
            itemImg={cartItem.itemImg}
            optionList={cartItem.cartDetailViewDTOList}
            deliveryFee={cartItem.deliveryFee}
            onUpdate={handleConfirmChanges} // 모달에서 변경된 내용을 받아오는 콜백 함수 전달
     
            onItemToggle={handleItemToggle} // 선택된 항목 토글 핸들러를 props로 전달
            isChecked={checkedItems.includes(cartItem.itemId)} // 선택 여부를 상태에 따라 동적으로 설정합니다.
            
          />
        </div>
      ))}
      {cartItems.length > 0 && (
        <>
          <Divider />
          <BottomExplain>
            <p>· 장바구니 상품은 최대 30일간 저장됩니다.</p>
            <p>· 장바구니에는 최대 50개까지 상품을 담으실 수 있습니다.</p>
            <p>· 상품이 50개가 넘으면 가장 먼저 담았던 상품이 찜 목록으로
              이동됩니다.
            </p>
          </BottomExplain>
          <Order>
            <TotalPrice>
              총 주문 금액 <PriceNumber>{calculateTotalPrice()}</PriceNumber>원
            </TotalPrice>
            <OrderButton onClick={handleOrderButtonClick}>
              총 주문하기<ItemCount>{selectedItemCount}</ItemCount>
            </OrderButton>
          </Order>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;

const Background=styled.div`
  position: absolute;
  background-color: #F9F9F9;
  height:100%;
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

const Divider = styled.hr`
  border: 1px solid #ddd;
  margin: 0 0px;
`;
const CheckBoxPosition = styled.div`
  margin-left:${405/19.2}vw;
  height:${45/19.2}vw;
  display:flex;
`
const CheckBoxPosition1=styled.div`
  margin-top:${10/19.2}vw;
`
const CheckBoxlabel = styled.div`
  font-size:${22/19.2}vw;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  //font-size: 16px;
  line-height: ${45/19.2}vw;

  color: #202123;


`
const Deletebutton = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: ${66/19.2}vw;
  height: ${28/19.2}vw;
  margin-left: ${955/19.2}vw;
  margin-top: ${10/19.2}vw;
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: ${13/19.2}vw;
  line-height: ${28/19.2}vw;
  text-align: center;
  color: #888888;
`



const BottomExplain = styled.div`
  font-family: 'Noto Sans';
  border-radius: 10px;
  background: #f4f4f5;
  width: ${1130/19.2}vw;
  height: ${104/19.2}vw;
  margin-left: ${375/19.2}vw;
  margin-top: 10px;
  padding:0.3vw;
  padding-left:2vw;
  font-size:${14/19.2}vw;
  color:#52555B;
  font-weight: 400;
`;
const Order = styled.div`
  margin-top:10px;
  background:#F0C920;
  height: 12vh;
  display:flex;
`

const TotalPrice = styled.p`
  position: display; 
  display:flex;
  margin-left: 48vw;
  margin-top: 4.5vh;
  color:#fff;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5vw;
`;

const PriceNumber = styled.p`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.8vw;
  color: #FFFFFF;
  margin-top:0.25vw;
  line-height: 1.5vw;
  margin-left:0.4vw;
`;

const OrderButton = styled.button`
  position: absolute;
  background-color: #ffffff;
  color: black;
  margin-left:65vw;
  border: none;
  border-radius: 5px;
  margin-top: 1.8vw;
  height: 3vw;
  width: 13vw;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.3vw;
  padding-right: 2vw;
`;

const ItemCount = styled.button`
  position: absolute;
  border-radius: 50%;
  background-color: #ff0000;
  color: white;
  border: none; 
  width: 1.5vw;
  height: 1.5vw;
  margin-bottom: 10px;
  margin-left: 0.5vw;
`
