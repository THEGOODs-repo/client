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
    { name: "자켓", img: "https://ifh.cc/g/A6rJ3h.png" },
    { name: "니트", img: "https://ifh.cc/g/7VLL8D.png" },
    { name: "운동화", img: "https://ifh.cc/g/AwaOrn.png" },
    { name: "백팩", img: "https://ifh.cc/g/gx167T.png" },
    { name: "지갑", img: "https://ifh.cc/g/FZyA17.png" },
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
      name: "아디다스",
      profile: "https://ifh.cc/g/OPQP46.png",
      introduce: "아디다스 공식 스토어입니다.",
      mainImg1: "https://ifh.cc/g/jfONg1.png",
      mainImg2: "https://ifh.cc/g/kRl3zB.png",
    },
    {
      name: "뉴진스",
      profile: "https://ifh.cc/g/DK2lCr.png",
      introduce: "정바지 팝니다.",
      mainImg1: "https://ifh.cc/g/sm38X9.png",
      mainImg2: "https://ifh.cc/g/ZawPts.png",
    },
    {
      name: "오늘날씨맑음",
      profile: "https://ifh.cc/g/SM6sYV.png",
      introduce: "우산만 팔아요.",
      mainImg1: "https://ifh.cc/g/kPBpyt.png",
      mainImg2: "https://ifh.cc/g/KRsmS4.png",
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
      name: "그린 우산",
      img: "https://ifh.cc/g/TGFGQq.png",
    },
    {
      name: "빈티지 볼캡",
      img: "https://ifh.cc/g/RNmp6k.png",
    },
    {
      name: "발목 양말",
      img: "https://ifh.cc/g/nl6RWJ.png",
    },
    {
      name: "브이넥 니트",
      img: "https://ifh.cc/g/WkvTVs.png",
    },
    {
      name: "레그워머",
      img: "https://ifh.cc/g/fd8C28.png",
    },
    {
      name: "로즈 머플러",
      img: "https://ifh.cc/g/SwvR2m.png",
    },
    {
      name: "브라운 자켓",
      img: "https://ifh.cc/g/YdyRvS.png",
    },
    {
      name: "블랙 백팩",
      img: "https://ifh.cc/g/qLfo5G.png",
    },
    {
      name: "그린 가디건",
      img: "https://ifh.cc/g/8R4AHT.png",
    },
    {
      name: "핀턱 와이드 팬츠",
      img: "https://ifh.cc/g/wSLtCQ.png",
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
    { name: "집업" },
    { name: "가디건" },
    { name: "볼캡" },
    { name: "레그워머" },
    { name: "자켓" },
    { name: "머플러" },
    { name: "트위트 자켓" },
    { name: "가방" },
  ];

  return sampleList.map((Tag, index) => (
    <PreferenceTag key={index} index={index + 0} name={Tag.name} />
  ));
};

export default function PreferenceFashion() {
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
        <h1>패션</h1>
        <h2>
          상품으로는 가방, 자켓, 지갑 등이 있습니다. 패션 카테고리는 패션의
          다양한 상품들을 모두 모아둔 곳입니다. 패션은 니트, 가죽자켓, 청바지와
          같은 다양한 상품들이 있습니다. 상품으로는 가방, 자켓, 지갑 등이
          있습니다. 패션 카테고리는 패션의 다양한 상품들을 모두 모아둔 곳입니다.
          패션은 니트, 가죽자켓, 청바지와 같은 다양한 상품들이 있습니다.
        </h2>

        <h3>패션 인기 상품으로 키워드 찾아보기</h3>
        <div
          style={{ display: "flex", flexDirection: "row", cursor: "pointer" }}
        >
          <Sample1 />
        </div>

        <h3>패션 상품을 판매하는 인기 사장님 찾아보기</h3>
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

        <h3>한 달 전 오늘, 가장 많이 판매된 패션 상품 TOP 10</h3>
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
