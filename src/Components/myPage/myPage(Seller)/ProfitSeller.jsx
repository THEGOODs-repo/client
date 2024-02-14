import { Button } from "@mui/material";
import React, { useRef } from "react";
import styled from "styled-components";
import { Select, MenuItem } from "@mui/material";

//마이페이지_비밀번호변경
export default function ProfitSeller() {
  const fileInput = React.useRef(null);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  return (
    <MainContainer>
      <h1>수익금 내역</h1>
      <SubContainer style={{ marginBottom: "30px" }}>
        <SubContainerA>
          <h2>출금 가능 수익금</h2>
          <h3>0원</h3>
        </SubContainerA>
        <SubContainerA style={{ width: "190px" }}>
          <h2>출금 가능 수익금</h2>
          <h3>0원</h3>
        </SubContainerA>
        <SubContainerA style={{ width: "190px", borderRight: "0px" }}>
          <h2>출금 완료 수익금</h2>
          <h3>0원</h3>
        </SubContainerA>
      </SubContainer>
      <SubContainer style={{ height: "84px;" }}>
        <h3>연도 별 수익내역</h3>
        <Select
          sx={{
            width: 97,
            height: 49,
            marginLeft: 35,
            marginRight: "5px",
            border: "1px solid rgba(156, 156, 156, 0.8)",
            borderRadius: "10px",
          }}
        >
          <MenuItem value={1}>2024</MenuItem>
          <MenuItem value={2}>2025</MenuItem>
          <MenuItem value={3}>2026</MenuItem>
        </Select>
        <ProfitBtn>수익 내역 다운로드</ProfitBtn>
      </SubContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 870px;
  height: 1300px;
  border: 3px solid rgba(0, 0, 0, 0.05);

  h1 {
    align-self: flex-start;
    margin-top: 5%;
    margin-left: 5%;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 35px;
    color: #202123;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 781px;
  height: 108px;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 10px;
`;

const SubContainerA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 300px;
  height: 73px;
  margin-left: 15px;
  border-right: 1px solid rgba(156, 156, 156, 0.8);

  h2 {
    margin: 0px;
    margin-bottom: 5px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #52555b;
  }

  h3 {
    margin: 0px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    color: #202123;
  }
`;

const ProfitBtn = styled.button`
  width: 190px;
  height: 49px;
  background: #f0c920;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
`;
