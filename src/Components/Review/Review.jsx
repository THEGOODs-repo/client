import React from 'react';
import styled from 'styled-components';
import profile from '../../img/Hamster.png';
import product1Img from '../../img/productimg.png';
import user1 from '../../img/user.jpeg';
import makaroong from '../../img/reviewImg1.jpeg';
import coupleproducts from '../../img/coupleproducts.png';
import soodal from '../../img/soodal.jpeg';
import cake from '../../img/burger.jpeg';

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
    width : 50%;

`


function ReviewComponent( ) {
    return (
        <ReviewWrapContainer>
                    <ReviewCountContainer>
                <ReviewCount>후기(9,999)</ReviewCount>
            </ReviewCountContainer>            
                <ReviewContainer key="1">
                    <ProfileSection>
                        <ProfileImage src={user1} alt="프로필 이미지" />
                        <ProfileInfo>
                            <div>파마니버니즈</div>
                            <div>2024년 2월 12일</div>
                        </ProfileInfo>
                    </ProfileSection>
                    <ReviewContent>
                        <ReviewImage src={coupleproducts} alt="리뷰 이미지" />
                        <p>일단 배송도 하루만에 오고 포카 크기에 딱 맞는게 너무너무 좋아여! 포카 홀더는 앞으로 여기서 구매할거 같아요 ㅠ 생각보다 기스도 없고 너무너무 마음에 들어요 그리고 제가 버니즈라 5개 샀는데여 5장 다 실피하면 어떠지ㅠ 라는 생각이지만 일단 싸서 샀거든요? 근데 받아보니 퀄리티도 완전 굿굿..! 가성비도 너무 좋고ㅠ 님들 꼭 사세여</p>
                    </ReviewContent>
                </ReviewContainer>
                <ReviewContainer key="2">
            <ProfileSection>
                <ProfileImage src={makaroong} alt="프로필 이미지" />
                <ProfileInfo>
                    <div>마카룽조아</div>
                    <div>2024년 1월 31일</div>
                </ProfileInfo>
            </ProfileSection>
            <ReviewContent>
                <ReviewImage src={cake} alt="리뷰 이미지" />
            </ReviewContent>
        </ReviewContainer>
        <ReviewContainer key="3">
            <ProfileSection>
                <ProfileImage src={soodal} alt="프로필 이미지" />
                <ProfileInfo>
                    <div>카피바라</div>
                    <div>2023년 11월 7일</div>
                </ProfileInfo>
            </ProfileSection>
            <ReviewContent>
                <p>배송도 빠르고 마음에 들어요. 감사합니다.</p>
            </ReviewContent>
        </ReviewContainer>
        </ReviewWrapContainer>
    );
}

export default ReviewComponent;