import React, { useRef } from "react";
import styled from "styled-components";

//마이페이지_비밀번호변경
export default function PasswordChange() {
  const fileInput = React.useRef(null);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  return (
    <MainContainer>
      <h1>비밀번호 변경</h1>
      <SubContainer>
        <h3>현재 비밀번호</h3>
        <Input type="password" placeholder="기존 비밀번호를 입력해주세요." />
        <h3>변경할 비밀번호</h3>
        <Input type="password" placeholder=" 변경할 비밀번호를 입력해주세요." />
        <h3>한번 더 입력</h3>
        <Input
          type="password"
          placeholder=" 변경할 비밀번호를 한번 더입력해주세요."
        />
        <Button onClick={handleButtonClick}>변경하기</Button>
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
    color: #202123;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 78.3vw;
  height: 49.8vh;
  padding: 7%;
  border: 1px solid gray;
  border-radius: 5px;
  text-align: left;

  h3 {
    font-size: 15px;
    color: #52555b;
  }

  h4 {
    font-size: 15px;
    color: gray;
  }
`;
const Input = styled.input`
  width: 68.5vw;
  height: 6vh;
  border: 1px solid #9c9c9c;
  border-radius: 4px;
  margin-bottom: 15px;
`;
const Button = styled.button`
  width: 13vw;
  height: 4.5vh;
  border: none;
  border-radius: 5px;
  margin-left: 80%;
  color: white;
  background: #f0c920;
`;
