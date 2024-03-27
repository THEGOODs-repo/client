import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../img/chevron-right.png";
import PhoneChangeModal from "../Components/ShoppingCart/PhoneChangeModal";
import axios from "axios";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import HeaderComponent from "../Components/Header/Header";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";

const NonCustomerOrder = () => {
  const [orderInfo, setOrderInfo] = useState({
    ordererName: "",
    ordererPhone: "",
    receiverName: "",
    receiverPhone: "",
    // 필요한 다른 주문자 정보 항목들 추가
  });

  const [checkBtn, setCheckBtn] = useState(false);
  const [checkAgree, setCheckAgree] = useState(false);

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setCheckBtn(checked);

    if (checked) {
      setOrderInfo((prevInfo) => ({
        ...prevInfo,
        receiverName: prevInfo.ordererName,
        receiverPhone: prevInfo.ordererPhone,
      }));
    } else {
      // 체크 해제 시에는 수령자 정보를 초기화합니다.
      setOrderInfo((prevInfo) => ({
        ...prevInfo,
        receiverName: "",
        receiverPhone: "",
      }));
    }
  };

  const handleOrdererInfoChange = (event, field) => {
    const { value } = event.target;
    setOrderInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  const [verificationRequested, setVerificationRequested] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerificationSuccess, setIsVerificationSuccess] = useState(false);

  const handlePhoneVerification = async () => {
    try {
      // 여기서 핸드폰 인증 요청을 보냅니다.
      const response = await axios.post(
        "https://dev.the-goods.store/api/members/phone/auth",
        {
          phone: orderInfo.ordererPhone,
        },
      );
      console.log(response.data); // 성공 여부 및 메시지를 확인합니다.
      alert("핸드폰 인증이 요청되었습니다.");
      setVerificationRequested(true);
    } catch (error) {
      console.error("Error during phone verification:", error);
      alert("핸드폰 인증 요청에 실패했습니다.");
    }
  };

  const [Cell, SetCell] = useState("");
  const [VerifiedCell, SetVerifiedCell] = useState(false);
  const [VerificationCell, SetVerificationCell] = useState(""); //인증번호
  // handleVerificationConfirm 함수 추가
  const handleVerificationConfirm = async () => {
    try {
      const endpoint = `https://dev.the-goods.store/api/members/phone/auth/verify`;
      const requestBody = {
        code: VerificationCell,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (verificationCode === VerificationCell) {
        console.log(response);
        SetVerifiedCell(true);
        alert("인증에 성공하였습니다.");
      }
    } catch (error) {
      alert("인증번호가 일치하지 않습니다. 확인 후 다시 입력해주세요.");
    }
  };

  // ButtonWrapper의 onClick 이벤트에 handleVerificationConfirm 함수 추가
  <ButtonWrapper onClick={handleVerificationConfirm}>변경하기</ButtonWrapper>;

  return (
    <Container>
      <HeaderComponent />
      <NavWrapContainer>
        <NavigationMenu />
        <div
          style={{
            borderBottom: "1px solid #9C9C9C",
            width: "100%",
            height: "3px",
          }}
        ></div>
        <NavigationCategoryMenu />
      </NavWrapContainer>
      <Header>
        <Title>주문/결제</Title>
        <Breadcrumb>
          <Item>장바구니</Item>
          <ArrowParent>
            <Arrow src={arrow} alt="arrow" />
          </ArrowParent>
          <BoldItem>주문/결제</BoldItem>
          <ArrowParent>
            <Arrow src={arrow} alt="arrow" />
          </ArrowParent>
          <Item>완료</Item>
        </Breadcrumb>
      </Header>

      <Text>
        - 주문자 정보<Yellow> *</Yellow>
      </Text>
      <DefaultInput
        type="text"
        name="ordererName"
        value={orderInfo.ordererName}
        onChange={(event) =>
          setOrderInfo({ ...orderInfo, ordererName: event.target.value })
        }
        placeholder="주문자명"
      />
      <PhonetInput
        type="text"
        name="ordererPhone"
        value={orderInfo.ordererPhone}
        onChange={(event) =>
          setOrderInfo({ ...orderInfo, ordererPhone: event.target.value })
        }
        placeholder="주문자 핸드폰 번호"
      />
      <PhoneCheckButton onClick={handlePhoneVerification}>
        인증 요청
      </PhoneCheckButton>

      {verificationRequested && (
        <>
          <PhonetInput
            type="text"
            name="checkOrdererPhone"
            placeholder="인증 번호를 입력해주세요."
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <PhoneCheckButton onClick={handleVerificationConfirm}>
            인증 확인
          </PhoneCheckButton>
        </>
      )}

      <Text>
        - 배송지 정보
        <Yellow> *</Yellow>
        <CheckboxText>주문자정보와 동일</CheckboxText>
        <div style={{ marginTop: "0.2vw" }}>
          <CustomButtonWrapper>
            <ButtonInput
              type="checkbox"
              id="checkbox"
              name="checkbox"
              checked={checkBtn}
              onChange={handleCheckboxChange}
            />
            <ButtonLabel htmlFor="checkbox">
              <ButtonDiv></ButtonDiv>
            </ButtonLabel>
          </CustomButtonWrapper>
        </div>
      </Text>
      <DefaultInput
        type="text"
        value={orderInfo.receiverName} // 이 부분 수정
        onChange={(event) =>
          setOrderInfo((prevInfo) => ({
            ...prevInfo,
            receiverName: event.target.value,
          }))
        } // 이 부분 수정
        placeholder="수령자명"
      />
      <DefaultInput
        type="text"
        value={orderInfo.receiverPhone} // 이 부분 수정
        onChange={(event) =>
          setOrderInfo((prevInfo) => ({
            ...prevInfo,
            receiverPhone: event.target.value,
          }))
        } // 이 부분 수정
        placeholder="연락처"
      />
      <AddressInput type="text" placeholder="우편번호"></AddressInput>
      <AddressButton>우편번호 찾기</AddressButton>
      <DefaultInput type="text" placeholder="주소"></DefaultInput>
      <DefaultInput type="text" placeholder="상세주소"></DefaultInput>

      <Text>
        - 환불계좌 정보(제작무산 등의 경우)<Yellow> *</Yellow>
      </Text>
      <BankInput type="text" placeholder="은행명"></BankInput>
      <AccountNumber type="text" placeholder="계좌번호"></AccountNumber>
      <AccoutName type="text" placeholder="예금주명"></AccoutName>
      <Text>
        - 개인정보 수집 및 동의<Yellow> *</Yellow>
      </Text>
      <BottomExplain>
        <ExplainText>
          상품 주문 및 배송을 위해 입력된 개인정보를 수집합니다.
        </ExplainText>
        <ExplainText>
          수집한 개인정보는 주문과 배송이외의 목적으로는 사용하지 않으며,
          전자상거래 등에서의 소비자 보호에 관한 법률에 따라 5년까지 보관합니다.
        </ExplainText>
        <ExplainText>
          개인정보의 수집 및 이용에 대한 동의를 거부할 수 있으며, 이 경우 상품
          주문이 어려울 수 있습니다.{" "}
        </ExplainText>
      </BottomExplain>
      <Agree>
        <CustomButtonWrapper>
          <ButtonInput
            type="checkbox"
            id="agreeCheckbox"
            name="agreeCheckbox"
            checked={checkAgree}
            onChange={() => setCheckAgree((prevCheck) => !prevCheck)}
          />
          <ButtonLabel htmlFor="agreeCheckbox">
            <ButtonDiv>동의합니다.</ButtonDiv>
          </ButtonLabel>
        </CustomButtonWrapper>
      </Agree>
      <SubmitButton>제출</SubmitButton>
    </Container>
  );
};

