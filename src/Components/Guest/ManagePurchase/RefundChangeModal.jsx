import React, { useState } from "react";
import styled from "styled-components";
import { CheckBox } from "../../Global/CustomBox";
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
  z-index: 99;
`;

const Modal = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: white;
  padding: 0;
  width: ${790 / 19.2}vw;
  border-radius: ${10 / 19.2}vw;
  font-size: ${16 / 19.2}vw;
  background: #f9f9f9;
  box-sizing: border-box;

  /* box */
  box-shadow: 0px 0px ${10 / 19.2}vw ${1 / 19.2}vw rgba(0, 0, 0, 0.25);

  > div {
    display: flex;
    flex-direction: row;
    padding: 0 ${26 / 19.2}vw;
  }
`;

const ConfirmButton = styled.div`
  display: flex;
  width: ${350 / 19.2}vw;
  height: ${55 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  padding: 0;
  background: #f0c920;
  margin: ${25 / 19.2}vw ${5 / 19.2}vw;
  align-self: center;

  &.white {
    border: ${1 / 19.2}vw solid rgba(156, 156, 156, 0.5);
    opacity: 0.8;
    background: #f9f9f9;
    color: #202123;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${62 / 19.2}vw;
  margin: 0 0 0 0;
  padding: 0;
  font-size: ${22 / 19.2}vw;
  justify-content: center;
  align-items: center;
  color: #202123;
  flex-direction: column;
  border-bottom: ${1 / 19.2}vw solid rgba(156, 156, 156, 0.8);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 ${26 / 19.2}vw;
  width: 100%;
  justify-content: flex-start;

  margin: ${23 / 19.2}vw 0;
`;

const TextWrapper = styled.div`
  display: flex;
  width: 9%;
  margin: ${5 / 19.2}vw 0;
  padding: 0;
  justify-content: flex-start;
  align-items: center;
  color: #52555b;
  flex-direction: row;
  text-align: flex-start;
`;

const TextInput = styled.input`
  display: flex;
  width: 83%;
  height: ${40 / 19.2}vw;
  font-size: ${15 / 19.2}vw;
  border-radius: ${5 / 19.2}vw;
  flex-shrink: 0;
  margin: ${5 / 19.2}vw 0;
  padding: 0 0 0 ${13 / 19.2}vw;
  border: ${1 / 19.2}vw solid #9c9c9c;
  box-sizing: border-box;

  &.invalidinput {
    border: ${1 / 19.2}vw solid #fd3c56;
  }

  &.block {
    pointer-events: none;
    background: rgba(156, 156, 156, 0.2);
  }
`;

const RefundChangeModal = ({ isOpen, onClose, OrderItemId }) => {
  const token = useSelector((state) => state.login.token);
  const [AccountHolder, SetAccountHolder] = useState("");
  const [RefundBank, SetRefundBank] = useState("");
  const [RefundAccount, SetRefundAccount] = useState("");
  const [SaveAsDefaultRefundAccount, SetSaveAsDefaultRefundAccount] =
    useState(false);

  const HandleChangeRefund = async () => {
    try {
      const endpoint = `${process.env.REACT_APP_BACKEND}/api/order/${OrderItemId}/info/refund`;
      const requestBody = {
        refundOwner: AccountHolder,
        refundBank: RefundBank,
        refundAccount: RefundAccount,
      };

      const response = await axios.put(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.isSuccess === true) {
        onClose();
      }
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  return (
    <ModalWrapper $display={isOpen}>
      <Modal>
        <TitleWrapper>환불 계좌 수정</TitleWrapper>
        <InputWrapper>
          <TextWrapper>
            예금주
            <span style={{ color: "#F0C920", marginLeft: "0.26vw" }}>*</span>
          </TextWrapper>
          <TextInput
            placeholder="이름을 입력해주세요"
            value={AccountHolder}
            onChange={(e) => {
              SetAccountHolder(e.target.value);
            }}
          />
          <TextWrapper>
            은행명
            <span style={{ color: "#F0C920", marginLeft: "0.26vw" }}>*</span>
          </TextWrapper>
          <TextInput
            placeholder="환불받을 계좌의 은행 정보를 입력해주세요"
            value={RefundBank}
            onChange={(e) => {
              SetRefundBank(e.target.value);
            }}
          />
          <TextWrapper>
            계좌번호
            <span style={{ color: "#F0C920", marginLeft: "0.26vw" }}>*</span>
          </TextWrapper>
          <TextInput
            placeholder="환불받을 계좌번호를 입력해주세요"
            value={RefundAccount}
            onChange={(e) => {
              SetRefundAccount(e.target.value);
            }}
          />
        </InputWrapper>
        <CheckBox
          index="SaveAsDefaultRefundAccount"
          state={SaveAsDefaultRefundAccount}
          onChange={() =>
            SetSaveAsDefaultRefundAccount(
              (SaveAsDefaultRefundAccount) => !SaveAsDefaultRefundAccount,
            )
          }
          label="기본 환불 계좌로 설정"
          style={{ marginLeft: `${26 / 19.2}vw` }}
        />
        <div>
          <ConfirmButton className="white" onClick={onClose}>
            취소
          </ConfirmButton>
          <ConfirmButton onClick={() => HandleChangeRefund()}>
            저장
          </ConfirmButton>
        </div>
      </Modal>
    </ModalWrapper>
  );
};

export default RefundChangeModal;
