import React, { useState } from "react";
import styled from "styled-components";

export default function Alarm() {
  const [purchaseManage, setPurchaseManage] = useState(true);
  const [messageManage, setMessageManage] = useState(true);
  const [marketingManage, setMarketingManage] = useState(true);
  const [postManage, setPostManage] = useState(true);

  const toggleHandler = (type) => {
    switch (type) {
      case "purchaseManage":
        setPurchaseManage((prev) => !prev);
        break;
      case "messageManage":
        setMessageManage((prev) => !prev);
        break;
      case "marketingManage":
        setMarketingManage((prev) => !prev);
        break;
      case "postManage":
        setPostManage((prev) => !prev);
        break;
      default:
        break;
    }
  };
  return (
    <MainContainer>
      <h1>알림</h1>
      <SubContainer>
        <AlarmContainer>
          <div>
            <h3>구매관리</h3>
            <h4>구매완료/배송중/배송완료/구매취소</h4>
          </div>
          <ToggleButton
            id="purchaseManage"
            type="checkbox"
            checked={purchaseManage}
            onChange={() => toggleHandler("purchaseManage")}
          />
        </AlarmContainer>
        <AlarmContainer>
          <div>
            <h3>메세지</h3>
            <h4>판매자/구매자와의 메시지 알림</h4>
          </div>
          <ToggleButton
            id="messageManage"
            type="checkbox"
            checked={messageManage}
            onChange={() => toggleHandler("messageManage")}
          />
        </AlarmContainer>
        <AlarmContainer>
          <div>
            <h3>마케팅 정보</h3>
            <h4>추천/이벤트 알림</h4>
          </div>
          <ToggleButton
            id="marketingManage"
            type="checkbox"
            checked={marketingManage}
            onChange={() => toggleHandler("marketingManage")}
          />
        </AlarmContainer>
        <AlarmContainer>
          <div>
            <h3>포스트 정보</h3>
            <h4>즐겨찾기 포스트 알림</h4>
          </div>
          <ToggleButton
            id="postManage"
            type="checkbox"
            checked={postManage}
            onChange={() => toggleHandler("postManage")}
          />
        </AlarmContainer>
      </SubContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 870px;
  height: 972px;
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

  h2 {
    font-size: 16px;
    margin-top: 5vh;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 794px;
  height: 450px;
  text-align: left;
  border: 1px solid rgba(156, 156, 156, 0.7);
  border-radius: 10px;
`;

const AlarmContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 775px;
  text-align: left;
  border-bottom: 1px solid rgba(156, 156, 156, 0.7);
  padding: 10px;

  h3 {
    margin: 5px 0px 0px 20px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #202123;
  }

  h4 {
    margin: 3px 0px 5px 20px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    color: #9c9c9c;
  }
`;

const ToggleButton = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  position: relative;
  margin: 23px 50px 0px 0px;
  width: 40px;
  height: 17px;
  background-color: #c0c0c0;
  border-radius: 15px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.5s;

  &:checked {
    background-color: #f0c920;
  }

  &:before {
    content: "";
    position: absolute;
    top: -2.5px;
    left: 0;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
  }

  &:checked:before {
    transform: translateX(25px);
  }
`;
