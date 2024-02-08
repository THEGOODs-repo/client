import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavigationCategoryMenu from '../NavigationMenu/NavigationCategoryMenu';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import HeaderComponent from '../Header/Header';
import product1Img from '../../img/productimg.png'
import simpleRightArrow from '../../img/simpleRightArrow.svg';
import profile from '../../img/Hamster.png';
import viewer from '../../img/viewer.svg';
import heart from '../../img/share.svg';
import share from '../../img/heart.svg';



const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

const ProfileText = styled.p`
    margin-right: 10px; 
    font-family: 'NotoSans', sans-serif;
`;

const ArrowImage = styled.img`
    width: 20px;
    height: 20px;
`;

const ProfileContainer = styled.div`
    display : flex;
    justify-items: center;
    align-items: center;
`

const NavWrapContainer = styled.div`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px; /* 위쪽 여백 추가 */
`;

const SlideContainer = styled.div`
    width :460px;
    display : flex;
    justify-content : center;
    align-items : center;
`
const SlideItemContainer = styled.div`
    width : 45px;
    height : 45px;
    display : flex;
    align-items : center;
    margin-top : 20px;
    margin-right : 15px;
`
const SlideItem = styled.img`
    width : 100%;
    height : 100%;
`
const WrapContainer = styled.div`
    width: 100%;
    min-width: 1200px;
    margin: 0 auto;
    position: relative;
    display : flex;
    justify-content : center;
    align-items : center;
    

`
const SlideMainImageContainer = styled.div`
    width :460px;
    height : 360px;

`
const PruductInfoWrapContainer = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
`
const ProductInnerContainer =styled.div`
    width :469px;
    margin-right : 50px;

`
const ProductSideInfoWrapContainer = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : flex-start;
`
const IconWrapContainer = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
`
const IconContainer = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;
    margin: 0 5px; 

`

const SubInfoContainer = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
    align-items : center;
`
const OptionContainer = styled.div`
    width : 100%;
`
const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px 20px;
    color: ${props => props.color || "black"};
    background-color: ${props => props.background || "#007bff"};
    border: 2px solid ${props => props.border || "transparent"};
    border-radius: 7px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 16px;

    // &:hover {
    //     background-color: ${props => props.hoverBackground || "#0056b3"};
    // }
`;

function ProductPageComponent() {
    return (
        <>
            <HeaderComponent />
            <NavWrapContainer>
                <NavigationMenu />
                <NavigationCategoryMenu />
            </NavWrapContainer>
            <WrapContainer>

            <PruductInfoWrapContainer>
                {/* 상품이미지 */}
                <ProductInnerContainer>
                    <SlideMainImageContainer>
                        <SlideItem src={product1Img} alt="" />
                    </SlideMainImageContainer>
                    <SlideContainer>
                            <SlideItemContainer>
                                <SlideItem src={product1Img} alt="" />
                            </SlideItemContainer>
                                <SlideItemContainer>
                            <SlideItem src={product1Img} alt="" />
                                </SlideItemContainer>
                            <SlideItemContainer>
                                <SlideItem src={product1Img} alt="" />
                            </SlideItemContainer>
                            <SlideItemContainer>
                                <SlideItem src={product1Img} alt="" />
                            </SlideItemContainer>

                    </SlideContainer>
                </ProductInnerContainer>
                {/* 상품 정보 */}
                <ProductInnerContainer>
                    {/* 프로필 */}
                    <ProfileContainer>
                        <ProfileImage src={profile} alt="" />
                        <ProfileText>더 굿즈</ProfileText>
                        <ArrowImage src={simpleRightArrow} alt="" />
                    </ProfileContainer>
                    {/* 상품 이름 및 가격 */}
                    <ProductSideInfoWrapContainer>

                        <div>
                            <p style={{fontFamily: "'NotoSans', sans-serif",fontWeight:'medium',fontSize:'20px'}}>스티커</p>
                        </div>
                        <SubInfoContainer>
                            {/* 가격 */}
                            <div>
                            <p style={{ fontFamily: "'NotoSans', sans-serif", fontWeight: "bold",fontSize : "20px"}}>99999원</p>


                            </div>
                            <IconWrapContainer>
                                {/* 조회수 */}
                                <IconContainer>
                                    <img src={viewer} alt="" width="32px" height="32px" />
                                    <p style={{fontSize :"15px",textAlign:"center"}}>999</p>
                                </IconContainer>                            
                                {/* 하트 */}
                                <IconContainer>
                                <img src={heart} alt="" width="32px" height="32px" />
                                <p style={{fontSize :"15px",textAlign:"center"}}>999</p>
                                </IconContainer>              
                                {/* 공유 */}
                                <IconContainer>
                                <img src={share} alt="" width="32px" height="32px"/>
                                <p style={{fontSize :"15px",textAlign:"center"}}>999</p>
                                </IconContainer>   
                                </IconWrapContainer>
                        </SubInfoContainer>
                    </ProductSideInfoWrapContainer>
                    {/* 옵션 */}
                    <OptionContainer>

                    </OptionContainer>
           {/* 장바구니 버튼 */}
           <ButtonContainer>
                <Button border="black" background="white">장바구니</Button>
            </ButtonContainer>
            {/* 구매하기 버튼 */}
            <ButtonContainer>
                <Button background="yellow" color="white" border="transparent">구매하기</Button>
            </ButtonContainer>
                    {/* 메세지 및 기타 경고문 */}
                    <div>

                    </div>

                </ProductInnerContainer>
            </PruductInfoWrapContainer>
            </WrapContainer>
  
        </>
    );
}

export default ProductPageComponent;
