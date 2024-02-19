import React, { useState, useEffect } from "react";
import styled from "styled-components";
import homeimg from "../../img/home.png";
import plusimg from "../../img/Plus.png"
import OrderModificationModal from "./OrderModificationModal";
import CustomButton from "../Register/CustomButton";
import { useDispatch } from "react-redux";
import { setSelectedItems } from "./selectedItemsSlice";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios';

const ProductItem = ({ sellerName, itemName, itemImg, optionList, deliveryFee, isChecked,itemId ,cartId , onToggle }) => {
  const [isCheckedAll, setIsCheckedAll] = useState(isChecked);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태 추가

  const token = useSelector((state)=>state.login.token);
  const [stockInfo, setStockInfo] = useState([]); // 재고 정보 상태 추가


  const fetchStockInfo = async () => {
    try {
      const response = await axios.get(`https://dev.the-goods.store/api/cart/${cartId}/stock`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setStockInfo(response.data);
    } catch (error) {
      console.error('Error fetching stock info:', error);
    }
  };

  useEffect(() => {
    fetchStockInfo();
  }, [itemId, cartId, token]);
  

  const dispatch = useDispatch();
  // 전체 선택 상태가 변경될 때 isCheckedAll 상태 업데이트
  useEffect(() => {
    setIsCheckedAll(isChecked);
  }, [isChecked]);

  // 체크박스 상태 변경 핸들러
// ProductItem 컴포넌트의 handleCheckboxChange 함수 수정
const handleCheckboxChange = (event) => {
  const isChecked = event.target.checked;
  setIsCheckedAll(isChecked);
  const selectedItem = { sellerName, itemName, itemImg, optionList, deliveryFee };
  // 부모 컴포넌트로 체크 여부와 상품 정보 전달
  onToggle(selectedItem, isChecked);
  
};


  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 얻기

  const handleOrderClick = () => {
    const item = {
      itemId,
      sellerName,
      itemName,
      itemImg,
      deliveryFee,
      optionList
    };
    if (isCheckedAll){
    console.log('전달되는 상품 정보:', item);
    navigate('/payment', { state: { item } }); // 결제 페이지로 이동하면서 item 객체 전달
    }
  }
  


  const handleModifyOrderClick = () => {
    setIsModalOpen(true);
  };
  // 각 옵션의 가격과 개수를 곱하여 합산하는 함수
  const calculateOptionTotalPrice = () => {
    let totalPrice = 0;
  
    if (!optionList || !Array.isArray(optionList)) {
      console.error('options 배열이 올바르지 않습니다.');
      return null;
    }
  
    optionList.forEach(option => {
      if (typeof option.price !== 'number' || typeof option.amount !== 'number') {
        console.error('옵션의 price 또는 amount 속성이 올바르지 않습니다:', option);
        return null;
      }
      totalPrice += option.price * option.amount; // 각 옵션의 가격과 수량을 곱한 값을 totalPrice에 더합니다.
    });
    
  
    return totalPrice;
  };

  const [optionsList, setOptionsList] = useState([]); // 초기 옵션 리스트 상태

  const handleUpdateOptions = (selectedOptions) => {
    // 변경된 옵션 정보를 받아와서 상태 업데이트
    setOptionsList(selectedOptions);
  };
  // 옵션이 있는지 여부 확인
  const hasOptions = optionList.some(option => option.optionName !== null);
  const firstItem = optionList[0];
  const firstItemPrice = firstItem.price;
  const firstItemAmount = firstItem.amount;

  const formattedPrice = (price) => {
    return price.toLocaleString();
  };
  
  const totalOrderPrice = calculateOptionTotalPrice() + deliveryFee;
  const formattedTotalPrice = formattedPrice(totalOrderPrice);
  
  
  return (
    <>
      <Form>
        <SellerBox>
          <Check>
            <CustomButton  state={isCheckedAll} onChange={handleCheckboxChange}index={itemName} label=""/> 

          </Check>
          <SellerName>{sellerName}</SellerName>
          <Home src={homeimg} alt='home'/>
        </SellerBox>
        <Divider />
        {hasOptions ? (
          <ProductForm>
            <Check2>
            <CustomButton  state={isCheckedAll} onChange={handleCheckboxChange} index={itemName} label="" /> 
            </Check2>
            <ItemImg src={itemImg} alt={itemName}/>
            <OptionSellerItem>
              <SellerName2>{sellerName}</SellerName2>
              <ItemName>{itemName}</ItemName> 
            </OptionSellerItem>
            <ModifyOrder onClick={handleModifyOrderClick}>주문수정</ModifyOrder>
            {isModalOpen && (
              <OrderModificationModal
                optionList={optionList}
                onClose={() => setIsModalOpen(false)} // 모달 닫기 핸들러
                onUpdate={handleUpdateOptions} // 변경된 내용을 부모 컴포넌트로 전달하는 콜백 함수 전달
                stockInfo={stockInfo} 
              />
            )}
          </ProductForm>
        ) : (
          <>
            <NoOptionProductForm>
              <Check2>
              <CustomButton  state={isCheckedAll} onChange={handleCheckboxChange} index={itemName} label="" /> 
              </Check2>
              <ItemImg2 src={itemImg} alt={itemName}/>
              <NameBox>
                <div style={{marginTop:'2vh'}}>
                <SellerName2>{sellerName}</SellerName2></div>
                <ItemName>{itemName}</ItemName>
              </NameBox>
              <PriceText><Text>{firstItemPrice.toLocaleString()}원</Text></PriceText>
              <AmountText><Text>{firstItemAmount}개</Text></AmountText>
              <ModifyOrder2 onClick={handleModifyOrderClick}>주문수정</ModifyOrder2>
              {isModalOpen && (
                <OrderModificationModal
                  optionList={optionList}
                  onClose={() => setIsModalOpen(false)} // 모달 닫기 핸들러
                  stockInfo={stockInfo} 
                />
              )}
            </NoOptionProductForm>
            <Divider2></Divider2>
          </>
        )}

        {hasOptions && optionList.map((option, idx) => (
          // 옵션 이름이 null이 아닌 경우에만 렌더링
          option.optionName !== null && (
            <OptionForm key={idx}>
              <OptionText>선택 {idx + 1} : {option.optionName} / {option.price.toLocaleString()}원 ({option.amount}개)</OptionText>
            </OptionForm>
          )
        ))}

        <div style={{ display: 'flex' }}>
          <PriceBox>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Price>상품 금액</Price>
              <Price>{calculateOptionTotalPrice().toLocaleString()}원</Price>
            </div>
            <Plus src={plusimg}></Plus>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Price>배송비</Price>
              <Price>{deliveryFee.toLocaleString()}원</Price>
            </div>
          </PriceBox>
          <MarketPriceBox>
            <MarketPrice1>주문금액 <MarketPrice>{formattedTotalPrice}원</MarketPrice></MarketPrice1>
            <OptionOrder onClick={handleOrderClick}  isActive={isCheckedAll}>
              {sellerName}  주문하기
            </OptionOrder>
          </MarketPriceBox>
        </div>
      </Form>
    </>
  );
};

export default ProductItem;


const Form = styled.div`
  width: ${1096/19.2}vw;
  min-height: ${345/19.2}vw;
  margin-left:${375/19.2}vw;
  margin-top:3vh;
  margin-bottom:3vh;
  flex-direction: column;
  align-items: stretch; 
  background: #FEFDFD;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding:${37/19.2}vw;
`
const SellerBox = styled.div`
  display:flex;
  margin-top: 0vw;
  margin-left: 0vw;
`

const SellerName = styled.p`
  margin-top: 0vw;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: ${31/19.2}vw;
  color: #202123;
  margin-right: 0.5vw;
  margin-left: ${21/19.2}vw;
`
const Home=styled.img`
  width: ${30/19.2}vw;
  height: ${30/19.2}vw;
`
const ProductForm = styled.div`
  display: flex;
  border-bottom: 1px soild #000;
  border-top: 1px soild #ccc;
  margin-bottom:1vw;
`
const ItemImg = styled.img`
  width: ${130/19.2}vw;
  height: ${130/19.2}vw;
  margin-left: 1vw;
`
const ItemImg2 = styled.img`
  width: ${130/19.2}vw;
  height: ${130/19.2}vw;
  margin-left: 1vw;
  margin-top:1.5vh;
`
const ItemName = styled.div`
  margin-left:0vw;
  margin-top:-0.5vw;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: ${16/19.2}vw;
  color: #202123;
`
const Divider = styled.hr`
  border: 1px solid #202123;
  margin-bottom: 1vw;
  margin-top: -1vw;
`;
const Divider2 = styled.hr`
  border: 0.5px solid #9C9C9C;
  margin-top: -1vw;
`;

const OptionSellerItem = styled.div`
  width: ${770/19.2}vw;
  padding:1vw;
`
const SellerName2 = styled.p`
  //flex-direction: column;
  
  width: 13vw;
  //margin-left: 1vw;
  margin-top: -1vh;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: ${14/19.2}vw;
  color: #9C9C9C;
`
const ModifyOrder = styled.button`
  box-sizing: border-box;
  width: ${70/19.2}vw;
  height: ${25/19.2}vw;
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  margin-left: 0vw;
  margin-top: ${50/19.2}vw;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: ${12/19.2}vw;
  color: #888888;
  background:#FEFDFD;
`
const ModifyOrder2 = styled.button`
  box-sizing: border-box;
  width: ${70/19.2}vw;
  height: ${25/19.2}vw;
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  margin-left: ${45/19.2}vw;
  margin-top: ${65/19.2}vw;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: ${12/19.2}vw;
  color: #888888;
  background:#FEFDFD;
`
const OptionForm = styled.div`
  margin-top:vh;
  display:flex;
  padding-left: 2vw;
  margin-left: 3vw;
  width:  ${1003/19.2}vw;
  height:  ${60/19.2}vw;
  border-bottom: 1px solid rgba(156, 156, 156, 0.5);
  background: rgba(156, 156, 156, 0.08);
  border-radius: 5px 5px 0px 0px;

`
const OptionText = styled.div`
  margin-top: 2vh;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size:  ${14/19.2}vw;
  color: #202123;
  text-align: center;
`

const PriceBox = styled.div`
  display:flex;
  border-right: 0.5px solid black;
  margin-top:  ${35/19.2}vw;
  margin-left:  ${275/19.2}vw;
  width: 13vw;
  height:  ${46/19.2}vw;
`
const Price = styled.p`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 0.9vw;
  line-height:0.5px;
  margin-top:1.4vh;
  color: #202123;
`
const Plus=styled.img`
  width: 1vw;
  height: 1vw;
  margin-left : 1.5vw;
  margin-right : 1.5vw;
  margin-top : 1vw;
`
const MarketPriceBox = styled.div`
  display:flex;
  width: 30vw;
  margin-top:  ${15/19.2}vw;
  margin-left: 1.5vw;
  height: 8vh;
`

const MarketPrice = styled.p`
  margin-left: 0.5vw;
  display:flex;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 0.9vw;
  margin-top: 0vh;
  color: #F0C920;
`
const MarketPrice1 = styled.p`
  display:flex;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 0.9vw;
  margin-top:3vh;
  color: #202123;
`
const OptionOrder = styled.button`
  box-sizing: border-box;
  width: ${211/19.2}vw;
  height: ${43/19.2}vw;
  margin-left:2vw;
  margin-top: ${20/19.2}vw;
  background: ;
  background-color: ${(props) => (props.isActive ? "#F0C920" : "rgba(156, 156, 156, 0.8)")};
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: ${15/19.2}vw;
  line-height: 20px;
  color: #FFFFFF;
  padding :1px;
`
const Check = styled.div`
  margin-top:0vw;
`
const Check2 = styled.div`
  margin-top:2vw;
`
const NoOptionProductForm = styled.div`
  display: flex;
  border-bottom: 1px soild #000;
  border-top: 1px soild #ccc;
  margin-bottom:1vw;
  margin-top:-1vw;
`
const NameBox = styled.div`
  position : relative;
  width:${290/19.2}vw;
  border-right: 0.5px solid black;
  overflow-wrap: break-word; 
  padding: 1vw;
  height:11vh;
//margin-left: 1vw;
`
const PriceText = styled.div`
  width:${230/19.2}vw;
  border-right: 0.5px solid #9C9C9C;
`
const AmountText =styled.div`
  width:${200/19.2}vw;
  border-right: 0.5px solid #9C9C9C;
`
const Text = styled.p`

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: ${15/19.2}vw;
  text-align: center;
  margin-top:6.5vh;
  color: #202123;

`