import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const PaginationButton = styled.button`
    border: 1px solid #ccc;
    background-color: #fff;
    color: #333;
    width: 30px;
    height: 30px;
    margin: 0 5px;
    cursor: pointer;
    outline: none;

    &:hover {
        background-color: #f0f0f0;
    }

    &:active {
        background-color: #ccc;
    }
`;


function Pagination({ totalPages, currentPage, onPageChange }) {
    const renderPageButtons = () => {
        const buttons = [];

        // 이전 10페이지로 이동하는 버튼
        buttons.push(
            <PaginationButton
                key="prev-10"
                onClick={() => onPageChange(Math.max(1, currentPage - 10))} // 현재 페이지에서 10을 빼고 1보다 작으면 1로 설정
                disabled={currentPage <= 1} // 첫 페이지일 때 비활성화
            >
                {'<<'}
            </PaginationButton>
        );

        // 이전 페이지로 이동하는 화살표 버튼
        buttons.push(
            <PaginationButton
                key="prev"
                onClick={() => onPageChange(Math.max(1, currentPage - 1))} // 현재 페이지에서 1을 빼고 1보다 작으면 1로 설정
                disabled={currentPage <= 1} // 첫 페이지일 때 비활성화
            >
                {'<'}
            </PaginationButton>
        );

        // 페이지 버튼 생성
        for (let i = Math.max(1, currentPage - 5); i <= Math.min(totalPages, currentPage + 5); i++) {
            buttons.push(
                <PaginationButton
                    key={i}
                    onClick={() => onPageChange(i)}
                    style={{ backgroundColor: i === currentPage ? '#ccc' : '#fff', color: i === currentPage ? '#fff' : '#333' }}
                >
                    {i}
                </PaginationButton>
            );
        }

        // 다음 페이지로 이동하는 화살표 버튼
        buttons.push(
            <PaginationButton
                key="next"
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))} // 현재 페이지에 1을 더하고 총 페이지 수를 넘으면 총 페이지 수로 설정
                disabled={currentPage >= totalPages} // 마지막 페이지일 때 비활성화
            >
                {'>'}
            </PaginationButton>
        );

        // 다음 10페이지로 이동하는 버튼
        buttons.push(
            <PaginationButton
                key="next-10"
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 10))} // 현재 페이지에서 10을 더하고 총 페이지 수를 넘으면 총 페이지 수로 설정
                disabled={currentPage >= totalPages} // 마지막 페이지일 때 비활성화
            >
                {'>>'}
            </PaginationButton>
        );

        return buttons;
    };

    return <PaginationContainer>{renderPageButtons()}</PaginationContainer>;
}

export default Pagination;
