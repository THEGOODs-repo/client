import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // axios를 사용하여 API 호출
import Comment from "../Components/Posting/Comment";
import CommentInput from "../Components/Posting/CommentInput";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import HeaderComponent from "../Components/Header/Header";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";
import BaseFooter from "../Components/Footer/BaseFooter";
import { Link } from "react-router-dom";

import heartImage from "../img/heart.svg";
import heartFullImage from "../img/Group_278.png";
import commentImage from "../img/chat.svg";
import shareImage from "../img/paper-airplane.svg";
import cmtProfileImg from "../img/Ellipse 91.png";
import styled from "styled-components";
import IUProfile from "../img/IMG_7790.PNG";
import IUImage from "../img/IMG_7791.PNG";
import { useSelector } from "react-redux";

const PostDetail = () => {
  const { id } = useParams(); // useParams로 id 값을 받아옴
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false);
  const [likeCountState, setLikeCount] = useState(0);
  const token = useSelector((state) => state.login.token);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://dev.the-goods.store/api/posts/${id}`, // id를 이용하여 특정 포스트 불러오기
          {
            headers: {
              Authorization: `Bearer ${token}`, // 토큰을 헤더에 포함
            },
          },
        );
        console.log("특정 포스트:", response);
        console.log("특정 포스트 API response:", response.data);
        if (response.data.isSuccess) {
          setPost(response.data.result.post); // 결과 데이터를 post 상태에 저장
        } else {
          console.error("API response error:", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch post:", error);
      }
    };

    if (token) {
      fetchPost(); // 토큰이 있을 경우 API 호출
    }
  }, [id, token]);

  const addComment = (content) => {
    const newComment = {
      cmtProfile: cmtProfileImg,
      username: "기린",
      createdAt: new Date(),
      content: content,
      likes: 0,
    };
    setComments([...comments, newComment]);
  };

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCountState - 1 : likeCountState + 1);
  };


  const formatPostDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <>
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
        <div
          style={{
            borderBottom: "1px solid #9C9C9C",
            width: "100%",
            height: "3px",
          }}
        ></div>
      </NavWrapContainer>
      <PageContainer>
        {!post ? (
          <div>Loading...</div> // 로딩 중일 때 표시
        ) : (
          <>
            <UserInfo>
              <StyledLink to="/Seller">
                <ProfilePicture
                  src={post.userProfile || IUImage}
                  alt="프로필 사진"
                />
              </StyledLink>
              <UserInfoContent>
                <UserName>{post.username}&nbsp;ㆍ</UserName>
                <PostDate>{formatPostDate(post.createdAt)}</PostDate>
                <FollowButton>팔로우</FollowButton>
              </UserInfoContent>
            </UserInfo>
            <PostImage src={post.imageUrl || IUProfile} alt="포스트 이미지" />

            <PostContentText>{post.content}</PostContentText>
            <Actions>
              <LikeContainer onClick={toggleLike}>
                <ImgSize
                  src={liked ? heartFullImage : heartImage}
                  alt="하트"
                  className={liked ? "liked" : ""}
                />
                <CountText>{likeCountState}</CountText>
              </LikeContainer>
              <CommentContainer>
                <ImgSize src={commentImage} alt="댓글" />
                <CountText>{comments.length}</CountText>
              </CommentContainer>
            </Actions>
            <Separator />

            <CommentList>
              {comments.map((comment, index) => (
                <Comment
                  key={index}
                  comment={comment}
                  style={{ marginTop: "1vw" }}
                />
              ))}
            </CommentList>

            <CommentInputContainer>
              <CommentInput onSubmit={addComment} />
            </CommentInputContainer>
          </>
        )}
      </PageContainer>

      <BaseFooter />
    </>
  );
};

export default PostDetail;

const PageContainer = styled.div`
  box-sizing: border-box;
  margin: 30px auto;
  width: ${740 / 19.2}vw;
  padding: ${30 / 19.2}vw;
  background: #ffffff;
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const PostImage = styled.img`
  width: ${680 / 19.2}vw;
  height: ${680 / 19.2}vw;
  object-fit: cover;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserInfoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserName = styled.p`
  font-weight: bold;
  font-size: 14px;
`;

const FollowButton = styled.button`
  width: ${84 / 19.2}vw;
  height: ${33 / 19.2}vw;
  background: #f0c920;
  border-radius: 20px;
  border: none;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: ${14 / 19.2}vw;
  text-align: center;
  margin-left: 10px;
  color: #ffffff;
`;

const Separator = styled.hr`
  border: 1px solid #ddd;
  margin: 10px 0 0 0;
`;

const PostContentText = styled.p`
  margin: ${14 / 19.2}vw 0;
  font-size: 14px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: ${14 / 19.2}vw;
  line-height: ${19 / 19.2}vw;

  color: #202123;
`;

const PostDate = styled.p`
  margin: 0;
  font-size: 12px;
  color: #52555b;
  margin-top: 1px;
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CommentInputContainer = styled.div`
  position: relative;
`;

const Actions = styled.div`
  display: flex;
`;

const ImgSize = styled.img`
  width: 26px;
  height: 26px;
`;

const LikeContainer = styled.div`
  margin: 0 5px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CommentContainer = styled.div`
  margin: 0 5px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ShareContainer = styled.div`
  margin: 0 5px;
`;
const CountText = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: ${12 / 19.2}vw;
  line-height: ${16 / 19.2}vw;
  text-align: center;

  color: #52555b;
`;
const NavWrapContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Background = styled.div`
  background-color: #f9f9f9;
  height: 100%;
`;
const StyledLink = styled(Link)`
  text-decoration: none; // Remove underline
  color: inherit; // Inherit color from parent
`;
