import React, { useState, useEffect } from "react";
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
  flex-wrap: wrap;
  flex-direction: row;
  background: white;
  padding: ${38 / 19.2}vw ${29 / 19.2}vw;
  width: ${495 / 19.2}vw;
  border-radius: ${5 / 19.2}vw;
  background: #f9f9f9;

  /* box */
  box-shadow: 0px 0px ${10 / 19.2}vw ${1 / 19.2}vw rgba(0, 0, 0, 0.25);
`;

const ConfirmButton = styled.div`
  display: flex;
  width: ${124 / 19.2}vw;
  height: ${55 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${3 / 19.2}vw;
  color: ${(e) => (e.$color === "white" ? "#888888" : "#fff")};
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  padding: 0;
  background: ${(e) => (e.$color === "white" ? "#F9F9F9" : "#f0c920")};
  margin: 0;
  align-self: center;
  border: ${1 / 19.2}vw solid
    ${(e) => e.$color === "white" && "rgba(156,156,156,0.5)"};
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0 0 0 0;
  font-size: ${24 / 19.2}vw;
  justify-content: flex-start;
  align-items: center;
  color: #202123;
  flex-direction: row;

  div {
    display: flex;
    margin: 0 ${170 / 19.2}vw 0 auto;
    align-self: center;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: ${33 / 19.2}vw 0 ${13 / 19.2}vw 0;
  padding: 0;
  font-size: ${18 / 19.2}vw;
  justify-content: center;
  align-items: center;
  color: #52555b;
  flex-direction: column;
`;

const TextInput = styled.input`
  display: flex;
  width: ${(e) => (e.$full ? `${444 / 19.2}vw` : `${315 / 19.2}vw`)};
  height: ${55 / 19.2}vw;
  font-size: ${18 / 19.2}vw;
  border-radius: ${3 / 19.2}vw;
  flex-shrink: 0;
  margin: ${(e) => (e.$full ? `${5 / 19.2}vw 0 0 0` : `0 ${5 / 19.2}vw 0 0`)};
  padding: 0 0 0 ${17 / 19.2}vw;
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

const ButtonWrapper = styled.div`
  display: flex;
  width: ${444 / 19.2}vw;
  height: ${45 / 19.2}vw;
  margin: ${12 / 19.2}vw 0 0 0;
  padding: 0;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  background: #f0c920;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  flex-direction: row;
`;

const PhoneChangeModal = ({ isOpen, onClose, SetPhone, SetOrderBy }) => {
  const token = useSelector((state) => state.login.token);
  const [Cell, SetCell] = useState("");
  const [ValidCell, SetValidCell] = useState(false);
  const [BlockCell, SetBlockCell] = useState(false);
  const [VerificationCell, SetVerificationCell] = useState("");
  const [DisplayVerificationCell, SetDisplayVerificationCell] = useState(false);
  const [VerifiedCell, SetVerifiedCell] = useState(false);
  const [ValidVerifcationCell, SetValidVerifcationCell] = useState(false);
  const [isRequesting, SetIsRequesting] = useState(false);
  const [Name, SetName] = useState("");

  useEffect(() => {
    var ValidCellPattern = new RegExp(/^(01[0,2][0-9]{8})$/);
    SetValidCell(ValidCellPattern.test(Cell));
  }, [Cell]);

  useEffect(() => {
    var VerificationCellPattern = new RegExp(/^([0-9]{4})$/);
    SetValidVerifcationCell(VerificationCellPattern.test(VerificationCell));
  }, [VerificationCell]);

  const CellChange = (e) => {
    var CellPattern = new RegExp(/^([0-9]{0,11})$/);
    if (!isNaN(e.target.value) && CellPattern.test(e.target.value)) {
      !BlockCell && SetCell(e.target.value);
    }
  };

  const VerificationCellChange = (e) => {
    var VerificationCellPattern = new RegExp(/^([0-9]{0,4})$/);
    if (
      !isNaN(e.target.value) &&
      VerificationCellPattern.test(e.target.value)
    ) {
      !VerifiedCell && SetVerificationCell(e.target.value);
    }
  };

  const HandlePhoneAuth = async () => {
    SetBlockCell(ValidCell);
    if (!isRequesting && !VerifiedCell) {
      SetIsRequesting(true);
      try {
        const response = await fetchPhoneAuth();
        // 요청 처리 완료 후, 10초 후에 다시 요청 가능하도록 설정
        setTimeout(() => {
          SetIsRequesting(false);
        }, 10000);
        return response;
      } catch (error) {
        // 오류 처리
        SetIsRequesting(false);
        throw error;
      }
    } else {
      // 이미 요청 중인 경우 처리
      console.log("에러 감지");
      alert("잠시만 기다려주세요. 메시지가 가고 있습니다.");
    }
  };

  const fetchPhoneAuth = async () => {
    try {
      const endpoint = `${process.env.REACT_APP_BACKEND}/api/members/phone/auth`;
      const requestBody = {
        phone: Cell,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (
        response.data.isSuccess === true &&
        response.data.result.phone === Cell
      ) {
        console.log(response);
        SetDisplayVerificationCell(true);
      } else if (response.data.isSuccess === false) {
        console.error(response);
      }
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  const fetchPhoneAuthVerify = async () => {
    try {
      const endpoint = `${process.env.REACT_APP_BACKEND}/api/members/phone/auth/verify`;
      const requestBody = {
        phone: Cell,
        code: VerificationCell,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (
        response.data.isSuccess === true &&
        response.data.result.checkPhone === true
      ) {
        console.log(response);
        SetVerifiedCell(true);
        SetPhone(Cell);
        SetOrderBy(Name);
        fetchPhoneUpdate();
        onClose();
      }
    } catch (error) {
      alert("인증번호가 일치하지 않습니다. 확인 후 다시 입력해주세요.");
    }
  };

  const fetchPhoneUpdate = async () => {
    try {
      const endpoint = `${process.env.REACT_APP_BACKEND}/api/members/phone/name/update`;
      const requestBody = {
        name: Name,
        phone: Cell,
      };

      const response = await axios.put(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.isSuccess === true) {
        console.log(response);
      } else if (response.data.isSuccess === false) {
        console.error(response);
      }
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  return (
    <ModalWrapper $display={isOpen}>
      <Modal>
        <TitleWrapper>
          <svg
            onClick={() => onClose()}
            width="10%"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 7.5L22.5 22.5M7.5 22.5L22.5 7.5L7.5 22.5Z"
              stroke="#18181B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>휴대폰 번호 변경</div>
        </TitleWrapper>
        <TextInput
          placeholder="변경할 이름을 입력해주세요"
          value={Name}
          onChange={(e) => SetName(e.target.value)}
          $full
        />
        <TextWrapper>변경할 휴대폰 번호를 입력해 주세요.</TextWrapper>

        <TextInput
          placeholder="휴대폰 번호를 입력해주세요"
          value={Cell}
          onChange={CellChange}
        />
        <ConfirmButton
          className={!ValidCell && "gray"}
          onClick={
            ValidCell && Cell !== ""
              ? () => {
                  if (BlockCell) {
                    SetBlockCell(false);
                    SetVerifiedCell(false);
                    SetVerificationCell("");
                  } else HandlePhoneAuth();
                }
              : null
          }
        >
          {BlockCell ? "변경" : "인증요청"}
        </ConfirmButton>
        {DisplayVerificationCell && (
          <TextInput
            onChange={VerificationCellChange}
            key="verificationcell"
            value={VerificationCell}
            placeholder="인증코드를 입력해주세요."
            $full
            className={
              (!ValidVerifcationCell && "invalidinput") ||
              (VerifiedCell && "block")
            }
          />
        )}
        <ButtonWrapper onClick={() => fetchPhoneAuthVerify()}>
          변경하기
        </ButtonWrapper>
      </Modal>
    </ModalWrapper>
  );
};

export default PhoneChangeModal;
