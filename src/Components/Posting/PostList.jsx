import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostContent from "./PostContent";
import NewjeansProfile from "../../img/IMG_7787.PNG";
import NewjeansImage from "../../img/IMG_7792.PNG";
import IUProfile from "../../img/IMG_7790.PNG";
import IUImage from "../../img/IMG_7791.PNG";
import { useSelector } from "react-redux";
import axios from "axios";

const PostBox = styled.div`
  width: ${1150 / 19.2}vw;
  margin: 0 auto;
  column-count: 2; // 2열로 배치
  column-gap: 10px; // 열 사이의 간격
`;

const PostItem = styled.div`
  break-inside: avoid; // 아이템이 열 사이에서 분리되지 않도록 함
  margin-bottom: 10px; // 아이템 사이의 간격
  box-sizing: border-box; // 패딩과 보더를 포함하여 크기를 계산
  width: 100%;
`;
//{ posts = [] } 추가하기 api 완성되면!
const PostList = () => {
  const posts = [
    {
      id: 1,
      userProfile: NewjeansProfile,
      nickname: "뉴진스",
      postDate: "1일",
      content:
        "NewJeans ID Card 판매 조사합니다. 구매 의향이 있으시면 좋아요 눌러주세요!!",
      images: NewjeansImage,
      likeCount: 102,
      commentCount: 0,
    },
    {
      id: 2,
      userProfile: IUProfile,
      nickname: "아이유애나",
      postDate: "2일",
      content: "아이유 도무송 스티커 판매 시작되었습니다!",
      images: IUImage,
      likeCount: 40,
      commentCount: 27,
    },
    {
      id: 3,
      userProfile: IUProfile,
      nickname: "아이유애나",
      postDate: "2일",
      content: "아이유 도무송 스티커 판매 시작되었습니다!3",
      images: null,
      likeCount: 40,
      commentCount: 27,
    },
    {
      id: 4,
      userProfile: IUProfile,
      nickname: "아이유애나",
      postDate: "2일",
      content: "아이유 도무송 스티커 판매 시작되었습니다!4",
      images: IUImage,
      likeCount: 40,
      commentCount: 27,
    },
    // 다른 포스트들...
  ];
  return (
    <PostBox>
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostItem key={post.id}>
            <PostContent post={post} />
          </PostItem>
        ))
      ) : (
        <div>포스트가 없습니다.</div>
      )}
    </PostBox>
  );
};

export default PostList;
