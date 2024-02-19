import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../img/logo.svg";
import { useNavigate } from "react-router-dom";
import ErrorModal from "../Login/ErrorModal";
import axios from "axios";
import { CheckBox } from "../Global/CustomBox";
import goodluck from "../../img/goodluck.svg";

const RegisterWrapper = styled.div`
  display: flex;
  width: ${482 / 19.2}vw;
  margin: ${117 / 19.2}vw 0 ${55 / 19.2}vw 0;
  height: 100%;
  font-family: "Noto Sans KR";
  flex-direction: column;
  align-items: center;
  color: black;
`;

const RegisterDoneWrapper = styled.div`
  display: flex;
  background: rgba(249, 249, 249);
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: ${830 / 19.2}vw;
  margin: ${83 / 19.2}vw 0 ${39 / 19.2}vw 0;
  padding: ${84 / 19.2}vw 0;
  border-radius: ${30 / 19.2}vw;
  box-shadow:
    ${5 / 19.2}vw ${5 / 19.2}vw ${5 / 19.2}vw rgba(0, 0, 0, 0.25),
    -${5 / 19.2}vw -${5 / 19.2}vw ${5 / 19.2}vw rgba(0, 0, 0, 0.25);
`;

const RegisterDoneTextWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  font-size: ${26 / 19.2}vw;
  justify-content: center;
  text-align: center;
`;

const ConfirmButton = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  height: ${60 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  background: #f0c920;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  padding: 0;
  margin: ${22 / 19.2}vw 0 0 0;
  cursor: grab;
  font-weight: bold;
`;

const LogoWrapper = styled.img`
  width: ${318 / 19.2}vw;
  margin: 0 0 ${25 / 19.2}vw 0;
  cursor: grab;
`;

const RegisterImg = {
  display: "block",
  width: `${570 / 19.2}vw`,
  margin: `${4 / 19.2}vw 0 ${25 / 19.2}vw 0`,
  padding: 0,
};

const InputTextWrapper = styled.div`
  margin: ${14 / 19.2}vw 0 ${1 / 19.2}vw;
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
  margin: ${6 / 19.2}vw 0 ${4 / 19.2}vw 0;
  width: ${(e) => e.$width / 19.2}vw;
  height: ${59 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${3 / 19.2}vw;
  border: ${1 / 19.2}vw solid #9c9c9c;
  font-size: ${18 / 19.2}vw;
  background: rgba(249, 249, 249);
  padding: 0 0 0 ${17 / 19.2}vw;
  font-weight: 500;

  &.invalidinput {
    border: ${1 / 19.2}vw solid #fd3c56;
  }

  &.block {
    pointer-events: none;
    background: rgba(156, 156, 156, 0.2);
  }

  &.password {
    padding-right: 30px;
    background-image: url('data:image/svg+xml;utf8,<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6109 21.1781C14.9155 21.3096 14.2092 21.3755 13.5015 21.375C8.46375 21.375 4.2 18.0641 2.76562 13.5C3.1518 12.2716 3.74662 11.1189 4.524 10.0924M11.1143 11.1139C11.7472 10.4809 12.6058 10.1253 13.5009 10.1253C14.3961 10.1253 15.2546 10.4809 15.8876 11.1139C16.5206 11.7469 16.8762 12.6054 16.8762 13.5006C16.8762 14.3957 16.5206 15.2543 15.8876 15.8872M11.1143 11.1139L15.8876 15.8872M11.1143 11.1139L15.8865 15.885M15.8876 15.8872L19.59 19.5885M11.1165 11.115L7.41525 7.41375M7.41525 7.41375L3.3765 3.375M7.41525 7.41375C9.22915 6.24326 11.3427 5.62208 13.5015 5.625C18.5393 5.625 22.803 8.93587 24.2374 13.5C23.4454 16.0093 21.801 18.1626 19.5889 19.5874M7.41525 7.41375L19.5889 19.5874M19.5889 19.5874L23.6265 23.625" stroke="%239C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    background-repeat: no-repeat;
    background-position: right center;
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
  background: rgba(249, 249, 249);
`;

const BirthdayInput = styled.input`
  width: ${(e) => e.$width / 19.2}vw;
  height: auto;
  outline: none;
  font-size: ${18 / 19.2}vw;
  border: 0;
  padding: 0;
  background: rgba(249, 249, 249);
`;

