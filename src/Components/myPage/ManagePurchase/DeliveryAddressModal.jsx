import React, { useState } from "react";
import styled from "styled-components";
import { CheckBox } from "../../Global/CustomBox";
import DaumPostCode from "react-daum-postcode";
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

const SelectAddressNickName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${15 / 19.2}vw;
  border-radius: ${30 / 19.2}vw;
  background: rgba(156, 156, 156, 0.15);
  margin: ${4 / 19.2}vw ${4 / 19.2}vw ${10 / 19.2}vw ${4 / 19.2}vw;
  padding: ${10 / 19.2}vw;
`;

const DaumPost = ({
  HandleClose,
  SetAddress,
  SetDetailAddress,
  SetZipCode,
}) => {
  const handleComplete = (data) => {
    let extraAddress = "";
    const { addressType, bname, buildingName } = data;
    if (addressType === "R") {
      if (buildingName !== "") {
        extraAddress += `${buildingName} `;
      }
      if (bname !== "") {
        extraAddress += `(${bname})`;
      }
      SetDetailAddress(`${extraAddress !== "" ? `${extraAddress}` : ""}`);
    }
    SetAddress(data.address);
    SetZipCode(data.zonecode);
    HandleClose();
  };
  return (
    <div>
      <DaumPostCode
        onComplete={handleComplete}
        className="post-code"
        style={{ zIndex: `1000` }}
      />
    </div>
  );
};

const DeliveryAddressModal = ({ isOpen, onClose, OrderItemId }) => {
  const token = useSelector((state) => state.login.token);
  const [Name, SetName] = useState("");
  const [Address, SetAddress] = useState("");
  const [SearchAddress, SetSearchAddress] = useState(false);
  const [DetailAddress, SetDetailAddress] = useState("");
  const [Cell, SetCell] = useState("");
  const [AddressNickName, SetAddressNickName] = useState("");
  const [SaveAsDefaultAddress, SetSaveAsDefaultAddress] = useState(false);
  const [ZipCode, SetZipCode] = useState("");
  const [DeliveryMemo, SetDeliveryMemo] = useState("");

  const HandleChangeAddress = async () => {
    try {
      const endpoint = `/api/order/${OrderItemId}/info/address`;
      const requestBody = {
        receiverName: Name,
        receiverPhone: Cell,
        zipcode: ZipCode,
        address: Address,
        addressDetail: DetailAddress,
        deliveryMemo: DeliveryMemo,
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
      {SearchAddress ? (
        <DaumPost
          HandleClose={() => SetSearchAddress(false)}
          SetAddress={(e) => SetAddress(e)}
          SetDetailAddress={(e) => SetDetailAddress(e)}
          SetZipCode={(e) => SetZipCode(e)}
        />
      ) : (
        <Modal>
          <TitleWrapper>배송지 편집</TitleWrapper>
          <InputWrapper>
            <TextWrapper>
              수령인
              <span style={{ color: "#F0C920", marginLeft: "0.26vw" }}>*</span>
            </TextWrapper>
            <TextInput
              placeholder="이름을 입력해주세요"
              value={Name}
              onChange={(e) => {
                SetName(e.target.value);
              }}
            />
            <TextWrapper>
              주소
              <span style={{ color: "#F0C920", marginLeft: "0.26vw" }}>*</span>
            </TextWrapper>
            <TextInput
              placeholder="주소 검색"
              value={Address}
              onChange={(e) => {}}
              onClick={() => {
                SetSearchAddress(true);
              }}
            />

            <TextWrapper>상세주소</TextWrapper>
            <TextInput
              placeholder="나머지 주소를 입력해주세요"
              value={DetailAddress}
              onChange={(e) => {
                SetDetailAddress(e.target.value);
              }}
            />
            <TextWrapper>
              휴대폰
              <span style={{ color: "#F0C920", marginLeft: "0.26vw" }}>*</span>
            </TextWrapper>
            <TextInput
              placeholder="숫자만 입력해주세요"
              value={Cell}
              onChange={(e) => {
                SetCell(e.target.value);
              }}
            />
            <TextWrapper>배송 메모</TextWrapper>
            <TextInput
              placeholder="배송 메세지를 입력해주세요"
              value={DeliveryMemo}
              onChange={(e) => {
                SetDeliveryMemo(e.target.value);
              }}
            />
            <TextWrapper>배송지명</TextWrapper>
            <TextInput
              placeholder="직접 입력하거나 선택해주세요"
              value={AddressNickName}
              onChange={(e) => {
                SetAddressNickName(e.target.value);
              }}
            />
            <TextWrapper />
            <SelectAddressNickName
              onClick={() => {
                SetAddressNickName("집");
              }}
            >
              집
            </SelectAddressNickName>
            <SelectAddressNickName
              onClick={() => {
                SetAddressNickName("회사");
              }}
            >
              회사
            </SelectAddressNickName>
            <SelectAddressNickName
              onClick={() => {
                SetAddressNickName("가족");
              }}
            >
              가족
            </SelectAddressNickName>
            <SelectAddressNickName
              onClick={() => {
                SetAddressNickName("친구");
              }}
            >
              친구
            </SelectAddressNickName>
            <SelectAddressNickName
              onClick={() => {
                SetAddressNickName("학교");
              }}
            >
              학교
            </SelectAddressNickName>
          </InputWrapper>
          <CheckBox
            index="SaveAsDefaultAddress"
            state={SaveAsDefaultAddress}
            onChange={() =>
              SetSaveAsDefaultAddress(
                (SaveAsDefaultAddress) => !SaveAsDefaultAddress,
              )
            }
            label="기본 배송지로 설정"
            style={{ marginLeft: `${26 / 19.2}vw` }}
          />
          <div>
            <ConfirmButton className="white" onClick={onClose}>
              취소
            </ConfirmButton>
            <ConfirmButton onClick={() => HandleChangeAddress()}>
              저장
            </ConfirmButton>
          </div>
        </Modal>
      )}
    </ModalWrapper>
  );
};

export default DeliveryAddressModal;
