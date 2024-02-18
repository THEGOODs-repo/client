import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetPreference } from "../../../redux/preferenceSlice";
import PreferenceProduct from "../Component/Pre_Product";
import PreferenceSeller from "../Component/Pre_Seller";
import PreferenceTop10 from "../Component/Pre_Top10";
import PreferenceTag from "../Component/Pre_Tag";
import HeaderComponent from "../../Header/Header";
import NavigationMenu from "../../NavigationMenu/NavigationMenu";
import NavigationCategoryMenu from "../../NavigationMenu/NavigationCategoryMenu";
import { useEffect, useState } from "react";

const Sample1 = () => {
  const sampleList = [
    { name: "딸기", img: "https://ifh.cc/g/rNjm3C.png" },
    { name: "파스타", img: "https://ifh.cc/g/Kt4xBz.png" },
    { name: "방울토마토", img: "https://ifh.cc/g/SzC0Gm.png" },
    { name: "칼국수", img: "https://ifh.cc/g/tq3Ya7.png" },
    { name: "식단도시락", img: "https://ifh.cc/g/KoO2Aw.png" },
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
      name: "다이어터",
      profile: "https://ifh.cc/g/Vymzrr.png",
      introduce: "안녕하세요. 다이어터 식품 팝니다 ~ 구경하고 가세요.",
      mainImg1: "https://ifh.cc/g/Cfh7A4.png",
      mainImg2: "https://ifh.cc/g/hcXnY5.png",
    },
    {
      name: "스님",
      profile: "https://ifh.cc/g/QOS9vs.png",
      introduce: "비건 식품 팝니다. ^^",
      mainImg1: "https://ifh.cc/g/aBYFHy.png",
      mainImg2: "https://ifh.cc/g/g9znZZ.png",
    },
    {
      name: "뽀로로",
      profile: "https://ifh.cc/g/cFhtNj.png",
      introduce: "생선 팔아요~",
      mainImg1: "https://ifh.cc/g/az8GHz.png",
      mainImg2: "https://ifh.cc/g/Cks7GR.png",
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
    {
      name: "치마살 구이용",
      img: "https://ifh.cc/g/hQDm6g.png",
    },
    {
      name: "춘천 닭갈비",
      img: "https://ifh.cc/g/nNDpKc.png",
    },
    {
      name: "와규 함박 스테이크",
      img: "https://ifh.cc/g/NvxOVA.png",
    },
    {
      name: "완숙토마토",
      img: "https://ifh.cc/g/hVMAxT.png",
    },
    {
      name: "통 닭가슴살",
      img: "https://ifh.cc/g/Hpw5VD.png",
    },
    {
      name: "치킨 파우더",
      img: "https://ifh.cc/g/vzPbcx.png",
    },
    {
      name: "아기 떡뻥",
      img: "https://ifh.cc/g/Q5x37O.png",
    },
    {
      name: "호박고구마",
      img: "https://ifh.cc/g/4lSR3A.png",
    },
    {
      name: "하트 떡국떡",
      img: "https://ifh.cc/g/2OzhR3.png",
    },
    {
      name: "커피 드립백",
      img: "https://ifh.cc/g/bH9oCC.png",
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
    { name: "커피" },
    { name: "간식" },
    { name: "식사" },
    { name: "밀키트" },
    { name: "과일" },
    { name: "초콜릿" },
    { name: "안심 스테이크" },
    { name: "소고기" },
  ];

  return sampleList.map((Tag, index) => (
    <PreferenceTag key={index} index={index + 0} name={Tag.name} />
  ));
};

export default function PreferenceFood() {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const product = useSelector((state) => state.preference.product);
  const seller = useSelector((state) => state.preference.seller);
  const top10 = useSelector((state) => state.preference.top10);
  const tag = useSelector((state) => state.preference.tag);

  // 페이지가 로드될 때마다 Redux 상태를 초기화합니다.
  useEffect(() => {
    dispatch(resetPreference());
  }, [dispatch]);

  useEffect(() => {
    const checkPreference = () => {
      if ((product || seller || top10 || tag) >= 1) {
        setClick(true);
      } else {
        setClick(false);
      }
    };

    checkPreference();
  });

  return (
    <>
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
        <h1>식품</h1>
        <h2>
          상품으로는 딸기, 샐러드, 닭갈비 등이 있습니다. 식품 카테고리는 식품의
          다양한 상품들을 모두 모아둔 곳입니다. 식품은 한식, 일식, 양식과 같은
          다양한 종류가 있습니다. 상품으로는 딸기, 샐러드, 닭갈비 등이 있습니다.
          식품 카테고리는 식품의 다양한 상품들을 모두 모아둔 곳입니다. 식품은
          한식, 일식, 양식과 같은 다양한 종류가 있습니다.
        </h2>

        <h3>식품 인기 상품으로 키워드 찾아보기</h3>
        <div
          style={{ display: "flex", flexDirection: "row", cursor: "pointer" }}
        >
          <Sample1 />
        </div>

        <h3>식품 상품을 판매하는 인기 사장님 찾아보기</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "0px",
            gap: "18px",
            cursor: "pointer",
          }}
        >
          <Sample2 />
        </div>

        <h3>한 달 전 오늘, 가장 많이 판매된 식품 상품 TOP 10</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "7px",
            flexDirection: "row",
            margin: "0px",
            cursor: "pointer",
          }}
        >
          <Sample3 />
        </div>

        <h3>이번주 가장 많이 검색된 태그 살펴보기</h3>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexDirection: "row",
            margin: "0px",
            cursor: "pointer",
          }}
        >
          <Sample4 />
        </div>
        <Link to="/preference/result">
          <Button disabled={!click}>제출하기</Button>
        </Link>
      </PreferenceContainer>
    </>
  );
}

const PreferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;

  h1,
  h3 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    color: #000;
  }

  h1 {
    margin-bottom: 0;
    font-size: 28px;
    line-height: 38px;
  }

  h2 {
    width: 670px;
    height: 81px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #000;
  }

  h3 {
    margin-top: 80px;
    font-size: 24px;
    line-height: 33px;
  }
`;

const Button = styled.button`
  width: 148px;
  height: 60px;
  margin-top: 50px;
  background: #f0c920;
  border: none;
  border-radius: 32px;
  text-decoration: none;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #fff;
  cursor: pointer;

  &:disabled {
    background: rgba(156, 156, 156, 0.4);
    color: #9c9c9c;
  }
`;
