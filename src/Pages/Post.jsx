import React, { useEffect, useState } from 'react';
import PostBanner from '../Components/Posting/PostBanner';
import PostList from '../Components/Posting/PostList'
import FixedButtons from '../Components/Global/FixedButtons';

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
        <div>
        <PostBanner/>
        <PostList posts={posts}/>
        <FixedButtons/>
        </div>
    );
};
export default Post;