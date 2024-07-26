import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LeftArrow from "../../img/LeftArrow.png";
import RightArrow from "../../img/RightArrow.png";
import Banner from "../../img/banner.svg";
import NavigationCategoryMenu from "../NavigationMenu/NavigationCategoryMenu";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import ProductCardComponent from "../Global/ProductComponent";
import { useEffect } from "react";
import HeaderComponent from "../Header/Header";
import CustomHorizontalLine from "./HorizontalLineComponent";
import ArrowCircleRight from "../../img/arrow-circle-right.png";
import BaseFooter from "../Footer/BaseFooter";
import axios from "axios";
import mainBannerURL from "../../img/mainbanner.png";
import likeBannerURL from "../../img/likepost.png";
import { setOrderItems, emptyOrderItems } from "../../redux/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import FixedButtons from "../Global/FixedButtons";
import MainPost from './MainPost';

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
const PageContainer = styled.div`
  width: 100%;
  min-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(
    5,
    minmax(0, 1fr)
  ); /* 한 줄에 5개의 열을 생성합니다. */
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  padding: 20px; /* 여백 추가 */
  width: 88%;
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
const MainWrapContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const SubInfoContainer = styled.div`
  margin-top: 50px;
  padding-top: 50px;
  width: 87%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MoreContainer = styled(Link)`
  display: flex;
  align-items: center;
  width: 5vw;
  margin-left: 100px;
  text-decoration: none;
  color: black;
`;
const TotalContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SubInfoWrapContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostContainer = styled.div`
        
    width : 100%;
    margin-top : 50px;
    height : 859px;
    background-color : #ffeab8;
    
`
const PostInnerContainer = styled.div`
  display : flex;
  flex-direction : column;


`



function    MainPageComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productLists, setProductLists] = useState(Array(6).fill([]));
  const navigate = useNavigate();
  const bannerRef = useRef(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 가상의 API 호출
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleMoveLikePage = () => {
    navigate("/");
  };
  const handleMainPage = () => {
    navigate("/");
  };

  const handlePrevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(2);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentIndex === 2) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          axios.get("/api/item/main?type=popular&page=1"),
          // axios.get('/api/similar/item?page=1'), /?이거 왜 안됨
          axios.get("/api/item/main?type=popular&page=1"),
          axios.get("/api/item/main?type=new&page=1"),
        ]);

        const dataLists = responses.map(
          (response) => response.data.result.itemList,
        );
        setProductLists(dataLists);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    bannerRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);

  const subInfoTitles = [
    "추천 상품",
    "인기 상품",
    "신상품",
  ];
  const navigateURL = [
    "/product?tag=recommend",
    "/product?tag=popular",
    "/product?tag=new",
  ];

  return (
    <>
      <FixedButtons></FixedButtons>
      <NavWrapContainer>
        <NavigationMenu />
        <div
          style={{
            borderBottom: "1px solid #9C9C9C",
            width: "100%",
            height: "3px",
          }}
        ></div>
        <NavigationCategoryMenu />
      </NavWrapContainer>
      <PageContainer>
        <BannerWrapContainer>
          <BannerContainer ref={bannerRef}>
            <BannerItemContainer>
              <BannerImg
                src={likeBannerURL}
                alt="메인베너"
                onClick={handleMoveLikePage}
              />
            </BannerItemContainer>
            <BannerItemContainer>
              <BannerImg
                src={mainBannerURL}
                alt="선호도조사 베너"
                onClick={handleMainPage}
              />
            </BannerItemContainer>
            <BannerItemContainer>
              <BannerImg src={mainBannerURL} alt="Banner 3" />
            </BannerItemContainer>
          </BannerContainer>
          <ArrowContainer style={{ left: 35 }} onClick={handlePrevSlide}>
            <LeftArrowImg
              src={LeftArrow}
              alt="Left Arrow"
              width="50px"
              height="50px"
            />
          </ArrowContainer>
          <ArrowContainer style={{ right: 35 }} onClick={handleNextSlide}>
            <RightArrowImg
              src={RightArrow}
              alt="Right Arrow"
              width="50px"
              height="50px"
            />
          </ArrowContainer>
        </BannerWrapContainer>
        <MainWrapContent>
          {subInfoTitles.map((title, index) => (
            <TotalContainer key={index}>
              <SubInfoWrapContainer>
                <SubInfoContainer>
                  <h2>{title}</h2>
                  <MoreContainer to={navigateURL[index]}>
                    <p>더보기</p>
                    <img
                      src={ArrowCircleRight}
                      alt=""
                      width="30px"
                      height="30px"
                    />
                  </MoreContainer>
                </SubInfoContainer>
                <CustomHorizontalLine />
              </SubInfoWrapContainer>
              <MainContent>
                {productLists[index].map((product) => (
                  <StyledLink
                    to={`/product/${product.itemId}`}
                    key={product.itemId}
                  >
                    <ProductCardComponent product={product} />
                  </StyledLink>
                ))}
              </MainContent>
            </TotalContainer>
          ))}
          <TotalContainer>
          <SubInfoWrapContainer>

              <SubInfoContainer >

                  <h2>인기 포스트</h2>
                  <MoreContainer to={"/posting"}>
                    <p>더보기</p>
                    <img
                      src={ArrowCircleRight}
                      alt=""
                      width="30px"
                      height="30px"
                    />
                  </MoreContainer>
                </SubInfoContainer>
               </SubInfoWrapContainer> 
               <MainPost post={posts}></MainPost> 
               </TotalContainer>
        </MainWrapContent>
        </PageContainer>
      <BaseFooter />
    </>
  );
}

export default MainPageComponent;
