import React, { useState } from "react";
import styled from "styled-components";
import heartImage from "../../img/heart.png";
import heartFullImage from "../../img/Group_278.png";

const Comment = ({ comment, likeCount }) => {
  const [liked, setLiked] = useState(false);
  const [likeCountState, setLikeCount] = useState(likeCount);
  const [showModal, setShowModal] = useState(false);

  if (!comment) {
    return null; // comment가 없는 경우 아무것도 렌더링하지 않음
  }

  const likes = comment.likes || 0;

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCountState - 1 : likeCountState + 1);
  };

  // 수정, 삭제, 취소 동작을 처리하는 함수
  const handleAction = (action) => {
    if (action === "수정") {
      // 수정 기능 구현
      console.log("수정");
    } else if (action === "삭제") {
      // 삭제 기능 구현 백엔드 통신.
    }
    setShowModal(false); // 모달 닫기
  };

  const openModal = () => {
    setShowModal(true);
  };

  function getTimeElapsed(createdAt) {
    // 작성된 시간과 현재 시간의 차이 계산 (밀리초 단위)
    const timeDiff = Date.now() - new Date(createdAt).getTime();
    const seconds = Math.floor(timeDiff / 1000);

    if (seconds < 60) {
      return `${seconds}초 전`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes}분 전`;
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return `${hours}시간 전`;
    } else if (seconds < 604800) {
      const days = Math.floor(seconds / 86400);
      return `${days}일 전`;
    } else {
      const weeks = Math.floor(seconds / 604800);
      return `${weeks}주 전`;
    }
  }

  return (
    <CommentContainer className="comment">
      <UserInfoContainer className="user-info">
        <ProfilePicture src={comment.cmtProfile} alt="프로필 사진" />
        <UserInfoWrapper>
          <NameContent>
            <UserName className="username">{comment.username}</UserName>
            <CommentContent>{comment.content}</CommentContent>
          </NameContent>
          <ActionContainer>
            <Timestamp className="timestamp">
              {getTimeElapsed(comment.createdAt)}
            </Timestamp>
            <ReplyText>답글 달기</ReplyText>
            <ModifyIcon onClick={openModal}>⋯</ModifyIcon>
            {showModal && (
              <ModalOverlay>
                <Modal onClick={(e) => e.stopPropagation()}>
                  <ModalContent onClick={() => handleAction("수정")}>
                    수정
                  </ModalContent>
                  <ModalContent onClick={() => handleAction("삭제")}>
                    삭제
                  </ModalContent>
                  <ModalContent onClick={() => setShowModal(false)}>
                    취소
                  </ModalContent>
                </Modal>
              </ModalOverlay>
            )}
          </ActionContainer>
        </UserInfoWrapper>
      </UserInfoContainer>
    </CommentContainer>
  );
};

export default Comment;

const CommentContainer = styled.div`
  display: flex;
  margin-top: 1vw;
  width: ${400 / 19.2}vw;
`;

const UserInfoContainer = styled.div`
  display: flex;
`;

const ProfilePicture = styled.img`
  width: ${49 / 19.2}vw;
  height: ${49 / 19.2}vw;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${400 / 19.2}vw;
`;

const UserName = styled.span`
  font-weight: bold;
  font-size: ${14 / 19.2}vw;
`;

const CommentContent = styled.span`
  font-size: ${14 / 19.2}vw;
  line-height: 16px;
  width: ${580 / 19.2}vw;
  word-wrap: break-word;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Timestamp = styled.span`
  font-size: ${12 / 19.2}vw;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  line-height: ${16 / 19.2}vw;

  color: #52555b;
`;

const ReplyText = styled.span`
  font-size: ${12 / 19.2}vw;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  line-height: ${16 / 19.2}vw;

  color: #6f737b;
`;

const ModifyIcon = styled.span`
  font-size: 1vw;
  color: #6f737b;
  font-family: "Noto Sans";
  font-weight: 900;
  line-height: 1vw;
  cursor: pointer;
`;

const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: ${340 / 19.2}vw;
  height: 145px;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
`;
const ModalContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
    color: #202123;
  }
  &:hover {
    background-color: #f0f0f0;
  }
  font-family: "Noto Sans";
  font-weight: 700;
  font-size: ${16 / 19.2}vw;
  color: #fd3c56;
`;
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
const NameContent = styled.div`
  display: flex;
  width: ${620 / 19.2}vw;
  gap: 5px;
  align-items: flex-start;
  margin-bottom: 10px;
`;
