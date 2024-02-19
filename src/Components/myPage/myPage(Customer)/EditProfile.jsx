import React, { useRef, useState } from "react";
import styled from "styled-components";
import AddPicture from "../../../img/AddPicture.png";

export default function EditProfile() {
  const fileInputBackground = useRef(null);
  const fileInputProfile = useRef(null);
  const [inputNickName, setInputNickName] = useState(0);
  const [uploadBackground, setUploadBackground] = useState("");
  const [uploadProfile, setUploadProfile] = useState("");
  const [editBtn, setEditBtn] = useState(false);

  // 닉네임 글자수 표시
  const onInputNickNameHandler = (e) => {
    setInputNickName(e.target.value.length);
  };

  // 배경 Btn
  const handleButtonClickBackground = (e) => {
    fileInputBackground.current.click();
  };

  const handleBackground = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadBackground(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // 프로필 Btn
  const handleButtonClickProfile = (e) => {
    fileInputProfile.current.click();
  };

  const handleProfile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadProfile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // "수정" Btn
  const handleEdit = (e) => {
    if (editBtn === false) {
      setEditBtn(true);
    } else if (editBtn === true) {
      setEditBtn(false);
    }
  };

  return (
    <MainContainer>
      <h1>프로필 수정</h1>

      {/* 배경 사진 */}
      <InputBackground
        style={{
          background: uploadBackground
            ? `url(${uploadBackground}) center/cover`
            : "#d9d9d9",
        }}
      >
        <ButtonBackground
          onClick={handleButtonClickBackground}
          style={{
            background: uploadBackground
              ? ""
              : `url(${AddPicture}) center/cover`,
          }}
        ></ButtonBackground>
        <input
          type="file"
          accept="image/*"
          ref={fileInputBackground}
          onChange={handleBackground}
          style={{ display: "none" }}
        />
      </InputBackground>

      {/* 프로필 사진 */}
      <InputProfile
        style={{
          background: uploadProfile
            ? `url(${uploadProfile}) center/cover`
            : "#d9d9d9",
        }}
      >
        <ButtonProfile
          onClick={handleButtonClickProfile}
          style={{
            background: uploadProfile ? "" : `url(${AddPicture}) center/cover`,
          }}
        ></ButtonProfile>
        <input
          type="file"
          accept="image/*"
          ref={fileInputProfile}
          onChange={handleProfile}
          style={{ display: "none" }}
        />
      </InputProfile>

      {/* 닉네임 */}
      <InputContainer>
        <h2>닉네임</h2>
        <h3>{inputNickName}/15</h3>
      </InputContainer>
      <InputName
        disabled={!editBtn}
        type="text"
        onChange={onInputNickNameHandler}
        maxLength="14"
        placeholder="닉네임을 입력해주세요."
      />

      {/* Btn */}
      {editBtn ? (
        <SaveBtn onClick={handleEdit}> 확인 </SaveBtn>
      ) : (
        <EditBtn onClick={handleEdit}> 수정 </EditBtn>
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 717.75px;
  height: 801.75px;
  border: 2.475px solid rgba(0, 0, 0, 0.05);

  h1 {
    align-self: flex-start;
    margin-top: 33px;
    margin-left: 28.875px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 21.45px;
    line-height: 29.925px;
    color: #202123;
  }

  h2 {
    color: gray;
    margin-top: 4.125vh;

    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 13.2px;
    line-height: 18.15px;

    color: #52555b;
  }
`;

const InputBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 655.05px;
  height: 151.8px;
  border-radius: 4.125px;
  background: #d9d9d9;
  margin-top: 12.3105px;
  margin-bottom: 33px;
`;

const InputProfile = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 103.125px;
  height: 103.125px;
  top: 178.875px;
  left: 57.75px;
  border-radius: 50%;
  background: #d9d9d9;
  border: 4.125px solid #fefdfd;
`;

const ButtonBackground = styled.button`
  width: 43.575px;
  height: 43.575px;
  border: none;
  border-radius: 50%;
  background: none;
`;

const ButtonProfile = styled.button`
  width: 43.575px;
  height: 43.575px;
  border: none;
  border-radius: 50%;
  background: none;
`;

const InputContainer = styled.div`
  display: flex;
  width: 655.05px;
  justify-content: space-between;

  h2 {
    width: 52.8px;
    height: 18.975px;
    color: #52555b;
    font-size: 13.2px;
    font-weight: medium;
    margin-top: 3.4vh;
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
  width: 643.5px;
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
