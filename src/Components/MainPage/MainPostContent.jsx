import React, { useState } from "react";
import { Link } from "react-router-dom";
import heartImage from "../../img/Group_277.png";
import heartFullImage from "../../img/Group_278.png";
import commentImage from "../../img/Group_277_1.png";
import ModalPost from "../Posting/ModalPost";
import styled from "styled-components";

const MainPostContent = ({
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
      <PostImageContainer>
        {imageUrl && (
        <PostImage src={imageUrl} alt="포스트 이미지" onClick={openModal} />
      )}
      </PostImageContainer>
      <PostContentText onClick={openModal}>{content}</PostContentText>
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
  );
};

export default MainPostContent;

const PostContainer = styled.div`
  border: 1px solid #ddd;
  background-color : white;
  width : 30vw;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${20 / 19.2}vw;
`;

const ProfilePicture = styled.img`
  width: ${30 / 19.2}vw;
  height: ${30 / 19.2}vw;
  border-radius: 50%;
  margin-left: ${37 / 19.2}vw;
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
  width: ${79 / 19.2}vw;
  height: ${33 / 19.2}vw;
  background: #f0c920;
  border-radius: 20px;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin-right: 1.5vw;
  font-size: ${14 / 19.2}vw;
`;

const PostImage = styled.img`
  width: 88%;
  height : 450px;
  margin-top: 10px;
`;

const PostContentText = styled.p`
  margin-top: 10px;
  margin-left: ${37 / 19.2}vw;
  width: ${672 / 19.2}vw;
  color: #202123;
  font-size: 16px;
  font-weight: 500;
  font-family: "Noto Sans";
`;

const PostFooter = styled.div`
  margin-left: ${37 / 19.2}vw;

  color: #888;
  display: flex;
  margin-bottom: 1vw;
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
  margin-bottom: 10px;
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
  margin-bottom: 10px;
  padding: 3px;
  font-size: ${12 / 19.2}vw;
  font-weight: 500;
  font-family: "Noto Sans";
`;

const PostImageContainer = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
`