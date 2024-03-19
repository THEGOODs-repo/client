import React, { useState } from "react";
import { Link } from "react-router-dom";
import heartImage from "../../img/Group_277.png";
import heartFullImage from "../../img/Group_278.png";
import commentImage from "../../img/Group_277_1.png";
import ModalPost from "./ModalPost";

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

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCountState - 1 : likeCountState + 1);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("Opening modal");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={postStyle}>
      <div style={postHeaderStyle}>
        <Link to="/Seller">
          <img
            src={userProfile}
            alt="프로필 사진"
            style={profilePictureStyle}
          />
        </Link>
        <div style={userInfoStyle}>
          <p style={userNameStyle}>{userName}</p>
          <p style={postDateStyle}> &nbsp;ㆍ {postDate} 전</p>
        </div>
        <button style={followButtonStyle}>팔로우</button>
      </div>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="포스트 이미지"
          style={postImageStyle}
          onClick={openModal}
        />
      )}
      <p style={postContentStyle} onClick={openModal}>
        {content}
      </p>
      <div style={postFooterStyle}>
        <div className="like-container" onClick={toggleLike}>
          <img
            src={liked ? heartFullImage : heartImage}
            alt="하트"
            className={`like-icon ${liked ? "liked" : ""}`}
          />
          <span
            className={`like-count ${liked ? "liked" : ""}`}
            style={likeCommentCount}
          >
            {likeCountState}
          </span>
        </div>
        <div className="comment-container">
          <img src={commentImage} alt="댓글" className="comment-icon" />
          <span className="comment-count" style={likeCommentCount}>
            {commentCount}
          </span>
        </div>
      </div>
      <div>
        {/* 모달 컴포넌트 */}
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
      </div>
    </div>
  );
};

export default PostContent;

const postStyle = {
  border: "1px solid #ddd",
};

const postHeaderStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "1.5vw",
};

const profilePictureStyle = {
  width: "3vw",
  height: "3vw",
  borderRadius: "50%",
  marginLeft: "1.5vw",
  marginRight: "10px",
};

const userInfoStyle = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "row",
};

const userNameStyle = {
  fontWeight: "700",
  marginBottom: "5px",
  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontSize: "16px",
  lineHeight: "22px",
  color: "#202123",
  marginTop: "10px",
};

const postDateStyle = {
  color: "#52555B",
  marginTop: "13px",
  fontWeight: "500",
  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontSize: "12px",
  lineHeight: "16px",
};

const followButtonStyle = {
  width: "5vw",
  height: "2vw",
  background: "#F0C920",
  borderRadius: "20px",
  color: "#fff",
  padding: "5px 10px",
  border: "none",
  cursor: "pointer",
  marginRight: "1.5vw",
  fontSize: "1vw",
};

const postImageStyle = {
  marginLeft: "1.5vw",
  width: "41vw",
  marginTop: "10px",
};

const postContentStyle = {
  marginTop: "10px",
  marginLeft: "1.5vw",
  width: "41vw",
  //maxWidth:'41vw',
  color: "#202123",
  fontSize: "16px",
  fontWeight: "500",
  fontFamily: "Noto Sans",
};

const postFooterStyle = {
  marginLeft: "1.5vw",
  marginTop: "10px",
  color: "#888",
  display: "flex",
  marginBottom: "1vw",
};

const likeCommentCount = {
  position: "relative",
  top: "-6px",
  marginBottom: "10px",
  padding: "5px",
  fontSize: "16px",
  fontWeight: "500",
  fontFamily: "Noto Sans",
};
