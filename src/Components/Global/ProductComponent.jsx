import React from 'react';
import styled from 'styled-components';
import formatDate from '../Global/convertToDate';
import profile from '../../img/Hamster.png';
import calender from '../../img/calendar.png';

const ProductCard = styled.div`
    width: 240px;
    height : 326px; 
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
    flex-direction: column;

`;
const ProfileViewerContainer =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;

`

const SellerImage = styled.img`
    width: 20px; 
    height: 20px; 
    margin-right: 5px; 
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
const CalenderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 5px;

`

const ProductCardComponent = ({ product }) => {
    return (
        <ProductCard>
            <ImageContainer>
                <ProductImage src={product['itemImgUrlList'][0]['itemImgUrl']} alt={product.name} />
            </ImageContainer>
            <InfoContainer>
            <Title>
                {product.name.length > 20 ? `${product.name.slice(0, 20)}...` : product.name}
            </Title>
            <SellerInfo>
                    <CalenderContainer>
                        <SellerImage src={calender} alt="Seller Icon" />
                        <EndDate>종료일: {product.endDate}</EndDate>
                    </CalenderContainer>
                    <ProfileViewerContainer>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <SellerImage src={product.memberProfileImgUrl} alt="Seller" />
                            <SellerName>{product.memberName}</SellerName>
                        </div>
                        <Views>{product.viewCount}</Views>
                    </ProfileViewerContainer>
                </SellerInfo>
            </InfoContainer>
        </ProductCard>
    );
};

export default ProductCardComponent;
