import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import HeaderComponent from "../Components/Header/Header";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";
import BaseFooter from "../Components/Footer/BaseFooter";
import styled from "styled-components";
import BannerImg from "../img/event-banner.png";

export default function BannerPage() {
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
        <div
          style={{
            borderBottom: "1px solid #9C9C9C",
            width: "100%",
            height: "3px",
          }}
        ></div>
      </NavWrapContainer>
      <img
        src={BannerImg}
        alt="banner image"
        style={{
          display: "block", // To center with margin: auto
          width: `${1170 / 19.2}vw`,
          margin: "0px auto",
        }}
      />

      <BaseFooter />
    </>
  );
}
const NavWrapContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
