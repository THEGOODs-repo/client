import styled from "styled-components";
import React, { useState } from "react";
import Register from "../../Pages/Register";

export default function PostRegister() {
  const [classify, setClassify] = useState("공지사항");
  const [readRight, setReadRight] = useState("전체");
  const handleClassify = (e) => {
    setClassify(e.target.value);
  };
  const handleReadRight = (e) => {
    setReadRight(e.target.value);
  };
  return (
    <>
      <MainContainer>
        <h2>게시판 등록</h2>
        <h3>분류</h3>
        <Select id="dropdown" value={classify} onChange={handleClassify}>
          <Option value="공지사항">공지사항</Option>
          <Option value="이벤트">이벤트</Option>
        </Select>
        <h3>게시글 제목</h3>
        <Title />
        <h3>읽기 권한</h3>
        <Select id="dropdown" value={readRight} onChange={handleReadRight}>
          <Option value="전체">전체</Option>
          <Option value="회원">회원</Option>
        </Select>
        <h3>게시글 내용</h3>
        <Content />
        <RegisterButton>게시글 등록</RegisterButton>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: ${870 / 19.2}vw;
  height: 950px;
  border: 2.475px solid rgba(0, 0, 0, 0.05);
  padding: 10px 30px;
  h2 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: ${26 / 19.2}vw;
    line-height: ${35 / 19.2}vw;
    color: #202123;
  }
  h3 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: ${20 / 19.2}vw;
    line-height: ${30 / 19.2}vw;
    color: #202123;
  }
`;
const Select = styled.select`
  padding: 0 5px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  border: 2.475px solid rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  height: ${50 / 19.2}vw;
`;

const Option = styled.option``;
const Title = styled.input`
  font-family: "Noto Sans";
  font-style: normal;
  padding: 0 10px;
  font-size: 16px;
  border: 2.475px solid rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  height: ${50 / 19.2}vw;
`;
const Content = styled.textarea`
  font-family: "Noto Sans";
  font-style: normal;
  padding: 0 5px;
  font-size: 16px;
  border: 2.475px solid rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  height: ${300 / 19.2}vw;
  padding: 10px;
`;
const RegisterButton = styled.button`
  margin-top: 30px;
  border-radius: 5px;
  border: none;
  background-color: #f0c920;
  height: ${50 / 19.2}vw;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: ${20 / 19.2}vw;
  color: white;
`;
