import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import btnimg1 from "../../img/switch-horizontal.svg";
import btnimg2 from "../../img/switch-horizontal1.svg";
import FavoriteList from "./FavoriteList";
import { color } from "@mui/system";

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
  top: -7vh;
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
  const [isFollowed, setIsFollowed] = useState(false);

  const handleClick = () => {
    setIsFollowed(!isFollowed);
  };
  return (
    <>
      <Line />
      <ToggleWrapper onClick={handleClick}>
        <ToggleOption isFollowed={!isFollowed}>인기</ToggleOption>
        <ToggleOption isFollowed={isFollowed}>팔로우</ToggleOption>
        <ToggleSlider isFollowed={isFollowed} />
      </ToggleWrapper>
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
    </>
  );
};

export default PostBanner;

const Line = styled.div`
  width: 100%;
  opacity: 0.8;
  border: 0.5px solid #9c9c9c;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`;

const ToggleWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
  background: #ccc;
  border-radius: 25px;
  display: flex;
  cursor: pointer;
  overflow: hidden;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  width: ${1150 / 19.2}vw;
  height: ${85 / 19.2}vw;
  margin: 25px auto;
  background: #ffffff;
  border: 1.5px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
`;

const ToggleOption = styled.div`
  flex: 1;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.isFollowed ? "#202123" : "#888")};
  transition: color 0.3s;
`;

const ToggleSlider = styled.div`
  position: absolute;
  width: 100px;
  height: 50px;
  transition: transform 0.3s;
  transform: ${(props) =>
    props.isFollowed ? "translateX(100%)" : "translateX(0)"};
  width: ${560 / 19.2}vw;
  height: ${68 / 19.2}vw;
  background: rgba(240, 201, 32, 0.2);
  border-radius: 50px;
`;
