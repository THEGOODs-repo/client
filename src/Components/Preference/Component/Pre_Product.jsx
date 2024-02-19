import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  increaseProduct,
  decreaseProduct,
} from "../../../redux/preferenceSlice";

export default function PreferenceProduct({ index, name, img }) {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);

  const onClickHandler = () => {
    setClick((prevClick) => !prevClick);
    if (!click) {
      dispatch(increaseProduct(index + 1));
    } else {
      dispatch(decreaseProduct(index + 1));
    }
  };

  return (
    <PreferenceProductContainer
      style={{
        boxShadow: click
          ? "0px 0px 5px 1px #F0C920"
          : "0px 0px 5px 1px rgba(0, 0, 0, 0.25)",
        background: `url(${img}) center/cover`,
        borderRadius: "20px",
      }}
    >
      <h4
        style={{
          display: "flex",
          width: "180px",
          height: "190px",
          margin: "0px",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0, 0, 0, 0.4)",
          borderRadius: "20px",
          color: click ? "#F0C920" : "white",
        }}
        onClick={onClickHandler}
      >
        #{name}
      </h4>
    </PreferenceProductContainer>
  );
}

const PreferenceProductContainer = styled.div`
  display: flex;
  width: 180px;
  height: 190px;
  margin-left: 10px;
  border-radius: 20px;
  font: 700 18px/25px "Noto Sans";
  color: #fff;
`;