const BirthdayInputDivider = styled.div`
  font-size: ${24 / 19.2}vw;
  width: ${116 / 19.2}vw;
  text-align: center;
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
  margin: ${6 / 19.2}vw 0 ${4 / 19.2}vw ${4 / 19.2}vw;
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
  height: ${19.5 / 19.2}vw;
  color: #fd3c56;
  padding: ${4 / 19.2}vw 0 0 ${1 / 19.2}vw;
  margin: 0;
  font-weight: 500;
  font-family: "Noto Sans KR";
`;

const GenderSelectionWrapper = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  flex-direction: row;
  justify-content: flex-start;
  margin: ${24 / 19.2}vw 0 0 0;
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
    background-color: rgba(249, 249, 249);
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
    background-color: rgba(249, 249, 249);
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
  font-size: ${18 / 19.2}vw;
`;

const AgreeDetailWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${194 / 19.2}vw;
  border-top: ${1 / 19.2}vw solid #9c9c9c;
  border-bottom: ${1 / 19.2}vw solid #9c9c9c;
  padding: ${5.5 / 19.2}vw 0 0 0;
  margin: ${13 / 19.2}vw 0 ${46 / 19.2}vw 0;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;
  line-height: 2.1;
`;

const RegisterButton = styled.div`
  display: flex;
  width: ${569 / 19.2}vw;
  height: ${60 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  border: ${2 / 19.2}vw solid #f0c920;
  color: #f0c920;
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  font-family: "Noto Sans KR";
  font-weight: bold;
  padding: 0;
  cursor: grab;
  &.invalid {
    color: gray;
  }
`;

