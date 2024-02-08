import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../img/logo.svg";
import { useNavigate } from "react-router-dom";

const RegisterWrapper = styled.div`
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
  margin: 0 0 ${4 / 19.2}vw 0;
`;

const RegisterImg = {
  display: "block",
  width: `${570 / 19.2}vw`,
  margin: `${4 / 19.2}vw 0 ${26 / 19.2}vw 0`,
  padding: 0,
};

const InputTextWrapper = styled.div`
  margin: ${18 / 19.2}vw 0 0 ${1 / 19.2}vw;
  font-size: ${16 / 19.2}vw;
  flex-shrink: 0;
  color: #52555b;
`;

const FormWrapper = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  font-family: NotoSans;
  flex-direction: column;
  align-items: flex-start;
  color: black;
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
`;

const BirthdayInputWrapper = styled.div`
  display: flex;
  margin: ${10 / 19.2}vw 0 0 0;
  width: ${(e) => e.$width / 19.2}vw;
  height: ${60 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${3 / 19.2}vw;
  border: ${1 / 19.2}vw solid #9c9c9c;
  font-size: ${18 / 19.2}vw;
  padding: 0;
  justify-content: center;
  align-items: center;
  &.invalidinput {
    border: ${1 / 19.2}vw solid #fd3c56;
  }
`;

const BirthdayInput = styled.input`
  width: ${(e) => e.$width / 19.2}vw;
  height: auto;
  outline: none;
  font-size: ${18 / 19.2}vw;
  border: 0;
  padding: 0;
`;

const BirthdayInputDivider = styled.div`
  font-size: ${24 / 19.2}vw;
  width: ${116 / 19.2}vw;
  align-text: center;
  color: #d6d6d6;
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
`;

const WarningText = styled.div`
  font-size: ${14 / 19.2}vw;
  height: ${24 / 19.2}vw;
  color: #fd3c56;
  padding: ${9 / 19.2}vw 0 0 ${1 / 19.2}vw;
  margin: 0;
`;

const GenderSelectionWrapper = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  flex-direction: row;
  justify-content: flex-start;
  margin: ${28 / 19.2}vw 0 0 0;
`;

const GenderSelectionText = styled.div`
  margin: 0 ${41 / 19.2}vw 0 ${9 / 19.2}vw;
  font-size: ${18 / 19.2}vw;
  color: #9c9c9c;
  flex-shrink: 0;
`;

const GenderSelectionLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  padding: 0;
  margin: 0;

  &:before {
    content: "";
    height: ${24 / 19.2}vw;
    width: ${24 / 19.2}vw;
    border: ${1 / 19.2}vw solid #9c9c9c;
    border-radius: 50%; /* Use border-radius to create a circular shape */
    background-size: ${12 / 19.2}vw ${12 / 19.2}vw;
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
    height: ${24 / 19.2}vw;
    width: ${24 / 19.2}vw;
    border: ${1 / 19.2}vw solid #9c9c9c;
    border-radius: 50%; /* Use border-radius to create a circular shape */
    background-size: ${12 / 19.2}vw ${12 / 19.2}vw;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ffffff;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="6" fill="%23F0C920" fill-opacity="1"/></svg>');
  }
`;

const GenderSelectionInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;

  &:checked + ${GenderSelectionLabel} {
    &:after {
      opacity: 1;
    }
  }
`;

const AgreeWrapper = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  margin: ${41 / 19.2}vw 0 0 0;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;
`;

const AgreeDetailWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${194 / 19.2}vw;
  border-top: ${1 / 19.2}vw solid #9c9c9c;
  border-bottom: ${1 / 19.2}vw solid #9c9c9c;
  padding: ${11 / 19.2}vw 0 ${26 / 19.2}vw 0;
  margin: ${13 / 19.2}vw 0 ${45 / 19.2}vw 0;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;
`;

const AgreeLabel = styled.label`
  position: relative;
  display: flex;
  align-items: flex-start;
  user-select: none;
  padding: 0;
  margin: 0 0 ${(e) => (e.$interval ? e.$interval / 19.2 : 0)}vw 0; /* 기본값 설정 */

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

const AgreeInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  transition: opacity 1s ease; // 추가된 부분

  &:checked + ${AgreeLabel} {
    &:after {
      opacity: 1;
      transition: opacity 0.1s;
    }
  }
`;

const AgreeDiv = styled.div`
  margin: 0 0 0 ${11 / 19.2}vw;
  font-size: ${18 / 19.2}vw;
  white-space: pre-line;
  text-align: start;
  color: #202123;
`;

const RegisterButton = styled.div`
  display: flex;
  width: ${569 / 19.2}vw;
  height: ${60 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  border: ${1 / 19.2}vw solid #f0c920;
  color: #f0c920;
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  padding: 0;
`;

const RegisterPage = () => {
  const navigate = useNavigate();
  const [DeActive, SetDeActive] = useState(false);
  const [Email, SetEmail] = useState("");
  const [ValidEmail, SetValidEmail] = useState(false);
  const [Password, SetPassword] = useState("");
  const [ValidPassword, SetValidPassword] = useState(false);
  const [PasswordCheck, SetPasswordCheck] = useState("");
  const [ValidPasswordCheck, SetValidPasswordCheck] = useState(false);
  const [Nickname, SetNickname] = useState("");
  const [ValidNickname, SetValidNickname] = useState(false);
  const [Cell, SetCell] = useState("");
  const [ValidCell, SetValidCell] = useState(false);
  const [DisplayVerificationCell, SetDisplayVerificationCell] = useState(false);
  const [VerificationCell, SetVerificationCell] = useState("");
  const [ValidVerifcationCell, SetValidVerifcationCell] = useState(false);
  const [Gender, SetGender] = useState("");
  const [BirthYear, SetBirthYear] = useState("");
  const [BirthMonth, SetBirthMonth] = useState("");
  const [BirthDay, SetBirthDay] = useState("");
  const [ValidBirth, setValidBirth] = useState(false);
  const [AgreeAll, SetAgreeAll] = useState(false);
  const [AgreeAge, SetAgreeAge] = useState(false);
  const [AgreeTermsOfUse, SetAgreeTermsOfUse] = useState(false);
  const [AgreePrivacy, SetAgreePrivacy] = useState(false);
  const [AgreeNewsLetter, SetAgreeNewsLetter] = useState(false);

  useEffect(() => {
    var pattern = new RegExp(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    );
    SetValidEmail(pattern.test(Email));
  }, [Email, DeActive]);

  useEffect(() => {
    var pattern = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
    );
    SetValidPassword(pattern.test(Password));
  }, [Password, DeActive]);

  useEffect(() => {
    SetValidPasswordCheck(Password === PasswordCheck);
  }, [PasswordCheck, Password, DeActive]);

  useEffect(() => {
    SetValidNickname(!(Nickname === ""));
  }, [Nickname, DeActive]);

  useEffect(() => {
    var ValidCellPattern = new RegExp(/^(01[0,2][0-9]{8})$/);
    SetValidCell(ValidCellPattern.test(Cell));
  }, [Cell, DeActive]);

  useEffect(() => {
    SetValidVerifcationCell(VerificationCell === Cell);
  }, [Cell, VerificationCell, DeActive]);

  useEffect(() => {
    SetAgreeAll(AgreeAge && AgreeTermsOfUse && AgreePrivacy && AgreeNewsLetter);
  }, [AgreeAge, AgreeTermsOfUse, AgreePrivacy, AgreeNewsLetter]);

  useEffect(() => {
    if (AgreeAll) {
      SetAgreeAge(true);
      SetAgreeTermsOfUse(true);
      SetAgreePrivacy(true);
      SetAgreeNewsLetter(true);
    } else if (
      !AgreeAll &
      AgreeAge &
      AgreeTermsOfUse &
      AgreePrivacy &
      AgreeNewsLetter
    ) {
      SetAgreeAge(false);
      SetAgreeTermsOfUse(false);
      SetAgreePrivacy(false);
      SetAgreeNewsLetter(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AgreeAll]);

  const EmailChange = (e) => {
    !DeActive && SetEmail(e.target.value);
  };

  const PasswordChange = (e) => {
    !DeActive && SetPassword(e.target.value);
  };

  const PasswordCheckChange = (e) => {
    !DeActive && SetPasswordCheck(e.target.value);
  };

  const NicknameChange = (e) => {
    !DeActive && SetNickname(e.target.value);
  };

  const CellChange = (e) => {
    var CellPattern = new RegExp(/^([0-9]{0,11})$/);
    if (!isNaN(e.target.value) && CellPattern.test(e.target.value)) {
      !DeActive && SetCell(e.target.value);
    }
  };

  const VerificationCellChange = (e) => {
    !DeActive && SetVerificationCell(e.target.value);
  };

  const GenderChange = (e) => {
    !DeActive && SetGender(e.target.id);
  };

  const handleBirthYearChange = (e) => {
    if (!isNaN(e.target.value)) {
      !DeActive && SetBirthYear(e.target.value);
    }
  };

  const handleBirthMonthChange = (e) => {
    if (!isNaN(e.target.value) && e.target.value <= 12) {
      !DeActive && SetBirthMonth(e.target.value);
    }
  };

  const handleBirthDayChange = (e) => {
    if (!isNaN(e.target.value) && e.target.value <= 31) {
      !DeActive && SetBirthDay(e.target.value);
    }
  };

  useEffect(() => {
    var YearPattern = new RegExp(/^(19[0-9][0-9]|20\d{2})$/);
    var MonthPattern = new RegExp(/^([0-9]|0[0-9]|1[0-2])$/);
    var DayPattern = new RegExp(/^([0-9]|0[1-9]|[1-2][0-9]|3[0-1])$/);
    setValidBirth(
      YearPattern.test(BirthYear) &&
        MonthPattern.test(BirthMonth) &&
        DayPattern.test(BirthDay),
    );
  }, [BirthYear, BirthMonth, BirthDay]);

  useEffect(() => {
    SetValidEmail(true);
    SetValidPassword(true);
    SetValidNickname(true);
    SetValidCell(true);
    setValidBirth(true);
  }, []); // set bool variables to true when page init(mount)

  return (
    <RegisterWrapper>
      {" "}
      <LogoWrapper src={logo} />
      <svg
        viewBox="0 0 570 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={RegisterImg}
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
          d="M220.331 0.46H221.991V18.58H220.331V0.46ZM212.451 1.86C215.131 1.86 217.051 4.32 217.051 8.16C217.051 12.02 215.131 14.48 212.451 14.48C209.791 14.48 207.871 12.02 207.871 8.16C207.871 4.32 209.791 1.86 212.451 1.86ZM212.451 3.36C210.691 3.36 209.451 5.24 209.451 8.16C209.451 11.1 210.691 13.02 212.451 13.02C214.231 13.02 215.451 11.1 215.451 8.16C215.451 5.24 214.231 3.36 212.451 3.36ZM226.249 2.56H233.149V13.72H226.249V2.56ZM231.589 3.88H227.809V12.4H231.589V3.88ZM239.369 0.479999H240.969V18.56H239.369V0.479999ZM232.309 7.28H236.469V8.66H232.309V7.28ZM235.789 0.859999H237.369V17.66H235.789V0.859999ZM249.068 1.14C251.768 1.14 253.748 2.78 253.748 5.16C253.748 7.52 251.768 9.16 249.068 9.16C246.388 9.16 244.408 7.52 244.408 5.16C244.408 2.78 246.388 1.14 249.068 1.14ZM249.068 2.5C247.328 2.5 246.008 3.6 246.008 5.16C246.008 6.72 247.328 7.8 249.068 7.8C250.828 7.8 252.128 6.72 252.128 5.16C252.128 3.6 250.828 2.5 249.068 2.5ZM257.148 0.479999H258.828V9.74H257.148V0.479999ZM247.128 10.62H258.828V15.02H248.788V17.74H247.168V13.78H257.188V11.96H247.128V10.62ZM247.168 17H259.428V18.32H247.168V17ZM262.406 14.96H278.786V16.34H262.406V14.96ZM269.726 11.08H271.386V15.54H269.726V11.08ZM264.386 1.82H276.766V7.3H266.086V10.92H264.446V5.96H275.126V3.16H264.386V1.82ZM264.446 10.22H277.186V11.58H264.446V10.22ZM303.415 0.46H305.095V18.56H303.415V0.46ZM304.635 7.8H307.975V9.18H304.635V7.8ZM298.795 2.42H300.415C300.415 7.56 298.055 12.2 292.215 15.14L291.295 13.86C296.295 11.32 298.795 7.46 298.795 2.68V2.42ZM292.135 2.42H299.655V3.78H292.135V2.42ZM322.734 0.479999H324.414V10.18H322.734V0.479999ZM312.754 11.08H314.394V13.28H322.774V11.08H324.414V18.32H312.754V11.08ZM314.394 14.6V16.98H322.774V14.6H314.394ZM314.714 1.34C317.454 1.34 319.414 3.04 319.414 5.5C319.414 7.98 317.454 9.68 314.714 9.68C311.974 9.68 309.994 7.98 309.994 5.5C309.994 3.04 311.974 1.34 314.714 1.34ZM314.714 2.72C312.914 2.72 311.614 3.86 311.614 5.5C311.614 7.14 312.914 8.28 314.714 8.28C316.514 8.28 317.814 7.14 317.814 5.5C317.814 3.86 316.514 2.72 314.714 2.72ZM340.232 0.479999H341.892V18.56H340.232V0.479999ZM341.492 7.9H344.852V9.3H341.492V7.9ZM327.892 3.36H338.552V4.72H327.892V3.36ZM333.292 6.22C335.852 6.22 337.692 7.94 337.692 10.38C337.692 12.82 335.852 14.54 333.292 14.54C330.752 14.54 328.892 12.82 328.892 10.38C328.892 7.94 330.752 6.22 333.292 6.22ZM333.292 7.6C331.652 7.6 330.472 8.74 330.472 10.38C330.472 12 331.652 13.16 333.292 13.16C334.932 13.16 336.112 12 336.112 10.38C336.112 8.74 334.932 7.6 333.292 7.6ZM332.432 0.699999H334.092V3.98H332.432V0.699999ZM359.551 0.479999H361.211V18.56H359.551V0.479999ZM354.251 2.42H355.891C355.891 7.66 353.531 12.24 347.491 15.2L346.611 13.86C351.831 11.34 354.251 7.5 354.251 2.7V2.42ZM347.431 2.42H354.971V3.78H347.431V2.42Z"
          fill="#202123"
        />
      </svg>
      <FormWrapper>
        <InputTextWrapper>
          이메일
          <span style={{ color: "#F0C920", marginLeft: "0.26vw" }}>*</span>
        </InputTextWrapper>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <InputWrapper
            $width={416}
            onChange={EmailChange}
            value={Email}
            key="id"
            placeholder="이메일을 입력해주세요."
            className={!ValidEmail && "invalidinput"}
          ></InputWrapper>
          <DuplicateCheckButton>중복확인</DuplicateCheckButton>
        </div>
        <WarningText>
          {!ValidEmail &&
            (Email.length === 0
              ? "이메일을 입력해 주세요."
              : "유효하지 않은 이메일입니다.")}
        </WarningText>
        <InputTextWrapper>
          비밀번호
          <span style={{ color: "#F0C920", marginLeft: "0.26vw" }}>*</span>
        </InputTextWrapper>
        <InputWrapper
          $width={553}
          type="password"
          onChange={PasswordChange}
          value={Password}
          key="password"
          placeholder="비밀번호 (영문+숫자+특수문자 8자 이상)"
          className={!ValidPassword && "invalidinput"}
        ></InputWrapper>
        {!ValidPassword && (
          <WarningText>
            "영문, 숫자, 특수문자를 조합한 8자 이상, 20자 이하의 비밀번호를
            입력해주세요."
          </WarningText>
        )}
        <InputWrapper
          $width={553}
          type="password"
          onChange={PasswordCheckChange}
          key="passwordcheck"
          value={PasswordCheck}
          placeholder="비밀번호 확인"
          className={!ValidPasswordCheck && "invalidinput"}
        ></InputWrapper>
        <WarningText>
          {!ValidPasswordCheck && "비밀번호를 동일하게 입력해주세요."}
        </WarningText>
        <InputTextWrapper>
          닉네임
          <span style={{ color: "#F0C920", marginLeft: "0.26vw" }}>*</span>
        </InputTextWrapper>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <InputWrapper
            $width={416}
            onChange={NicknameChange}
            key="nickname"
            placeholder="닉네임을 입력해주세요."
            className={!ValidNickname && "invalidinput"}
            value={Nickname}
          ></InputWrapper>
          <DuplicateCheckButton>중복확인</DuplicateCheckButton>
        </div>
        <WarningText>{!ValidNickname && "닉네임을 입력해 주세요."}</WarningText>
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
            className={!ValidCell && "invalidinput"}
          ></InputWrapper>
          <DuplicateCheckButton
            onClick={() => {
              SetDisplayVerificationCell(!DisplayVerificationCell);
            }}
          >
            인증요청
          </DuplicateCheckButton>
        </div>
        <WarningText>
          {!ValidCell && "정확한 휴대폰번호를 입력해 주세요."}
        </WarningText>
        {DisplayVerificationCell && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <InputWrapper
                $width={416}
                onChange={VerificationCellChange}
                key="verificationcell"
                value={VerificationCell}
                placeholder="인증코드를 입력해주세요."
                className={!ValidVerifcationCell && "invalidinput"}
              ></InputWrapper>
              <DuplicateCheckButton>확인</DuplicateCheckButton>
            </div>
            <WarningText>
              {!ValidVerifcationCell && "전화번호 인증이 필요합니다."}
            </WarningText>
          </div>
        )}
        <InputTextWrapper>
          성별
          <span style={{ color: "#F0C920", marginLeft: "0.26vw" }}>*</span>
        </InputTextWrapper>
        <GenderSelectionWrapper>
          <GenderSelectionInput
            type="radio"
            id="MALE"
            name="gender"
            onClick={GenderChange}
          />
          <GenderSelectionLabel htmlFor="MALE">
            <GenderSelectionText>남자</GenderSelectionText>
          </GenderSelectionLabel>
          <GenderSelectionInput
            type="radio"
            id="FEMALE"
            name="gender"
            onClick={GenderChange}
          />
          <GenderSelectionLabel htmlFor="FEMALE">
            <GenderSelectionText>여자</GenderSelectionText>
          </GenderSelectionLabel>
          <GenderSelectionInput
            type="radio"
            id="NO_SELECT"
            name="gender"
            onClick={GenderChange}
          />
          <GenderSelectionLabel htmlFor="NO_SELECT">
            <GenderSelectionText>선택안함</GenderSelectionText>
          </GenderSelectionLabel>
        </GenderSelectionWrapper>
        <WarningText>{Gender}</WarningText>
        <InputTextWrapper>
          생년월일
          <span style={{ color: "#F0C920", marginLeft: "0.26vw" }}>*</span>
        </InputTextWrapper>
        <BirthdayInputWrapper $width={570}>
          <BirthdayInputDivider />
          <BirthdayInput
            type="text"
            placeholder="YYYY"
            maxLength="4"
            value={BirthYear}
            onChange={handleBirthYearChange}
            $width={48}
          />
          <BirthdayInputDivider>/</BirthdayInputDivider>
          <BirthdayInput
            type="text"
            placeholder="MM"
            maxLength="2"
            value={BirthMonth}
            onChange={handleBirthMonthChange}
            $width={29}
          />
          <BirthdayInputDivider>/</BirthdayInputDivider>
          <BirthdayInput
            type="text"
            placeholder="DD"
            maxLength="2"
            value={BirthDay}
            onChange={handleBirthDayChange}
            $width={25}
          />
          <BirthdayInputDivider />
        </BirthdayInputWrapper>
        {!ValidBirth && <WarningText>invalid birthday</WarningText>}
        <AgreeWrapper>
          <AgreeInput
            type="checkbox"
            id="AgreeAll"
            name="AgreeAll"
            checked={AgreeAll}
            onChange={() => SetAgreeAll((AgreeAll) => !AgreeAll)}
          />
          <AgreeLabel htmlFor="AgreeAll">
            <AgreeDiv>모두 동의합니다.</AgreeDiv>
          </AgreeLabel>{" "}
          <AgreeDetailWrapper>
            <AgreeInput
              type="checkbox"
              id="AgreeAge"
              name="AgreeAge"
              checked={AgreeAge}
              onChange={() => SetAgreeAge((AgreeAge) => !AgreeAge)}
            />
            <AgreeLabel htmlFor="AgreeAge" $interval="11">
              <AgreeDiv>만 14세 이상입니다.</AgreeDiv>
            </AgreeLabel>
            <AgreeInput
              type="checkbox"
              id="AgreeTermsOfUse"
              name="AgreeTermsOfUse"
              checked={AgreeTermsOfUse}
              onChange={() =>
                SetAgreeTermsOfUse((AgreeTermsOfUse) => !AgreeTermsOfUse)
              }
            />
            <AgreeLabel htmlFor="AgreeTermsOfUse" $interval="11">
              <AgreeDiv>이용약관 동의</AgreeDiv>
            </AgreeLabel>
            <AgreeInput
              type="checkbox"
              id="AgreePrivacy"
              name="AgreePrivacy"
              checked={AgreePrivacy}
              onChange={() => SetAgreePrivacy((AgreePrivacy) => !AgreePrivacy)}
            />
            <AgreeLabel htmlFor="AgreePrivacy" $interval="11">
              <AgreeDiv>개인정보 수집 및 이용 동의</AgreeDiv>
            </AgreeLabel>
            <AgreeInput
              type="checkbox"
              id="AgreeNewsLetter"
              name="AgreeNewsLetter"
              checked={AgreeNewsLetter}
              onChange={() =>
                SetAgreeNewsLetter((AgreeNewsLetter) => !AgreeNewsLetter)
              }
            />
            <AgreeLabel htmlFor="AgreeNewsLetter" $interval="11">
              <AgreeDiv>
                할인쿠폰/이벤트/감동적인 뉴스레터 선택 동의 (선택)
                <br />
                <span style={{ color: "#9C9C9C", marginTop: "0.73vw" }}>
                  SMS, 이메일을 통해 쿠폰 및 이벤트 정보를 받아보실 수 있습니다.
                </span>
              </AgreeDiv>
            </AgreeLabel>
          </AgreeDetailWrapper>
        </AgreeWrapper>
        <RegisterButton onClick={() => SetDeActive((DeActive) => !DeActive)}>
          회원가입
        </RegisterButton>
      </FormWrapper>
    </RegisterWrapper>
  );
};

export default RegisterPage;
