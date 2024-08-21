import React, { useEffect, useState } from "react";
import styled from "styled-components";
import X from "../../img/x.png";
import axios from "axios";
import { useSelector } from "react-redux";
import CustomButton from "../Global/CustomButton";

const OrderModificationModal = ({
  cartOptionViewDTOList,
  onClose,
  stockInfo,
}) => {
  const [selectedOptions, setSelectedOptions] = useState(
    cartOptionViewDTOList || [],
  );
  const [localSelectedOptions, setLocalSelectedOptions] = useState(
    selectedOptions
      ? selectedOptions.map((option) => ({ ...option, isChecked: false }))
      : [],
  );

  useEffect(() => {
    if (selectedOptions) {
      setLocalSelectedOptions(
        selectedOptions.map((option) => ({ ...option, isChecked: false })),
      );
    }
  }, [selectedOptions]);

  const handleDecreaseAmount = () => {
    const updatedOptions = selectedOptions.map((option) => {
      // amount가 1보다 큰 경우에만 줄어들도록 수정
      return {
        ...option,
        amount: option.amount > 1 ? option.amount - 1 : option.amount,
      };
    });
    setSelectedOptions(updatedOptions);
  };

  const handleIncreaseAmount = () => {
    const updatedOptions = selectedOptions.map((option) => {
      const stockQuantity = getStockQuantity(option.itemOptionId);
      if (option.amount + 1 <= stockQuantity) {
        return {
          ...option,
          amount: option.amount + 1,
        };
      }
      return option;
    });
    setSelectedOptions(updatedOptions);
  };

  const handleToggleOption = (cartDetailId) => {
    const updatedOptions = localSelectedOptions.map((option) => {
      if (option.cartDetailId === cartDetailId) {
        return {
          ...option,
          isChecked: !option.isChecked,
        };
      }
      return option;
    });

    setLocalSelectedOptions(updatedOptions);
  };

  const handleToggleAllOptions = () => {
    const allSelected = localSelectedOptions.every(
      (option) => option.isChecked,
    );

    const newOptions = localSelectedOptions.map((option) => ({
      ...option,
      isChecked: !allSelected,
    }));

    setLocalSelectedOptions(newOptions);
    setSelectedOptions(newOptions);
  };

  const token = useSelector((state) => state.login.token);
  const handleConfirmChanges = () => {
    const requestBody = {
      cartUpdateDTOList: selectedOptions.map((option) => ({
        cartId: option.cartId,
        amount: option.amount,
      })),
    };

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .put("https://dev.the-goods.store/api/cart", requestBody, header)
      .then((response) => {
        console.log("API 요청이 성공적으로 완료되었습니다.");
        onClose();
        window.location.reload();
      })
      .catch((error) => {
        console.error("API 요청이 실패하였습니다.", error);
      });
  };

  const handleDeleteSelectedOptions = () => {
    const deletedOptionIds = localSelectedOptions
      .filter((option) => option.isChecked)
      .map((option) => option.cartId);

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .delete("https://dev.the-goods.store/api/cart/detail/delete", {
        ...header,
        data: { cartIdList: deletedOptionIds },
      })
      .then((response) => {
        console.log("옵션 삭제 요청이 성공적으로 완료되었습니다.");
        window.location.reload();
      })
      .catch((error) => {
        console.error("옵션 삭제 요청이 실패하였습니다.", error);
      });
  };

  const getStockQuantity = (itemOptionId) => {
    if (stockInfo && Array.isArray(stockInfo)) {
      // 재고 정보 배열을 순회하면서 itemOptionId와 일치하는 아이템을 찾습니다.
      for (const stockData of stockInfo) {
        // itemOptionId가 null이거나 일치하는 경우 재고를 반환합니다.
        if (
          stockData.itemOptionId === itemOptionId ||
          stockData.itemOptionId === null
        ) {
          return stockData.stock; // 해당 아이템의 재고를 반환합니다.
        }
      }
    }
    return 0; // 재고 정보가 없으면 0을 반환합니다.
  };

  return (
    <ModalOverlay>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex" }}>
          <Title>주문 수정</Title>
          <XImg src={X} alt="X" onClick={onClose}></XImg>
        </div>
        <Divider />
        <Container>
          <OptionContainer>
            <CustomButton
              state={selectedOptions.every((option) => option.isChecked)}
              onChange={() =>
                handleToggleAllOptions((selectedOptions) => !selectedOptions)
              }
              index="selectedOptions"
              label="전체 선택"
            />

            <DeleteButton onClick={handleDeleteSelectedOptions}>
              X 선택 삭제
            </DeleteButton>
          </OptionContainer>
          {selectedOptions.map((option, index) => (
            <OptionContainer key={index}>
              <OptionItem>
                <CheckPosition>
                  <CustomButton
                    state={option.isChecked}
                    onChange={() => handleToggleOption(option.cartId)}
                    index={option.cartId}
                    label=""
                  />
                </CheckPosition>
                <div style={{ width: "20vw", display: "flex" }}>
                  <OptionName>{option.optionName}</OptionName>
                  <Stock>
                    남은 재고 : {getStockQuantity(option.itemOptionId)}개
                  </Stock>
                </div>

                <QuantityControl>
                  <Button onClick={() => handleDecreaseAmount()}>-</Button>
                  <AmountInput>
                    <span style={{ marginTop: "9px" }}>{option.amount}</span>
                  </AmountInput>

                  <Button
                    onClick={() => handleIncreaseAmount()}
                    disabled={
                      option.amount >= getStockQuantity(option.itemOptionId)
                    }
                  >
                    +
                  </Button>
                </QuantityControl>
              </OptionItem>
            </OptionContainer>
          ))}
        </Container>
        <CloseButton onClick={handleConfirmChanges}>확인</CloseButton>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default OrderModificationModal;

const ModalOverlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 30vw;
  height: 60vh;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.6vw;
  width: 10vw;
  margin-bottom: 16px;
`;
const XImg = styled.img`
  width: 2.5vw;
  height: 2.5vw;
  margin-left: 21vw;
  margin-top: 2vh;
`;
const Container = styled.div`
  max-height: 44vh;
  overflow-y: auto;
`;
const OptionContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;
const DeleteButton = styled.button`
  box-sizing: border-box;
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  width: 7vw;
  padding: 6px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  text-align: center;
  margin-left: 16.6vw;
  color: #888888;
  background: white;
  border: 1.5px solid rgba(156, 156, 156, 0.8);
`;
const OptionItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  border: 1px solid #9c9c9c;
  border-radius: 2px;
  width: 30vw;
  padding: 2px;
`;

const OptionName = styled.p`
  margin-right: 0px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.1vw;
  line-height: 20px;
  color: #52555b;
`;

const AmountInput = styled.div`
  width: 2vw;
  height: 3vh;
  border-top: 1px solid rgba(32, 33, 35, 0.8);
  border-bottom: 1px solid rgba(32, 33, 35, 0.8);
  text-align: center;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  line-height: 3vh;
  font-size: 1vw;
  color: #202123;
`;

const CloseButton = styled.button`
  position: absolute;
  background: #f0c920;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  border: none;
  text-align: center;
  width: 9vw;
  height: 7vh;
  top: 57vh;
  margin-left: 10vw;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2vw;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
`;
const Divider = styled.hr`
  border: 0.5px solid #202123;
  margin-bottom: 1vw;
  margin-top: -0.5vw;
`;
const QuantityControl = styled.div`
  display: flex;
  margin-left: 0vw;
`;
const Button = styled.div`
  width: 1.5vw;
  height: 3vh;
  text-align: center;
  border: 1px solid rgba(32, 33, 35, 0.8);
  cursor: pointer;
`;
const CheckPosition = styled.div`
  margin-left: 1vw;
`;
const Stock = styled.p`
  margin-left: 5vw;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  line-height: 25px;
  color: #52555b;
`;
