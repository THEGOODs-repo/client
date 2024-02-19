import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(32, 33, 35, 0.5);
  display: ${(e) => (e.$display ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: white;
  padding: ${22 / 19.2}vw ${25 / 19.2}vw;
  width: ${550 / 19.2}vw;
  border-radius: ${5 / 19.2}vw;
  background: #f9f9f9;

  /* box */
  box-shadow: 0px 0px ${10 / 19.2}vw ${1 / 19.2}vw rgba(0, 0, 0, 0.25);
`;

const ConfirmButton = styled.div`
  display: flex;
  width: ${160 / 19.2}vw;
  height: ${44 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  padding: 0;
  background: #f0c920;
  margin: ${18 / 19.2}vw 0 0 0;
  align-self: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 0 0;
  padding: 0;
  font-size: ${20 / 19.2}vw;
  justify-content: center;
  align-items: center;
  color: #202123;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 0 0;
  padding: 0;
  font-size: ${14 / 19.2}vw;
  justify-content: center;
  align-items: center;
  color: #52555b;
  flex-direction: column;
  text-align: center;
`;

const RatingWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 0 0;
  padding: 0;
  font-size: ${32 / 19.2}vw;
  height: ${77 / 19.2}vw;

  justify-content: center;
  align-items: center;
  color: #202123;
  flex-direction: row;
  background: rgba(156, 156, 156, 0.15);
  border-radius: ${5 / 19.2}vw;
`;

const ItemWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: ${20 / 19.2}vw 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ItemImg = styled.img`
  width: ${130 / 19.2}vw;
  border-radius: ${5 / 19.2}vw;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.6;
  margin: 0 0 0 ${13 / 19.2}vw;
  font-size: ${13 / 19.2}vw;
`;

const ReviewWrapper = styled.div`
  width: 100%;
  height: ${200 / 19.2}vw;
  border-radius: ${5 / 19.2}vw;
  border: ${1 / 19.2}vw solid rgba(156, 156, 156, 0.5);
  padding: ${14 / 19.2}vw;
  font-size: ${14 / 19.2}vw;
  box-sizing: border-box;
`;

const WarningWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: ${10 / 19.2}vw 0 0 0;
  padding: 0 0 0 ${16 / 19.2}vw;
  font-size: ${12 / 19.2}vw;
  height: ${57 / 19.2}vw;
  line-height: 1.2;
  justify-content: center;
  align-items: flex-start;
  color: #52555b;
  flex-direction: column;
  background: rgba(156, 156, 156, 0.15);
  border-radius: ${5 / 19.2}vw;
  box-sizing: border-box;
`;

const ReviewModal = ({
  isOpen,
  onClose,
  ItemName,
  OptionString,
  OrderItemId,
}) => {
  const token = useSelector((state) => state.login.token);
  const [Rating, SetRating] = useState(5);
  const [Review, SetReview] = useState("");
  const HandleReviewOrder = async () => {
    try {
      const endpoint = `${process.env.REACT_APP_BACKEND}/api/order/${OrderItemId}/complete`;

      const response = await axios.post(endpoint, null, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.isSuccess === true) {
        console.log(response);
        onClose();
      }
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  return (
    <ModalWrapper $display={isOpen}>
      <Modal>
        <TitleWrapper>후기 작성</TitleWrapper>
        <TextWrapper>
          받으신 결과물은 만족스러우셨나요?
          <br />
          서비스에 대한 만족도를 별점으로 남겨주세요.
        </TextWrapper>
        <RatingWrapper>
          {Rating}
          {".0 "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => SetRating(1)}
          >
            <g clipPath="url(#clip0_1653_178)">
              <path
                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                fill={Rating > 0 ? "#FFC700" : "#D9D9D9"}
              />
            </g>
            <defs>
              <clipPath id="clip0_1653_178">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => SetRating(2)}
          >
            <g clipPath="url(#clip0_1653_178)">
              <path
                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                fill={Rating > 1 ? "#FFC700" : "#D9D9D9"}
              />
            </g>
            <defs>
              <clipPath id="clip0_1653_178">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => SetRating(3)}
          >
            <g clipPath="url(#clip0_1653_178)">
              <path
                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                fill={Rating > 2 ? "#FFC700" : "#D9D9D9"}
              />
            </g>
            <defs>
              <clipPath id="clip0_1653_178">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => SetRating(4)}
          >
            <g clipPath="url(#clip0_1653_178)">
              <path
                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                fill={Rating > 3 ? "#FFC700" : "#D9D9D9"}
              />
            </g>
            <defs>
              <clipPath id="clip0_1653_178">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => SetRating(5)}
          >
            <g clipPath="url(#clip0_1653_178)">
              <path
                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                fill={Rating > 4 ? "#FFC700" : "#D9D9D9"}
              />
            </g>
            <defs>
              <clipPath id="clip0_1653_178">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </RatingWrapper>
        <ItemWrapper>
          <ItemImg src="" alt="상품이미지" />
          <ItemInfo>
            <span style={{ fontSize: `${16 / 19.2}vw` }}>{ItemName}</span>
            {OptionString}
          </ItemInfo>
        </ItemWrapper>
        후기
        <ReviewWrapper
          onInput={(e) => SetReview(e.target.innerText)}
          contentEditable
          suppressContentEditableWarning
        />
        <WarningWrapper>
          후기를 작성하면 자동 구매 확정이 됩니다.
          <br />
          구매 확정 이후에는 반품 신청이 불가합니다.
        </WarningWrapper>
        <ConfirmButton onClick={() => HandleReviewOrder()}>확인</ConfirmButton>
      </Modal>
    </ModalWrapper>
  );
};

export default ReviewModal;
