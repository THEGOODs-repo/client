import React,{useState} from "react";
import arrow from"../img/chevron-right.png";
import styled from "styled-components";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import IU from "../img/iu.png";
import Checkbox from "../Components/ShoppingCart/CheckBox";
const ShoppingList = () =>{

    const [selectAll, setSelectAll] = useState(false); // 전체 선택 상태를 저장하는 상태 변수
    const [totalPrice, setTotalPrice] = useState(0); // 선택한 제품의 총 합을 저장하는 상태 변수
    const [selectedItemCount, setSelectedItemCount] = useState(0); // 선택한 제품 수를 저장하는 상태 변수
  
    const [isChecked, setIsChecked] = useState(false);

    // 체크박스 상태 변경 핸들러
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };

    // 전체 선택 체크박스가 변경될 때 호출되는 함수
    const handleSelectAllChange = () => {
      setSelectAll(!selectAll); // 전체 선택 상태를 토글
    };
    const handleOrderButtonClick = () => {
      console.log("선택한 상품 수:", selectedItemCount);
    };

    const cartData = [
      {
        sellerName: "test_seller",
        itemName: "뉴진스 포카",
        itemImg: IU,
        deliveryFee: 3000,
        cartDetailViewDTOList: [
          {
            optionName: "해린 포카",
            price: 1000,
            amount: 1,
          },
          {
            optionName: "민지 포카",
            price: 2000,
            amount: 6,
          },
          {
            optionName: "하니 포카",
            price: 3000,
            amount: 3,
          },
        ],
      },
      {
        sellerName: "test_seller",
        itemName: "아이브 포카",
        itemImg: "img url",
        deliveryFee: 2000,
        cartDetailViewDTOList: [
          {
            optionName: "원영 포카",
            price: 1000,
            amount: 3,
          },
        ],
      },
      {
        sellerName: "test_seller",
        itemName: "카리나 포카",
        itemImg: "img url",
        deliveryFee: 3000,
        cartDetailViewDTOList: [
          {
            optionName: null,
            price: 3000,
            amount: 1,
          },
        ],
      },
    ];
  return(
    <Container>
      <Header>
        <Title>장바구니</Title>
        <Breadcrumb>
          <BoldItem>장바구니</BoldItem>
          <ArrowParent>
            <Arrow src={arrow} alt="arrow" />
          </ArrowParent>
          <Item>주문/결제</Item>
          <ArrowParent>
            <Arrow src={arrow} alt="arrow" />
          </ArrowParent>
          <Item>완료</Item>
        </Breadcrumb>
      </Header>
      <Divider />
      
      {cartData.length > 0 && (
        <>
        <div style={{display:"flex", marginLeft:'20%', marginTop:'10px', marginBottom:'0px',}}>
          <Checkbox label="전체 선택" checked={isChecked} onChange={handleCheckboxChange}></Checkbox> 
          <Deletebutton>X 삭제</Deletebutton>
        </div>
          <Divider />
          </>
      )}

          <ShoppingCart cartItems={cartData}></ShoppingCart>
          
        {cartData.length > 0 && (
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
              총 주문 금액 <PriceNumber>{totalPrice}</PriceNumber>원
            </TotalPrice>
            <OrderButton onClick={handleOrderButtonClick}>
              총 주문하기<ItemCount>{selectedItemCount}</ItemCount>
            </OrderButton>
          </Order>
        </>
      )}
    </Container>
  );
};

export default ShoppingList;

const Container = styled.div``;

const Header = styled.div`
  display: flex;
`;

const Title = styled.p`
  position: display;
  margin-left: 20%;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.8vw;
  color: #202123;
  margin-top: 2vw;
`;

const Breadcrumb = styled.div`
  display: flex;
  margin-left:40vw
`;

const Item = styled.p`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2vw;
  color: #9C9C9C;
  margin-top: 2.5vw;
  text-align: center; 
`;

const BoldItem = styled(Item)`
  font-weight: 700;
  color: #202123;
`;

const Arrow = styled.img`
  width:2vw;
  height:2vw;
`;

const ArrowParent = styled.div`
  margin-top:2vw;
`

const Divider = styled.hr`
  border: 1px solid #ddd;
  margin: 0 10px;
`;

const Deletebutton = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 5vw;
  height: 2vw;
  margin-left: 53vw;
  margin-bottom: 0.5vw;
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2vw;
  line-height: 2vw;
  text-align: center;
  color: #888888;
`
const BottomExplain = styled.div`
  font-family: 'Noto Sans';
  border-radius: 10px;
  background: #f4f4f5;
  width: 60vw;
  margin-left: 20vw;
  margin-top: 10px;
  padding:0.3vw;
  padding-left:2vw;
  font-size:1vw;
  color:#52555B;
  font-weight: 400;
`;
const Order = styled.div`
  margin-top:10px;
  background:#F0C920;
  height: 8vw;
  display:flex;
`

const TotalPrice = styled.p`
  position: display; 
  margin-left: 50vw;
  margin-top: 3vw;
  color:#fff;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5vw;
`;

const PriceNumber = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.8vw;
  color: #FFFFFF;
`;

const OrderButton = styled.button`
  position: absolute;
  background-color: #ffffff;
  color: black;
  margin-left:67vw;
  border: none;
  border-radius: 5px;
  margin-top: 2vw;
  height: 4vw;
  width: 15vw;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5vw;
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

const checkboxStyle={
  width: '1.2vw',
  height: '1.2vw',
  backgroundColor:'#fff',
  accentColor: '#F0C920',
  marginLeft:'20%',
  marginTop:'10px',
  marginBottom:'10px',
}
const labelStyle={
  position:'absolute',
  fontWeight: '700',
  color: '#202123',
  fontSize:'1.2vw',
  padding:'10px',
  marginBottom:'1vw',
}
