import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChevronRight from "../../../img/chevron_right.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import ReviewModal from "./ReviewModal";
import ConfirmModal from "./ConfirmModal";

const OrderStatusEnum = {
  PAY_PREV: "PAY_PREV",
  PAY_COMP: "PAY_COMP",
  DEL_PREP: "DEL_PREP",
  DEL_START: "DEL_START",
  DEL_COMP: "DEL_COMP",
  CONFIRM: "CONFIRM",
  CANCEL: "CANCEL",
  REFUND_ONGOING: "REFUND_ONGOING",
  REFUND_COMP: "REFUND_COMP",
};

export default function OrderItems(data) {
  const navigate = useNavigate();
  const fileInput = React.useRef(null);
  const token = useSelector((state) => state.login.token);
  const [DisplayReviewModal, SetDisplayReviewModal] = useState(false);
  const [DisplayConfirmModal, SetDisplayConfirmModal] = useState(false);
  const [OrderDateTime, SetOrderDateTime] = useState(new Date());

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  useEffect(() => {
    SetOrderDateTime(new Date(data.orderDateTime));
    console.log(data);
  }, []);

  return (
    <MainContainer>
      <ReviewModal
        isOpen={DisplayReviewModal}
        ItemName={data.itemName}
        OptionString={data.optionString}
        onClose={() => {
          SetDisplayReviewModal(false);
        }}
      />
      <ConfirmModal
        isOpen={DisplayConfirmModal}
        onClose={() => {
          SetDisplayConfirmModal(false);
        }}
        OrderItemId={data.orderItemId}
      />
      <h6>
        {OrderDateTime instanceof Date &&
          OrderDateTime.toLocaleString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          })}
      </h6>
      <SubContainer>
        <ImgContainer
          style={{
            background: `url(${data.imgUrl}) center/cover`,
          }}
        />
        <InformationContainer $orderStatus={data.orderStatus}>
          <h2>
            {data.orderStatus === OrderStatusEnum.PAY_PREV && "결제전"}
            {data.orderStatus === OrderStatusEnum.PAY_COMP && "결제완료"}
            {data.orderStatus === OrderStatusEnum.DEL_PREP && "배송준비"}
            {data.orderStatus === OrderStatusEnum.DEL_START && "배송시작"}
            {data.orderStatus === OrderStatusEnum.DEL_COMP && "배송완료"}
            {data.orderStatus === OrderStatusEnum.CONFIRM && "구매확정"}

            {data.orderStatus === OrderStatusEnum.CANCEL && "주문취소"}

            {data.orderStatus === OrderStatusEnum.REFUND_ONGOING &&
              "반품진행중"}
            {data.orderStatus === OrderStatusEnum.REFUND_COMP && "반품완료"}
          </h2>
          <h3>{data.itemName}</h3>
          <h4>옵션 : {data.optionString}</h4>
        </InformationContainer>
        <PriceContainer>
          <PriceSubContainer>
            <h5>
              {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            </h5>
            <ChevronButton onClick={() => navigate(`${data.orderItemId}`)} />
          </PriceSubContainer>
          <ButtonEnquiry onClick={() => handleButtonClick}>
            문의하기
          </ButtonEnquiry>
        </PriceContainer>
        {data.orderStatus === OrderStatusEnum.DEL_START && (
          <DeliveryContainer>
            <DeliveryButton>배송조회</DeliveryButton>
          </DeliveryContainer>
        )}
        {data.orderStatus === OrderStatusEnum.DEL_COMP && (
          <DeliveryContainer>
            <DeliveryButton>배송조회</DeliveryButton>
            <DeliveryButton onClick={() => SetDisplayConfirmModal(true)}>
              구매확정
            </DeliveryButton>
            <DeliveryButton onClick={() => SetDisplayReviewModal(true)}>
              후기작성
            </DeliveryButton>
          </DeliveryContainer>
        )}
        {(data.orderStatus === OrderStatusEnum.REFUND_ONGOING ||
          data.orderStatus === OrderStatusEnum.REFUND_COMP) && (
          <DeliveryContainer>
            <DeliveryButton>취소사유</DeliveryButton>
          </DeliveryContainer>
        )}
      </SubContainer>
    </MainContainer>
  );
}

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 783px;
  height: 168px;
  margin-bottom: 3%;

  h6 {
    margin-bottom: 3px; /* 2024. 01. 18 17:39 */
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #9c9c9c;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 783px;
  height: 150px;
  border: 1px solid rgba(156, 156, 156, 0.5);
  border-radius: 10px;
`;

export const ImgContainer = styled.div`
  width: 150px;
  height: 150px;
  background-color: #9c9c9c;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${(e) =>
    e.$orderStatus === OrderStatusEnum.DEL_START ||
    e.$orderStatus === OrderStatusEnum.DEL_COMP ||
    e.$orderStatus === OrderStatusEnum.REFUND_ONGOING ||
    e.$orderStatus === OrderStatusEnum.REFUND_COMP
      ? "250px"
      : "400px"};
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
    color: ${(e) => e.$orderStatus === OrderStatusEnum.PAY_PREV && "#9c9c9c"}${(
        e,
      ) => e.$orderStatus === OrderStatusEnum.PAY_COMP && "#202123"}${(e) =>
        e.$orderStatus === OrderStatusEnum.DEL_PREP && "#f0c920"}${(e) =>
        e.$orderStatus === OrderStatusEnum.DEL_START && "#307cf7"}${(e) =>
        e.$orderStatus === OrderStatusEnum.DEL_COMP && "#307cf7"}${(e) =>
        e.$orderStatus === OrderStatusEnum.CONFIRM && "#202123"}${(e) =>
        e.$orderStatus === OrderStatusEnum.CANCEL && "#FD3C56"}${(e) =>
        e.$orderStatus === OrderStatusEnum.REFUND_ONGOING && "#FD3C56"}${(e) =>
        e.$orderStatus === OrderStatusEnum.REFUND_COMP && "#FD3C56"};
  }

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
  width: 64px;
  height: 28px;
  margin-top: 6px;
  margin-right: 20px;
  background-color: white;
  border: 1px solid rgba(156, 156, 156, 0.5);
  border-radius: 15px;

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
