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
  display: flex;
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

  h2 {
    align-self: flex-start;
    margin-top: 5%;
    margin-left: 5%;

    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #202123;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 794px;
  height: 193px;
  margin: 0px;
  border: 1.5px dashed #202123;
  border-radius: 3px;

  h3 {
    margin-top: 0px;
    margin-bottom: 10px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #202123;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  background: #f0c920;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border: none;
  border-radius: 5px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  text-align: center;

  color: #ffffff;
`;
