import React, { useRef, useState } from "react";
import styled from "styled-components";

export default function SystemNickname() {
  const [inputNickName, setInputNickName] = useState(0);
  const [editBtn, setEditBtn] = useState(false);

  const onInputNickNameHandler = (e) => {
    setInputNickName(e.target.value.length);
  };

  const handleEdit = (e) => {
    if (editBtn === false) {
      setEditBtn(true);
    } else if (editBtn === true) {
      setEditBtn(false);
    }
  };

  return (
    <>
      <MainContainer>
        <InputContainer>
          <h2>운영자 닉네임</h2>
          <h3>{inputNickName}/15</h3>
        </InputContainer>
        <InputName
          disabled={!editBtn}
          type="text"
          onChange={onInputNickNameHandler}
          maxLength="14"
          placeholder="닉네임을 입력해주세요."
        />

        {editBtn ? (
          <SaveBtn onClick={handleEdit}> 확인 </SaveBtn>
        ) : (
          <EditBtn onClick={handleEdit}> 수정 </EditBtn>
        )}
      </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 10px 30px;
  width: ${870 / 19.2}vw;
  height: 950px;
  border: 2.475px solid rgba(0, 0, 0, 0.05);
`;
const InputContainer = styled.div`
  display: flex;
  width: ${655 / 19.2}vw;
  justify-content: space-between;

  h2 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: ${26 / 19.2}vw;
    line-height: ${35 / 19.2}vw;
    color: #202123;
  }

  h3 {
    width: 31.35px;
    height: 18.975px;
    margin-top: 3.4vh;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 13.2px;
    line-height: 18.15px;

    color: #9c9c9c;
  }
`;

const InputName = styled.input`
  width: ${640 / 19.2}vw;
  height: 49.5px;
  padding-left: 12.375px;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 2.475px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16.2px;
  line-height: 22.275px;

  &::placeholder {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16.2px;
    line-height: 22.275px;
    color: #9c9c9c;
  }
`;

const EditBtn = styled.button`
  width: 99px;
  height: 38.775px;
  margin-top: 28.875px;
  background: #f0c920;
  border: none;
  border-radius: 1.65px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 13.2px;
  line-height: 18.15px;
  color: #ffffff;
`;

const SaveBtn = styled.button`
  width: 99px;
  height: 38.775px;
  margin-top: 28.875px;
  background: #ffffff;
  border: 1px solid #f0c920;
  border-radius: 1.65px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 13.2px;
  line-height: 18.15px;
  color: #f0c920;
`;
