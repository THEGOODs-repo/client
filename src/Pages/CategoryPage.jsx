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

function CategorySearchPage(props) {
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [tag, setTag] = useState(props.tag);
  const [sortBy, setSortBy] = useState("인기순"); // 기본 정렬 순서 설정
  const [count,setCount] = useState(0);
  const titleList = {
    create: "창작",
    idol: "아이돌",
    mungu: "문구",
    ani: "애니",
    food: "식품",
    fashion: "패션",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = "";
        const tagToApiURL = {
            create: "/api/search/item?page=1&category=창작&type=new",
            idol: "/api/search/item?page=1&category=아이돌&type=new",
            mungu: "/api/search/item?page=1&category=문구&type=new",
            ani: "/api/search/item?page=1&category=애니&type=new",
            food: "/api/search/item?page=1&category=식품&type=new",
            fashion: "/api/search/item?page=1&category=패션&type=new",
        };

        if (tag in tagToApiURL) {
          apiUrl = `${tagToApiURL[tag]}`;
        } else {
          console.error("Invalid tag:", tag);
          return;
        }

        const response = await axios.get(apiUrl);
        setSearchResult(prevResult => [...prevResult, ...response.data.result.itemList]);
        setCount(response['data']['result']['totalElements']);
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

export default CategorySearchPage;