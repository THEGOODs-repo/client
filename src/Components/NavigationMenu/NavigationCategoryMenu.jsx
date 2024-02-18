import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import categoryIcon from '../../img/menu.png';

import pencil from '../../img/pencil.png';
import laptop from '../../img/laptop.png';
import mic from '../../img/mic.png';
import food from '../../img/food.png';
import idea from '../../img/idea.png';
import shirt from '../../img/shirt.png';



const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    height: 60px;
    font-family: NotoSans;
    width : 67%;
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

const Label = styled(Link)`
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
    display: ${props => (props.isOpen ? 'block' : 'none')};
    background-color: #FFFFFF;
    list-style-type: none;
    padding: 10px;
    margin: 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    z-index: 1;
    width : 100px;
`;

const CategoryItemContainer = styled.li`
    margin: 5px 0;
    text-align: left;
       &:hover {
        background-color: #F0C920;
    }
`;

const StyledLink = styled(Link)`
    text-decoration : none;
    color : black;
`
const IconImg = styled.img`
    width : 40px;
    height : 40px;
    margin-right : 10px;

`

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
                        <StyledLink to="/category/창작">창작</StyledLink>
                    </CategoryItemContainer>
                    <CategoryItemContainer>
                        <IconImg src={mic} alt="" />
                        <StyledLink to="/category/아이돌">아이돌</StyledLink>
                    </CategoryItemContainer>
                    <CategoryItemContainer>
                        <IconImg src={laptop} alt="" />
                        <StyledLink to="/category/애니">애니</StyledLink>
                    </CategoryItemContainer>
                    <CategoryItemContainer>
                    <IconImg src={pencil} alt="" />
                        <StyledLink to="/category/문구">문구</StyledLink>
                    </CategoryItemContainer>
                    <CategoryItemContainer>
                        <IconImg src={food} alt="" />
                        <StyledLink to="/category/식품">식품</StyledLink>
                    </CategoryItemContainer>
                    <CategoryItemContainer>
                        <IconImg src={shirt} alt="" />
                        <StyledLink to="/category/패션">패션</StyledLink>
                    </CategoryItemContainer>
                </CategoryWrapContainer>
            </NavItem>
            <NavItem>
                <Label to="/newproduct">신상품</Label>
            </NavItem>
            <NavItem>
                <Label to="/popularproduct">인기상품</Label>
            </NavItem>
            <NavItem>
                <Label to="/endingproduct">마감임박</Label>
            </NavItem>
            <NavItem>
                <Label to="/posting">포스트</Label>
            </NavItem>
        </NavBar>
    );
}

export default NavigationCategoryMenu;
