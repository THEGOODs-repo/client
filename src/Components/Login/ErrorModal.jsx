import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(32, 33, 35, 0.5);
  display: ${(e) => (e.$display ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: white;
  padding: ${10 / 19.2}vw 0 ${17 / 19.2}vw 0;
  width: ${495 / 19.2}vw;
  border-radius: ${5 / 19.2}vw;
  background: #f9f9f9;

  /* box */
  box-shadow: 0px 0px ${10 / 19.2}vw ${1 / 19.2}vw rgba(0, 0, 0, 0.25);
`;

const ConfirmButton = styled.div`
  display: flex;
  width: ${460 / 19.2}vw;
  height: ${45 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  padding: 0;
  box-shadow: 0px 0px ${5 / 19.2}vw ${1 / 19.2}vw rgba(0, 0, 0, 0.08);
  background: #f0c920;
  cursor: grab;
`;

const TextWrapper = styled.div`
  display: flex;
  height: ${78 / 19.2}vw;
  width: 100%;
  margin: 0 0 0 0;
  padding: 0;
  font-size: ${18 / 19.2}vw;
  justify-content: center;
  align-items: center;
  color: #52555b;
  flex-direction: column;
`;

const ErrorModal = ({ isOpen, onClose, text }) => {
  return (
    <ModalWrapper $display={isOpen}>
      <Modal>
        <TextWrapper>
          {text.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </TextWrapper>
        <ConfirmButton onClick={onClose}>확인</ConfirmButton>
      </Modal>
    </ModalWrapper>
  );
};

export default ErrorModal;
