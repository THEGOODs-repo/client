import React, { useState } from "react";
import styled from "styled-components";
import CategoryComponent from "../CustomizedInformation/CategoryComponent";
import Modal from "../CustomizedInformation/Modal";
//마이페이지_맞춤정보관리
// 특이사항 ** 저장하기 및 취소하기 버튼 기능 필요 **
// 특이사항 ** 전문 보기 내용 필요 **
// 특이사항 ** 내 맞춤정보 삭제 > 확인 버튼 기능 필요 **

export default function CustomizedInformation() {
  const [checkBtn, setCheckBtn] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [categorySelected, setCategorySelected] = useState(
    Array(100).fill(false),
  );
  const [tagSelected, setTagSelected] = useState(Array(100).fill(false));

  // 내 맞춤정보 삭제 Btn
  const modalHandler = (e) => {
    setModalOpen(true);
  };

  const handleCategoryClick = (index) => {
    const updatedCategorySelected = [...categorySelected];
    updatedCategorySelected[index] = !updatedCategorySelected[index];
    setCategorySelected(updatedCategorySelected);
  };

  const handleTagClick = (index) => {
    const updatedTagSelected = [...tagSelected];
    updatedTagSelected[index] = !updatedTagSelected[index];
    setTagSelected(updatedTagSelected);
  };

  const Sample1 = () => {
    const categoryKeywords = [
      "키워드1",
      "키워드2",
      "키워드3",
      "키워드4",
      "키워드5",
      "키워드6",
      "키워드7",
    ];

    return categoryKeywords.map((category, index) => (
      <CategoryComponent
        key={index}
        keyword={category}
        isTagSelected={categorySelected[index]}
        handleButtonClick={() => handleCategoryClick(index)}
      />
    ));
  };

  const Sample2 = () => {
    const tagKeywords = [
      "태그1",
      "태그2",
      "태그3",
      "태그4",
      "태그5",
      "태그6",
      "태그7",
      "태그1",
      "태그2",
      "태그3",
      "태그4",
      "태그5",
      "태그6",
      "태그7",
      "태그1",
      "태그2",
      "태그3",
      "태그4",
      "태그5",
      "태그6",
      "태그7",
      "태그1",
      "태그2",
      "태그3",
      "태그4",
      "태그5",
      "태그6",
      "태그7",
      "태그1",
      "태그2",
      "태그3",
      "태그4",
      "태그5",
      "태그6",
      "태그7",
      "태그1",
      "태그2",
      "태그3",
      "태그4",
      "태그5",
      "태그6",
      "태그7",
      "태그1",
      "태그2",
      "태그3",
      "태그4",
      "태그5",
      "태그6",
      "태그7",
      "태그1",
      "태그2",
      "태그3",
      "태그4",
      "태그5",
      "태그6",
      "태그7",
      "태그1",
      "태그2",
      "태그3",
      "태그4",
      "태그5",
      "태그6",
      "태그7",
    ];

    return tagKeywords.map((tag, index) => (
      <CategoryComponent
        key={index}
        keyword={tag}
        isTagSelected={tagSelected[index]}
        handleButtonClick={() => handleTagClick(index)}
      />
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
        </Category>

        {/* 정보 활용 동의 */}
        <h4>정보 활용 동의</h4>
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <CustomButtonWrapper>
              <ButtonInput
                type="checkbox"
                id="checkbox"
                name="checkbox"
                checked={checkBtn}
                onChange={() => setCheckBtn((checkBtn) => !checkBtn)}
              />
              <ButtonLabel htmlFor="checkbox">
                <ButtonDiv>
                  후기/추천 서비스 활용을 위한 맞춤정보 수집 및 이용동의(선택)
                </ButtonDiv>
              </ButtonLabel>
            </CustomButtonWrapper>
            <CheckBoxLabel>
              <a href="" style={{ color: "#9c9c9c" }}>
                전문보기
              </a>
            </CheckBoxLabel>
          </div>

          {/* 선 */}
          <hr
            style={{
              width: "660px",
              margin: "10px 0px 0px 0px",
              backgroundColor: "#9c9c9c",
              height: "0.3px",
            }}
          />

          {/* 내 맞춤정보 삭제 */}
          <ModalBtn onClick={modalHandler}>
            <h5>내 맞춤정보 삭제</h5>
          </ModalBtn>
          {modalOpen && <Modal setModalOpen={setModalOpen} />}
        </div>

        {/* 취소, 저장하기  Btn */}
        <div>
          <CancelBtn>취소</CancelBtn>
          <SaveBtn>저장하기</SaveBtn>
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
  width: 718.125px;
  height: 801.9px;
  border: 2.475px solid rgba(0, 0, 0, 0.05);

  h1 {
    align-self: flex-start;
    margin-top: 33px;
    margin-left: 28.875px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 21.45px;
    line-height: 28.875px;
    color: #202123;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 49.5px;
  width: 718.125px;
  height: 41.25px;

  h2,
  h3 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14.85px;
    line-height: 20.625px;
    color: #202123;
  }

  h4 {
    margin-top: 14.85px;
    margin-bottom: 8.25px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14.85px;
    line-height: 20.625px;
    color: #202123;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 4.125px;
`;

const Category = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5.775px;
  width: 643.125px;
  height: auto; /* 자동으로 높이 조절 */
`;

const CheckBoxLabel = styled.div`
  margin-left: 9.9px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18.15px;
`;

const CancelBtn = styled.button`
  width: 326.625px;
  height: 49.5px;
  margin-top: 4px;
  margin-right: 4.125px;
  background: #f9f9f9;
  border: 0.825px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 4.125px 0.825px rgba(0, 0, 0, 0.08);
  border-radius: 4.125px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 19.8px;
  line-height: 18.15px;
  text-align: center;
  color: #888888;
`;

const SaveBtn = styled.button`
  width: 326.625px;
  height: 49.5px;
  align-self: flex-end;
  margin-right: 4.125%;
  margin-bottom: 28.875px;
  border: none;
  background: #f0c920;
  box-shadow: 0px 0px 4.125px 0.825px rgba(0, 0, 0, 0.08);
  border-radius: 4.125px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 19.8px;
  line-height: 18.15px;
  text-align: center;
  color: #ffffff;
`;

const ModalBtn = styled.button`
  background-color: #fefdfd;
  border: none;
  text-decoration: underline;
  color: #9c9c9c;

  h5 {
    margin: 8.25px 0px 8.25px 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14.85px;
    line-height: 20.625px;
    color: #9c9c9c;
  }
`;

//Checkbox 준석님
const CustomButtonWrapper = styled.div`
  display: flex;
  padding: 0;
  align-items: flex-start;
`;

const ButtonLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  padding: 0;
  margin: 0 0 0 0; /* 기본값 설정 */

  &:before {
    content: "";
    height: 14px;
    width: 14px;
    border: 1px solid #9c9c9c;
    border-radius: 1px;
    background-size: 9px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: transparent;
    transition: opacity 0.1s;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M1 5.8L4.14286 9L12 1" stroke="%239C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  }

  &:after {
    opacity: 0;
    content: "";
    position: absolute;
    height: 14px;
    width: 14px;
    border: 1px solid transparent;
    border-radius: 1px;
    background-size: 9px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #f0c920;
    transition: opacity 0.1s;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M1 5.8L4.14286 9L12 1" stroke="%23FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  }
`;

const ButtonInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  transition: opacity 1s ease; // 추가된 부분

  &:checked + ${ButtonLabel} {
    &:after {
      opacity: 1;
      transition: opacity 0.1s;
    }
  }
`;

const ButtonDiv = styled.div`
  margin: 0 0 0 7px;
  white-space: pre-line;
  text-align: start;
  color: #202123;
  margin-left: 5px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18.9px;
`;
