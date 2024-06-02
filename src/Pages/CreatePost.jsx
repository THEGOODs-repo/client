import React from "react";
import styled from "styled-components";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import HeaderComponent from "../Components/Header/Header";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";
import BaseFooter from "../Components/Footer/BaseFooter";

const CreatePost = () => {
  return (
    <>
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
      </NavWrapContainer>
      <Background>
        <Line />

        <BaseFooter />
      </Background>
    </>
  );
};

export default CreatePost;

const NavWrapContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Background = styled.div`
  background-color: #f9f9f9;
  height: 100%;
`;

const Line = styled.div`
  width: 100%;
  opacity: 0.8;
  border: 0.5px solid #9c9c9c;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`;
