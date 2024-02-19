import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import X from "../../img/x.png";
import {CheckBox} from '../Global/CustomBox'
import axios from 'axios';
import { useSelector } from "react-redux";
import CustomButton from "../Global/CustomButton";

const OrderModificationModal = ({optionList, onClose, stockInfo}) => {
  const [selectedOptions, setSelectedOptions] = useState(optionList || []);
  const [localSelectedOptions, setLocalSelectedOptions] = useState(selectedOptions ? selectedOptions.map(option => ({ ...option, isChecked: false })) : []);

  useEffect(() => {
    if (selectedOptions) {
      setLocalSelectedOptions(selectedOptions.map(option => ({ ...option, isChecked: false })));
    }
  }, [selectedOptions]);

  

  const handleDecreaseAmount = (cartDetailId) => {
    const updatedOptions = selectedOptions.map(option => {
      if (option.cartDetailId === cartDetailId) {
        return {
          ...option,
          amount: Math.max(option.amount - 1, 1)
        };
      }
      return option;
    });
    setSelectedOptions(updatedOptions);
  };
  
  const handleIncreaseAmount = (cartDetailId) => {
    const updatedOptions = selectedOptions.map(option => {
      if (option.amount + 1 <= stockQuantity) {
        return {
          ...option,
          amount: option.amount + 1
        };
      }
      
      return option;
    });
    setSelectedOptions(updatedOptions);
  };
  
  const handleToggleOption = (cartDetailId) => {
    const updatedOptions = localSelectedOptions.map(option => {
      if (option.cartDetailId === cartDetailId) {
        return {
          ...option,
          isChecked: !option.isChecked
        };
      }
      return option;
    });
  
    // 상태 업데이트
    setLocalSelectedOptions(updatedOptions);
  };
  
  
  

  const handleToggleAllOptions = () => {
    const allSelected = localSelectedOptions.every(option => option.isChecked);
  
    const newOptions = localSelectedOptions.map(option => ({
      ...option,
      isChecked: !allSelected
    }));
  
    setLocalSelectedOptions(newOptions); // localSelectedOptions 상태 업데이트
    setSelectedOptions(newOptions); // selectedOptions도 업데이트
  };
  

  const token = useSelector((state)=>state.login.token);
  const handleConfirmChanges = () => {
    // API에 변경된 옵션 정보를 전송
    const requestBody = {
      cartUpdateDTOList: selectedOptions.map(option => ({
        cartDetailId: option.cartDetailId,
        amount: option.amount
      }))
    };
  
    // 요청 헤더에 인증 토큰 추가
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };
  
    axios.put('https://dev.the-goods.store/api/cart', requestBody, header)
      .then(response => {
        console.log('API 요청이 성공적으로 완료되었습니다.');
        onClose(); // 수정 모달 닫기
        window.location.reload();
      })
      .catch(error => {
        console.error('API 요청이 실패하였습니다.', error);
      });
  };
  
  const handleDeleteSelectedOptions = () => {
    const deletedOptionIds = localSelectedOptions
      .filter(option => option.isChecked)
      .map(option => option.cartDetailId);
  
    // DELETE 요청의 본문에 데이터를 넣어서 요청을 보냄
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };
  
    axios.delete('https://dev.the-goods.store/api/cart/detail/delete', {
      ...header,
      data: { cartDetailIdList: deletedOptionIds }
    })
      .then(response => {
        // 삭제된 옵션들을 상태에서 제거
        console.log('옵션 삭제 요청이 성공적으로 완료되었습니다.');
      })
      .catch(error => {
        console.error('옵션 삭제 요청이 실패하였습니다.', error);
      });
  };


  
  const stockQuantity = stockInfo && stockInfo.result && stockInfo.result.cartDetailStockDTOList && stockInfo.result.cartDetailStockDTOList[0] && stockInfo.result.cartDetailStockDTOList[0].stock;


  return (
    <ModalOverlay>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <div style={{display:'flex'}}>
        <Title>주문 수정</Title>
        <XImg src={X} alt="X" onClick={onClose}></XImg></div>
        <Divider />
        <Container>
          <OptionContainer>
            
              <CustomButton state={selectedOptions.every(option => option.isChecked)} onChange={()=>handleToggleAllOptions((selectedOptions)=>!selectedOptions)} index="selectedOptions" label="전체 선택"/> 
            
            <DeleteButton onClick={handleDeleteSelectedOptions}>X 선택 삭제</DeleteButton>
          </OptionContainer>
          {selectedOptions.map((option, index) => (
            
            <OptionContainer key={index}>
              <OptionItem>
                <CheckPosition>
                <CustomButton  state={option.isChecked} onChange={() => handleToggleOption(option.cartDetailId)} index={option.cartDetailId} label="" /> 
                </CheckPosition>
                <div style={{width:'20vw',display:'flex'}}>
                  
                <OptionName>{option.optionName}</OptionName>
                <Stock>남은 재고 : {stockQuantity}개</Stock>
                </div>
                
                <QuantityControl>
                  <Button onClick={() => handleDecreaseAmount(option.cartDetailId)}>-</Button>
                  <AmountInput><span style={{marginTop:'9px'}}>{option.amount}</span></AmountInput>
                  
                  <Button onClick={() => handleIncreaseAmount(option.cartDetailId)} disabled={option.amount >= {stockQuantity}}>+</Button>
          </QuantityControl>
              </OptionItem>
            </OptionContainer>
          ))}
        </Container>
        <CloseButton onClick={handleConfirmChanges}>확인</CloseButton>
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
  padding:6px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  text-align: center;
  margin-left: 16.6vw;
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
  padding:2px;
`;

const OptionName = styled.p`
  margin-right: 0px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.1vw;
  line-height: 20px;
  color: #52555B;
`;

const AmountInput = styled.div`
  width: 2vw;
  height: 3vh;
  border-top: 1px solid rgba(32, 33, 35, 0.8);
  border-bottom: 1px solid rgba(32, 33, 35, 0.8);
  text-align: center;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  line-height: 3vh;
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
  margin-left:0vw;
`;
const Button = styled.div`
  width: 1.5vw;
  height: 3vh;
  text-align: center;
  border: 1px solid rgba(32, 33, 35, 0.8);

`;
const CheckPosition = styled.div`
  margin-left:1vw;
`
const Stock =styled.p`
  margin-left: 5vw;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  line-height: 25px;
  color: #52555B;
`