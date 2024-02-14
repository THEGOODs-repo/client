import React, { useState } from 'react';

const CommentInput = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      onSubmit(inputValue); // 부모 컴포넌트로 새로운 댓글 전달
      setInputValue(''); // 입력 값 초기화
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 엔터 키의 기본 동작 막기
      handleSubmit(); // Enter 키를 누르면 댓글 작성 함수 호출
    }
  };

  return (
    <div className="comment-input" style={{ position: 'relative', display:'flex',bottom: 0, left: 0, width: '100%' }}>
       <textarea
        style={textareaStyle}
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress} // Enter 키 입력 감지
          placeholder=" 댓글 달기..."
        />
      <button onClick={handleSubmit} style={buttonStyle}>게시</button>
    </div>
  );
};

export default CommentInput;

const textareaStyle={
  color:'#52555B',
  fontWeight:'400',
  fontFamily:'Noto Sans',
  fontSize:'1vw',
  width:'22vw',
  height:'2vw',
  textIndent:'0.5vw',
  paddingTop:'0.8vw',
  border:'none',
  background:'transparent',
}
const buttonStyle={
  width:'4vw',
  height:'3vw',
  background:'transparent',
  color:'#307cf7',
  fontWeight:'700',
  fontFamily:'Noto Sans',
  fontSize:'1vw',
  border:'none',
}