const RegisterPage = () => {
  const navigate = useNavigate();
  const [IsDone, SetIsDone] = useState(false);
  const [DeActive, SetDeActive] = useState(false);
  const [Email, SetEmail] = useState("");
  const [ValidEmail, SetValidEmail] = useState(false);
  const [DisplayDuplicatedEmail, SetDisplayDuplicatedEmail] = useState(false);
  const [DisplayDuplicatedEmailErrorMSG, SetDisplayDuplicatedEmailErrorMSG] =
    useState("");
  const [Password, SetPassword] = useState("");
  const [ValidPassword, SetValidPassword] = useState(false);
  const [PasswordCheck, SetPasswordCheck] = useState("");
  const [ValidPasswordCheck, SetValidPasswordCheck] = useState(false);
  const [Nickname, SetNickname] = useState("");
  const [ValidNickname, SetValidNickname] = useState(false);
  const [DisplayDuplicatedNickname, SetDisplayDuplicatedNickname] =
    useState(false);
  const [
    DisplayDuplicatedNicknameErrorMSG,
    SetDisplayDuplicatedNicknameErrorMSG,
  ] = useState("");
  const [Cell, SetCell] = useState("");
  const [ValidCell, SetValidCell] = useState(false);
  const [DisplayVerificationCell, SetDisplayVerificationCell] = useState(false);
  const [VerificationCell, SetVerificationCell] = useState("");
  const [ValidVerifcationCell, SetValidVerifcationCell] = useState(false);
  const [DisplayDuplicatedCell, SetDisplayDuplicatedCell] = useState(false);
  const [DisplayDuplicatedCellErrorMSG, SetDisplayDuplicatedCellErrorMSG] =
    useState("");
  const [Gender, SetGender] = useState("");
  const [ValidGender, SetValidGender] = useState(false);
  const [BirthYear, SetBirthYear] = useState("");
  const [BirthMonth, SetBirthMonth] = useState("");
  const [BirthDay, SetBirthDay] = useState("");
  const [ValidBirth, SetValidBirth] = useState(false);
  const [AgreeAll, SetAgreeAll] = useState(false);
  const [AgreeAge, SetAgreeAge] = useState(false);
  const [AgreeTermsOfUse, SetAgreeTermsOfUse] = useState(false);
  const [AgreePrivacy, SetAgreePrivacy] = useState(false);
  const [AgreeNewsLetter, SetAgreeNewsLetter] = useState(false);
  const [BlockCell, SetBlockCell] = useState(false);
  const [VerifiedEmail, SetVerifiedEmail] = useState(false);
  const [VerifiedNickname, SetVerifiedNickname] = useState(false);
  const [VerifiedCell, SetVerifiedCell] = useState(false);
  const [isRequesting, SetIsRequesting] = useState(false);
  const [ifSocial, SetIfSocial] = useState(false);

  useEffect(() => {
    var pattern = new RegExp(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    );
    SetValidEmail(pattern.test(Email));
  }, [Email]);

  useEffect(() => {
    var pattern = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
    );
    SetValidPassword(pattern.test(Password));
  }, [Password]);

  useEffect(() => {
    SetValidPasswordCheck(Password === PasswordCheck);
  }, [PasswordCheck, Password]);

  useEffect(() => {
    var ValidNicknamePattern = new RegExp(/^([0-9a-zA-Z]{1,20})$/);
    SetValidNickname(ValidNicknamePattern.test(Nickname));
  }, [Nickname]);

  useEffect(() => {
    var ValidCellPattern = new RegExp(/^(01[0,2][0-9]{8})$/);
    SetValidCell(ValidCellPattern.test(Cell));
  }, [Cell]);

  useEffect(() => {
    var VerificationCellPattern = new RegExp(/^([0-9]{4})$/);
    SetValidVerifcationCell(VerificationCellPattern.test(VerificationCell));
  }, [VerificationCell]);

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

  useEffect(() => {
    var YearPattern = new RegExp(/^(19[0-9][0-9]|20\d{2})$/);
    var MonthPattern = new RegExp(/^([0-9]|0[0-9]|1[0-2])$/);
    var DayPattern = new RegExp(/^([0-9]|0[1-9]|[1-2][0-9]|3[0-1])$/);
    SetValidBirth(
      YearPattern.test(BirthYear) &&
        MonthPattern.test(BirthMonth) &&
        DayPattern.test(BirthDay),
    );
  }, [BirthYear, BirthMonth, BirthDay, DeActive]);

  useEffect(() => {
    SetValidGender(Gender !== null);
  }, [Gender, DeActive]);

  useEffect(() => {
    SetValidEmail(true);
    SetValidPassword(true);
    SetValidNickname(true);
    SetValidCell(true);
    SetValidBirth(true);
    SetValidGender(true);
    const SocialEmail = sessionStorage.getItem("email");
    const SocialPhone = sessionStorage.getItem("phone");
    if (SocialEmail !== null && SocialPhone !== null) {
      SetEmail(SocialEmail);
      SetCell(SocialPhone);
      SetVerifiedEmail(true);
      SetVerifiedCell(true);
      SetIfSocial(true);
      SetBlockCell(true);
      sessionStorage.removeItem("email");
      sessionStorage.removeItem("phone");
    }
  }, []); // set bool variables to true when page init(mount)

  const EmailChange = (e) => {
    !DeActive && !VerifiedEmail && SetEmail(e.target.value);
  };

  const PasswordChange = (e) => {
    !DeActive && SetPassword(e.target.value);
  };

  const PasswordCheckChange = (e) => {
    !DeActive && SetPasswordCheck(e.target.value);
  };

  const NicknameChange = (e) => {
    !DeActive && !VerifiedNickname && SetNickname(e.target.value);
  };

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

  const GenderChange = (e) => {
    !DeActive && SetGender(e.target.id);
  };

  const HandleBirthYearChange = (e) => {
    if (!isNaN(e.target.value)) {
      !DeActive && SetBirthYear(e.target.value);
    }
  };

  const HandleBirthMonthChange = (e) => {
    if (!isNaN(e.target.value) && e.target.value <= 12) {
      !DeActive && SetBirthMonth(e.target.value);
    }
  };

  const HandleBirthDayChange = (e) => {
    if (!isNaN(e.target.value) && e.target.value <= 31) {
      !DeActive && SetBirthDay(e.target.value);
    }
  };

  const HandleRegister = () => {
    if (
      !DeActive &&
      VerifiedEmail &&
      VerifiedCell &&
      VerifiedNickname &&
      ValidPassword &&
      ValidPasswordCheck &&
      ValidBirth &&
      ValidGender &&
      AgreeAge &&
      AgreeTermsOfUse &&
      AgreePrivacy
    ) {
      fetchRegister();
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
      SetDisplayDuplicatedCell(true);
      SetDisplayDuplicatedCellErrorMSG(
        "잠시만 기다려주세요. 메시지가 가고 있습니다.",
      );
    }
  };

  const fetchRegister = async () => {
    SetDeActive((DeActive) => !DeActive);
    const fetchBirthDay = [BirthYear, BirthMonth, BirthDay].join("-");
    try {
      const endpoint = `${process.env.REACT_APP_BACKEND}/api/members/join`;
      const requestBody = {
        nickname: Nickname,
        password: Password,
        email: Email,
        birthday: fetchBirthDay,
        phone: Cell,
        gender: Gender,
        memberTerm: [AgreeAge, AgreeTermsOfUse, AgreePrivacy, AgreeNewsLetter],
        memberCategory: [1],
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (
        response.data.isSuccess === true &&
        response.data.result.nickname === Nickname &&
        response.data.result.email === Email
      ) {
        console.log(response);
        SetIsDone(true);
      }
    } catch (error) {
      console.error("Error during POST request:", error);
    }
    SetDeActive((DeActive) => !DeActive);
  };

  const HandleDuplicateEmail = async () => {
    if (!VerifiedEmail) {
      return await fetchDuplicateEmail();
    } else {
      SetVerifiedEmail(false);
    }
  };

  const fetchDuplicateEmail = async () => {
    SetDeActive((DeActive) => !DeActive);
    try {
      const endpoint = `${process.env.REACT_APP_BACKEND}/api/members/email/duplicate`;
      const requestBody = {
        email: Email,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (
        response.data.isSuccess === true &&
        response.data.result.checkEmail === true
      ) {
        console.log(response);
        SetVerifiedEmail(true);
        SetDisplayDuplicatedEmailErrorMSG("사용할 수 있는 이메일입니다.");
      } else if (
        response.data.isSuccess === true &&
        response.data.result.checkEmail === false
      ) {
        console.error(response);
        SetVerifiedEmail(false);
        SetDisplayDuplicatedEmailErrorMSG(
          [Email, "은 이미 사용 중입니다."].join(""),
        );
      }
      SetDisplayDuplicatedEmail(true);
    } catch (error) {
      console.error("Error during POST request:", error);
    }
    SetDeActive((DeActive) => !DeActive);
  };

  const HandleDuplicateNickname = async () => {
    if (!VerifiedNickname) {
      return await fetchDuplicateNickname();
    } else {
      SetVerifiedNickname(false);
    }
  };

  const fetchDuplicateNickname = async () => {
    SetDeActive((DeActive) => !DeActive);
    try {
      const endpoint = `${process.env.REACT_APP_BACKEND}/api/members/nickname/duplicate`;
      const requestBody = {
        nickname: Nickname,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (
        response.data.isSuccess === true &&
        response.data.result.checkNickname === true
      ) {
        console.log(response);
        SetVerifiedNickname(true);
        SetDisplayDuplicatedNicknameErrorMSG("사용할 수 있는 닉네임입니다.");
      } else if (
        response.data.isSuccess === true &&
        response.data.result.checkNickname === false
      ) {
        console.error(response);
        SetVerifiedNickname(false);
        SetDisplayDuplicatedNicknameErrorMSG(
          [Nickname, "은 이미 사용 중입니다."].join(""),
        );
      }
      SetDisplayDuplicatedNickname(true);
    } catch (error) {
      console.error("Error during POST request:", error);
    }
    SetDeActive((DeActive) => !DeActive);
  };

  const fetchPhoneAuth = async () => {
    SetDeActive((DeActive) => !DeActive);
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
      }
    } catch (error) {
      SetDisplayDuplicatedCell(true);
      SetDisplayDuplicatedCellErrorMSG(
        "인증번호가 일치하지 않습니다. 확인 후 다시 입력해주세요.",
      );
    }
    SetDeActive((DeActive) => !DeActive);
  };

  if (IsDone) {
    return (
      <RegisterDoneWrapper>
        <LogoWrapper
          src={logo}
          onClick={() => navigate("/", { replace: true })}
        />
        <RegisterDoneTextWrapper>
          <span style={{ fontWeight: "bold" }}>{Nickname}</span>님 회원가입을
          환영합니다.
        </RegisterDoneTextWrapper>
        <img src={goodluck} alt="" style={{ margin: `${54 / 19.2}vw 0` }} />
        <RegisterDoneTextWrapper>
          더 굿즈와 함께
          <br />
          특별한 일상을 발견하세요!
        </RegisterDoneTextWrapper>
        <ConfirmButton onClick={() => navigate("/", { replace: true })}>
          메인페이지로 돌아가기
        </ConfirmButton>
      </RegisterDoneWrapper>
    );
  } else
    return (
      <RegisterWrapper>
        <ErrorModal
          isOpen={DisplayDuplicatedEmail}
          text={[DisplayDuplicatedEmailErrorMSG]}
          onClose={() => SetDisplayDuplicatedEmail(!DisplayDuplicatedEmail)}
        />
        <ErrorModal
          isOpen={DisplayDuplicatedCell}
          text={[DisplayDuplicatedCellErrorMSG]}
          onClose={() => SetDisplayDuplicatedCell(!DisplayDuplicatedCell)}
        />
        <ErrorModal
          isOpen={DisplayDuplicatedNickname}
          text={[DisplayDuplicatedNicknameErrorMSG]}
          onClose={() =>
            SetDisplayDuplicatedNickname(!DisplayDuplicatedNickname)
          }
        />
        <LogoWrapper src={logo} onClick={() => navigate("/")} />
        {ifSocial ? (
          <svg
            viewBox="0 0 570 19"
            style={RegisterImg}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
              d="M237.969 0.479999H239.629V13.7H237.969V0.479999ZM239.109 5.96H242.309V7.34H239.109V5.96ZM233.029 1.88H234.789C234.789 6.56 231.509 9.98 226.329 11.64L225.609 10.28C230.169 8.88 233.029 6.08 233.029 2.6V1.88ZM226.349 1.88H233.869V3.24H226.349V1.88ZM228.349 16.8H240.429V18.16H228.349V16.8ZM228.349 12.36H230.009V17.34H228.349V12.36ZM257.208 0.479999H258.868V13.94H257.208V0.479999ZM244.528 1.94H254.048V3.3H244.528V1.94ZM244.228 11.22L244.048 9.8C247.008 9.8 251.228 9.76 254.608 9.36L254.708 10.6C251.228 11.16 247.168 11.22 244.228 11.22ZM246.328 3.1H247.928V10.04H246.328V3.1ZM250.648 3.1H252.248V10.04H250.648V3.1ZM254.208 3.9H258.088V5.26H254.208V3.9ZM254.208 7.36H258.088V8.72H254.208V7.36ZM247.308 16.8H259.348V18.16H247.308V16.8ZM247.308 12.84H248.968V17.66H247.308V12.84ZM285.017 0.46H286.697V18.56H285.017V0.46ZM286.237 7.8H289.577V9.18H286.237V7.8ZM280.397 2.42H282.017C282.017 7.56 279.657 12.2 273.817 15.14L272.897 13.86C277.897 11.32 280.397 7.46 280.397 2.68V2.42ZM273.737 2.42H281.257V3.78H273.737V2.42ZM304.335 0.479999H306.015V10.18H304.335V0.479999ZM294.355 11.08H295.995V13.28H304.375V11.08H306.015V18.32H294.355V11.08ZM295.995 14.6V16.98H304.375V14.6H295.995ZM296.315 1.34C299.055 1.34 301.015 3.04 301.015 5.5C301.015 7.98 299.055 9.68 296.315 9.68C293.575 9.68 291.595 7.98 291.595 5.5C291.595 3.04 293.575 1.34 296.315 1.34ZM296.315 2.72C294.515 2.72 293.215 3.86 293.215 5.5C293.215 7.14 294.515 8.28 296.315 8.28C298.115 8.28 299.415 7.14 299.415 5.5C299.415 3.86 298.115 2.72 296.315 2.72ZM321.834 0.479999H323.494V18.56H321.834V0.479999ZM323.094 7.9H326.454V9.3H323.094V7.9ZM309.494 3.36H320.154V4.72H309.494V3.36ZM314.894 6.22C317.454 6.22 319.294 7.94 319.294 10.38C319.294 12.82 317.454 14.54 314.894 14.54C312.354 14.54 310.494 12.82 310.494 10.38C310.494 7.94 312.354 6.22 314.894 6.22ZM314.894 7.6C313.254 7.6 312.074 8.74 312.074 10.38C312.074 12 313.254 13.16 314.894 13.16C316.534 13.16 317.714 12 317.714 10.38C317.714 8.74 316.534 7.6 314.894 7.6ZM314.034 0.699999H315.694V3.98H314.034V0.699999ZM341.152 0.479999H342.812V18.56H341.152V0.479999ZM335.852 2.42H337.492C337.492 7.66 335.132 12.24 329.092 15.2L328.212 13.86C333.432 11.34 335.852 7.5 335.852 2.7V2.42ZM329.032 2.42H336.572V3.78H329.032V2.42Z"
              fill="#202123"
            />
          </svg>
        ) : (
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
        )}
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
              className={
                (!ValidEmail && "invalidinput") || (VerifiedEmail && "block")
              }
            ></InputWrapper>
            <DuplicateCheckButton
              onClick={
                !ifSocial && ValidEmail && Email !== ""
                  ? HandleDuplicateEmail
                  : null
              }
              className={VerifiedEmail && "white"}
            >
              {VerifiedEmail ? "변경" : "중복확인"}
            </DuplicateCheckButton>
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
              영문, 숫자, 특수문자를 조합한 8자 이상, 20자 이하의 비밀번호를
              입력해주세요.
            </WarningText>
          )}
          <InputWrapper
            $width={553}
            type="password"
            onChange={PasswordCheckChange}
            key="passwordcheck"
            value={PasswordCheck}
            placeholder="비밀번호 확인"
            className={
              !ValidPasswordCheck && PasswordCheck !== "" && "invalidinput"
            }
          ></InputWrapper>
          <WarningText>
            {!ValidPasswordCheck &&
              PasswordCheck !== "" &&
              "비밀번호를 동일하게 입력해주세요."}
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
              className={
                (!ValidNickname && "invalidinput") ||
                (VerifiedNickname && "block")
              }
              value={Nickname}
            ></InputWrapper>
            <DuplicateCheckButton
              onClick={
                ValidNickname && Nickname !== ""
                  ? HandleDuplicateNickname
                  : null
              }
              className={VerifiedNickname && "white"}
            >
              {VerifiedNickname ? "변경" : "중복확인"}
            </DuplicateCheckButton>
          </div>
          <WarningText>
            {!ValidNickname && Nickname === "" && "닉네임을 입력해 주세요."}
            {Nickname !== "" &&
              !ValidNickname &&
              "최대 20자 까지만 입력 가능합니다."}
          </WarningText>
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
              className={
                (!ValidCell && "invalidinput") || (BlockCell && "block")
              }
            ></InputWrapper>
            <DuplicateCheckButton
              className={(!ValidCell || VerifiedCell) && "gray"}
              onClick={
                !ifSocial && ValidCell && Cell !== ""
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
          <WarningText></WarningText>
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
              onChange={HandleBirthYearChange}
              $width={48}
            />
            <BirthdayInputDivider>/</BirthdayInputDivider>
            <BirthdayInput
              type="text"
              placeholder="MM"
              maxLength="2"
              value={BirthMonth}
              onChange={HandleBirthMonthChange}
              $width={29}
            />
            <BirthdayInputDivider>/</BirthdayInputDivider>
            <BirthdayInput
              type="text"
              placeholder="DD"
              maxLength="2"
              value={BirthDay}
              onChange={HandleBirthDayChange}
              $width={25}
            />
            <BirthdayInputDivider />
          </BirthdayInputWrapper>
          <AgreeWrapper>
            <CheckBox
              index="AgreeAll"
              state={AgreeAll}
              onChange={() => SetAgreeAll((AgreeAll) => !AgreeAll)}
              label="모두 동의합니다."
            />
            <AgreeDetailWrapper>
              <CheckBox
                index="AgreeAge"
                state={AgreeAge}
                onChange={() => SetAgreeAge((AgreeAge) => !AgreeAge)}
                label="만 14세 이상입니다."
              />
              <CheckBox
                index="AgreeTermsOfUse"
                state={AgreeTermsOfUse}
                onChange={() =>
                  SetAgreeTermsOfUse((AgreeTermsOfUse) => !AgreeTermsOfUse)
                }
                label="이용약관 동의"
              />
              <CheckBox
                index="AgreePrivacy"
                state={AgreePrivacy}
                onChange={() =>
                  SetAgreePrivacy((AgreePrivacy) => !AgreePrivacy)
                }
                label="개인정보 수집 및 이용 동의"
              />
              <CheckBox
                index="AgreeNewsLetter"
                state={AgreeNewsLetter}
                onChange={() =>
                  SetAgreeNewsLetter((AgreeNewsLetter) => !AgreeNewsLetter)
                }
                label="할인쿠폰/이벤트/감동적인 뉴스레터 선택 동의 (선택)"
              />
              <span
                style={{
                  fontSize: "0.9375vw",
                  color: "#9C9C9C",
                  marginLeft: "2vw",
                  lineHeight: 1,
                }}
              >
                SMS, 이메일을 통해 쿠폰 및 이벤트 정보를 받아보실 수 있습니다.
              </span>
            </AgreeDetailWrapper>
          </AgreeWrapper>
          <RegisterButton
            onClick={HandleRegister}
            className={
              !VerifiedEmail &&
              !VerifiedCell &&
              !VerifiedNickname &&
              !ValidPassword &&
              !ValidPasswordCheck &&
              !ValidBirth &&
              !ValidGender &&
              "invalid"
            }
          >
            회원가입하기
          </RegisterButton>
        </FormWrapper>
      </RegisterWrapper>
    );
};

export default RegisterPage;
