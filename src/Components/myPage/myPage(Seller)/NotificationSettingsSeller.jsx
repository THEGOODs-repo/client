import React, { useState } from "react";
import styled from "styled-components";
// 마이페이지_알림 설정
// 특이사항 ** 디자인 추가되는 부분 있다고 했음. **

export default function AlarmSeller() {
  const [purchaseManage, setPurchaseManage] = useState(true);
  const [messageManage, setMessageManage] = useState(true);
  const [marketingManage, setMarketingManage] = useState(true);
  const [postManage, setPostManage] = useState(true);
  const [mentionManage, setMentionManage] = useState(true);

  // 토글
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
      case "mentionManage":
        setMentionManage((prev) => !prev);
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

        <AlarmContainer style={{ borderBottom: "none" }}>
          <div>
            <h3>멘션 정보</h3>
            <h4>포스트 멘션 알림</h4>
          </div>
          <ToggleButton
            id="mentionManage"
            type="checkbox"
            checked={mentionManage}
            onChange={() => toggleHandler("mentionManage")}
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
  width: 718.125px;
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

  h2 {
    font-size: 13.2px;
    margin-top: 4.125vh;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 655.35px;
  height: 350px;
  margin-top: 12.345px;
  text-align: left;
  border: 0.825px solid rgba(156, 156, 156, 0.7);
  border-radius: 8.25px;
`;

const AlarmContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 637.875px;
  text-align: left;
  border-bottom: 0.825px solid rgba(156, 156, 156, 0.7);
  padding: 8.25px;

  h3 {
    margin: 4.125px 0px 0px 16.5px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14.85px;
    color: #202123;
  }

  h4 {
    margin: 2.475px 0px 4.125px 16.5px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14.85px;
    color: #9c9c9c;
  }
`;

const ToggleButton = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  position: relative;
  margin: 19.575px 41.25px 0px 0px;
  width: 33px;
  height: 14.025px;
  background-color: #c0c0c0;
  border-radius: 12.375px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.5s;

  &:checked {
    background-color: #f0c920;
  }

  &:before {
    content: "";
    position: absolute;
    top: -2.1px;
    left: 0;
    width: 18.15px;
    height: 18.15px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 1.65px 4.125px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
  }

  &:checked:before {
    transform: translateX(20.625px);
  }
`;
