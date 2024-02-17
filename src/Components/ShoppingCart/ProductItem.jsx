import React, { useState, useEffect } from "react";
import styled from "styled-components";
import homeimg from "../../img/home.png";
import plusimg from "../../img/Plus.png"
import Checkbox from './CheckBox';
import OrderModificationModal from "./OrderModificationModal";
import CustomButton from "../Register/CustomButton";
const ProductItem = ({ sellerName, itemName, itemImg, options, deliveryFee, isChecked }) => {
  const [isCheckedAll, setIsCheckedAll] = useState(isChecked);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태 추가
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(isChecked);

  // 전체 선택 상태가 변경될 때 isCheckedAll 상태 업데이트
  useEffect(() => {
    setIsCheckedAll(isChecked);
  }, [isChecked]);

  // 체크박스 상태 변경 핸들러
  const handleCheckboxChange = (event) => {
    setIsCheckedAll(event.target.checked);
    setIsCheckboxChecked(event.target.checked);
    
  };

  const handleModifyOrderClick = () => {
    setIsModalOpen(true);
  };
  // 각 옵션의 가격과 개수를 곱하여 합산하는 함수
  const calculateOptionTotalPrice = () => {
    let totalPrice = 0;
    options.forEach(option => {
      totalPrice += option.price * option.amount;
    });
    return totalPrice;
  };
  // 옵션이 있는지 여부 확인
  const hasOptions = options.some(option => option.optionName !== null);
  const firstItem = options[0];
  const firstItemPrice = firstItem.price;
  const firstItemAmount = firstItem.amount;

  return (
    <>
      <Form>
        <SellerBox>
          <Check>
            <CustomButton  state={isCheckedAll} onChange={()=>setIsCheckedAll((isCheckedAll)=>!isCheckedAll)} index={itemName} label=""/> 

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
                options={options}
                onClose={() => setIsModalOpen(false)} // 모달 닫기 핸들러
              />
            )}
          </ProductForm>
        ) : (
          <>
            <NoOptionProductForm>
              <Check2>
            <CustomButton  state={isCheckedAll} onChange={()=>setIsCheckedAll((isCheckedAll)=>!isCheckedAll)} index={itemName} label=""/> 
              </Check2>
              <ItemImg2 src={itemImg} alt={itemName}/>
              <NameBox>
                <div style={{marginTop:'2vh'}}>
                <SellerName2>{sellerName}</SellerName2></div>
                <ItemName>{itemName}</ItemName>
              </NameBox>
              <PriceText><Text>{firstItemPrice}원</Text></PriceText>
              <AmountText><Text>{firstItemAmount}개</Text></AmountText>
              <ModifyOrder2 onClick={handleModifyOrderClick}>주문수정</ModifyOrder2>
              {isModalOpen && (
                <OrderModificationModal
                  options={options}
                  onClose={() => setIsModalOpen(false)} // 모달 닫기 핸들러
                />
              )}
            </NoOptionProductForm>
            <Divider2></Divider2>
          </>
        )}

        {hasOptions && options.map((option, idx) => (
          // 옵션 이름이 null이 아닌 경우에만 렌더링
          option.optionName !== null && (
            <OptionForm key={idx}>
              <OptionText>선택 {idx + 1} : {option.optionName} / {option.price}원 ({option.amount}개)</OptionText>
            </OptionForm>
          )
        ))}

        <div style={{ display: 'flex' }}>
          <PriceBox>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Price>상품 금액</Price>
              <Price>{calculateOptionTotalPrice()}원</Price>
            </div>
            <Plus src={plusimg}></Plus>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Price>배송비</Price>
              <Price>{deliveryFee}원</Price>
            </div>
          </PriceBox>
          <MarketPriceBox>
            <MarketPrice1>주문금액 <MarketPrice>{calculateOptionTotalPrice() + deliveryFee}원</MarketPrice></MarketPrice1>
            <OptionOrder onClick={() => isCheckboxChecked && console.log("click")} isActive={isCheckedAll}>
              {sellerName} 0건 주문하기
            </OptionOrder>
          </MarketPriceBox>
        </div>
      </Form>
    </>
  );
};

export default ProductItem;


const Form = styled.div`
  width: 50vw;
  min-height: 25vh;
  margin-left:25vw;
  margin-top:3vh;
  margin-bottom:3vh;
  flex-direction: column;
  align-items: stretch; 
  background: #FEFDFD;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding:1.5vw;
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
  font-size: 1.5vw;
  color: #202123;
  margin-right: 0.5vw;
  margin-left: 1vw;
`
const Home=styled.img`
  width: 1.5vw;
  height: 1.5vw;
`
const ProductForm = styled.div`
  display: flex;
  border-bottom: 1px soild #000;
  border-top: 1px soild #ccc;
  margin-bottom:1vw;
`
const ItemImg = styled.img`
  width: 6.5vw;
  height: 6.5vw;
  margin-left: 1vw;
`
const ItemImg2 = styled.img`
  width: 6.5vw;
  height: 6.5vw;
  margin-left: 1vw;
  margin-top:1.5vh;
`
const ItemName = styled.div`
  margin-left:0vw;
  margin-top:-0.5vw;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
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
  width:30vw;
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
  font-size: 13px;
  color: #9C9C9C;
`
const ModifyOrder = styled.button`
  box-sizing: border-box;
  width: 4.5vw;
  height: 2vw;
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  margin-left: 2vw;
  margin-top: 4vh;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 0.9vw;
  color: #888888;
  background:#FEFDFD;
`
const ModifyOrder2 = styled.button`
  box-sizing: border-box;
  width: 4.5vw;
  height: 2vw;
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  margin-left: 2vw;
  margin-top: 5.5vh;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 0.9vw;
  color: #888888;
  background:#FEFDFD;
`
const OptionForm = styled.div`
  margin-top:vh;
  display:flex;
  padding-left: 2vw;
  margin-left: 3vw;
  width: 45vw;
  height: 6vh;
  border-bottom: 1px solid rgba(156, 156, 156, 0.5);
  background: rgba(156, 156, 156, 0.08);
  border-radius: 5px 5px 0px 0px;

`
const OptionText = styled.div`
  margin-top: 2vh;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  color: #202123;
  text-align: center;
`

const PriceBox = styled.div`
  display:flex;
  border-right: 0.5px solid black;
  margin-top: 3vh;
  margin-left: 8vw;
  width: 14vw;
  height: 6vh;
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
  margin-top: 2vh;
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
  width: 13vw;
  height: 5vh;
  margin-left:2vw;
  margin-top:1.5vh;
  background: ;
  background-color: ${(props) => (props.isActive ? "#F0C920" : "rgba(156, 156, 156, 0.8)")};
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  //font-size: 15px;
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
  width:13vw;
  border-right: 0.5px solid black;
  overflow-wrap: break-word; 
  padding: 1vw;
  height:11vh;
//margin-left: 1vw;
`
const PriceText = styled.div`
  width:8.5vw;
  border-right: 0.5px solid #9C9C9C;
`
const AmountText =styled.div`
  width:8.5vw;
  border-right: 0.5px solid #9C9C9C;
`
const Text = styled.p`

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 0.9vw;
  text-align: center;
  margin-top:6.5vh;
  color: #202123;

`