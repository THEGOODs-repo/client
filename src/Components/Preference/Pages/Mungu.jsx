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
    { name: "다꾸스티커", img: "https://ifh.cc/g/K5zJro.png" },
    { name: "문구세트", img: "https://ifh.cc/g/HqqN9G.png" },
    { name: "책갈피", img: "https://ifh.cc/g/JZzM6W.png" },
    { name: "6공다이어리", img: "https://ifh.cc/g/qbyR8s.png" },
    { name: "연필뚜껑", img: "https://ifh.cc/g/kwMSBP.png" },
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
      name: "다꾸다꾸",
      profile: "https://ifh.cc/g/rtpbhv.png",
      introduce:
        "안녕하세요!!! 다이어리 꾸미기 할 수 있는 모든 굿즈 팔고 있어요!!!><",
      mainImg1: "https://ifh.cc/g/cG14h4.png",
      mainImg2: "https://ifh.cc/g/Q0ttsK.png",
    },
    {
      name: "세종대왕",
      profile: "https://ifh.cc/g/1v4aWb.png",
      introduce: "순우리말 굿즈 팝니다. 한글 사랑하세요.",
      mainImg1: "https://ifh.cc/g/NyLY1s.png",
      mainImg2: "https://ifh.cc/g/RWJ2WM.png",
    },
    {
      name: "형 저 광팬이에요",
      profile: "https://ifh.cc/g/ac2vMf.png",
      introduce: "형광펜을 사랑해요.",
      mainImg1: "https://ifh.cc/g/ZDrLvG.png",
      mainImg2: "https://ifh.cc/g/NyrhzD.png",
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
      name: "곰돌이 메모지",
      img: "https://ifh.cc/g/yD77LR.png",
    },

    {
      name: "커스텀 문진",
      img: "https://ifh.cc/g/XnBgGr.png",
    },
    {
      name: "금속 책갈피",
      img: "https://ifh.cc/g/kfHxjS.png",
    },
    {
      name: "미니 빗자루 세트",
      img: "https://ifh.cc/g/P4GYKh.png",
    },
    {
      name: "동물 발자국 스탬프",
      img: "https://ifh.cc/g/9m21ly.pngg",
    },
    {
      name: "네임 형광펜",
      img: "https://ifh.cc/g/YYhtkn.png",
    },
    {
      name: "5웨이 컬러펜",
      img: "https://ifh.cc/g/Arw9RM.png",
    },
    {
      name: "비비드 지우개",
      img: "https://ifh.cc/g/xtz9RG.png",
    },
    {
      name: "손모양 이름 스탬프",
      img: "https://ifh.cc/g/SAahzZ.png",
    },
    {
      name: "초록 골덴 필통",
      img: "https://ifh.cc/g/mP6yXs.png",
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
    { name: "컬러펜" },
    { name: "지우개" },
    { name: "필통" },
    { name: "스탬프" },
    { name: "문진" },
    { name: "책갈피" },
    { name: "6공다이어리" },
    { name: "메모지" },
  ];

  return sampleList.map((Tag, index) => (
    <PreferenceTag key={index} index={index + 0} name={Tag.name} />
  ));
};

export default function PreferenceMungu() {
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
        <h1>문구</h1>
        <h2>
          상품으로는 스티커, 다이어리, 책갈피 등이 있습니다. 문구 카테고리는
          문구의 다양한 상품들을 모두 모아둔 곳입니다. 문구는 다꾸, 문구세트,
          형광펜과 같은 다양한 상품이 있습니다. 상품으로는 스티커, 다이어리,
          책갈피 등이 있습니다. 문구 카테고리는 문구의 다양한 상품들을 모두
          모아둔 곳입니다. 문구는 다꾸, 문구세트, 형광펜과 같은 다양한 상품이
          있습니다.
        </h2>

        <h3>문구 인기 상품으로 키워드 찾아보기</h3>
        <div
          style={{ display: "flex", flexDirection: "row", cursor: "pointer" }}
        >
          <Sample1 />
        </div>

        <h3>문구 상품을 판매하는 인기 사장님 찾아보기</h3>
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

        <h3>한 달 전 오늘, 가장 많이 판매된 문구 상품 TOP 10</h3>
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
            gap: "8px",
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
