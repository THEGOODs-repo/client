import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import product1Img from '../../img/productimg.png'
const ProductContentWrapContainer = styled.div`
    width : 100%;
    display : flex;
    margin: 50px auto;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`

function ProductInfoComponent(){



    return (
        <>
        <ProductContentWrapContainer>
            <img src={product1Img} alt="" />

        </ProductContentWrapContainer>
        
        </>
    )
}
export default ProductInfoComponent;