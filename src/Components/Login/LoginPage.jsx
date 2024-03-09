import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import logo from "../../img/loginlogo.svg";
import { useNavigate } from "react-router-dom";
import ErrorModal from "./ErrorModal";
import { CheckBox } from "../Global/CustomBox";
import { useDispatch, useSelector } from "react-redux";
import { setRefreshToken, setToken } from "../../redux/loginSlice";
const K_REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;
const N_REST_API_KEY = process.env.REACT_APP_N_REST_API_KEY;
const K_REDIRECT_URI = `http://localhost:3000/api/members/kakao/callback`;
const N_REDIRECT_URI = `http://localhost:3000/api/members/naver/callback`;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;
const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${N_REST_API_KEY}&redirect_uri=${N_REDIRECT_URI}&state=TEST`;

const LoginWrapper = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  margin: ${113 / 19.2}vw 0 0 0;
  font-family: NotoSans;
  flex-direction: column;
  align-items: center;
  color: black;
  self-align: center;
`;

const LogoWrapper = styled.img`
  width: ${318 / 19.2}vw;
  cursor: grab;
`;

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: ${37 / 19.2}vw 0 ${60 / 19.2}vw 0;
  font-size: ${20 / 19.2}vw;
  justify-content: center;
  font-weight: bold;
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmailWrapper = styled.div`
  display: flex;
  padding: ${8 / 19.2}vw 0 0 0;
  flex-direction: column;
  align-items: flex-start;
`;

const InputWrapper = styled.input`
  display: flex;
  margin: ${11 / 19.2}vw 0 ${7 / 19.2}vw 0;
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
  background: rgba(249, 249, 249);
`;

const WarningText = styled.div`
  font-size: ${14 / 19.2}vw;
  color: #fd3c56;
  padding: 0 0 0 ${1 / 19.2}vw;
  margin: 0;
  align-text: flex-start;
`;

const SaveWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: ${14 / 19.2}vw;
  margin: ${12 / 19.2}vw 0 ${18 / 19.2}vw 0;
  padding: 0 0 0 ${6 / 19.2}vw;
`;

const FindLink = styled.div`
  margin: 0 ${7 / 19.2}vw 0 auto;
`;

const LoginButton = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  height: ${55 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  background: ${(e) =>
    (e.$kakao && "#fee500") || (e.$naver && "#03C75A") || "#f0c920"};
  color: ${(e) => (e.$kakao ? "rgba(0,0,0,0.85)" : "#fff")};
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  padding: 0;
  margin: ${27 / 19.2}vw 0 0 0;
  cursor: grab;
  font-weight: bold;
`;

const ExtraWrapper = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  flex-direction: row;
  justify-content: space-between;
