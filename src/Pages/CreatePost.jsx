import React from "react";
import styled from "styled-components";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import HeaderComponent from "../Components/Header/Header";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";
import BaseFooter from "../Components/Footer/BaseFooter";
import { createGlobalStyle } from "styled-components";
import fileInput from "./../img/download.svg";
import plus from "./../img/Plus.png";
import NewjeansProfile from "./../img/IMG_7787.PNG";

const CreatePost = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <NavWrapContainer>
        <NavigationMenu />
        <div
          style={{
            borderBottom: "1px solid #9C9C9C",
            width: "100%",
            height: "3px",
          }}
        ></div>
        <NavigationCategoryMenu />
      </NavWrapContainer>
      <Background>
        <Line />
        <Container>
          <PostHeader>
            <ProfilePicture src={NewjeansProfile} alt="프로필 사진" />
            <UserInfo>
              <UserName>판매자</UserName>
            </UserInfo>
            <SubmitButton>작성하기</SubmitButton>
          </PostHeader>
          <FileInputSection>
            <FileInputImg src={fileInput} alt="file input image"></FileInputImg>
            클릭하여 파일을 선택하거나 여기로 드래그 하세요
          </FileInputSection>
          <AddFile>
            <img src={plus} alt="add" />
          </AddFile>
          <Divider />
          <Write placeholder="내용을 입력해주세요"></Write>
        </Container>
        <BaseFooter />
      </Background>
    </>
  );
};

export default CreatePost;
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Noto Sans";
  }

`;

const NavWrapContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Background = styled.div`
  background-color: #f9f9f9;
  height: 100%;
`;

const Line = styled.div`
  width: 100%;
  opacity: 0.8;
  border: 0.5px solid #9c9c9c;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`;
const Container = styled.div`
  margin: 20px auto;
  width: ${740 / 19.2}vw;
  background: #ffffff;
  border: 1px solid rgba(156, 156, 156, 0.5);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: ${20 / 19.2}vw ${27 / 19.2}vw;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfilePicture = styled.img`
  width: ${50 / 19.2}vw;
  height: ${50 / 19.2}vw;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
`;

const UserName = styled.p`
  font-weight: 700;
  margin-bottom: 5px;
  font-family: "Noto Sans";
  font-style: normal;
  font-size: ${16 / 19.2}vw;
  line-height: 22px;
  color: #202123;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  width: ${90 / 19.2}vw;
  height: ${33 / 19.2}vw;
  background: #f0c920;
  border-radius: 20px;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  font-size: ${14 / 19.2}vw;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
`;
const FileInputSection = styled.div`
  width: ${680 / 19.2}vw;
  height: ${680 / 19.2}vw;
  margin: ${20 / 19.2}vw 0;
  border: 1px dashed #9c9c9c;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: ${20 / 19.2}vw;
  color: #9c9c9c;
  gap: 5px;
`;
const FileInputImg = styled.img`
  width: ${37 / 19.2}vw;
  height: ${37 / 19.2}vw;
`;
const AddFile = styled.div`
  width: ${107 / 19.2}vw;
  height: ${107 / 19.2}vw;
  border: 1px dashed #9c9c9c;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Divider = styled.div`
  opacity: 0.8;
  border: 0.5px solid #9c9c9c;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  margin: 10px 0;
`;
const Write = styled.textarea`
  width:${680 / 19.2}vw;
  height:${130 / 19.2}vw;
  border: none;
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: ${14 / 19.2}vw
    color: #9c9c9c;
  }
`;
