import React, { useState } from 'react';
import styled from 'styled-components';

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
                        인기순
                        {selectedOption === '인기순' && <CheckIcon>✔</CheckIcon>}
                    </Option>
                    <Option onClick={() => handleOptionClick('최신순')}>
                        최신순
                        {selectedOption === '최신순' && <CheckIcon>✔</CheckIcon>}
                    </Option>
                    <Option onClick={() => handleOptionClick('찜많은순')}>
                        찜많은순
                        {selectedOption === '찜많은순' && <CheckIcon>✔</CheckIcon>}
                    </Option>
                </OptionsList>
            )}
        </OptionContainer>
    );
};

export default SelectOptionComponent;
