import styled from "styled-components";
import MyPageNavbar from "../Components/myPage/myPage(Customer)/MyPageNavbar";
import { Outlet } from "react-router-dom";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";

function MyPageCustomerComponent() {
  return (
    <PageContainer>
      <NavigationMenu />
      <MyPageContainer>
        <MyPageNavbar />
        <Outlet />
      </MyPageContainer>
    </PageContainer>
  );
}

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
