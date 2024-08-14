import React, { useState } from "react";
import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
`;

export const ModalHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  padding: 16px;
`;

export const Section = styled.div`
  margin-bottom: 16px;
`;

export const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const RadioInput = styled.input`
  margin-right: 8px;
`;

export const RadioLabel = styled.label`
  font-size: 14px;
  cursor: pointer;
`;



function CancelModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedReason, setSelectedReason] = useState("");

  const handleClose = () => setIsOpen(false);

  return (
    <Container>
      {isOpen && (
        <Modal>
          <ModalHeader>
            <ModalTitle>주문 취소</ModalTitle>
            <CloseButton onClick={handleClose}>&times;</CloseButton>
          </ModalHeader>
          <ModalContent>
            <Section>
              <OptionGroup>
                <Option>
                  <RadioInput
                    type="radio"
                    id="option1"
                    name="cancelReason"
                    value="상품이 마음에 들지 않음"
                    checked={selectedReason === "상품이 마음에 들지 않음"}
                    onChange={() => setSelectedReason("상품이 마음에 들지 않음")}
                  />
                  <RadioLabel htmlFor="option1">상품이 마음에 들지 않음</RadioLabel>
                </Option>
                <Option>
                  <RadioInput
                    type="radio"
                    id="option2"
                    name="cancelReason"
                    value="옵션을 잘못 선택함"
                    checked={selectedReason === "옵션을 잘못 선택함"}
                    onChange={() => setSelectedReason("옵션을 잘못 선택함")}
                  />
                  <RadioLabel htmlFor="option2">옵션을 잘못 선택함</RadioLabel>
                </Option>
              </OptionGroup>
            </Section>
            <Section>
              <OptionGroup>
                <Option>
                  <RadioInput
                    type="radio"
                    id="option3"
                    name="cancelReason"
                    value="상품의 구성품 / 부속품이 들어있지 않음"
                    checked={selectedReason === "상품의 구성품 / 부속품이 들어있지 않음"}
                    onChange={() => setSelectedReason("상품의 구성품 / 부속품이 들어있지 않음")}
                  />
                  <RadioLabel htmlFor="option3">상품의 구성품 / 부속품이 들어있지 않음</RadioLabel>
                </Option>
                <Option>
                  <RadioInput
                    type="radio"
                    id="option4"
                    name="cancelReason"
                    value="상품이 설명과 다름"
                    checked={selectedReason === "상품이 설명과 다름"}
                    onChange={() => setSelectedReason("상품이 설명과 다름")}
                  />
                  <RadioLabel htmlFor="option4">상품이 설명과 다름</RadioLabel>
                </Option>
                <Option>
                  <RadioInput
                    type="radio"
                    id="option5"
                    name="cancelReason"
                    value="상품이 파손되어 배송됨"
                    checked={selectedReason === "상품이 파손되어 배송됨"}
                    onChange={() => setSelectedReason("상품이 파손되어 배송됨")}
                  />
                  <RadioLabel htmlFor="option5">상품이 파손되어 배송됨</RadioLabel>
                </Option>
                <Option>
                  <RadioInput
                    type="radio"
                    id="option6"
                    name="cancelReason"
                    value="기타"
                    checked={selectedReason === "기타"}
                    onChange={() => setSelectedReason("기타")}
                  />
                  <RadioLabel htmlFor="option6">기타</RadioLabel>
                </Option>
              </OptionGroup>
            </Section>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}

export default CancelModal;
