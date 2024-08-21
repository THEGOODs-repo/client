import styled from "styled-components";
import React from "react";
import PostTable from "./PostTable";

export default function PostManage() {
  return (
    <>
      <MainContainer>
        <h2>게시판 관리</h2>
        <CountContainer>
          <Table>
            <Item>전체</Item>
            <TableCell align="right" width="152px" isLast>
              20
            </TableCell>
          </Table>
          <Table>
            <Item>공지사항</Item>
            <TableCell align="right" width="152px" isLast>
              10
            </TableCell>
          </Table>
          <Table>
            <Item>이벤트</Item>
            <TableCell align="right" width="152px" isLast>
              10
            </TableCell>
          </Table>
        </CountContainer>
        <DeleteButton>
          <span>X</span> 삭제
        </DeleteButton>
        <PostTable />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: ${870 / 19.2}vw;
  height: 950px;
  border: 2.475px solid rgba(0, 0, 0, 0.05);
  padding: 10px 30px;
  h2 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: ${26 / 19.2}vw;
    line-height: ${35 / 19.2}vw;
    color: #202123;
  }
`;

const CountContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const Table = styled.div`
  display: flex;
  flex-direction: row;
  width: ${240 / 19.2}vw;
  height: ${28 / 19.2}vw;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #202123;
`;
const Item = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: ${87 / 19.2}vw;
  padding: 5px;
  background: #fafafb;
  border: 1px solid #b7aeae;
`;
const TableCell = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  width: ${152 / 19.2}vw;
  border: 1px solid #b7aeae;
`;
const DeleteButton = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 5px 5px;
  width: 37px;
  height: 19px;
  border: 1px solid #b7aeae;
  border-radius: 5px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  color: #202123;
  span {
    color: #fd3c56;
  }
`;
