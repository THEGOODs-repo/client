import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import LoginPage from "../Components/Login/LoginPage";
import FindEmail from "../Components/Login/FindEmail";
import FindPassWord from "../Components/Login/FindPassWord";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  min-height: 100vh;
  background: rgba(249, 249, 249);
`;

const Login = () => {
  return (
    <LoginContainer>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="findemail" element={<FindEmail />} />
        <Route path="resetpw" element={<FindPassWord />} />
      </Routes>
    </LoginContainer>
  );
};

export default Login;
