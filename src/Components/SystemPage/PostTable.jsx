import React, { useState } from "react";
import styled from "styled-components";

// 더미 데이터
const posts = [
  {
    id: 1,
    category: "공지",
    title: "첫 번째 게시물",
    author: "관리자",
    date: "2023-07-16",
    permission: "모두",
    manage: "수정",
  },
  {
    id: 2,
    category: "일반",
    title: "두 번째 게시물",
    author: "사용자1",
    date: "2023-07-15",
    permission: "회원",
    manage: "삭제",
  },
  // 더 많은 게시물 데이터 추가 가능
];

const PostTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableCell>
          <Checkbox />
        </TableCell>
        <TableCell>분류</TableCell>
        <TableCell>게시글 제목</TableCell>
        <TableCell>작성자</TableCell>
        <TableCell>업로드 날짜</TableCell>
        <TableCell>읽기 권한</TableCell>
        <TableCell>게시물 관리</TableCell>
      </TableHeader>
      {posts.map((post) => (
        <TableRow key={post.id}>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell>{post.category}</TableCell>
          <TableCell>{post.title}</TableCell>
          <TableCell>{post.author}</TableCell>
          <TableCell>{post.date}</TableCell>
          <TableCell>{post.permission}</TableCell>
          <TableCell>
            <div style={{ display: "flex", gap: "5px" }}>
              <Button>글보기</Button>
              <Button>글수정</Button>
              <PostFixButton>글 고정</PostFixButton>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
};

export default PostTable;

// Table 스타일 정의
const Table = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #202123;
`;

// TableRow 스타일 정의
const TableRow = styled.div`
  display: table-row;
`;

// TableCell 스타일 정의
const TableCell = styled.div`
  display: table-cell;
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;

  &:nth-child(1) {
    width: ${25 / 19.2}vw;
  }

  &:nth-child(2) {
    width: ${73 / 19.2}vw;
  }

  &:nth-child(3) {
    width: ${255 / 19.2}vw;
  }

  &:nth-child(4) {
    width: ${85 / 19.2}vw;
  }

  &:nth-child(5) {
    width: ${85 / 19.2}vw;
  }

  &:nth-child(6) {
    width: ${85 / 19.2}vw;
  }

  &:nth-child(7) {
    width: ${175 / 19.2}vw;
  }
`;

// 헤더 스타일 정의
const TableHeader = styled(TableRow)`
  background-color: #f4f4f4;
`;

const Button = styled.button`
  box-sizing: border-box;
  background-color: #fefdfd;
  width: ${50 / 19.2}vw;
  height: ${25 / 19.2}vw;
  border: 1px solid #b7aeae;
  border-radius: 5px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: ${10 / 19.2}vw;
  color: #202123;
`;

const PostFixButton = styled.button`
  box-sizing: border-box;
  width: ${50 / 19.2}vw;
  height: ${25 / 19.2}vw;
  border: 1px solid #b7aeae;
  border-radius: 5px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: ${10 / 19.2}vw;
  color: #202123;
  background: #f0c920;
`;

// 커스텀 체크박스 스타일 정의
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  background: ${(props) => (props.checked ? "#f0c920" : "white")};
  border: 1px solid #ccc;
  border-radius: 3px;
  transition: all 150ms;
  cursor: pointer;

  ${HiddenCheckbox}:checked + & {
    background: #f0c920;
  }

  svg {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const Checkbox = ({ className, ...props }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox
        checked={checked}
        onChange={handleCheckboxChange}
        {...props}
      />
      <StyledCheckbox checked={checked} onClick={handleCheckboxChange}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};
