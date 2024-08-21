import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const PaymentPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  width: ${1139 / 19.2}vw;
  padding: 0;
  flex-shrink: 2;
  flex-wrap: wrap;
`;

const PaymentTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 84%;
  font-size: ${26 / 19.2}vw;
  font-weight: bold;
  padding: ${40 / 19.2}vw 0 0 0;
`;

const BeforePayment = () => {
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
};
