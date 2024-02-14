import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setTag } from "../../redux/preferenceSlice";

export default function PreferenceTag({ name }) {
  const [click, setClick] = useState(null);
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    setClick((prevClick) => !prevClick);
    dispatch(setTag({ product: !click }));
  };

  return (
    <PreferenceProductContainer
      onClick={onClickHandler}
      style={{
        boxShadow: click
          ? "0px 0px 5px 1px #F0C920"
          : "0px 0px 5px 1px rgba(0, 0, 0, 0.25)",
        border: click
          ? "1px solid #F0C920"
          : "1px solid rgba(156, 156, 156, 0.5)",
      }}
    >
      <h5 style={{ color: click ? "#F0C920" : "#000000" }}>#{name}</h5>
    </PreferenceProductContainer>
  );
}

const PreferenceProductContainer = styled.div`
  display: flex;
  height: 50px;
  flex-direction: column;
  background: #fefdfd;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(156, 156, 156, 0.5);
  border-radius: 25px;

  h5 {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
  }
`;
