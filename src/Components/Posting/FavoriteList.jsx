import React from "react";
import styled from "styled-components";
import profileImage from "../../img/sampleimg.png";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
  max-height: 40vw;
  overflow-y: auto;
`;

const Title = styled.p`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 2vw;
  line-height: 1vw;
  color: #202123;
`;

const AuthorList = styled.div`
  margin-top: 4.5vw;
`;

const AuthorBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ccc;
  border-radius: 5px;
  height: 5vh;
  font-weight: 700;
  font-family: "Noto Sans";
  font-style: normal;
  font-size: 1.5vw;
  color: #202123;
  margin-top: 10px;
`;

const AuthorImage = styled.img`
  width: 3vw;
  height: 3vw;
  margin-right: 10px;
  border-radius: 50%;
`;

const FavoriteList = ({ isOpen, closeModal }) => {
  const favoriteAuthors = [
    { id: 1, name: "작가 1", profileImage: profileImage },
    { id: 2, name: "작가 2", profileImage: profileImage },
    { id: 3, name: "작가 3", profileImage: profileImage },
    // 나머지 작가들 추가
  ];

  const handleCloseModal = () => {
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <Modal onClick={handleCloseModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Title>즐겨찾기</Title>
        <AuthorList>
          {favoriteAuthors.map((author) => (
            <AuthorBox key={author.id}>
              <AuthorImage src={author.profileImage} alt={author.name} />
              <span>{author.name}</span>
            </AuthorBox>
          ))}
        </AuthorList>
      </ModalContent>
    </Modal>
  );
};

export default FavoriteList;
