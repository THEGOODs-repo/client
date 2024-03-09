import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import logo from "../../img/loginlogo.svg";
import ErrorModal from "./ErrorModal";
import { useNavigate } from "react-router-dom";

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
  width: ${318 / 19.2}vw;
  cursor: grab;
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
  margin: 0 0 0 0;
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
  background: rgba(249, 249, 249);
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
  margin: 0 0 0 ${4 / 19.2}vw;
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
  cursor: grab;
`;
const InputTextWrapper = styled.div`
  margin: ${10 / 19.2}vw 0 ${6 / 19.2}vw ${1 / 19.2}vw;
  font-size: ${16 / 19.2}vw;
  flex-shrink: 0;
  color: #52555b;
  align-self: flex-start;
  font-weight: bold;
`;

const WarningText = styled.div`
  font-size: ${14 / 19.2}vw;
  height: ${24 / 19.2}vw;
  color: #fd3c56;
  padding: ${6 / 19.2}vw 0 0 ${1 / 19.2}vw;
  margin: 0;
  align-self: flex-start;
`;

const ConfirmButton = styled.div`
  display: flex;
  width: ${460 / 19.2}vw;
  height: ${55 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  background: #f0c920;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  padding: 0;
  font-weight: bold;
  margin: 0 0 ${18 / 19.2}vw 0;
  cursor: grab;
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
  margin: `${40 / 19.2}vw 0 ${24 / 19.2}vw 0`,
  padding: 0,
};

