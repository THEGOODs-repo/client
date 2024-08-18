import React, { useEffect, useState } from "react";
import PostList from "../Components/Posting/PostList";
import FixedButtons from "../Components/Global/FixedButtons";
import styled from "styled-components";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import HeaderComponent from "../Components/Header/Header";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";
import BaseFooter from "../Components/Footer/BaseFooter";
import pencil from "../img/pencil-button.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [isFollowed, setIsFollowed] = useState(false);
  const [error, setError] = useState(null); // 에러 상태 추가
  const token = useSelector((state) => state.login.token);

  const handleClick = () => {
    setIsFollowed(!isFollowed);
  };

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const response = await axios.get(
          "https://dev.the-goods.store/api/posts/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              like: true,
            },
          },
        );
        console.log("Full API response:", response);
        if (response.data.isSuccess) {
          setPosts(response.data.result.posts);
          setError(null); // 성공 시 에러 초기화
        } else {
          console.error("API response error:", response.data.message);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setError("로그인이 필요합니다.");
        } else {
          setError("포스트를 불러오는 데 실패했습니다."); // 기타 에러 처리
        }
        console.error("Failed to fetch posts:", error);
      }
    };

    if (token) {
      fetchPopularPosts();
    }
  }, [token]);

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

      <Background>
        <Line />
        <ToggleWrapper onClick={handleClick}>
          <ToggleOption isFollowed={!isFollowed}>인기</ToggleOption>
          <ToggleOption isFollowed={isFollowed}>팔로우</ToggleOption>
          <ToggleSlider isFollowed={isFollowed} />
        </ToggleWrapper>

        {error ? ( // 에러 메시지 렌더링
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <PostList posts={posts} /> // PostList 컴포넌트에 데이터 전달
        )}

        <Link to="/CreatePost">
          <WriteButton>
            <img
              src={pencil}
              alt="포스트 글쓰기"
              style={{ width: "2.5vw", height: "2.5vw" }}
            />
          </WriteButton>
        </Link>
        <FixedButtons />
        <BaseFooter />
      </Background>
    </div>
  );
};

export default Post;

const ErrorMessage = styled.div`
  text-align: center;
  color: black;
  font-size: 1.2em;
  margin-top: 20px;
`;

const Background = styled.div`
  background-color: #f9f9f9;
  height: 100%;
`;
const NavWrapContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

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
const WriteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4vw;
  height: 4vw;
  border-radius: 50%;
  background-color: rgba(240, 201, 32, 0.7);
  cursor: pointer;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 45%;
  right: 7vw;
`;
