import styled from "styled-components";
import { useSelector } from "react-redux";
import PreferenceProduct from "./Pre_Product";
import PreferenceSeller from "./Pre_Seller";
import PreferenceTop10 from "./Pre_Top10";
import PreferenceTag from "./Pre_Tag";
import { useEffect, useState } from "react";

const Sample1 = () => {
  const sampleList = [
    { name: "차은우", img: "https://ifh.cc/g/k9sFhs.png" },
    { name: "아이유", img: "https://ifh.cc/g/sbymR1.png" },
    { name: "장원영", img: "https://ifh.cc/g/vClyqr.png" },
    { name: "RIZE", img: "https://ifh.cc/g/fncJ4M.png" },
    { name: "aespa", img: "https://ifh.cc/g/fncJ4M.png" },
  ];

  return sampleList.map((item, index) => (
    <PreferenceProduct
      key={index}
      index={index + 0}
      name={item.name}
      img={item.img}
    />
  ));
};

const Sample2 = () => {
  const sampleList = [
    {
      name: "마이샵",
      profile: "https://ifh.cc/g/gAhYCX.png",
      introduce: "안녕하세요. 에스파 위주로 굿즈 팝니다 ~ 구경하고 가세요.",
      mainImg1: "https://ifh.cc/g/TnjV5N.png",
      mainImg2: "https://ifh.cc/g/1GqOq1.png",
    },
    {
      name: "시즈니",
      profile: "https://ifh.cc/g/M1TgZB.png",
      introduce: "시즈니 다 모이세요.",
      mainImg1: "https://ifh.cc/g/nbFkxZ.png",
      mainImg2: "https://ifh.cc/g/OJXstW.png",
    },
    {
      name: "블링크",
      profile: "https://ifh.cc/g/yfwMNG.png",
      introduce: "블랙핑크를 사랑해요.",
      mainImg1: "https://ifh.cc/g/GtSDdb.png",
      mainImg2: "https://ifh.cc/g/9Ddknh.png",
    },
  ];

  return sampleList.map((seller, index) => (
    <PreferenceSeller
      key={index}
      index={index + 0}
      name={seller.name}
      profile={seller.profile}
      mainImg1={seller.mainImg1}
      mainImg2={seller.mainImg2}
      introduce={seller.introduce}
    />
  ));
};

const Sample3 = () => {
  const sampleList = [
    { name: "뉴진스 ID Card", img: "https://ifh.cc/g/TNJHqQ.png" },
    {
      name: "뉴진스 ID Card",
      img: "https://ifh.cc/g/TNJHqQ.png",
    },
    {
      name: "뉴진스 ID Card",
      img: "https://ifh.cc/g/TNJHqQ.png",
    },
    {
      name: "뉴진스 ID Card",
      img: "https://ifh.cc/g/TNJHqQ.png",
    },
    {
      name: "뉴진스 ID Card",
      img: "https://ifh.cc/g/TNJHqQ.png",
    },
    {
      name: "뉴진스 ID Card",
      img: "https://ifh.cc/g/TNJHqQ.png",
    },
    {
      name: "뉴진스 ID Card",
      img: "https://ifh.cc/g/TNJHqQ.png",
    },
    {
      name: "뉴진스 ID Card",
      img: "https://ifh.cc/g/TNJHqQ.png",
    },
    {
      name: "뉴진스 ID Card",
      img: "https://ifh.cc/g/TNJHqQ.png",
    },
    {
      name: "뉴진스 ID Card",
      img: "https://ifh.cc/g/TNJHqQ.png",
    },
  ];

  return sampleList.map((Top10, index) => (
    <PreferenceTop10
      key={index}
      index={index + 1}
      name={Top10.name}
      img={Top10.img}
    />
  ));
};

const Sample4 = () => {
  const sampleList = [
    { name: "라이즈" },
    { name: "에스파" },
    { name: "아이들" },
    { name: "아이유" },
    { name: "블랙핑크" },
    { name: "엔시티" },
    { name: "투모로우바이투게더" },
    { name: "라이즈" },
  ];

  return sampleList.map((Tag, index) => (
    <PreferenceTag key={index} index={index + 0} name={Tag.name} />
  ));
};

export default function PreferenceComponent() {
  const [click, setClick] = useState(false);
  const preference = useSelector((state) => state.preference);

  useEffect(() => {
    const checkPreference = () => {
      if (
        preference.product.product ||
        preference.seller.product ||
        preference.top10.product ||
        preference.tag.product === true
      ) {
        setClick(true);
      } else {
        setClick(false);
      }
    };

    checkPreference();
  }, [preference]);

  return (
    <PreferenceContainer>
      <h1>아이돌</h1>
      <h2>
        상품으로는 키링, 포카, 앨범 등이 있습니다. 아이돌 카테고리는 아이돌의
        다양한 상품들을 모두 모아둔 곳입니다. 아이돌은 뉴진스, 아이브, NCT와
        같은 다양한 아이돌들이 속해있으며 상품으로는 키링, 포카, 앨범 등이
        있습니다.아이돌 카테고리는 아이돌의 다양한 상품들을 모두 모아둔
        곳입니다. 아이돌은 뉴진스, 아이브, NCT와 같은 다양한 아이돌들이
        속해있으며 상품으로는 키링, 포카, 앨범 등이 있습니다.
      </h2>

      <h3>아이돌 인기 상품으로 키워드 찾아보기</h3>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sample1 />
      </div>

      <h3>아이돌 판매하는 인기 사장님 찾아보기</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0px",
          gap: "20px",
        }}
      >
        <Sample2 />
      </div>

      <h3>한 달 전 오늘, 가장 많이 판매된 아이돌 상품 TOP 10</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
          flexDirection: "row",
          margin: "0px",
        }}
      >
        <Sample3 />
      </div>

      <h3>이번주 가장 많이 검색된 태그 살펴보기</h3>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "row",
          margin: "0px",
        }}
      >
        <Sample4 />
      </div>

      <Button disabled={!click}>제출하기</Button>
    </PreferenceContainer>
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
    margin-top: 100px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
    color: #000000;
  }
`;

const Button = styled.button`
  width: 185px;
  height: 75px;
  margin-top: 100px;
  background: #f0c920;
  border: none;
  border-radius: 40px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;

  &:disabled {
    background: rgba(156, 156, 156, 0.4);
    color: #9c9c9c;
  }
`;
