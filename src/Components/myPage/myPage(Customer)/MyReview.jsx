import React, { useState } from "react";
import styled from "styled-components";
import { MyReviewComponent } from "../Review/MyReviewComponent";
//마이페이지_내가 쓴 후기

export default function MyReview() {
  const [checkBtn, setCheckBtn] = useState(false);

  return (
    <MainContainer>
      <h1>내가 받은 후기</h1>

      <LabelContainer>
        <CustomButtonWrapper>
          <ButtonInput
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={checkBtn}
            onChange={() => setCheckBtn((prevCheck) => !prevCheck)}
          />
          <ButtonLabel htmlFor="checkbox">
            <ButtonDiv>선택삭제</ButtonDiv>
          </ButtonLabel>
        </CustomButtonWrapper>
      </LabelContainer>

      <MyReviewComponent checkBtn={checkBtn} />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 717.75px;
  height: 801.9px;
  border: 2.475px solid rgba(0, 0, 0, 0.05);

  h1 {
    align-self: flex-start;
    margin-top: 33px;
    margin-left: 28.875px;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 700;
    font-size: 21.45px;
    line-height: 29.925px;
    color: #202123;
  }
`;

const LabelContainer = styled.label`
  margin-left: 28.875px;
  margin-bottom: 9.9px;
  align-self: flex-start;
`;

//Checkbox 준석님
const CustomButtonWrapper = styled.div`
  display: flex;
  padding: 0;
  margin-top: 10px;
  margin-left: 15px;
  align-items: flex-start;
`;

const ButtonLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  padding: 0;
  margin: 0 0 0 0; /* 기본값 설정 */

  &:before {
    content: "";
    height: 16px;
    width: 16px;
    border: 1px solid #9c9c9c;
    border-radius: 1px;
    background-size: 10px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: transparent;
    transition: opacity 0.1s;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M1 5.8L4.14286 9L12 1" stroke="%239C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  }

  &:after {
    opacity: 0;
    content: "";
    position: absolute;
    height: 16px;
    width: 16px;
    border: 1px solid transparent;
    border-radius: 1px;
    background-size: 10px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #f0c920;
    transition: opacity 0.1s;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M1 5.8L4.14286 9L12 1" stroke="%23FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  }
`;

const ButtonInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  transition: opacity 1s ease; // 추가된 부분

  &:checked + ${ButtonLabel} {
    &:after {
      opacity: 1;
      transition: opacity 0.1s;
    }
  }
`;

const ButtonDiv = styled.div`
  margin: 0 0 0 7px;
  white-space: pre-line;
  text-align: start;
  color: #202123;
  margin-left: 5px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18.9px;
`;
