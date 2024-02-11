import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import RegisterPage from "../Components/Register/RegisterPage";
import RegisterForm from "../Components/Register/RegisterForm";

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
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
