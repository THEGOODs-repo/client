import React from 'react';
import styled from 'styled-components';

const HorizontalLine = styled.hr`
    min-width: 1300px;
    height: 2px; /* 원하는 선의 두께로 조정하세요 */
    background-color: gray; /* 선의 색상을 지정하세요 */
    margin: 20px 0; /* 선 위아래 여백을 조정하세요 */
`;

const CustomHorizontalLine = () => {
    return <HorizontalLine />;
};

export default CustomHorizontalLine;
