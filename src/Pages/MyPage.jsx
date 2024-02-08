import styled from "styled-components";
import MyPageNavbar from "../Components/myPage/MyPageNavbar";
import { Outlet } from "react-router-dom";
function MyPageComponent() {
    return (
        <MyPageContainer>
            <MyPageNavbar />
            <Outlet />
        </MyPageContainer>
    );
}

const MyPageContainer = styled.div`
    display: flex;
`;

export default MyPageComponent;
