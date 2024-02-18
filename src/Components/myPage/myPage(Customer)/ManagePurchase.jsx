import React from "react";
import { BeforePurchase } from "../ManagePurchase/BeforePurchase";
import { CompletePurchase } from "../ManagePurchase/CompletePurchase";
import { ReadyToDelivery } from "../ManagePurchase/ReadyToDelivery";
import styled from "styled-components";
import { StartDelivery } from "../ManagePurchase/StartDelivery";
//마이페이지_구매관리
// 특이사항 ** 구매관리 디자인 개별 컴포넌트로 분리 필요 **
// 특이사항 ** 전체, 결제전, 결제완료, 배송준비, 거래종료 등의 버튼 기능 필요 **
// 특이사항 ** 구매관리 페이지네이션 필요 **

export default function ManagePurchase() {
  const handleButtonClick = () => {};

  return (
    <MainContainer>
      <h1>구매관리</h1>
      <ButtonContainer style={{ marginTop: 12.312 }}>
        <Button
          style={{ width: 53.625, height: 31.725 }}
          onClick={handleButtonClick}
        >
          전체
        </Button>
        <Button
          style={{ width: 60.225, height: 31.725 }}
          onClick={handleButtonClick}
        >
          결제전
        </Button>
        <Button
          style={{ width: 70.95, height: 31.725 }}
          onClick={handleButtonClick}
        >
          결제완료
        </Button>
        <Button
          style={{ width: 70.95, height: 31.725 }}
          onClick={handleButtonClick}
        >
          배송준비
        </Button>
        <Button
          style={{ width: 70.95, height: 31.725 }}
          onClick={handleButtonClick}
        >
          거래종료
        </Button>
        <Button
          style={{ width: 70.95, height: 31.725 }}
          onClick={handleButtonClick}
        >
          주문취소
        </Button>
        <Button
          style={{ width: 90.75, height: 31.725 }}
          onClick={handleButtonClick}
        >
          자동주문취소
        </Button>
        <Button
          style={{ width: 60.225, height: 31.725 }}
          onClick={handleButtonClick}
        >
          삭제됨
        </Button>
      </ButtonContainer>
      <BeforePurchase />
      <CompletePurchase />
      <ReadyToDelivery />
      <StartDelivery />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 717.75px;
  height: 801.75px;
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
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 49.5px;
  margin-top: 12.312px;
  width: 717.75px;
`;

const Button = styled.button`
  margin-left: 3.3px;
  border: 0.825px solid #9c9c9c;
  border-radius: 16.5px;
  background-color: white;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12.375px;
  line-height: 16.5px;
  text-align: center;

  color: #9c9c9c;

  &:hover {
    border: 1.2375px solid;
    border-color: black;

    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 12.375px;
    line-height: 16.5px;
    text-align: center;

    color: #202123;
  }
`;
