import React, { useState, useEffect } from "react";
import arrow from "../img/chevron-right.png";
import styled from "styled-components";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import axios from "axios";
import { useSelector } from "react-redux";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import HeaderComponent from "../Components/Header/Header";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";
import BaseFooter from "../Components/Footer/BaseFooter";

const ShoppingList = () => {
  const token = useSelector((state) => state.login.token);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItemCount, setSelectedItemCount] = useState(0);
  const [cartData, setCartData] = useState([]);
  const selectedItems = useSelector((state) => state.selectedItems); // Redux store에서 selectedItems 가져오기

  const fetchData = async () => {
    try {
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        "https://dev.the-goods.store/api/cart",
        header,
      );
      console.log(response);
      setCartData(response.data.result.cartViewDTOList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTotalPriceChange = (price, isChecked) => {
    setTotalPrice((prevPrice) => {
      if (isChecked) {
        return prevPrice + price; // 체크된 상품의 가격을 추가
      } else {
        return prevPrice - price; // 체크가 해제된 상품의 가격을 제외
      }
    });
  };

  return (
    <Container>
      <HeaderComponent />
      <NavWrapContainer>
        <NavigationMenu />
        <div
          style={{
            borderBottom: "1px solid #9C9C9C",
            width: "100%",
            height: "3px",
          }}
        ></div>
        <NavigationCategoryMenu />
      </NavWrapContainer>
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
      <ShoppingCart cartItems={cartData}></ShoppingCart>
      <BaseFooter></BaseFooter>
    </Container>
  );
};

export default ShoppingList;

const Container = styled.div``;
const NavWrapContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Header = styled.div`
  display: flex;
  height: ${75 / 19.2}vw;
`;

const Title = styled.p`
  position: display;
  margin-left: ${317 / 19.2}vw;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: ${26 / 19.2}vw;
  color: #202123;
`;

const Breadcrumb = styled.div`
  display: flex;
  margin-left: ${1010 / 19.2}vw;
`;

const Item = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: ${24 / 19.75}vh;
  color: #9c9c9c;
  text-align: center;
  margin-top: 3vh;
`;

const BoldItem = styled(Item)`
  font-weight: 700;
  color: #202123;
`;

const Arrow = styled.img`
  width: ${24 / 19.2}vw;
  height: ${24 / 19.2}vw;
  margin-top: 0.8vh;
`;

const ArrowParent = styled.div`
  margin-top: 1vw;
`;

const Divider = styled.hr`
  border: 1px solid #ddd;
  margin: 0 0;
`;

const BottomExplain = styled.div`
  font-family: "Noto Sans";
  border-radius: 10px;
  background: #f4f4f5;
  width: ${1130 / 19.2}vw;
  height: ${104 / 19.2}vw;
  margin-left: ${375 / 19.2}vw;
  margin-top: 10px;
  padding: 0.3vw;
  padding-left: 2vw;
  font-size: ${14 / 19.2}vw;
  color: #52555b;
  font-weight: 400;
`;
const Order = styled.div`
  margin-top: 10px;
  background: #f0c920;
  height: 12vh;
  display: flex;
`;

const TotalPrice = styled.p`
  position: display;
  display: flex;
  margin-left: 48vw;
  margin-top: 4.5vh;
  color: #fff;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5vw;
`;

const PriceNumber = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.8vw;
  color: #ffffff;
  margin-top: 0.25vw;
  line-height: 1.5vw;
  margin-left: 0.4vw;
`;

const OrderButton = styled.button`
  position: absolute;
  background-color: #ffffff;
  color: black;
  margin-left: 65vw;
  border: none;
  border-radius: 5px;
  margin-top: 1.8vw;
  height: 3vw;
  width: 13vw;
  font-family: "Noto Sans";
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
`;
