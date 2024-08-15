import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import styled from "styled-components";
import arrow from "../../img/chevron-right.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomButton from "../Global/CustomButton";
import axios from "axios";
import { updateSelectedItems } from "./selectedItemsSlice";
import { setOrderItems, emptyOrderItems } from "../../redux/orderSlice";

const ShoppingCart = ({ cartItems }) => {
  const [isTotalChecked, setIsTotalChecked] = useState(false);
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState([]);
  const token = useSelector((state) => state.login.token);
  const [productItemData, setProductItemData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    //console.log("dispatch실행");
    dispatch(updateSelectedItems(selectedItems));
    setTotalPrice(calculateTotalOrderPrice(selectedItems));
  }, [selectedItems]);

  const calculateTotalOrderPrice = (items) => {
    if (!items || !Array.isArray(items)) return 0;

    let totalPrice = 0;
    items.forEach((item) => {
      if (item && typeof item === "object") {
        totalPrice += item.deliveryFee || 0;
        console.log("item", item);
        console.log("cartDTO", item.cartOptionViewDTOList);
        if (Array.isArray(item.cartOptionViewDTOList)) {
          item.cartOptionViewDTOList.forEach((option) => {
            if (option && typeof option === "object") {
              totalPrice += (option.price || 0) * (option.amount || 0);
            }
          });
        }
      }
    });
    return totalPrice;
  };

  const handleOrderButtonClick = () => {
    console.log("selectedItems", selectedItems);
    dispatch(emptyOrderItems());
    selectedItems.forEach((selectedItem) =>
      dispatch(
        setOrderItems({
          itemId: selectedItem.itemId,
          sellerName: selectedItem.sellerName,
          itemName: selectedItem.itemName,
          itemImg: selectedItem.itemImg,
          deliveryFee: selectedItem.deliveryFee,
          optionList: selectedItem.cartOptionViewDTOList.map((detail) => ({
            optionId: detail.optionId,
            optionName: detail.optionName,
            optionPrice: detail.price,
            amount: detail.amount,
          })),
        }),
      ),
    );
    navigate("/payment", { replace: true });
  };

  const handleButtonToggle = () => {
    setIsTotalChecked(!isTotalChecked);
    handleSelectAll(!isTotalChecked);
  };

  const handleContinueShopping = () => {
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Background>
          <EmptyCart>장바구니에 담긴 상품이 없습니다.</EmptyCart>
          <EmptyCart2>원하는 상품을 장바구니에 담아보세요!</EmptyCart2>
          <ContinueShopping onClick={handleContinueShopping}>
            쇼핑 계속하기
            <Arrow src={arrow} alt="arrow" />
          </ContinueShopping>
        </Background>
      </>
    );
  }

  const handleSelectAll = (isChecked) => {
    if (isChecked) {
      let cartIdList = cartItems.map((cartItem) => cartItem.cartId);
      setCheckedItems(cartIdList);
      setSelectedItems(cartItems);
    } else {
      setCheckedItems([]);
      setSelectedItems([]);
    }
  };

  const handleDeleteSelectedItems = () => {
    const cartIdList = selectedItems
      .filter((item) => item !== null)
      .map((item) => item.cartId);

    axios
      .delete("https://dev.the-goods.store/api/cart/delete", {
        data: { cartIdList },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("선택된 상품이 삭제되었습니다.");
        setSelectedItems([]);
        window.location.reload();
      })
      .catch((error) => {
        console.error("상품 삭제 중 오류가 발생했습니다.", error);
      });
  };

  const handleConfirmChanges = (updatedOptions) => {
    setProductItemData(updatedOptions);
  };

  const handleToggleItem = (item, isChecked) => {
    let updatedSelectedItems;
    if (isChecked) {
      updatedSelectedItems = [...selectedItems, item];
      console.log(updatedSelectedItems);
    } else {
      updatedSelectedItems = selectedItems.filter(
        (selectedItem) => selectedItem.cartId !== item.cartId,
      );
      console.log(updatedSelectedItems);
    }
    setSelectedItems(updatedSelectedItems);
  };

  return (
    <div>
      {cartItems.length > 0 && (
        <>
          <div style={{ display: "flex" }}>
            <CheckBoxPosition>
              <CheckBoxPosition1>
                <CustomButton
                  state={isTotalChecked}
                  onChange={handleButtonToggle}
                  index="isChecked"
                  label=""
                />
              </CheckBoxPosition1>
              <CheckBoxlabel>전체 선택</CheckBoxlabel>
            </CheckBoxPosition>
            <Deletebutton onClick={handleDeleteSelectedItems}>
              X 삭제
            </Deletebutton>
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
            cartOptionViewDTOList={cartItem.cartOptionViewDTOList || []}
            deliveryFee={cartItem.deliveryFee}
            onUpdate={handleConfirmChanges}
            isChecked={checkedItems.includes(cartItem.cartId)}
            onToggle={(item, isChecked) => handleToggleItem(item, isChecked)}
          />
        </div>
      ))}
      {cartItems.length > 0 && (
        <>
          <Divider />
          <BottomExplain>
            <p>· 장바구니 상품은 최대 30일간 저장됩니다.</p>
            <p>· 장바구니에는 최대 50개까지 상품을 담으실 수 있습니다.</p>
            <p>
              · 상품이 50개가 넘으면 가장 먼저 담았던 상품이 찜 목록으로
              이동됩니다.
            </p>
          </BottomExplain>
          <Order>
            <TotalPrice>
              총 주문 금액 <PriceNumber>{totalPrice}</PriceNumber>원
            </TotalPrice>
            <OrderButton onClick={handleOrderButtonClick}>
              총 주문하기<ItemCount>{selectedItems.length}</ItemCount>
            </OrderButton>
          </Order>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;

const Background = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  height: 100%;
  width: 100%;
`;
const EmptyCart = styled.p`
  margin-left: 40vw;
  margin-top: 25vh;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.6vw;
  color: #202123;
`;
const EmptyCart2 = styled.p`
  margin-left: 41.5vw;
  margin-top: -1vh;
  font-family: "Noto Sans";
  font-style: normal;
  font-size: 1.2vw;
  font-weight: 400;
  width: 20vw;
  display: flex;
  align-items: center;
  color: #52555b;
`;
const ContinueShopping = styled.button`
  margin-left: 45vw;
  width: 11vw;
  height: 3vw;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.1vw;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #202123;
  background-color: #f9f9f9;
  padding-left: 2vw;
  border: 1px solid rgba(156, 156, 156, 0.5);
  border-radius: 3px;
`;

const Arrow = styled.img`
  width: 1.5vw;
  height: 1.5vw;
`;

const Divider = styled.hr`
  border: 1px solid #ddd;
  margin: 0 0px;
`;
const CheckBoxPosition = styled.div`
  margin-left: ${405 / 19.2}vw;
  height: ${45 / 19.2}vw;
  display: flex;
`;
const CheckBoxPosition1 = styled.div`
  margin-top: ${10 / 19.2}vw;
`;
const CheckBoxlabel = styled.div`
  font-size: ${22 / 19.2}vw;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  //font-size: 16px;
  line-height: ${45 / 19.2}vw;

  color: #202123;
`;
const Deletebutton = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: ${66 / 19.2}vw;
  height: ${28 / 19.2}vw;
  margin-left: ${955 / 19.2}vw;
  margin-top: ${10 / 19.2}vw;
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: ${13 / 19.2}vw;
  line-height: ${28 / 19.2}vw;
  text-align: center;
  color: #888888;
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
