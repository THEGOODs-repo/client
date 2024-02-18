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
    { name: "캘리그라피", img: "https://ifh.cc/g/LwqVCp.png" },
    { name: "캔들", img: "https://ifh.cc/g/hpF6NJ.png" },
    { name: "손뜨개", img: "https://ifh.cc/g/Vb6vSa.png" },
    { name: "그립톡", img: "https://ifh.cc/g/QOQd65.png" },
    { name: "커스텀", img: "https://ifh.cc/g/cXzVOw.png" },
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
      name: "파티광",
      profile: "https://ifh.cc/g/FSfaYf.png",
      introduce: "안녕하세요. 파티용품 위주로 팝니다~ 구경하고 가세요.",
      mainImg1: "https://ifh.cc/g/Z48tXT.png",
      mainImg2: "https://ifh.cc/g/B4zHnA.png",
    },
    {
      name: "성냥팔이소녀",
      profile: "https://ifh.cc/g/Anjh88.png",
      introduce: "캔들 전문샵 *^^*",
      mainImg1: "https://ifh.cc/g/nOCoST.png",
      mainImg2: "https://ifh.cc/g/bQxY1W.png",
    },
    {
      name: "마녀",
      profile: "https://ifh.cc/g/VHABx6.png",
      introduce: "가짜 손톰 팔아요.",
      mainImg1: "https://ifh.cc/g/QpzDP1.png",
      mainImg2: "https://ifh.cc/g/OWQQFA.png",
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
    { name: "사진 그립톡", img: "https://ifh.cc/g/mAMpwo.png" },
    {
      name: "오브제 캔들",
      img: "https://ifh.cc/g/d2QDlc.png",
    },
    {
      name: "기념일 캘리그라피",
      img: "https://ifh.cc/g/GNkft7.png",
    },
    {
      name: "대왕 리본 인간 화환",
      img: "https://ifh.cc/g/L0hLsz.png",
    },
    {
      name: "문라이트 네일",
      img: "https://ifh.cc/g/KldAxp.png",
    },
    {
      name: "블루 리본 네일",
      img: "https://ifh.cc/g/K50G3M.png",
    },
    {
      name: "포토 자석",
      img: "https://ifh.cc/g/PNcFg4.png",
    },
    {
      name: "케이크 캔들",
      img: "https://ifh.cc/g/y9NnZT.png",
    },
    {
      name: "레터링 와인잔",
      img: "https://ifh.cc/g/X9hqMr.png",
    },
    {
      name: "미니어처 화로",
      img: "https://ifh.cc/g/w9zdZa.png",
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
    { name: "캔들" },
    { name: "네일" },
    { name: "레터링" },
    { name: "그립톡" },
    { name: "미니어처" },
    { name: "오브제" },
    { name: "캘리그라피" },
    { name: "자석" },
  ];

  return sampleList.map((Tag, index) => (
    <PreferenceTag key={index} index={index + 0} name={Tag.name} />
  ));
};

export default function PreferenceCreate() {
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
        <h1>창작</h1>
        <h2>
          상품으로는 캔들, 그립톡, 네일 등이 있습니다. 창작 카테고리는 창작의
          다양한 상품들을 모두 모아둔 곳입니다. 창작은 손뜨개, 캘리그라피와 같은
          다양한 종류가 있습니다. 상품으로는 캔들, 그립톡, 네일 등이 있습니다.
          창작 카테고리는 창작의 다양한 상품들을 모두 모아둔 곳입니다. 창작은
          손뜨개, 캘리그라피와 같은 다양한 종류가 있습니다.
        </h2>

        <h3>창작 인기 상품으로 키워드 찾아보기</h3>
        <div
          style={{ display: "flex", flexDirection: "row", cursor: "pointer" }}
        >
          <Sample1 />
        </div>

        <h3>창작 상품을 판매하는 인기 사장님 찾아보기</h3>
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

        <h3>한 달 전 오늘, 가장 많이 판매된 창작 상품 TOP 10</h3>
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
