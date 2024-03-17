import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import ProductCardComponent from "../Global/ProductComponent";
import axios from "axios";

const LikePageWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  width: ${1170 / 19.2}vw;
  padding: 0;
  border: ${1 / 19.2}vw solid rgba(156, 156, 156, 0.5);
  flex-shrink: 2;
  font-family: "Noto Sans KR";
  box-sizing: border-box;
  height: ${814 / 19.2}vw;
  margin: ${30 / 19.2}vw 0;
  background: rgba(254, 253, 253);
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(243 / 1170) * 100}%;
  font-size: ${18 / 19.2}vw;

  h1 {
    padding: ${21 / 19.2}vw ${30 / 19.2}vw;
    margin: 0;
    font-size: ${24 / 19.2}vw;
  }

  h2 {
    padding: ${19 / 19.2}vw 0 ${11 / 19.2}vw ${30 / 19.2}vw;
    margin: 0;
    font-size: ${19 / 19.2}vw;
  }

  div {
    padding: 0 0 ${10 / 19.2}vw ${30 / 19.2}vw;
  }

  border-right: ${1 / 19.2}vw solid rgba(156, 156, 156, 0.5);

  height: ${814 / 19.2}vw;
`;

const HorizonBar = styled.hr`
  width: 100%;
  height: ${2.5 / 19.2}vw;
  background: #fbd000;
  margin: 0;
  padding: 0;
  border: 0;
`;

const LikeDetail = styled.div`
  width: ${(1 - 243 / 1170) * 100}%;
  display: flex;
  flex-directon: row;
  flex-wrap: wrap;
  overflow-y: auto;

  h1 {
    width: 100%;
    padding: ${25 / 19.2}vw 0 ${12 / 19.2}vw ${10 / 19.2}vw;
    margin: 0;
    font-size: ${20 / 19.2}vw;
  }

  padding: 0 ${15 / 19.2}vw;
  height: ${814 / 19.2}vw;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const LikePage = () => {
  const [productLists, setProductLists] = useState(Array(6).fill([]));
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          axios.get("/api/item/today?page=1"),
          axios.get("/api/item/today?page=1"),
          // axios.get('/api/similar/item?page=1'), /?이거 왜 안됨
          axios.get("/api/item/topsale?page=1"),
          axios.get("/api/item/steady?page=1"),
          axios.get("/api/item/main?type=last&page=1"),
          axios.get("/api/item/main?type=popular&page=1"),
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

  return (
    <LikePageWrapper>
      <Menu>
        <h1>찜한 상품</h1>
        <HorizonBar />
        <h2>카테고리</h2>
        <div>창작</div>
        <div>아이돌</div>
        <div>애니</div>
        <div>문구</div>
        <div>식품</div>
        <div>패션</div>
        <h2>태그</h2>
        <div>키링</div>
        <div>NCT</div>
        <div>뉴진스</div>
        <div>텀블러</div>
        <div>펜</div>
      </Menu>
      <LikeDetail>
        <h1>전체</h1>
        {productLists[0].map((product) => (
          <StyledLink to={`/product/${product.itemId}`} key={product.itemId}>
            <ProductCardComponent
              style={
                ({ width: `${200 / 19.2}vw` },
                {
                  height: `${280 / 19.2}vw`,
                })
              }
              product={product}
            />
          </StyledLink>
        ))}
      </LikeDetail>
    </LikePageWrapper>
  );
};

export default LikePage;
