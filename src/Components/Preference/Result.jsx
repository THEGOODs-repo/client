import styled from "styled-components";
import { useEffect, useState } from "react";
import Result from "../../img/결과.png";
import HeaderComponent from "../Header/Header";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import NavigationCategoryMenu from "../NavigationMenu/NavigationCategoryMenu";

export default function PreferenceResult() {
  //카카오톡 공유하기는 사이트가 배포가 되어있는 상태에서 가능함.

  const [url, setUrl] = useState(window.location.href);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    alert("URL이 복사되었습니다!");
  };

  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  };

  return (
    <>
      <ScrollToTop />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <HeaderComponent />
        <NavigationMenu />
        <NavigationCategoryMenu />
      </div>
      <PreferenceContainer>
        <h1>선호도 조사에서 가장 많이 선택된 태그 1위는?</h1>
        <TagContainer>
          <h5>#라이즈</h5>
        </TagContainer>
        <h3>또 무슨 태그가 많이 선택되었을까?</h3>
        <Img />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button onClick={copyToClipboard}>결과 공유하기</Button>
          <Button>상품 구매하기</Button>
        </div>
      </PreferenceContainer>
    </>
  );
}

const PreferenceContainer = styled.div`
  display: flex;
  /* width: 1920px;
  margin-left: 25%; */
  flex-direction: column;
  align-items: center;
  height: 3300px;

  h1 {
    margin-bottom: 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 48px;
    color: #000000;
  }

  h2 {
    width: 838px;
    height: 101px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }

  h3 {
    margin-top: 15px;
    margin-bottom: 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #000000;
  }
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h5 {
    margin-top: 12px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 61px;
    color: #f0c920;
  }
`;

const Button = styled.button`
  width: 168px;
  height: 59px;
  margin-top: 30px;
  margin-right: 30px;
  background: #52555b;
  border-radius: 10px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
`;

const Img = styled.div`
  width: 662px;
  height: 901px;
  background: url(${Result}) no-repeat center center;
  background-size: cover;
`;
