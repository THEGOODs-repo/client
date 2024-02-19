import React, { useState } from "react";
import styled from "styled-components";
import Create from "../../img/Preference/creative-idea.png";
import Idol from "../../img/Preference/microphone.png";
import Ani from "../../img/Preference/laptop.png";
import Mungu from "../../img/Preference/pencil.png";
import Food from "../../img/Preference/chef.png";
import Fashion from "../../img/Preference/shirt.png";
import { useDispatch } from "react-redux";
import { choicePreference } from "../../redux/preferenceSlice";
import { Link, useNavigate } from "react-router-dom";

export default function PreferenceModal() {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);
  const navigate = useNavigate();
  const handleClick = (category) => {
    setClick(true);
    navigate(`/preference/${category}`)
  };

  const closeModal = () => {
    setModalOpen(false);
    navigate(`/`)
  };

  return (
    <MainContainer
      style={{
        display: modalOpen && !click ? "flex" : "none",
      }}
    >
      <ModalContainer>
        <h5>원활한 서비스 이용을 위해 원하는 카테고리를 선택해주세요.</h5>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
          }}
        >
          <div style={{ flexDirection: "column" }}>
            <IconContainer onClick={() => handleClick("Create")}>
              <img src={Create} alt="창작" />
            </IconContainer>
            <h6>창작</h6>
          </div>

          <div style={{ flexDirection: "column" }}>
            <IconContainer onClick={() => handleClick("Idol")}>
              <img src={Idol} alt="아이돌" />
            </IconContainer>
            <h6>아이돌</h6>
          </div>

          <div style={{ flexDirection: "column" }}>
            <IconContainer onClick={() => handleClick("Ani")}>
              <img src={Ani} alt="애니" />
            </IconContainer>
            <h6>애니</h6>
          </div>

          <div style={{ flexDirection: "column" }}>
            <IconContainer onClick={() => handleClick("Mungu")}>
              <img
                src={Mungu}
                alt="문구"
                style={{ width: "45px", height: "45px" }}
              />
            </IconContainer>
            <h6>문구</h6>
          </div>

          <div style={{ flexDirection: "column" }}>
            <IconContainer onClick={() => handleClick("Food")}>
              <img src={Food} alt="식품" />
            </IconContainer>
            <h6>식품</h6>
          </div>

          <div style={{ flexDirection: "column" }}>
            <IconContainer onClick={() => handleClick("Fashion")}>
              <img
                src={Fashion}
                alt="패션"
                style={{ width: "48px", height: "48px" }}
              />
            </IconContainer>
            <h6>패션</h6>
          </div>
        </div>
        <CancelBtn onClick={closeModal}> 닫기 </CancelBtn>
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
    margin-top: 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 17.85px;
    color: #202123;
  }

  h6 {
    margin: 8px 0px 0px 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    color: #202123;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 630px;
  height: 400px;
  background: #f9f9f9 center/cover;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 78.2px;
  height: 78.2px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  background: ${(props) =>
    props.click ? "rgba(240, 201, 32, 0.65)" : "rgba(156, 156, 156, 0.1)"};
  cursor: pointer;

  &:hover {
    background-color: rgba(240, 201, 32, 0.65);
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 45.05px;
    height: 45.05px;
  }
`;

const CancelBtn = styled.button`
  width: 100px;
  height: 34px;
  margin-top: 13px;
  background: #f0c920;
  border: none;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;

  cursor: pointer;
`;
