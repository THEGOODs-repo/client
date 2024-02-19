import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(32, 33, 35, 0.5);
  display: ${(e) => (e.$display ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: white;
  padding: ${34 / 19.2}vw ${44 / 19.2}vw;
  width: ${495 / 19.2}vw;
  border-radius: ${5 / 19.2}vw;
  background: #f9f9f9;

  /* box */
  box-shadow: 0px 0px ${10 / 19.2}vw ${1 / 19.2}vw rgba(0, 0, 0, 0.25);
`;

const ConfirmButton = styled.div`
  display: flex;
  width: ${92 / 19.2}vw;
  height: ${38 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  color: ${(e) => (e.$color === "white" ? "#888888" : "#fff")};
  justify-content: center;
  align-items: center;
  font-size: ${14 / 19.2}vw;
  padding: 0;
  background: ${(e) => (e.$color === "white" ? "#F9F9F9" : "#f0c920")};
  margin: 0 ${2 / 19.2}vw;
  align-self: center;
  border: ${1 / 19.2}vw solid
    ${(e) => e.$color === "white" && "rgba(156,156,156,0.5)"};
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 0 0;
  padding: 0 0 ${10 / 19.2}vw 0;
  font-size: ${24 / 19.2}vw;
  justify-content: flex-start;
  align-items: center;
  color: #202123;
  flex-direction: row;

  border-bottom: ${1 / 19.2}vw solid #202123;

  div > {
    align-self: flex-start;
  }

  svg > {
    align-self: flex-end;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 0 0;
  padding: ${65 / 19.2}vw ${3 / 19.2}vw;
  font-size: ${18 / 19.2}vw;
  justify-content: flex-start;
  align-items: flex-start;
  color: #52555b;
  flex-direction: column;
  text-align: flex-start;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 0 0;
  padding: 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const ConfirmModal = ({ isOpen, onClose, OrderItemId }) => {
  const token = useSelector((state) => state.login.token);
  const HandleConfirmOrder = async () => {
    try {
      const endpoint = `${process.env.REACT_APP_BACKEND}/api/order/${OrderItemId}/complete`;

      const response = await axios.post(endpoint, null, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.isSuccess === true) {
        console.log(response);
        onClose();
      }
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  return (
    <ModalWrapper $display={isOpen}>
      <Modal>
        <TitleWrapper>
          <div>구매 확정</div>
        </TitleWrapper>
        <TextWrapper>선택하신 상품을 구매 확정하시겠습니까?</TextWrapper>
        <ButtonWrapper>
          <ConfirmButton $color="white" onClick={onClose}>
            취소
          </ConfirmButton>
          <ConfirmButton onClick={() => HandleConfirmOrder()}>
            확인
          </ConfirmButton>
        </ButtonWrapper>
      </Modal>
    </ModalWrapper>
  );
};

export default ConfirmModal;
