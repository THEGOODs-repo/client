import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import logo from "../../img/logo.svg";
import defaultprofile from "../../img/defaultprofile.png";
import ErrorModal from "./ErrorModal";

const FindEmailWrapper = styled.div`
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
  display: flex;
  width: 100%;
  margin: ${54 / 19.2}vw 0 ${42 / 19.2}vw 0;
  padding: 0;
  font-size: ${23 / 19.2}vw;
  justify-content: center;
  text-align: center;
`;

const InputWrapper = styled.input`
  display: flex;
  margin: ${10 / 19.2}vw 0 0 0;
  width: ${(e) => e.$width / 19.2}vw;
  height: ${60 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${3 / 19.2}vw;
  border: ${1 / 19.2}vw solid #9c9c9c;
  font-size: ${18 / 19.2}vw;
  padding: 0 0 0 ${17 / 19.2}vw;

  &.invalidinput {
    border: ${1 / 19.2}vw solid #fd3c56;
  }

  &.block {
    pointer-events: none;
    background: rgba(156, 156, 156, 0.2);
  }
`;

const DuplicateCheckButton = styled.div`
  display: flex;
  width: ${132 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${3 / 19.2}vw;
  background: #f0c920;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  padding: 0;
  margin: ${10 / 19.2}vw 0 0 ${4 / 19.2}vw;
  &.gray {
    background: rgba(156, 156, 156, 0.3);
    color: #9c9c9c;
  }
  &.white {
    border: ${1 / 19.2}vw solid rgba(156, 156, 156, 0.5);
    opacity: 0.8;
    background: #f9f9f9;
    color: #888;
  }
`;

const WarningText = styled.div`
  font-size: ${14 / 19.2}vw;
  height: ${24 / 19.2}vw;
  color: #fd3c56;
  padding: ${9 / 19.2}vw 0 0 ${1 / 19.2}vw;
  margin: 0;
  align-self: flex-start;
`;

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
  margin: 0 0 ${18 / 19.2}vw 0;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: ${80 / 19.2}vw;
  height: ${80 / 19.2}vw;
  align-self: center;
  margin: ${29 / 19.2}vw 0 0 0;
  object-fit: cover;
