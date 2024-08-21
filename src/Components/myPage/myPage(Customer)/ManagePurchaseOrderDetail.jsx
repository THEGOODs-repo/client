import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import ChevronRight from "../../../img/chevron_right.png";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../ManagePurchase/ConfirmModal";
import CancelModal from "./CancelModal";


const OrderDetailsContainer = styled.div`
  padding: 20px;
  width: 870px;
  height : 972px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const SectionTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SummaryContainer = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid rgba(156, 156, 156, 0.5);
  border-radius: 10px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  flex : 1;
  padding :10px 20px;
`;

const OrderItemContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
`;

export const ProductImage = styled.div`
  width: 220px;
  height: 220px;
  background-color: #9c9c9c;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-right : 30px;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 870px;
  height: 150px;
  border: 1px solid rgba(156, 156, 156, 0.5);
  border-radius: 10px;
`;

export const ImgContainer = styled.div`
  width: 150px;
  height: 150px;
  background-color: #9c9c9c;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  height: 150px;
  padding-left: 3%;

  h2 {
    margin: 0;
    margin-bottom: 4px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;

  h3 {
    margin: 0;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #202123;
  }

  h4 {
    margin-top: 3px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;

    color: #52555b;
  }
`;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 150px;
  margin-left : auto;
`;

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-left: 1px solid rgba(156, 156, 156, 0.5);
`;

export const PriceSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 25px;

  h5 {
    margin: 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;

    color: #202123;
  }
`;

export const ChevronButton = styled.button`
  background: url(${ChevronRight}) no-repeat center;
  background-size: cover;
  width: 30px;
  height: 25px;
  border: none;
  cursor: pointer;
`;

export const ButtonEnquiry = styled.button`
  width: 90px;
  height: 35px;
  margin-top: 6px;
  margin-right: 20px;
  background-color: white;
  border: 1px solid rgba(156, 156, 156, 0.5);
  border-radius: 5px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #202123;
`;

export const DeliveryButton = styled.button`
  width: 80px;
  height: 28px;
  margin: 2.5px 0;
  background-color: white;
  border: 1px solid rgba(156, 156, 156, 0.5);
  border-radius: 5px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #202123;

`;


const OrderProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
`;

const ProgressStep = styled.div`
  width: 20%;
  text-align: center;
  position: relative;
  padding-bottom: 10px;

  &.completed::after {
    content: '✓';
    color: green;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 16px;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding: 10px 40px;
    border: 1px solid rgba(156, 156, 156, 0.5);
  border-radius: 10px;
`;

const SectionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Note = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 5px 0;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const StepperWrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  border: 1px solid rgba(156, 156, 156, 0.5);
  border-radius: 10px;
  padding : 40px;
  margin-top : 30px;
`;
const StepperItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  &:before {
    position: absolute;
    content: "";
    border-bottom: 2px ${props => (props.completed ? 'solid' : 'dotted')} #ccc;
    width: 100%;
    top: 20px;
    left: -50%;
    z-index: 2;
  }

  &:after {
    position: absolute;
    content: "";
    border-bottom: 2px solid black;
    width: 100%;
    top: 20px;
    left: 50%;
    z-index: 2;
  }

  &.active {
    font-weight: bold;
  }

  &.completed .step-counter {
    background-color: black;
  }

  &.completed:after {
    position: absolute;
    content: "";
    border-bottom: 2px solid black;
    width: 100%;
    top: 20px;
    left: 50%;
    z-index: 3;
  }

  &:first-child:before {
    content: none;
  }

  &:last-child:after {
    content: none;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;



const StepCounter = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: black;
  margin-bottom: 6px;
  color: white;
`;

const StepName = styled.div``;

const ManagePurchaseOrderDetail = () => {
  const [showModal,setShowModal] = useState(false);

  const handleOpenCancelModal = () =>{
    setShowModal(true);
  }
  
  const handleCloseCancelModal = () =>{
    setShowModal(false);
  }
  const handleConfirmCancelModal = ()=> {
    alert("주문이 취소되었습니다.");
    setShowModal(false);
  }
  

    const handleButtonClick = (e) => {
  };

  const handleDetailButtonClick = () => {
  };

  return (
    <OrderDetailsContainer>
      <SectionTitle>주문 내역 상세</SectionTitle>
      <SummaryContainer>
        <SummaryItem>
          <span>입금처 농협은행 12345678910 더*즈</span>
        </SummaryItem>
        <SummaryItem>
          <span>입금 금액 43,000원</span>
        </SummaryItem>
      </SummaryContainer>
      
      <SubContainer>
        <ImgContainer
          style={{
            background: `url('https://thegoods-dev.s3.ap-northeast-2.amazonaws.com/item/e1a0b038-1227-4b4c-8293-4013faf5f59b') center/cover`,
          }}
        />
        <InformationContainer >
          <h3>케이크 스티커</h3>
          <h4>옵션 : 나 홀로 집에 1건</h4>
        </InformationContainer>
        <PriceContainer>
          <ButtonEnquiry onClick={() => handleButtonClick}>
            문의하기
          </ButtonEnquiry>
          <ButtonEnquiry onClick={handleOpenCancelModal}>
            주문취소
          </ButtonEnquiry>
        </PriceContainer>
        
      </SubContainer>

    <StepperWrapper>
      <StepperItem className="completed" >
        <StepCounter>
✓

        </StepCounter>
        <StepName>결제전</StepName>
      </StepperItem>
      <StepperItem className="completed">
        <StepCounter>

✓
        </StepCounter>
        <StepName>결제완료</StepName>
      </StepperItem>
      <StepperItem className="completed">
        <StepCounter>

✓
        </StepCounter>
        <StepName>배송준비</StepName>
      </StepperItem>
      <StepperItem className="active">
        <StepCounter>
            ✓
        </StepCounter>
        <StepName>배송시작</StepName>
      </StepperItem>
      <StepperItem>
        <StepCounter>✓
        </StepCounter>
        <StepName>배송완료</StepName>
      </StepperItem>
    </StepperWrapper>

      <Section>
        <h2>주문자 정보</h2>
        <SectionItem>
          <span>주문자명</span>
          <span>홍길동</span>
        </SectionItem>
        <SectionItem>
          <span>전화번호</span>
          <span>010-1234-5678</span>
        </SectionItem>
        <SectionItem>
          <span>주문자 이메일</span>
          <span>thegoods@gmail.com</span>
        </SectionItem>
      </Section>

      <Section>
        <h2>주문 정보</h2>
        <SectionItem>
          <span>상품명</span>
          <span>케이스 스티커 (10,000원)</span>
        </SectionItem>
        <SectionItem>
          <span>수량</span>
          <span>1개</span>
        </SectionItem>
        <SectionItem>
          <span>상품 가격</span>
          <span>10,000원</span>
        </SectionItem>
        <SectionItem>
          <span>배송비</span>
          <span>3,000원</span>
        </SectionItem>
        <SectionItem>
          <span>쿠폰 할인</span>
          <span>0원</span>
        </SectionItem>
        <SectionItem>
          <span>총 주문 금액</span>
          <span>13,000원</span>
        </SectionItem>
      </Section>

      <Section>
        <h2>나의 입금 정보</h2>
        <SectionItem>
          <span>입금자명</span>
          <span>홍길동</span>
        </SectionItem>
        <SectionItem>
          <span>입금액</span>
          <span>13,000원</span>
        </SectionItem>
        <SectionItem>
          <span>입금 날짜</span>
          <span>2024-01-01</span>
        </SectionItem>
      </Section>

      <Section>
        <h2>배송 정보</h2>
        <SectionItem>
          <span>배송지</span>
          <span>대조국</span>
        </SectionItem>
        <SectionItem>
          <span>배송 상태</span>
          <span>배송 완료</span>
        </SectionItem>
        <SectionItem>
          <span>수취인</span>
          <span>홍길동</span>
        </SectionItem>
        <SectionItem>
          <span>연락처</span>
          <span>010-1234-5678</span>
        </SectionItem>
        <SectionItem>
          <span>주소</span>
          <span>서울특별시 강남구 역삼동 123-45</span>
        </SectionItem>
      </Section>

      <Section>
        <h2>송장 정보</h2>
        <SectionItem>
          <span>송장번호</span>
          <span>1234567890123</span>
        </SectionItem>
        <SectionItem>
          <span>배송사</span>
          <span>대조국 택배</span>
        </SectionItem>
      </Section>

      <Section>
        <h2>환불 계좌 정보</h2>
        <SectionItem>
          <span>환불 계좌</span>
          <span>국민은행</span>
        </SectionItem>
        <SectionItem>
          <span>은행명</span>
          <span>홍길동</span>
        </SectionItem>
        <SectionItem>
          <span>계좌번호</span>
          <span>1234567890123</span>
        </SectionItem>
      </Section>

      <Note>
        <p>
          * 환불이 필요할 경우, 환불 계좌 정보를 정확히 입력해 주세요. 잘못된 정보로 인한
          불이익은 책임지지 않습니다.
        </p>
      </Note>
        <CancelModal show={showModal} handleClose={handleCloseCancelModal} handleConfirm={handleConfirmCancelModal} />
        
    </OrderDetailsContainer>
  );
};

export default ManagePurchaseOrderDetail;
