import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import CommentInput from './CommentInput';
import heartImage from '../../img/heart.png'
import heartFullImage from '../../img/Group_278.png'
import commentImage from '../../img/chat.png'
import shareImage from '../../img/Vector.png'
import cmtProfileImg from '../../img/Ellipse 91.png'

const ModalPost = ({ isOpen, closeModal, post, likeCount, }) => {

  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false);
  const [likeCountState, setLikeCount] = useState(likeCount);

  // 댓글 추가 함수
  const addComment = (content) => {
    const newComment = {
      cmtProfile:cmtProfileImg,
      username: '기린',
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
    <div style={modalOverlayStyle} onClick={closeModal}>
        <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
          <div style={leftPanelStyle}>
            <img src={post.imageUrl} alt="포스트 이미지" style={modalImageStyle} />
          </div>

          <div style={rightPanelStyle}>
            <div style={userInfoStyle}>
              <Link to ="seller">
                <img src={post.userProfile} alt="프로필 사진" style={profilePictureStyle} />
              </Link>
              <div style={{display:'flex'}}>
                <p style={userNameStyle}>{post.userName}&nbsp;ㆍ</p>
                <button style={followButtonStyle}>팔로우</button>
              </div>
            </div>
            <hr style={{ border: '1px solid #ddd', margin: '10px 0' }} />
            {/*모달창에 있는 게시물 */}
            <div style={ {height:'60%',overflowY: 'auto',}}>
            <div style={{display:'flex'}}>
              <img src={post.userProfile} alt="프로필 사진" style={profilePictureStyle} />
              <div>                
                <p style={postContentStyle}>
                  <span style={userNameStyle}>{post.userName}</span> {post.content}
                </p>
                <p style={postDateStyle}>{post.postDate}</p>
              </div>
            </div>
            

            <div className="comment-list" style={commentListStyle}>
              {comments.map((comment, index) => (
                <Comment key={index} comment={comment} style={{marginTop:'1vw'}}/>
              ))}
            </div>
            </div>
            <hr style={{ border: '1px solid #ddd' }} />
            <div style={{display:"flex"}}>
                <div className="like-container" onClick={toggleLike}>
                <img
                    src={liked ? heartFullImage : heartImage}
                    alt="하트"
                    className={`like-icon ${liked ? 'liked' : ''}`}
                  />
                  </div>
                <div className="comment-container" style={{marginLeft:'0.5vw'}}>
                  <img src={commentImage} alt="댓글" className="comment-icon" />
                </div>
                <div style={{marginLeft:'0.7vw',marginTop:'0.3vw'}}>
                  <img src={shareImage} alt="공유" ></img>
                </div>
            </div>
            <div >
            <span className={`like-count ${liked ? 'liked' : ''}`} style={likeCommentCount}>좋아요 {likeCountState}개</span>
            <p style={postDateStyle}>{formatPostDate(post.postDate)}</p>                
            </div>
            <hr style={{ border: '1px solid #ddd' }} />
            <div style={commentInputStyle}>
             <CommentInput onSubmit={addComment} />
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
  width: '2.7vw',
  height: '2.7vw',
  borderRadius: '50%',
  marginRight: '10px',
};

const userNameStyle = {
  fontWeight: 'bold',
  fontSize: '1.1vw',
  lineHeight: '1.3vw',
  marginTop: '1vw',
};

const followButtonStyle = {
  background: 'transparent',
  color: '#307CF7',
  marginTop: '1vw',
  fontSize: '1.1vw',
  height:'20px',
  fontWeight:'400',
  border: 'none',
  cursor: 'pointer',
};

const postContentStyle = {
  margin: '0 0 0.2vw 0', // 위, 오른쪽, 아래, 왼쪽
  fontSize: '1.1vw',
  lineHeight: '1.4vw',
};

const postDateStyle={
  margin: '0 0 0 0',
  fontSize:'0.9vw',
  color:'#52555B',
  marginTop:'1px',
}
const commentListStyle={
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start', // 댓글 아이템을 왼쪽 정렬
  overflowY: 'auto',
}
const commentInputStyle={
  position: 'absolute', 
  left: '1vw', 

}
const likeCommentCount={
  position:'relative',
  marginBottom:'10px',
  fontHeight:'1vw',
  fontSize:'1vw',
  fontWeight:'700',
  fontFamily: 'Noto Sans',
};