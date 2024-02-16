import React, { useState, useEffect } from "react";
import styled from "styled-components";
import homeimg from "../../img/home.png";
import plusimg from "../../img/Plus.png"
import Checkbox from './CheckBox';
import OrderModificationModal from "./OrderModificationModal";
import CustomButton from "../Register/CustomButton";
const ProductItem = ({ sellerName, itemName, itemImg, options, totalPrice, deliveryFee, isChecked }) => {
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
            <CustomButton  state={isCheckedAll} onChange={()=>setIsCheckedAll((isCheckedAll)=>!isCheckedAll)} index="isCheckedAll" label=""/> 

          </Check>
          <SellerName>{sellerName}</SellerName>
          <Home src={homeimg} alt='home'/>
        </SellerBox>
        <Divider />
        {hasOptions ? (
          <ProductForm>
            <Check2>
            <CustomButton  state={isCheckedAll} onChange={()=>setIsCheckedAll((isCheckedAll)=>!isCheckedAll)} index="isCheckedAll" label=""/> 
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
                <Checkbox label="" checked={isCheckedAll} onChange={handleCheckboxChange}></Checkbox>
              </Check2>
              <ItemImg src={itemImg} alt={itemName}/>
              <NameBox>
                <SellerName2>{sellerName}</SellerName2>
                <ItemName2>{itemName}</ItemName2>
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
              <Price>{totalPrice}원</Price>
            </div>
            <Plus src={plusimg}></Plus>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Price>배송비</Price>
              <Price>{deliveryFee}원</Price>
            </div>
          </PriceBox>
          <MarketPriceBox>
            <MarketPrice1>주문금액 <MarketPrice>{totalPrice + deliveryFee}원</MarketPrice></MarketPrice1>
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
  width: 10vw;
  height: 10vw;
  margin-left: 1vw;
`
const ItemName = styled.div`
  margin-left:0vw;
  margin-top:0vw;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1.3vw;
  color: #202123;
`
const ItemName2 = styled.div`
  margin-left:1vw;
  margin-top:2vh;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1.3vw;
  color: #202123;
`
const Divider = styled.hr`
  border: 0.5px solid #202123;
  margin-bottom: 1vw;
  margin-top: -1vw;
`;
const Divider2 = styled.hr`
  border: 0.5px solid #202123;

`;
const OptionSellerItem = styled.div`
  
margin-left: 1vw;
`
const SellerName2 = styled.p`
  //flex-direction: column;
  
  width: 25vw;
  //margin-left: 1vw;
  //margin-top: 1vh;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #9C9C9C;
`
const ModifyOrder = styled.button`
  box-sizing: border-box;
  width: 5vw;
  height: 2vw;
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  margin-left: 1vw;
  margin-top: 4vw;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  color: #888888;
  background:#FEFDFD;
`
const ModifyOrder2 = styled.button`
  box-sizing: border-box;
  width: 5vw;
  height: 2vw;
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  margin-left: 3vw;
  margin-top: 8vh;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  color: #888888;
  background:#FEFDFD;
`
const OptionForm = styled.div`
  margin-top:vh;
  display:flex;
  padding-left: 2vw;
  margin-left: 3vw;
  width: 42vw;
  height: 5vw;
  border-bottom: 1px solid rgba(156, 156, 156, 0.5);
  background: rgba(156, 156, 156, 0.08);
  border-radius: 5px 5px 0px 0px;

`
const OptionText = styled.div`
  margin-top: 2vw;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1.1vw;
  color: #202123;
  text-align: center;
`

const PriceBox = styled.div`
  display:flex;
  border-right: 0.5px solid black;
  margin-top: 5vh;
  margin-left: 4vw;
  width: 15vw;
  height: 8vh;
`
const Price = styled.p`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 0.9vw;
  line-height:0.3vw;
  margin-top:1.5vh;
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
  margin-top: 5vh;
  margin-left: 2vw;
  height: 8vh;
`

const MarketPrice = styled.p`
  margin-left: 1vw;
  display:flex;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1vw;
  margin-top: 0vh;
  color: #F0C920;
`
const MarketPrice1 = styled.p`
  display:flex;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1vw;
  margin-top:3vh;
  color: #202123;
`
const OptionOrder = styled.button`
  box-sizing: border-box;
  width: 15vw;
  height: 8vh;
  margin-left:2vw;
  background: ;
  background-color: ${(props) => (props.isActive ? "#F0C920" : "rgba(156, 156, 156, 0.8)")};
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #FFFFFF;

`
const Check = styled.div`
  margin-top:0.5vw;
`
const Check2 = styled.div`
  margin-top:5vw;
`
const NoOptionProductForm = styled.div`
  display: flex;
  border-bottom: 1px soild #000;
  border-top: 1px soild #ccc;
  margin-bottom:1vw;
`
const NameBox = styled.div`
  position : relative;
  width:18vw;
  border-right: 0.5px solid black;
`
const PriceText = styled.div`
  width:12vw;
  border-right: 0.5px solid black;
`
const AmountText =styled.div`
  width:10vw;
  border-right: 0.5px solid black;
`
const Text = styled.p`

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  text-align: center;
  margin-top:9vh;
  color: #202123;

`