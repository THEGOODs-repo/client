import React, { useState, useEffect } from "react";
import backgroundImg from "../img/background.png";
import profileImg from "../img/sampleimg.png";
import PostList from "../Components/Posting/PostList";
import FixedButtons from "../Components/Global/FixedButtons";
import styled from "styled-components";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import HeaderComponent from "../Components/Header/Header";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";

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

  const [isFeedClicked, setIsFeedClicked] = useState(true); // 피드 버튼이 클릭되었는지 여부를 추적하는 상태
  const [isProductClicked, setIsProductClicked] = useState(false); // 판매 상품 버튼이 클릭되었는지 여부를 추적하는 상태

  const [isFollowed, setIsFollowed] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({
    position: "absolute",
    marginTop: "1vw",
    marginLeft: "34vw",
    width: `${110 / 19.2}vw`,
    height: `${42 / 19.2}vw`,
    background: "#F0C920",
    borderRadius: "20px",
    color: "#fff",
    padding: "5px 10px",
    border: "none",
    cursor: "pointer",
    marginRight: "1.5vw",
    fontSize: `${14 / 19.2}vw`,
    fontWeight: "700",
  });

  const handleFollowButtonClick = () => {
    setIsFollowed(!isFollowed);
    if (!isFollowed) {
      setButtonStyle({
        fontFamily: "Noto Sans",
        position: "absolute",
        marginTop: "1vw",
        marginLeft: "34vw",
        width: `${110 / 19.2}vw`,
        height: `${42 / 19.2}vw`,
        background: "#eee",
        borderRadius: "20px",
        color: "#888",
        padding: "5px 10px",
        border: "none",
        cursor: "pointer",
        marginRight: "1.5vw",
        fontWeight: "700",
        fontSize: `${14 / 19.2}vw`,
      });
    } else {
      setButtonStyle({
        fontFamily: "Noto Sans",
        position: "absolute",
        marginTop: "1vw",
        marginLeft: "34vw",
        width: `${110 / 19.2}vw`,
        height: `${42 / 19.2}vw`,
        background: "#F0C920",
        borderRadius: "20px",
        color: "#fff",
        padding: "5px 10px",
        border: "none",
        cursor: "pointer",
        marginRight: "1.5vw",
        fontSize: `${14 / 19.2}vw`,
        fontWeight: "700",
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
        width: `${110 / 19.2}vw`,
        height: `${42 / 19.2}vw`,
        background: "#fff",
        borderRadius: "20px",
        padding: "5px 10px",
        cursor: "pointer",
        marginRight: "1.5vw",
        fontSize: `${14 / 19.2}vw`,
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
        width: `${110 / 19.2}vw`,
        height: `${42 / 19.2}vw`,
        background: "#eee",
        borderRadius: "20px",
        color: "#888",
        padding: "5px 10px",
        border: "none",
        cursor: "pointer",
        marginRight: "1.5vw",
        fontSize: `${14 / 19.2}vw`,
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
    setIsFeedClicked(true);
    setIsProductClicked(false);
  };
  const handleProductButtonClick = () => {
    setIsProductClicked(true);
    setIsFeedClicked(false);
  };

  return (
    <div>
      <HeaderComponent />
      <NavWrapContainer>
        <NavigationMenu />
        <div
          style={{
            borderBottom: "1px solid #9C9C9C",
            width: "100%",
            height: "3px",
          }}
        ></div>
        <NavigationCategoryMenu />
      </NavWrapContainer>
      <SellerBox>
        <Background>
          <Img src={profileData.profileImageUrl} alt="프로필 사진" />
        </Background>
        <button
          style={buttonStyle}
          onClick={handleFollowButtonClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isFollowed ? "팔로우 취소" : "팔로우"}
        </button>
        <Profile>
          <Name>{profileData.name}</Name>
          <Bio>{profileData.bio}</Bio>
          <FollowWish>
            <span style={{ fontWeight: "700" }}>{profileData.followers} </span>
            <span>팔로잉</span>{" "}
            <span style={{ fontWeight: "700" }}>{profileData.wishlist} </span>
            <span>상품 찜</span>
          </FollowWish>
          <div style={{ position: "absolute" }}>
            <FeedButton
              isClicked={isFeedClicked}
              onClick={handleFeedButtonClick}
            >
              피드
            </FeedButton>
            <ProductButton
              isClicked={isProductClicked}
              onClick={handleProductButtonClick}
            >
              판매 상품
            </ProductButton>
          </div>
        </Profile>
        <hr style={{ border: "1px solid #ddd", margin: "4vw 0" }} />
      </SellerBox>
      <div style={{ marginTop: "-3vw" }}>{isFeedClicked && <PostList />}</div>
      <FixedButtons />
    </div>
  );
};

export default Seller;
const NavWrapContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const SellerBox = styled.div`
  position: relative;
  width: ${830 / 19.2}vw;
  margin-left: 28vw;
  color: #333;
`;

const Background = styled.div`
  background-image: url(${(props) => props.backgroundImageUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: ${260 / 19.2}vw;
  background-color: #f6ebb8;
`;

const Img = styled.img`
  position: absolute;
  margin-top: 9vw;
  margin-left: 2vw;
  width: ${176 / 19.2}vw;
  height: ${176 / 19.2}vw;
  border-radius: 50%;
  border: 3px solid white;
`;

const Profile = styled.div`
  margin-top: 5.5vw;
  margin-left: 2.5vw;
`;

const Name = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: ${26 / 19.2}vw;
  color: #202123;
`;

const Bio = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-size: ${16 / 19.2}vw;
  color: #202123;
  margin-top: -1vw;
  font-weight: 500;
`;

const FollowWish = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-size: ${12 / 19.2}vw;
  line-height: ${0 / 19.2}vw;
  color: #000000;
`;

const FeedButton = styled.button`
  margin-top: 1vw;
  margin-left: 2vw;
  font-family: "Noto Sans";
  font-style: normal;
  font-size: ${16 / 19.2}vw;
  font-weight: ${(props) => (props.isClicked ? "700" : "400")};
  width: ${55 / 19.2}vw;
  height: 3vw;
  background-color: transparent;
  border: none;
  border-bottom: ${(props) =>
    props.isClicked ? "0.2vw solid #F0C920" : "none"};
`;

const ProductButton = styled.button`
  margin-top: 1vw;
  margin-left: 2vw;
  font-family: "Noto Sans";
  font-style: normal;
  font-size: ${16 / 19.2}vw;
  font-weight: ${(props) => (props.isClicked ? "700" : "400")};
  width: ${80 / 19.2}vw;
  height: 3vw;
  background-color: transparent;
  border: none;
  border-bottom: ${(props) =>
    props.isClicked ? "0.2vw solid #F0C920" : "none"};
`;
