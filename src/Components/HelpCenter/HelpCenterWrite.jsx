import React, { useState } from "react";
import styled from "styled-components";
import Editor from "./Editor";

const HelpCenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  margin: ${38 / 19.2}vw 0 ${12 / 19.2}vw 0;
  padding: 0;
  font-size: ${26 / 19.2}vw;
  color: #000;
`;

const TextWrapper = styled.div`
  display: flex;
  padding: 0;
  margin: 0 0 0 0;
  font-size: ${20 / 19.2}vw;
  width: ${1170 / 19.2}vw;
  justify-content: flex-start;
`;

const HelpCenterText = styled.div`
  color: ${(props) =>
    props.$selected ? "rgba(32,33,35)" : "rgba(156,156,156)"};
  margin: 0 ${22 / 19.2}vw 0 0;
`;

const TableWrapper = styled.table`
  border-collapse: collapse;
  font-size: ${16 / 19.2}vw;
  text-align: center;
  width: ${1170 / 19.2}vw;
  margin: ${14 / 19.2}vw 0 ${30 / 19.2}vw 0;
`;

const TableHead = styled.thead`
  background: rgba(243, 243, 243);
  text-align: center;
  color: rgba(32, 33, 35);
  margin: 0;
  padding: 0;

  th {
    border: none;
    width: 12%;
    height: ${58 / 19.2}vw;
    border-top: ${0.5 / 19.2}vw solid rgba(103, 104, 106);
  }

  .title {
    width: auto;
    text-align: left;
  }
`;

const TableBody = styled.tbody`
  text-align: center;
  color: #000;
  margin: 0;
  padding: 0;
  color: rgba(156, 156, 156);

  tr {
    height: ${58 / 19.2}vw;
    border-top: ${0.5 / 19.2}vw solid rgba(175, 175, 175);
    border-bottom: ${0.5 / 19.2}vw solid rgba(175, 175, 175);
  }

  .title {
    width: auto;
    text-align: left;
    color: rgba(32, 33, 35);
  }

  & > tr + tr {
  }
`;

const ContentHead = styled.thead`
  background: rgba(243, 243, 243);
  text-align: center;
  color: rgba(32, 33, 35);
  margin: 0;
  padding: 0;

  th {
    border: none;
    width: 12%;
    height: ${58 / 19.2}vw;
    border-top: ${0.5 / 19.2}vw solid rgba(103, 104, 106);
    padding: 0 ${47 / 19.2}vw;
  }

  .date {
    width: 20%;
    text-align: left;
  }

  .title {
    width: 68%;
    text-align: left;
  }

  .viewcount {
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ContentBody = styled.tbody`
  text-align: left;
  color: #000;
  margin: 0;
  padding: 0;
  color: rgba(156, 156, 156);

  tr {
    height: ${58 / 19.2}vw;
    border-top: ${0.5 / 19.2}vw solid rgba(175, 175, 175);
    border-bottom: ${0.5 / 19.2}vw solid rgba(175, 175, 175);
  }

  td {
    padding: 0;
    color: rgba(82, 85, 91);
  }

  & > tr + tr {
  }
`;

const HelpCenterWrite = () => {
  // state
  const [htmlStr, setHtmlStr] = useState("");

  const [filter, setFilter] = useState("전체");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <HelpCenterWrapper>
      <TitleWrapper>{filter}</TitleWrapper>
      <TextWrapper>
        {filter === "전체" ? (
          <HelpCenterText $selected>전체</HelpCenterText>
        ) : (
          <HelpCenterText onClick={() => handleFilterChange("전체")}>
            전체
          </HelpCenterText>
        )}
        {filter === "공지사항" ? (
          <HelpCenterText $selected>공지사항</HelpCenterText>
        ) : (
          <HelpCenterText onClick={() => handleFilterChange("공지사항")}>
            공지사항
          </HelpCenterText>
        )}
        {filter === "이벤트" ? (
          <HelpCenterText $selected>이벤트</HelpCenterText>
        ) : (
          <HelpCenterText onClick={() => handleFilterChange("이벤트")}>
            이벤트
          </HelpCenterText>
        )}
      </TextWrapper>
      <TableWrapper>
        <ContentHead>
          <tr>
            <th className="title">제목</th>
            <th className="date">날짜</th>
            <th className="viewcount">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1794 11.1794C11.6248 10.734 11.875 10.1299 11.875 9.5C11.875 8.87011 11.6248 8.26602 11.1794 7.82062C10.734 7.37522 10.1299 7.125 9.5 7.125C8.87011 7.125 8.26602 7.37522 7.82062 7.82062C7.37522 8.26602 7.125 8.87011 7.125 9.5C7.125 10.1299 7.37522 10.734 7.82062 11.1794C8.26602 11.6248 8.87011 11.875 9.5 11.875C10.1299 11.875 10.734 11.6248 11.1794 11.1794Z"
                  stroke="#18181B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.94531 9.5026C2.9539 6.29081 5.9551 3.96094 9.4994 3.96094C13.0445 3.96094 16.0449 6.29081 17.0535 9.5026C16.0449 12.7144 13.0445 15.0443 9.4994 15.0443C5.9551 15.0443 2.9539 12.7144 1.94531 9.5026Z"
                  stroke="#18181B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              viewcount
            </th>
          </tr>
        </ContentHead>
        <ContentBody>
          <tr>
            <td colspan="3">
              {" "}
              <EditorContainer>
                <Editor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />
              </EditorContainer>
            </td>
          </tr>
        </ContentBody>
      </TableWrapper>
      <ContentsContainer>
        결과입니다.
        <HtmlContainer>{htmlStr}</HtmlContainer>
      </ContentsContainer>
    </HelpCenterWrapper>
  );
};

export default HelpCenterWrite;

// style
const EditorContainer = styled.div`
  width: 100%
  height: 100%;
  margin: 0 0;
`;

const ContentsContainer = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  padding: 0;
  flex-direction: column;
  gap: 0;

  & > div {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`;

const HtmlContainer = styled.div`
  border: 1px solid #9c9c9c;
`;
