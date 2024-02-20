import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import categoryIcon from "../../img/menu.png";

import pencil from "../../img/pencil.png";
import laptop from "../../img/laptop.png";
import mic from "../../img/mic.png";
import food from "../../img/food.png";
import idea from "../../img/idea.png";
import shirt from "../../img/shirt.png";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  height: 60px;
  font-family: NotoSans;
  width: 67%;
`;

const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const Label = styled.a`
  font-family: NotoSans;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  cursor: pointer;
  margin-right: 10px;
`;

const CategoryWrapContainer = styled.ul`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: ${(props) => (props.isOpen ? "block" : "none")};
  background-color: #ffffff;
  list-style-type: none;
  padding: 10px;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  width: 100px;
`;

const CategoryItemContainer = styled.li`
  margin: 5px 0;
  text-align: left;
  &:hover {
    background-color: #f0c920;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const StyledA = styled.a`
  text-decoration: none;
  color: black;
`;
const IconImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

function NavigationCategoryMenu() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <NavBar>
      <NavItem>
        <Icon src={categoryIcon} alt="Category" onClick={toggleCategory} />
        <Label onClick={toggleCategory}>카테고리</Label>
        <CategoryWrapContainer isOpen={isCategoryOpen}>
          <CategoryItemContainer>
            <IconImg src={idea} alt="" />
            <StyledA href="/category/create">창작</StyledA>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <IconImg src={mic} alt="" />
            <StyledA href="/category/idol">아이돌</StyledA>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <IconImg src={laptop} alt="" />
            <StyledA href="/category/ani">애니</StyledA>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <IconImg src={pencil} alt="" />
            <StyledA href="/category/mungu">문구</StyledA>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <IconImg src={food} alt="" />
            <StyledA href="/category/food">식품</StyledA>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <IconImg src={shirt} alt="" />
            <StyledA href="/category/fashion">패션</StyledA>
          </CategoryItemContainer>
        </CategoryWrapContainer>
      </NavItem>
      <NavItem>
        <Label href="/newproduct">신상품</Label>
      </NavItem>
      <NavItem>
        <Label href="/popularproduct">인기상품</Label>
      </NavItem>
      <NavItem>
        <Label href="/endingproduct">마감임박</Label>
      </NavItem>
      <NavItem>
        <Label href="/posting">포스트</Label>
      </NavItem>
    </NavBar>
  );
}

export default NavigationCategoryMenu;
