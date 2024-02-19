import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import RegisterPage from "../Components/Register/RegisterPage";
import RegisterForm from "../Components/Register/RegisterForm";

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  min-height: 100vh;
  overflow-y: auto;
  background: rgba(249, 249, 249);
`;

const Register = () => {
  return (
    <RegisterContainer>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="form" element={<RegisterForm />} />
      </Routes>
    </RegisterContainer>
  );
};

export default Register;
