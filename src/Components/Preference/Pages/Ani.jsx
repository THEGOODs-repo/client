import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PreferenceProduct from "../Component/Pre_Product";
import PreferenceSeller from "../Component/Pre_Seller";
import PreferenceTop10 from "../Component/Pre_Top10";
import PreferenceTag from "../Component/Pre_Tag";
import { useEffect, useState } from "react";

const Sample1 = () => {
  const sampleList = [
    { name: "도쿄 리벤져스", img: "https://ifh.cc/g/jtYy4x.png" },
    { name: "토이스토리", img: "https://ifh.cc/g/5dd2Ht.png" },
    { name: "지브리", img: "https://ifh.cc/g/ABskSK.png" },
    { name: "바쿠고", img: "https://ifh.cc/g/xJBxy8.png" },
    { name: "고죠 사토루", img: "https://ifh.cc/g/b9kxaO.png" },
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
      name: "머기업",
      profile: "https://ifh.cc/g/4F47aT.png",
      introduce: "안녕하세요. 디즈니 굿즈 팝니다 ~ 구경하고 가세요.",
      mainImg1: "https://ifh.cc/g/B43lYb.png",
      mainImg2: "https://ifh.cc/g/wPZZ96.png",
    },
    {
      name: "주간 소녀 점프",
      profile: "https://ifh.cc/g/GJkzQg.png",
      introduce: "점프 팬들 다 모이세요.",
      mainImg1: "https://ifh.cc/g/qY6HG9.png",
      mainImg2: "https://ifh.cc/g/o09BJX.png",
    },
    {
      name: "수컷 펭귄",
      profile: "https://ifh.cc/g/fLRTQn.png",
      introduce: "어 안녕.",
      mainImg1: "https://ifh.cc/g/B2wO9B.png",
      mainImg2: "https://ifh.cc/g/bd7NQX.png",
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
      name: "주먹왕 랄프 공식 굿즈",
      img: "https://ifh.cc/g/cGJhAF.png",
    },
    {
      name: "너의 이름은 일러스트",
      img: "https://ifh.cc/g/N5tkHM.png",
    },
    {
      name: "범인은 양파 쿵야",
      img: "https://ifh.cc/g/PAChZV.png",
    },
    {
      name: "무쿠무쿠 스티커",
      img: "https://ifh.cc/g/Yldjgh.png",
    },
    {
      name: "헐크 미국 만화",
      img: "https://ifh.cc/g/WTThG5.png",
    },
    {
      name: "캐치! 티니핑 인형",
      img: "https://ifh.cc/g/N1Rkpk.png",
    },
    {
      name: "주술회전 잡지",
      img: "https://ifh.cc/g/TqJVXC.png",
    },
    {
      name: "가비지 타임 비공굿",
      img: "https://ifh.cc/g/p8aoCT.png",
    },
    {
      name: "토토로 미니인형",
      img: "https://ifh.cc/g/mMYKHV.png",
    },
    {
      name: "사스케 포토카드",
      img: "https://ifh.cc/g/724ocF.png",
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
    { name: "티니핑" },
    { name: "피규어" },
    { name: "잡지" },
    { name: "일러스트" },
    { name: "공식굿즈" },
    { name: "키링" },
    { name: "센과치히로의 행방불명" },
    { name: "원펀맨" },
  ];

  return sampleList.map((Tag, index) => (
    <PreferenceTag key={index} index={index + 0} name={Tag.name} />
  ));
};

export default function PreferenceAni() {
  const [click, setClick] = useState(false);
  const product = useSelector((state) => state.preference.product);
  const seller = useSelector((state) => state.preference.seller);
  const top10 = useSelector((state) => state.preference.top10);
  const tag = useSelector((state) => state.preference.tag);

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
    <PreferenceContainer>
      <h1>애니</h1>
      <h2>
        상품으로는 만화책, 피규어, 자석 등이 있습니다. 애니 카테고리는
        애니메이션의 다양한 상품들을 모두 모아둔 곳입니다. 애니메이션은
        주술회전, 스즈메의 문단속, 아이언맨과 같은 다양한 애니메이션들이
        속해있습니다. 상품으로는 만화책, 피규어, 자석 등이 있습니다. 애니
        카테고리는 애니메이션의 다양한 상품들을 모두 모아둔 곳입니다.
        애니메이션은 주술회전, 스즈메의 문단속, 아이언맨과 같은 다양한
        애니메이션들이 속해있습니다.
      </h2>

      <h3>애니 인기 상품으로 키워드 찾아보기</h3>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sample1 />
      </div>

      <h3>애니 상품을 판매하는 인기 사장님 찾아보기</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0px",
          gap: "18px",
        }}
      >
        <Sample2 />
      </div>

      <h3>한 달 전 오늘, 가장 많이 판매된 애니 상품 TOP 10</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "7px",
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
          gap: "10px",
          flexDirection: "row",
          margin: "0px",
        }}
      >
        <Sample4 />
      </div>
      <Link to="/preference/result">
        <Button disabled={!click}>제출하기</Button>
      </Link>
    </PreferenceContainer>
  );
}

const PreferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 660px;

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

  &:disabled {
    background: rgba(156, 156, 156, 0.4);
    color: #9c9c9c;
  }
`;
