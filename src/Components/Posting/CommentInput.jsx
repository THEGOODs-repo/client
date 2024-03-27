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
        placeholder=" 댓글 달기..."
      />
      <StyledButton onClick={handleSubmit}>게시</StyledButton>
    </CommentInputContainer>
  );
};

export default CommentInput;

const CommentInputContainer = styled.div`
  position: relative;
  display: flex;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  color: #52555b;
  font-weight: 400;
  font-family: "Noto Sans";
  font-size: ${16 / 19.2}vw;
  width: ${530 / 19.2}vw;
  height: ${60 / 19.2}vw;
  text-indent: 0.5vw;
  padding-top: 0.8vw;
  border: none;
`;

const StyledButton = styled.button`
  width: ${80 / 19.2}vw;
  height: ${80 / 19.2}vw;
  background: transparent;
  color: #307cf7;
  font-weight: 700;
  font-family: "Noto Sans";
  font-size: ${16 / 19.2}vw;
  border: none;
`;
