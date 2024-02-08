import React from 'react';
import styled from 'styled-components';

// 아이콘 이미지를 import 합니다.
// import categoryIcon from './category-icon.png';

import categoryIcon from '../../img/menu.png';

// 스타일링된 컴포넌트를 정의합니다.
const NavBar = styled.nav`
    display: flex;
    width : 70vw;
    justify-content: space-around;
    align-items: center;
    background-color: #FFFFFF;
    height: 60px;
    padding: 0 20px;
    font-family: NotoSans;
`;

const NavItem = styled.div`
    display: flex;
    align-items: center;
    justify-content : center;
    text-align : center; 
    cursor: pointer;
`;

const Icon = styled.img`
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
`;

const Label = styled.span`
    font-family: NotoSans;
    font-size: 20px;
    font-weight : bold;
`;

function NavigationCategoryMenu() {
    return (
        <NavBar>
            <NavItem>
                <Icon src={categoryIcon} alt="Category" />
                <Label>카테고리</Label>
            </NavItem>
            <NavItem>
                <Label>신상품</Label>
            </NavItem>
            <NavItem>
                <Label>인기상품</Label>
            </NavItem>
            <NavItem>
                <Label>마감임박</Label>
            </NavItem>
            <NavItem>
                <Label>포스트</Label>
            </NavItem>
        </NavBar>
    );
}

export default NavigationCategoryMenu;
