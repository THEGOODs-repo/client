import React from 'react';
import styled from "styled-components";
import homeimg from "../../img/home.png";
import plusimg from "../../img/Plus.png"
const ProductItem = ({ sellerName, itemName, itemImg, options, totalPrice, deliveryFee }) => {
  
  return (
    <Form>
      <SellerBox>
      <SellerName>{sellerName}</SellerName>
      <Home src={homeimg} alt='home'/>
      </SellerBox>
      <Divider />
      <ProductForm>
        <ItemImg src={itemImg} alt={itemName}/>
        <ItemNameBox>
          <ItemName>{itemName}</ItemName>
        
        <SellerName2>{sellerName}</SellerName2>
        </ItemNameBox>
        <ModifyOrder>주문수정</ModifyOrder>
      </ProductForm>
      <Divider2 />
      {options.map((option, idx) => (
      <OptionForm>
        <OptionNameBox>
          <OptionName>{option.optionName}</OptionName>
        </OptionNameBox>
        <OptionPriceBox>
          <OptionPrice>{option.price}원</OptionPrice>
        </OptionPriceBox>
        <OptionAmountBox>
          <OptionAmount>{option.amount}개</OptionAmount>
        </OptionAmountBox>
      </OptionForm>
      ))}
      <div style={{display:'flex'}}>
      <PriceBox>
          <div style={{display:'flex',flexDirection: 'column', alignItems: 'center'}}>
            <Price>상품 금액</Price>
            <Price>{totalPrice}원</Price>
          </div>
          <Plus src={plusimg}></Plus>
          <div style={{display:'flex',flexDirection: 'column', alignItems: 'center'}}>
            <Price>배송비</Price>
            <Price>{deliveryFee}원</Price>
          </div>
      </PriceBox>
      <MarketPriceBox>
        <MarketPrice1>주문금액 <MarketPrice>{totalPrice + deliveryFee}원</MarketPrice></MarketPrice1>
        <OptionOrder>{sellerName} 0건 주문하기</OptionOrder>
      </MarketPriceBox>
    </div>
   
    </Form>
  );
};

export default ProductItem;

const Form = styled.div`
  width: 64vw;
  min-height: 25vh;
  margin-left:18vw;
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
  margin-left: 3vw;
`

const SellerName = styled.p`
  margin-top: 0vw;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 2vw;
  color: #202123;
  margin-right: 0.5vw;

`
const Home=styled.img`
  width: 2vw;
  height: 2vw;
`
const ProductForm = styled.div`
  display: flex;
  border-bottom: 1px soild #000;
  border-top: 1px soild #ccc;
`
const ItemImg = styled.img`
  width: 10vw;
  height: 10vw;
  margin-left: 3vw;
`
const ItemName = styled.div`
  margin-left:1vw;
  margin-top:3vh;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.3vw;
  color: #202123;
`
const ItemNameBox= styled.div`
  width:40vw;
  border-right: 0.5px solid black;
  display: flex;
`
const Divider = styled.hr`
  border: 0.5px solid #202123;
  margin-bottom: 1vw;
  margin-top: -1vw;
`;
const Divider2 = styled.hr`
  border: 0.5px solid #202123;
  margin-bottom: 1vh;
  margin-top: 1vw;
`;

const SellerName2 = styled.p`
  //flex-direction: column;
  width: 85px;
  margin-left: -6vw;
  margin-top: 13vh;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  color: #9C9C9C;
`
const ModifyOrder = styled.button`
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
`
const OptionForm = styled.div`
  margin-top:-1vh;
  //background-color:gray;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-left: 13vw;
  width: 40vw;
  height: 8vh;
  border-bottom: 0.5px solid black;
`
const OptionNameBox = styled.div`
  width: 16vw;
  height: 8vh;
  border-right: 0.5px solid black;
`
const OptionName = styled.div`
  margin-left: 2vw;
  margin-top: 3vh;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.1vw;
  color: #202123;
`
const OptionPriceBox = styled.div`
  width: 12vw;
  height: 8vh;
  border-right: 0.5px solid black;
`
const OptionPrice = styled.div`
  margin-top: 3vh;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.1vw;
  color: #202123;
  text-align: center;
`
const OptionAmountBox = styled.div`
  width: 12vw;
  height: 8vh;
  align-items: center;
  justify-content: center;
`
const OptionAmount = styled.div`
  margin-top: 3vh;
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
  margin-left: 13vw;
  width: 15vw;
  height: 8vh;
`
const Price = styled.p`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1vw;
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
background: rgba(156, 156, 156, 0.8);
border: 1px solid rgba(156, 156, 156, 0.5);
box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
border-radius: 5px;


/* 옵션상품 마켓 0건 주문하기 */

font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 20px;

color: #FFFFFF;


`