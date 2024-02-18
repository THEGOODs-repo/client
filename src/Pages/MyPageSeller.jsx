import styled from "styled-components";
import MyPageNavbarSeller from "../Components/myPage/myPage(Seller)/MyPageNavbarSeller";
import { Outlet } from "react-router-dom";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import HeaderComponent from "../Components/Header/Header";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";
function MyPageSellerComponent() {
  return (
    <PageContainer>
      <NavWrapContainer>
        <HeaderComponent />
        <NavigationMenu />
        <NavigationCategoryMenu />
      </NavWrapContainer>
      <MyPageContainer>
        <MyPageNavbarSeller />
        <Outlet />
      </MyPageContainer>
    </PageContainer>
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
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`;
const MyPageContainer = styled.div`
  display: flex;
  width: 1200px;
  height: 1300px;
  margin-left: 25%;
  background: #fefdfd;
  border-radius: 1px;
`;

export default MyPageSellerComponent;
