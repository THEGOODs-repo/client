import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const SelectBox = styled.div`
    position: relative;
    width: 150px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    background-color: #fff;
    cursor: pointer;
`;

const OptionsList = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid #ccc;
    border-top: none;
    border-radius: 0 0 4px 4px;
    background-color: #fff;
    z-index: 1;
`;

const Option = styled.div`
    position: relative; /* 추가 */
    padding: 8px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
`;

const CheckIcon = styled.span`
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    color: #F0C920;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const SelectOptionComponent = () => {
    const [selectedOption, setSelectedOption] = useState('인기순');
    const [showOptions, setShowOptions] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowOptions(false);
    };

    return (
        <OptionContainer>
            <SelectBox onClick={() => setShowOptions(!showOptions)}>
                {selectedOption}
            </SelectBox>
            {showOptions && (
                <OptionsList>
                    <Option onClick={() => handleOptionClick('인기순')}>
                        <StyledLink to="/popular?tag=popular">인기순</StyledLink>
                        {selectedOption === '인기순' && <CheckIcon>✔</CheckIcon>}
                    </Option>
                    <Option onClick={() => handleOptionClick('최신순')}>
                        <StyledLink to="/product?tag=new">최신순</StyledLink>
                        {selectedOption === '최신순' && <CheckIcon>✔</CheckIcon>}
                    </Option>
                    <Option onClick={() => handleOptionClick('찜많은순')}>
                        <StyledLink to="/product?tag=dibscount">찜많은순</StyledLink>
                        {selectedOption === '찜많은순' && <CheckIcon>✔</CheckIcon>}
                    </Option>
                    <Option onClick={() => handleOptionClick('구매후기 많은 순')}>
                        <StyledLink to="/product?tag=reviewcount">구매후기 많은 순</StyledLink>
                        {selectedOption === '구매후기 많은 순' && <CheckIcon>✔</CheckIcon>}
                    </Option>
                    <Option onClick={() => handleOptionClick('판매수 많은 순')}>
                        <StyledLink to="/product?tag=salescount">판매수 많은 순</StyledLink>
                        {selectedOption === '판매수 많은 순' && <CheckIcon>✔</CheckIcon>}
                    </Option>
                    <Option onClick={() => handleOptionClick('낮은 가격순')}>
                        <StyledLink to="/product?tag=lowprice">낮은 가격순</StyledLink>
                        {selectedOption === '낮은 가격순' && <CheckIcon>✔</CheckIcon>}
                    </Option>
                    <Option onClick={() => handleOptionClick('높은 가격순')}>
                        <StyledLink to="/product?tag=highprice">높은 가격순</StyledLink>
                        {selectedOption === '높은 가격순' && <CheckIcon>✔</CheckIcon>}
                    </Option>
                </OptionsList>
            )}
        </OptionContainer>
    );
};

export default SelectOptionComponent;