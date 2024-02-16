import React, { useState } from 'react';
import styled from 'styled-components';
import X from "../../img/x.png";
const OrderModificationModal = ({options, onClose}) => {
  const [selectedOptions, setSelectedOptions] = useState(options);
  const [localSelectedOptions, setLocalSelectedOptions] = useState(selectedOptions.map(option => ({ ...option, isChecked: false })));

  const handleOptionAmountChange = (index, amount) => {
    const newOptions = [...selectedOptions];
    newOptions[index].amount = amount;
    setSelectedOptions(newOptions);
  };
  const handleInputChange = (event, index) => {
    let newAmount = event.target.value.replace(/\D/, ''); // 숫자 이외의 문자는 제거
    newAmount = Math.max(parseInt(newAmount, 10), 1); // 최소 수량을 1개로 설정
    handleOptionAmountChange(index, newAmount);
  };
  const handleDecreaseAmount = (index) => {
    const newAmount = Math.max(selectedOptions[index].amount - 1, 1);
    handleOptionAmountChange(index, newAmount);
  };

  const handleIncreaseAmount = (index) => {
    const newAmount = selectedOptions[index].amount + 1;
    handleOptionAmountChange(index, newAmount);
  };
  const handleToggleOption = (index) => {
    const newOptions = [...selectedOptions];
    newOptions[index].isChecked = !newOptions[index].isChecked;
    setSelectedOptions(newOptions);
  };

  const handleToggleAllOptions = () => {
    const allSelected = localSelectedOptions.every(option => option.isChecked);
    const newOptions = localSelectedOptions.map(option => ({
      ...option,
      isChecked: !allSelected
    }));
    setLocalSelectedOptions(newOptions);
    setSelectedOptions(newOptions); // selectedOptions도 업데이트
  };

  const handleDeleteSelectedOptions = () => {
    const newOptions = localSelectedOptions.filter(option => !option.isChecked);
    setLocalSelectedOptions(newOptions);
    setSelectedOptions(newOptions); // 부모 컴포넌트로 변경된 옵션들 전달
  };



  return (
    <ModalOverlay onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <div style={{display:'flex'}}>
        <Title>주문 수정</Title>
        <XImg src={X} alt="X" onClick={onClose}></XImg></div>
        <Divider />
        <Container>
          <OptionContainer>
          
            <Checkbox
              id="selectAllCheckbox" // htmlFor과 동일한 ID를 설정합니다.
              checked={selectedOptions.every(option => option.isChecked)}
              onChange={handleToggleAllOptions}
            />
            <label htmlFor="selectAllCheckbox">전체 선택</label>
            <DeleteButton onClick={handleDeleteSelectedOptions}>X 선택 삭제</DeleteButton>
          </OptionContainer>
          {selectedOptions.map((option, index) => (
            <OptionContainer key={index}>
              <OptionItem>
                <Checkbox checked={option.isChecked} onChange={() => handleToggleOption(index)} />
                <OptionName>{option.optionName}</OptionName>
                <QuantityControl>
                  <Button onClick={() => handleDecreaseAmount(index)}>-</Button>
                  <AmountInput
                    type="text"
                    value={option.amount}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  <Button onClick={() => handleIncreaseAmount(index)}>+</Button>
                </QuantityControl>
              </OptionItem>
            </OptionContainer>
          ))}
        </Container>
        <CloseButton onClick={onClose}>확인</CloseButton>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default OrderModificationModal;


const ModalOverlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width:30vw;
  height: 60vh;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.6vw;
  width:10vw;
  margin-bottom: 16px;
`;
const XImg = styled.img`
  width:2.5vw;
  height:2.5vw;
  margin-left:21vw;
  margin-top:2vh;
`
const Container=styled.div`
  max-height:44vh;
  overflow-y:auto;
`
const OptionContainer = styled.div`
  margin-bottom: 16px;
  display:flex;
  align-items: center;
`;
const DeleteButton = styled.button`
  box-sizing: border-box;
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  width:7vw;
  padding:7px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  text-align: center;
  margin-left: 16.5vw;
  color: #888888;
  background : white; 
  border: 1.5px solid rgba(156, 156, 156, 0.8);

`
const OptionItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  border: 1px solid #9C9C9C;
  border-radius: 2px;
  width:30vw;
`;

const OptionName = styled.p`
  margin-right: 8px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.1vw;
  line-height: 20px;
  color: #52555B;
`;

const AmountInput = styled.input`
  width: 2vw;
  height: 3vh;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1vw;
  color: #202123;
`;

const CloseButton = styled.button`
  position: absolute;
  background: #F0C920;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  border: none;
  text-align: center;
  width: 9vw;
  height: 7vh;
  top:57vh;
  margin-left:10vw;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.2vw;
  line-height: 25px;
  text-align: center;
  color: #FFFFFF;
`;
const Divider = styled.hr`
  border: 0.5px solid #202123;
  margin-bottom: 1vw;
  margin-top: -0.5vw;
`;
const QuantityControl =styled.div`
  display:flex;
  margin-left:16vw;
`;
const Button = styled.div`
  width: 1.5vw;
  height: 3vh;
  text-align: center;
  border: 1px solid rgba(32, 33, 35, 0.8);

`;
const Checkbox = ({ checked, onChange }) => (
  <StyledCheckbox type="checkbox" checked={checked} onChange={onChange} />
);

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
width: 1.2vw;
height: 1.2vw;
background: #fff;
border: 1px solid #9c9c9c;
//transition: background-color 0.3s ease;
display: flex;
align-items: center;
justify-content: center;
margin-left: 5px;
margin-right: 5px;
border-radius: 2px;
accent-color:#F0C920;

`;
