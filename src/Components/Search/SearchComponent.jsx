import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import axios from 'axios'; // axios 라이브러리 import
import ProductCardComponent from "../Global/ProductComponent"
import SelectOptionComponent from "../Category/SelectOptionComponent"
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration : none;
    color : black;
`

function SearchComponent (){
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        // API 호출 함수
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/search/item?page=1&sellerName='); // API 호출
                setSearchResult(response.data); // API 결과를 상태에 설정
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <div style={{ width: "66%", display: "flex", flexDirection: "column" }}>
                <h1>창작 전체</h1>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    {searchResult.length === 0 ? '검색 결과가 없습니다' : `${searchResult.length}개의 판매상품`}
                    <SelectOptionComponent/>
                </div>
            </div>
            {searchResult.length > 0 && (
                <div style={{ width: "66%", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", justifyContent: "center" }}>
                    {searchResult.map((product, index) => (
                        <StyledLink to={`/product/${product.itemId}`} key={product.itemId}>
                            <ProductCardComponent product={product} />
                        </StyledLink>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchComponent;
