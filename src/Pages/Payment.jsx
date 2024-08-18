import React from "react";
import styled from "styled-components";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import HeaderComponent from "../Components/Header/Header";
import PaymentPage from "../Components/Payment/Payment";
import FixedButtons from "../Components/Global/FixedButtons";
import BaseFooter from "../Components/Footer/BaseFooter";
import { width } from "@mui/system";

const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  overflow-y: auto;
`;

const NavWrapContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* 위쪽 여백 추가 */
`;

const Payment = () => {
  return (
    <>
      <PaymentContainer>
        <FixedButtons />
        <HeaderComponent />
        <NavWrapContainer>
          <NavigationMenu />
          <div
            style={{
              borderBottom: "1px solid #9C9C9C",
              width: "100%",
              height: "3px",
            }}
          ></div>
          <NavigationCategoryMenu />
          <div
            style={{
              borderBottom: "1px solid #9C9C9C",
              width: "100%",
              height: "3px",
            }}
          ></div>
        </NavWrapContainer>
        <PaymentPage />
      </PaymentContainer>
      <BaseFooter />
    </>
  );
};

export default Payment;
