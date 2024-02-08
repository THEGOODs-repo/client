import React from "react";
import styled from "styled-components";
import { MyReviewComponent } from "../Review/MyReviewComponent";

//마이페이지_구매관리
export default function MyReviewSeller() {
  const fileInput = React.useRef(null);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  return (
    <MainContainer>
      <h1
        style={{
          alignSelf: "flex-start",
          marginTop: "5%",
          marginLeft: "5%",
          fontFamily: "Noto Sans",
          fontStyle: "normal",
          fontWight: "700",
          fontSize: "26px",
          lineHeight: "35px",
          color: " #202123",
        }}
      >
        내가 쓴 후기
      </h1>
      <LabelContainer>
        <CheckBox type="checkbox" />
        <Label>선택삭제</Label>
      </LabelContainer>
      <MyReviewComponent />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 870px;
  height: 972px;
  border: 3px solid rgba(0, 0, 0, 0.05);
`;

const LabelContainer = styled.label`
  margin-left: 5%;
  margin-bottom: 12px;
  align-self: flex-start;
`;

const Label = styled.label`
  position: relative;
  top: -4px;
  margin-left: 3px;
  margin-bottom: 12px;
  align-self: flex-start;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;

  color: #000000;
`;

const CheckBox = styled.input`
  width: 20px;
  height: 20px;
`;
