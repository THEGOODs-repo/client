import React from "react";
import styled from "styled-components";
import Post from "./PostContent";
import NewjeansProfile from "../../img/IMG_7787.PNG";
import NewjeansImage from "../../img/IMG_7792.PNG";
import IUProfile from "../../img/IMG_7790.PNG";
import IUImage from "../../img/IMG_7791.PNG";

const PostBox = styled.div`
  width : 100%;
  margin-top: -3vh;
  margin-left: ${590 / 19.2}vw;
`;

const PostList = () => {
  // 포스트에 대한 가상의 데이터
  const posts = [
    {
      userProfile: NewjeansProfile,
      userName: "뉴진스",
      postDate: "1일",
      content:
        "NewJeans ID Card 판매 조사합니다. 구매 의향이 있으시면 좋아요 눌러주세요!!",
      imageUrl: NewjeansImage,
      likeCount: 102,
      commentCount: 0,
    },
    {
      userProfile: IUProfile,
      userName: "아이유애나",
      postDate: "2일",
      content: "아이유 도무송 스티커 판매 시작되었습니다!",
      imageUrl: IUImage,
      likeCount: 40,
      commentCount: 27,
    },
    {
      userProfile: NewjeansProfile,
      userName: "뉴진스",
      postDate: "1일",
      content:
        "NewJeans ID Card 판매 조사합니다. 구매 의향이 있으시면 좋아요 눌러주세요!!",
      imageUrl: NewjeansImage,
      likeCount: 102,
      commentCount: 0,
    },
    {
      userProfile: NewjeansProfile,
      userName: "뉴진스",
      postDate: "1일",
      content:
        "NewJeans ID Card 판매 조사합니다. 구매 의향이 있으시면 좋아요 눌러주세요!!",
      imageUrl: NewjeansImage,
      likeCount: 102,
      commentCount: 0,
    },
    
    // 다른 포스트들...
  ];

  return (
    <PostBox>
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </PostBox>
  );
};

export default PostList;
