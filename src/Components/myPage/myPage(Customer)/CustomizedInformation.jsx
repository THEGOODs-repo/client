import React, { useState } from "react";
import styled from "styled-components";
import CategoryComponent from "../CustomizedInformation/CategoryComponent";
import Modal from "../CustomizedInformation/Modal";

//마이페이지_맞춤정보관리
export default function CustomizedInformation() {
  const [checkBtn, setCheckBtn] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const checkBoxHandler = (e) => {
    if (checkBtn === null) {
      setCheckBtn(true);
    } else if (checkBtn === true) {
      setCheckBtn(null);
    }
  };

  const modalHandler = (e) => {
    setModalOpen(true);
  };

  const Sample1 = () => {
    const categories = [
      "키워드1",
      "키워드2",
      "키워드3",
      "키워드4",
      "키워드5",
      "키워드6",
      "키워드7",
    ];

    return categories.map((category, index) => (
      <CategoryComponent key={index} keyword={category} />
    ));
  };

  const Sample2 = () => {
    const categories = [
      "태그1",
      "태그2",
      "태그3",
      "태그4",
      "태그5",
      "태그6",
      "태그7",
    ];

    return categories.map((category, index) => (
      <CategoryComponent key={index} keyword={category} />
    ));
  };

  return (
    <MainContainer>
      <h1>맞춤 정보 관리</h1>
      <CategoryContainer>
        <Title>
          <h2>카테고리</h2>
          <h3>(1개)</h3>
        </Title>
        <Category>
          <Sample1 />
        </Category>
        <Title>
          <h2>태그</h2>
        </Title>
        <Category>
          <Sample2 />
          <Sample2 />
          <Sample2 />
          <Sample2 />
          <Sample2 />
          <Sample2 />
          <Sample2 />
          <Sample2 />
        </Category>

        <h4>정보 활용 동의</h4>
        <div>
          <InputCheckBox
            type="checkbox"
            value="checked"
            onChange={checkBoxHandler}
          />
          <CheckBoxLabel>
            후기/추천 서비스 활용을 위한 맞춤정보 수집 및 이용동의(선택)
            <a
              href="링크할 주소"
              style={{
                marginLeft: "10px",
                fontFamily: "Noto Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                textDecorationLine: "underline",
                color: "#9C9C9C",
              }}
            >
              전문보기
            </a>
          </CheckBoxLabel>
          <hr
            style={{
              width: "790px",
              backgroundColor: "#9c9c9c",
              border: "none",
              height: "1px",
              margin: "0px",
            }}
          />

          <ModalBtn onClick={modalHandler}>
            <h3>내 맞춤정보 삭제</h3>
          </ModalBtn>
          {modalOpen && <Modal setModalOpen={setModalOpen} />}
        </div>
        <div>
          <CancelBtn
          // onClick={withdrawalButtonClick}
          // disabled={!(radionBtn && email && checkBtn)}
          >
            취소
          </CancelBtn>
          <SaveBtn
          // onClick={withdrawalButtonClick}
          // disabled={!(radionBtn && email && checkBtn)}
          >
            저장하기
          </SaveBtn>
        </div>
      </CategoryContainer>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 870px;
  height: 972px;
  border: 3px solid rgba(0, 0, 0, 0.05);

  h1 {
    align-self: flex-start;
    margin-top: 5%;
    margin-left: 5%;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 35px;
    color: #202123;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 9%;
  width: 870px;
  height: 50px;

  h2 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #202123;
  }

  h3 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #9c9c9c;
  }

  h4 {
    margin-top: 30px;
    margin-bottom: 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #202123;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
`;
const Category = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 3px;
  width: 780px;
  height: auto; /* 자동으로 높이 조절 */
`;

const InputCheckBox = styled.input`
  position: relative;
  top: 0px;
  width: 20px;
  height: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 1px solid #9c9c9c;
  color: white;
  accent-color: #f0c920;
`;

const CheckBoxLabel = styled.label`
  position: relative;
  top: -3px;
  margin: 0px 0px 3px 3px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #202123;
`;

const CancelBtn = styled.button`
  width: 395px;
  height: 60px;
  margin-top: 25px;
  margin-right: 5px;
  background: #f9f9f9;
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 22px;
  text-align: center;
  color: #888888;
`;

const SaveBtn = styled.button`
  width: 395px;
  height: 60px;
  align-self: flex-end;
  margin-right: 5%;
  margin-bottom: 35px;
  border: none;
  background: #f0c920;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
`;

const ModalBtn = styled.button`
  background-color: #fefdfd;
  border: none;
  text-decoration: underline;

  h3 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #9c9c9c;
  }
`;
