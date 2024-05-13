import React, { useState, useRef } from "react";
import { useEffect } from "react";
import HeaderComponent from "../Header/Header";
import NavigationCategoryMenu from "../NavigationMenu/NavigationCategoryMenu";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import styled from "styled-components";
import { Link } from "react-router-dom";
import pencil from "../../img/pencil.png";
import laptop from "../../img/laptop.png";
import mic from "../../img/mic.png";
import food from "../../img/food.png";
import idea from "../../img/idea.png";
import shirt from "../../img/shirt.png";
import SelectOptionComponent from "./SelectOptionComponent";
import axios from "axios";
import ProductCardComponent from "../Global/ProductComponent";
import FixedButtons from "../Global/FixedButtons";

const NavWrapContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* 위쪽 여백 추가 */
`;
const CategoryMenuContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: rgba(156, 156, 156, 0.1); /* #9C9C9C의 색상과 투명도 5% */
`;
const CategoryItemWrapContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CategoryItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 56px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const CircleContainer = styled.div`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  background-color: #f0c920;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const CircleImage = styled.img`
  width: 100px;
  height: 100px;
`;

function CategoryPage() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/item/main?type=popular&page=1") //ENDPOINT작성
      .then((response) => {
        console.log(response.data["result"]);
        setProductList(response.data["result"]["itemList"]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
      </NavWrapContainer>
      <CategoryMenuContainer>
        <CategoryItemWrapContainer>
          <StyledLink>
            <CategoryItemContainer>
              <CircleContainer>
                <CircleImage src={idea} alt="Idea" />
              </CircleContainer>
              <p>창작</p>
            </CategoryItemContainer>
          </StyledLink>
          <StyledLink>
            <CategoryItemContainer>
              <CircleContainer>
                <CircleImage src={mic} alt="Mic" />
              </CircleContainer>
              <p>아이돌</p>
            </CategoryItemContainer>
          </StyledLink>
          <StyledLink>
            <CategoryItemContainer>
              <CircleContainer>
                <CircleImage src={laptop} alt="Laptop" />
              </CircleContainer>
              <p>애니</p>
            </CategoryItemContainer>
          </StyledLink>
          <StyledLink>
            <CategoryItemContainer>
              <CircleContainer>
                <CircleImage src={pencil} alt="Pencil" />
              </CircleContainer>
              <p>문구</p>
            </CategoryItemContainer>
          </StyledLink>
          <StyledLink>
            <CategoryItemContainer>
              <CircleContainer>
                <CircleImage src={food} alt="Food" />
              </CircleContainer>
              <p>식품</p>
            </CategoryItemContainer>
          </StyledLink>
          <StyledLink>
            <CategoryItemContainer>
              <CircleContainer>
                <CircleImage src={shirt} alt="Shirt" />
              </CircleContainer>
              <p>패션</p>
            </CategoryItemContainer>
          </StyledLink>
        </CategoryItemWrapContainer>
      </CategoryMenuContainer>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ width: "66%", display: "flex", flexDirection: "column" }}>
          <h1>창작 전체</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            999개의 판매상품
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
          {productList.map((product, index) => (
            <StyledLink to={`/product/${product.itemId}`} key={product.itemId}>
              <ProductCardComponent product={product} />
            </StyledLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryPage;