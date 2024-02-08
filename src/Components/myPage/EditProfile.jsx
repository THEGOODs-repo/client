import React, { useRef } from "react";
import styled from "styled-components";
import AddPicture from "../../img/AddPicture.png";

export default function EditProfile() {
  const fileInput = useRef(null);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  const handleChange = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <MainContainer>
      <h1>프로필 편집</h1>
      <Input>
        <Button onClick={handleButtonClick}></Button>
        <input
          type="file"
          accept="image/*"
          ref={fileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </Input>
      <InputProfile>
        <Button onClick={handleButtonClick}></Button>
        <input
          type="file"
          accept="image/*"
          ref={fileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </InputProfile>

      <InputContainer>
        <h2>닉네임</h2>
        <InputName type="text" placeholder="닉네임을 입력해주세요." />
        <h2>자기소개</h2>
        <InputText type="text" placeholder="자기소개를 작성해주세요." />
      </InputContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 87vw;
  height: 97.2vh;
  margin: 3%;

  h1 {
    font-size: 26px;
    font-weight: bolder;
  }

  h2 {
    color: gray;
    font-size: 15px;
    margin-top: 5vh;
  }
`;

// const Button = styled.button`
//   width: 5.3vw;
//   height: 5.3vh;
//   border: none;
//   border-radius: 50%;
//   background: url(${AddPicture}) center/cover;
// `;
const Button = styled.button`
  width: 5.3vw;
  height: 5.3vh;
  border: none;
  border-radius: 50%;
  background-image: url(${AddPicture}); /* 수정된 부분 */
  background-size: cover; /* 배경 이미지 크기 조정 */
`;


const Input = styled.div`
  display: flex;
  position: relative;
  width: 79.4vw;
  height: 19.4vh;
  border-radius: 10px;
  background: #d9d9d9;
  justify-content: center;
  align-items: center;
`;

const InputProfile = styled.div`
  display: flex;
  position: absolute;
  width: 12.5vw;
  height: 12.5vh;
  border-radius: 50%;
  background: #d9d9d9;
  top: 26vh;
  left: 45vw;
  border: 5px solid white;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  margin-top: 10vh;

  h2 {
    color: gray;
    font-size: 15px;
    margin-top: 4vh;
  }
`;

const InputName = styled.input`
  width: 79.4vw;
  height: 6vh;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #9c9c9c;
`;

const InputText = styled.input`
  width: 79.4vw;
  height: 13.3vh;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #9c9c9c;
`;
