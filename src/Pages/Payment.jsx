import React from "react";
import styled from "styled-components";
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
  overflow-y: auto;
`;

const NavWrapContainer = styled.div`
  width: 100vw;
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
      <PaymentPage />
    </PaymentContainer>
  );
};

export default Payment;
