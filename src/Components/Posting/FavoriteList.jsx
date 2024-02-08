import React from 'react';
import profileImage from '../../img/sampleimg.png';


const FavoriteList = ({ isOpen, closeModal }) => {
    const favoriteAuthors = [
      { id: 1, name: '작가 1', profileImage: profileImage },
      { id: 2, name: '작가 2', profileImage: profileImage },
      { id: 3, name: '작가 3', profileImage: profileImage },
      

      // 나머지 작가들 추가
    ];
  
    
  
    const handleCloseModal = () => {
      closeModal();
    };
  

  
    if (!isOpen) return null;
  
    return (
      <div style={modalStyle} onClick={handleCloseModal}>
        <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
          <p style={fontstyle}>즐겨찾기</p>
          <div style={authorList}>
            {favoriteAuthors.map(author => (
              <div key={author.id} style={authorBoxStyle}>
                <img src={author.profileImage} alt={author.name} style={authorImageStyle} />
                <span>{author.name}</span>
                
            </div>
            ))}
            </div>
          
        </div>
      </div>
    );
  };
  
  export default FavoriteList;
  

const modalStyle = {
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
    backgroundColor: '#fefefe',
    margin: '15% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '30%',
    maxHeight:'40vw',
    overflowY: 'auto',
  };
  
  const fontstyle={
    position: 'absolute',
    
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Noto Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '2vw',
    lineHeight: '1vw',
    color: '#202123',
  }

  const authorList ={
    marginTop:'4.5vw',
  };

  const authorBoxStyle = {
    display: 'flex',
    alignItems: 'center', 
    padding: '10px',
    borderTop: '1px solid #ccc',
    borderRadius: '5px',
    height:'5vh',
    fontWeight: '700',
    fontFamily: 'Noto Sans',
    fontStyle: 'normal',
    fontSize: '1.5vw',
    color: '#202123',
    marginTop:'10px',
  };

  const authorImageStyle = {
    width: '3vw', // 이미지 너비 조정
    height: '3vw', // 이미지 높이 조정
    marginRight: '10px', // 이미지와 텍스트 간격 조정
    borderRadius: '50%',
  };