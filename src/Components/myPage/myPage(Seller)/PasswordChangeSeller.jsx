import React from "react";
import styled from "styled-components";
//마이페이지_비밀번호변경
// 특이사항 ** 비밀번호 유효성 검사 필요 **
// 특이사항 ** 변경하기 버튼 기능 **

export default function PasswordChangeSeller() {
  const handleButtonClick = (e) => {};

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
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 645.38px;
  height: 410.7px;
  margin-top: 12.315px;
  border: 0.825px solid rgba(156, 156, 156, 0.8);
  border-radius: 4.125px;

  h3 {
    align-self: flex-start;
    padding-left: 4.785%;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 13.2px;
    line-height: 18.15px;
    color: #52555b;
  }
`;

const Input = styled.input`
  width: 563.63px;
  height: 49.5px;
  border: 0.825px solid rgba(156, 156, 156, 0.8);
  border-radius: 4.125px;
  margin-bottom: 9.9px;
  padding-left: 6px;

  &::placeholder {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14.85px;
    line-height: 20.475px;
    color: #9c9c9c;
  }
`;

const Button = styled.button`
  width: 100.05px;
  height: 41.25px;
  align-self: flex-end;
  margin-top: 9.4875px;
  margin-right: 38.775px;
  border: none;
  background: #f0c920;
  box-shadow: 0px 0px 4.125px 1.05px rgba(0, 0, 0, 0.08);
  border-radius: 4.125px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14.85px;
  line-height: 20.475px;
  text-align: center;
  color: #ffffff;
`;
