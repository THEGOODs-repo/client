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
import FixedButtons from '../Components/Global/FixedButtons';

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

function NewProductPage(props){
    const [productList,setProductList] = useState([]);
    const [count,setCount] = useState(0);
    const titleList = {
        'idol': '아이돌',
        'animation': '애니메이션',
        'webtoon': '웹툰',
        'game': '게임',
    };

    useEffect(() => {
        let url = ''
        if (props.type == 'idol') {
            url = `/api/item/main?type=new&page=1`
        }
        else if (props.type == 'animation') {
            url = `/api/item/main?type=new&page=2`
        }
        else if (props.type == 'webtoon') {
            url = `/api/item/main?type=new&page=3`
        }
        else if (props.type == 'game') {
            url = `/api/item/main?type=new&page=4`
        }
        axios.get(url) //ENDPOINT작성
            .then(response => {
                setCount(response.data['result']['totalElements']);
                setProductList(response.data['result']['itemList'])
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [props.type]);
    return (
        <>
            <HeaderComponent />
            <NavWrapContainer>
                <NavigationMenu />
                <div style={{ borderBottom: '1px solid #9C9C9C', width:'100%',height:'3px' }}></div>
                <NavigationCategoryMenu />
            </NavWrapContainer>
            <hr />
            <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <div style={{width : "66%",display:"flex",flexDirection:"column"}}>
                <h1>{titleList[props.type]}</h1>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p>{count}개의 판매 상품</p>
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
            <FixedButtons/>
        </>
    )
}

export default NewProductPage;