import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSeller } from "../../redux/preferenceSlice";

export default function PreferenceSeller({
  name,
  profile,
  introduce,
  mainImg1,
  mainImg2,
}) {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    setClick((prevClick) => !prevClick);
    dispatch(setSeller({ product: !click }));
  };
  return (
    <PreferenceProductContainer
      onClick={onClickHandler}
      style={{
        boxShadow: click
          ? "0px 0px 5px 1px #F0C920"
          : "0px 0px 5px 1px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ProfileImg
          style={{
            background: `url(${profile}) center/cover`,
            width: "98px",
            height: "100px",
            borderRadius: "50%",
          }}
        />
        <div style={{ marginLeft: "10px" }}>
          <h5>{name}</h5>
          <h6>{introduce}</h6>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <MainImg1
          style={{
            background: `url(${mainImg1}) center/cover`,
            width: "205px",
            height: "175px",
          }}
        />

        <MainImg2
          style={{
            background: `url(${mainImg2}) center/cover`,
            width: "205px",
            height: "175px",
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
  width: 475px;
  height: 347px;
  background: #fefdfd;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

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

const ProfileImg = styled.div`
  display: flex;
  width: 475px;
  height: 347px;
  background: #fefdfd;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const MainImg1 = styled.div`
  width: 205px;
  height: 175px;
  left: 472px;
  top: 1204px;
  background: url(𝐥𝐚𝐭𝐭𝐢𝐞.jpg);
  border-radius: 20px;
`;

const MainImg2 = styled.div`
  width: 205px;
  height: 175px;
  left: 472px;
  top: 1204px;
  background: url(𝐥𝐚𝐭𝐭𝐢𝐞.jpg);
  border-radius: 20px;
`;
