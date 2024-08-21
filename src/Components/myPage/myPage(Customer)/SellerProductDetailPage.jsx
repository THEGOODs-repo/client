import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import ChevronRight from "../../../img/chevron_right.png";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../ManagePurchase/ConfirmModal";
import CancelModal from "./CancelModal";

import './SellerProductDetailPage.css';
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

const PageMoveContainer = styled.div`
  display : flex;
  justify-content : space-between;
  width : 380px;

    h2 {
    position: relative; /* Necessary to position the pseudo-element */
  }
    h2::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #F0C920;
 
  }

  h2:hover::after {
    width: 100%;
  }
`

const SellerProductDetailPage = () => {
  const [showModal,setShowModal] = useState(false);

  const handleOpenCancelModal = () =>{
    setShowModal(true);
  }
  
  const handleButtonClick = () =>{

  }
  const product = {
    name: "케이스 종이 스티커",
    price: 40000,
    shipping: 3000,
    status: "상시판매",
    imageUrl: "/path-to-your-image.png" // Replace with the actual path
  };

  const salesData = [
    {
      id: 1,
      title: "케이스",
      option: "-",
      price: 40000,
      totalSales: "999개",
      totalRevenue: 40000000,
      stock: 999,
    },
    {
      id: 2,
      title: "케이스",
      option: "옵션명",
      price: 40000,
      totalSales: "999개",
      totalRevenue: 40000000,
      stock: 999,
    },
  ];
  

  return (
    <div className="product-page">
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
      <div className="sales-info">
        <PageMoveContainer>
            <h2>판매 및 재고 현황</h2>
            <h2>입금 응답 결과</h2>
        </PageMoveContainer>
        <b>현재 상품별 재고현황</b>
        <p>목록 (등록상품 : 2건)</p>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>옵션</th>
              <th>상품가격</th>
              <th>총 판매량</th>
              <th>총 상품 매출</th>
              <th>잔여 재고</th>
              <th>상세</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.option}</td>
                <td>{item.price.toLocaleString()}원</td>
                <td>{item.totalSales}</td>
                <td>{item.totalRevenue.toLocaleString()}원</td>
                <td>{item.stock}</td>
                <td><button>재고수정</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerProductDetailPage;
