import React, { useState } from "react";
import styled from "styled-components";

export default function CategoryComponent({ keyword }) {
  const [tag, setTag] = useState(null);

  const handleButtonClick = (e) => {
    if (tag === null) {
      setTag(true);
    } else if (tag === true) {
      setTag(null);
    }
  };

  return (
    <Category>
      <Button
        style={{ width: 110, height: 50 }}
        onClick={handleButtonClick}
        isTagSelected={tag === true}
      >
        {keyword}
      </Button>
    </Category>
  );
}

const Category = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 2px;
`;

const Button = styled.button`
  width: 110px;
  height: 50px;

  background: ${({ isTagSelected }) =>
    isTagSelected ? "#F0C920" : "rgba(228, 228, 228, 0.4)"};

  border: ${({ isTagSelected }) =>
    isTagSelected ? "none" : "1px solid rgba(156, 156, 156, 0.5)"};
  border-radius: 10px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;

  color: ${({ isTagSelected }) => (isTagSelected ? "#FFFFFF" : " #888888")};
`;
