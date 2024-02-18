import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LeftArrow from '../../img/LeftArrow.png';
import RightArrow from '../../img/RightArrow.png';
import Banner from '../../img/banner.svg';
import NavigationCategoryMenu from '../NavigationMenu/NavigationCategoryMenu';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import ProductCardComponent from '../Global/ProductComponent';
import { useEffect } from 'react';
import HeaderComponent from '../Header/Header';
import CustomHorizontalLine from './HorizontalLineComponent';
import ArrowCircleRight from '../../img/arrow-circle-right.png';
import BaseFooter from '../Footer/BaseFooter';
import axios from 'axios';


const StyledLink = styled(Link)`
   color : black;
   text-decoration: none; 
`
const PageContainer = styled.div`
    width: 100%;
    min-width: 1200px;
    margin: 0 auto;
    position: relative;
`;

const MainContent = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr)); /* 한 줄에 5개의 열을 생성합니다. */
    grid-gap: 20px;
    justify-items: center;
    align-items: center;
    padding: 20px; /* 여백 추가 */
    width : 88%;
`;

const NavWrapContainer = styled.div`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px; /* 위쪽 여백 추가 */
`;

const BannerWrapContainer = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;
`;

const BannerContainer = styled.div`
    display: flex;
    transition: transform 0.5s ease;
    position: relative;
`;

const BannerItemContainer = styled.div`
    flex: 0 0 100%;
`;

const BannerImg = styled.img`
    width: 100%;
    height: 100%;
`;

const ArrowContainer = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const LeftArrowImg = styled.img`
    position: absolute;
    left: 0;
`;

const RightArrowImg = styled.img`
    position: absolute;
    right: 0;
`;
const MainWrapContent =styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    width : 100%;
`
const SubInfoContainer = styled.div`
    margin-top : 50px;
    padding-top : 50px;
    width : 87%;
    display : flex;
    justify-content : space-between;
    align-items: center;
`
const MoreContainer = styled.div`
    display : flex;
    align-items : center;
    width : 5vw;
    margin-left : 100px;

`
const TotalContainer = styled.div`
    width : 75%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
`
const SubInfoWrapContainer = styled.div`

    width : 100%;
    display :flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`


// const products = [
//     { title: "상품 제목", endDate: "2024-12-31", seller: "판매자 이름", views: 1000 },
//     { title: "상품 제목", endDate: "2024-12-31", seller: "판매자 이름", views: 1000 },
//     { title: "상품 제목", endDate: "2024-12-31", seller: "판매자 이름", views: 1000 },
//     { title: "상품 제목", endDate: "2024-12-31", seller: "판매자 이름", views: 1000 },
//     { title: "상품 제목", endDate: "2024-12-31", seller: "판매자 이름", views: 1000 },
//     { title: "상품 제목", endDate: "2024-12-31", seller: "판매자 이름", views: 1000 },
//     { title: "상품 제목", endDate: "2024-12-31", seller: "판매자 이름", views: 1000 },
//     { title: "상품 제목", endDate: "2024-12-31", seller: "판매자 이름", views: 1000 },
//     { title: "상품 제목", endDate: "2024-12-31", seller: "판매자 이름", views: 1000 },
//     { title: "상품 제목", endDate: "2024-12-31", seller: "판매자 이름", views: 1000 }
// ];

function MainPageComponent() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [productList,setProductList] = useState([]);

    const bannerRef = useRef(null);

    const handlePrevSlide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(2);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('https://dev.the-goods.store/api/item/main?type=new&page=1', {
    //                 headers: {
    //                     'accept': '*/*'
    //                 }
    //             });
    //             const data = response.data.result.itemList;
    //             setProducts(data); // 상품 데이터를 상태에 저장
    //             console.log(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    
    //     fetchData();
    // }, []);

    
    const handleNextSlide = () => {
        if (currentIndex === 2) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };
    useEffect(() => {
        axios.get('/api/item/main?type=popular&page=1') //ENDPOINT작성
            .then(response => {
                console.log(response.data['result']);
                setProductList(response.data['result']['itemList'])
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        bannerRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, [currentIndex]);
    const subInfoTitles = [
        '오늘의 추천상품',
        '방금 전 본 상품과 비슷한 상품',
        '이번주 가장 많이 조회된 상품',
        '구매자들에게 꾸준히 사랑받는 상품',
        '내 또래 급상승 인기 키워드',
        '신규 사장님의 첫 상품'
    ];

    return (
        <>
            <HeaderComponent />
            <NavWrapContainer>
                <NavigationMenu />
                <div style={{ borderBottom: '1px solid #9C9C9C', width:'100%',height:'3px' }}></div>
                <NavigationCategoryMenu />
            </NavWrapContainer>
            <PageContainer>
                <BannerWrapContainer>
                    <BannerContainer ref={bannerRef}>
                        <BannerItemContainer>
                            <BannerImg src={Banner} alt="Banner 1" />
                        </BannerItemContainer>
                        <BannerItemContainer>
                            <BannerImg src={Banner} alt="Banner 2" />
                        </BannerItemContainer>
                        <BannerItemContainer>
                            <BannerImg src={Banner} alt="Banner 3" />
                        </BannerItemContainer>
                    </BannerContainer>
                    <ArrowContainer style={{ left: 35 }} onClick={handlePrevSlide}>
                    <LeftArrowImg src={LeftArrow} alt="Left Arrow" width="50px" height="50px" />
                </ArrowContainer>
                <ArrowContainer style={{ right: 35 }} onClick={handleNextSlide}>
                    <RightArrowImg src={RightArrow} alt="Right Arrow" width="50px" height="50px" />
                </ArrowContainer>
                </BannerWrapContainer>
                <MainWrapContent>
            {subInfoTitles.map((title, index) => (
                <TotalContainer key={index}>
                    <SubInfoWrapContainer>
                        <SubInfoContainer>
                            <h2>{title}</h2>
                            <MoreContainer>
                                <p>더보기</p>
                                <img src={ArrowCircleRight} alt="" width="30px" height="30px"/>
                            </MoreContainer>
                        </SubInfoContainer>
                        <CustomHorizontalLine />
                    </SubInfoWrapContainer>
                    <MainContent>
                        {productList.map((product) => (
                            <StyledLink to={`/product/${product.itemId}`} key={product.itemId}>
                                <ProductCardComponent product={product} />
                            </StyledLink>
                        ))}
                    </MainContent>
                </TotalContainer>
            ))}
        </MainWrapContent>
            </PageContainer>
        <BaseFooter/>
        </>
    );
}

export default MainPageComponent;
