import React from "react";
import styled from "styled-components";
import Purchase from "../../../img/Purchase.png";
import ChevronRight from "../../../img/chevron_right.png";

export function ReadyToDelivery() {
  const fileInput = React.useRef(null);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  return (
    <MainContainer>
      <h6>2021.01.18 17:39</h6>
      <SubContainer>
        <ImgContainer
          style={{
            background: `url(${Purchase}) center/cover`,
          }}
        />
        <InformationContainer>
          <h2>배송준비</h2>
          <h3>케이스 종이 스티커</h3>
          <h4>옵션: 나 홀로 집에 1건</h4>
        </InformationContainer>
        <PriceContainer>
          <PriceSubContainer>
            <h5>10,000원</h5>
            <ChevronButton onClick={handleButtonClick} />
          </PriceSubContainer>
          <ButtonEnquiry onClick={handleButtonClick}>문의하기</ButtonEnquiry>
        </PriceContainer>
      </SubContainer>
    </MainContainer>
  );
}

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 646.575px;
  height: 138.6px;
  margin-bottom: 2.475%;

  h6 {
    margin-bottom: 2.475px; /* 2024. 01. 18 17:39 */
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 9.9px;
    line-height: 13.2px;
    color: #9c9c9c;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 646.575px;
  height: 123.75px;
  border: 1px solid rgba(156, 156, 156, 0.5);
  border-radius: 8.25px;
`;

export const ImgContainer = styled.div`
  width: 123.75px;
  height: 123.75px;
  background-color: #9c9c9c;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 330px;
  height: 123.75px;
  padding-left: 2.475%;

  h2 {
    margin: 0;
    margin-bottom: 3.3px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 13.2px;
    line-height: 18.15px;
    color: #f0c920;
  }

  h3 {
    margin: 0;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 13.2px;
    line-height: 18.15px;
    color: #202123;
  }

  h4 {
    margin-top: 2.475px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 9.9px;
    line-height: 13.2px;
    color: #52555b;
  }
`;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 123.75px;
`;

export const PriceSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 20.625px;

  h5 {
    margin: 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14.85px;
    line-height: 20.625px;

    color: #202123;
  }
`;

export const ChevronButton = styled.button`
  background: url(${ChevronRight}) no-repeat center;
  background-size: cover;
  width: 24.75px;
  height: 20.625px;
  border: none;
  cursor: pointer;
`;

export const ButtonEnquiry = styled.button`
  width: 52.8px;
  height: 23.1px;
  margin-top: 4.95px;
  margin-right: 16.5px;
  background-color: white;
  border: 1px solid rgba(156, 156, 156, 0.5);
  border-radius: 11.25px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 9.9px;
  line-height: 13.2px;
  color: #202123;
`;
