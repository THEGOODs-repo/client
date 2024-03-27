import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import banner from "../../img/Untitled.svg";
import btnimg1 from "../../img/switch-horizontal.svg";
import btnimg2 from "../../img/switch-horizontal1.svg";

import FavoriteList from "./FavoriteList";

const Button1 = styled.button`
  box-sizing: border-box;
  position: relative;
  width: ${269 / 19.2}vw;
  height: ${66 / 19.2}vw;
  margin-left: ${590 / 19.2}vw;
  top: 0vw;
  background: ${(props) =>
    props.followClicked
      ? "linear-gradient(90deg, #7474BF 0%, #348AC7 100%)"
      : "#F9F9F9"};
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const Button2 = styled.button`
  box-sizing: border-box;
  position: relative;
  width: ${120 / 19.2}vw;
  height: ${66 / 19.2}vw;
  left: 46%;
  top: -6vh;
  background: ${(props) =>
    props.followClicked
      ? "linear-gradient(90deg, #7474BF 0%, #348AC7 100%)"
      : "#F9F9F9"};
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const ButtonText = styled.span`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 700;
  font-size: ${16 / 19.2}vw;
  line-height: 22px;
  color: ${(props) => (props.followClicked ? "#F9F9F9" : "#202123")};
  text-decoration: none;
`;

const PostBanner = () => {
  const [followButtonClicked, setFollowButtonClicked] = useState(false);
  const handleFollowButtonClick = () => {
    setFollowButtonClicked(!followButtonClicked);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("Opening modal");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <img
        src={banner}
        alt="Banner"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <div>
        <Link to="...">
          <Button1
            followClicked={followButtonClicked}
            onClick={handleFollowButtonClick}
          >
            <span
              style={{
                marginRight: "1vw",
                width: "2vw",
                position: "absolute",
                left: "1.2vw",
                top: "55%",
                transform: "translateY(-50%)",
              }}
            >
              <img
                src={followButtonClicked ? btnimg2 : btnimg1}
                alt="Follow button"
                style={{ width: `${28 / 19.2}vw` }}
              />
            </span>
            <span style={{ paddingLeft: "3vw", paddingRight: "1vw" }}>
              <ButtonText followClicked={followButtonClicked}>
                {followButtonClicked
                  ? "인기 포스트 보기"
                  : "팔로우하는 작가 모아보기"}
              </ButtonText>
            </span>
          </Button1>
        </Link>
        <Button2 onClick={openModal} followClicked={followButtonClicked}>
          <ButtonText followClicked={followButtonClicked}>즐겨찾기</ButtonText>
        </Button2>

        <FavoriteList isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default PostBanner;
