import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  margin: auto;
`;

const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
`;

const ProductInfo = styled.div`
  flex-grow: 1;
`;

const ProductTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const ProductDetails = styled.p`
  margin: 5px 0;
  color: #555;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const TableContainer = styled.div`
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  padding: 10px;
  border-bottom: 2px solid #ccc;
  background-color: #f8f8f8;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FilterLabel = styled.label`
  font-weight: bold;
`;

const FilterInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FilterSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ProductTable = () => {
  return (
    <Container>
      <ProductHeader>
        <ProductImage src="https://via.placeholder.com/100" alt="Product" />
        <ProductInfo>
          <ProductTitle>케이스 종이 스티커</ProductTitle>
          <ProductDetails>상품 가격: 40,000원</ProductDetails>
          <ProductDetails>배송비: 3,000원</ProductDetails>
          <ProductDetails>기간: 상시판매</ProductDetails>
        </ProductInfo>
        <ButtonGroup>
          <Button>상품 페이지</Button>
          <Button>상품 페이지 수정</Button>
        </ButtonGroup>
      </ProductHeader>


      <TableContainer>

        <FilterContainer>
          <FilterGroup>
            <FilterLabel htmlFor="startDate">날짜:</FilterLabel>
            <FilterInput type="date" id="startDate" />
            <FilterInput type="date" id="endDate" />
          </FilterGroup>
          <FilterGroup>
            <FilterLabel htmlFor="search">검색:</FilterLabel>
            <FilterInput type="text" id="search" placeholder="검색어를 입력하세요" />
            <Button>조회</Button>
          </FilterGroup>
          <FilterGroup>
            <FilterSelect>
              <option>매출사 일괄변경</option>
              <option>선택 1</option>
              <option>선택 2</option>
            </FilterSelect>
            <FilterSelect>
              <option>진행상태 일괄</option>
              <option>선택 1</option>
              <option>선택 2</option>
            </FilterSelect>
            <Button>선택항목 수정적용</Button>
          </FilterGroup>
        </FilterContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader></TableHeader>
              <TableHeader>번호</TableHeader>
              <TableHeader>주문 상품/수량</TableHeader>
              <TableHeader>총 주문금액</TableHeader>
              <TableHeader>입금자명</TableHeader>
              <TableHeader>주소</TableHeader>
              <TableHeader>연락처</TableHeader>
              <TableHeader>주문자 이메일</TableHeader>
              <TableHeader>매출사</TableHeader>
              <TableHeader>운송장 번호</TableHeader>
              <TableHeader>진행상태</TableHeader>
              <TableHeader>상세</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <TableCell><input type="checkbox" /></TableCell>
              <TableCell>2</TableCell>
              <TableCell>케이스 — (34,000원/1개)</TableCell>
              <TableCell>34,000원</TableCell>
              <TableCell>다포즈</TableCell>
              <TableCell>경기 용인시 기흥구 덕영대로 1732</TableCell>
              <TableCell>010-1234-5678</TableCell>
              <TableCell>cfarevvd@gmail.com</TableCell>
              <TableCell>
                <FilterSelect>
                  <option>선택</option>
                  <option>매출사 1</option>
                  <option>매출사 2</option>
                </FilterSelect>
              </TableCell>
              <TableCell>
                <FilterInput type="text" placeholder="운송장 번호를 입력하세요" />
              </TableCell>
              <TableCell>
                <FilterSelect>
                  <option>입금확인</option>
                  <option>결제완료</option>
                  <option>배송준비</option>
                  <option>배송시작</option>
                  <option>배송완료</option>
                </FilterSelect>
              </TableCell>
              <TableCell><Button>보기</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><input type="checkbox" /></TableCell>
              <TableCell>1</TableCell>
              <TableCell>케이스 — (34,000원/1개)</TableCell>
              <TableCell>34,000원</TableCell>
              <TableCell>다포즈</TableCell>
              <TableCell>경기 용인시 기흥구 덕영대로 1732</TableCell>
              <TableCell>010-1234-5678</TableCell>
              <TableCell>cfarevvd@gmail.com</TableCell>
              <TableCell>
                <FilterSelect>
                  <option>선택</option>
                  <option>매출사 1</option>
                  <option>매출사 2</option>
                </FilterSelect>
              </TableCell>
              <TableCell>
                <FilterInput type="text" placeholder="운송장 번호를 입력하세요" />
              </TableCell>
              <TableCell>
                <FilterSelect>
                  <option>입금확인</option>
                  <option>결제완료</option>
                  <option>배송준비</option>
                  <option>배송시작</option>
                  <option>배송완료</option>
                </FilterSelect>
              </TableCell>
              <TableCell><Button>보기</Button></TableCell>
            </TableRow>
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ProductTable;
