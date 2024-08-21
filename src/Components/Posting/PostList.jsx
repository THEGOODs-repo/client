import React from "react";
import styled from "styled-components";
import PostContent from "./PostContent";

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

const PostList = ({ posts = [] }) => {
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
