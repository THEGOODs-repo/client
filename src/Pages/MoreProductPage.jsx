import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios"; // axios 라이브러리 import
import ProductCardComponent from "../Components/Global/ProductComponent";
import SelectOptionComponent from "../Components/Category/SelectOptionComponent";
import { Link } from "react-router-dom";
import HeaderComponent from "../Components/Header/Header";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";

import { useLocation } from "react-router-dom";
import FixedButtons from "../Components/Global/FixedButtons";
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
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [apiURL, setApiURL] = useState("");
  const tag = searchParams.get("tag");
  const titleList = {
    new: "오늘의 추천상품",
    similar: "방금 전 본 상품과 비슷한 상품",
    popular: "가장 많이 판매된 상품은 어때요?",
    steady: "구매자들에게 꾸준히 사랑받는 상품",
    last: "라스트 찬스!",
    recommend: "아직도 고민이라면 이런 상품은 어때요?",
  };
  const tagToApiURL = {
    new: "/api/item/today?page=1",
    similar: "", // Your API URL for similar tag
    popular: "/api/item/topsale?page=1",
    steady: "/api/item/steady?page=1",
    last: "/api/item/main?type=last&page=1",
    recommend: "/api/item/main?type=popular&page=1",
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = "";

        if (tag in tagToApiURL) {
          apiUrl = tagToApiURL[tag];
        } else {
          console.error("Invalid tag:", tag);
          return;
        }

        const response = await axios.get(apiUrl);
        setSearchResult(response.data["result"]["itemList"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [tag]);

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
              {`${searchResult.length}개의 판매상품`}
              <SelectOptionComponent />
            </div>
          </div>
          <div
            style={{
              width: "66%",
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              justifyContent: "center",
            }}
          >
            {searchResult.map((product, index) => (
              <StyledLink
                to={`/product/${product.itemId}`}
                key={product.itemId}
              >
                <ProductCardComponent product={product} />
              </StyledLink>
            ))}
          </div>
        </>
      </div>
    </>
  );
}

export default MorePage;
