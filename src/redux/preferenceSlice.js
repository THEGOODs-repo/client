import { createSlice } from "@reduxjs/toolkit";
//선호도 조사 슬라이스

const initialState = {
  choice: "",
  product: 0,
  seller: 0,
  top10: 0,
  tag: 0,
};

const preferenceSlice = createSlice({
  name: "preference",
  initialState,
  reducers: {
    //선택한 선호도 조사 카테고리
    choicePreference: (state, action) => {
      state.choice = action.payload;
    },
    // "아이돌 인기 상품"으로 키워드 찾아보기
    increaseProduct: (state, action) => {
      state.product = state.product + action.payload;
    },

    decreaseProduct: (state, action) => {
      state.product = state.product - action.payload;
      console.log(state.product);
    },
    // 아이돌 판매하는 "인기 사장님" 찾아보기
    increaseSeller: (state, action) => {
      state.seller = state.seller + action.payload;
    },
    decreaseSeller: (state, action) => {
      state.seller = state.seller - action.payload;
    },
    // 한 달 전 오늘, 가장 많이 판매된 아이돌 "상품 TOP10"
    increaseTop10: (state, action) => {
      state.top10 = state.top10 + action.payload;
    },
    decreaseTop10: (state, action) => {
      state.top10 = state.top10 - action.payload;
    },
    // 이번주 "가장 많이 검색된 태그 살펴보기"
    increaseTag: (state, action) => {
      state.tag = state.tag + action.payload;
    },
    decreaseTag: (state, action) => {
      state.tag = state.tag - action.payload;
    },
    //페이지 새로 로딩 될 때마다 리셋
    resetPreference: (state) => {
      state.product = initialState.product;
      state.seller = initialState.seller;
      state.top10 = initialState.top10;
      state.tag = initialState.tag;
      state.choice = initialState.choice;
    },
  },
});

export const {
  increaseProduct,
  decreaseProduct,
  increaseSeller,
  decreaseSeller,
  increaseTop10,
  decreaseTop10,
  increaseTag,
  decreaseTag,
  resetPreference,
  choicePreference,
} = preferenceSlice.actions;
export default preferenceSlice.reducer;
