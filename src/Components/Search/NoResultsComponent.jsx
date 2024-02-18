import React from "react";
import styled from "styled-components";
import NoResultIcon from '../../img/NoResultIcon.png';
import SearchTagComponent from "./SearchTagComponent";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top : 50px;
`;

const Image = styled.img`
    width: 160px;
    height: 160px;
`;

function NoResultsComponent({ searchKeyword }) {
    return (
        <Container>
            <Image src={NoResultIcon} alt="No Results" />
            <p>"{searchKeyword}" 에 대한 검색 결과가 없습니다.</p>
            <p>검색어를 바르게 입력했는지 확인해 보세요.</p>
            <SearchTagComponent/>
        </Container>
    );
}

export default NoResultsComponent;
