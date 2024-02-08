// PostList.js

import React from 'react';
import Post from './PostContent';
import profileImage from '../../img/sampleimg.png';

const PostList = () => {
  // 포스트에 대한 가상의 데이터
  const posts = [
    {
      userProfile: profileImage,
      userName: 'John Doe',
      postDate: '2일',
      content: 'NewJeans ID Card 판매 조사합니다.아아ㅏ아아아ㅏ NewJeans ID Card 판매 조사합니다. NewJeans ID Card 판매 조사합니다. NewJeans ID Card 판매 조사합니다. NewJeans ID Card 판매 조사합니다.',
      imageUrl: profileImage,
      likeCount: 20,
      commentCount: 5,
    },
    {
      userProfile: profileImage,
      userName: 'John Doe',
      postDate: '2일',
      content: 'NewJeans ID Card 판매 조사합니다. NewJeans ID Card 판매 조사합니다. NewJeans ID Card 판매 조사합니다. NewJeans ID Card 판매 조사합니다. NewJeans ID Card 판매 조사합니다.',
      
      likeCount: 100,
      commentCount: 27,
      },
    // 다른 포스트들...
  ];

  const postBoxStyle = {
    width:'44vw',
    marginTop:'11vh',
    marginLeft: '28vw',
  };

  return (
    <div className="post-list"style={postBoxStyle}>
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default PostList;
