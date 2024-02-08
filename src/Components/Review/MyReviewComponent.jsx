import React from "react";
import styled from "styled-components";
import iu from "../../img/iu.png";
import ChevronRight from "../../img/chevron_right.png";

export function MyReviewComponent() {
  return (
    <MainContainer>
      <SubContainer1>
        <CheckBox type="checkbox" />
        <ImgContainer1
          style={{
            background: `url(${iu}) center/cover`,
          }}
        />
        <InformationContainer1>
          <h5>2021.01.15</h5>
          <h1>아이유 도무송 스티커</h1>
          <h2>옵션: 라익락 스티커 핑크색 999건</h2>
          <h3>유애나 마켓</h3>
        </InformationContainer1>
        <PriceContainer>
          <PriceSubContainer>
            <h4>10,000원</h4>
          </PriceSubContainer>
        </PriceContainer>
      </SubContainer1>

      <SubContainer2>
        <ImgContainer2
          style={{
            background: `url(${iu}) center/cover`,
          }}
        />
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
  margin-left: 15px;
  width: 783px;
  height: 345px;
  border: 1px solid rgba(156, 156, 156, 0.5);
  border-radius: 10px;
`;

export const SubContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 755px;
  height: 150px;
  margin-top: 15px;
  border-radius: 10px;

  h1 {
    margin: 0;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    color: #202123;
  }

  h2 {
    margin: 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #202123;
  }

  h3 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #9c9c9c;
  }

  h5 {
    margin-top: 10px;
    margin-bottom: 13%;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #202123;
  }
`;

export const SubContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 704px;
  height: 138px;
  margin-top: 15px;
  border: 1px solid #f0c920;
  border-radius: 5px;

  h6 {
    margin: 0;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #202123;
  }

  h2 {
    width: 539px;
    height: 60px;
    background: rgba(156, 156, 156, 0.1);
    border-radius: 5px;
    padding: 15px;
    margin: 0;

    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #202123;
  }
`;

export const ImgContainer1 = styled.div`
  width: 140px;
  height: 140px;
`;

export const ImgContainer2 = styled.div`
  width: 100px;
  height: 100px;
`;

export const InformationContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 140px;
  padding-left: 2%;
`;

export const InformationContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2%;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 150px;

  h4 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #9c9c9c;
  }
`;

export const PriceSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 25px;

  h4 {
    font-size: 20px;
    margin: 0;
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
  font-size: 12px;
  border: 1px solid #9c9c9c;
  border-radius: 15px;
`;

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  background: #f9f9f9;
  border: 1px solid #9c9c9c;
  border-radius: 2px;
`;
