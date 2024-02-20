import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ProductCardComponent from "../Components/Global/ProductComponent";
import SelectOptionComponent from "../Components/Category/SelectOptionComponent";
import { Link } from "react-router-dom";
import HeaderComponent from "../Components/Header/Header";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import InfiniteScroll from 'react-infinite-scroll-component';
import FixedButtons from "../Components/Global/FixedButtons";
import {useLocation} from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const NavWrapContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* 위쪽 여백 추가 */
`;

function MorePage() {
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const [count, setCount] = useState(0);
  const searchParams = new URLSearchParams(location.search);
  const [tag, setTag] = useState(searchParams.get("tag"));
  const [sortBy, setSortBy] = useState("인기순"); // 기본 정렬 순서 설정
  const titleList = {
    new: "오늘의 추천상품",
    similar: "방금 전 본 상품과 비슷한 상품",
    popular: "가장 많이 판매된 상품은 어때요?",
    steady: "구매자들에게 꾸준히 사랑받는 상품",
    last: "라스트 찬스!",
    recommend: "아직도 고민이라면 이런 상품은 어때요?",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = "";
        const tagToApiURL = {
          new: "/api/item/today?page=",
          similar: "",
          popular: "/api/item/topsale?page=",
          steady: "/api/item/steady?page=",
          last: "/api/item/main?type=last&page=",
          recommend: "/api/item/main?type=popular&page=",
        };

        if (tag in tagToApiURL) {
          apiUrl = `${tagToApiURL[tag]}${page}&sortBy=${sortBy}`;
        } else {
          console.error("Invalid tag:", tag);
          return;
        }

        const response = await axios.get(apiUrl);
        setSearchResult(prevResult => [...prevResult, ...response.data.result.itemList]);
        setCount(response.data['result']['totalElements']);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [tag, page, sortBy]); // sortBy 상태 변경 시에도 다시 불러오도록 설정

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  const handleSortChange = (option) => {
    setSortBy(option);
    setSearchResult([]); // 정렬 순서가 변경되면 검색 결과를 초기화하고 다시 불러옴
    setPage(1);
  };

  return (
    <>
      <FixedButtons />
      <HeaderComponent />
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
        <div
          style={{
            borderBottom: "1px solid #9C9C9C",
            width: "100%",
            height: "3px",
          }}
        ></div>
      </NavWrapContainer>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <>
          <div
            style={{ width: "66%", display: "flex", flexDirection: "column" }}
          >
            <h1>{titleList[tag]}</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {`${count}개의 판매상품`}
              <SelectOptionComponent handleSortChange={handleSortChange} />
            </div>
          </div>
          <div style={{ width: "66%" }}>
            <InfiniteScroll
              dataLength={searchResult.length}
              next={fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              endMessage={<p>No more items</p>}
            >
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", justifyContent: "center" }}>
                {searchResult.map((product, index) => (
                  <StyledLink to={`/product/${product.itemId}`} key={product.itemId}>
                    <ProductCardComponent product={product} />
                  </StyledLink>
                ))}
              </div>
            </InfiniteScroll>
          </div>
        </>
      </div>
    </>
  );
}

export default MorePage;
