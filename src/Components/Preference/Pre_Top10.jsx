import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setTop10 } from "../../redux/preferenceSlice";

export default function PreferenceTop10({ index, name, img }) {
  const [click, setClick] = useState(null);
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    setClick((prevClick) => !prevClick);
    dispatch(setTop10({ product: !click }));
  };
  return (
    <PreferenceProductContainer onClick={onClickHandler}>
      <div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <h5
            style={{
              width: "34px",
              height: "34px",
              textAlign: "center",
              background: click ? "#F0C920" : "black",
              borderRadius: "50%",
              color: "white",
            }}
          >
            {index}
          </h5>
          <h5
            style={{
              color: click ? "#F0C920" : "black",
            }}
          >
            {name}
          </h5>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Img
          style={{
            background: `url(${img}) center/cover`,
            boxShadow: click
              ? "0px 0px 5px 1px #F0C920"
              : "0px 0px 5px 1px rgba(0, 0, 0, 0.25)",
            border: click
              ? "1px solid #F0C920"
              : "1px solid rgba(156, 156, 156, 0.5)",
          }}
        />
      </div>
    </PreferenceProductContainer>
  );
}
const PreferenceProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fefdfd;

  h5 {
    margin-top: 0px;
    margin-bottom: 8px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
  }

  h6 {
    width: 303px;
    margin: 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
`;

const Img = styled.div`
  width: 280px;
  height: 280px;
  margin-left: 10px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;
