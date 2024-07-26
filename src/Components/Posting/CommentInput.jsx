import React, { useState } from "react";
import styled from "styled-components";

const CommentInput = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      onSubmit(inputValue); // 부모 컴포넌트로 새로운 댓글 전달
      setInputValue(""); // 입력 값 초기화
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 엔터 키의 기본 동작 막기
      handleSubmit(); // Enter 키를 누르면 댓글 작성 함수 호출
    }
  };

  return (
    <CommentInputContainer>
      <StyledTextarea
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder=" 댓글을 입력해주세요."
      />
      <StyledButton onClick={handleSubmit}>게시</StyledButton>
    </CommentInputContainer>
  );
};

export default CommentInput;

const CommentInputContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: 20px 0 0 0;
  width: ${680 / 19.2}vw;
  min-height: ${46 / 19.2}vw;
  text-indent: 0.5vw;
  border: none;
  padding: 0.5px;

  background: rgba(217, 217, 217, 0.4);
  opacity: 0.8;
  border-radius: 30px;
  display: flex;
  align-items: center;
`;

const StyledTextarea = styled.input`
  width: ${550 / 19.2}vw;
  height: 100%;
  margin: 0 ${20 / 19.2}vw;
  background-color: transparent;
  border: none;
  outline: none;

  color: #52555b;
  font-weight: 400;
  font-family: "Noto Sans";
  font-size: ${14 / 19.2}vw;
  font-style: normal;
  line-height: ${19 / 19.2}vw;
`;

const StyledButton = styled.button`
  position: absolute;
  width: ${80 / 19.2}vw;
  height: ${38 / 19.2}vw;
  right: ${10 / 19.2}vw;
  border: none;
  padding: 0 0.5vw;

  background: #d9d9d9;
  opacity: 0.8;
  box-shadow: 0px 0px 1.5px 0.5px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;

  color: #52555b;
`;
