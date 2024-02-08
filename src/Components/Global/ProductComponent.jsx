import React from 'react';
import styled from 'styled-components';
import sample from '../../img/sampleimg.png';
const ProductCard = styled.div`
    width: 190px;
    padding: 20px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
`;

const ImageContainer = styled.div`
    width: 100%;
    padding-bottom: 60%; 
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;


const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
`;

const Title = styled.h2`
    font-size: 18px;
    margin-bottom: 10px;
`;

const SellerInfo = styled.div`
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;
`;

const EndDate = styled.span`
    color: #666;
`;

const SellerName = styled.span`
    color: #333;
`;

const Views = styled.span`
    font-size: 14px;
    color: #666;
`;

const ProductCardComponent = ({ product }) => {
    return (
        <ProductCard>
            <ImageContainer>
                <ProductImage src={sample} alt={product.title} />
            </ImageContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <SellerInfo>
                    <div>
                        <EndDate>종료일: {product.endDate}</EndDate>
                        <SellerName>판매자: {product.seller}</SellerName>
                    </div>
                    <Views>조회수: {product.views}</Views>
                </SellerInfo>
            </InfoContainer>
        </ProductCard>
    );
};

export default ProductCardComponent;
