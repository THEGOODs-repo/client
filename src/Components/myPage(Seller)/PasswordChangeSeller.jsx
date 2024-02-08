import React, { useRef } from "react";
import styled from "styled-components";

//마이페이지_비밀번호변경
export default function PasswordChangeSeller() {
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 870px;
  height: 1300px;
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
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 783px;
  height: 498px;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 5px;

  h3 {
    align-self: flex-start;
    padding-left: 5.8%;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;

    color: #52555b;
  }
`;

const Input = styled.input`
  width: 685px;
  height: 60px;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 5px;
  margin-bottom: 12px;

  &::placeholder {
    padding-left: 5px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;

    color: #9c9c9c;
  }
`;
const Button = styled.button`
  width: 122px;
  height: 50px;
  align-self: flex-end;
  margin-top: 1.8%;
  margin-right: 5.8%;
  border: none;
  background: #f0c920;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;

  color: #ffffff;
`;
