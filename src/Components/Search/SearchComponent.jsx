import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios'; // axios 라이브러리 import
import ProductCardComponent from "../Global/ProductComponent";
import SelectOptionComponent from "../Category/SelectOptionComponent";
import { Link } from "react-router-dom";
import HeaderComponent from "../Header/Header";
import NavigationCategoryMenu from "../NavigationMenu/NavigationCategoryMenu";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import { useLocation } from 'react-router-dom';
import NoResultsComponent from './NoResultsComponent';
import FixedButtons from '../Global/FixedButtons';

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

function SearchResultComponent() {
    const [searchResult, setSearchResult] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const tagOption = {
        "상품": "itemName",
        "사장님": "sellerName",
    };
    let valueToUse = ''; // 사용할 값 변수 초기화

    // tag와 q 값을 가져옵니다.
    const tag = searchParams.get('tag');
    const q = searchParams.get('q');
    if (tag === '상품') {
        valueToUse = tagOption['상품']; // 상품인 경우 itemName 사용
    } else {
        valueToUse = tagOption['사장님']; // 상품이 아닌 경우 sellerName 사용
    }

    useEffect(() => {
        // API 호출 함수
        const fetchData = async () => {
            console.log(tag);
            console.log(q);

            try {
                const response = await axios.get(`/api/search/item?page=1&${valueToUse}=${q}&type=new`); // API 호출
                setSearchResult(response.data['result']['itemList']); // API 결과를 상태에 설정
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <HeaderComponent />
            <NavWrapContainer>
                <NavigationMenu />
                <div style={{ borderBottom: '1px solid #9C9C9C', width:'100%',height:'3px' }}></div>
                <NavigationCategoryMenu />
                <div style={{ borderBottom: '1px solid #9C9C9C', width:'100%',height:'3px' }}></div>
            </NavWrapContainer>
        
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                {searchResult.length > 0 ? (
                    <>
                        <div style={{ width: "66%", display: "flex", flexDirection: "column" }}>
                            <h1>'{q}'에 대한 검색결과</h1>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                {`${searchResult.length}개의 판매상품`}
                                <SelectOptionComponent />
                            </div>
                        </div>
                        <div style={{ width: "66%", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", justifyContent: "center" }}>
                            {searchResult.map((product, index) => (
                                <StyledLink to={`/product/${product.itemId}`} key={product.itemId}>
                                    <ProductCardComponent product={product} />
                                </StyledLink>
                            ))}
                        </div>
                    </>
                ) : (
                    <NoResultsComponent searchKeyword={q} />
                )}
            </div>
            <FixedButtons/>
        </>
    );
}

export default SearchResultComponent;
