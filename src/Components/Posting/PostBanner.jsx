import React, { useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../img/Untitled.svg";
import btnimg1 from "../../img/switch-horizontal.svg";
import btnimg2 from "../../img/switch-horizontal1.svg";

import FavoriteList from "./FavoriteList";

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

  const buttonStyle1 = {
    boxSizing: "border-box",
    position: "relative",
    width: "18vw",
    height: "7vh",
    left: "29%",
    top: "0vw",
    background: followButtonClicked
      ? "linear-gradient(90deg, #7474BF 0%, #348AC7 100%)"
      : "#F9F9F9", // 클릭된 상태에 따라 배경색 변경
    border: "1px solid rgba(156, 156, 156, 0.5)",
    boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.2)",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
  };
  const buttonTextStyle = {
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "1.1vw",
    lineHeight: "22px",
    color: followButtonClicked ? "#F9F9F9" : "#202123", // 클릭된 상태에 따라 텍스트 색상 변경
  };
  const buttonStyle2 = {
    boxSizing: "border-box",
    position: "relative",
    width: "9vw",
    height: "7vh",
    left: "48%",
    top: "-7vh",
    background: followButtonClicked
      ? "linear-gradient(90deg, #7474BF 0%, #348AC7 100%)"
      : "#F9F9F9", // 클릭된 상태에 따라 배경색 변경
    border: "1px solid rgba(156, 156, 156, 0.5)",
    boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.2)",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
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
        <Link to="../pages/Post">
          <button style={buttonStyle1} onClick={handleFollowButtonClick}>
            <span
              style={{
                marginRight: "1vw",
                width: "2vw",
                position: "absolute",
                left: "2vw",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <img
                src={followButtonClicked ? btnimg2 : btnimg1}
                alt="Follow button"
                style={{ width: "100%" }}
              />{" "}
              {/* 이미지 크기를 조정 */}
            </span>
            <span style={{ paddingLeft: "3vw", paddingRight: "1vw" }}>
              <span style={buttonTextStyle}>
                {followButtonClicked
                  ? "인기 포스트 보기"
                  : "팔로우하는 작가 모아보기"}
              </span>{" "}
              {/* 텍스트 변경 */}
            </span>
          </button>
        </Link>
        <button onClick={openModal} style={buttonStyle2}>
          <span style={buttonTextStyle}>즐겨찾기</span>
        </button>

        <FavoriteList isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default PostBanner;
