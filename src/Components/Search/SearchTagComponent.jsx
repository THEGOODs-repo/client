import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TagWrapContainer = styled.div`
    width: 550px;
    height: 200px;
    background-color: rgba(189, 189, 189, 0.5);
    border-radius: 15px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px; /* 아이템 사이의 간격 설정 */
`;

const Item = styled(Link)`
    width: 100px;
    height: 40px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
`;

function SearchTagComponent() {
    return (
        <>
            <TagWrapContainer>
                <p>이런건 어떠세요?</p>
                <ItemContainer>
                    <Item to="/">#태그</Item>
                    <Item to="/">#태그</Item>
                    <Item to="/">#태그</Item>
                    <Item to="/">#태그</Item>
                    <Item to="/">#태그</Item>
                    <Item to="/">#태그</Item>
                    <Item to="/">#태그</Item>
                    <Item to="/">#태그</Item>
                </ItemContainer>
            </TagWrapContainer>
        </>
    );
}

export default SearchTagComponent;