`;

const LoginImg = {
  display: "flex",
  width: `${570 / 19.2}vw`,
  margin: `${14 / 19.2}vw 0 ${24 / 19.2}vw 0`,
  padding: 0,
};

const FindEmail = () => {
  const [IsFound, SetIsFound] = useState(false);
  const [Cell, SetCell] = useState("");
  const [DeActive, SetDeActive] = useState(false);
  const [ValidCell, SetValidCell] = useState(false);
  const [DisplayVerificationCell, SetDisplayVerificationCell] = useState(false);
  const [VerificationCell, SetVerificationCell] = useState("");
  const [BlockCell, SetBlockCell] = useState(false);
  const [ValidVerifcationCell, SetValidVerifcationCell] = useState(false);
  const [VerifiedCell, SetVerifiedCell] = useState(false);
  const [isRequesting, SetIsRequesting] = useState(false);
  const [DisplayErrorModal, SetDisplayErrorModal] = useState(false);
  const [DisplayErrorMSG, SetDisplayErrorMSG] = useState("");
  const [Email, SetEmail] = useState("");

  useEffect(() => {
    var ValidCellPattern = new RegExp(/^(01[0,2][0-9]{8})$/);
    SetValidCell(ValidCellPattern.test(Cell));
  }, [Cell, DeActive]);

  useEffect(() => {
    var VerificationCellPattern = new RegExp(/^([0-9]{4})$/);
    SetValidVerifcationCell(VerificationCellPattern.test(VerificationCell));
  }, [VerificationCell, DeActive]);

  useEffect(() => {
    SetValidCell(true);
  }, []);
  const CellChange = (e) => {
    var CellPattern = new RegExp(/^([0-9]{0,11})$/);
    if (!isNaN(e.target.value) && CellPattern.test(e.target.value)) {
      !DeActive && !BlockCell && SetCell(e.target.value);
    }
  };

  const VerificationCellChange = (e) => {
    var VerificationCellPattern = new RegExp(/^([0-9]{0,4})$/);
    if (
      !isNaN(e.target.value) &&
      VerificationCellPattern.test(e.target.value)
    ) {
      !DeActive && !VerifiedCell && SetVerificationCell(e.target.value);
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
      SetDisplayErrorModal(true);
      SetDisplayErrorMSG("잠시만 기다려주세요. 메시지가 가고 있습니다.");
    }
  };

  const fetchPhoneAuth = async () => {
    SetDeActive((DeActive) => !DeActive);
    try {
      const endpoint = `/api/members/phone/auth`;
      const requestBody = {
        phone: Cell,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
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
    SetDeActive((DeActive) => !DeActive);
  };

  const fetchPhoneAuthVerify = async () => {
    SetDeActive((DeActive) => !DeActive);
    try {
      const endpoint = `/api/members/phone/auth/verify/find/email`;
      const requestBody = {
        phone: Cell,
        code: VerificationCell,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.isSuccess === true) {
        console.log(response);
        SetEmail(response.data.result.email);
        SetVerifiedCell(true);
        SetIsFound(true);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          SetDisplayErrorModal(true);
          SetDisplayErrorMSG(
            "인증번호가 일치하지 않습니다. 확인 후 다시 입력해주세요."
          );
        } else if (error.response.status === 500) {
          SetDisplayErrorModal(true);
          SetDisplayErrorMSG("가입되지 않은 회원입니다.");
        } else {
          console.log("Unhandled error:", error.response.data);
        }
      } else if (error.request) {
        console.log("No response received:", error.request);
      } else {
        console.log("Error:", error.message);
      }
    }
    SetDeActive((DeActive) => !DeActive);
  };

  if (IsFound)
    return (
      <FindEmailWrapper>
        <LogoWrapper src={logo} />

        <svg
          viewBox="0 0 570 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={LoginImg}
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
            d="M254.605 5.5H258.625V6.84H254.605V5.5ZM254.465 10.04H258.585V11.38H254.465V10.04ZM261.365 0.479999H262.965V18.56H261.365V0.479999ZM257.745 0.939999H259.305V17.64H257.745V0.939999ZM253.705 2.76H255.305C255.305 7.5 253.405 11.76 248.545 14.66L247.585 13.48C251.805 10.92 253.705 7.32 253.705 3.06V2.76ZM248.385 2.76H254.365V4.12H248.385V2.76ZM275.644 5.16H279.724V6.54H275.644V5.16ZM279.204 0.479999H280.864V11.26H279.204V0.479999ZM274.924 11.8C278.644 11.8 280.944 13.06 280.944 15.18C280.944 17.32 278.644 18.54 274.924 18.54C271.184 18.54 268.884 17.32 268.884 15.18C268.884 13.06 271.184 11.8 274.924 11.8ZM274.924 13.1C272.204 13.1 270.544 13.86 270.544 15.18C270.544 16.48 272.204 17.24 274.924 17.24C277.644 17.24 279.304 16.48 279.304 15.18C279.304 13.86 277.644 13.1 274.924 13.1ZM270.604 2.3H271.964V3.76C271.964 7.1 269.924 9.96 266.924 11.08L266.064 9.76C268.744 8.78 270.604 6.36 270.604 3.76V2.3ZM270.924 2.3H272.264V3.76C272.264 6.1 274.024 8.34 276.644 9.26L275.804 10.58C272.864 9.52 270.924 6.8 270.924 3.76V2.3ZM266.564 1.8H276.224V3.16H266.564V1.8ZM294.318 8.96H295.978V11.28H294.318V8.96ZM301.938 0.499999H303.598V12.62H301.938V0.499999ZM302.898 5.96H306.238V7.34H302.898V5.96ZM289.698 12.1L289.478 10.74C292.718 10.74 297.118 10.74 300.858 10.2L300.998 11.38C297.138 12.06 292.858 12.08 289.698 12.1ZM291.718 13.52H303.598V18.56H301.938V14.84H291.718V13.52ZM289.938 2.12H300.318V3.36H289.938V2.12ZM295.138 4.06C297.678 4.06 299.338 5.08 299.338 6.74C299.338 8.4 297.678 9.42 295.138 9.42C292.578 9.42 290.918 8.4 290.918 6.74C290.918 5.08 292.578 4.06 295.138 4.06ZM295.138 5.2C293.518 5.2 292.478 5.78 292.478 6.74C292.478 7.66 293.518 8.26 295.138 8.26C296.738 8.26 297.778 7.66 297.778 6.74C297.778 5.78 296.738 5.2 295.138 5.2ZM294.318 0.339999H295.978V2.72H294.318V0.339999ZM321.136 0.499999H322.816V13.7H321.136V0.499999ZM311.196 16.8H323.356V18.16H311.196V16.8ZM311.196 12.34H312.836V17.26H311.196V12.34ZM313.116 1.74C315.816 1.74 317.816 3.58 317.816 6.2C317.816 8.8 315.816 10.66 313.116 10.66C310.416 10.66 308.396 8.8 308.396 6.2C308.396 3.58 310.416 1.74 313.116 1.74ZM313.116 3.18C311.356 3.18 310.016 4.42 310.016 6.2C310.016 7.96 311.356 9.2 313.116 9.2C314.876 9.2 316.216 7.96 316.216 6.2C316.216 4.42 314.876 3.18 313.116 3.18Z"
            fill="#202123"
          />
        </svg>
        <ProfileImage src={defaultprofile} />
        <TextWrapper>
          {[
            Cell.substring(0, 3),
            Cell.substring(3, 7),
            Cell.substring(7, 11),
          ].join("-")}
          로 회원가입한 계정을 찾았습니다.
          <br />
          {Email}
        </TextWrapper>
        <ConfirmButton>내 계정 확인하기</ConfirmButton>
      </FindEmailWrapper>
    );
  else
    return (
      <FindEmailWrapper>
        <ErrorModal
          isOpen={DisplayErrorModal}
          text={[DisplayErrorMSG]}
          onClose={() => SetDisplayErrorModal(!DisplayErrorModal)}
        />
        <LogoWrapper src={logo} />
        <svg
          viewBox="0 0 570 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={LoginImg}
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
            d="M209.891 0.46H211.551V18.58H209.891V0.46ZM202.011 1.86C204.691 1.86 206.611 4.32 206.611 8.16C206.611 12.02 204.691 14.48 202.011 14.48C199.351 14.48 197.431 12.02 197.431 8.16C197.431 4.32 199.351 1.86 202.011 1.86ZM202.011 3.36C200.251 3.36 199.011 5.24 199.011 8.16C199.011 11.1 200.251 13.02 202.011 13.02C203.791 13.02 205.011 11.1 205.011 8.16C205.011 5.24 203.791 3.36 202.011 3.36ZM215.81 2.56H222.71V13.72H215.81V2.56ZM221.15 3.88H217.37V12.4H221.15V3.88ZM228.93 0.479999H230.53V18.56H228.93V0.479999ZM221.87 7.28H226.03V8.66H221.87V7.28ZM225.35 0.859999H226.93V17.66H225.35V0.859999ZM238.628 1.14C241.328 1.14 243.308 2.78 243.308 5.16C243.308 7.52 241.328 9.16 238.628 9.16C235.948 9.16 233.968 7.52 233.968 5.16C233.968 2.78 235.948 1.14 238.628 1.14ZM238.628 2.5C236.888 2.5 235.568 3.6 235.568 5.16C235.568 6.72 236.888 7.8 238.628 7.8C240.388 7.8 241.688 6.72 241.688 5.16C241.688 3.6 240.388 2.5 238.628 2.5ZM246.708 0.479999H248.388V9.74H246.708V0.479999ZM236.688 10.62H248.388V15.02H238.348V17.74H236.728V13.78H246.748V11.96H236.688V10.62ZM236.728 17H248.988V18.32H236.728V17ZM258.487 2.72L253.167 17H251.147L256.467 2.72H258.487ZM272.763 0.46H274.423V18.58H272.763V0.46ZM260.663 2H262.303V6.78H267.523V2H269.183V14.22H260.663V2ZM262.303 8.1V12.86H267.523V8.1H262.303ZM278.981 1.48H287.401V8.88H278.981V1.48ZM285.801 2.8H280.581V7.54H285.801V2.8ZM291.181 0.479999H292.841V9.78H291.181V0.479999ZM281.141 10.68H292.841V15.06H282.801V17.6H281.181V13.82H291.201V12H281.141V10.68ZM281.181 17.04H293.461V18.36H281.181V17.04ZM304.959 5.58H310.159V6.94H304.959V5.58ZM309.639 0.499999H311.299V13.88H309.639V0.499999ZM299.679 16.8H311.739V18.16H299.679V16.8ZM299.679 12.58H301.339V17.5H299.679V12.58ZM297.319 1.68H298.959V4.88H303.859V1.68H305.479V10.8H297.319V1.68ZM298.959 6.18V9.44H303.859V6.18H298.959ZM315.638 3.12H330.318V4.48H315.638V3.12ZM314.838 15.08H331.218V16.46H314.838V15.08ZM322.178 12.22H323.818V15.62H322.178V12.22ZM322.978 5.7C326.638 5.7 328.898 6.96 328.898 9.14C328.898 11.32 326.638 12.58 322.978 12.58C319.338 12.58 317.078 11.32 317.078 9.14C317.078 6.96 319.338 5.7 322.978 5.7ZM322.978 7C320.358 7 318.738 7.8 318.738 9.14C318.738 10.48 320.358 11.26 322.978 11.26C325.618 11.26 327.218 10.48 327.218 9.14C327.218 7.8 325.618 7 322.978 7ZM322.178 0.779999H323.818V3.96H322.178V0.779999ZM342.932 3.46H344.292V4.24C344.292 7.32 342.252 9.82 339.212 10.78L338.432 9.48C341.112 8.66 342.932 6.6 342.932 4.24V3.46ZM343.232 3.46H344.592V4.24C344.592 6.4 346.352 8.36 349.012 9.14L348.232 10.42C345.212 9.52 343.232 7.12 343.232 4.24V3.46ZM338.932 2.58H348.572V3.92H338.932V2.58ZM342.932 0.399999H344.592V3.14H342.932V0.399999ZM350.792 0.479999H352.452V10.98H350.792V0.479999ZM351.992 4.94H355.132V6.32H351.992V4.94ZM345.972 12.48H347.392V12.96C347.392 15.8 344.392 17.9 340.852 18.5L340.212 17.22C343.332 16.74 345.972 14.98 345.972 12.96V12.48ZM346.292 12.48H347.712V12.96C347.712 14.94 350.392 16.74 353.452 17.24L352.832 18.52C349.292 17.92 346.292 15.74 346.292 12.96V12.48ZM340.912 11.96H352.772V13.3H340.912V11.96ZM369.99 0.479999H371.65V18.56H369.99V0.479999ZM364.69 2.42H366.33C366.33 7.66 363.97 12.24 357.93 15.2L357.05 13.86C362.27 11.34 364.69 7.5 364.69 2.7V2.42ZM357.87 2.42H365.41V3.78H357.87V2.42Z"
            fill="#202123"
          />
        </svg>
        <TextWrapper>
          더 굿즈 계정 연동 전화번호를 입력해주세요.
          <br />
          <br />
        </TextWrapper>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <InputWrapper
            maxLength="11"
            $width={416}
            onChange={CellChange}
            value={Cell}
            key="cell"
            placeholder="- 를 제외한 번호만 입력해주세요."
            className={(!ValidCell && "invalidinput") || (BlockCell && "block")}
          ></InputWrapper>
          <DuplicateCheckButton
            className={(!ValidCell || VerifiedCell) && "gray"}
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
          </DuplicateCheckButton>
        </div>
        {!DisplayVerificationCell && (
          <WarningText>
            {!ValidCell && "정확한 휴대폰번호를 입력해 주세요."}
            {ValidCell &&
              VerificationCell !== "" &&
              !VerifiedCell &&
              "전화번호 인증이 필요합니다."}
          </WarningText>
        )}
        {DisplayVerificationCell && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {!VerifiedCell && (
              <WarningText>전화번호 인증이 필요합니다.</WarningText>
            )}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <InputWrapper
                $width={416}
                onChange={VerificationCellChange}
                key="verificationcell"
                value={VerificationCell}
                placeholder="인증코드를 입력해주세요."
                className={
                  (!ValidVerifcationCell && "invalidinput") ||
                  (VerifiedCell && "block")
                }
              ></InputWrapper>
              <DuplicateCheckButton
                className={
                  (!ValidVerifcationCell && "white") ||
                  (VerifiedCell && "white")
                }
                onClick={fetchPhoneAuthVerify}
              >
                확인
              </DuplicateCheckButton>
            </div>
            <WarningText>
              {!ValidVerifcationCell &&
                (VerificationCell === ""
                  ? "필수 항목입니다."
                  : "4자리 숫자로 입력해 주세요.")}
            </WarningText>
          </div>
        )}
      </FindEmailWrapper>
    );
};

export default FindEmail;
