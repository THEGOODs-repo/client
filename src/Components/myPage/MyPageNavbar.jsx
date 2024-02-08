import styled from "styled-components";
import { Link } from "react-router-dom";
import HamsterImage from "../../img/Hamster.png";

export default function MyPageNavbar() {
  return (
    <NavbarContainer>
      <ProfileContainer>
        <Img alt="No Image" />
        <h1>햄스터</h1>
        <Button>사장님으로 전환</Button>
      </ProfileContainer>

      <ListContainer>
        <h1>내 정보</h1>

        <LinkPage to="/mypage/EditProfile">
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

        <LinkPage to="/mypage/Review">
          <h2>내가 쓴 후기</h2>
        </LinkPage>
        <hr />

        <h1>도움 센터</h1>

        <LinkPage to="/mypage/Report">
          <h2>신고하기</h2>
        </LinkPage>
        <LinkPage to="/mypage/Report_Details">
          <h2>신고내역</h2>
        </LinkPage>
        <LinkPage to="/Notice">
          <h2>공지사항</h2>
        </LinkPage>
        <LinkPage to="/Event">
          <h2>이벤트</h2>
        </LinkPage>
        <hr />
      </ListContainer>
    </NavbarContainer>
  );
}

export const NavbarContainer = styled.div`
  flex-direction: row;
  width: 30vw;
  height: 97.2vh;
  padding: 20px;
  border-right: 1px solid gray;
  margin: 3%;
`;

export const ProfileContainer = styled.div`
  width: 30vw;
  height: 33.3vh;
  text-align: center;

  h1 {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-size: 20px;
    font-weight: 700;
    color: #000000;
  }
`;

export const Img = styled.img`
  display: flex;
  width: 14.5vw;
  height: 14.5vh;
  background-image: url(${ HamsterImage }); /* 수정된 부분 */
  background-size: cover; /* 배경 이미지 크기 조정 */
  border-radius: 50%;
  margin: 0 auto;
`;

export const Button = styled.button`
  width: 18vw;
  height: 4vh;
  border-radius: 20px;
`;

export const ListContainer = styled.div`
  flex-direction: row;
  width: 30vw;
  height: 63.9vh;

  h1 {
    font-size: 18px;
    font-weight: bolder;
    margin: 0px;
  }

  h2 {
    font-size: 15px;
    margin: 0px;
    color: black;

    &:hover {
      color: #f0c920;
    }
  }
`;

export const LinkPage = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 5px;
`;
