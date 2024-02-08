import React, { useState } from "react";
import styled from "styled-components";

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
    padding: ${35 / 19.2}vw ${44 / 19.2}vw;
    color: rgba(82, 85, 91);
  }

  & > tr + tr {
  }
`;

const PageNationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${14 / 19.2}vw;
`;

const PageNation = styled.div`
  width: ${32 / 19.2}vw;
  height: ${32 / 19.2}vw;
  border: ${1 / 19.2}vw solid rgba(156, 156, 156);
  border-radius: ${1 / 19.2}vw;
  color: ${(props) =>
    props.$selected ? "rgba(32,33,35)" : "rgba(156,156,156)"};
  display: flex;
  justify-content: center;
  align-items: center;

  &.prevprev {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMjUgMTEuODc1TDMgNy41TDguMjUgMy4xMjVNMTQuMjUgMTEuODc1TDkgNy41TDE0LjI1IDMuMTI1IiBzdHJva2U9IiM5QzlDOUMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K")
      no-repeat center center;
  }

  &.prev {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjI1IDExLjg3NUw2IDcuNUwxMS4yNSAzLjEyNSIgc3Ryb2tlPSIjOUM5QzlDIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==")
      no-repeat center center;
  }

  &.next {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNzUgMy4xMjVMMTIgNy41TDYuNzUgMTEuODc1IiBzdHJva2U9IiM5QzlDOUMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K")
      no-repeat center center;
  }

  &.nextnext {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNzUgMy4xMjVMMTUgNy41TDkuNzUgMTEuODc1TTMuNzUgMy4xMjVMOSA3LjVMMy43NSAxMS44NzUiIHN0cm9rZT0iIzlDOUM5QyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=")
      no-repeat center center;
  }
`;

const BackButton = styled.div`
  display: flex;
  color: #fff;
  background: rgba(32, 33, 35);
  justify-content: center;
  align-items: center;
  font-size: ${15 / 19.2}vw;
  border-radius: ${2 / 19.2}vw;
  width: ${104 / 19.2}vw;
  height: ${42 / 19.2}vw;
  align-self: flex-start;
`;

const dummydata = [
  [
    "[이벤트] [당첨자발표] 2023 더굿즈 오픈 이벤트 ",
    "2024-01-14",
    "THEGOODs",
    "999",
  ],
  [
    "[이벤트] [당첨자발표] 2023 더굿즈 오픈 이벤트 ",
    "2024-01-14",
    "THEGOODs",
    "999",
  ],
  [
    "[이벤트] [당첨자발표] 2023 더굿즈 오픈 이벤트 ",
    "2024-01-14",
    "THEGOODs",
    "999",
  ],
  [
    "[이벤트] [당첨자발표] 2023 더굿즈 오픈 이벤트 ",
    "2024-01-14",
    "THEGOODs",
    "999",
  ],
  [
    "[이벤트] [당첨자발표] 2023 더굿즈 오픈 이벤트 ",
    "2024-01-14",
    "THEGOODs",
    "999",
  ],
  [
    "[이벤트] [당첨자발표] 2023 더굿즈 오픈 이벤트 ",
    "2024-01-14",
    "THEGOODs",
    "999",
  ],
  [
    "[이벤트] [당첨자발표] 2023 더굿즈 오픈 이벤트 ",
    "2024-01-14",
    "THEGOODs",
    "999",
  ],
  [
    "[이벤트] [당첨자발표] 2023 더굿즈 오픈 이벤트 ",
    "2024-01-14",
    "THEGOODs",
    "999",
  ],
  [
    "[이벤트] [당첨자발표] 2023 더굿즈 오픈 이벤트 ",
    "2024-01-14",
    "THEGOODs",
    "999",
  ],
  [
    "[이벤트] [당첨자발표] 2023 더굿즈 오픈 이벤트 ",
    "2024-01-14",
    "THEGOODs",
    "999",
  ],
  [
    "[이벤트] [당첨자발표] 2023 더굿즈 오픈 이벤트 ",
    "2024-01-14",
    "THEGOODs",
    "999",
  ],
  [
    "[이벤트] [당첨자발표] 2023 더굿즈 오픈 이벤트 ",
    "2024-01-14",
    "THEGOODs",
    "999",
  ],
  [
    "[이벤트] [당첨자발표] 2023 더굿즈 오픈 이벤트 ",
    "2024-01-14",
    "THEGOODs",
    "999",
  ],
  [
    "[이벤트] [당첨자발표] 2023 더굿즈 오픈 이벤트 ",
    "2024-01-14",
    "THEGOODs",
    "999",
  ],
  [
    "[이벤트] [당첨자발표] 2023 더굿즈 오픈 이벤트 ",
    "2024-01-14",
    "THEGOODs",
    "999",
  ],
  [
    "[이벤트] [당첨자발표] 2023 더굿즈 오픈 이벤트 ",
    "2024-01-14",
    "THEGOODs",
    "999",
  ],
];

const HelpCenter = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(0);
  const [filter, setFilter] = useState("전체");

  const currentPageData = dummydata.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (newFilter) => {
    selectedPage === 0 && setFilter(newFilter);
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
      {selectedPage === 0 ? (
        <TableWrapper>
          <TableHead>
            <tr>
              <th>번호</th>
              <th className="title">제목</th>
              <th>날짜</th>
              <th>작성자</th>
              <th>조회수</th>
            </tr>
          </TableHead>
          <TableBody>
            {currentPageData.map((data, dataIndex) => (
              <tr key={dataIndex + 1}>
                <td>{dataIndex + 1}</td>
                {data.map((element, index) => (
                  <React.Fragment key={index}>
                    {index === 0 ? (
                      <td
                        className="title"
                        onClick={() => setSelectedPage(dataIndex + 1)}
                      >
                        {element}
                      </td>
                    ) : (
                      <td>{element}</td>
                    )}
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </TableBody>
        </TableWrapper>
      ) : (
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
              <td colspan="3">{selectedPage} 번입니다.</td>
            </tr>
          </ContentBody>
        </TableWrapper>
      )}
      {selectedPage === 0 ? (
        <PageNationWrapper>
          <PageNation className="prevprev" />
          <PageNation className="prev" />
          {Array.from({
            length: Math.ceil(dummydata.length / itemsPerPage),
          }).map((_, index) => (
            <PageNation
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </PageNation>
          ))}

          <PageNation className="next" />
          <PageNation className="nextnext" />
        </PageNationWrapper>
      ) : (
        <BackButton onClick={() => setSelectedPage(0)}>
          <svg
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: `${18 / 19.2}vw` }}
          >
            <path
              d="M11.25 14.25L6 9L11.25 3.75"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          목록으로
        </BackButton>
      )}
    </HelpCenterWrapper>
  );
};

export default HelpCenter;
