import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setProduct } from "../../redux/preferenceSlice";

export default function PreferenceProduct({ index, name, img }) {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);

  const onClickHandler = () => {
    setClick((prevClick) => !prevClick);
    dispatch(setProduct({ product: !click }));
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
          width: "280px",
          height: "300px",
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
  width: 280px;
  height: 300px;
  margin-left: 10px;
  border-radius: 20px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
`;