export default NonCustomerOrder;

const Container = styled.div``;
const NavWrapContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Header = styled.div`
  display: flex;
`;
const Title = styled.p`
  position: display;
  margin-left: 26%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5vw;
  color: #202123;
  margin-top: 2vw;
`;

const Breadcrumb = styled.div`
  display: flex;
  margin-left: 34vw;
`;

const Item = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  color: #9c9c9c;
  margin-top: 2.5vw;
  text-align: center;
`;

const BoldItem = styled(Item)`
  font-weight: 700;
  color: #202123;
`;

const Arrow = styled.img`
  width: 1.5vw;
  height: 1.5vw;
  margin-top: 0.3vw;
`;

const ArrowParent = styled.div`
  margin-top: 2vw;
`;

const Text = styled.p`
  display: flex;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1vw;
  color: #202123;
  line-height: 1.3vw;
  margin-left: 26%;
  margin-bottom: -0.5vw;
  margin-top: 2vw;
`;
const Yellow = styled.p`
  color: #f0c920;
  margin-top: 0vw;
  margin-left: 5px;
  margin-right: 1vw;
`;
const DefaultInput = styled.input`
  position: relative;
  padding: 10px;
  font-size: ${16 / 19.2}vw;
  margin-left: 26%;
  box-sizing: border-box;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 5px;
  width: ${901 / 19.2}vw;
  height: ${48 / 19.2}vw;
  margin-bottom: 0.5vw;
