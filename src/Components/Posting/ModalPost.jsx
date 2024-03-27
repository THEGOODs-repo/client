import React, { useState } from "react";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import heartImage from "../../img/heart.svg";
import heartFullImage from "../../img/Group_278.png";
import commentImage from "../../img/chat.svg";
import shareImage from "../../img/paper-airplane.svg";
import cmtProfileImg from "../../img/Ellipse 91.png";
import styled from "styled-components";

const ModalPost = ({ isOpen, closeModal, post, likeCount }) => {
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false);
  const [likeCountState, setLikeCount] = useState(likeCount);

  // 댓글 추가 함수
  const addComment = (content) => {
    const newComment = {
      cmtProfile: cmtProfileImg,
      username: "기린",
      createdAt: new Date(), // 현재 시간을 문자열로 변환하여 저장
      content: content,
      likes: 0,
    };
    setComments([...comments, newComment]);
  };

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCountState - 1 : likeCountState + 1);
  };

  if (!isOpen) return null;

  const formatPostDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <LeftPanel>
          <ModalImage src={post.imageUrl} alt="포스트 이미지" />
        </LeftPanel>
        <RightPanel>
          <UserInfo>
            <Link to="seller">
              <ProfilePicture src={post.userProfile} alt="프로필 사진" />
            </Link>
            <UserInfoContent>
              <UserName>{post.userName}&nbsp;ㆍ</UserName>
              <FollowButton>팔로우</FollowButton>
            </UserInfoContent>
          </UserInfo>
          <Separator />
          {/*모달창에 있는 게시물 */}
          <PostContent>
            <UserContent>
              <UserImage src={post.userProfile} alt="프로필 사진" />
              <div>
                <UserName>{post.userName}</UserName>
                <PostContentText>{post.content}</PostContentText>
                <PostDate>{post.postDate}</PostDate>
              </div>
            </UserContent>
            <CommentList>
              {comments.map((comment, index) => (
                <Comment
                  key={index}
                  comment={comment}
                  style={{ marginTop: "1vw" }}
                />
              ))}
            </CommentList>
          </PostContent>
          <Separator />
          <Actions>
            <LikeContainer onClick={toggleLike}>
              <ImgSize
                src={liked ? heartFullImage : heartImage}
                alt="하트"
                className={liked ? "liked" : ""}
              />
            </LikeContainer>
            <CommentContainer>
              <ImgSize src={commentImage} alt="댓글" />
            </CommentContainer>
            <ShareContainer>
              <ImgSize src={shareImage} alt="공유" />
            </ShareContainer>
          </Actions>
          <LikeCommentCount className={liked ? "liked" : ""}>
            좋아요 {likeCountState}개
          </LikeCommentCount>
          <PostDate>{formatPostDate(post.postDate)}</PostDate>
          <Separator />
          <CommentInputContainer>
            <CommentInput onSubmit={addComment} />
          </CommentInputContainer>
        </RightPanel>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalPost;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalContent = styled.div`
  background: #fff;
  height: ${835 / 19.2}vw;
  overflow: auto;
  display: flex;
`;

const LeftPanel = styled.div`
  flex: 0 0 60%;
  position: relative;
  background-color: black;
  overflow: hidden;
  width: ${1060 / 19.2}vw;
  display: flex;
  align-items: center;
`;

const ModalImage = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const RightPanel = styled.div`
  position: relative;
  background-color: white;
  padding: 1vw;
  width: 40%;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProfilePicture = styled.img`
  width: ${49 / 19.2}vw;
  height: ${49 / 19.2}vw;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserInfoContent = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.p`
  font-weight: bold;
  font-size: ${14 / 19.2}vw;
  line-height: 16px;
  margin-top: 0.5vw;
`;

const FollowButton = styled.button`
  background: transparent;
  color: #307cf7;
  margin-top: -0.2vw;
  font-size: ${12 / 19.2}vw;
  height: 20px;
  font-weight: 400;
  border: none;
  cursor: pointer;
`;

const Separator = styled.hr`
  border: 1px solid #ddd;
  margin: 10px 0;
`;

const PostContent = styled.div`
  height: ${515 / 19.2}vw;
  overflow-y: auto;
`;

const UserContent = styled.div`
  display: flex;
`;

const UserImage = styled.img`
  width: ${49 / 19.2}vw;
  height: ${49 / 19.2}vw;
  border-radius: 50%;
  margin-right: 10px;
`;

const PostContentText = styled.p`
  margin: 0 0 0.2vw 0;
  font-size: ${14 / 19.2}vw;
  line-height: 14px;
`;

const PostDate = styled.p`
  margin: 0;
  font-size: ${12 / 19.2}vw;
  color: #52555b;
  margin-top: 1px;
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CommentInputContainer = styled.div`
  position: absolute;
  left: 1vw;
`;

const LikeCommentCount = styled.span`
  position: relative;
  margin-bottom: 10px;
  font-size: ${14 / 19.2}vw;
  font-weight: 700;
  font-family: "Noto Sans";
`;
const Actions = styled.div`
  display: flex;
`;

const ImgSize = styled.img`
  width: ${26 / 19.2}vw;
  height: ${26 / 19.2}vw;
`;

const LikeContainer = styled.div`
  margin: 0 5px;
`;
const CommentContainer = styled.div`
  margin: 0 5px;
`;
const ShareContainer = styled.div`
  margin: 0 5px;
`;
