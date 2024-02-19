import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import HeaderComponent from "../Components/Header/Header";
import PaymentPage from "../Components/Payment/Payment";

const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background: rgba(249, 249, 249);
  overflow-y: auto;
`;

const NavWrapContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Payment = () => {
  return (
    <PaymentContainer>
      <HeaderComponent />
      <NavWrapContainer>
        <NavigationMenu />
        <NavigationCategoryMenu />
      </NavWrapContainer>
      <PaymentPage></PaymentPage>
    </PaymentContainer>
  );
};

export default Payment;
