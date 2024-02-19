import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { increaseSeller, decreaseSeller } from "../../../redux/preferenceSlice";

export default function PreferenceSeller({
  index,
  name,
  profile,
  introduce,
  mainImg1,
  mainImg2,
}) {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    setClick((prevClick) => !prevClick);
    if (!click) {
      dispatch(increaseSeller(index + 1));
    } else {
      dispatch(decreaseSeller(index + 1));
    }
  };

  return (
    <PreferenceProductContainer
      onClick={onClickHandler}
      style={{
        boxShadow: click
          ? "0px 0px 3px 1px #F0C920"
          : "0px 0px 3px 1px rgba(0, 0, 0, 0.25)",
        width: "280px",
        height: "220px",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", marginBottom: "5px" }}
      >
        <ProfileImg
          style={{
            background: `url(${profile}) center/cover`,
          }}
        />
        <div style={{ marginLeft: "12px" }}>
          <h5>{name}</h5>
          <h6>{introduce}</h6>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "5px",
          marginTop: "5px",
        }}
      >
        <MainImg1
          style={{
            background: `url(${mainImg1}) center/cover`,
          }}
        />
        <MainImg2
          style={{
            background: `url(${mainImg2}) center/cover`,
          }}
        />
      </div>
    </PreferenceProductContainer>
  );
}

const PreferenceProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 280px;
  background: #fefdfd;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  h5 {
    margin: 10px 0px 3px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #000;
  }

  h6 {
    width: 160px;
    margin: 0;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    color: #000;
  }
`;

const ProfileImg = styled.div`
  display: flex;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #fefdfd;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.25);
`;

const MainImg1 = styled.div`
  width: 120px;
  height: 100px;
  border-radius: 20px;
`;

const MainImg2 = styled.div`
  width: 120px;
  height: 100px;
  border-radius: 20px;
`;
