import styled from "styled-components";
import MyPageNavbar from "../Components/myPage/myPage(Customer)/MyPageNavbar";
import { Outlet } from "react-router-dom";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";


function MyPageCustomerComponent() {
  return (
    <PageContainer>
      <NavWrapContainer>
        <NavigationMenu />
        <NavigationCategoryMenu />
      </NavWrapContainer>
      <MyPageContainer>
        <MyPageNavbar />
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
    margin-bottom : 50px;
    margin-top : 50px;
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyPageContainer = styled.div`
  display: flex;
  width: 1200px;
  height: 1300px;
  margin-left: 19%;
  background: #fefdfd;
  border-radius: 1px;
`;

export default MyPageCustomerComponent;
