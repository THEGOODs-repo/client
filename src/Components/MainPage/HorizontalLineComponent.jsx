import React from 'react';
import styled from 'styled-components';

const HorizontalLine = styled.div`
    position : relative;
    width : 100%;
    height: 1px;
    background-color: #9C9C9C;
    margin-bottom : 6px;
`;

const CustomHorizontalLine = () => {
    return <HorizontalLine />;
};

export default CustomHorizontalLine;
