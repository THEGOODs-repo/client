import React, { useEffect, useState } from 'react';
import PostBanner from '../Components/Posting/PostBanner';
import PostList from '../Components/Posting/PostList'
import FixedButtons from '../Components/Global/FixedButtons';
import NavigationCategoryMenu from '../Components/NavigationMenu/NavigationCategoryMenu';
import NavigationMenu from '../Components/NavigationMenu/NavigationMenu';
import HeaderComponent from '../Components/Header/Header';
import styled from 'styled-components';


const NavWrapContainer = styled.div`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px; /* 위쪽 여백 추가 */
`;
const Post = () =>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
              // 가상의 API 호출
              const response = await fetch('/api/posts');
              const data = await response.json();
              setPosts(data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
        }, []);
      
        
    return(
      <>
        <div>
        <PostBanner/>
        <PostList posts={posts}/>
        </div>
        <FixedButtons/>

        </>
    );
};
export default Post;