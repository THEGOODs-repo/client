import React, { useState } from "react";
import styled from "styled-components";
import { Select, MenuItem } from "@mui/material";

export default function ProfitSeller() {
  // 연도 선택 상태를 관리하는 state 추가
  const [selectedYear, setSelectedYear] = useState(2024);

  return (
    <MainContainer>
      <h1>수익금 내역</h1>
      <SubContainer style={{ marginBottom: "30px" }}>
        <SubContainerA>
          <h2 style={{ marginLeft: "25px" }}>출금 가능 수익금</h2>
          <h3 style={{ marginLeft: "25px" }}>0원</h3>
        </SubContainerA>
        <SubContainerA style={{ width: "200px" }}>
          <h2>출금 가능 수익금</h2>
          <h3>0원</h3>
        </SubContainerA>
        <SubContainerA style={{ width: "200px", borderRight: "0px" }}>
          <h2>출금 완료 수익금</h2>
          <h3>0원</h3>
        </SubContainerA>
      </SubContainer>
      <SubContainer style={{ height: "84px;" }}>
        <h3>연도 별 수익내역</h3>
        <Select
          value={selectedYear} // 선택된 연도 표시
          onChange={(e) => setSelectedYear(e.target.value)} // 연도 변경 시 상태 업데이트
          sx={{
            width: 85,
            height: 42,
            marginLeft: 25,
            marginRight: "5px",
            border: "1px solid rgba(156, 156, 156, 0.8)",
            borderRadius: "10px",
          }}
        >
          <MenuItem value={2024}>2024</MenuItem>
          <MenuItem value={2025}>2025</MenuItem>
          <MenuItem value={2026}>2026</MenuItem>
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
  width: 717.75px;
  height: 1100px;
  border: 2.475px solid rgba(0, 0, 0, 0.05);

  h1 {
    align-self: flex-start;
    margin-top: 33px;
    margin-left: 28.875px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 21.45px;
    line-height: 29.925px;
    color: #202123;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 643.425px;
  height: 89.1px;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 8.25px;
`;

const SubContainerA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 200px;
  height: 60.225px;
  margin-left: 15px;
  border-right: 1px solid rgba(156, 156, 156, 0.8);

  h2 {
    margin: 0px;
    margin-bottom: 4.125px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13.2px;
    line-height: 15.675px;
    color: #52555b;
  }

  h3 {
    margin: 0px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18.15px;
    line-height: 22.275px;
    color: #202123;
  }
`;

const ProfitBtn = styled.button`
  width: 150px;
  margin-left: 10px;
  height: 40.425px;
  background: #f0c920;
  box-shadow: 0px 0px 2.475px 1.35px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 8.25px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13.2px;
  line-height: 15.675px;

  color: #ffffff;
`;
