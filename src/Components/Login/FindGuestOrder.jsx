import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../img/logo.svg";
import { useNavigate } from "react-router-dom";

const FindGuestOrderWrapper = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  margin: ${105 / 19.2}vw 0 0 0;
  font-family: NotoSans;
  flex-direction: column;
  align-items: center;
  color: black;
`;

const LogoWrapper = styled.img`
  width: ${487 / 19.2}vw;
`;

const TextWrapper = styled.div`
  width: 100%;
  margin: 0;
  font-size: ${15 / 19.2}vw;
  text-align: start;
  padding: 0 0 0 ${9 / 19.2}vw;
  color: #52555b;
`;

const InputWrapper = styled.input`
  display: flex;
  margin: ${10 / 19.2}vw 0 0 0;
  width: ${550 / 19.2}vw;
  height: ${55 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  border: ${1.3 / 19.2}vw solid #9c9c9c;
  font-size: ${16 / 19.2}vw;
  padding: 0 0 0 ${17 / 19.2}vw;

  &.invalidinput {
    border: ${1.3 / 19.2}vw solid #fd3c56;
  }
`;

const TitleBar = {
  display: "flex",
  width: `${570 / 19.2}vw`,
  margin: `${14 / 19.2}vw 0 ${16 / 19.2}vw 0`,
  padding: 0,
};

const ConfirmButton = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  height: ${55 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  background: #f0c920;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  padding: 0;
  margin: ${39 / 19.2}vw 0 ${21 / 19.2}vw 0;
`;

const FindLink = styled.div`
  margin: 0;
  font-size: ${16 / 19.2}vw;
  color: #202123;
  padding: 0;
`;

const FindGuestOrder = () => {
  const navigate = useNavigate();
  const [OrderNumber, SetOrderNumber] = useState("");
  const [OrderName, SetOrderName] = useState("");
  const [OrderContact, SetOrderContact] = useState("");

  const OrderNumberChange = (e) => {
    SetOrderNumber(e.target.value);
  };

  const OrderNameChange = (e) => {
    SetOrderName(e.target.value);
  };

  const OrderContactChange = (e) => {
    var CellPattern = new RegExp(/^([0-9]{0,11})$/);
    if (!isNaN(e.target.value) && CellPattern.test(e.target.value)) {
      SetOrderContact(e.target.value);
    }
  };

  return (
    <FindGuestOrderWrapper>
      <LogoWrapper src={logo} />
      <svg
        viewBox="0 0 570 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={TitleBar}
      >
        <line
          x1="4.37114e-08"
          y1="8.5"
          x2="175"
          y2="8.50002"
          stroke="#202123"
        />
        <line x1="395" y1="8.5" x2="570" y2="8.50002" stroke="#202123" />
        <path
          d="M230.53 0.46H232.19V18.58H230.53V0.46ZM218.43 2H220.07V6.78H225.29V2H226.95V14.22H218.43V2ZM220.07 8.1V12.86H225.29V8.1H220.07ZM240.949 11.32H242.629V14.3H240.949V11.32ZM248.869 0.479999H250.529V18.56H248.869V0.479999ZM236.129 15.12L235.909 13.74C239.329 13.72 243.829 13.68 247.729 13.18L247.849 14.4C243.829 15.08 239.469 15.12 236.129 15.12ZM236.289 2.68H247.269V4.02H236.289V2.68ZM241.769 5.06C244.369 5.06 246.129 6.38 246.129 8.4C246.129 10.44 244.369 11.74 241.769 11.74C239.189 11.74 237.429 10.44 237.429 8.4C237.429 6.38 239.189 5.06 241.769 5.06ZM241.769 6.34C240.149 6.34 239.009 7.16 239.009 8.4C239.009 9.64 240.149 10.46 241.769 10.46C243.409 10.46 244.549 9.64 244.549 8.4C244.549 7.16 243.409 6.34 241.769 6.34ZM240.949 0.479999H242.609V3.42H240.949V0.479999ZM259.327 9.58H260.987V13.6H259.327V9.58ZM267.347 0.479999H269.007V14.24H267.347V0.479999ZM256.667 16.8H269.447V18.16H256.667V16.8ZM256.667 12.9H258.327V17.18H256.667V12.9ZM254.327 10.2L254.107 8.84C257.447 8.84 261.927 8.8 265.767 8.3L265.887 9.52C261.987 10.14 257.607 10.2 254.327 10.2ZM263.667 11.16H267.767V12.38H263.667V11.16ZM259.987 1.22C262.627 1.22 264.427 2.46 264.427 4.36C264.427 6.28 262.627 7.52 259.987 7.52C257.327 7.52 255.527 6.28 255.527 4.36C255.527 2.46 257.327 1.22 259.987 1.22ZM259.987 2.46C258.287 2.46 257.107 3.2 257.107 4.36C257.107 5.52 258.287 6.26 259.987 6.26C261.667 6.26 262.847 5.52 262.847 4.36C262.847 3.2 261.667 2.46 259.987 2.46ZM285.041 2.26H286.481V3.02C286.481 6.26 283.041 8.64 279.401 9.26L278.761 7.94C281.941 7.48 285.041 5.4 285.041 3.02V2.26ZM285.461 2.26H286.881V3.02C286.881 5.4 290.001 7.48 293.161 7.94L292.541 9.26C288.881 8.64 285.461 6.26 285.461 3.02V2.26ZM285.101 11.66H286.741V18.56H285.101V11.66ZM277.801 10.78H294.141V12.14H277.801V10.78ZM279.321 1.6H292.561V2.94H279.321V1.6ZM296.179 9.72H312.559V11.08H296.179V9.72ZM303.659 10.56H305.319V14.72H303.659V10.56ZM298.279 1.32H310.439V7.68H298.279V1.32ZM308.799 2.66H299.899V6.34H308.799V2.66ZM298.259 16.8H310.739V18.16H298.259V16.8ZM298.259 12.98H299.899V17.28H298.259V12.98ZM319.793 14.86H336.173V16.24H319.793V14.86ZM327.153 10.48H328.793V15.32H327.153V10.48ZM327.113 2.76H328.513V3.88C328.513 7.58 324.813 10.38 321.253 11.12L320.573 9.8C323.693 9.28 327.113 6.74 327.113 3.88V2.76ZM327.413 2.76H328.813V3.88C328.813 6.74 332.253 9.22 335.413 9.74L334.753 11.06C331.133 10.34 327.413 7.58 327.413 3.88V2.76ZM321.133 2.12H334.793V3.48H321.133V2.12ZM343.331 11.32H345.011V14.3H343.331V11.32ZM351.251 0.479999H352.911V18.56H351.251V0.479999ZM338.511 15.12L338.291 13.74C341.711 13.72 346.211 13.68 350.111 13.18L350.231 14.4C346.211 15.08 341.851 15.12 338.511 15.12ZM338.671 2.68H349.651V4.02H338.671V2.68ZM344.151 5.06C346.751 5.06 348.511 6.38 348.511 8.4C348.511 10.44 346.751 11.74 344.151 11.74C341.571 11.74 339.811 10.44 339.811 8.4C339.811 6.38 341.571 5.06 344.151 5.06ZM344.151 6.34C342.531 6.34 341.391 7.16 341.391 8.4C341.391 9.64 342.531 10.46 344.151 10.46C345.791 10.46 346.931 9.64 346.931 8.4C346.931 7.16 345.791 6.34 344.151 6.34ZM343.331 0.479999H344.991V3.42H343.331V0.479999Z"
          fill="#202123"
        />
      </svg>
      <InputWrapper
        onChange={OrderNumberChange}
        value={OrderNumber}
        id="ordernumber"
        placeholder="주문번호"
      />
      <InputWrapper
        onChange={OrderNameChange}
        value={OrderName}
        id="ordername"
        placeholder="주문자명"
      />
      <InputWrapper
        onChange={OrderContactChange}
        value={OrderContact}
        id="ordercontact"
        placeholder="주문자 연락처"
      />
      <ConfirmButton>확인</ConfirmButton>
      <TextWrapper>
        <span style={{ marginRight: `${11 / 19.2}vw` }}>&#8226;</span>비회원은
        정보 수정이 불가하며, 주문 조회만 가능합니다.
        <br />
        <span style={{ marginRight: `${11 / 19.2}vw` }}>&#8226;</span>더 굿즈에
        회원가입하면 구매한 폼을 간편하게 조회하고 관리할 수 있습니다. <br />
        <FindLink
          onClick={() => {
            navigate("/register");
          }}
        >
          더 굿즈 회원가입하기(클릭)
        </FindLink>
      </TextWrapper>
    </FindGuestOrderWrapper>
  );
};

export default FindGuestOrder;
