import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HeaderComponent from '../Components/Header/Header';
import NavigationCategoryMenu from '../Components/NavigationMenu/NavigationCategoryMenu';
import NavigationMenu from '../Components/NavigationMenu/NavigationMenu';
import ProductCardComponent from '../Components/Global/ProductComponent';
import newbanner from '../img/newBanner.png';
import endingbanner from '../img/endingBanner.PNG'
import popularbanner from '../img/popularBanner.png';

import FixedButtons from '../Components/Global/FixedButtons';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

const NavWrapContainer = styled.div`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px; /* 위쪽 여백 추가 */
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

function NewProductPage(props) {
    const [productList, setProductList] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
 //   const [bannerUrl,setBannerUrl] = useState('');

    const titleList = {
        'new': '신상품',
        'popular': '인기상품',
        'last': '마감임박',
    };

    // const handleBannerUrl = ()=>{
    //     if(props.type==="new"){setBannerUrl(newbanner)}
    //     else if(props.type==="popular"){setBannerUrl(newbanner)}
    //     else if(props.type==="last"){setBannerUrl(newbanner)}
    // }
    // useEffect(()=>{
    //     handleBannerUrl();
    // },[])

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/item/main?type=${props.type}&page=${page}`);
            setCount(response.data['result']['totalElements']);
            setProductList(prevList => [...prevList, ...response.data['result']['itemList']]);
            setPage(page + 1);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [props.type]);
    let bannerUrl;

    if (props.type === "new") {
        bannerUrl = newbanner;
    } else if (props.type === "popular") {
        bannerUrl = popularbanner;
    } else if (props.type === "last") {
        bannerUrl = endingbanner    ;
    } else {
        bannerUrl = null;
    }
    return (
        <>
            <HeaderComponent />
            <NavWrapContainer>
                <NavigationMenu />
                <div style={{ borderBottom: '1px solid #9C9C9C', width: '100%', height: '3px' }}></div>
                <NavigationCategoryMenu />
            </NavWrapContainer>
            <div style={{ width: "100%", height: "300px" }}>
                <>
                    {bannerUrl && <img src={bannerUrl} alt="" />}
                </>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <div style={{ width: "66%", display: "flex", flexDirection: "column" }}>
                    <h1>{titleList[props.type]}</h1>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p>{count}개의 판매 상품</p>
                    </div>
                </div>
                <div style={{ width: "66%" }}>
                    <InfiniteScroll
                        dataLength={productList.length}
                        next={fetchData}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                        endMessage={<p>No more items</p>}
                    >
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", justifyContent: "center" }}>
                            {productList.map((product, index) => (
                                <StyledLink to={`/product/${product.itemId}`} key={product.itemId}>
                                    <ProductCardComponent product={product} />
                                </StyledLink>
                            ))}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
            <FixedButtons />
        </>
    )
}

export default NewProductPage;
