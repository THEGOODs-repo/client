import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { increaseTag, decreaseTag } from "../../../redux/preferenceSlice";

export default function PreferenceTag({ index, name }) {
  const [click, setClick] = useState(null);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    setClick((prevClick) => !prevClick);
    if (!click) {
      dispatch(increaseTag(index + 1));
    } else {
      dispatch(decreaseTag(index + 1));
    }
  };

  return (
    <PreferenceProductContainer
      onClick={onClickHandler}
      style={{
        boxShadow: click
          ? "0px 0px 3.2px 0.8px #F0C920"
          : "0px 0px 3.2px 0.8px rgba(0, 0, 0, 0.25)",
        border: click
          ? "0.8px solid #F0C920"
          : "0.8px solid rgba(156, 156, 156, 0.5)",
        height: "32px",
      }}
    >
      <h5
        style={{
          color: click ? "#F0C920" : "#000000",
        }}
      >
        #{name}
      </h5>
    </PreferenceProductContainer>
  );
}

const PreferenceProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 0px;
  margin-left: 0px;
  background: #fefdfd;
  box-shadow: 0px 0px 3.2px 0.8px rgba(0, 0, 0, 0.25);
  border: 0.8px solid rgba(156, 156, 156, 0.5);
  border-radius: 16px;

  h5 {
    margin-left: 12.8px;
    margin-right: 12.8px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 12.8px;
    line-height: 0px;
    color: #000000;
  }
`;
