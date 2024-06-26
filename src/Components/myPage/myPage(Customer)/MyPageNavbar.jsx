import styled from "styled-components";
import { NavLink } from "react-router-dom";
import HamsterImage from "../../../img/Hamster.png";
import Switch from "../../../img/Switch.png";

export default function MyPageNavbar() {
  return (
    <NavbarContainer>
      <ProfileContainer>
        <Img1
          style={{
            background: `url(${HamsterImage}) center/cover`,
          }}
        />
        <h1>햄스터</h1>
      </ProfileContainer>

      <ListContainer>
        <h1>내 정보</h1>
        <LinkPage
          to="/mypage/EditProfile"
          style={({ isActive }) => ({
            color: isActive ? "#f0c920" : "black",
          })}
        >
          <h2>프로필 수정</h2>
        </LinkPage>
        <hr />
        <h1>구매 관리</h1>
        <LinkPage>
          <h2>주문 내역</h2>
        </LinkPage>
        <LinkPage to="/mypage/ManageShippingRefund">
          <h2>배송 환불관리</h2>
        </LinkPage>
        <LinkPage>
          <h2>내가 쓴 후기</h2>
        </LinkPage>
        <hr />

        <h1>판매 관리</h1>
        <LinkPage to="/mypageSeller/ManagePurchase">
          <h2>전체 (0)</h2>
        </LinkPage>
        <LinkPage>
          <h2>판매 중 (0)</h2>
        </LinkPage>
        <LinkPage>
          <h2>판매 중지 (0)</h2>
        </LinkPage>
        <LinkPage>
          <h2>반품 신청 (0)</h2>
        </LinkPage>
        <LinkPage>
          <h2>상품 등록</h2>
        </LinkPage>
          <LinkPage>
          <h2>회사 인증</h2>
        </LinkPage>
        <LinkPage>
          <h2>내가 받은 후기</h2>
        </LinkPage>
        <hr />


        <h1>계정 설정</h1>

        <LinkPage to="/mypage/NotificationSettings">
          <h2>알림 설정</h2>
        </LinkPage>
        <LinkPage to="/mypage/PasswordChange">
          <h2>비밀번호 변경</h2>
        </LinkPage>
        <LinkPage to="/mypage/MemberWithdrawal">
          <h2>회원 탈퇴</h2>
        </LinkPage>
        <hr />


        <h1>도움 센터</h1>

        <LinkPage>
          <h2>공지사항</h2>
        </LinkPage>
        <LinkPage>
          <h2>이벤트</h2>
        </LinkPage>
      </ListContainer>
    </NavbarContainer>
  );
}

export const NavbarContainer = styled.div`
  flex-direction: row;
  width: 247.5px;
  height: 950px;
  border-top: 2.475px solid rgba(0, 0, 0, 0.05);
  border-bottom: 2.475px solid rgba(0, 0, 0, 0.05);
  border-left: 2.475px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.825px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-align : center;

  width: 244.5px;
  height: 231px;
  padding-bottom: 0px;
  padding-top: 12.375%;
  border: 2.475px solid #f0c920;
  border-radius: 1.65px;
  text-align: center;

  h1 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16.5px;
    line-height: 22.275px;
    color: #000000;
  }

  h3 {
    text-align: center;
    position: absolute;
    width: 36.3px;
    height: 18.15px;
    padding-top: 3.75px;
    margin-left: 74.25px;
    border-radius: 3.75px;
    background-color: #f0c920;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 9.9px;
    line-height: 13.2px;
    color: #ffffff;
  }
`;

export const Img1 = styled.div`
  display: flex;
  width: 119.25px;
  height: 119.25px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const Img2 = styled.div`
  display: flex;
  width: 14.85px;
  height: 12.375px;
  margin: 0;
`;

export const SwitchBtn = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 148.5px;
  height: 33px;
  text-decoration: none;
  background-color: #ffffff;
  border: 1px solid rgba(156, 156, 156, 0.5);
  border-radius: 16.5px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 11.55px;
  line-height: 13.2px;
  color: #202123;
`;

export const ListContainer = styled.div`
  width: 234.375px;
  height: 526.575px;
  padding-left: 2.8875%;
  padding-top: 14.025px;
  h1 {
    padding-left: 4.125%;
    margin-top: 9.9px;
    margin-bottom: 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14.85px;
    line-height: 12.375px;
    color: #202123;
  }

  hr {
    width: 204.6px;
    height: 0px;
    border: 1px solid rgba(156, 156, 156, 0.5);
    margin-top: 0px;
    margin-bottom: 16.5px;
    margin-left: 11.3625px;
  }
`;

export const LinkPage = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin: 4.125px;

  h2 {
    padding-left: 4.125%;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 13.2px;
    line-height: 0.35;
    color: #202123;

    &:hover {
      padding-left: 4.125%;
      margin: 0px;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 13.2px;
      color: #f0c920;
    }

    &.active {
      color: #f0c920;
    }
  }
`;
