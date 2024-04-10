import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../img/loginlogo.svg";
import { useNavigate } from "react-router-dom";
import ErrorModal from "../Login/ErrorModal";
import axios from "axios";
import { CheckBox } from "../Global/CustomBox";
import goodluck from "../../img/goodluck.svg";
import category1 from "../../img/category1.svg";
import category2 from "../../img/category2.svg";
import category3 from "../../img/category3.svg";
import category4 from "../../img/category4.svg";
import category5 from "../../img/category5.svg";
import category6 from "../../img/category6.svg";

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
  background: rgba(254, 253, 253);
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: ${830 / 19.2}vw;
  margin: ${83 / 19.2}vw 0 ${39 / 19.2}vw 0;
  padding: ${84 / 19.2}vw 0;
  border-radius: ${30 / 19.2}vw;
  box-shadow:
    ${5 / 19.2}vw ${5 / 19.2}vw ${5 / 19.2}vw rgba(0, 0, 0, 0.1),
    -${5 / 19.2}vw ${5 / 19.2}vw ${5 / 19.2}vw rgba(0, 0, 0, 0.1),
    ${5 / 19.2}vw -${5 / 19.2}vw ${5 / 19.2}vw rgba(0, 0, 0, 0.1),
    -${5 / 19.2}vw -${5 / 19.2}vw ${5 / 19.2}vw rgba(0, 0, 0, 0.1);
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
  margin: ${10 / 19.2}vw 0 ${39 / 19.2}vw 0;
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

const CategorySelectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: ${570 / 19.2}vw;
  font-size: ${14 / 19.2}vw;
  > div {
    width: 25.01%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: color 0.1s;
  }
  > div.selected {
    color: #f0c920;
    transition: color 0.1s;
  }
  > div.selected > img {
    opacity: 1;
    transition: opacity 0.1s;
  }
  > div > img {
    width: 100%;
    opacity: 0.5;
    transition: opacity 0.1s;
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
  const [Category, SetCategory] = useState("");
  const [Name, SetName] = useState("");
  const [ValidName, SetValidName] = useState(false);

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
    SetValidName(Name !== "");
  }, [Name]);

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
    SetValidName(true);
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

  const NameChange = (e) => {
    !DeActive && SetName(e.target.value);
  };

  const CategoryChange = (e) => {
    !DeActive && !isNaN(e.target.alt) && SetCategory(e.target.alt);
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
      Category !== "" &&
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
      const endpoint = `/api/members/join`;
      const requestBody = {
        nickname: Nickname,
        password: Password,
        email: Email,
        birthday: fetchBirthDay,
        phone: Cell,
        gender: Gender,
        memberTerm: [AgreeAge, AgreeTermsOfUse, AgreePrivacy, AgreeNewsLetter],
        memberCategory: [Category],
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
      const endpoint = `/api/members/email/duplicate`;
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
      const endpoint = `/api/members/nickname/duplicate`;
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
      const endpoint = `/api/members/phone/auth/verify`;
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
            이름
            <span style={{ color: "#F0C920", marginLeft: "0.26vw" }}>*</span>
          </InputTextWrapper>
          <InputWrapper
            $width={553}
            onChange={NameChange}
            value={Name}
            key="name"
            placeholder="이름을 입력해주세요."
            className={!ValidName && "invalidinput"}
          ></InputWrapper>
          <WarningText>{!ValidName && "이름을 입력해주세요."}</WarningText>
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
          {null && (
            <svg
              viewBox="0 0 570 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={RegisterImg}
            >
              <path
                d="M89.896 11.064H91.224V14.28H89.896V11.064ZM96.312 3.784H97.64V14.776H96.312V3.784ZM87.768 16.84H97.992V17.928H87.768V16.84ZM87.768 13.704H89.096V17.128H87.768V13.704ZM85.896 11.56L85.72 10.456C86.616 10.456 87.5867 10.4507 88.632 10.44C89.688 10.4187 90.7653 10.3813 91.864 10.328C92.9627 10.264 94.024 10.168 95.048 10.04L95.144 11C94.1093 11.1707 93.0427 11.2987 91.944 11.384C90.856 11.4587 89.7947 11.5067 88.76 11.528C87.7253 11.5493 86.7707 11.56 85.896 11.56ZM93.368 12.328H96.664V13.288H93.368V12.328ZM90.424 4.36C91.1387 4.36 91.7627 4.46667 92.296 4.68C92.8293 4.88267 93.24 5.176 93.528 5.56C93.8267 5.93333 93.976 6.376 93.976 6.888C93.976 7.38933 93.8267 7.832 93.528 8.216C93.24 8.6 92.8293 8.89333 92.296 9.096C91.7627 9.29867 91.1387 9.4 90.424 9.4C89.72 9.4 89.096 9.29867 88.552 9.096C88.0187 8.89333 87.6027 8.6 87.304 8.216C87.016 7.832 86.872 7.38933 86.872 6.888C86.872 6.376 87.016 5.93333 87.304 5.56C87.6027 5.176 88.0187 4.88267 88.552 4.68C89.096 4.46667 89.72 4.36 90.424 4.36ZM90.424 5.352C89.7413 5.352 89.1867 5.49067 88.76 5.768C88.3333 6.04533 88.12 6.41867 88.12 6.888C88.12 7.34667 88.3333 7.71467 88.76 7.992C89.1867 8.26933 89.7413 8.408 90.424 8.408C91.096 8.408 91.6453 8.26933 92.072 7.992C92.4987 7.71467 92.712 7.34667 92.712 6.888C92.712 6.568 92.616 6.296 92.424 6.072C92.232 5.848 91.9653 5.672 91.624 5.544C91.2827 5.416 90.8827 5.352 90.424 5.352ZM110.407 3.768H111.735V12.312H110.407V3.768ZM111.175 7.464H113.847V8.584H111.175V7.464ZM102.359 12.968H111.735V15.896H103.703V17.416H102.391V15.016H110.423V13.896H102.359V12.968ZM102.391 17.144H112.279V18.088H102.391V17.144ZM104.311 9.704H105.623V11.544H104.311V9.704ZM100.599 11.976L100.439 11C101.292 11 102.236 10.9947 103.271 10.984C104.305 10.9627 105.361 10.9253 106.439 10.872C107.516 10.808 108.551 10.7067 109.543 10.568L109.639 11.432C108.615 11.6027 107.564 11.7307 106.487 11.816C105.42 11.8907 104.38 11.9387 103.367 11.96C102.364 11.9707 101.441 11.976 100.599 11.976ZM100.807 4.872H109.111V5.816H100.807V4.872ZM104.951 6.28C105.975 6.28 106.791 6.44533 107.399 6.776C108.017 7.10667 108.327 7.57067 108.327 8.168C108.327 8.776 108.017 9.25067 107.399 9.592C106.791 9.92267 105.975 10.088 104.951 10.088C103.927 10.088 103.105 9.92267 102.487 9.592C101.879 9.25067 101.575 8.776 101.575 8.168C101.575 7.57067 101.879 7.10667 102.487 6.776C103.105 6.44533 103.927 6.28 104.951 6.28ZM104.951 7.16C104.3 7.16 103.783 7.25067 103.399 7.432C103.025 7.61333 102.839 7.85867 102.839 8.168C102.839 8.488 103.025 8.744 103.399 8.936C103.783 9.11733 104.3 9.208 104.951 9.208C105.601 9.208 106.113 9.11733 106.487 8.936C106.871 8.744 107.063 8.488 107.063 8.168C107.063 7.85867 106.871 7.61333 106.487 7.432C106.113 7.25067 105.601 7.16 104.951 7.16ZM104.311 3.64H105.623V5.368H104.311V3.64ZM125.142 3.784H126.47V14.632H125.142V3.784ZM126.054 8.536H128.598V9.64H126.054V8.536ZM115.27 5.544H123.814V6.616H115.27V5.544ZM119.542 7.4C120.224 7.4 120.827 7.51733 121.35 7.752C121.872 7.976 122.278 8.29067 122.566 8.696C122.854 9.09067 122.998 9.56 122.998 10.104C122.998 10.648 122.854 11.1227 122.566 11.528C122.278 11.9227 121.872 12.232 121.35 12.456C120.827 12.68 120.224 12.792 119.542 12.792C118.859 12.792 118.256 12.68 117.734 12.456C117.211 12.232 116.8 11.9227 116.502 11.528C116.214 11.1227 116.07 10.648 116.07 10.104C116.07 9.56 116.214 9.09067 116.502 8.696C116.8 8.29067 117.211 7.976 117.734 7.752C118.256 7.51733 118.859 7.4 119.542 7.4ZM119.542 8.44C118.891 8.44 118.363 8.59467 117.958 8.904C117.552 9.20267 117.35 9.60267 117.35 10.104C117.35 10.6053 117.552 11.0053 117.958 11.304C118.363 11.6027 118.891 11.752 119.542 11.752C120.203 11.752 120.731 11.6027 121.126 11.304C121.531 11.0053 121.734 10.6053 121.734 10.104C121.734 9.60267 121.531 9.20267 121.126 8.904C120.731 8.59467 120.203 8.44 119.542 8.44ZM118.886 3.784H120.214V6.088H118.886V3.784ZM117.462 16.84H127.11V17.928H117.462V16.84ZM117.462 13.768H118.774V17.288H117.462V13.768ZM141.095 8.68H145.111V9.768H141.095V8.68ZM137.591 5.016H138.679V7.608C138.679 8.408 138.577 9.19733 138.375 9.976C138.183 10.7547 137.905 11.48 137.543 12.152C137.18 12.824 136.753 13.4213 136.263 13.944C135.783 14.4667 135.255 14.8827 134.679 15.192L133.847 14.12C134.38 13.864 134.871 13.5067 135.319 13.048C135.777 12.5893 136.177 12.0667 136.519 11.48C136.86 10.8827 137.121 10.2587 137.303 9.608C137.495 8.94667 137.591 8.28 137.591 7.608V5.016ZM137.863 5.016H138.935V7.608C138.935 8.25867 139.025 8.904 139.207 9.544C139.399 10.184 139.665 10.7867 140.007 11.352C140.348 11.9067 140.743 12.4027 141.191 12.84C141.649 13.2773 142.14 13.6187 142.663 13.864L141.863 14.936C141.287 14.6373 140.753 14.2373 140.263 13.736C139.772 13.2347 139.345 12.6587 138.983 12.008C138.631 11.3573 138.353 10.6587 138.151 9.912C137.959 9.16533 137.863 8.39733 137.863 7.608V5.016ZM144.455 3.768H145.767V18.264H144.455V3.768ZM159.093 3.768H160.421V18.264H159.093V3.768ZM149.397 5H150.725V8.808H154.901V5H156.213V14.776H149.397V5ZM150.725 9.864V13.672H154.901V9.864H150.725ZM169.092 4.76H170.26V5.88C170.26 6.50933 170.148 7.10667 169.924 7.672C169.711 8.23733 169.412 8.76533 169.028 9.256C168.655 9.736 168.217 10.168 167.716 10.552C167.225 10.936 166.697 11.2613 166.132 11.528C165.577 11.7947 165.012 11.9973 164.436 12.136L163.844 11.032C164.345 10.9253 164.847 10.76 165.348 10.536C165.86 10.312 166.34 10.04 166.788 9.72C167.236 9.38933 167.631 9.02133 167.972 8.616C168.324 8.21067 168.596 7.77867 168.788 7.32C168.991 6.85067 169.092 6.37067 169.092 5.88V4.76ZM169.348 4.76H170.484V5.88C170.484 6.37067 170.585 6.85067 170.788 7.32C170.991 7.77867 171.263 8.21067 171.604 8.616C171.956 9.02133 172.356 9.38933 172.804 9.72C173.252 10.04 173.727 10.3173 174.228 10.552C174.74 10.776 175.252 10.936 175.764 11.032L175.156 12.136C174.58 11.9973 174.015 11.7947 173.46 11.528C172.905 11.2613 172.377 10.936 171.876 10.552C171.385 10.168 170.948 9.736 170.564 9.256C170.18 8.76533 169.881 8.23733 169.668 7.672C169.455 7.10667 169.348 6.50933 169.348 5.88V4.76ZM163.3 15.192H176.42V16.296H163.3V15.192ZM192.437 3.768H193.765V18.264H192.437V3.768ZM186.133 4.888C186.848 4.888 187.477 5.096 188.021 5.512C188.576 5.91733 189.008 6.49867 189.317 7.256C189.637 8.01333 189.797 8.904 189.797 9.928C189.797 10.952 189.637 11.8427 189.317 12.6C189.008 13.3573 188.576 13.944 188.021 14.36C187.477 14.776 186.848 14.984 186.133 14.984C185.418 14.984 184.784 14.776 184.229 14.36C183.674 13.944 183.237 13.3573 182.917 12.6C182.608 11.8427 182.453 10.952 182.453 9.928C182.453 8.904 182.608 8.01333 182.917 7.256C183.237 6.49867 183.674 5.91733 184.229 5.512C184.784 5.096 185.418 4.888 186.133 4.888ZM186.133 6.072C185.653 6.072 185.232 6.232 184.869 6.552C184.517 6.86133 184.24 7.30933 184.037 7.896C183.834 8.472 183.733 9.14933 183.733 9.928C183.733 10.7067 183.834 11.3893 184.037 11.976C184.24 12.552 184.517 13 184.869 13.32C185.232 13.64 185.653 13.8 186.133 13.8C186.602 13.8 187.013 13.64 187.365 13.32C187.728 13 188.01 12.552 188.213 11.976C188.416 11.3893 188.517 10.7067 188.517 9.928C188.517 9.14933 188.416 8.472 188.213 7.896C188.01 7.30933 187.728 6.86133 187.365 6.552C187.013 6.232 186.602 6.072 186.133 6.072ZM199.86 8.68H201.188V11.4H199.86V8.68ZM205.172 8.68H206.484V11.4H205.172V8.68ZM196.644 10.92H209.716V11.992H196.644V10.92ZM203.172 13.096C204.718 13.096 205.929 13.3147 206.804 13.752C207.678 14.1893 208.116 14.8187 208.116 15.64C208.116 16.472 207.678 17.1067 206.804 17.544C205.929 17.992 204.718 18.216 203.172 18.216C201.625 18.216 200.409 17.992 199.524 17.544C198.649 17.1067 198.212 16.472 198.212 15.64C198.212 14.8187 198.649 14.1893 199.524 13.752C200.409 13.3147 201.625 13.096 203.172 13.096ZM203.172 14.12C202.414 14.12 201.764 14.1787 201.22 14.296C200.686 14.4133 200.276 14.5893 199.988 14.824C199.7 15.048 199.556 15.32 199.556 15.64C199.556 15.9813 199.7 16.2693 199.988 16.504C200.276 16.728 200.686 16.8987 201.22 17.016C201.764 17.1333 202.414 17.192 203.172 17.192C203.929 17.192 204.574 17.1333 205.108 17.016C205.652 16.8987 206.068 16.728 206.356 16.504C206.644 16.2693 206.788 15.9813 206.788 15.64C206.788 15.32 206.644 15.048 206.356 14.824C206.068 14.5893 205.652 14.4133 205.108 14.296C204.574 14.1787 203.929 14.12 203.172 14.12ZM203.172 4.04C204.217 4.04 205.118 4.14667 205.876 4.36C206.644 4.57333 207.23 4.88267 207.636 5.288C208.052 5.68267 208.26 6.16267 208.26 6.728C208.26 7.28267 208.052 7.76267 207.636 8.168C207.23 8.57333 206.644 8.88267 205.876 9.096C205.118 9.29867 204.217 9.4 203.172 9.4C202.126 9.4 201.22 9.29867 200.452 9.096C199.694 8.88267 199.108 8.57333 198.692 8.168C198.286 7.76267 198.084 7.28267 198.084 6.728C198.084 6.16267 198.286 5.68267 198.692 5.288C199.108 4.88267 199.694 4.57333 200.452 4.36C201.22 4.14667 202.126 4.04 203.172 4.04ZM203.172 5.08C202.414 5.08 201.753 5.144 201.188 5.272C200.633 5.4 200.201 5.58667 199.892 5.832C199.593 6.07733 199.444 6.376 199.444 6.728C199.444 7.06933 199.593 7.368 199.892 7.624C200.201 7.86933 200.633 8.056 201.188 8.184C201.753 8.312 202.414 8.376 203.172 8.376C203.95 8.376 204.617 8.312 205.172 8.184C205.726 8.056 206.153 7.86933 206.452 7.624C206.75 7.368 206.9 7.06933 206.9 6.728C206.9 6.376 206.75 6.07733 206.452 5.832C206.153 5.58667 205.726 5.4 205.172 5.272C204.617 5.144 203.95 5.08 203.172 5.08ZM217.891 4.024C219.491 4.024 220.739 4.24267 221.635 4.68C222.531 5.10667 222.979 5.72 222.979 6.52C222.979 7.33067 222.531 7.95467 221.635 8.392C220.739 8.81867 219.491 9.032 217.891 9.032C216.301 9.032 215.053 8.81867 214.147 8.392C213.251 7.95467 212.803 7.33067 212.803 6.52C212.803 5.72 213.251 5.10667 214.147 4.68C215.053 4.24267 216.301 4.024 217.891 4.024ZM217.891 5.016C217.112 5.016 216.445 5.07467 215.891 5.192C215.336 5.30933 214.909 5.48 214.611 5.704C214.323 5.928 214.179 6.2 214.179 6.52C214.179 6.84 214.323 7.11733 214.611 7.352C214.909 7.576 215.336 7.74667 215.891 7.864C216.445 7.97067 217.112 8.024 217.891 8.024C218.68 8.024 219.352 7.97067 219.907 7.864C220.461 7.74667 220.883 7.576 221.171 7.352C221.469 7.11733 221.619 6.84 221.619 6.52C221.619 6.2 221.469 5.928 221.171 5.704C220.883 5.48 220.461 5.30933 219.907 5.192C219.352 5.07467 218.68 5.016 217.891 5.016ZM211.363 10.008H224.435V11.08H211.363V10.008ZM212.947 12.312H222.755V15.576H214.275V17.32H212.979V14.6H221.459V13.336H212.947V12.312ZM212.979 17.048H223.187V18.088H212.979V17.048ZM234.708 4.456C235.433 4.456 236.073 4.584 236.628 4.84C237.182 5.08533 237.614 5.432 237.924 5.88C238.244 6.31733 238.404 6.83467 238.404 7.432C238.404 8.008 238.244 8.52533 237.924 8.984C237.614 9.432 237.182 9.784 236.628 10.04C236.073 10.2853 235.433 10.408 234.708 10.408C234.004 10.408 233.374 10.2853 232.82 10.04C232.265 9.784 231.828 9.432 231.508 8.984C231.188 8.52533 231.028 8.008 231.028 7.432C231.028 6.83467 231.188 6.31733 231.508 5.88C231.828 5.432 232.265 5.08533 232.82 4.84C233.374 4.584 234.004 4.456 234.708 4.456ZM234.708 5.544C234.249 5.544 233.838 5.624 233.476 5.784C233.113 5.944 232.825 6.168 232.612 6.456C232.409 6.73333 232.308 7.05867 232.308 7.432C232.308 7.79467 232.409 8.12 232.612 8.408C232.825 8.68533 233.113 8.904 233.476 9.064C233.838 9.224 234.249 9.304 234.708 9.304C235.188 9.304 235.609 9.224 235.972 9.064C236.334 8.904 236.617 8.68533 236.82 8.408C237.033 8.12 237.14 7.79467 237.14 7.432C237.14 7.05867 237.033 6.73333 236.82 6.456C236.617 6.168 236.334 5.944 235.972 5.784C235.609 5.624 235.188 5.544 234.708 5.544ZM234.132 12.024H235.46V17.8H234.132V12.024ZM240.532 3.784H241.844V18.248H240.532V3.784ZM230.132 12.744L229.956 11.624C230.851 11.624 231.833 11.6133 232.9 11.592C233.977 11.5707 235.081 11.5227 236.212 11.448C237.353 11.3733 238.446 11.256 239.492 11.096L239.588 12.088C238.51 12.2907 237.412 12.44 236.292 12.536C235.172 12.6213 234.084 12.6747 233.028 12.696C231.982 12.7173 231.017 12.7333 230.132 12.744ZM244.674 6.248H251.858V7.336H244.674V6.248ZM248.274 8.296C248.882 8.296 249.416 8.43467 249.874 8.712C250.344 8.98933 250.712 9.37867 250.978 9.88C251.245 10.3707 251.378 10.9413 251.378 11.592C251.378 12.2427 251.245 12.8187 250.978 13.32C250.712 13.8107 250.344 14.2 249.874 14.488C249.416 14.7653 248.882 14.904 248.274 14.904C247.677 14.904 247.144 14.7653 246.674 14.488C246.205 14.2 245.837 13.8107 245.57 13.32C245.304 12.8187 245.17 12.2427 245.17 11.592C245.17 10.9413 245.304 10.3707 245.57 9.88C245.837 9.38933 246.205 9.00533 246.674 8.728C247.144 8.44 247.677 8.296 248.274 8.296ZM248.274 9.416C247.912 9.416 247.581 9.512 247.282 9.704C246.994 9.88533 246.765 10.1413 246.594 10.472C246.434 10.792 246.354 11.1653 246.354 11.592C246.354 12.0187 246.434 12.3973 246.594 12.728C246.765 13.0587 246.994 13.3147 247.282 13.496C247.581 13.6773 247.912 13.768 248.274 13.768C248.648 13.768 248.978 13.6773 249.266 13.496C249.554 13.3147 249.778 13.0587 249.938 12.728C250.109 12.3973 250.194 12.0187 250.194 11.592C250.194 11.1653 250.109 10.792 249.938 10.472C249.778 10.1413 249.554 9.88533 249.266 9.704C248.978 9.512 248.648 9.416 248.274 9.416ZM255.682 3.768H256.946V18.248H255.682V3.768ZM253.362 9.864H256.098V10.952H253.362V9.864ZM252.578 4.104H253.826V17.544H252.578V4.104ZM247.618 4.2H248.93V6.904H247.618V4.2ZM267.427 11.064H268.755V14.28H267.427V11.064ZM273.843 3.784H275.171V14.776H273.843V3.784ZM265.299 16.84H275.523V17.928H265.299V16.84ZM265.299 13.704H266.627V17.128H265.299V13.704ZM263.427 11.56L263.251 10.456C264.147 10.456 265.118 10.4507 266.163 10.44C267.219 10.4187 268.297 10.3813 269.395 10.328C270.494 10.264 271.555 10.168 272.579 10.04L272.675 11C271.641 11.1707 270.574 11.2987 269.475 11.384C268.387 11.4587 267.326 11.5067 266.291 11.528C265.257 11.5493 264.302 11.56 263.427 11.56ZM270.899 12.328H274.195V13.288H270.899V12.328ZM267.955 4.36C268.67 4.36 269.294 4.46667 269.827 4.68C270.361 4.88267 270.771 5.176 271.059 5.56C271.358 5.93333 271.507 6.376 271.507 6.888C271.507 7.38933 271.358 7.832 271.059 8.216C270.771 8.6 270.361 8.89333 269.827 9.096C269.294 9.29867 268.67 9.4 267.955 9.4C267.251 9.4 266.627 9.29867 266.083 9.096C265.55 8.89333 265.134 8.6 264.835 8.216C264.547 7.832 264.403 7.38933 264.403 6.888C264.403 6.376 264.547 5.93333 264.835 5.56C265.134 5.176 265.55 4.88267 266.083 4.68C266.627 4.46667 267.251 4.36 267.955 4.36ZM267.955 5.352C267.273 5.352 266.718 5.49067 266.291 5.768C265.865 6.04533 265.651 6.41867 265.651 6.888C265.651 7.34667 265.865 7.71467 266.291 7.992C266.718 8.26933 267.273 8.408 267.955 8.408C268.627 8.408 269.177 8.26933 269.603 7.992C270.03 7.71467 270.243 7.34667 270.243 6.888C270.243 6.568 270.147 6.296 269.955 6.072C269.763 5.848 269.497 5.672 269.155 5.544C268.814 5.416 268.414 5.352 267.955 5.352ZM287.858 3.768H289.17V18.248H287.858V3.768ZM288.866 9.72H291.538V10.84H288.866V9.72ZM277.97 6.088H286.498V7.176H277.97V6.088ZM282.306 8.36C282.989 8.36 283.591 8.504 284.114 8.792C284.647 9.08 285.063 9.47467 285.362 9.976C285.671 10.4667 285.826 11.0373 285.826 11.688C285.826 12.3387 285.671 12.9147 285.362 13.416C285.063 13.9173 284.647 14.312 284.114 14.6C283.591 14.8773 282.989 15.016 282.306 15.016C281.623 15.016 281.015 14.8773 280.482 14.6C279.959 14.312 279.543 13.9173 279.234 13.416C278.925 12.9147 278.77 12.3387 278.77 11.688C278.77 11.0373 278.925 10.4667 279.234 9.976C279.543 9.47467 279.959 9.08 280.482 8.792C281.015 8.504 281.623 8.36 282.306 8.36ZM282.306 9.464C281.869 9.464 281.479 9.56 281.138 9.752C280.797 9.944 280.525 10.2053 280.322 10.536C280.13 10.8667 280.034 11.2507 280.034 11.688C280.034 12.1253 280.13 12.5147 280.322 12.856C280.525 13.1867 280.797 13.448 281.138 13.64C281.479 13.8213 281.869 13.912 282.306 13.912C282.733 13.912 283.117 13.8213 283.458 13.64C283.799 13.448 284.066 13.1867 284.258 12.856C284.461 12.5147 284.562 12.1253 284.562 11.688C284.562 11.2507 284.461 10.8667 284.258 10.536C284.066 10.2053 283.799 9.944 283.458 9.752C283.117 9.56 282.733 9.464 282.306 9.464ZM281.618 3.944H282.946V6.568H281.618V3.944ZM294.529 8.12H304.369V9.192H294.529V8.12ZM292.753 11.128H305.873V12.216H292.753V11.128ZM294.529 4.296H295.841V8.664H294.529V4.296ZM294.433 16.808H304.449V17.896H294.433V16.808ZM294.433 13.672H295.761V17.096H294.433V13.672ZM317.538 5.272H318.834C318.834 6.31733 318.732 7.34133 318.53 8.344C318.327 9.336 317.98 10.2853 317.49 11.192C316.999 12.088 316.327 12.9307 315.474 13.72C314.62 14.5093 313.548 15.224 312.258 15.864L311.522 14.84C312.674 14.2747 313.634 13.6507 314.402 12.968C315.17 12.2853 315.783 11.5493 316.242 10.76C316.7 9.97067 317.031 9.128 317.234 8.232C317.436 7.336 317.538 6.39733 317.538 5.416V5.272ZM312.322 5.272H318.338V6.36H312.322V5.272ZM317.346 8.856V9.896L311.794 10.424L311.586 9.256L317.346 8.856ZM321.186 3.768H322.514V18.232H321.186V3.768ZM322.162 9.64H324.818V10.744H322.162V9.64ZM332.129 9.256H334.849V10.344H332.129V9.256ZM326.657 13.688H327.569C328.315 13.688 328.977 13.6773 329.553 13.656C330.129 13.6347 330.667 13.5973 331.169 13.544C331.681 13.4907 332.198 13.4107 332.721 13.304L332.849 14.392C332.305 14.4987 331.771 14.5787 331.249 14.632C330.726 14.6853 330.171 14.7227 329.585 14.744C328.998 14.7653 328.326 14.776 327.569 14.776H326.657V13.688ZM326.657 5.512H332.017V6.584H327.921V14.056H326.657V5.512ZM327.537 9.432H331.345V10.472H327.537V9.432ZM337.121 3.768H338.401V18.248H337.121V3.768ZM334.209 4.104H335.457V17.496H334.209V4.104ZM342.223 5.224H351.535V6.312H342.223V5.224ZM340.831 15.112H353.903V16.216H340.831V15.112ZM345.919 9.944H347.231V15.672H345.919V9.944ZM351.023 5.224H352.351V6.648C352.351 7.24533 352.341 7.87467 352.319 8.536C352.309 9.19733 352.266 9.92267 352.191 10.712C352.127 11.5013 352.005 12.3813 351.823 13.352L350.479 13.192C350.757 11.8053 350.917 10.5893 350.959 9.544C351.002 8.488 351.023 7.52267 351.023 6.648V5.224ZM366.094 3.768H367.406V18.264H366.094V3.768ZM356.382 13.656H357.582C358.403 13.656 359.193 13.6453 359.95 13.624C360.718 13.592 361.491 13.5387 362.27 13.464C363.059 13.3893 363.881 13.2827 364.734 13.144L364.862 14.232C363.561 14.4453 362.334 14.5893 361.182 14.664C360.03 14.728 358.83 14.76 357.582 14.76H356.382V13.656ZM356.35 5.112H363.038V10.28H357.726V14.072H356.382V9.208H361.694V6.2H356.35V5.112ZM370.253 10.488H383.373V11.512H370.253V10.488ZM371.821 12.664H381.741V15.752H373.165V17.448H371.853V14.84H380.429V13.624H371.821V12.664ZM371.853 17.096H382.205V18.056H371.853V17.096ZM371.917 4.2H381.693V7.208H373.261V8.776H371.949V6.312H380.381V5.144H371.917V4.2ZM371.949 8.456H381.949V9.416H371.949V8.456ZM396.318 7.176H399.95V8.28H396.318V7.176ZM392.526 4.648H393.598V6.424C393.598 7.352 393.432 8.22133 393.102 9.032C392.771 9.84267 392.307 10.552 391.71 11.16C391.112 11.7573 390.414 12.216 389.614 12.536L388.91 11.48C389.454 11.2773 389.944 11.0053 390.382 10.664C390.83 10.3227 391.208 9.928 391.518 9.48C391.838 9.032 392.083 8.552 392.254 8.04C392.435 7.51733 392.526 6.97867 392.526 6.424V4.648ZM392.766 4.648H393.838V6.472C393.838 6.97333 393.923 7.464 394.094 7.944C394.264 8.424 394.504 8.872 394.814 9.288C395.123 9.704 395.491 10.072 395.918 10.392C396.355 10.712 396.835 10.968 397.358 11.16L396.638 12.2C395.87 11.8907 395.192 11.4533 394.606 10.888C394.03 10.3227 393.576 9.66133 393.246 8.904C392.926 8.14667 392.766 7.336 392.766 6.472V4.648ZM399.47 3.784H400.798V14.6H399.47V3.784ZM391.502 16.84H401.134V17.928H391.502V16.84ZM391.502 13.4H392.83V17.336H391.502V13.4ZM404.237 10.696H405.149C405.917 10.696 406.589 10.6907 407.165 10.68C407.751 10.6587 408.301 10.6213 408.813 10.568C409.325 10.504 409.847 10.4187 410.381 10.312L410.525 11.4C409.97 11.5067 409.426 11.592 408.893 11.656C408.37 11.7093 407.81 11.7467 407.213 11.768C406.615 11.7893 405.927 11.8 405.149 11.8H404.237V10.696ZM404.237 4.824H409.821V5.912H405.517V11.288H404.237V4.824ZM405.117 7.704H409.661V8.744H405.117V7.704ZM414.541 3.784H415.805V12.552H414.541V3.784ZM412.205 7.544H414.925V8.632H412.205V7.544ZM411.341 4.056H412.589V12.456H411.341V4.056ZM406.109 13.304H415.805V18.248H414.493V14.392H406.109V13.304ZM418.299 6.248H425.483V7.336H418.299V6.248ZM421.899 8.296C422.507 8.296 423.041 8.43467 423.499 8.712C423.969 8.98933 424.337 9.37867 424.603 9.88C424.87 10.3707 425.003 10.9413 425.003 11.592C425.003 12.2427 424.87 12.8187 424.603 13.32C424.337 13.8107 423.969 14.2 423.499 14.488C423.041 14.7653 422.507 14.904 421.899 14.904C421.302 14.904 420.769 14.7653 420.299 14.488C419.83 14.2 419.462 13.8107 419.195 13.32C418.929 12.8187 418.795 12.2427 418.795 11.592C418.795 10.9413 418.929 10.3707 419.195 9.88C419.462 9.38933 419.83 9.00533 420.299 8.728C420.769 8.44 421.302 8.296 421.899 8.296ZM421.899 9.416C421.537 9.416 421.206 9.512 420.907 9.704C420.619 9.88533 420.39 10.1413 420.219 10.472C420.059 10.792 419.979 11.1653 419.979 11.592C419.979 12.0187 420.059 12.3973 420.219 12.728C420.39 13.0587 420.619 13.3147 420.907 13.496C421.206 13.6773 421.537 13.768 421.899 13.768C422.273 13.768 422.603 13.6773 422.891 13.496C423.179 13.3147 423.403 13.0587 423.563 12.728C423.734 12.3973 423.819 12.0187 423.819 11.592C423.819 11.1653 423.734 10.792 423.563 10.472C423.403 10.1413 423.179 9.88533 422.891 9.704C422.603 9.512 422.273 9.416 421.899 9.416ZM429.307 3.768H430.571V18.248H429.307V3.768ZM426.987 9.864H429.723V10.952H426.987V9.864ZM426.203 4.104H427.451V17.544H426.203V4.104ZM421.243 4.2H422.555V6.904H421.243V4.2ZM442.748 5.208H443.9V5.816C443.9 6.328 443.799 6.81333 443.596 7.272C443.394 7.73067 443.111 8.15733 442.748 8.552C442.386 8.936 441.964 9.27733 441.484 9.576C441.004 9.87467 440.487 10.1307 439.932 10.344C439.388 10.5467 438.823 10.696 438.236 10.792L437.724 9.736C438.236 9.672 438.732 9.55467 439.212 9.384C439.703 9.20267 440.162 8.98933 440.588 8.744C441.015 8.49867 441.388 8.22133 441.708 7.912C442.039 7.60267 442.295 7.272 442.476 6.92C442.658 6.55733 442.748 6.18933 442.748 5.816V5.208ZM443.084 5.208H444.236V5.816C444.236 6.18933 444.327 6.55733 444.508 6.92C444.69 7.272 444.94 7.60267 445.26 7.912C445.591 8.22133 445.97 8.49867 446.396 8.744C446.823 8.98933 447.276 9.20267 447.756 9.384C448.247 9.55467 448.748 9.672 449.26 9.736L448.764 10.792C448.178 10.696 447.607 10.5467 447.052 10.344C446.498 10.1307 445.98 9.87467 445.5 9.576C445.02 9.27733 444.599 8.936 444.236 8.552C443.874 8.15733 443.591 7.73067 443.388 7.272C443.186 6.81333 443.084 6.328 443.084 5.816V5.208ZM442.812 12.728H444.124V18.232H442.812V12.728ZM436.956 12.008H450.028V13.096H436.956V12.008ZM438.188 4.664H448.78V5.736H438.188V4.664ZM457.371 8.952H460.155V10.056H457.371V8.952ZM454.683 5.128H455.723V7.896C455.723 8.64267 455.643 9.37867 455.483 10.104C455.334 10.8293 455.11 11.512 454.811 12.152C454.523 12.792 454.171 13.368 453.755 13.88C453.339 14.392 452.87 14.808 452.347 15.128L451.515 14.136C452.006 13.8373 452.448 13.464 452.843 13.016C453.238 12.568 453.568 12.0667 453.835 11.512C454.112 10.9467 454.32 10.36 454.459 9.752C454.608 9.13333 454.683 8.51467 454.683 7.896V5.128ZM454.939 5.128H455.963V7.848C455.963 8.424 456.027 9.00533 456.155 9.592C456.294 10.168 456.486 10.7227 456.731 11.256C456.987 11.7787 457.302 12.2587 457.675 12.696C458.048 13.1333 458.47 13.496 458.939 13.784L458.187 14.808C457.664 14.488 457.2 14.0827 456.795 13.592C456.39 13.0907 456.048 12.5307 455.771 11.912C455.494 11.2827 455.286 10.6213 455.147 9.928C455.008 9.23467 454.939 8.54133 454.939 7.848V5.128ZM462.699 3.768H463.979V18.248H462.699V3.768ZM459.755 4.072H461.003V17.512H459.755V4.072ZM469.61 11.224H470.922V15.544H469.61V11.224ZM474.954 11.224H476.282V15.544H474.954V11.224ZM466.394 15.288H479.514V16.392H466.394V15.288ZM472.922 4.68C473.946 4.68 474.852 4.83467 475.642 5.144C476.431 5.45333 477.05 5.88533 477.498 6.44C477.956 6.99467 478.186 7.65067 478.186 8.408C478.186 9.15467 477.956 9.81067 477.498 10.376C477.05 10.9307 476.431 11.3627 475.642 11.672C474.852 11.9707 473.946 12.12 472.922 12.12C471.908 12.12 471.002 11.9707 470.202 11.672C469.412 11.3627 468.794 10.9307 468.346 10.376C467.898 9.81067 467.674 9.15467 467.674 8.408C467.674 7.65067 467.898 6.99467 468.346 6.44C468.794 5.88533 469.412 5.45333 470.202 5.144C471.002 4.83467 471.908 4.68 472.922 4.68ZM472.922 5.736C472.154 5.736 471.471 5.848 470.874 6.072C470.276 6.296 469.807 6.61067 469.466 7.016C469.124 7.41067 468.954 7.87467 468.954 8.408C468.954 8.94133 469.124 9.41067 469.466 9.816C469.807 10.2107 470.276 10.52 470.874 10.744C471.471 10.968 472.154 11.08 472.922 11.08C473.7 11.08 474.388 10.968 474.986 10.744C475.583 10.52 476.052 10.2107 476.394 9.816C476.735 9.41067 476.906 8.94133 476.906 8.408C476.906 7.87467 476.735 7.41067 476.394 7.016C476.052 6.61067 475.583 6.296 474.986 6.072C474.388 5.848 473.7 5.736 472.922 5.736ZM481.289 16.056C481.289 15.64 481.39 15.3467 481.593 15.176C481.806 15.0053 482.067 14.92 482.377 14.92C482.675 14.92 482.931 15.0053 483.145 15.176C483.369 15.3467 483.481 15.64 483.481 16.056C483.481 16.472 483.369 16.7707 483.145 16.952C482.931 17.1333 482.675 17.224 482.377 17.224C482.067 17.224 481.806 17.1333 481.593 16.952C481.39 16.7707 481.289 16.472 481.289 16.056Z"
                fill="#52555B"
              />
              <line
                y1="11.5"
                x2="70"
                y2="11.5"
                stroke="#9C9C9C"
                strokeOpacity="0.8"
              />
              <line
                x1="500"
                y1="11.5"
                x2="570"
                y2="11.5"
                stroke="#9C9C9C"
                strokeOpacity="0.8"
              />
            </svg>
          )}
          {null && (
            <CategorySelectionWrapper>
              <div
                className={Category === "1" ? "selected" : ""}
                onClick={CategoryChange}
                id="1"
              >
                <img src={category1} alt="1" />
                창작
              </div>
              <div
                className={Category === "2" ? "selected" : ""}
                onClick={CategoryChange}
                id="2"
              >
                <img src={category2} alt="2" />
                아이돌
              </div>
              <div
                className={Category === "3" ? "selected" : ""}
                onClick={CategoryChange}
                id="3"
              >
                <img src={category3} alt="3" />
                애니
              </div>
              <div
                className={Category === "4" ? "selected" : ""}
                onClick={CategoryChange}
                id="4"
              >
                <img src={category4} alt="4" />
                문구
              </div>
              <div
                className={Category === "5" ? "selected" : ""}
                onClick={CategoryChange}
                id="5"
              >
                <img src={category5} alt="5" />
                식품
              </div>
              <div
                className={Category === "6" ? "selected" : ""}
                onClick={CategoryChange}
                id="6"
              >
                <img src={category6} alt="6" />
                패션
              </div>
            </CategorySelectionWrapper>
          )}
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
