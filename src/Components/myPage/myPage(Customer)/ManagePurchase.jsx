import React from "react";
import { BeforePurchase } from "../ManagePurchase/BeforePurchase";
import { CompletePurchase } from "../ManagePurchase/CompletePurchase";
import { ReadyToDelivery } from "../ManagePurchase/ReadyToDelivery";
import styled from "styled-components";
import { StartDelivery } from "../ManagePurchase/StartDelivery";
import { CompleteDelivery } from "../ManagePurchase/CompleteDelivery";

//마이페이지_구매관리
export default function ManagePurchase() {
  const fileInput = React.useRef(null);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  return (
    <MainContainer>
      <h1>구매관리</h1>
      <ButtonContainer>
        <Button style={{ width: 65, height: 37 }} onClick={handleButtonClick}>
          전체
        </Button>
        <Button style={{ width: 73, height: 37 }} onClick={handleButtonClick}>
          결제전
        </Button>
        <Button style={{ width: 86, height: 37 }} onClick={handleButtonClick}>
          결제완료
        </Button>
        <Button style={{ width: 86, height: 37 }} onClick={handleButtonClick}>
          배송준비
        </Button>
        <Button style={{ width: 86, height: 37 }} onClick={handleButtonClick}>
          거래종료
        </Button>
        <Button style={{ width: 86, height: 37 }} onClick={handleButtonClick}>
          주문취소
        </Button>
        <Button style={{ width: 110, height: 37 }} onClick={handleButtonClick}>
          자동주문취소
        </Button>
        <Button style={{ width: 73, height: 37 }} onClick={handleButtonClick}>
          삭제됨
        </Button>
      </ButtonContainer>
      <BeforePurchase />
      <CompletePurchase />
      <ReadyToDelivery />
      <StartDelivery />
      <CompleteDelivery />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 870px;
  height: 972px;
  border: 3px solid rgba(0, 0, 0, 0.05);

  h1 {
    align-self: flex-start;
    margin-top: 5%;
    margin-left: 5%;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 35px;
    color: #202123;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 9%;
  width: 870px;
`;

const Button = styled.button`
  margin-left: 4px;
  border: 1px solid #9c9c9c;
  border-radius: 20px;
  background-color: white;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;

  color: #9c9c9c;

  &:hover {
    border: 1.5px solid;
    border-color: black;

    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    text-align: center;

    color: #202123;
  }
`;
