import React, { useRef, useState } from "react";
import styled from "styled-components";

export default function MemberWithdrawalSeller() {
  const [radionBtn, setRadioBtn] = useState(null);
  const [email, setEmail] = useState(null);
  const [checkBtn, setCheckBtn] = useState(null);

  const emailHandler = (e) => {
    if (e.target.value.length > 0) {
      setEmail(true);
    } else setEmail(null);
  };

  const checkBoxHandler = (e) => {
    if (checkBtn === null) {
      setCheckBtn(true);
    } else if (checkBtn === true) {
      setCheckBtn(null);
    }
  };

  const withdrawalButtonClick = (e) => {};

  return (
    <MainContainer>
      <h1>회원탈퇴</h1>
      <SubContainer>
        <h3>더 굿즈를 떠나는 이유를 알려주세요.</h3>
        <div>
          <InputRadio
            type="radio"
            name="Reason"
            onChange={(e) => setRadioBtn(true)}
          />
          <RadioLabel>
            이용하고 싶은 서비스가 없어요. <br />
          </RadioLabel>
          <InputRadio
            type="radio"
            name="Reason"
            onChange={(e) => setRadioBtn(true)}
          />
          <RadioLabel>
            서비스 퀄리티가 낮아요.
            <br />
          </RadioLabel>
          <InputRadio
            type="radio"
            name="Reason"
            onChange={(e) => setRadioBtn(true)}
          />
          <RadioLabel>
            비매너 회원을 만났어요.
            <br />
          </RadioLabel>
          <InputRadio
            type="radio"
            name="Reason"
            onChange={(e) => setRadioBtn(true)}
          />
          <RadioLabel>
            잦은 오류가 발생해요.
            <br />
          </RadioLabel>
          <InputRadio
            type="radio"
            name="Reason"
            onChange={(e) => setRadioBtn(true)}
          />
          <RadioLabel>
            대체할 만한 서비스를 찾았어요.
            <br />
          </RadioLabel>
          <InputRadio
            type="radio"
            name="Reason"
            onChange={(e) => setRadioBtn(true)}
          />
          <RadioLabel>
            쿠폰/적립금 등 혜택이 적어요.
            <br />
          </RadioLabel>
          <InputRadio
            type="radio"
            name="Reason"
            onChange={(e) => setRadioBtn(true)}
          />
          <RadioLabel>
            기타
            <br />
          </RadioLabel>
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
          <InputCheckBox
            type="checkbox"
            value="checked"
            onChange={checkBoxHandler}
          />
          <CheckBoxLabel>주의 사항을 모두 확인하였습니다.</CheckBoxLabel>
        </div>
        <Button
          onClick={withdrawalButtonClick}
          disabled={!(radionBtn && email && checkBtn)}
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
  width: 870px;
  height: 1300px;
  border: 3px solid rgba(0, 0, 0, 0.05);

  h1 {
    align-self: flex-start;
    margin-top: 5%;
    margin-left: 5%;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 35px;
    color: #202123;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 783px;
  height: 810px;
  border: 1.5px solid rgba(156, 156, 156, 0.8);
  border-radius: 5px;

  h3 {
    margin-top: 5%;
    margin-left: 6%;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;

    color: #52555b;
  }

  h4 {
    font-size: 15px;
    color: gray;
  }
`;

const InputEmail = styled.input`
  width: 684px;
  height: 50px;
  margin-left: 6%;
  border: 1px solid #9c9c9c;
  border-radius: 5px;
  margin-bottom: 20px;

  &::placeholder {
    padding-left: 5px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;

    color: #9c9c9c;
  }
`;

const InputRadio = styled.input`
  position: relative;
  width: 20px;
  height: 20px;
  top: 1.5px;
  border: 1px solid #9c9c9c;
  margin-left: 10%;
  margin-right: 10px;
  margin-bottom: 6px;
`;

const RadioLabel = styled.label`
  position: relative;
  top: -2px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #52555b;
`;

const WarningContainer = styled.div`
  display: flex;
  align-items: center;
  width: 684px;
  height: 233px;
  margin-left: 5%;
  background: rgba(156, 156, 156, 0.15);
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;

  color: #52555b;
`;

const InputCheckBox = styled.input`
  position: relative;
  top: 0px;
  width: 20px;
  height: 20px;
  margin-top: 15px;
  margin-left: 5%;
  margin-bottom: 15px;
  border: 1px solid #9c9c9c;
`;

const CheckBoxLabel = styled.label`
  position: relative;
  top: -3px;
  margin: 0px 0px 3px 3px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  color: #52555b;
`;

const Button = styled.button`
  width: 118px;
  height: 43px;
  align-self: flex-end;
  margin-right: 5%;
  margin-bottom: 35px;
  border: none;
  background: #f0c920;

  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;

  &:disabled {
    background: rgba(156, 156, 156, 0.4);
  }
`;