`;
const PhonetInput = styled.input`
  position: relative;
  padding: 10px;
  font-size: ${16 / 19.2}vw;
  margin-left: 26%;
  box-sizing: border-box;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 5px;
  width: ${792 / 19.2}vw;
  height: ${48 / 19.2}vw;
`;
const PhoneCheckButton = styled.button`
  background: #f0c920;
  border-radius: 5px;
  margin-left: 0.5%;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: ${16 / 19.2}vw;
  line-height: 20px;
  color: #ffffff;
  width: ${101 / 19.2}vw;
  height: ${48 / 19.2}vw;
  border: none;
  margin-bottom: 0.5vw;
`;
const CheckboxText = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: ${16 / 19.2}vw;
  line-height: 18px;
  margin-top: 0vw;
  color: #52555b;
  margin-right: ${10 / 19.2}vw;
`;
const AddressInput = styled.input`
  position: relative;
  padding: 10px;
  font-size: ${16 / 19.2}vw;
  margin-left: 26%;
  box-sizing: border-box;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 5px;
  width: ${340 / 19.2}vw;
  height: ${48 / 19.2}vw;
  margin-bottom: 0.5vw;
`;
const AddressButton = styled.button`
  background: #f0c920;
  border-radius: 5px;
  margin-left: 0.5%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: ${16 / 19.2}vw;
  line-height: 20px;
  color: #ffffff;
  width: ${120 / 19.2}vw;
  height: ${48 / 19.2}vw;
  border: none;
`;
const BankInput = styled.input`
  position: relative;
  padding: 10px;
  font-size: ${16 / 19.2}vw;
  margin-left: 26%;
  box-sizing: border-box;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 5px;
  width: ${211 / 19.2}vw;
  height: ${48 / 19.2}vw;
  margin-bottom: 0.5vw;
`;
const AccountNumber = styled.input`
  position: relative;
  padding: 10px;
  font-size: ${16 / 19.2}vw;
  margin-left: 5px;
  box-sizing: border-box;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 5px;
  width: ${444 / 19.2}vw;
  height: ${48 / 19.2}vw;
  margin-bottom: 0.5vw;
`;
const AccoutName = styled.input`
  position: relative;
  padding: 10px;
  font-size: ${16 / 19.2}vw;
  margin-left: 5px;
  box-sizing: border-box;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 5px;
  width: ${211 / 19.2}vw;
  height: ${48 / 19.2}vw;
  margin-bottom: 0.5vw;
`;
const BottomExplain = styled.div`
  font-family: "Noto Sans";
  box-sizing: border-box;
  width: ${901 / 19.2}vw;

  margin-left: 26%;

  padding: 10px;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 5px;
`;
const ExplainText = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: ${15 / 19.2}vw;
  line-height: 18px;
  margin-bottom: 0.5vw;
  margin-top: 0.5vw;
  color: #52555b;
`;
const Agree = styled.div`
  margin-top: 1vw;
  margin-left: 67vw;
  margin-bottom: 1vw;
  display: flex;
`;
const SubmitButton = styled.button`
  background: #f0c920;
  border-radius: 5px;
  margin-left: 26%;
  padding: 10px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2vw;
  line-height: 20px;
  color: #ffffff;
  width: ${901 / 19.2}vw;
  height: ${48 / 19.2}vw;
  border: none;
`;

/**버튼 디자인*/
const CustomButtonWrapper = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  align-items: flex-start;
  justify-content: center;
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
    height: ${23 / 19.2}vw;
    width: ${23 / 19.2}vw;
    border: ${1 / 19.2}vw solid #9c9c9c;
    border-radius: ${2 / 19.2}vw;
    background-size: ${11 / 19.2}vw ${8 / 19.2}vw;
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
    height: ${23 / 19.2}vw;
    width: ${23 / 19.2}vw;
    border: ${1 / 19.2}vw solid transparent;
    border-radius: ${2 / 19.2}vw;
    background-size: ${11 / 19.2}vw ${8 / 19.2}vw;
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
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: ${16 / 19.2}vw;
  line-height: 18px;
  margin-top: 0vw;
  color: #52555b;
  margin-left: ${10 / 19.2}vw;
`;

/**전화번호 인증관련**/
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
