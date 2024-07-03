import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterBoundary = styled.div`
  min-width: 1200px;
  height: 5px;
  background-color: #fbd000;
  margin-top: 120px;
`;

const FooterInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid gray;
  padding: 20px 0; /* 위아래 여백 추가 */
  color: gray; /* 글씨 색상 변경 */
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* underline 제거 */
  color: gray; /* 글씨 색상 설정 */
  margin: 0 5px; /* 좌우 여백 추가 */
`;

const BaseFooter = () => {
  return (
    <>
      <FooterBoundary />
      <FooterInfoContainer>
        {/* Link를 감싸는 div 추가 */}
        <div style={{ display: "flex", gap: "10px" }}>
          <StyledLink to="/help/termsofuse">이용약관</StyledLink>
          <div>|</div>
          <StyledLink to="/help/privacy">개인정보처리방침</StyledLink>
          <div>|</div>
          <StyledLink to="/help/policy">운영정책</StyledLink>
          <div>|</div>
          <StyledLink to="/help/notice">공지사항</StyledLink>
          <div>|</div>
          <StyledLink to="/">도움센터</StyledLink>
        </div>
      </FooterInfoContainer>
      <FooterInfoContainer>
        <p>
          주식회사 더 굿즈 | 경기도 용인시 기흥구 덕영대로 1732 | 대표 : 김예빈
          | 개인정보보호책임 : 김예빈
        </p>
        <p>
          통신판매업신고 : 2024-서울서초-0000 사업자등록번호 : 000-00-00000 |
          대표번호 : 010-0000-0000 | cs@thegoods.com
        </p>
        <p>평일 9:00 ~ 18:00 점심시간 12:00 ~ 13:00 (주말/공휴일 휴무)</p>
      </FooterInfoContainer>
      <FooterInfoContainer>
        <p>더굿즈는 통신판매중개자이며 통신판매의 당사자가 아닙니다.</p>
        <p>
          개별 판매자가 등록하여 판매한 모든 상품에 대한 거래 정보 및 거래에
          대한 책임은 각 판매자가 부담하고, 이에 대하여 더굿즈는 일체 책임지지
          않습니다.
        </p>
        <p>Copyright&copy;2024-2024 THEGOODs Inc. All rights reserved.</p>
      </FooterInfoContainer>
    </>
  );
};

export default BaseFooter;
