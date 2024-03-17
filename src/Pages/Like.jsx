import React from "react";
import styled from "styled-components";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import HeaderComponent from "../Components/Header/Header";
import LikePage from "../Components/Like/LikePage";

const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  min-width: 1200px;
`;

const NavWrapContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Like = () => {
  return (
    <LikeContainer>
      <HeaderComponent />
      <NavWrapContainer>
        <NavigationMenu />
        <NavigationCategoryMenu />
      </NavWrapContainer>
      <LikePage />
    </LikeContainer>
  );
};

export default Like;
