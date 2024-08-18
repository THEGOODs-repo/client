import React, { useState, useEffect } from "react";
import axios from "axios";

const SellerProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    // 서버에서 프로필 데이터를 가져오는 함수
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("/api/seller/profile"); // API 엔드포인트는 실제로 사용하는 엔드포인트로 대체해야 합니다.
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleFollow = () => {
    // 팔로우 버튼을 눌렀을 때의 처리 함수
    setIsFollowing(!isFollowing); // 현재 상태를 토글합니다.
    // 서버로 팔로우 상태를 업데이트하는 요청을 보냅니다.
    // axios.post('/api/seller/follow', { userId: profileData.userId, isFollowing: !isFollowing });
  };

  return (
    <div className="seller-profile">
      {profileData && (
        <div className="profile-info">
          <div className="profile-image">
            <img src={profileData.profileImage} alt="Profile" />
          </div>
          <div className="profile-details">
            <h2>{profileData.name}</h2>
            <p>{profileData.bio}</p>
            <div className="follower-count">
              Followers: {profileData.followers}
            </div>
            <div className="wishlist-count">
              Wishlist: {profileData.wishlist}
            </div>
          </div>
        </div>
      )}
      <div className="follow-button">
        <button onClick={handleFollow}>
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default SellerProfile;
