import React, { useRef } from "react";
import styled from "styled-components";

//마이페이지_배송환불관리
export default function ManageShippingRefund() {
  const fileInput = React.useRef(null);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  return (
    <MainContainer>
      <h1>배송 · 환불 정보</h1>
      <h2>배송지 정보</h2>
      <SubContainer>
        <h3> 배송지 정보가 없어요.</h3>
        <Button onClick={handleButtonClick}>등록하기</Button>
      </SubContainer>
      <h2>환불 정보</h2>
      <SubContainer>
        <h3> 환불 정보가 없어요.</h3>
        <Button onClick={handleButtonClick}>등록하기</Button>
      </SubContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
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
  width: 10vw;
  height: 4vh;
  border: none;
  border-radius: 5px;
  color: white;
  background: #f0c920;
`;
