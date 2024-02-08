import React, { useState } from "react";
import styled from "styled-components";
import x from "../../img/x.png";

export default function Modal({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleButtonClick = (e) => {};

  return (
    <MainContainer>
      <ModalContainer>
        <div
          style={{
            display: "flex",
            position: "relative",
            flexDirection: "row",
          }}
        >
          <h5>맞춤정보 삭제</h5>
          <CancelBtn onClick={closeModal}></CancelBtn>
        </div>
        <hr
          style={{ width: "413px", margin: "0px", border: "1px solid #202123" }}
        />
        <h6>
          맞춤정보 삭제 시 입력한 맞춤정보도 함께 삭제됩니다. 삭제된 데이터는
          복구 불가하며 이후 내게 맞는 상품 추천을 받을 수 없고, 향후 제공된 내
          맞춤 리뷰보기 기능도 사용 불가합니다. 맞춤정보 삭제를 계속하시겠어요?
        </h6>
        <ConfirmBtn onClick={handleButtonClick}>확인</ConfirmBtn>
      </ModalContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(32, 33, 35, 0.5);

  h5 {
    width: 170px;
    height: 37px;
    margin: 0 0 8px 0;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #202123;
  }

  h6 {
    width: 409px;
    height: 87px;
    margin-top: 35px;
    margin-bottom: 40px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;

    color: #202123;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 495px;
  height: 297px;
  background: #f9f9f9;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const CancelBtn = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  top: 2px;
  margin-left: 200px;
  border: none;
  background: url(${x}) center/cover;
`;

const ConfirmBtn = styled.button`
  width: 130px;
  height: 45px;
  background: #f0c920;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border: none;
  border-radius: 5px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;

  color: #ffffff;
`;