const FindEmail = () => {
  const navigate = useNavigate();
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
  const [ImgUrl, SetImgUrl] = useState(null);

  useEffect(() => {
    var ValidCellPattern = new RegExp(/^(01[0,2][0-9]{8})$/);
    SetValidCell(ValidCellPattern.test(Cell));
  }, [Cell]);

  useEffect(() => {
    var VerificationCellPattern = new RegExp(/^([0-9]{4})$/);
    SetValidVerifcationCell(VerificationCellPattern.test(VerificationCell));
  }, [VerificationCell]);

  useEffect(() => {
    SetValidCell(true);
    SetValidVerifcationCell(true);
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

  const HandlePhoneAuthVerify = () => {
    ValidVerifcationCell && VerificationCell !== "" && fetchPhoneAuthVerify();
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
        SetImgUrl(response.data.result.imgUrl);
        SetVerifiedCell(true);
        SetIsFound(true);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          SetDisplayErrorModal(true);
          SetDisplayErrorMSG(
            "인증번호가 일치하지 않습니다. 확인 후 다시 입력해주세요.",
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
        <LogoWrapper src={logo} onClick={() => navigate("/")} />
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

        {ImgUrl === null ? (
          <ProfileImage style={{ background: "rgba(217,217,217)" }} />
        ) : (
          <ProfileImage src={ImgUrl} />
        )}
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
        <ConfirmButton onClick={() => navigate("/login", { replace: true })}>
          로그인하기
        </ConfirmButton>
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
        <LogoWrapper src={logo} onClick={() => navigate("/")} />

        <svg
          viewBox="0 0 565 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={LoginImg}
        >
          <line
            x1="4.37114e-08"
            y1="12.5"
            x2="175"
            y2="12.5"
            stroke="#202123"
          />
          <line x1="390" y1="12.5" x2="565" y2="12.5" stroke="#202123" />
          <path
            d="M199.474 5.86C200.367 5.86 201.154 6.12 201.834 6.64C202.514 7.14667 203.047 7.87333 203.434 8.82C203.82 9.76667 204.014 10.88 204.014 12.16C204.014 13.44 203.82 14.5533 203.434 15.5C203.047 16.4467 202.514 17.18 201.834 17.7C201.154 18.22 200.367 18.48 199.474 18.48C198.594 18.48 197.807 18.22 197.114 17.7C196.434 17.18 195.9 16.4467 195.514 15.5C195.127 14.5533 194.934 13.44 194.934 12.16C194.934 10.88 195.127 9.76667 195.514 8.82C195.9 7.87333 196.434 7.14667 197.114 6.64C197.807 6.12 198.594 5.86 199.474 5.86ZM199.474 7.34C198.9 7.34 198.387 7.54 197.934 7.94C197.494 8.32667 197.147 8.88667 196.894 9.62C196.64 10.34 196.514 11.1867 196.514 12.16C196.514 13.1333 196.64 13.9867 196.894 14.72C197.147 15.44 197.494 16 197.934 16.4C198.387 16.8 198.907 17 199.494 17C200.067 17 200.574 16.8 201.014 16.4C201.467 16 201.814 15.44 202.054 14.72C202.307 13.9867 202.434 13.1333 202.434 12.16C202.434 11.1867 202.307 10.34 202.054 9.62C201.814 8.88667 201.467 8.32667 201.014 7.94C200.574 7.54 200.06 7.34 199.474 7.34ZM206.914 4.46H208.574V22.56H206.914V4.46ZM208.194 11.68H211.534V13.08H208.194V11.68ZM226.212 4.46H227.872V22.58H226.212V4.46ZM218.332 5.86C219.226 5.86 220.012 6.12 220.692 6.64C221.386 7.14667 221.926 7.87333 222.312 8.82C222.712 9.76667 222.912 10.88 222.912 12.16C222.912 13.44 222.712 14.5533 222.312 15.5C221.926 16.4467 221.386 17.18 220.692 17.7C220.012 18.22 219.226 18.48 218.332 18.48C217.439 18.48 216.646 18.22 215.952 17.7C215.259 17.18 214.712 16.4467 214.312 15.5C213.926 14.5533 213.732 13.44 213.732 12.16C213.732 10.88 213.926 9.76667 214.312 8.82C214.712 7.87333 215.259 7.14667 215.952 6.64C216.646 6.12 217.439 5.86 218.332 5.86ZM218.332 7.34C217.732 7.34 217.206 7.54 216.752 7.94C216.312 8.32667 215.966 8.88667 215.712 9.62C215.459 10.34 215.332 11.1867 215.332 12.16C215.332 13.1333 215.459 13.9867 215.712 14.72C215.966 15.44 216.312 16 216.752 16.4C217.206 16.8 217.732 17 218.332 17C218.919 17 219.432 16.8 219.872 16.4C220.326 16 220.679 15.44 220.932 14.72C221.186 13.9867 221.312 13.1333 221.312 12.16C221.312 11.1867 221.186 10.34 220.932 9.62C220.679 8.88667 220.326 8.32667 219.872 7.94C219.432 7.54 218.919 7.34 218.332 7.34ZM244.611 4.46H246.271V22.58H244.611V4.46ZM232.631 16.68H234.091C235.291 16.68 236.371 16.6667 237.331 16.64C238.291 16.6133 239.197 16.5533 240.051 16.46C240.917 16.3667 241.797 16.24 242.691 16.08L242.851 17.48C241.944 17.6533 241.051 17.7867 240.171 17.88C239.291 17.96 238.364 18.02 237.391 18.06C236.417 18.0867 235.317 18.1 234.091 18.1H232.631V16.68ZM232.631 6.18H241.171V7.56H234.291V17.2H232.631V6.18ZM256.389 6.72L251.069 21H249.049L254.369 6.72H256.389ZM270.685 4.46H272.345V22.58H270.685V4.46ZM258.565 6H260.225V10.76H265.445V6H267.085V18.22H258.565V6ZM260.225 12.08V16.84H265.445V12.08H260.225ZM276.883 5.46H285.323V12.86H276.883V5.46ZM283.703 6.8H278.503V11.54H283.703V6.8ZM289.103 4.46H290.763V13.76H289.103V4.46ZM279.063 14.68H290.763V19.04H280.723V21.58H279.103V17.82H289.123V16H279.063V14.68ZM279.103 21.02H291.363V22.36H279.103V21.02ZM302.882 9.56H308.062V10.92H302.882V9.56ZM307.562 4.48H309.222V17.86H307.562V4.48ZM297.602 20.8H309.642V22.16H297.602V20.8ZM297.602 16.56H299.262V21.48H297.602V16.56ZM295.222 5.68H296.882V8.86H301.762V5.68H303.402V14.78H295.222V5.68ZM296.882 10.16V13.44H301.762V10.16H296.882ZM313.54 7.12H328.24V8.48H313.54V7.12ZM312.74 19.08H329.14V20.44H312.74V19.08ZM320.08 16.2H321.72V19.6H320.08V16.2ZM320.9 9.68C322.114 9.68 323.16 9.82 324.04 10.1C324.934 10.3667 325.62 10.7533 326.1 11.26C326.58 11.7667 326.82 12.3867 326.82 13.12C326.82 13.84 326.58 14.46 326.1 14.98C325.62 15.5 324.934 15.9 324.04 16.18C323.16 16.4467 322.114 16.58 320.9 16.58C319.687 16.58 318.634 16.4467 317.74 16.18C316.86 15.9 316.18 15.5 315.7 14.98C315.22 14.46 314.98 13.84 314.98 13.12C314.98 12.3867 315.22 11.7667 315.7 11.26C316.18 10.7533 316.86 10.3667 317.74 10.1C318.634 9.82 319.687 9.68 320.9 9.68ZM320.9 11C320.02 11 319.26 11.0867 318.62 11.26C317.994 11.42 317.507 11.66 317.16 11.98C316.827 12.2867 316.66 12.6667 316.66 13.12C316.66 13.56 316.827 13.94 317.16 14.26C317.507 14.58 317.994 14.8267 318.62 15C319.26 15.16 320.02 15.24 320.9 15.24C321.78 15.24 322.534 15.16 323.16 15C323.787 14.8267 324.274 14.58 324.62 14.26C324.967 13.94 325.14 13.56 325.14 13.12C325.14 12.6667 324.967 12.2867 324.62 11.98C324.274 11.66 323.787 11.42 323.16 11.26C322.534 11.0867 321.78 11 320.9 11ZM320.08 4.76H321.72V7.94H320.08V4.76ZM346.049 7.44H347.389V8.22C347.389 9.24667 347.176 10.1933 346.749 11.06C346.336 11.9267 345.749 12.68 344.989 13.32C344.229 13.96 343.343 14.4467 342.329 14.78L341.529 13.46C342.423 13.18 343.209 12.78 343.889 12.26C344.569 11.74 345.096 11.1333 345.469 10.44C345.856 9.74667 346.049 9.00667 346.049 8.22V7.44ZM346.329 7.44H347.689V8.22C347.689 8.94 347.869 9.62667 348.229 10.28C348.603 10.92 349.123 11.4933 349.789 12C350.456 12.4933 351.229 12.8733 352.109 13.14L351.349 14.42C350.336 14.1133 349.449 13.66 348.689 13.06C347.943 12.4467 347.363 11.7267 346.949 10.9C346.536 10.0733 346.329 9.18 346.329 8.22V7.44ZM342.029 6.56H351.689V7.9H342.029V6.56ZM346.049 4.38H347.709V7.12H346.049V4.38ZM353.909 4.46H355.569V14.96H353.909V4.46ZM355.109 8.92H358.229V10.3H355.109V8.92ZM349.089 16.46H350.489V16.94C350.489 17.6467 350.316 18.3067 349.969 18.92C349.636 19.5333 349.163 20.08 348.549 20.56C347.949 21.04 347.256 21.44 346.469 21.76C345.683 22.0933 344.843 22.3333 343.949 22.48L343.329 21.2C344.103 21.0933 344.836 20.9067 345.529 20.64C346.223 20.3733 346.836 20.0533 347.369 19.68C347.903 19.2933 348.323 18.8667 348.629 18.4C348.936 17.9333 349.089 17.4467 349.089 16.94V16.46ZM349.389 16.46H350.809V16.94C350.809 17.4467 350.963 17.9267 351.269 18.38C351.589 18.8333 352.016 19.2533 352.549 19.64C353.083 20.0267 353.689 20.36 354.369 20.64C355.063 20.9067 355.796 21.1 356.569 21.22L355.949 22.5C355.056 22.34 354.216 22.0933 353.429 21.76C352.643 21.44 351.943 21.04 351.329 20.56C350.729 20.0667 350.256 19.5133 349.909 18.9C349.563 18.2867 349.389 17.6333 349.389 16.94V16.46ZM344.029 15.94H355.869V17.3H344.029V15.94ZM373.108 4.46H374.768V22.56H373.108V4.46ZM367.808 6.42H369.448C369.448 7.72667 369.288 8.98667 368.968 10.2C368.661 11.4133 368.174 12.5667 367.508 13.66C366.841 14.74 365.974 15.7467 364.908 16.68C363.841 17.6133 362.548 18.4467 361.028 19.18L360.148 17.84C361.894 17 363.334 16.02 364.468 14.9C365.601 13.78 366.441 12.5333 366.988 11.16C367.534 9.77333 367.808 8.28 367.808 6.68V6.42ZM360.988 6.42H368.508V7.76H360.988V6.42Z"
            fill="#202123"
          />
        </svg>

        <TextWrapper>
          더 굿즈 계정 연동 전화번호를 입력해주세요.
          <br />
        </TextWrapper>
        <InputTextWrapper>
          전화번호
          <span style={{ color: "#F0C920", marginLeft: "0.26vw" }}>*</span>
        </InputTextWrapper>
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
            className={(!ValidCell || VerifiedCell || Cell === "") && "gray"}
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
            {!VerifiedCell && VerificationCell !== "" && (
              <WarningText>전화번호 인증이 필요합니다.</WarningText>
            )}
            {!VerifiedCell && VerificationCell === "" && (
              <div style={{ marginTop: `${10 / 19.2}vw` }}></div>
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
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
                onClick={HandlePhoneAuthVerify}
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
