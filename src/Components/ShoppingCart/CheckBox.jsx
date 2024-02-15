import React from 'react';
import styled from 'styled-components';

// 숨겨진 체크박스 스타일
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

// 체크박스 컨테이너 스타일
const CheckboxContainer = styled.label`
  display: flex;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
  margin-right: 0.5rem; /* 체크박스와 레이블 사이의 간격 조정 */
`;

// 커스텀 체크박스 스타일
const StyledCheckbox = styled.div`
  width: 1.2vw;
  height: 1.2vw;
  background: ${props => (props.checked ? '#F0C920' : '#fff')};
  border: 1px solid #9c9c9c;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:5px;
  margin-right:5px;
  border-radius:2px;
`;

// 체크마크 스타일
const Checkmark = styled.span`
  margin-bottom:5px;
  width: 0.4vw;
  height: 0.8vw;
  border: solid #fff;
  border-width: 0 0.2vw 0.2vw 0;
  transform: rotate(45deg);
  visibility: ${props => (props.checked ? 'visible' : 'hidden')};
`;

// 레이블 스타일
const Label = styled.span`
  margin-left:0.5vw;
  position:'absolute';
  font-weight: 700;
  color: #202123;
  font-size:1.2vw;
  margin-bottom:1vw;
`;

// Checkbox 컴포넌트
const Checkbox = ({ className, checked, onChange, label, ...props }) => {
  return (
    <CheckboxContainer className={className}>
      
      <HiddenCheckbox checked={checked} onChange={onChange} {...props} />
      <StyledCheckbox checked={checked}>
        <Checkmark checked={checked} />
      </StyledCheckbox>
      {label && <Label>{label}</Label>}
    </CheckboxContainer>
  );
};

export default Checkbox;
