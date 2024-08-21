import React, { useRef, useState } from "react";
import styled from "styled-components";
import AddPicture from "../../../img/AddPicture.png";
import { useDispatch, useSelector } from 'react-redux';


export default function EditProfile() {
  const fileInputBackground = useRef(null);
  const fileInputProfile = useRef(null);
  const [inputNickName, setInputNickName] = useState(0);
  const [inputIntroduce,setInputIntroduce] = useState(0);
  const [uploadBackground, setUploadBackground] = useState("");
  const [uploadProfile, setUploadProfile] = useState("");
  const [editBtn, setEditBtn] = useState(false);
  //const alreadyUser = useSelector((state) => state.login.token);
  const alreadyUser = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiVVNFUiJ9XSwibWVtYmVyUm9sZSI6IkJVWUVSIiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsInR5cGUiOiJBQ0NFU1MiLCJleHAiOjE3MjQyNTg0Njd9.j66GVbg_ENpR2FvXpiDU_EnUfMywvUGXwnkJGHaiqNCAu9cZFDVT7e8mnmTInziwzZoB2eXBlvGsRftnnV8W4A"
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

 const handleEdit = async () => {
    if (!editBtn) {
      setEditBtn(true);
    } else {
      try {
        const formData = new FormData();
        if (uploadProfile) {
          formData.append('profileImage', uploadProfile);
        }
        if (uploadBackground) {
          formData.append('backgroundImage', uploadBackground);
        }
        formData.append('nickName', inputNickName);
        formData.append('introduce', inputIntroduce);

        const response = await fetch('/api/members/profile/modify', {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${alreadyUser}`, // JWT 토큰 추가
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to update data');
        }

        const data = await response.json();
        console.log('Response:', data);

        setEditBtn(false);
      } catch (error) {
        console.error('Error:', error);
      }
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
      <InputContainer>
        <h2>자기소개</h2>
        <h3>{inputIntroduce}/160</h3>
      </InputContainer>
      <InputName style={{height:"150px"}}
        disabled={!editBtn}
        type="text"
        onChange={onInputNickNameHandler}
        maxLength="14"
        placeholder="자기소개를 작성해주세요."
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
  height: 950px;
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
