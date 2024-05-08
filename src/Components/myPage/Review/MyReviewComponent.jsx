import React, { useState } from "react";
import styled from "styled-components";
import iu from "../../../img/iu.png";
// 내가 쓴 후기 컴포넌트
// 특이사항 ** 구매관리 페이지네이션 필요 **
// API 연동시 필요한 정보
// 1. 상품 이미지
// 2. 구매한 날짜
// 3. 상품 이릅
// 4. 옵션 이름
// 5. 상품을 판매하는 스토어 이름
// 6. 상품에 대한 가격

export function MyReviewComponent() {
  const [checkBtn2, setCheckBtn2] = useState(null);

  return (
    <MainContainer>
      <SubContainer1>
        <CustomButtonWrapper>
          <ButtonInput
            type="checkbox"
            id="checkbox2"
            name="checkbox2"
            checked={checkBtn2}
            onChange={() => setCheckBtn2((prevCheck) => !prevCheck)}
          />
          <ButtonLabel htmlFor="checkbox2">
            <ButtonDiv></ButtonDiv>
          </ButtonLabel>
        </CustomButtonWrapper>
        <ImgContainer1
          style={{
            background: `url(${iu}) center/cover`,
          }}
        />{" "}
        {/* 1. 상품 이미지 */}
        <InformationContainer1>
          <h5>2021.01.15</h5> {/* 2. 구매한 날짜 */}
          <h1
            style={{
              margin: "0px",
              fontFamily: "Noto Sans",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14.025px",
              color: "#202123",
            }}
          >
            아이유 도무송 스티커
          </h1>{" "}
          {/* 3. 상품 이릅 */}
          <h2>옵션: 라익락 스티커 핑크색 999건</h2> {/* 4. 옵션 이름 */}
          <h3>유애나 마켓</h3> {/* 5. 판매하는 스토어 이름 */}
        </InformationContainer1>
        <PriceContainer>
          <PriceSubContainer>
            <h4>10,000원</h4> {/* 6. 상품에 대한 가격 */}
          </PriceSubContainer>
        </PriceContainer>
      </SubContainer1>

      <SubContainer2>
        <ImgContainer2
          style={{
            background: `url(${iu}) center/cover`,
          }}
        />{" "}
        {/* 7. 상품 이미지 */}
        <InformationContainer2>
          <h6>⭐⭐⭐⭐⭐</h6>
          <h2>
            배송도 빠르고 이뻐요. 또 시킬게요. 배송도 빠르고 이뻐요. 또
            시킬게요. 배송도 빠르고 이뻐요. 또 시킬게요. 배송도 빠르고 이뻐요.
            또 시킬게요. 배송도 빠르고 이뻐요. 또 시킬게요. 배송도 빠르고
            이뻐요. 또 시킬게요.
          </h2>
        </InformationContainer2>
      </SubContainer2>
    </MainContainer>
  );
}

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 641.775px;
  height: 284.625px;
  border: 0.825px solid rgba(156, 156, 156, 0.5);
  border-radius: 8.25px;
`;

export const SubContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 622.875px;
  height: 123.75px;
  margin-top: 0px;
  border-radius: 8.25px;

  h2 {
    margin: 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 11.55px;
    color: #202123;
  }

  h3 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 9.9px;
    color: #9c9c9c;
  }

  h5 {
    margin-top: 12.375px;
    margin-bottom: 27.5625px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 11.55px;
    line-height: 15.975px;
    color: #202123;
  }
`;

export const SubContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 579.75px;
  height: 113.85px;
  margin-top: 5.775px;
  margin-left: 14.85px;
  border: 0.825px solid #f0c920;
  border-radius: 4.125px;

  h6 {
    margin: 0px 0px 5.85px 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14.025px;
    color: #202123;
  }

  h2 {
    width: 447.375px;
    height: 49.5px;
    background: rgba(156, 156, 156, 0.1);
    border-radius: 4.125px;
    padding: 11.55px;
    margin: 0;

    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 11.55px;
    line-height: 15.975px;
    color: #202123;
  }
`;

export const ImgContainer1 = styled.div`
  width: 115.5px;
  height: 115.5px;
  margin-left: 4.125px;
`;

export const ImgContainer2 = styled.div`
  width: 82.5px;
  height: 82.5px;
`;

export const InformationContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 330px;
  height: 115.5px;
  padding-left: 1.65%;
`;

export const InformationContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.65%;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 123.75px;

  h4 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16.5px;
    color: #9c9c9c;
  }
`;

export const PriceSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 20.625px;

  h4 {
    font-size: 16.5px;
    color: #202123;
  }
`;

export const ButtonEnquiry = styled.button`
  width: 52.8px;
  height: 23.1px;
  margin-top: 5.025px;
  margin-right: 14.7px;
  font-size: 9.9px;
  border: 0.825px solid #9c9c9c;
  border-radius: 11.55px;
`;

export const CheckBox = styled.input`
  width: 16.5px;
  height: 16.5px;
  margin-right: 12.375px;
  background: #f9f9f9;
  border: 0.825px solid #9c9c9c;
  border-radius: 1.65px;
`;

//Checkbox 준석님
const CustomButtonWrapper = styled.div`
  display: flex;
  padding: 0;

  margin-left: 5px;
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
