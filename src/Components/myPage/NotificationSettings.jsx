import React, { useRef } from "react";
import styled from "styled-components";

//마이페이지_ 알림 설정
export default function Alarm() {
  const fileInput = React.useRef(null);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  return (
    <MainContainer>
      <h1>알림</h1>
      <SubContainer>
        <AlarmContainer>
          <h3>구매관리</h3>
          <h4>구매완료/배송중/배송완료/구매취소</h4>
          <Button onClick={handleButtonClick}></Button>
        </AlarmContainer>
        <AlarmContainer>
          <h3>메세지</h3>
          <h4>판매자/구매자와의 메시지 알림</h4>
          <Button onClick={handleButtonClick}></Button>
        </AlarmContainer>
        <AlarmContainer>
          <h3>마케팅 정보</h3>
          <h4>추천/이벤트 알림</h4>
          <Button onClick={handleButtonClick}></Button>
        </AlarmContainer>
        <AlarmContainer>
          <h3>포스트 정보</h3>
          <h4>즐겨찾기 포스트 알림</h4>
          <Button onClick={handleButtonClick}></Button>
        </AlarmContainer>
      </SubContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 87vw;
  height: 97.2vh;
  margin: 3%;

  h1 {
    font-size: 26px;
    font-weight: bolder;
  }

  h2 {
    font-size: 16px;
    margin-top: 5vh;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 79.4vw;
  height: 35.2vh;
  border: 1px solid;
  border-radius: 5px;
  text-align: left;

  h3 {
    font-size: 15px;
  }

  h4 {
    font-size: 15px;
    color: gray;
  }
`;

const AlarmContainer = styled.div`
  width: 79.4vw;
  border-bottom: 1px solid;
  padding: 10px;
  text-align: left;

  h3 {
    font-size: 15px;
    margin-top: 5px;
    margin-left: 10px;
  }

  h4 {
    font-size: 14px;
    color: gray;
    margin-top: 5px;
    margin-left: 10px;
  }
`;

const Button = styled.button`
  width: 10vw;
  height: 4vh;
  border: none;
  border-radius: 5px;
  color: white;
  background: #f0c920;
`;