`;

const ExtraButton = styled.div`
  display: flex;
  width: ${270 / 19.2}vw;
  height: ${55 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  border: ${1 / 19.2}vw solid #f0c920;
  color: #f0c920;
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  padding: 0;
  cursor: grab;
`;

const LoginImg = {
  display: "flex",
  width: `${570 / 19.2}vw`,
  margin: `0 0 0 0`,
  padding: 0,
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [DeActive, SetDeActive] = useState(false);
  const [Email, SetEmail] = useState("");
  const [ValidEmail, SetValidEmail] = useState(false);
  const [Password, SetPassword] = useState("");
  const [ValidPassword, SetValidPassword] = useState(false);
  const [EmailSave, SetEmailSave] = useState(false);
  const [DisplayCheckData, SetDisplayCheckData] = useState(false);
  const [DisplayPasswordError, SetDisplayPasswordError] = useState(false);
  const alreadyUser = useSelector((state) => state.login.token);

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
    alreadyUser !== null && navigate("/", { replace: true });
    if (localStorage.getItem("KeepEmail") !== null) {
      SetEmailSave(true);
      SetEmail(localStorage.getItem("KeepEmail"));
    }
    SetValidEmail(true);
    SetValidPassword(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // check login status, set bool variables to true when page init(mount)

  useEffect(() => {
    !EmailSave && localStorage.removeItem("KeepEmail");
  }, [EmailSave]);

  const EmailChange = (e) => {
    !DeActive && SetEmail(e.target.value);
  };

  const PasswordChange = (e) => {
    !DeActive && SetPassword(e.target.value);
  };

  const HandleLoginRequest = () => {
    EmailSave && ValidEmail && localStorage.setItem("KeepEmail", Email);
    SetDeActive((DeActive) => !DeActive);
    if (Email !== "" && Password !== "" && !DeActive && ValidEmail) {
      fetchLogin();
    }
    SetDeActive((DeActive) => !DeActive);
  };

  const fetchLogin = async () => {
    try {
      const endpoint = `/api/members/login`;
      const requestBody = {
        email: Email,
        password: Password,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.isSuccess === true) {
        console.log(response);
        dispatch(setToken(response.data.result.accessToken));
        dispatch(setRefreshToken(response.data.result.refreshToken.token));
        navigate("/", { replace: true });
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          SetDisplayCheckData(true);
        } else if (error.response.status === 500) {
          SetDisplayPasswordError(true);
        } else {
          console.log("Unhandled error:", error.response.data);
        }
      } else if (error.request) {
        console.log("No response received:", error.request);
      } else {
        console.log("Error:", error.message);
      }
    }
  };

  return (
    <LoginWrapper>
      <ErrorModal
        isOpen={DisplayCheckData}
        text={["이메일/아이디 또는 비밀번호를 다시 확인해주세요."]}
        onClose={() => SetDisplayCheckData(!DisplayCheckData)}
      />
      <ErrorModal
        isOpen={DisplayPasswordError}
        text={[
          "비밀번호 5회 오류로 로그인이 제한됩니다.",
          "잠시 후에 다시 로그인을 해주세요.",
        ]}
        onClose={() => SetDisplayPasswordError(!DisplayPasswordError)}
      />
      <LogoWrapper
        onClick={() => navigate("/")}
        src={logo}
        style={{ cursor: "grab" }}
      />
      <TextWrapper>로그인을 진행해주세요.</TextWrapper>
      <SocialWrapper>
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
            d="M248.169 0.479999H249.829V13.7H248.169V0.479999ZM249.309 5.96H252.509V7.34H249.309V5.96ZM243.229 1.88H244.989C244.989 6.56 241.709 9.98 236.529 11.64L235.809 10.28C240.369 8.88 243.229 6.08 243.229 2.6V1.88ZM236.549 1.88H244.069V3.24H236.549V1.88ZM238.549 16.8H250.629V18.16H238.549V16.8ZM238.549 12.36H240.209V17.34H238.549V12.36ZM267.407 0.479999H269.067V13.94H267.407V0.479999ZM254.727 1.94H264.247V3.3H254.727V1.94ZM254.427 11.22L254.247 9.8C257.207 9.8 261.427 9.76 264.807 9.36L264.907 10.6C261.427 11.16 257.367 11.22 254.427 11.22ZM256.527 3.1H258.127V10.04H256.527V3.1ZM260.847 3.1H262.447V10.04H260.847V3.1ZM264.407 3.9H268.287V5.26H264.407V3.9ZM264.407 7.36H268.287V8.72H264.407V7.36ZM257.507 16.8H269.547V18.16H257.507V16.8ZM257.507 12.84H259.167V17.66H257.507V12.84ZM282.996 14.96H299.376V16.34H282.996V14.96ZM290.316 11.08H291.976V15.54H290.316V11.08ZM284.976 1.82H297.356V7.3H286.676V10.92H285.036V5.96H295.716V3.16H284.976V1.82ZM285.036 10.22H297.776V11.58H285.036V10.22ZM303.155 2.4H314.795V3.74H303.155V2.4ZM301.395 14.54H317.735V15.92H301.395V14.54ZM313.915 2.4H315.535V4.2C315.535 6.52 315.535 9.1 314.855 13L313.195 12.84C313.915 9.14 313.915 6.44 313.915 4.2V2.4ZM332.933 0.499999H334.613V13.7H332.933V0.499999ZM322.993 16.8H335.153V18.16H322.993V16.8ZM322.993 12.34H324.633V17.26H322.993V12.34ZM324.913 1.74C327.613 1.74 329.613 3.58 329.613 6.2C329.613 8.8 327.613 10.66 324.913 10.66C322.213 10.66 320.193 8.8 320.193 6.2C320.193 3.58 322.213 1.74 324.913 1.74ZM324.913 3.18C323.153 3.18 321.813 4.42 321.813 6.2C321.813 7.96 323.153 9.2 324.913 9.2C326.673 9.2 328.013 7.96 328.013 6.2C328.013 4.42 326.673 3.18 324.913 3.18Z"
            fill="#202123"
          />
        </svg>
        <LoginButton
          onClick={() => {
            window.location.href = kakaoURL;
          }}
          $kakao
        >
          <svg
            width={`${18 / 19.2}vw`}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: `0 ${14 / 19.2}vw ${2 / 19.2}vw 0` }}
          >
            <g clip-path="url(#clip0_2100_6336)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.00005 0.601562C4.02919 0.601562 0 3.71452 0 7.55385C0 9.94159 1.55841 12.0465 3.93154 13.2985L2.93304 16.9461C2.84482 17.2684 3.21343 17.5252 3.49648 17.3385L7.87337 14.4498C8.24274 14.4854 8.61811 14.5062 9.00005 14.5062C13.9705 14.5062 18 11.3934 18 7.55385C18 3.71452 13.9705 0.601562 9.00005 0.601562Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_2100_6336">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          카카오 로그인
        </LoginButton>
        <LoginButton
          onClick={() => {
            window.location.href = naverURL;
          }}
          $naver
        >
          <svg
            width={`${18 / 19.2}vw`}
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: `0 ${14 / 19.2}vw ${2 / 19.2}vw 0` }}
          >
            <g clip-path="url(#clip0_2116_680)">
              <path
                d="M11.3491 9.06267L5.41687 0.5H0.5V16.5H5.65088V7.936L11.5831 16.5H16.5V0.5H11.3491V9.06267Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2116_680">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.5 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          네이버 로그인
        </LoginButton>
      </SocialWrapper>
      <EmailWrapper>
        <svg
          viewBox="0 0 570 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={
            (LoginImg,
            { marginTop: `${27 / 19.2}vw`, marginBottom: `${27 / 19.2}vw` })
          }
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
            d="M233.148 0.46H234.808V18.58H233.148V0.46ZM225.268 1.86C226.161 1.86 226.948 2.12 227.628 2.64C228.321 3.14667 228.861 3.87333 229.248 4.82C229.648 5.76667 229.848 6.88 229.848 8.16C229.848 9.44 229.648 10.5533 229.248 11.5C228.861 12.4467 228.321 13.18 227.628 13.7C226.948 14.22 226.161 14.48 225.268 14.48C224.374 14.48 223.581 14.22 222.888 13.7C222.194 13.18 221.648 12.4467 221.248 11.5C220.861 10.5533 220.668 9.44 220.668 8.16C220.668 6.88 220.861 5.76667 221.248 4.82C221.648 3.87333 222.194 3.14667 222.888 2.64C223.581 2.12 224.374 1.86 225.268 1.86ZM225.268 3.34C224.668 3.34 224.141 3.54 223.688 3.94C223.248 4.32667 222.901 4.88667 222.648 5.62C222.394 6.34 222.268 7.18667 222.268 8.16C222.268 9.13333 222.394 9.98667 222.648 10.72C222.901 11.44 223.248 12 223.688 12.4C224.141 12.8 224.668 13 225.268 13C225.854 13 226.368 12.8 226.808 12.4C227.261 12 227.614 11.44 227.868 10.72C228.121 9.98667 228.248 9.13333 228.248 8.16C228.248 7.18667 228.121 6.34 227.868 5.62C227.614 4.88667 227.261 4.32667 226.808 3.94C226.368 3.54 225.854 3.34 225.268 3.34ZM239.046 2.56H245.946V13.7H239.046V2.56ZM244.386 3.88H240.606V12.38H244.386V3.88ZM252.186 0.46H253.786V18.56H252.186V0.46ZM245.126 7.28H249.286V8.64H245.126V7.28ZM248.586 0.839999H250.166V17.64H248.586V0.839999ZM261.885 1.12C262.791 1.12 263.591 1.29333 264.285 1.64C264.991 1.97333 265.545 2.44 265.945 3.04C266.345 3.64 266.545 4.34 266.545 5.14C266.545 5.92667 266.345 6.62667 265.945 7.24C265.545 7.84 264.991 8.30667 264.285 8.64C263.591 8.97333 262.791 9.14 261.885 9.14C260.991 9.14 260.191 8.97333 259.485 8.64C258.778 8.30667 258.218 7.84 257.805 7.24C257.405 6.62667 257.205 5.92667 257.205 5.14C257.205 4.34 257.405 3.64 257.805 3.04C258.218 2.44 258.778 1.97333 259.485 1.64C260.191 1.29333 260.991 1.12 261.885 1.12ZM261.885 2.5C261.298 2.5 260.771 2.61333 260.305 2.84C259.851 3.05333 259.491 3.36 259.225 3.76C258.958 4.16 258.825 4.62 258.825 5.14C258.825 5.66 258.958 6.12 259.225 6.52C259.491 6.90667 259.851 7.21333 260.305 7.44C260.771 7.66667 261.298 7.78 261.885 7.78C262.471 7.78 262.991 7.66667 263.445 7.44C263.911 7.21333 264.278 6.90667 264.545 6.52C264.811 6.12 264.945 5.66 264.945 5.14C264.945 4.62 264.811 4.16 264.545 3.76C264.278 3.36 263.911 3.05333 263.445 2.84C262.991 2.61333 262.471 2.5 261.885 2.5ZM269.965 0.46H271.625V9.72H269.965V0.46ZM259.925 10.62H271.625V15H261.585V17.72H259.985V13.76H269.985V11.94H259.925V10.62ZM259.985 16.98H272.245V18.32H259.985V16.98ZM275.203 14.94H291.603V16.32H275.203V14.94ZM282.543 11.08H284.183V15.52H282.543V11.08ZM277.203 1.8H289.563V7.28H278.883V10.9H277.243V5.96H287.923V3.16H277.203V1.8ZM277.243 10.2H289.983V11.56H277.243V10.2ZM298.797 14.94H315.197V16.32H298.797V14.94ZM306.137 11.08H307.777V15.52H306.137V11.08ZM300.797 1.8H313.157V7.28H302.477V10.9H300.837V5.96H311.517V3.16H300.797V1.8ZM300.837 10.2H313.577V11.56H300.837V10.2ZM318.975 2.38H330.615V3.74H318.975V2.38ZM317.195 14.54H333.535V15.92H317.195V14.54ZM329.715 2.38H331.355V4.2C331.355 4.96 331.342 5.77333 331.315 6.64C331.302 7.49333 331.249 8.44 331.155 9.48C331.062 10.52 330.902 11.6933 330.675 13L328.995 12.82C329.235 11.5933 329.402 10.4667 329.495 9.44C329.602 8.41333 329.662 7.46667 329.675 6.6C329.702 5.73333 329.715 4.93333 329.715 4.2V2.38ZM348.754 0.479999H350.414V13.68H348.754V0.479999ZM338.794 16.8H350.974V18.16H338.794V16.8ZM338.794 12.34H340.454V17.26H338.794V12.34ZM340.714 1.74C341.62 1.74 342.427 1.92667 343.134 2.3C343.84 2.67333 344.4 3.2 344.814 3.88C345.227 4.54667 345.434 5.31333 345.434 6.18C345.434 7.04667 345.227 7.82 344.814 8.5C344.4 9.16667 343.84 9.69333 343.134 10.08C342.427 10.4533 341.62 10.64 340.714 10.64C339.82 10.64 339.014 10.4533 338.294 10.08C337.587 9.69333 337.027 9.16667 336.614 8.5C336.2 7.82 335.994 7.04667 335.994 6.18C335.994 5.31333 336.2 4.54667 336.614 3.88C337.027 3.2 337.587 2.67333 338.294 2.3C339.014 1.92667 339.82 1.74 340.714 1.74ZM340.714 3.18C340.127 3.18 339.6 3.30667 339.134 3.56C338.667 3.81333 338.294 4.16667 338.014 4.62C337.747 5.07333 337.614 5.59333 337.614 6.18C337.614 6.78 337.747 7.30667 338.014 7.76C338.294 8.2 338.667 8.54667 339.134 8.8C339.6 9.05333 340.127 9.18 340.714 9.18C341.3 9.18 341.827 9.05333 342.294 8.8C342.774 8.54667 343.147 8.2 343.414 7.76C343.68 7.30667 343.814 6.78 343.814 6.18C343.814 5.59333 343.68 5.07333 343.414 4.62C343.147 4.16667 342.774 3.81333 342.294 3.56C341.827 3.30667 341.3 3.18 340.714 3.18Z"
            fill="#202123"
          />
        </svg>
        <InputWrapper
          onChange={EmailChange}
          value={Email}
          key="id"
          placeholder="이메일"
          className={!ValidEmail && "invalidinput"}
        />
        {!ValidEmail && (
          <WarningText>
            {Email.length === 0
              ? "이메일을 입력해 주세요."
              : "유효하지 않은 이메일입니다."}
          </WarningText>
        )}
        <InputWrapper
          type="password"
          onChange={PasswordChange}
          value={Password}
          key="password"
          placeholder="비밀번호 (영문+숫자+특수문자 8자 이상)"
          className={!ValidPassword && "invalidinput"}
        ></InputWrapper>
        {!ValidPassword && (
          <WarningText>
            {Password.length === 0
              ? "비밀번호를 입력해 주세요."
              : `영문, 숫자, 특수문자를 조합한 8자 이상, 20자 이하의 비밀번호를 입력해주세요.`}
          </WarningText>
        )}
        <SaveWrapper>
          <CheckBox
            index="EmailSave"
            state={EmailSave}
            onChange={() => SetEmailSave((EmailSave) => !EmailSave)}
            label="이메일 저장하기"
          />
          <FindLink>
            <span
              onClick={() => {
                navigate("/login/findemail");
              }}
              style={{ cursor: "grab" }}
            >
              아이디
            </span>{" "}
            /{" "}
            <span
              onClick={() => {
                navigate("/login/resetpw");
              }}
              style={{ cursor: "grab" }}
            >
              비밀번호 찾기
            </span>
          </FindLink>
        </SaveWrapper>
        <LoginButton
          onClick={HandleLoginRequest}
          style={{ marginTop: `0`, marginBottom: `${18 / 19.2}vw` }}
        >
          로그인
        </LoginButton>
      </EmailWrapper>
      <ExtraWrapper>
        <ExtraButton
          onClick={() => {
            navigate("/register/");
          }}
        >
          회원가입
        </ExtraButton>
        <ExtraButton
          onClick={() => {
            navigate("/guest");
          }}
        >
          비회원 주문 조회
        </ExtraButton>
      </ExtraWrapper>
    </LoginWrapper>
  );
};

export default LoginPage;
