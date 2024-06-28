import React from "react";
import styled from "styled-components";
//마이페이지_배송환불관리
// 특이사항 ** 등록하기 버튼을 누른 후 나오는 팝업창 필요 **
// 특이사항 ** 배송지 정보와 환불정보가 등록되었을 때 보이는 컴포넌트 필요 (삭제하는 기능도 필요) **

export default function ManageShippingRefund() {
  const handleButtonClick = (e) => {};

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
  width: 717.75px;
  height: 950px;
  border: 2.475px solid rgba(0, 0, 0, 0.05);

  h1 {
    align-self: flex-start;
    margin-top: 33px;
    margin-left: 28.875px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 21.45px;
    line-height: 29.925px;
    color: #202123;
  }

  h2 {
    align-self: flex-start;
    margin-top: 12.3835px;
    margin-left: 28.875px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16.5px;
    line-height: 22.275px;
    color: #202123;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 655.35px;
  height: 159.075px;
  margin: 0px;
  border: 1.2375px dashed #202123;
  border-radius: 2.3625px;

  h3 {
    margin-top: 0px;
    margin-bottom: 8.25px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 13.2px;
    line-height: 18.15px;
    color: #202123;
  }
`;

const Button = styled.button`
  width: 82.5px;
  height: 33px;
  background: #f0c920;
  box-shadow: 0px 0px 4.125px 1.2375px rgba(0, 0, 0, 0.08);
  border: none;
  border-radius: 4.125px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12.375px;
  line-height: 16.5px;
  text-align: center;
  color: #ffffff;
`;
