import React from "react";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 78.3vw;
  height: 15vh;
  border: 1px solid #9c9c9c;
  border-radius: 10px;
`;

export const RightContainer = styled.div`
  width: 15vw;
  height: 15vh;
  background-color: #9c9c9c;
`;

export const InformationContainer = styled.div`
  display: flex;
  width: 63.3vw;
  height: 15vh;

  h1 {
    font: 16px;
    color: #9c9c9c;
  }

  h2 {
    font: 16px;
    font-weight: bolder;
    color: black;
  }

  h3 {
    font: 12px;
    color: #52555b;
  }
`;

export const PriceContainer = styled.img`
  display: flex;
  width: 20vw;
  height: 15vh;

  h1 {
    font: 16px;
    color: #9c9c9c;
  }

  h2 {
    font: 16px;
    font-weight: bolder;
    color: black;
  }

  h3 {
    font: 12px;
    color: #52555b;
  }
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid #9c9c9c;
  border-radius: 17px;
  background-color: white;
  font-weight: bolder;
`;

export function PurchaseComponent() {
  const fileInput = React.useRef(null);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  return (
    <MainContainer>
      <RightContainer>사진</RightContainer>
      <InformationContainer>
        <h1>결제전</h1>
        <h2>케이스 종이 스티커</h2>
        <h3>옵션: 나 홀로 집에 1건</h3>
      </InformationContainer>
      <PriceContainer>
        <h1>10,000원</h1>
        <Button onClick={handleButtonClick}>문의하기</Button>
      </PriceContainer>
    </MainContainer>
  );
}
