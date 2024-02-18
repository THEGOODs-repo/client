import React from "react";
import styled from "styled-components";
// 마이페이지_ 맞춤정보관리_ 카테고리 및 태그 컴포넌트

export default function CategoryComponent({
  keyword,
  isTagSelected,
  handleButtonClick,
}) {
  return (
    <Button onClick={handleButtonClick} isTagSelected={isTagSelected}>
      {keyword}
    </Button>
  );
}

const Button = styled.button`
  width: 90px;
  height: 40px;
  background: ${({ isTagSelected }) =>
    isTagSelected ? "#F0C920" : "rgba(228, 228, 228, 0.4)"};
  border: ${({ isTagSelected }) =>
    isTagSelected ? "none" : "1px solid rgba(156, 156, 156, 0.5)"};
  border-radius: 8px;
  font-family: "Noto Sans";
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: ${({ isTagSelected }) => (isTagSelected ? "#FFFFFF" : "#888888")};
`;
