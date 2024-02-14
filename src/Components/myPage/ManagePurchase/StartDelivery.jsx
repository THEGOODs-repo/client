import React from "react";
import styled from "styled-components";
import Purchase from "../../../img/Purchase.png";
import ChevronRight from "../../../img/chevron_right.png";

export function StartDelivery() {
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
          <h2>배송시작</h2>
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
  width: 783px;
  height: 168px;
  margin-bottom: 3%;

  h6 {
    margin-bottom: 3px; /* 2024. 01. 18 17:39 */
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #9c9c9c;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 783px;
  height: 150px;
  border: 1px solid rgba(156, 156, 156, 0.5);
  border-radius: 10px;
`;

export const ImgContainer = styled.div`
  width: 150px;
  height: 150px;
  background-color: #9c9c9c;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 150px;
  padding-left: 3%;

  h2 {
    margin: 0;
    margin-bottom: 4px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #307cf7;
  }

  h3 {
    margin: 0;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #202123;
  }

  h4 {
    margin-top: 3px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;

    color: #52555b;
  }
`;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 150px;
`;

export const PriceSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 25px;

  h5 {
    margin: 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;

    color: #202123;
  }
`;

export const ChevronButton = styled.button`
  background: url(${ChevronRight}) no-repeat center;
  background-size: cover;
  width: 30px;
  height: 25px;
  border: none;
  cursor: pointer;
`;

export const ButtonEnquiry = styled.button`
  width: 64px;
  height: 28px;
  margin-top: 6px;
  margin-right: 20px;
  background-color: white;
  border: 1px solid rgba(156, 156, 156, 0.5);
  border-radius: 15px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #202123;
`;
