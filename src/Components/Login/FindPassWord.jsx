import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import logo from "../../img/loginlogo.svg";
import ErrorModal from "./ErrorModal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/loginSlice";

const FindPassWordWrapper = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  margin: ${105 / 19.2}vw 0 0 0;
  font-family: NotoSans;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
`;

const LogoWrapper = styled.img`
  width: ${318 / 19.2}vw;
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

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: ${54 / 19.2}vw 0 ${42 / 19.2}vw 0;
  padding: 0;
  font-size: ${23 / 19.2}vw;
  justify-content: center;
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
  margin: ${36 / 19.2}vw 0 0 0;

  &.invalid {
    color: gray;
    background: rgba(156, 156, 156, 0.3);
  }
`;

const LoginImg = {
  display: "flex",
  width: `${570 / 19.2}vw`,
  margin: `${40 / 19.2}vw 0 ${24 / 19.2}vw 0`,
  padding: 0,
};

const FindPassWord = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [IsFound, SetIsFound] = useState(false);
  const [Email, SetEmail] = useState("");
  const [DeActive, SetDeActive] = useState(false);
  const [ValidEmail, SetValidEmail] = useState(false);
  const [DisplayVerificationEmail, SetDisplayVerificationEmail] =
    useState(false);
  const [VerificationEmail, SetVerificationEmail] = useState("");
  const [BlockEmail, SetBlockEmail] = useState(false);
  const [ValidVerifcationEmail, SetValidVerifcationEmail] = useState(false);
  const [VerifiedEmail, SetVerifiedEmail] = useState(false);
  const [isRequesting, SetIsRequesting] = useState(false);
  const [DisplayErrorModal, SetDisplayErrorModal] = useState(false);
  const [DisplayErrorMSG, SetDisplayErrorMSG] = useState("");
  const [NewPassword, SetNewPassword] = useState("");
  const [NewPasswordCheck, SetNewPasswordCheck] = useState("");
  const [ValidNewPassword, SetValidNewPassword] = useState("");
  const [ValidNewPasswordCheck, SetValidNewPasswordCheck] = useState("");
  const token = useSelector((state) => state.login.token);

  useEffect(() => {
    var pattern = new RegExp(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    );
    SetValidEmail(pattern.test(Email));
  }, [Email, DeActive]);

  useEffect(() => {
    var VerificationEmailPattern = new RegExp(/^([0-9]{4})$/);
    SetValidVerifcationEmail(VerificationEmailPattern.test(VerificationEmail));
    SetBlockEmail(VerificationEmail !== "");
  }, [VerificationEmail, DeActive]);

  useEffect(() => {
    var pattern = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
    );
    SetValidNewPassword(pattern.test(NewPassword));
  }, [NewPassword, DeActive]);

  useEffect(() => {
    var pattern = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
    );
    SetValidNewPasswordCheck(pattern.test(NewPasswordCheck));
  }, [NewPasswordCheck, DeActive]);

  useEffect(() => {
    SetValidEmail(true);
    SetValidNewPassword(true);
    SetValidNewPasswordCheck(true);
  }, []);

  const EmailChange = (e) => {
    !DeActive && !BlockEmail && SetEmail(e.target.value);
  };

  const NewPasswordChange = (e) => {
    !DeActive && SetNewPassword(e.target.value);
  };

  const NewPasswordCheckChange = (e) => {
    !DeActive && SetNewPasswordCheck(e.target.value);
  };

  const VerificationEmailChange = (e) => {
    var VerificationEmailPattern = new RegExp(/^([0-9]{0,4})$/);
    if (
      !isNaN(e.target.value) &&
      VerificationEmailPattern.test(e.target.value)
    ) {
      !DeActive && !VerifiedEmail && SetVerificationEmail(e.target.value);
    }
  };

  const HandleChangePassword = () => {
    ValidNewPassword && ValidNewPasswordCheck && fetchChangePassword();
  };

  const fetchChangePassword = async () => {
    SetDeActive((DeActive) => !DeActive);
    try {
      const endpoint = `${process.env.REACT_APP_BACKEND}/api/members/password/update`;
      const requestBody = {
        password: NewPassword,
        checkPassword: NewPasswordCheck,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
      if (
        response.data.isSuccess === true &&
        response.data.result.email === Email
      ) {
        console.log(response);
        navigate("/", { replace: true });
      } else if (response.data.isSuccess === false) {
        console.error(response);
        // 요청 실패시 코드작성
      }
    } catch (error) {
      console.error("Error during POST request:", error);
    }
    SetDeActive((DeActive) => !DeActive);
  };

  const HandleEmailAuth = async () => {
    if (!isRequesting && !VerifiedEmail) {
      SetIsRequesting(true);
      try {
        const response = await fetchEmailAuth();
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

  const fetchEmailAuth = async () => {
    SetDeActive((DeActive) => !DeActive);
    try {
      const endpoint = `${process.env.REACT_APP_BACKEND}/api/members/email/auth`;
      const requestBody = {
        email: Email,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
      if (
        response.data.isSuccess === true &&
        response.data.result.email === Email
      ) {
        console.log(response);
        SetDisplayVerificationEmail(true);
      } else if (response.data.isSuccess === false) {
        console.error(response);
        // 요청 실패시 코드작성
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          SetDisplayErrorModal(true);
          SetDisplayErrorMSG("가입되지 않은 이메일입니다.");
        }
      } else {
        console.log("Unhandled error:", error);
      }
    }
    SetDeActive((DeActive) => !DeActive);
  };

  const HandleEmailAuthVerify = () => {
    ValidVerifcationEmail && fetchEmailAuthVerify();
  };

  const fetchEmailAuthVerify = async () => {
    SetDeActive((DeActive) => !DeActive);
    try {
      const endpoint = `${process.env.REACT_APP_BACKEND}/api/members/email/auth/verify`;
      const requestBody = {
        email: Email,
        code: VerificationEmail,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.isSuccess === true) {
        console.log(response);
        SetEmail(response.data.result.email);
        SetVerifiedEmail(true);
        dispatch(setToken(response.data.result.jwt));
        SetIsFound(true);
      }
    } catch (error) {
      SetDisplayErrorModal(true);
      SetDisplayErrorMSG(
        "인증번호가 일치하지 않습니다. 확인 후 다시 입력해주세요.",
      );
    }
    SetDeActive((DeActive) => !DeActive);
  };

  if (IsFound)
    return (
      <FindPassWordWrapper>
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
            d="M242.327 0.46H243.987V18.58H242.327V0.46ZM230.227 2H231.867V6.78H237.087V2H238.747V14.22H230.227V2ZM231.867 8.1V12.86H237.087V8.1H231.867ZM248.545 1.48H256.965V8.88H248.545V1.48ZM255.365 2.8H250.145V7.54H255.365V2.8ZM260.745 0.479999H262.405V9.78H260.745V0.479999ZM250.705 10.68H262.405V15.06H252.365V17.6H250.745V13.82H260.765V12H250.705V10.68ZM250.745 17.04H263.025V18.36H250.745V17.04ZM274.524 5.58H279.724V6.94H274.524V5.58ZM279.204 0.499999H280.864V13.88H279.204V0.499999ZM269.244 16.8H281.304V18.16H269.244V16.8ZM269.244 12.58H270.904V17.5H269.244V12.58ZM266.884 1.68H268.524V4.88H273.424V1.68H275.044V10.8H266.884V1.68ZM268.524 6.18V9.44H273.424V6.18H268.524ZM285.202 3.12H299.882V4.48H285.202V3.12ZM284.402 15.08H300.782V16.46H284.402V15.08ZM291.742 12.22H293.382V15.62H291.742V12.22ZM292.542 5.7C296.202 5.7 298.462 6.96 298.462 9.14C298.462 11.32 296.202 12.58 292.542 12.58C288.902 12.58 286.642 11.32 286.642 9.14C286.642 6.96 288.902 5.7 292.542 5.7ZM292.542 7C289.922 7 288.302 7.8 288.302 9.14C288.302 10.48 289.922 11.26 292.542 11.26C295.182 11.26 296.782 10.48 296.782 9.14C296.782 7.8 295.182 7 292.542 7ZM291.742 0.779999H293.382V3.96H291.742V0.779999ZM316.616 3.8H321.836V5.14H316.616V3.8ZM316.616 7.7H321.876V9.04H316.616V7.7ZM321.196 0.499999H322.856V13.88H321.196V0.499999ZM311.236 16.8H323.296V18.16H311.236V16.8ZM311.236 12.58H312.896V17.5H311.236V12.58ZM308.876 1.68H310.516V4.88H315.416V1.68H317.036V10.8H308.876V1.68ZM310.516 6.18V9.44H315.416V6.18H310.516ZM335.035 3.8H339.875V5.16H335.035V3.8ZM334.875 7.56H339.755V8.92H334.875V7.56ZM339.595 0.479999H341.255V11.32H339.595V0.479999ZM333.935 1.84H335.715C335.715 6.5 332.495 9.76 327.295 11.32L326.615 9.98C331.235 8.64 333.935 5.98 333.935 2.56V1.84ZM327.555 1.84H335.075V3.2H327.555V1.84ZM335.375 11.52C339.035 11.52 341.355 12.82 341.355 15C341.355 17.18 339.035 18.48 335.375 18.48C331.715 18.48 329.395 17.18 329.395 15C329.395 12.82 331.715 11.52 335.375 11.52ZM335.375 12.82C332.735 12.82 331.035 13.64 331.035 15C331.035 16.36 332.735 17.16 335.375 17.16C338.035 17.16 339.735 16.36 339.735 15C339.735 13.64 338.035 12.82 335.375 12.82Z"
            fill="#202123"
          />
        </svg>
        <TextWrapper>새로운 비밀번호를 입력해 주세요.</TextWrapper>
        <InputTextWrapper>변경할 비밀번호</InputTextWrapper>
        <InputWrapper
          $width={552}
          onChange={NewPasswordChange}
          value={NewPassword}
          key="NewPassword"
          placeholder="변경할 비밀번호를 입력해주세요."
          className={!ValidNewPassword && "invalidinput"}
          type="password"
        />
        {!ValidNewPassword && (
          <WarningText>
            영문, 숫자, 특수문자를 조합한 8자 이상, 20자 이하의 비밀번호를
            입력해주세요.
          </WarningText>
        )}
        <InputTextWrapper>한번 더 입력</InputTextWrapper>
        <InputWrapper
          $width={552}
          onChange={NewPasswordCheckChange}
          value={NewPasswordCheck}
          key="NewPasswordCheck"
          placeholder="변경할 비밀번호를 한번 더 입력해주세요."
          className={!ValidNewPasswordCheck && "invalidinput"}
          type="password"
        />
        {!ValidNewPasswordCheck && (
          <WarningText>비밀번호를 동일하게 입력해주세요.</WarningText>
        )}
        <ConfirmButton
          onClick={HandleChangePassword}
          className={(!ValidNewPassword || !ValidNewPasswordCheck) && "invalid"}
        >
          확인
        </ConfirmButton>
      </FindPassWordWrapper>
    );
  else
    return (
      <FindPassWordWrapper>
        <ErrorModal
          isOpen={DisplayErrorModal}
          text={[DisplayErrorMSG]}
          onClose={() => SetDisplayErrorModal(!DisplayErrorModal)}
        />
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
            d="M242.327 0.46H243.987V18.58H242.327V0.46ZM230.227 2H231.867V6.78H237.087V2H238.747V14.22H230.227V2ZM231.867 8.1V12.86H237.087V8.1H231.867ZM248.545 1.48H256.965V8.88H248.545V1.48ZM255.365 2.8H250.145V7.54H255.365V2.8ZM260.745 0.479999H262.405V9.78H260.745V0.479999ZM250.705 10.68H262.405V15.06H252.365V17.6H250.745V13.82H260.765V12H250.705V10.68ZM250.745 17.04H263.025V18.36H250.745V17.04ZM274.524 5.58H279.724V6.94H274.524V5.58ZM279.204 0.499999H280.864V13.88H279.204V0.499999ZM269.244 16.8H281.304V18.16H269.244V16.8ZM269.244 12.58H270.904V17.5H269.244V12.58ZM266.884 1.68H268.524V4.88H273.424V1.68H275.044V10.8H266.884V1.68ZM268.524 6.18V9.44H273.424V6.18H268.524ZM285.202 3.12H299.882V4.48H285.202V3.12ZM284.402 15.08H300.782V16.46H284.402V15.08ZM291.742 12.22H293.382V15.62H291.742V12.22ZM292.542 5.7C296.202 5.7 298.462 6.96 298.462 9.14C298.462 11.32 296.202 12.58 292.542 12.58C288.902 12.58 286.642 11.32 286.642 9.14C286.642 6.96 288.902 5.7 292.542 5.7ZM292.542 7C289.922 7 288.302 7.8 288.302 9.14C288.302 10.48 289.922 11.26 292.542 11.26C295.182 11.26 296.782 10.48 296.782 9.14C296.782 7.8 295.182 7 292.542 7ZM291.742 0.779999H293.382V3.96H291.742V0.779999ZM312.496 3.46H313.856V4.24C313.856 7.32 311.816 9.82 308.776 10.78L307.996 9.48C310.676 8.66 312.496 6.6 312.496 4.24V3.46ZM312.796 3.46H314.156V4.24C314.156 6.4 315.916 8.36 318.576 9.14L317.796 10.42C314.776 9.52 312.796 7.12 312.796 4.24V3.46ZM308.496 2.58H318.136V3.92H308.496V2.58ZM312.496 0.399999H314.156V3.14H312.496V0.399999ZM320.356 0.479999H322.016V10.98H320.356V0.479999ZM321.556 4.94H324.696V6.32H321.556V4.94ZM315.536 12.48H316.956V12.96C316.956 15.8 313.956 17.9 310.416 18.5L309.776 17.22C312.896 16.74 315.536 14.98 315.536 12.96V12.48ZM315.856 12.48H317.276V12.96C317.276 14.94 319.956 16.74 323.016 17.24L322.396 18.52C318.856 17.92 315.856 15.74 315.856 12.96V12.48ZM310.476 11.96H322.336V13.3H310.476V11.96ZM339.555 0.479999H341.215V18.56H339.555V0.479999ZM334.255 2.42H335.895C335.895 7.66 333.535 12.24 327.495 15.2L326.615 13.86C331.835 11.34 334.255 7.5 334.255 2.7V2.42ZM327.435 2.42H334.975V3.78H327.435V2.42Z"
            fill="#202123"
          />
        </svg>
        <TextWrapper>
          더 굿즈 계정 연동 이메일을 입력해주세요.
          <br />
        </TextWrapper>
        <InputTextWrapper>
          이메일
          <span style={{ color: "#F0C920", marginLeft: "0.26vw" }}>*</span>
        </InputTextWrapper>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <InputWrapper
            $width={416}
            onChange={EmailChange}
            value={Email}
            key="Email"
            placeholder="이메일을 입력해주세요."
            className={
              (!ValidEmail && "invalidinput") || (BlockEmail && "block")
            }
          ></InputWrapper>
          <DuplicateCheckButton
            className={(!ValidEmail || VerifiedEmail) && "gray"}
            onClick={
              ValidEmail && Email !== ""
                ? () => {
                    if (BlockEmail) {
                      SetBlockEmail(false);
                      SetVerifiedEmail(false);
                      SetVerificationEmail("");
                    } else HandleEmailAuth();
                  }
                : null
            }
          >
            {BlockEmail ? "변경" : "인증요청"}
          </DuplicateCheckButton>
        </div>
        {!DisplayVerificationEmail && (
          <WarningText>
            {!ValidEmail && "정확한 이메일을 입력해 주세요."}
            {ValidEmail &&
              VerificationEmail !== "" &&
              !VerifiedEmail &&
              "이메일 인증이 필요합니다."}
          </WarningText>
        )}
        {DisplayVerificationEmail && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {!VerifiedEmail && (
              <WarningText>이메일 인증이 필요합니다.</WarningText>
            )}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <InputWrapper
                $width={416}
                onChange={VerificationEmailChange}
                key="verificationEmail"
                value={VerificationEmail}
                placeholder="인증코드를 입력해주세요."
                className={
                  (!ValidVerifcationEmail && "invalidinput") ||
                  (VerifiedEmail && "block")
                }
              ></InputWrapper>
              <DuplicateCheckButton
                className={
                  (!ValidVerifcationEmail && "white") ||
                  (VerifiedEmail && "white")
                }
                onClick={HandleEmailAuthVerify}
              >
                인증
              </DuplicateCheckButton>
            </div>
            <WarningText>
              {!ValidVerifcationEmail &&
                (VerificationEmail === ""
                  ? "필수 항목입니다."
                  : "4자리 숫자로 입력해 주세요.")}
            </WarningText>
          </div>
        )}
      </FindPassWordWrapper>
    );
};

export default FindPassWord;
