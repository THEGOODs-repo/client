import React from 'react';
import styled from 'styled-components';

const ProductContentWrapContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 50px auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ProductImage = styled.img`
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
`;

function ProductInfoComponent({ productInfo }) {
    console.log(productInfo);

    return (
        <ProductContentWrapContainer>
            {productInfo && productInfo.itemImgUrlList && productInfo.itemImgUrlList.map((image, index) => (
                <ProductImage key={index} src={image.itemImgUrl} alt={`Product ${index}`} />
            ))}

            {/* 상품 정보 */}
            {productInfo && (
                <>
                    <p>상품 이름: {productInfo.name}</p>
                    <p>상품 가격: {productInfo.price}</p>
                </>
            )}
        </ProductContentWrapContainer>
    );
}

export default ProductInfoComponent;
