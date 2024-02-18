import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import HeaderComponent from "../Components/Header/Header";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';
import ProductCardComponent from '../Components/Global/ProductComponent';
import newbanner from '../img/newBanner.png';

const NavWrapContainer = styled.div`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px; /* 위쪽 여백 추가 */
`;

const StyledLink = styled(Link)`
    text-decoration : none;
    color : black;
`

function NewProductPage(){
    const [productList,setProductList] = useState([]);

    useEffect(() => {
        axios.get('/api/item/main?type=popular&page=1') //ENDPOINT작성
            .then(response => {
                console.log(response.data['result']);
                setProductList(response.data['result']['itemList'])
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <>
                    <HeaderComponent />
            <NavWrapContainer>
                <NavigationMenu />
                <div style={{ borderBottom: '1px solid #9C9C9C', width:'100%',height:'3px' }}></div>
                <NavigationCategoryMenu />
            </NavWrapContainer>
            <div style={{width:"100%",height:"300px"}}>
                <img src={newbanner} alt="" />
            </div>
            <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <div style={{width : "66%",display:"flex",flexDirection:"column"}}>
                <h1>창작 전체</h1>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    999개의 판매상품
                </div>
                </div>
                <div style={{ width: "66%", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", justifyContent: "center" }}>
                    {productList.map((product, index) => (
                        <StyledLink to={`/product/${product.itemId}`} key={product.itemId}>
                            <ProductCardComponent product={product} />
                        </StyledLink>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NewProductPage;