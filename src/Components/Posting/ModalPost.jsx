import React from 'react';

const ModalPost = ({ isOpen, closeModal, post }) => {


  if (!isOpen) return null;

  return (
    <div style={modalOverlayStyle} onClick={closeModal}>
        <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
          <div style={leftPanelStyle}>
            <img src={post.imageUrl} alt="포스트 이미지" style={modalImageStyle} />
          </div>

          <div style={rightPanelStyle}>
            <div style={userInfoStyle}>
              <img src={post.userProfile} alt="프로필 사진" style={profilePictureStyle} />
              <div style={{display:'flex'}}>
                <p style={userNameStyle}>{post.userName}&nbsp;ㆍ</p>
                <button style={followButtonStyle}>팔로우</button>
              </div>
            </div>
            <hr style={{ border: '1px solid #ddd', margin: '10px 0' }} />
            {/*모달창에 있는 게시물 */}
            <div style={{display:'flex'}}>
              <img src={post.userProfile} alt="프로필 사진" style={profilePictureStyle} />
              <div>                
                <p style={postContentStyle}>
                  <span style={userNameStyle}>{post.userName}</span> {post.content}
                </p>
                <p style={postDateStyle}>{post.postDate}</p>
              </div>
            </div>

          </div>
        
        </div>
    </div>
  );
};

export default ModalPost;


const modalOverlayStyle = {
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

const modalContentStyle = {
  background: '#fff',
  maxWidth: '70%',
  height: '80%',
  overflow: 'auto',
  display:'flex',
};

const leftPanelStyle = {
  flex: '0 0 60%',
  position: 'relative',
  backgroundColor: 'black',
  overflow: 'hidden',
  maxWidth: '60%',
  display: 'flex', // 세로 중앙 정렬을 위해 추가
  alignItems: 'center',
};

const rightPanelStyle = {
  position: 'relative',
  backgroundColor: 'white',
  padding: '1vw', // 오른쪽 패널에 공백 추가
  overflowY: 'auto', // 오른쪽 패널의 내용이 넘칠 경우 스크롤 표시
  height:'100%',
 
};

const modalImageStyle = {
  position:'absolute',
  maxWidth: '100%',
  height: 'auto',
  objectFit: 'cover'
};

const userInfoStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
};

const profilePictureStyle = {
  width: '3vw',
  height: '3vw',
  borderRadius: '50%',
  marginRight: '10px',
};

const userNameStyle = {
  fontWeight: 'bold',
  fontSize: '1.3vw',
  lineHeight: '1.5vw',
  marginTop: '1.2vw',
};

const followButtonStyle = {
  background: 'transparent',
  color: '#307CF7',
  marginTop: '1vw',
  fontSize: '1.3vw',
  height:'20px',
  border: 'none',
  cursor: 'pointer',
};

const postContentStyle = {
  margin: '0 0 0.2vw 0', // 위, 오른쪽, 아래, 왼쪽
  fontSize: '1.3vw',
  lineHeight: '1.5vw',
};

const postDateStyle={
  margin: '0 0 0 0',
  fontSize:'1vw',
  color:'#52555B',
  marginTop:'1px',
}