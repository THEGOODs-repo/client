import React from "react";
import styled from "styled-components";

const PaymentPageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  width: ${1139 / 19.2}vw;
  padding: 0;
  flex-shrink: 2;
  flex-wrap: wrap;
`;

const PaymentTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const PaymentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 59%;
  margin: 0 auto 0 0;
`;

const PaymentConfirmWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 32.5%;
  margin: 0 0 0 auto;
`;

const Payment = () => {
  return <div>Payment</div>;
};

export default Payment;
