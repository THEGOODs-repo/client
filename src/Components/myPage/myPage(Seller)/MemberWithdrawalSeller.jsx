import React, { useState } from "react";
import styled from "styled-components";
//마이페이지_ 회원탈퇴
//특이사항 ** 이메일 유효성 검사 필요 **
//특이사항 ** 탈퇴하기 버튼 기능 **

export default function MemberWithdrawalSeller() {
  const [selectedReason, setSelectedReason] = useState(null);
  const [email, setEmail] = useState(null);
  const [checkBtn, setCheckBtn] = useState(null);

  const emailHandler = (e) => {
    if (e.target.value.length > 0) {
      setEmail(true);
    } else setEmail(null);
  };

  const withdrawalButtonClick = (e) => {};

  return (
    <MainContainer>
      <h1>회원탈퇴</h1>
      <SubContainer>
        <h3>더 굿즈를 떠나는 이유를 알려주세요.</h3>
        <div>
          <RadioBoxWrapper>
            <RadioBoxInput
              type="radio"
              id="reason1"
              name="reason"
              checked={selectedReason === "이용하고 싶은 서비스가 없어요."}
              onChange={() =>
                setSelectedReason("이용하고 싶은 서비스가 없어요.")
              }
            />
            <RadioBoxLabel htmlFor="reason1">
              <RadioBoxDiv>이용하고 싶은 서비스가 없어요.</RadioBoxDiv>
            </RadioBoxLabel>
          </RadioBoxWrapper>

          <RadioBoxWrapper>
            <RadioBoxInput
              type="radio"
              id="reason2"
              name="reason"
              checked={selectedReason === "서비스 퀄리티가 낮아요."}
              onChange={() => setSelectedReason("서비스 퀄리티가 낮아요.")}
            />
            <RadioBoxLabel htmlFor="reason2">
              <RadioBoxDiv>서비스 퀄리티가 낮아요.</RadioBoxDiv>
            </RadioBoxLabel>
          </RadioBoxWrapper>

          <RadioBoxWrapper>
            <RadioBoxInput
              type="radio"
              id="reason3"
              name="reason"
              checked={selectedReason === "비매너 회원을 만났어요."}
              onChange={() => setSelectedReason("비매너 회원을 만났어요.")}
            />
            <RadioBoxLabel htmlFor="reason3">
              <RadioBoxDiv>비매너 회원을 만났어요.</RadioBoxDiv>
            </RadioBoxLabel>
          </RadioBoxWrapper>
          <RadioBoxWrapper>
            <RadioBoxInput
              type="radio"
              id="reason4"
              name="reason"
              checked={selectedReason === "잦은 오류가 발생해요."}
              onChange={() => setSelectedReason("잦은 오류가 발생해요.")}
            />
            <RadioBoxLabel htmlFor="reason4">
              <RadioBoxDiv>잦은 오류가 발생해요.</RadioBoxDiv>
            </RadioBoxLabel>
          </RadioBoxWrapper>

          <RadioBoxWrapper>
            <RadioBoxInput
              type="radio"
              id="reason5"
              name="reason"
              checked={selectedReason === "대체할 만한 서비스를 찾았어요."}
              onChange={() =>
                setSelectedReason("대체할 만한 서비스를 찾았어요.")
              }
            />
            <RadioBoxLabel htmlFor="reason5">
              <RadioBoxDiv>대체할 만한 서비스를 찾았어요.</RadioBoxDiv>
            </RadioBoxLabel>
          </RadioBoxWrapper>

          <RadioBoxWrapper>
            <RadioBoxInput
              type="radio"
              id="reason6"
              name="reason"
              checked={selectedReason === "쿠폰/적립금 등 혜택이 적어요."}
              onChange={() =>
                setSelectedReason("쿠폰/적립금 등 혜택이 적어요.")
              }
            />
            <RadioBoxLabel htmlFor="reason6">
              <RadioBoxDiv>쿠폰/적립금 등 혜택이 적어요.</RadioBoxDiv>
            </RadioBoxLabel>
          </RadioBoxWrapper>

          <RadioBoxWrapper>
            <RadioBoxInput
              type="radio"
              id="reason7"
              name="reason"
              checked={selectedReason === "기타"}
              onChange={() => setSelectedReason("기타")}
            />
            <RadioBoxLabel htmlFor="reason7">
              <RadioBoxDiv>기타</RadioBoxDiv>
            </RadioBoxLabel>
          </RadioBoxWrapper>
        </div>
        <h3>이메일 확인</h3>
        <InputEmail
          type="email"
          placeholder=" 더 굿즈에 가입하신 이메일을 적어주세요."
          onChange={emailHandler}
        />
        <WarningContainer>
          • 현재 사용중인 계정 정보는 회원 탈퇴 후 복구가 불가합니다.
          <br /> •진행 중인 거래건이 있거나 페널티 조치 중인 경우 탈퇴 신청이
          불가합니다.
          <br />
          • 탈퇴 후 회원님의 정보는 전자상거래 소비자보호법에 의거한 더 굿즈
          개인정보처리방침에 따라 관리됩니다.
          <br />
          • 현재 보유 중인 쿠폰 및 무상지급된 더굿즈 캐시는 모두 자동 소멸되며,
          탈퇴 후 재가입하더라도 이미 소멸되었기 때문에 양도되지 않습니다
          <br />
          • 구매후기 및 답글은 탈퇴 시 자동 삭제되지 않습니다. 탈퇴 후에는 계정
          정보가 삭제되어 본인 확인이 불가하므로, 탈퇴 신청 전에 게시글 삭제를
          요청해 주시기 바랍니다.
          <br />
          • 충전 캐시, 충전 비즈머니 또는 수익금이 있을 경우, 캐시 환불,
          비즈머니 환불 및 수익금 출금을 통해 정산이 완료된 이후 탈퇴를
          신청하셔야 합니다.
          <br />• 무상으로 지급된 캐시는 탈퇴와 함께 자동 소멸됩니다.
        </WarningContainer>
        <div>
          <CustomButtonWrapper>
            <ButtonInput
              type="checkbox"
              id="checkbox"
              name="checkbox"
              checked={checkBtn}
              onChange={() => setCheckBtn((checkBtn) => !checkBtn)}
            />
            <ButtonLabel htmlFor="checkbox">
              <ButtonDiv>주의사항을 모두 확인하였습니다.</ButtonDiv>
            </ButtonLabel>
          </CustomButtonWrapper>
        </div>
        <Button
          onClick={withdrawalButtonClick}
          disabled={!(selectedReason && email && checkBtn)}
        >
          회원 탈퇴
        </Button>
      </SubContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 717.75px;
  height: 1100px;
  border: 2.475px solid rgba(0, 0, 0, 0.05);

  h1 {
    align-self: flex-start;
    margin-top: 33px;
    margin-left: 28.875px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 21.45px;
    line-height: 29.925px;
    color: #202123;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 644.175px;
  height: 668.25px;
  margin-top: 12.315px;
  border: 1.2375px solid rgba(156, 156, 156, 0.8);
  border-radius: 4.125px;

  h3 {
    margin-top: 5%;
    margin-left: 30px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14.85px;
    line-height: 20.475px;
    color: #52555b;
  }

  h4 {
    font-size: 12.375px;
    color: gray;
  }
`;

const InputEmail = styled.input`
  width: 561.525px;
  height: 41.25px;
  margin-left: 30px;
  border: 0.825px solid #9c9c9c;
  border-radius: 4.125px;
  margin-bottom: 16.5px;
  padding-left: 10px;

  &::placeholder {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 13.2px;
    line-height: 18.15px;
    color: #9c9c9c;
  }
`;

const WarningContainer = styled.div`
  display: flex;
  align-items: center;
  width: 561.525px;
  height: 191.625px;
  margin-left: 30px;
  background: rgba(156, 156, 156, 0.15);
  border-radius: 8.25px;
  padding-left: 8.25px;
  padding-right: 8.25px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 9.5px;
  line-height: 18.9px;

  color: #52555b;
`;

const Button = styled.button`
  width: 97.35px;
  height: 35.475px;
  align-self: flex-end;
  margin-right: 35px;
  margin-bottom: 28.875px;
  border: none;
  background: #f0c920;
  box-shadow: 0px 0px 4.125px 1.05px rgba(0, 0, 0, 0.08);
  border-radius: 4.125px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14.85px;
  line-height: 20.475px;
  text-align: center;
  color: #ffffff;

  &:disabled {
    background: rgba(156, 156, 156, 0.4);
  }
`;

//CheckBox 준석님
const CustomButtonWrapper = styled.div`
  display: flex;
  padding: 0;
  margin-top: 10px;
  margin-left: 32px;
  align-items: flex-start;
`;

const ButtonLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  padding: 0;
  margin: 0 0 0 0; /* 기본값 설정 */

  &:before {
    content: "";
    height: 14px;
    width: 14px;
    border: 1px solid #9c9c9c;
    border-radius: 1px;
    background-size: 9px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: transparent;
    transition: opacity 0.1s;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M1 5.8L4.14286 9L12 1" stroke="%239C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  }

  &:after {
    opacity: 0;
    content: "";
    position: absolute;
    height: 14px;
    width: 14px;
    border: 1px solid transparent;
    border-radius: 1px;
    background-size: 9px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #f0c920;
    transition: opacity 0.1s;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M1 5.8L4.14286 9L12 1" stroke="%23FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  }
`;

const ButtonInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  transition: opacity 1s ease; // 추가된 부분

  &:checked + ${ButtonLabel} {
    &:after {
      opacity: 1;
      transition: opacity 0.1s;
    }
  }
`;

const ButtonDiv = styled.div`
  margin: 0 0 0 7px;
  white-space: pre-line;
  text-align: start;
  color: #202123;
  margin-left: 5px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
`;

//Radiobox 준석님
const RadioBoxWrapper = styled.div`
  display: flex;
  padding: 0;
  margin-left: 50px;
  align-items: flex-start;
`;

const RadioBoxDiv = styled.div`
  margin: 0 0 0 5px;
  white-space: pre-line;
  text-align: start;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #52555b;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const RadioBoxLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  padding: 0;
  margin: 0;

  &:before {
    content: "";
    height: 12px;
    width: 12px;
    border: 1.5px solid #9c9c9c;
    border-radius: 50%; /* Use border-radius to create a circular shape */
    background-size: 6px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ffffff;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="6" fill="%239C9C9C" fill-opacity="0.5"/></svg>');
  }

  &:after {
    opacity: 0;
    content: "";
    position: absolute;
    height: 12px;
    width: 12px;
    border: 1.5px solid #9c9c9c;
    border-radius: 50%; /* Use border-radius to create a circular shape */
    background-size: 6px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ffffff;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="6" fill="%23F0C920" fill-opacity="1"/></svg>');
  }
`;

const RadioBoxInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;

  &:checked + ${RadioBoxLabel} {
    &:after {
      opacity: 1;
    }
  }
`;
