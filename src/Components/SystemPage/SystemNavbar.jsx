import styled from "styled-components";
import { NavLink } from "react-router-dom";
import HamsterImage from "../../img/Hamster.png";

export default function SystemNavbar() {
  return (
    <NavbarContainer>
      <ProfileContainer>
        <Img1
          style={{
            background: `url(${HamsterImage}) center/cover`,
          }}
        />
        <h1>운영자</h1>
      </ProfileContainer>

      <ListContainer>
        <h1>내 정보</h1>
        <LinkPage
          to="/systemPage/editNickname"
          style={({ isActive }) => ({
            color: isActive ? "#f0c920" : "black",
          })}
        >
          <h2>운영자 정보</h2>
        </LinkPage>
        <hr />
        <h1>게시판</h1>
        <LinkPage to="/systemPage/postManage">
          <h2>게시판 관리</h2>
        </LinkPage>
        <LinkPage to="/systemPage/postRegister">
          <h2>게시물 등록</h2>
        </LinkPage>
        <hr />
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
  justify-align: center;

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
