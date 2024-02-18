import { createSlice } from "@reduxjs/toolkit";
//선호도 조사 슬라이스

const initialState = {
  product: 0,
  seller: 0,
  top10: 0,
  tag: 0,
};

const preferenceSlice = createSlice({
  name: "preference",
  initialState,
  reducers: {
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
} = preferenceSlice.actions;
export default preferenceSlice.reducer;
