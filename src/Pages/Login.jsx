import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import LoginPage from "../Components/Login/LoginPage";
import FindEmail from "../Components/Login/FindEmail";
import FindPassWord from "../Components/Login/FindPassWord";
import FindGuestOrder from "../Components/Login/FindGuestOrder";
import KakaoLoginHandler from "../Components/Login/KakaoLoginHandler";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

const Login = () => {
  return (
    <LoginContainer>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="findemail" element={<FindEmail />} />
        <Route path="resetpw" element={<FindPassWord />} />
        <Route path="guest" element={<FindGuestOrder />} />
        <Route path="kakao" element={<KakaoLoginHandler />} />
      </Routes>
    </LoginContainer>
  );
};

export default Login;
