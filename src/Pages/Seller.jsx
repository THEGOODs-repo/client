import React, { useState, useEffect } from "react";
import backgroundImg from "../img/background.png";
import profileImg from "../img/sampleimg.png";
import PostList from "../Components/Posting/PostList";
import FixedButtons from "../Components/Global/FixedButtons";
const Seller = () => {
  const [profileData, setProfileData] = useState({
    //초기상태
    name: "John Doe",
    bio: "잘부탁드립니다!",
    followers: 0,
    wishlist: 0,
    backgroundImageUrl: backgroundImg,
    profileImageUrl: profileImg,
  });

  const [isFeedClicked, setIsFeedClicked] = useState(false); // 피드 버튼이 클릭되었는지 여부를 추적하는 상태
  const [isProductClicked, setIsProductClicked] = useState(false); // 판매 상품 버튼이 클릭되었는지 여부를 추적하는 상태

  const [isFollowed, setIsFollowed] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({
    position: "absolute",
    marginTop: "1vw",
    marginLeft: "34vw",
    width: "7vw",
    height: "3vw",
    background: "#F0C920",
    borderRadius: "20px",
    color: "#fff",
    padding: "5px 10px",
    border: "none",
    cursor: "pointer",
    marginRight: "1.5vw",
    fontSize: "1vw",
  });

  const handleFollowButtonClick = () => {
    setIsFollowed(!isFollowed);
    if (!isFollowed) {
      setButtonStyle({
        fontFamily: "Noto Sans",
        position: "absolute",
        marginTop: "1vw",
        marginLeft: "34vw",
        width: "7vw",
        height: "3vw",
        background: "#eee",
        borderRadius: "20px",
        color: "#888",
        padding: "5px 10px",
        border: "none",
        cursor: "pointer",
        marginRight: "1.5vw",
        fontSize: "1vw",
      });
    } else {
      setButtonStyle({
        fontFamily: "Noto Sans",
        position: "absolute",
        marginTop: "1vw",
        marginLeft: "34vw",
        width: "7vw",
        height: "3vw",
        background: "#F0C920",
        borderRadius: "20px",
        color: "#fff",
        padding: "5px 10px",
        border: "none",
        cursor: "pointer",
        marginRight: "1.5vw",
        fontSize: "1vw",
      });
    }
  };

  const handleMouseEnter = () => {
    if (isFollowed) {
      setButtonStyle({
        fontFamily: "Noto Sans",
        color: "#FD3C56",
        border: "2px solid #FD3C56",
        position: "absolute",
        marginTop: "1vw",
        marginLeft: "34vw",
        width: "7vw",
        height: "3vw",
        background: "#fff",
        borderRadius: "20px",
        padding: "5px 10px",
        cursor: "pointer",
        marginRight: "1.5vw",
        fontSize: "1vw",
        fontWeight: "700",
      });
    }
  };

  const handleMouseLeave = () => {
    if (isFollowed) {
      setButtonStyle({
        fontFamily: "Noto Sans",
        position: "absolute",
        marginTop: "1vw",
        marginLeft: "34vw",
        width: "7vw",
        height: "3vw",
        background: "#eee",
        borderRadius: "20px",
        color: "#888",
        padding: "5px 10px",
        border: "none",
        cursor: "pointer",
        marginRight: "1.5vw",
        fontSize: "1vw",
      });
    }
  };

  useEffect(() => {
    // 서버에서 사용자 프로필 데이터를 가져오는 함수 호출
    fetchProfileData();
  }, []);

  const fetchProfileData = () => {
    // 서버에서 사용자 프로필 데이터를 가져오는 API 호출

    // 임시로 프로필 데이터 설정
    setProfileData({
      name: "더 굿즈",
      bio: "안녕하세요! 더 굿즈입니다.",
      followers: 1000,
      wishlist: 500,
      backgroundImageUrl: backgroundImg,
      profileImageUrl: profileImg, // 임시로 설정된 사용자 프로필 사진의 URL
    });
  };
  const handleFeedButtonClick = () => {
    setIsFeedClicked(!isFeedClicked);
    setIsProductClicked(false);
  };
  const handleProductButtonClick = () => {
    setIsProductClicked(!isProductClicked);
    setIsFeedClicked(false);
  };

  const sellerBoxStyle = {
    position: "relative",
    width: "44vw",
    marginLeft: "28vw",
    color: "#333",
  };
  const backgroundStyle = {
    backgroundImage: `url(${profileData.backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "15vw",
  };
  const imgStyle = {
    position: "absolute",
    marginTop: "10vw",
    marginLeft: "2vw",
    width: "10vw",
    height: "10vw",
    borderRadius: "50%",
    border: "3px solid white",
  };
  const profileStyle = {
    marginTop: "7vw",
    marginLeft: "3vw",
  };
  const nameStyle = {
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "1.5vw",
    color: "#202123",
    lineHeight: "1.5vw",
  };
  const bioStyle = {
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontSize: "1vw",
    lineHeight: "1vw",
    color: "#202123",
    marginTop: "-1vw",
  };
  const followWish = {
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontSize: "1vw",
    lineHeight: "0vw",
    color: "#202123",
  };
  const feedButtonStyle = {
    marginTop: "1vw",
    marginLeft: "2vw",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontSize: "1.2vw",
    fontWeight: isFeedClicked ? "700" : "400",
    width: "5vw",
    height: "4vw",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: isFeedClicked ? "0.2vw solid #F0C920" : "none",
  };
  const productButtonStyle = {
    marginTop: "1vw",
    marginLeft: "2vw",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontSize: "1.2vw",
    fontWeight: isProductClicked ? "700" : "400",
    width: "7vw",
    height: "4vw",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: isProductClicked ? "0.2vw solid #F0C920" : "none",
  };

  return (
    <div>
      <div style={sellerBoxStyle}>
        <div style={backgroundStyle}>
          <img
            src={profileData.profileImageUrl}
            alt="프로필 사진"
            style={imgStyle}
          />
        </div>
        <button
          style={buttonStyle}
          onClick={handleFollowButtonClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isFollowed ? "팔로우 취소" : "팔로우"}
        </button>
        <div style={profileStyle}>
          <p style={nameStyle}>{profileData.name}</p>
          <p style={bioStyle}>{profileData.bio}</p>
          <div style={followWish}>
            <span style={{ fontWeight: "700" }}>{profileData.followers} </span>
            <span>팔로잉</span>{" "}
            <span style={{ fontWeight: "700" }}>{profileData.wishlist} </span>
            <span>상품 찜</span>
          </div>
          <div style={{ position: "absolute" }}>
            <button style={feedButtonStyle} onClick={handleFeedButtonClick}>
              피드
            </button>
            <button
              style={productButtonStyle}
              onClick={handleProductButtonClick}
            >
              판매 상품
            </button>
          </div>
        </div>
        <hr style={{ border: "1px solid #ddd", margin: "5vw 0" }} />
      </div>
      <div style={{ marginTop: "-5.5vw" }}>{isFeedClicked && <PostList />}</div>
      <FixedButtons />
    </div>
  );
};

export default Seller;
