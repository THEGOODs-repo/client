import React, { useRef, useState } from "react";
import styled from "styled-components";
import AddPicture from "../../../img/AddPicture.png";

export default function EditProfileSeller() {
  const [editBtn, setEditBtn] = useState(false);
  const [inputNickName, setInputNickName] = useState(0);
  const [inputIntroduce, setInputIntroduce] = useState(0);
  const [uploadBackground, setUploadBackground] = useState("");
  const [uploadProfile, setUploadProfile] = useState("");

  const onInputNickNameHandler = (e) => {
    setInputNickName(e.target.value.length);
  };
  const onInputIntroduceHandler = (e) => {
    setInputIntroduce(e.target.value.length);
  };

  const fileInputBackground = useRef(null);
  const fileInputProfile = useRef(null);

  const handleButtonClickBackground = (e) => {
    fileInputBackground.current.click();
  };

  const handleButtonClickProfile = (e) => {
    fileInputProfile.current.click();
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

  const handleEdit = (e) => {
    if (editBtn === false) {
      console.log(editBtn);
      setEditBtn(true);
    } else if (editBtn === true) {
      setEditBtn(false);
    }
  };

  return (
    <MainContainer>
      <h1>프로필 편집</h1>
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
        >
          {" "}
        </ButtonBackground>
        <input
          type="file"
          accept="image/*"
          ref={fileInputBackground}
          onChange={handleBackground}
          style={{ display: "none" }}
        />
      </InputBackground>
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
      <InputContainer>
        <h2>자기소개</h2>
        <h3>{inputIntroduce}/100</h3>
      </InputContainer>
      <InputText
        disabled={!editBtn}
        type="text"
        onChange={onInputIntroduceHandler}
        maxLength="99"
        placeholder="자기소개를 작성해주세요."
      />
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
  width: 870px;
  height: 1300px;
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

  h2 {
    color: gray;
    margin-top: 5vh;

    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;

    color: #52555b;
  }
`;

const ButtonBackground = styled.button`
  width: 53px;
  height: 53px;
  border: none;
  border-radius: 50%;
  background: url(${AddPicture}) center/cover;
`;

const ButtonProfile = styled.button`
  width: 53px;
  height: 53px;
  border: none;
  border-radius: 50%;
  background: url(${AddPicture}) center/cover;
`;

const InputBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 794px;
  height: 184px;

  border-radius: 5px;
  background: #d9d9d9;
  margin-bottom: 40px;
`;

const InputProfile = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 125px;
  top: 180px;
  left: 70px;

  border-radius: 50%;
  background: #d9d9d9;
  border: 5px solid #fefdfd;
`;

const InputContainer = styled.div`
  display: flex;
  width: 794px;
  justify-content: space-between;

  h2 {
    width: 64px;
    height: 23px;
    color: #52555b;
    font-size: 16px;
    font-weight: medium;
    margin-top: 4vh;
  }

  h3 {
    width: 38px;
    height: 23px;
    margin-top: 4vh;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;

    color: #9c9c9c;
  }
`;

const InputName = styled.input`
  width: 780px;
  height: 60px;
  padding-left: 15px;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 3px;

  &::placeholder {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #9c9c9c;
  }
`;

const InputText = styled.textarea`
  width: 780px;
  height: 133px;
  padding-left: 15px;
  padding-top: 15px;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 3px;

  &::placeholder {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #9c9c9c;
  }
`;

const EditBtn = styled.button`
  width: 120px;
  height: 47px;
  margin-top: 35px;

  background: #f0c920;
  border: none;
  border-radius: 2px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  color: #ffffff;
`;

const SaveBtn = styled.button`
  width: 120px;
  height: 47px;
  margin-top: 35px;

  background: #ffffff;
  border: 1px solid #f0c920;
  border-radius: 2px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  color: #f0c920;
`;
