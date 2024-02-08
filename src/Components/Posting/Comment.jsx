import React, { useState } from 'react';
import heartImage from '../../img/heart.png'
import heartFullImage from '../../img/Group_278.png'

const Comment = ({ comment , likeCount}) => {
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
  // 좋아요 버튼 클릭 시 처리 함수
  const handleLike = () => {
    // 좋아요 개수 증가
  };
  

  // 수정, 삭제, 취소 동작을 처리하는 함수
  const handleAction = (action) => {
    if (action === '수정') {
      // 수정 기능 구현
      console.log("수정")
    } else if (action === '삭제') {
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
    <div className="comment" style={{display:'flex',marginTop:'1vw'}}>
      
      <div className="user-info" style={{display:'flex'}}>
        <img className="cmtProfile" src={comment.cmtProfile} alt="프로필 사진" style={profilePictureStyle}/> {/* 프로필 사진 */}
        <div style={{display: 'flex', flexDirection: 'column', width:'19vw'}}>
          <div>
            <span className="username" style={userNameStyle}>{comment.username}</span> {/* 사용자 이름 */}
            <span style={commentStyle}>{comment.content}</span>
            <div className="actions" style={{display:'flex'}}>
              <span className="timestamp" style={postDateStyle}>{getTimeElapsed(comment.createdAt)}</span>
              
              <p style={likecommentStyle}>좋아요 {likes}개</p>
              <span style={likecommentStyle}>답글 달기</span>
              <span style={modifyStyle}onClick={openModal}>⋯</span>
              {showModal && (
                <div style={modalOverlay}>
                  <div className="modal" style={modalStyle}>
                    <div onClick={() => handleAction('수정')} style={modalContentStyle}>수정</div>
                    <div onClick={() => handleAction('삭제')} style={modalContentStyle}>삭제</div>
                    <div onClick={() => setShowModal(false)} style={modalContentStyle2}>취소</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="like-container" onClick={toggleLike}>
          <img
              src={liked ? heartFullImage : heartImage}
              alt="하트"
              className={`like-icon ${liked ? 'liked' : ''}`}
            />
          </div>
            
      </div>
      
      
    </div>
  );
};

export default Comment;

const profilePictureStyle = {
  width: '2.7vw',
  height: '2.7vw',
  borderRadius: '50%',
  marginRight: '10px',
};
const userNameStyle = {
  fontWeight: 'bold',
  fontSize: '1.1vw',
  lineHeight: '1.3vw',
  marginTop: '2vw',
};
const commentStyle = {
  fontSize: '1.1vw',
  lineHeight: '1.4vw',
  marginTop:'1vw',
};
const postDateStyle={
  margin: '0 0 0 0',
  fontSize:'0.9vw',
  color:'#52555B',
  marginTop:'1px',
}
const likecommentStyle={
  margin:'0.1vw 0 0 0.5vw',
  fontSize:'0.9vw',
  color:'#6f737b',
  marginTop:'1px',
  fontStyle:'Noto Sans',
  fontWeight:'700',
  lineHeight: '1vw',
}
const modifyStyle={
  margin:'0.1vw 0 0 0.5vw',
  fontSize:'1vw',
  color:'#6f737b',
  marginTop:'1px',
  fontStyle:'Noto Sans',
  fontWeight:'900',
  lineHeight: '1vw',
}
const modalStyle={
  display: 'flex', 
  flexDirection: 'column',
}
const modalContentStyle={
  display: 'flex', 
  flexDirection: 'column',
  height:'4vw',
  width:'24vw',
  alignItems: 'center',
  justifyContent: 'center',
  background:'#fff',
  borderTop: '1px solid #ccc',
  fontFamily:'Noto Sans',
  fontWeight:'700',
  fontSize:'1.2vw',
  color:'#FD3C56'
}
const modalContentStyle2={
  display: 'flex', 
  flexDirection: 'column',
  height:'4vw',
  width:'24vw',
  alignItems: 'center',
  justifyContent: 'center',
  background:'#fff',
  borderTop: '1px solid #ccc',
  fontFamily:'Noto Sans',
  fontWeight:'700',
  fontSize:'1.2vw',
}
const modalOverlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};