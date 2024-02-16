import React from 'react';
import styled from 'styled-components';
import profile from '../../img/Hamster.png';
import product1Img from '../../img/productimg.png';


const ReviewContainer = styled.div`
    border-bottom: 1px solid #ccc; /* 아래쪽에만 경계선 표시 */
    border-left: none;
    border-right: none;
    border-top: none;
    border-radius: 0px 0px 8px 8px; /* 아래쪽만 둥글게 처리 */
    padding: 16px;
`;


const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`;

const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 8px;
`;

const ProfileInfo = styled.div`
    font-weight: bold;
`;

const ReviewContent = styled.div`
    display: flex;
    align-items: center;
`;

const ReviewImage = styled.img`
    width: 200px;
    height: 200px;
    margin-right: 12px;
`;

const ReviewCountContainer = styled.div`
    
    padding: 16px;
`;

const ReviewCount = styled.h1`
    margin-bottom: 20px;
`;
const ReviewWrapContainer = styled.div`

`


function ReviewComponent({ reviews }) {
    return (
        <ReviewWrapContainer>
                    <ReviewCountContainer>
                <ReviewCount>후기(9,999)</ReviewCount>
            </ReviewCountContainer>
            {reviews.map((review, index) => (
            
                <ReviewContainer key={index}>
            
                    <ProfileSection>
                        <ProfileImage src={review.profile} alt="프로필 이미지" />
                        <ProfileInfo>
                            <div>{review.name}</div>
                            <div>{review.date}</div>
                        </ProfileInfo>
                    </ProfileSection>
                    <ReviewContent>
                        <ReviewImage src={review.reviewImage} alt="리뷰 이미지" />
                        <p>{review.content}</p>
                    </ReviewContent>
                </ReviewContainer>
            ))}
        </ReviewWrapContainer>
    );
}

export default ReviewComponent;