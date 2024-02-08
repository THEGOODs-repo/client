import React, { useRef } from "react";
import { PurchaseComponent } from "../Purchase/PurchaseComponent";
import styled from "styled-components";

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
        <Button onClick={handleButtonClick}>전체</Button>
        <Button onClick={handleButtonClick}>결제전</Button>
        <Button onClick={handleButtonClick}>결제완료</Button>
        <Button onClick={handleButtonClick}>배송준비</Button>
        <Button onClick={handleButtonClick}>거래종료</Button>
        <Button onClick={handleButtonClick}>주문취소</Button>
        <Button onClick={handleButtonClick}>자동주문취소</Button>
        <Button onClick={handleButtonClick}>삭제됨</Button>
      </ButtonContainer>
      <PurchaseComponent />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 87vw;
  height: 97.2vh;
  margin: 3%;

  h1 {
    font-size: 26px;
    font-weight: bolder;
  }

  h2 {
    font-size: 20px;
    margin-top: 5vh;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 80vw;
  justify-content: space-between;
  text-align: center;
`;

const SubContainer = styled.div`
  width: 79.4vw;
  height: 19.3vh;
  border: 1.5px dashed;
  border-radius: 5px;

  text-align: center;

  h3 {
    font-size: 16px;
  }
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid #9c9c9c;
  border-radius: 17px;
  background-color: white;
  color: #9c9c9c;
  font-weight: bolder;

  &:hover {
    border: 1.5px solid;
    border-color: black;
    color: black;
  }
`;
