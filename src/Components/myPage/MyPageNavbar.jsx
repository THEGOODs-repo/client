import styled from "styled-components";
import { NavLink } from "react-router-dom";
import HamsterImage from "../../img/Hamster.png";
import Switch from "../../img/Switch.png";

export default function MyPageNavbar() {
  return (
    <NavbarContainer>
      <ProfileContainer>
        <h3>고객님</h3>
        <Img1
          style={{
            background: `url(${HamsterImage}) center/cover`,
          }}
        />
        <h1>햄스터</h1>
        <SwitchBtn to="/mypageSeller/EditProfile">
          <Img2
            style={{
              background: `url(${Switch}) center/cover`,
            }}
          />
          사장님으로 전환
        </SwitchBtn>
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
        <LinkPage to="/mypage/ManagePurchase">
          <h2>구매 관리</h2>
        </LinkPage>
        <LinkPage to="/mypage/ManageShippingRefund">
          <h2>배송 환불관리</h2>
        </LinkPage>
        <LinkPage to="/mypage/CustomizedInformation">
          <h2>맞춤 정보 관리</h2>
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

        <h1>나의 구매 후기</h1>

        <LinkPage to="/mypage/MyReview">
          <h2>내가 쓴 후기</h2>
        </LinkPage>
        <hr />

        <h1>도움 센터</h1>

        <LinkPage to="/Report">
          <h2>신고하기</h2>
        </LinkPage>
        <LinkPage to="/Report_Details">
          <h2>신고내역</h2>
        </LinkPage>
        <LinkPage to="/Notice">
          <h2>공지사항</h2>
        </LinkPage>
        <LinkPage to="/Event">
          <h2>이벤트</h2>
        </LinkPage>
      </ListContainer>
    </NavbarContainer>
  );
}

export const NavbarContainer = styled.div`
  flex-direction: row;
  width: 300px;
  height: 972px;
  border-top: 3px solid rgba(0, 0, 0, 0.05);
  border-bottom: 3px solid rgba(0, 0, 0, 0.05);
  border-left: 3px solid rgba(0, 0, 0, 0.05);
  border-radius: 1px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 296px;
  height: 280px;
  padding-bottom: 0px;
  padding-top: 15%;
  border: 3px solid #f0c920;
  border-radius: 2px;
  text-align: center;

  h1 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;

    color: #000000;
  }

  h3 {
    position: absolute;
    width: 44px;
    height: 22px;
    padding-top: 3px;
    margin-left: 90px;
    border-radius: 5px;

    background-color: #f0c920;

    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
  }
`;

export const Img1 = styled.div`
  display: flex;
  width: 145px;
  height: 145px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const Img2 = styled.div`
  display: flex;
  width: 18px;
  height: 15px;
  margin: 0;
`;

export const SwitchBtn = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 40px;
  text-decoration: none;
  background-color: #ffffff;
  border: 1px solid rgba(156, 156, 156, 0.5);
  border-radius: 20px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #202123;
`;

export const ListContainer = styled.div`
  flex-direction: row;
  width: 285px;
  height: 639px;
  padding-top: 5%;
  padding-left: 3.5%; /* 카테고리 */

  h1 {
    padding-left: 5%;
    padding-top: 3%;
    margin: 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 15px;
    color: #202123;
  }

  hr {
    width: 240px;
    height: 0px;
    border: 1px solid rgba(156, 156, 156, 0.5);
  }
`;

export const LinkPage = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin: 5px;

  h2 {
    padding-left: 5%;
    margin: 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 0.7;
    color: #202123;

    &:hover {
      padding-left: 5%;
      margin: 0px;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      color: #f0c920;
    }

    &.active {
      color: #f0c920;
    }
  }
`;
