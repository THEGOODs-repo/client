import React, { useState } from "react";
import { Link } from "react-router-dom";
import heartImage from "../../img/Group_277.png";
import heartFullImage from "../../img/Group_278.png";
import commentImage from "../../img/Group_277_1.png";
import ModalPost from "./ModalPost";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
const PostContent = ({
  userProfile,
  userName,
  postDate,
  content,
  imageUrl,
  likeCount,
  commentCount,
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCountState, setLikeCount] = useState(likeCount);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCountState - 1 : likeCountState + 1);
  };

  const openModal = () => {
    setIsModalOpen(true);
    console.log("Opening modal");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <PostContainer>
        <PostHeader>
          <Link to="/Seller">
            <ProfilePicture src={userProfile} alt="프로필 사진" />
          </Link>
          <UserInfo>
            <UserName>{userName}</UserName>
            <PostDate> &nbsp;ㆍ {postDate} 전</PostDate>
          </UserInfo>
          <FollowButton>팔로우</FollowButton>
        </PostHeader>
        {imageUrl && (
          <PostImage src={imageUrl} alt="포스트 이미지" onClick={openModal} />
        )}
        <PostContentText onClick={openModal}>{content}</PostContentText>
        <Divider />
        <PostFooter>
          <LikeContainer onClick={toggleLike}>
            <LikeIcon
              src={liked ? heartFullImage : heartImage}
              alt="하트"
              className={liked ? "liked" : ""}
            />
            <LikeCount className={liked ? "liked" : ""}>
              {likeCountState}
            </LikeCount>
          </LikeContainer>
          <CommentContainer>
            <CommentIcon src={commentImage} alt="댓글" />
            <CommentCount>{commentCount}</CommentCount>
          </CommentContainer>
        </PostFooter>
        <ModalPost
          isOpen={isModalOpen}
          closeModal={closeModal}
          post={{
            imageUrl,
            userName,
            content,
            commentCount,
            userProfile,
            postDate,
            likeCountState,
          }}
        />
      </PostContainer>
    </>
  );
};

export default PostContent;
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

`;
const PostContainer = styled.div`
  box-sizing: border-box;
  width: ${569 / 19.2}vw;
  background: #ffffff;
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: ${20 / 19.2}vw ${27 / 19.2}vw;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfilePicture = styled.img`
  width: ${50 / 19.2}vw;
  height: ${50 / 19.2}vw;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
`;

const UserName = styled.p`
  font-weight: 700;
  margin-bottom: 5px;
  font-family: "Noto Sans";
  font-style: normal;
  font-size: ${16 / 19.2}vw;
  line-height: 22px;
  color: #202123;
  margin-top: 5px;
`;

const PostDate = styled.p`
  color: #52555b;
  margin-top: 8px;
  font-weight: 500;
  font-family: "Noto Sans";
  font-style: normal;
  font-size: ${12 / 19.2}vw;
  line-height: 16px;
`;

const FollowButton = styled.button`
  width: ${90 / 19.2}vw;
  height: ${36 / 19.2}vw;
  background: #f0c920;
  border-radius: 20px;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  font-size: ${14 / 19.2}vw;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
`;

const PostImage = styled.img`
  width: ${517 / 19.2}vw;
  height: ${517 / 19.2}vw;
  margin-top: 5px;
  object-fit: cover;
`;

const PostContentText = styled.p`
  margin-top: 5px;
  width: ${672 / 19.2}vw;
  color: #202123;
  font-size: 16px;
  font-weight: 500;
  font-family: "Noto Sans";
  width: ${517 / 19.2}vw;
  font-style: normal;
  font-size: ${16 / 19.2}vw;
  color: #202123;
`;
const Divider = styled.div`
  opacity: 0.8;
  border: 0.5px solid #9c9c9c;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  margin: 10px 0;
`;
const PostFooter = styled.div`
  color: #888;
  display: flex;
`;

const LikeContainer = styled.div`
  position: relative;
`;

const LikeIcon = styled.img`
  width: ${26 / 19.2}vw;
  height: ${26 / 19.2}vw;
  &.liked {
    content: url(${heartFullImage});
  }
`;

const LikeCount = styled.span`
  position: relative;
  top: -6px;
  padding: 3px;
  font-size: ${12 / 19.2}vw;
  font-weight: 500;
  font-family: "Noto Sans";
`;

const CommentContainer = styled.div`
  margin-left: 10px;
`;

const CommentIcon = styled.img`
  width: ${26 / 19.2}vw;
  height: ${26 / 19.2}vw;
`;

const CommentCount = styled.span`
  position: relative;
  top: -6px;
  padding: 3px;
  font-size: ${12 / 19.2}vw;
  font-weight: 500;
  font-family: "Noto Sans";
`;
