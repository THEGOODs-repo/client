import React from "react";
import styled from "styled-components";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import HeaderComponent from "../Components/Header/Header";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";
import BaseFooter from "../Components/Footer/BaseFooter";
import SystemNavbar from "../Components/SystemPage/SystemNavbar";
import { Outlet } from "react-router-dom";

const SystemPage = () => {
  return (
    <>
      <PageContainer>
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
        <MyPageContainer>
          <SystemNavbar />
          <Outlet />
        </MyPageContainer>

        <BaseFooter />
      </PageContainer>
    </>
  );
};
export default SystemPage;
const Background = styled.div`
  background-color: #f9f9f9;
  height: 100%;
`;
const NavWrapContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyPageContainer = styled.div`
  display: flex;
  width: ${1200 / 19.2}vw;
  height: 950px;
  margin: 30px auto;
  background: #fefdfd;
  border-radius: 1px;
`;
