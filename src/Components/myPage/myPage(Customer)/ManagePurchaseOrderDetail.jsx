import React from 'react';
import styled from 'styled-components';


const OrderDetailsContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const SectionTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SummaryContainer = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const OrderItemContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
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
  margin-bottom: 20px;
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

// const StepperItem = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   flex: 1;

//   &:before {
//     position: absolute;
//     content: "";
//     border-bottom: 2px solid #ccc;
//     width: 100%;
//     top: 20px;
//     left: -50%;
//     z-index: 2;
//   }

//   &:after {
//     position: absolute;
//     content: "";
//     border-bottom: 2px solid #ccc;
//     width: 100%;
//     top: 20px;
//     left: 50%;
//     z-index: 2;
//   }

//   &.active {
//     font-weight: bold;
//   }

//   &.completed .step-counter {
//     background-color: #4bb543;
//   }

//   &.completed:after {
//     position: absolute;
//     content: "";
//     border-bottom: 2px solid #4bb543;
//     width: 100%;
//     top: 20px;
//     left: 50%;
//     z-index: 3;
//   }

//   &:first-child:before {
//     content: none;
//   }

//   &:last-child:after {
//     content: none;
//   }

//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

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
  return (
    <OrderDetailsContainer>
      <SectionTitle>주문 내역 상세</SectionTitle>
      <SummaryContainer>
        <SummaryItem>
          <span>입금자명</span>
          <span>홍길동</span>
        </SummaryItem>
        <SummaryItem>
          <span>송금은행</span>
          <span>1234567890123 대조국</span>
        </SummaryItem>
        <SummaryItem>
          <span>입금 금액</span>
          <span>999,999원</span>
        </SummaryItem>
      </SummaryContainer>

      <OrderItemContainer>
        <ProductImage src="product_image_url" alt="상품 이미지" />
        <ProductInfo>
          <h2>케이스 스티커</h2>
          <p>1박스 12개 1건</p>
          <Button>리뷰쓰기</Button>
          <Button>후기쓰기</Button>
        </ProductInfo>
      </OrderItemContainer>

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
    </OrderDetailsContainer>
  );
};

export default ManagePurchaseOrderDetail;
